<?php
/**
 * Slim product data for listing pages (home, catalog, cosmetics, cart, ...).
 *
 * js/products-data*.js is the admin panel's source of truth and is mostly long
 * description text (about 80% of the file), which the listing pages never show.
 * This builds js/products-slim.js / products-slim-ar.js from it: same CATEGORY_LIST,
 * PRODUCTS and PRODUCT_CATEGORIES, but each shortDescription is cut to a short
 * teaser and composition/uses/video (only the product page reads them) are dropped.
 *
 * The slim file is regenerated whenever the source file is newer, so admin edits
 * show up on the next page view. Product pages keep loading the full file.
 * If the slim file cannot be written, the full file is used instead.
 */

/** Return the JSON literal assigned to `const $name = ...;` (decoded), or null. */
function slim_extract($code, $name) {
    if (!preg_match('/const\s+' . preg_quote($name, '/') . '\s*=\s*/', $code, $m, PREG_OFFSET_CAPTURE)) return null;
    $start = $m[0][1] + strlen($m[0][0]);
    $depth = 0; $inString = false; $esc = false; $end = -1; $len = strlen($code);
    for ($i = $start; $i < $len; $i++) {
        $ch = $code[$i];
        if ($inString) {
            if ($esc) { $esc = false; }
            elseif ($ch === '\\') { $esc = true; }
            elseif ($ch === '"' || $ch === "'") { if ($ch === $inString) $inString = false; }
            continue;
        }
        if ($ch === '"' || $ch === "'") { $inString = $ch; continue; }
        if ($ch === '[' || $ch === '{') $depth++;
        elseif ($ch === ']' || $ch === '}') { $depth--; if ($depth === 0) { $end = $i + 1; break; } }
    }
    return $end === -1 ? null : json_decode(substr($code, $start, $end - $start), true);
}

/** Plain-text teaser (about 180-300 chars) from a rich-text description. */
function slim_teaser($html) {
    $html = (string) $html;
    $parts = [];
    if (preg_match_all('#<(p|h[1-6]|li)\b[^>]*>(.*?)</\1>#is', $html, $mm)) {
        foreach ($mm[2] as $block) {
            $t = trim(preg_replace('/\s+/u', ' ', html_entity_decode(strip_tags($block), ENT_QUOTES | ENT_HTML5, 'UTF-8')));
            if ($t !== '' && !preg_match('/^[-_=\s.]+$/', $t)) $parts[] = $t;
            if (mb_strlen(implode(' ', $parts), 'UTF-8') >= 180 || count($parts) >= 3) break;
        }
    }
    $text = $parts ? implode(' ', $parts)
                   : trim(preg_replace('/\s+/u', ' ', html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8')));
    if (mb_strlen($text, 'UTF-8') > 300) {
        $cut = mb_substr($text, 0, 300, 'UTF-8');
        $sp = mb_strrpos($cut, ' ', 0, 'UTF-8');
        $text = rtrim($sp > 200 ? mb_substr($cut, 0, $sp, 'UTF-8') : $cut, " ,;:-") . '…';
    }
    return $text === '' ? '' : '<p>' . htmlspecialchars($text, ENT_QUOTES, 'UTF-8') . '</p>';
}

/** Build $dst from $src. Returns true on success. */
function slim_build($src, $dst) {
    $code = @file_get_contents($src);
    if ($code === false) return false;
    $cats = slim_extract($code, 'CATEGORY_LIST');
    $products = slim_extract($code, 'PRODUCTS');
    if (!is_array($products) || !$products || !is_array($cats)) return false;
    foreach ($products as &$p) {
        $p['shortDescription'] = slim_teaser($p['shortDescription'] ?? '');
        unset($p['composition'], $p['uses'], $p['video']);
    }
    unset($p);
    $flags = JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;
    $out = "/* Generated from " . basename($src) . " - slim copy for listing pages. Do not edit. */\n"
         . 'const CATEGORY_LIST = ' . json_encode($cats, $flags) . ";\n"
         . 'const PRODUCTS = ' . json_encode($products, $flags) . ";\n"
         . "const PRODUCT_CATEGORIES = CATEGORY_LIST;\n";
    $tmp = $dst . '.tmp' . getmypid();
    if (@file_put_contents($tmp, $out) === false) return false;
    if (!@rename($tmp, $dst)) { @unlink($tmp); return false; }
    return true;
}

/**
 * <script> tag for listing pages. $lang 'en'|'ar'; $prefix is the path from the page
 * to the site root ('' for root pages, '../' for /ar/ pages).
 */
function slim_data_tag($lang, $prefix = '') {
    $root = dirname(__DIR__);
    $srcName = $lang === 'ar' ? 'products-data-ar.js' : 'products-data.js';
    $dstName = $lang === 'ar' ? 'products-slim-ar.js' : 'products-slim.js';
    $src = $root . '/js/' . $srcName;
    $dst = $root . '/js/' . $dstName;
    $ready = is_file($dst) && filemtime($dst) >= filemtime($src);
    if (!$ready) $ready = slim_build($src, $dst);
    $file = $ready ? $dstName : $srcName;
    $v = filemtime($root . '/js/' . $file);
    return '<script src="' . $prefix . 'js/' . $file . '?v=' . $v . '" data-cfasync="false"></script>';
}
