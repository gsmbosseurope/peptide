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
        foreach ($products as $p) {
            if ($p['id'] === $incoming['id']) send_error('A product with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $products[] = normalize_product($incoming);
        save_products($products);
        @mkdir(PRODUCTS_ASSETS_DIR . '/' . $incoming['id'], 0755, true);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products' && $method === 'PUT') {
        $id = $segments[2];
        $products = load_products();
        $idx = null;
        foreach ($products as $i => $p) if ($p['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Product not found.', 404);
        $incoming = read_json_body();
        $products[$idx] = normalize_product(array_merge($products[$idx], $incoming, ['id' => $id]));
        save_products($products);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'products' && $method === 'DELETE') {
        $id = $segments[2];
        $products = load_products();
        $filtered = array_values(array_filter($products, fn($p) => $p['id'] !== $id));
        save_products($filtered);
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
        $updatedList = array_map(fn($c) => $c === $oldName ? $newName : $c, $data['categoryList']);
        $updatedProducts = array_map(function ($p) use ($oldName, $newName) {
            $hadCategories = !empty($p['categories']) && is_array($p['categories']);
            $nextCategory = $p['category'] === $oldName ? $newName : $p['category'];
            if ($hadCategories) {
                $p['categories'] = array_map(fn($c) => $c === $oldName ? $newName : $c, $p['categories']);
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

    // ---------- /api/products/:id/upload ----------
    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'upload' && $method === 'POST') {
        $id = $segments[2];
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $dir = PRODUCTS_ASSETS_DIR . '/' . $id;
        @mkdir($dir, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . ($ext ? '.' . $ext : '');
        move_uploaded_file($file['tmp_name'], $dir . '/' . $filename);
        send(['ok' => true, 'path' => "assets/products/$id/$filename"]);
    }

    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'files' && $method === 'GET') {
        $id = $segments[2];
        $dir = PRODUCTS_ASSETS_DIR . '/' . $id;
        if (!is_dir($dir)) send([]);
        $files = array_values(array_diff(scandir($dir), ['.', '..']));
        send(array_map(fn($f) => "assets/products/$id/$f", $files));
    }

    if (count($segments) === 5 && $segments[0] === 'api' && $segments[1] === 'products' && $segments[3] === 'files' && $method === 'DELETE') {
        $id = $segments[2];
        $filename = $segments[4];
        $filePath = PRODUCTS_ASSETS_DIR . '/' . $id . '/' . basename($filename);
        if (file_exists($filePath)) @unlink($filePath);
        send(['ok' => true]);
    }

    // ---------- /api/guides ----------
    if ($segments === ['api', 'guides'] && $method === 'GET') {
        send(load_guides());
    }

    if ($segments === ['api', 'guides'] && $method === 'POST') {
        $guides = load_guides();
        $incoming = read_json_body();
        if (empty($incoming['id'])) $incoming['id'] = slugify($incoming['title'] ?? 'guide');
        foreach ($guides as $g) {
            if ($g['id'] === $incoming['id']) send_error('A guide with id "' . $incoming['id'] . '" already exists.', 400);
        }
        $guides[] = normalize_guide($incoming);
        save_guides($guides);
        @mkdir(GUIDES_ASSETS_DIR . '/' . $incoming['id'], 0755, true);
        send(['ok' => true, 'id' => $incoming['id']]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'guides' && $method === 'PUT') {
        $id = $segments[2];
        $guides = load_guides();
        $idx = null;
        foreach ($guides as $i => $g) if ($g['id'] === $id) { $idx = $i; break; }
        if ($idx === null) send_error('Guide not found.', 404);
        $incoming = read_json_body();
        $guides[$idx] = normalize_guide(array_merge($guides[$idx], $incoming, ['id' => $id]));
        save_guides($guides);
        send(['ok' => true]);
    }

    if (count($segments) === 3 && $segments[0] === 'api' && $segments[1] === 'guides' && $method === 'DELETE') {
        $id = $segments[2];
        $guides = load_guides();
        $filtered = array_values(array_filter($guides, fn($g) => $g['id'] !== $id));
        save_guides($filtered);
        send(['ok' => true]);
    }

    if (count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'guides' && $segments[3] === 'upload' && $method === 'POST') {
        $id = $segments[2];
        if (empty($_FILES['file'])) send_error('No file uploaded.', 400);
        $file = $_FILES['file'];
        if ($file['error'] !== UPLOAD_ERR_OK) send_error('Upload failed.', 400);
        if ($file['size'] > MAX_UPLOAD_BYTES) send_error('File too large.', 400);
        $dir = GUIDES_ASSETS_DIR . '/' . $id;
        @mkdir($dir, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $base = slugify(pathinfo($file['name'], PATHINFO_FILENAME)) ?: 'file';
        $filename = $base . '-' . round(microtime(true) * 1000) . ($ext ? '.' . $ext : '');
        move_uploaded_file($file['tmp_name'], $dir . '/' . $filename);
        send(['ok' => true, 'path' => "assets/guides/$id/$filename"]);
    }

    send_error('Not found.', 404);
} catch (Throwable $e) {
    send_error($e->getMessage(), 500);
}
