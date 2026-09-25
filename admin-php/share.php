<?php
/**
 * Link-preview (Open Graph) helpers, shared by product.php and
 * ar/product.php. Kept separate from data.php because ar/product.php has its
 * own lightweight loader and can't include the full admin data layer
 * (duplicate function names).
 */

if (!function_exists('share_description')) {
    /** Plain-text, single-line, ~160-char summary of rich HTML for og:description. */
    function share_description($html, $max = 160) {
        $html = preg_replace('#</(p|li|h[1-6]|div)>|<br\s*/?>#i', ' ', (string) $html);
        $text = html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $text = trim(preg_replace('/[\s\x{00A0}]+/u', ' ', str_replace('---', ' ', $text)));
        if (mb_strlen($text) > $max) $text = rtrim(mb_substr($text, 0, $max - 1)) . '…';
        return $text;
    }
}

if (!function_exists('share_image')) {
    /**
     * Small square JPEG (600×600, ~50 KB) for share previews — WhatsApp and
     * others skip large images. Generated once from the product photo into
     * assets/og/ and reused. Returns [absolute URL, width, height]; falls
     * back to the original image if GD isn't available or the source is missing.
     */
    function share_image($relPath) {
        $root = dirname(__DIR__); // public_html
        $base = 'https://trusted-peptide.com/';
        $relPath = ltrim((string) $relPath, '/');
        $src = $root . '/' . $relPath;
        if ($relPath === '' || strpos($relPath, '..') !== false || !is_file($src)) return [$base . 'assets/brand/hero-vials.jpg', 1600, 678];
        $name = substr(md5($relPath . '|' . filemtime($src)), 0, 16) . '.jpg';
        $dir = $root . '/assets/og';
        $out = $dir . '/' . $name;
        if (is_file($out)) return [$base . 'assets/og/' . $name, 600, 600];
        if (!function_exists('imagecreatefromstring')) return [$base . $relPath, 0, 0];
        $img = @imagecreatefromstring(file_get_contents($src));
        if (!$img) return [$base . $relPath, 0, 0];
        $w = imagesx($img); $h = imagesy($img); $side = min($w, $h);
        $thumb = imagecreatetruecolor(600, 600);
        imagefill($thumb, 0, 0, imagecolorallocate($thumb, 255, 255, 255)); // flatten transparency
        imagecopyresampled($thumb, $img, 0, 0, (int) (($w - $side) / 2), (int) (($h - $side) / 2), 600, 600, $side, $side);
        @mkdir($dir, 0755, true);
        imagejpeg($thumb, $out, 82);
        imagedestroy($img); imagedestroy($thumb);
        return is_file($out) ? [$base . 'assets/og/' . $name, 600, 600] : [$base . $relPath, 0, 0];
    }
}
