<?php
/**
 * REST API for the Admin Panel, mirroring the original Node/Express routes
 * (see admin/server.js) so the existing frontend (admin.js) works unchanged.
 *
 * Routing: GET ?action=products, POST/PUT/DELETE with the same shape.
 * The frontend originally called clean paths like /api/products — this
 * router is invoked via api.php?path=/api/products (rewritten in .htaccess)
 * so no frontend changes are needed.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/data.php';
require_once __DIR__ . '/auth.php';

header('Content-Type: application/json; charset=utf-8');
// Admin API responses must never be cached by the browser or an
// intermediary (e.g. Cloudflare, which fronts this site) — without this,
// a GET right after a PUT can be served a stale cached copy, making a
// just-saved edit appear to have reverted when the editor re-fetches it.
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
require_login_api();

function read_json_body() {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function send($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function send_error($message, $status = 500) {
    send(['error' => $message], $status);
}

/** [filesystem dir, web path] for a product's media; kind "desc" = description/editor images. */
function product_media_dir($id, $kind) {
    $id = preg_replace('/[^a-z0-9_-]/i', '', (string) $id);
    if ($id === '') send_error('Invalid product id.', 400);
    if ($kind === 'desc') return [ROOT_DIR . '/assets/descriptions/' . $id, "assets/descriptions/$id"];
    return [PRODUCTS_ASSETS_DIR . '/' . $id, "assets/products/$id"];
}

/**
 * Downloads an image from a public http(s) URL. Refuses private/internal
 * addresses (re-checked on every redirect), non-images and oversized files.
 * Returns [bytes, extension, filename hint].
 */
function fetch_remote_image($url) {
    $types = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp', 'image/gif' => 'gif', 'image/avif' => 'avif'];
    for ($hop = 0; $hop < 4; $hop++) {
        $parts = parse_url($url);
        $scheme = strtolower($parts['scheme'] ?? '');
        $host = $parts['host'] ?? '';
        if (!in_array($scheme, ['http', 'https'], true) || $host === '') send_error('Please paste a full http(s):// image link.', 400);
        $ips = gethostbynamel($host) ?: [];
        if (!$ips) send_error('Could not reach that address.', 400);
        foreach ($ips as $ip) {
            if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) send_error('That address is not allowed.', 400);
        }
        $ch = curl_init($url);
        $data = '';
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => false,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS,
            CURLOPT_RESOLVE => [$host . ':' . ($parts['port'] ?? ($scheme === 'https' ? 443 : 80)) . ':' . $ips[0]],
            CURLOPT_CONNECTTIMEOUT => 8,
            CURLOPT_TIMEOUT => 25,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (TrustedPeptide admin image import)',
            CURLOPT_WRITEFUNCTION => function ($ch, $chunk) use (&$data) {
                $data .= $chunk;
                return strlen($data) > MAX_UPLOAD_BYTES ? 0 : strlen($chunk); // abort when too big
            },
        ]);
        curl_exec($ch);
        $status = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $location = curl_getinfo($ch, CURLINFO_REDIRECT_URL);
        $err = curl_errno($ch);
        curl_close($ch);
        if ($status >= 300 && $status < 400 && $location) { $url = $location; continue; }
        if (strlen($data) > MAX_UPLOAD_BYTES) send_error('Image is too large.', 400);
        if ($err || $status !== 200 || $data === '') send_error('Could not download the image (HTTP ' . $status . ').', 400);
        $info = @getimagesizefromstring($data);
        $mime = $info['mime'] ?? '';
        if (!isset($types[$mime])) send_error('That link is not a supported image (JPG, PNG, WebP, GIF, AVIF).', 400);
        $hint = pathinfo(parse_url($url, PHP_URL_PATH) ?? '', PATHINFO_FILENAME);
        return [$data, $types[$mime], $hint];
    }
    send_error('Too many redirects.', 400);
}

// Path comes from the rewritten URL, e.g. /api/products/bpc-157/upload
$path = $_GET['path'] ?? '';
$path = '/' . trim($path, '/');
$segments = array_values(array_filter(explode('/', $path), fn($s) => $s !== ''));
// $segments example for /api/products/bpc-157/upload -> ["api","products","bpc-157","upload"]

$method = $_SERVER['REQUEST_METHOD'];

try {
    // ---------- /api/products ----------
    if ($segments === ['api', 'products'] && $method === 'GET') {
        send(load_products());
    }

    if ($segments === ['api', 'products'] && $method === 'POST') {
        $products = load_products();
        $incoming = read_json_body();
        if (empty($incoming['id'])) $incoming['id'] = slugify($incoming['name'] ?? 'product');
        if ($incoming['id'] === '') $incoming['id'] = 'product-' . round(microtime(true) * 1000);
        foreach ($products as $p) {
            if ($p['id'] === $incoming['id']) send_error('A product with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $products[] = normalize_product($incoming);
        save_products($products);
        @mkdir(PRODUCTS_ASSETS_DIR . '/' . $incoming['id'], 0755, true);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products' && $method === 'PUT') {
        $id = urldecode($segments[2]);
        $products = load_products();
        $idx = null;
        foreach ($products as $i => $p) if ($p['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Product not found.', 404);
        $incoming = read_json_body();
        $mutual = !empty($incoming['promotedMutual']);
        unset($incoming['promotedMutual']);
        // The editor always sends the full list, so an empty list clears it.
        $merged = array_merge($products[$idx], $incoming, ['id' => $id]);
        if (array_key_exists('promoted', $incoming) && empty($incoming['promoted'])) unset($merged['promoted']);
        $products[$idx] = normalize_product($merged);

        // "Link both ways": add this product to each promoted product's own list.
        $touched = [$id];
        if ($mutual && !empty($products[$idx]['promoted'])) {
            foreach ($products as $i => $p) {
                if (!in_array($p['id'], $products[$idx]['promoted'], true)) continue;
                $list = $p['promoted'] ?? [];
                if (in_array($id, $list, true)) continue;
                $list[] = $id;
                $p['promoted'] = $list;
                $products[$i] = normalize_product($p);
                $touched[] = $p['id'];
            }
        }
        save_products($products);

        // Keep the Arabic catalog's featured/best-seller/promoted fields in
        // step with English, so /ar pages update without re-saving translations.
        $byId = [];
        foreach ($products as $p) $byId[$p['id']] = $p;
        $productsAr = load_products_ar();
        $arChanged = false;
        foreach ($productsAr as $i => $pa) {
            if (!in_array($pa['id'], $touched, true) || !isset($byId[$pa['id']])) continue;
            $en = $byId[$pa['id']];
            unset($pa['featured'], $pa['bestSeller'], $pa['promoted']);
            if (!empty($en['featured'])) $pa['featured'] = true;
            if (!empty($en['bestSeller'])) $pa['bestSeller'] = true;
            if (!empty($en['promoted'])) $pa['promoted'] = $en['promoted'];
            $productsAr[$i] = $pa;
            $arChanged = true;
        }
        if ($arChanged) save_products_ar($productsAr);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products' && $method === 'DELETE') {
        $id = urldecode($segments[2]);
        $products = load_products();
        $filtered = array_values(array_filter($products, fn($p) => $p['id'] !== $id));
        save_products($filtered);
        send(['ok' => true]);
    }

    // ---------- /api/products-ar/:id ---------- (Arabic translation, keyed to an existing English product id — no separate create/delete, since an Arabic entry only exists for a product that exists in English)
    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products-ar' && $method === 'GET') {
        $id = urldecode($segments[2]);
        $productsAr = load_products_ar();
        foreach ($productsAr as $p) {
            if ($p['id'] === $id) send($p);
        }
        send(['id' => $id, 'name' => '', 'shortDescription' => '', 'composition' => [], 'uses' => []]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products-ar' && $method === 'PUT') {
        $id = urldecode($segments[2]);
        $englishProduct = null;
        foreach (load_products() as $p) {
            if ($p['id'] === $id) { $englishProduct = $p; break; }
        }
        if (!$englishProduct) send_error('Product not found.', 404);
        $incoming = read_json_body();
        $productsAr = load_products_ar();
        $idx = null;
        foreach ($productsAr as $i => $p) if ($p['id'] === $id) { $idx = $i; break; }
        $normalized = normalize_product_ar($incoming, $englishProduct);
        if ($idx === null) {
            $productsAr[] = $normalized;
        } else {
            $productsAr[$idx] = $normalized;
        }
        save_products_ar($productsAr);
        send(['ok' => true]);
    }

    // ---------- /api/categories ----------
    if ($segments === ['api', 'categories'] && $method === 'GET') {
        send(load_categories());
    }

    if ($segments === ['api', 'categories'] && $method === 'POST') {
        $body = read_json_body();
        $name = trim($body['name'] ?? '');
        if ($name === '') send_error('Category name is required.', 400);
        $data = load_products_and_categories();
        if (in_array($name, $data['categoryList'], true)) send_error('Category "' . $name . '" already exists.', 400);
        $updated = array_merge($data['categoryList'], [$name]);
        save_products_data($data['products'], $updated);
        send(['ok' => true, 'categories' => $updated]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'categories' && $method === 'PUT') {
        $oldName = urldecode($segments[2]);
        $body = read_json_body();
        $newName = trim($body['name'] ?? '');
        if ($newName === '') send_error('New category name is required.', 400);
        $data = load_products_and_categories();
        if (!in_array($oldName, $data['categoryList'], true)) send_error('Category "' . $oldName . '" not found.', 404);
        if ($newName !== $oldName && in_array($newName, $data['categoryList'], true)) {
            send_error('Category "' . $newName . '" already exists.', 400);
        }
        // Renaming a parent also renames its sub-categories ("Parent › Child").
        $subPrefix = $oldName . ' › ';
        $rename = function ($c) use ($oldName, $newName, $subPrefix) {
            if ($c === $oldName) return $newName;
            if (strpos((string) $c, $subPrefix) === 0) return $newName . ' › ' . substr($c, strlen($subPrefix));
            return $c;
        };
        $updatedList = array_map($rename, $data['categoryList']);
        $updatedProducts = array_map(function ($p) use ($rename) {
            $hadCategories = !empty($p['categories']) && is_array($p['categories']);
            $nextCategory = $rename($p['category']);
            if ($hadCategories) {
                $p['categories'] = array_map($rename, $p['categories']);
            }
            $p['category'] = $nextCategory;
            return $p;
        }, $data['products']);
        save_products_data($updatedProducts, $updatedList);
        $productsUpdated = count(array_filter($updatedProducts, function ($p) use ($newName) {
            return $p['category'] === $newName || (!empty($p['categories']) && in_array($newName, $p['categories'], true));
        }));
        send(['ok' => true, 'categories' => $updatedList, 'productsUpdated' => $productsUpdated]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'categories' && $method === 'DELETE') {
        $name = urldecode($segments[2]);
        $data = load_products_and_categories();
        $inUse = count(array_filter($data['products'], function ($p) use ($name) {
            return $p['category'] === $name || (!empty($p['categories']) && in_array($name, $p['categories'], true));
        }));
        if ($inUse > 0) send_error('"' . $name . '" is used by ' . $inUse . ' product(s). Reassign or delete those products first.', 400);
        $updated = array_values(array_filter($data['categoryList'], fn($c) => $c !== $name));
        save_products_data($data['products'], $updated);
        send(['ok' => true, 'categories' => $updated]);
    }

    // ---------- /api/theme-settings ----------
    if ($segments === ['api', 'theme-settings'] && $method === 'GET') {
        send(load_theme_settings());
    }

    if ($segments === ['api', 'theme-settings'] && $method === 'PUT') {
        $body = read_json_body();
        $settings = normalize_theme_settings($body);
        save_theme_settings($settings);
        send(['ok' => true] + $settings);
    }

    // ---------- /api/category-tile-labels ----------
    if ($segments === ['api', 'category-tile-labels'] && $method === 'GET') {
        send(load_category_tile_labels());
    }

    if ($segments === ['api', 'category-tile-labels'] && $method === 'PUT') {
        $body = read_json_body();
        $labels = normalize_category_tile_labels($body);
        save_category_tile_labels($labels);
        send(['ok' => true, 'labels' => $labels]);
    }

    // ---------- /api/category-labels-ar ----------
    if ($segments === ['api', 'category-labels-ar'] && $method === 'GET') {
        send(load_category_labels_ar());
    }

    if ($segments === ['api', 'category-labels-ar'] && $method === 'PUT') {
        $body = read_json_body();
        $labels = normalize_category_labels_ar($body);
        save_category_labels_ar($labels);
        send(['ok' => true, 'labels' => $labels]);
    }

    // ---------- /api/products/:id/upload ----------
    // kind=desc (description/editor images) → assets/descriptions/<id>/,
    // otherwise product photos → assets/products/<id>/.
    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'upload' && $method === 'POST') {
        [$dir, $webDir] = product_media_dir(urldecode($segments[2]), $_POST['kind'] ?? '');
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        $allowedExt = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'mp4', 'webm', 'mov'];
        if (!in_array($ext, $allowedExt, true)) send_error('Unsupported file type.', 400);
        @mkdir($dir, 0755, true);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . '.' . $ext;
        move_uploaded_file($file['tmp_name'], $dir . '/' . $filename);
        send(['ok' => true, 'path' => "$webDir/$filename"]);
    }

    // ---------- /api/products/:id/upload-url ----------
    // Downloads an image from a public URL onto this server (so the site
    // never hot-links someone else's image). Body: { url, kind }.
    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'upload-url' && $method === 'POST') {
        $body = read_json_body();
        [$dir, $webDir] = product_media_dir(urldecode($segments[2]), $body['kind'] ?? '');
        [$bytes, $ext, $nameHint] = fetch_remote_image(trim((string) ($body['url'] ?? '')));
        @mkdir($dir, 0755, true);
        $base = slugify($nameHint) ?: 'image';
        $filename = substr($base, 0, 60) . '-' . round(microtime(true) * 1000) . '.' . $ext;
        file_put_contents($dir . '/' . $filename, $bytes);
        send(['ok' => true, 'path' => "$webDir/$filename"]);
    }

    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'files' && $method === 'GET') {
        $id = urldecode($segments[2]);
        $dir = PRODUCTS_ASSETS_DIR . '/' . $id;
        if (!is_dir($dir)) send([]);
        $files = array_values(array_diff(scandir($dir), ['.', '..']));
        send(array_map(fn($f) => "assets/products/$id/$f", $files));
    }

    if (count($segments) === 5 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'files' && $method === 'DELETE') {
        $id = urldecode($segments[2]);
        $filename = urldecode($segments[4]);
        $filePath = PRODUCTS_ASSETS_DIR . '/' . $id . '/' . basename($filename);
        if (file_exists($filePath)) @unlink($filePath);
        send(['ok' => true]);
    }

    // ---------- /api/peptide-topics ----------
    if ($segments === ['api', 'peptide-topics'] && $method === 'GET') {
        send(load_peptide_topics());
    }

    if ($segments === ['api', 'peptide-topics'] && $method === 'POST') {
        $topics = load_peptide_topics();
        $incoming = read_json_body();
        if (empty($incoming['id'])) $incoming['id'] = slugify($incoming['title'] ?? 'topic');
        if ($incoming['id'] === '') $incoming['id'] = 'topic-' . round(microtime(true) * 1000);
        foreach ($topics as $t) {
            if ($t['id'] === $incoming['id']) send_error('A topic with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $topics[] = normalize_peptide_topic($incoming);
        save_peptide_topics($topics);
        @mkdir(PEPTIDE_TOPICS_ASSETS_DIR . '/' . $incoming['id'], 0755, true);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'peptide-topics' && $method === 'PUT') {
        $id = urldecode($segments[2]);
        $topics = load_peptide_topics();
        $idx = null;
        foreach ($topics as $i => $t) if ($t['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Topic not found.', 404);
        $incoming = read_json_body();
        $topics[$idx] = normalize_peptide_topic(array_merge($topics[$idx], $incoming, ['id' => $id]));
        save_peptide_topics($topics);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'peptide-topics' && $method === 'DELETE') {
        $id = urldecode($segments[2]);
        $topics = load_peptide_topics();
        $filtered = array_values(array_filter($topics, fn($t) => $t['id'] !== $id));
        save_peptide_topics($filtered);
        send(['ok' => true]);
    }

    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'peptide-topics' && $segments[3] === 'upload' && $method === 'POST') {
        $id = urldecode($segments[2]);
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $dir = PEPTIDE_TOPICS_ASSETS_DIR . '/' . $id;
        @mkdir($dir, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . ($ext ? '.' . $ext : '');
        move_uploaded_file($file['tmp_name'], $dir . '/' . $filename);
        send(['ok' => true, 'path' => "assets/peptide-guide/$id/$filename"]);
    }

    // ---------- /api/blog-posts ----------
    if ($segments === ['api', 'blog-posts'] && $method === 'GET') {
        send(load_blog_posts());
    }

    if ($segments === ['api', 'blog-posts'] && $method === 'POST') {
        $posts = load_blog_posts();
        $incoming = read_json_body();
        if (empty($incoming['id'])) $incoming['id'] = slugify($incoming['title'] ?? 'post');
        if ($incoming['id'] === '') $incoming['id'] = 'post-' . round(microtime(true) * 1000);
        foreach ($posts as $p) {
            if ($p['id'] === $incoming['id']) send_error('A post with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $posts[] = normalize_blog_post($incoming);
        save_blog_posts($posts);
        @mkdir(BLOG_ASSETS_DIR . '/' . $incoming['id'], 0755, true);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'blog-posts' && $method === 'PUT') {
        $id = urldecode($segments[2]);
        $posts = load_blog_posts();
        $idx = null;
        foreach ($posts as $i => $p) if ($p['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Post not found.', 404);
        $incoming = read_json_body();
        $posts[$idx] = normalize_blog_post(array_merge($posts[$idx], $incoming, ['id' => $id]));
        save_blog_posts($posts);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'blog-posts' && $method === 'DELETE') {
        $id = urldecode($segments[2]);
        $posts = load_blog_posts();
        $filtered = array_values(array_filter($posts, fn($p) => $p['id'] !== $id));
        save_blog_posts($filtered);
        send(['ok' => true]);
    }

    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'blog-posts' && $segments[3] === 'upload' && $method === 'POST') {
        $id = urldecode($segments[2]);
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $dir = BLOG_ASSETS_DIR . '/' . $id;
        @mkdir($dir, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . ($ext ? '.' . $ext : '');
        move_uploaded_file($file['tmp_name'], $dir . '/' . $filename);
        send(['ok' => true, 'path' => "assets/blog/$id/$filename"]);
    }

    // ---------- /api/gallery ----------
    if ($segments === ['api', 'gallery'] && $method === 'GET') {
        send(load_gallery_items());
    }

    if ($segments === ['api', 'gallery'] && $method === 'POST') {
        $items = load_gallery_items();
        $incoming = read_json_body();
        if (empty($incoming['id'])) $incoming['id'] = slugify($incoming['caption'] ?? 'gallery-item');
        if ($incoming['id'] === '') $incoming['id'] = 'gallery-' . round(microtime(true) * 1000);
        foreach ($items as $g) {
            if ($g['id'] === $incoming['id']) send_error('A gallery item with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $items[] = normalize_gallery_item($incoming);
        save_gallery_items($items);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    // Checked before the /:id PUT route below since both are 3-segment PUTs.
    if ($segments === ['api', 'gallery', 'reorder'] && $method === 'PUT') {
        $body = read_json_body();
        $order = is_array($body['order'] ?? null) ? $body['order'] : [];
        $items = load_gallery_items();
        $byId = [];
        foreach ($items as $g) $byId[$g['id']] = $g;
        $reordered = [];
        foreach ($order as $id) {
            if (isset($byId[$id])) { $reordered[] = $byId[$id]; unset($byId[$id]); }
        }
        foreach ($items as $g) if (isset($byId[$g['id']])) $reordered[] = $g;
        save_gallery_items($reordered);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'gallery' && $method === 'PUT') {
        $id = urldecode($segments[2]);
        $items = load_gallery_items();
        $idx = null;
        foreach ($items as $i => $g) if ($g['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Gallery item not found.', 404);
        $incoming = read_json_body();
        $items[$idx] = normalize_gallery_item(array_merge($items[$idx], $incoming, ['id' => $id]));
        save_gallery_items($items);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'gallery' && $method === 'DELETE') {
        $id = urldecode($segments[2]);
        $items = load_gallery_items();
        $filtered = array_values(array_filter($items, fn($g) => $g['id'] !== $id));
        save_gallery_items($filtered);
        send(['ok' => true]);
    }

    if ($segments === ['api', 'gallery', 'upload'] && $method === 'POST') {
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime'];
        if (!in_array($file['type'], $allowed, true)) send_error('Unsupported file type.', 400);
        @mkdir(GALLERY_ASSETS_DIR, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . ($ext ? '.' . $ext : '');
        move_uploaded_file($file['tmp_name'], GALLERY_ASSETS_DIR . '/' . $filename);
        send(['ok' => true, 'path' => "assets/gallery/$filename"]);
    }

    send_error('Not found.', 404);
} catch (Throwable $e) {
    send_error($e->getMessage(), 500);
}
