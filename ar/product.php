<?php
/**
 * Arabic product detail page — server-side SEO twin of ../product.php.
 * Reads the same ?id= against js/products-data-ar.js (translated name /
 * shortDescription, English category/categories/images/variants preserved
 * so lookups stay in sync with the English catalog) so title/meta/OG tags
 * are in Arabic for this URL. Not wired into admin-php/data.php's CRUD
 * layer yet — this file is hand-maintained, translated alongside the
 * English catalog when products are added.
 */
// ROOT_DIR = public_html (parent of ar/)
define('AR_ROOT_DIR', __DIR__ . '/..');
require_once AR_ROOT_DIR . '/admin-php/share.php';
require_once AR_ROOT_DIR . '/admin-php/seo.php';

function load_products_ar() {
    $file = AR_ROOT_DIR . '/js/products-data-ar.js';
    if (!file_exists($file)) return [];
    $code = file_get_contents($file);
    return extract_const_json_ar($code, 'PRODUCTS') ?: [];
}

/** Same balanced-bracket JSON extractor as admin-php/data.php's extract_const_json(), duplicated here to avoid pulling in the full admin data layer for a single read-only lookup. */
function extract_const_json_ar($code, $name) {
    if (!preg_match('/const\s+' . preg_quote($name, '/') . '\s*=\s*/', $code, $m, PREG_OFFSET_CAPTURE)) {
        return null;
    }
    $start = $m[0][1] + strlen($m[0][0]);
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

$productId = isset($_GET['id']) ? (string) $_GET['id'] : '';
$products = load_products_ar();
$product = null;
foreach ($products as $p) {
    if ($p['id'] === $productId) { $product = $p; break; }
}
// Unknown or missing id: never fall back to other content (that made
// every bad URL a duplicate page). Empty id goes to the listing page;
// an unknown id gets a real 404.
if (!$product) {
    if ($productId === '') { header('Location: /ar/products', true, 301); exit; }
    http_response_code(404);
    include __DIR__ . '/404.php';
    exit;
}

$pageTitle = $product ? htmlspecialchars($product['name']) . ' — trusted-peptide.com' : 'المنتج — trusted-peptide.com';
$pageDesc = $product && !empty($product['shortDescription'])
    ? htmlspecialchars(share_description($product['shortDescription']))
    : 'ببتيد بحثي مصدره الاتحاد الأوروبي، معتمد للنقاء والجودة الثابتة.';
$seoOv = $product ? seo_product_override($product['id'], 'ar') : null;
if ($seoOv) { $pageTitle = htmlspecialchars($seoOv[0]); $pageDesc = htmlspecialchars($seoOv[1]); }
$pageUrl = 'https://trusted-peptide.com/ar/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageUrlEn = 'https://trusted-peptide.com/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageImage = $product && !empty($product['images'][0])
    ? 'https://trusted-peptide.com/' . ltrim($product['images'][0], '/')
    : 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';
// Small, cached share image for WhatsApp/Facebook/Telegram previews.
[$shareImage, $shareW, $shareH] = share_image($product['images'][0] ?? '');

// Product schema (JSON-LD) — same AggregateOffer pattern as product.php.
// Skipped when the product has no translated name yet (untranslated
// products render an empty-state page instead of real content, so there's
// nothing meaningful to describe).
$productSchema = null;
if ($product && !empty($product['name']) && !empty($product['variants'])) {
    $prices = array_map(function ($v) { return (float) $v['price']; }, $product['variants']);
    $productSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Product',
        'name' => $product['name'],
        'description' => trim(strip_tags($product['shortDescription'] ?? '')),
        'image' => $pageImage,
        'url' => $pageUrl,
        'inLanguage' => 'ar',
        'sku' => $product['id'],
        'brand' => ['@type' => 'Brand', 'name' => 'Trusted-Peptide'],
        'offers' => [
            '@type' => 'AggregateOffer',
            'priceCurrency' => 'EUR',
            'lowPrice' => min($prices),
            'highPrice' => max($prices),
            'offerCount' => count($product['variants']),
            'availability' => 'https://schema.org/InStock',
            'url' => $pageUrl,
        ],
    ];
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="../js/theme-settings.js?v=<?php echo filemtime(__DIR__ . '/../js/theme-settings.js'); ?>"></script>
  <script>
    (function() {
      var stored = localStorage.getItem("peptidesLabsTheme");
      var theme = stored === "light" || stored === "dark" ? stored : "light";
      document.documentElement.setAttribute("data-theme", theme);
      var validPalettes = ["peptide2", "peptide3", "peptide4", "peptide5", "peptide6", "peptide7", "peptide8", "peptide9", "peptide10", "peptide11"];
      var storedPalette = localStorage.getItem("peptidesLabsPalette");
      var palette = validPalettes.indexOf(storedPalette) !== -1 ? storedPalette : (typeof THEME_SETTINGS !== "undefined" ? THEME_SETTINGS.defaultPaletteId : null);
      if (palette && palette !== "classic") document.documentElement.setAttribute("data-palette", palette);
    })();
  </script>
  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo $pageDesc; ?>" />
  <?php if ($seoOv): ?><meta name="x-seo-override" content="1" /><?php endif; ?>
  <link rel="canonical" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($pageUrlEn); ?>" />
  <link rel="alternate" hreflang="ar" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($pageUrlEn); ?>" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="<?php echo $pageTitle; ?>" />
  <meta property="og:description" content="<?php echo $pageDesc; ?>" />
  <meta property="og:url" content="<?php echo htmlspecialchars($pageUrl); ?>" />
  <meta property="og:image" content="<?php echo htmlspecialchars($shareImage); ?>" />
  <meta property="og:image:secure_url" content="<?php echo htmlspecialchars($shareImage); ?>" />
  <meta property="og:image:type" content="image/jpeg" />
<?php if ($shareW): ?>
  <meta property="og:image:width" content="<?php echo $shareW; ?>" />
  <meta property="og:image:height" content="<?php echo $shareH; ?>" />
<?php endif; ?>
  <meta property="og:image:alt" content="<?php echo $product ? htmlspecialchars($product['name']) : 'Trusted Peptide'; ?>" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="<?php echo $pageTitle; ?>" />
  <meta name="twitter:description" content="<?php echo $pageDesc; ?>" />
  <meta name="twitter:image" content="<?php echo htmlspecialchars($shareImage); ?>" />
  <link rel="icon" href="../assets/brand/logo-icon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" /></noscript></noscript>
  <link rel="stylesheet" href="../css/main.css?v=<?php echo filemtime(__DIR__ . '/../css/main.css'); ?>" />
  <link rel="stylesheet" href="../css/animations.css?v=<?php echo filemtime(__DIR__ . '/../css/animations.css'); ?>" />
  <link rel="stylesheet" href="../css/hero.css?v=<?php echo filemtime(__DIR__ . '/../css/hero.css'); ?>" />
  <link rel="stylesheet" href="../css/rtl.css?v=<?php echo filemtime(__DIR__ . '/../css/rtl.css'); ?>" />
  <style>
    /* عنوان المنتج — محاذاة إنجليزية (LTR) لأن الأسماء لاتينية */
    #product-detail-root h1,
    .pdp-name, .pdp-title, .product-name, .product-detail-name,
    [class*="pdp-n"], [class*="product-name"] {
      direction: ltr !important;
      text-align: left !important;
      unicode-bidi: isolate;
    }
  </style>
  <?php if ($productSchema): ?>
  <script type="application/ld+json"><?php echo json_encode($productSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
  <?php endif; ?>
  <?php seo_jsonld(seo_breadcrumb([['الرئيسية', 'https://trusted-peptide.com/ar/'], ['المنتجات', 'https://trusted-peptide.com/ar/products'], [$product['name'], $pageUrl]])); ?>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a href="/ar/" class="brand">
<img src="../assets/brand/logo-icon.png" alt="ترستد ببتيد" class="brand-logo" />
        <span class="brand-name">ترستد<span class="lab"><span class="brand-dash">-</span>ببتيد</span></span>
      </a>
      <nav class="main-nav">
        <a href="/ar/"">الرئيسية</a>
        <a href="about">من نحن</a>
        <a href="best-sellers">الأكثر مبيعاً</a>
        <a href="cosmetics">مستحضرات التجميل</a>
        <a href="vitamins">الفيتامينات</a>
        <a href="blog">المدونة</a>

        <a href="peptide-guide">دليل الببتيد</a>
        <a href="gallery">معرض الصور</a>
        <a href="contact">تواصل معنا</a>
      </nav>
      <div class="header-actions">
        <a href="<?php echo htmlspecialchars($pageUrlEn); ?>" class="lang-switch" title="Switch to English">EN</a>
        <button class="theme-toggle" aria-label="Switch to light theme" title="Toggle light/dark theme">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
        </button>
        <div class="palette-switcher">
          <button class="palette-toggle" aria-label="Choose color palette" title="Choose color palette" aria-expanded="false" aria-haspopup="true">
            <span class="palette-toggle-swatch"></span>
          </button>
          <div class="palette-menu"></div>
        </div>
        <a href="cart" class="cart-link">السلة <span class="cart-count">0</span></a>
        <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

    <nav class="mobile-nav">
      <a href="/ar/"">الرئيسية</a>
      <a href="about">من نحن</a>
      <a href="best-sellers">الأكثر مبيعاً</a>
      <a href="cosmetics">مستحضرات التجميل</a>
      <a href="vitamins">الفيتامينات</a>
      <a href="blog">المدونة</a>

      <a href="peptide-guide">دليل الببتيد</a>
      <a href="gallery">معرض الصور</a>
      <a href="contact">تواصل معنا</a>
      <a href="<?php echo htmlspecialchars($pageUrlEn); ?>" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:48px;" id="product-detail-root">
    <?php if ($product): ?>
    <!-- Server-rendered fallback: replaced by product-detail.js on load. -->
    <div class="breadcrumb">
      <a href="/ar/"">الرئيسية</a> / <a href="products">المنتجات</a> / <?php echo htmlspecialchars($product['name']); ?>
    </div>
    <h1><?php echo htmlspecialchars($product['name']); ?></h1>
    <div class="pd-desc"><?php echo $product['shortDescription']; ?></div>
    <?php if (!empty($product['images'][0])): ?>
    <img src="/<?php echo htmlspecialchars($product['images'][0]); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" width="600" height="600" style="max-width:100%;height:auto;" />
    <?php endif; ?>
    <?php endif; ?>
  </main>

  <section class="category-icons-section">
    <div class="container">
      <span class="eyebrow">تسوق حسب الفئة</span>
      <div class="category-icons-grid" id="category-icons-grid"></div>
    </div>
  </section>

  <?php $footerLang = 'ar'; include __DIR__ . '/../partials/footer.php'; ?>

  <script src="../js/pricing.js?v=<?php echo filemtime(__DIR__ . '/../js/pricing.js'); ?>" data-cfasync="false"></script>
  <script src="../js/products-data-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/products-data-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/category-labels-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/category-labels-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/../js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="../js/share.js?v=<?php echo filemtime(__DIR__ . '/../js/share.js'); ?>" data-cfasync="false"></script>
  <script src="../js/gallery-data.js?v=<?php echo filemtime(__DIR__ . '/../js/gallery-data.js'); ?>" data-cfasync="false"></script>
  <script src="../js/gallery-lightbox.js?v=<?php echo filemtime(__DIR__ . '/../js/gallery-lightbox.js'); ?>" data-cfasync="false"></script>
  <script src="../js/product-detail-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/product-detail-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/product-promo.js?v=<?php echo filemtime(__DIR__ . '/../js/product-promo.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
