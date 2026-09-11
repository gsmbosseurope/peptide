<?php
/**
 * Reads/writes the site's data files: ../js/products-data.js and
 * ../js/guides-data.js. These are plain JS files containing
 * `const CATEGORY_LIST = [...]; const PRODUCTS = [...];` (and
 * `const GUIDES = [...];`), parsed here as JSON since every value in them
 * is JSON-compatible (the admin panel always writes valid JSON literals).
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
    $out['shortDescription'] = $p['shortDescription'] ?? '';
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

/* ---------- Guides ---------- */

function load_guides() {
    if (!file_exists(GUIDES_DATA_FILE)) return [];
    $code = file_get_contents(GUIDES_DATA_FILE);
    return extract_const_json($code, 'GUIDES') ?: [];
}

function serialize_guides_data($guides) {
    $header = <<<'HEADER'
/**
 * trusted-peptide.com — Tips & Guide Articles
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Guides" tab. Independent of the
 * product catalog — general educational articles (storage, handling,
 * reconstitution, etc.), not tied to any specific product.
 *
 * Field reference:
 *   id          unique slug, used in URLs: tip.html?id=...
 *   title       article title
 *   summary     1-2 lines shown on the guide card in the listing
 *   body        array of paragraph strings — the article content
 *   images      array of image paths (optional)
 *   video       path or embed URL to a video (optional)
 */


HEADER;
    $body = "const GUIDES = " . json_pretty($guides) . ";\n";
    return $header . $body;
}

function save_guides($guides) {
    file_put_contents(GUIDES_DATA_FILE, serialize_guides_data($guides));
}

function normalize_guide($g) {
    $toLines = function ($val) {
        if (is_array($val)) {
            return array_values(array_filter($val, fn($v) => $v !== '' && $v !== null));
        }
        $lines = preg_split('/\r\n|\r|\n/', (string) $val);
        $lines = array_map('trim', $lines);
        return array_values(array_filter($lines, fn($v) => $v !== ''));
    };
    return [
        'id' => $g['id'] ?? '',
        'title' => $g['title'] ?? '',
        'summary' => $g['summary'] ?? '',
        'body' => $toLines($g['body'] ?? []),
        'images' => isset($g['images']) && is_array($g['images'])
            ? array_values(array_filter($g['images'], fn($v) => $v !== '' && $v !== null))
            : [],
        'video' => $g['video'] ?? '',
    ];
}
