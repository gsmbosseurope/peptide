<?php
/**
 * Reads/writes the site's data files, e.g. ../js/products-data.js. These
 * are plain JS files containing `const CATEGORY_LIST = [...]; const
 * PRODUCTS = [...];`, parsed here as JSON since every value in them is
 * JSON-compatible (the admin panel always writes valid JSON literals).
 */

require_once __DIR__ . '/config.php';

function slugify($str) {
    $str = strtolower(trim($str));
    $str = preg_replace('/[^a-z0-9]+/', '-', $str);
    return trim($str, '-');
}

/** Extract the JSON array/object literal assigned to `const $name = ...;` in $code. */
function extract_const_json($code, $name) {
    if (!preg_match('/const\s+' . preg_quote($name, '/') . '\s*=\s*/', $code, $m, PREG_OFFSET_CAPTURE)) {
        return null;
    }
    $start = $m[0][1] + strlen($m[0][0]);
    // Walk forward from $start, balancing brackets/braces and skipping over
    // strings, to find the end of the JSON literal (the first top-level ';').
    $depth = 0;
    $inString = false;
    $stringChar = '';
    $escaped = false;
    $len = strlen($code);
    $end = -1;
    for ($i = $start; $i < $len; $i++) {
        $ch = $code[$i];
        if ($inString) {
            if ($escaped) {
                $escaped = false;
            } elseif ($ch === '\\') {
                $escaped = true;
            } elseif ($ch === $stringChar) {
                $inString = false;
            }
            continue;
        }
        if ($ch === '"' || $ch === "'") {
            $inString = true;
            $stringChar = $ch;
            continue;
        }
        if ($ch === '[' || $ch === '{') {
            $depth++;
        } elseif ($ch === ']' || $ch === '}') {
            $depth--;
            if ($depth === 0) {
                $end = $i + 1;
                break;
            }
        }
    }
    if ($end === -1) return null;
    $jsonLiteral = substr($code, $start, $end - $start);
    return json_decode($jsonLiteral, true);
}

/* ---------- Products + categories ---------- */

function load_products_and_categories() {
    if (!file_exists(DATA_FILE)) {
        return ['products' => [], 'categoryList' => []];
    }
    $code = file_get_contents(DATA_FILE);
    $products = extract_const_json($code, 'PRODUCTS') ?: [];
    $categoryList = extract_const_json($code, 'CATEGORY_LIST');
    if ($categoryList === null) {
        // Back-compat: derive once from products if this file predates CATEGORY_LIST.
        $set = [];
        foreach ($products as $p) {
            if (!empty($p['category'])) $set[$p['category']] = true;
        }
        $categoryList = array_keys($set);
        sort($categoryList);
    }
    return ['products' => $products, 'categoryList' => $categoryList];
}

function load_products() {
    return load_products_and_categories()['products'];
}

function load_categories() {
    return load_products_and_categories()['categoryList'];
}

function json_pretty($value) {
    return json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

function serialize_products_data($products, $categoryList) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — Product Catalog
 * ------------------------------------------------------------
 * This file is managed by the Admin Panel (/admin). You can still
 * edit it by hand if you prefer — just keep the same object shape.
 *
 * Field reference:
 *   id                 unique slug, used in URLs: product.html?id=...
 *   name               display name
 *   category           primary category, must match a name in CATEGORY_LIST below
 *   categories         optional array of extra category names, for products that
 *                      belong to more than one section (include the primary one too)
 *   purity             e.g. "99.9%" — shown as a lab badge
 *   showPurity         true/false — whether the purity badge is displayed on the site
 *   shortDescription   1-2 lines, shown on catalog cards
 *   composition        array of strings — ingredient / formulation bullets
 *   uses                array of strings — indication / use-case bullets
 *   images             array of image paths, first is the primary/cover image
 *   video              path or embed URL to an explainer video (optional)
 *   variants           array of { size, price } — price is EUR per unit at that size
 *   wholesaleTiers     array of { minQty, discountPercent }, evaluated to find
 *                      the highest qualifying tier for a given quantity
 *
 * CATEGORY_LIST is the managed list of top-level category names shown as
 * filter chips (products.html) and category cards (about.html). Edit it via
 * the Admin Panel's Categories tab — renaming a category there updates every
 * product that used the old name. A category can exist here with zero
 * products assigned yet (e.g. while you're preparing a new section).
 */


HEADER;
    $body = "const CATEGORY_LIST = " . json_pretty($categoryList) . ";\n\n"
        . "const PRODUCTS = " . json_pretty($products) . ";\n\n"
        . "// Back-compat alias — some code may still reference PRODUCT_CATEGORIES.\n"
        . "const PRODUCT_CATEGORIES = CATEGORY_LIST;\n";
    return $header . $body;
}

function save_products_data($products, $categoryList) {
    file_put_contents(DATA_FILE, serialize_products_data($products, $categoryList));
}

function save_products($products) {
    save_products_data($products, load_categories());
}

function normalize_product($p) {
    $toLines = function ($val) {
        if (is_array($val)) {
            return array_values(array_filter($val, fn($v) => $v !== '' && $v !== null));
        }
        $lines = preg_split('/\r\n|\r|\n/', (string) $val);
        $lines = array_map('trim', $lines);
        return array_values(array_filter($lines, fn($v) => $v !== ''));
    };
    // shortDescription is admin-authored rich HTML from the Quill editor
    // (like Blog's bodyHtml) — same defensive <script> strip plus removal
    // of Quill's empty <p><br></p> separator paragraphs, so spacing is
    // controlled by CSS rather than blank paragraphs left in the content.
    $stripScripts = function ($html) {
        return preg_replace('#<script\b[^>]*>.*?</script>#is', '', (string) $html);
    };
    $stripEmptyParagraphs = function ($html) {
        $html = (string) $html;
        return preg_replace('#<p>(?:\s|&nbsp;|<br\s*/?>)*</p>#i', '', $html);
    };

    $categories = isset($p['categories']) && is_array($p['categories'])
        ? array_values(array_filter($p['categories'], fn($v) => $v !== '' && $v !== null))
        : [];

    $out = [
        'id' => $p['id'] ?? '',
        'name' => $p['name'] ?? '',
        'category' => $p['category'] ?: ($categories[0] ?? ''),
    ];
    if (count($categories) > 1) $out['categories'] = $categories;
    $out['purity'] = $p['purity'] ?? '';
    $out['showPurity'] = ($p['showPurity'] ?? true) !== false;
    $out['shortDescription'] = $stripEmptyParagraphs($stripScripts($p['shortDescription'] ?? ''));
    $out['composition'] = $toLines($p['composition'] ?? []);
    $out['uses'] = $toLines($p['uses'] ?? []);
    $out['images'] = isset($p['images']) && is_array($p['images'])
        ? array_values(array_filter($p['images'], fn($v) => $v !== '' && $v !== null))
        : [];
    $out['video'] = $p['video'] ?? '';
    $out['variants'] = isset($p['variants']) && is_array($p['variants'])
        ? array_map(fn($v) => ['size' => $v['size'] ?? '', 'price' => (float) ($v['price'] ?? 0)], $p['variants'])
        : [];
    $out['wholesaleTiers'] = isset($p['wholesaleTiers']) && is_array($p['wholesaleTiers'])
        ? array_map(fn($t) => ['minQty' => (int) ($t['minQty'] ?? 0), 'discountPercent' => (float) ($t['discountPercent'] ?? 0)], $p['wholesaleTiers'])
        : [];
    return $out;
}

/* ---------- Arabic product translations (js/products-data-ar.js) ---------- */
//
// One entry per English product id. Only the translatable fields
// (name/shortDescription/composition/uses) are admin-managed here —
// category/categories/images/video/variants/wholesaleTiers are always
// copied through from the English product at save time (never edited in
// Arabic), so the two catalogs can never drift apart on data that
// js/catalog.js and pricing.js rely on for filtering/pricing/lookups.

function load_products_ar() {
    if (!file_exists(DATA_FILE_AR)) return [];
    $code = file_get_contents(DATA_FILE_AR);
    return extract_const_json($code, 'PRODUCTS') ?: [];
}

function serialize_products_data_ar($productsAr, $categoryList) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — كتالوج المنتجات (النسخة العربية)
 * ------------------------------------------------------------
 * هذا الملف يُدار من لوحة التحكم (/admin-php)، قسم "Arabic Translation" في
 * محرر المنتج. category/categories/images/video/variants/wholesaleTiers
 * تبقى دائماً مطابقة لملف products-data.js الإنجليزي (تُنسخ تلقائياً عند
 * الحفظ) — لا تُعدّل هنا يدوياً، لأن js/catalog.js يستخدم النصوص الإنجليزية
 * كمفاتيح بحث عن الأيقونات والفلاتر. الترجمة العربية لأسماء الفئات المعروضة
 * موجودة بدلاً من ذلك في js/category-labels-ar.js.
 *
 * مرجع الحقول المُترجمة: name, shortDescription, composition, uses
 */


HEADER;
    $body = "const CATEGORY_LIST = " . json_pretty($categoryList) . ";\n\n"
        . "const PRODUCTS = " . json_pretty($productsAr) . ";\n\n"
        . "// اسم بديل للتوافق مع الإصدارات السابقة — قد تعتمد بعض الأكواد على PRODUCT_CATEGORIES.\n"
        . "const PRODUCT_CATEGORIES = CATEGORY_LIST;\n";
    return $header . $body;
}

function save_products_ar($productsAr) {
    file_put_contents(DATA_FILE_AR, serialize_products_data_ar($productsAr, load_categories()));
}

/**
 * Merges Arabic-editable fields onto the current English product's
 * non-translatable fields, so the Arabic record can never carry a stale
 * category/image/price after the English product changes.
 */
function normalize_product_ar($incomingAr, $englishProduct) {
    $toLines = function ($val) {
        if (is_array($val)) {
            return array_values(array_filter($val, fn($v) => $v !== '' && $v !== null));
        }
        $lines = preg_split('/\r\n|\r|\n/', (string) $val);
        $lines = array_map('trim', $lines);
        return array_values(array_filter($lines, fn($v) => $v !== ''));
    };
    $stripScripts = function ($html) {
        return preg_replace('#<script\b[^>]*>.*?</script>#is', '', (string) $html);
    };
    $stripEmptyParagraphs = function ($html) {
        $html = (string) $html;
        return preg_replace('#<p>(?:\s|&nbsp;|<br\s*/?>)*</p>#i', '', $html);
    };

    // Saved exactly as submitted — no fallback to the English text when a
    // field is left blank. (Previously blank fields substituted the
    // English text automatically, which meant deleting text in the admin
    // editor and saving would silently bring the English text right back
    // instead of actually saving empty — translation here is fully
    // manual now, so an intentional deletion must stick.)
    $arName = trim((string) ($incomingAr['name'] ?? ''));
    $arDesc = trim((string) ($incomingAr['shortDescription'] ?? ''));
    $arComposition = $toLines($incomingAr['composition'] ?? []);
    $arUses = $toLines($incomingAr['uses'] ?? []);

    $out = [
        'id' => $englishProduct['id'],
        'name' => $arName,
        'category' => $englishProduct['category'] ?? '',
    ];
    if (!empty($englishProduct['categories'])) $out['categories'] = $englishProduct['categories'];
    $out['purity'] = $englishProduct['purity'] ?? '';
    $out['showPurity'] = $englishProduct['showPurity'] ?? true;
    $out['shortDescription'] = $stripEmptyParagraphs($stripScripts($arDesc));
    $out['composition'] = $arComposition;
    $out['uses'] = $arUses;
    $out['images'] = $englishProduct['images'] ?? [];
    $out['video'] = $englishProduct['video'] ?? '';
    $out['variants'] = $englishProduct['variants'] ?? [];
    $out['wholesaleTiers'] = $englishProduct['wholesaleTiers'] ?? [];
    return $out;
}

/* ---------- Category labels, Arabic display (js/category-labels-ar.js) ---------- */
// Keyed by the exact English CATEGORY_LIST string (the internal lookup key
// used everywhere — icons, filters) — only the displayed text is Arabic.
// See js/category-labels-ar.js's own header comment for the full rationale.

function load_category_labels_ar() {
    if (!file_exists(CATEGORY_LABELS_AR_FILE)) return [];
    $code = file_get_contents(CATEGORY_LABELS_AR_FILE);
    $labels = extract_const_json($code, 'CATEGORY_LABELS_AR');
    return is_array($labels) ? $labels : [];
}

function serialize_category_labels_ar($labels) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — خريطة تسميات الفئات بالعربية
 * ------------------------------------------------------------
 * يُدار من لوحة التحكم (/admin-php)، زر "Category Labels" — عمود "Arabic
 * label". تبقى النصوص الإنجليزية الأصلية (من CATEGORY_LIST في
 * products-data.js) هي المفاتيح الداخلية المستخدمة في كل مكان آخر
 * (js/catalog.js، حقلي category/categories في المنتجات). لا يجوز استبدال
 * هذه المفاتيح بنصوص عربية في أي مكان آخر من الكود، لأن ذلك سيكسر عمليات
 * البحث (lookups) بصمت.
 */


HEADER;
    $body = "const CATEGORY_LABELS_AR = " . json_pretty(count($labels) ? $labels : new stdClass()) . ";\n";
    return $header . $body;
}

function save_category_labels_ar($labels) {
    file_put_contents(CATEGORY_LABELS_AR_FILE, serialize_category_labels_ar($labels));
}

function normalize_category_labels_ar($incoming) {
    $labels = [];
    if (is_array($incoming)) {
        foreach ($incoming as $category => $label) {
            $label = trim((string) $label);
            if ($label !== '') $labels[$category] = $label;
        }
    }
    return $labels;
}

/* ---------- Theme settings ---------- */

function load_theme_settings() {
    if (!file_exists(THEME_SETTINGS_FILE)) {
        return ['defaultPaletteId' => 'classic', 'paletteLabels' => new stdClass()];
    }
    $code = file_get_contents(THEME_SETTINGS_FILE);
    $settings = extract_const_json($code, 'THEME_SETTINGS');
    if ($settings === null) {
        return ['defaultPaletteId' => 'classic', 'paletteLabels' => new stdClass()];
    }
    return $settings;
}

function serialize_theme_settings($settings) {
    $header = <<<'HEADER'
/**
 * Site-wide theme/palette configuration, managed from the Admin Panel
 * ("Theme" tab). Loaded before theme.js on every public page, and before
 * the inline no-flash <head> script reads it (see THEME_SETTINGS below is
 * a plain global, safe to read synchronously).
 *
 *   defaultPaletteId    the palette applied to a first-time visitor who
 *                        has no localStorage preference yet (must match an
 *                        id in theme.js's PALETTES list)
 *   paletteLabels        { [paletteId]: "Custom Display Name" } — overrides
 *                        the built-in label shown in the palette picker,
 *                        without changing the id (so localStorage values
 *                        already saved by visitors keep working)
 */

HEADER;
    $body = "const THEME_SETTINGS = " . json_pretty($settings) . ";\n";
    return $header . $body;
}

function save_theme_settings($settings) {
    file_put_contents(THEME_SETTINGS_FILE, serialize_theme_settings($settings));
}

function normalize_theme_settings($s) {
    $paletteLabels = [];
    if (isset($s['paletteLabels']) && is_array($s['paletteLabels'])) {
        foreach ($s['paletteLabels'] as $id => $label) {
            $label = trim((string) $label);
            if ($label !== '') $paletteLabels[$id] = $label;
        }
    }
    return [
        'defaultPaletteId' => $s['defaultPaletteId'] ?? 'classic',
        'paletteLabels' => count($paletteLabels) ? $paletteLabels : new stdClass(),
    ];
}

/* ---------- Category tile labels ("Shop by Category" icon grid) ---------- */

function load_category_tile_labels() {
    if (!file_exists(CATEGORY_TILE_LABELS_FILE)) return [];
    $code = file_get_contents(CATEGORY_TILE_LABELS_FILE);
    $labels = extract_const_json($code, 'CATEGORY_TILE_LABELS');
    return is_array($labels) ? $labels : [];
}

function serialize_category_tile_labels($labels) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — "Shop by Category" tile label overrides
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Category Labels" button. Lets you
 * rename the short label shown on each category icon tile (the
 * "Shop by Category" grid on the homepage) without touching code — an
 * empty/missing entry falls back to the built-in default label in
 * js/main.js (CATEGORY_SHORT_LABELS_STANDALONE).
 *
 * Field reference: { [category name from CATEGORY_LIST]: "Custom Label" }
 */


HEADER;
    $body = "const CATEGORY_TILE_LABELS = " . json_pretty(count($labels) ? $labels : new stdClass()) . ";\n";
    return $header . $body;
}

function save_category_tile_labels($labels) {
    file_put_contents(CATEGORY_TILE_LABELS_FILE, serialize_category_tile_labels($labels));
}

function normalize_category_tile_labels($incoming) {
    $labels = [];
    if (is_array($incoming)) {
        foreach ($incoming as $category => $label) {
            $label = trim((string) $label);
            if ($label !== '') $labels[$category] = $label;
        }
    }
    return $labels;
}

/* ---------- Peptide Guide topics (peptide-guide.php / topic.php) ---------- */

function load_peptide_topics() {
    if (!file_exists(PEPTIDE_TOPICS_DATA_FILE)) return [];
    $code = file_get_contents(PEPTIDE_TOPICS_DATA_FILE);
    return extract_const_json($code, 'PEPTIDE_TOPICS') ?: [];
}

function serialize_peptide_topics_data($topics) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — Peptide Guide Topics
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Peptide Guide" tab. Standalone
 * topic articles shown on peptide-guide.php (English "Peptide Guide"
 * listing) — independent of the product catalog.
 *
 * Field reference:
 *   id          unique slug, used in URLs: peptide-guide-topic.html?id=...
 *   title       topic title
 *   summary     1-2 lines shown on the topic card in the listing
 *   body        array of paragraph strings — the article content
 *   images      array of image paths (optional) — the infographic artwork
 *   video       path or embed URL to a video (optional)
 */


HEADER;
    $body = "const PEPTIDE_TOPICS = " . json_pretty($topics) . ";\n";
    return $header . $body;
}

function save_peptide_topics($topics) {
    file_put_contents(PEPTIDE_TOPICS_DATA_FILE, serialize_peptide_topics_data($topics));
}

function normalize_peptide_topic($t) {
    $toLines = function ($val) {
        if (is_array($val)) {
            return array_values(array_filter($val, fn($v) => $v !== '' && $v !== null));
        }
        $lines = preg_split('/\r\n|\r|\n/', (string) $val);
        $lines = array_map('trim', $lines);
        return array_values(array_filter($lines, fn($v) => $v !== ''));
    };
    return [
        'id' => $t['id'] ?? '',
        'title' => $t['title'] ?? '',
        'summary' => $t['summary'] ?? '',
        'body' => $toLines($t['body'] ?? []),
        'images' => isset($t['images']) && is_array($t['images'])
            ? array_values(array_filter($t['images'], fn($v) => $v !== '' && $v !== null))
            : [],
        'video' => $t['video'] ?? '',
    ];
}

/* ---------- Blog posts (blog.php / blog-post.php) ---------- */

function load_blog_posts() {
    if (!file_exists(BLOG_DATA_FILE)) return [];
    $code = file_get_contents(BLOG_DATA_FILE);
    return extract_const_json($code, 'BLOG_POSTS') ?: [];
}

function serialize_blog_posts_data($posts) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — Blog Posts
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Blog" tab. Independent of the
 * product catalog and Peptide Guide — long-form educational articles
 * with a rich-text body (bold/italic/underline/color/headings/links/
 * inline images), authored via the Quill editor in the admin panel.
 *
 * Field reference:
 *   id           unique slug, used in URLs: blog-post.html?id=...
 *   title        post title
 *   summary      1-2 lines shown on the post card / meta description
 *   bodyHtml     rich HTML string produced by the admin's Quill editor —
 *                rendered as-is on the public page (admin-authored only,
 *                never user-submitted, so no sanitization is applied
 *                beyond stripping <script> tags on save)
 *   coverImage   path to the cover image shown on the card and at the
 *                top of the article (optional)
 *   video        path or embed URL to a video (optional)
 *   createdAt    "YYYY-MM-DD", set once on creation
 */


HEADER;
    $body = "const BLOG_POSTS = " . json_pretty($posts) . ";\n";
    return $header . $body;
}

function save_blog_posts($posts) {
    file_put_contents(BLOG_DATA_FILE, serialize_blog_posts_data($posts));
}

function normalize_blog_post($p) {
    // Admin-authored rich text only (never rendered for arbitrary/user
    // input) — still strip <script> tags defensively in case the editor
    // ever lets one through via pasted HTML.
    $stripScripts = function ($html) {
        return preg_replace('#<script\b[^>]*>.*?</script>#is', '', (string) $html);
    };
    // Quill inserts an empty <p><br></p> for every blank line the author
    // presses Enter on. These render with their own paragraph spacing,
    // creating a visible extra gap that has nothing to do with heading
    // style/wording — it happens no matter how a post's headings are
    // formatted (colon-style, em-dash style, etc.), so the fix belongs
    // here (once, on save) rather than as a per-format heuristic in the
    // front-end renderer. Strips every empty paragraph, not just runs of
    // 2+, since even one empty paragraph produces the unwanted gap.
    $stripEmptyParagraphs = function ($html) {
        $html = (string) $html;
        $html = preg_replace('#<p>(?:\s|&nbsp;|<br\s*/?>)*</p>#i', '', $html);
        return $html;
    };
    // embedHtml is a raw-HTML field (unlike bodyHtml, which comes from
    // Quill) meant for pasting a single <iframe> embed code — restrict it
    // to iframe tags only, so this field can't be used to slip in a
    // <script> or other tag even though it's admin-only.
    $sanitizeEmbed = function ($html) {
        $html = trim((string) $html);
        if ($html === '') return '';
        return preg_match('#^<iframe\b[^>]*>.*?</iframe>$#is', $html) ? $html : '';
    };
    return [
        'id' => $p['id'] ?? '',
        'title' => $p['title'] ?? '',
        'summary' => $p['summary'] ?? '',
        'bodyHtml' => $stripEmptyParagraphs($stripScripts($p['bodyHtml'] ?? '')),
        'coverImage' => $p['coverImage'] ?? '',
        'video' => $p['video'] ?? '',
        'embedHtml' => $sanitizeEmbed($p['embedHtml'] ?? ''),
        'createdAt' => $p['createdAt'] ?? date('Y-m-d'),
    ];
}

/* ---------- Gallery (gallery.php / ar/gallery.php + product detail pages) ---------- */

function load_gallery_items() {
    if (!file_exists(DATA_FILE_GALLERY)) return [];
    $code = file_get_contents(DATA_FILE_GALLERY);
    return extract_const_json($code, 'GALLERY_ITEMS') ?: [];
}

function serialize_gallery_items($items) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — Gallery
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin-php), "Gallery" tab. Shown on
 * gallery.php / ar/gallery.php and, filtered by productIds, on each
 * tagged product's detail page (product.php / ar/product.php).
 *
 * Field reference:
 *   id           unique slug
 *   type         "image" | "video"
 *   src          path to the image, or path/embed URL to the video
 *   thumbnail    path to the poster image — required for type "video",
 *                unused for type "image"
 *   caption      shown under the item and in the lightbox
 *   productIds   array of product ids (from js/products-data.js) this item
 *                is tagged to — controls which product pages show it
 */


HEADER;
    $body = "const GALLERY_ITEMS = " . json_pretty($items) . ";\n";
    return $header . $body;
}

function save_gallery_items($items) {
    file_put_contents(DATA_FILE_GALLERY, serialize_gallery_items($items));
}

function normalize_gallery_item($item) {
    $type = ($item['type'] ?? '') === 'video' ? 'video' : 'image';
    $productIds = isset($item['productIds']) && is_array($item['productIds'])
        ? array_values(array_filter($item['productIds'], fn($v) => $v !== '' && $v !== null))
        : [];
    return [
        'id' => $item['id'] ?? '',
        'type' => $type,
        'src' => $item['src'] ?? '',
        'thumbnail' => $type === 'video' ? ($item['thumbnail'] ?? '') : '',
        'caption' => $item['caption'] ?? '',
        'productIds' => $productIds,
    ];
}

