<?php
/**
 * Dynamic XML sitemap — reads the same data files the site itself uses
 * (js/products-data.js, js/peptide-guide-data.js) so it never drifts out
 * of sync with what's actually on the site. Served at /sitemap.xml via
 * .htaccess rewrite (see below).
 */

require_once __DIR__ . '/admin-php/config.php';
require_once __DIR__ . '/admin-php/data.php';

header('Content-Type: application/xml; charset=utf-8');

$baseUrl = 'https://trusted-peptide.com';

$staticPages = [
    ['path' => '/', 'priority' => '1.0', 'changefreq' => 'daily'],
    ['path' => '/about', 'priority' => '0.6', 'changefreq' => 'monthly'],
    ['path' => '/products', 'priority' => '0.9', 'changefreq' => 'daily'],
    ['path' => '/best-sellers', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['path' => '/blog', 'priority' => '0.7', 'changefreq' => 'weekly'],
    ['path' => '/peptide-guide', 'priority' => '0.6', 'changefreq' => 'weekly'],
    ['path' => '/contact', 'priority' => '0.4', 'changefreq' => 'yearly'],
    ['path' => '/ar/', 'priority' => '0.9', 'changefreq' => 'daily'],
    ['path' => '/ar/products', 'priority' => '0.8', 'changefreq' => 'daily'],
];

/** Arabic product ids — same balanced-bracket extractor pattern as admin-php/data.php, duplicated here since the Arabic catalog isn't wired into that data layer yet. */
function sitemap_load_products_ar() {
    $file = ROOT_DIR . '/js/products-data-ar.js';
    if (!file_exists($file)) return [];
    $code = file_get_contents($file);
    if (!preg_match('/const\s+PRODUCTS\s*=\s*/', $code, $m, PREG_OFFSET_CAPTURE)) return [];
    $start = $m[0][1] + strlen($m[0][0]);
    $depth = 0; $inString = false; $stringChar = ''; $escaped = false; $end = -1;
    $len = strlen($code);
    for ($i = $start; $i < $len; $i++) {
        $ch = $code[$i];
        if ($inString) {
            if ($escaped) { $escaped = false; }
            elseif ($ch === '\\') { $escaped = true; }
            elseif ($ch === $stringChar) { $inString = false; }
            continue;
        }
        if ($ch === '"' || $ch === "'") { $inString = true; $stringChar = $ch; continue; }
        if ($ch === '[' || $ch === '{') { $depth++; }
        elseif ($ch === ']' || $ch === '}') { $depth--; if ($depth === 0) { $end = $i + 1; break; } }
    }
    if ($end === -1) return [];
    return json_decode(substr($code, $start, $end - $start), true) ?: [];
}

$products = load_products();
$productsAr = sitemap_load_products_ar();
$topics = load_peptide_topics();
$blogPosts = load_blog_posts();

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php foreach ($staticPages as $page): ?>
  <url>
    <loc><?php echo htmlspecialchars($baseUrl . $page['path']); ?></loc>
    <changefreq><?php echo $page['changefreq']; ?></changefreq>
    <priority><?php echo $page['priority']; ?></priority>
  </url>
<?php endforeach; ?>
<?php foreach ($products as $p): if (empty($p['id'])) continue; ?>
  <url>
    <loc><?php echo htmlspecialchars($baseUrl . '/product?id=' . rawurlencode($p['id'])); ?></loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
<?php endforeach; ?>
<?php foreach ($productsAr as $p): if (empty($p['id'])) continue; ?>
  <url>
    <loc><?php echo htmlspecialchars($baseUrl . '/ar/product?id=' . rawurlencode($p['id'])); ?></loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
<?php endforeach; ?>
<?php foreach ($topics as $t): if (empty($t['id'])) continue; ?>
  <url>
    <loc><?php echo htmlspecialchars($baseUrl . '/peptide-guide-topic?id=' . rawurlencode($t['id'])); ?></loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
<?php endforeach; ?>
<?php foreach ($blogPosts as $p): if (empty($p['id'])) continue; ?>
  <url>
    <loc><?php echo htmlspecialchars($baseUrl . '/blog-post?id=' . rawurlencode($p['id'])); ?></loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
<?php endforeach; ?>
</urlset>
