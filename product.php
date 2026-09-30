<?php
/**
 * Server-side SEO for the product detail page: reads ?id= and looks up
 * the matching product from products-data.js so the <title>, meta
 * description, canonical, and Open Graph/Twitter tags reflect the real
 * product in the raw HTML — not just the client-side document.title set
 * later by product-detail.js. This is what search engines and link
 * previews (WhatsApp/Facebook/Telegram share cards) actually read.
 */
require_once __DIR__ . '/admin-php/config.php';
require_once __DIR__ . '/admin-php/data.php';
require_once __DIR__ . '/admin-php/seo.php';
require_once __DIR__ . '/admin-php/share.php';

$productId = isset($_GET['id']) ? (string) $_GET['id'] : '';
$products = load_products();
$product = null;
foreach ($products as $p) {
    if ($p['id'] === $productId) { $product = $p; break; }
}
// Unknown or missing id: never fall back to other content (that made
// every bad URL a duplicate page). Empty id goes to the listing page;
// an unknown id gets a real 404.
if (!$product) {
    if ($productId === '') { header('Location: /products', true, 301); exit; }
    http_response_code(404);
    include __DIR__ . '/404.php';
    exit;
}

$pageTitle = $product ? htmlspecialchars($product['name']) . ' — trusted-peptide.com' : 'Product — trusted-peptide.com';
// shortDescription is rich HTML (Quill-authored) — meta tags must be plain
// text, so tags are stripped here; the on-page fallback below renders the
// real HTML instead.
$pageDesc = $product && !empty($product['shortDescription'])
    ? htmlspecialchars(share_description($product['shortDescription']))
    : 'Research-grade peptide, EU sourced and certified for purity and consistency.';
$pageUrl = 'https://trusted-peptide.com/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageImage = $product && !empty($product['images'][0])
    ? 'https://trusted-peptide.com/' . ltrim($product['images'][0], '/')
    : 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';
// Small, cached share image for WhatsApp/Facebook/Telegram previews.
[$shareImage, $shareW, $shareH] = share_image($product['images'][0] ?? '');

// Product schema (JSON-LD): multiple size variants at different prices, no
// per-variant pages, so offers use AggregateOffer spanning the price range
// rather than a single Offer — the correct schema.org pattern for this case.
$productSchema = null;
if ($product && !empty($product['variants'])) {
    $prices = array_map(function ($v) { return (float) $v['price']; }, $product['variants']);
    $productSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Product',
        'name' => $product['name'],
        'description' => trim(strip_tags($product['shortDescription'] ?? '')),
        'image' => $pageImage,
        'url' => $pageUrl,
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
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="js/theme-settings.js?v=<?php echo filemtime(__DIR__ . '/js/theme-settings.js'); ?>"></script>
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
  <link rel="canonical" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <?php if ($product): ?>
  <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/product?id=<?php echo rawurlencode($product['id']); ?>" />
  <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <?php endif; ?>
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
  <link rel="icon" href="assets/brand/logo-icon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap" /></noscript>
  <link rel="stylesheet" href="css/main.css?v=<?php echo filemtime(__DIR__ . '/css/main.css'); ?>" />
  <link rel="stylesheet" href="css/animations.css?v=<?php echo filemtime(__DIR__ . '/css/animations.css'); ?>" />
  <link rel="stylesheet" href="css/hero.css?v=<?php echo filemtime(__DIR__ . '/css/hero.css'); ?>" />
  <?php if ($productSchema): ?>
  <script type="application/ld+json"><?php echo json_encode($productSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
  <?php endif; ?>
  <style>
    .footer-phone-bar{display:flex;align-items:center;gap:14px;padding:14px 0 4px;border-top:1px solid rgba(128,128,128,.18);margin-top:12px;}
    .footer-phone-label{font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.55;}
    .footer-phone-num{font-size:1.05rem;font-weight:600;white-space:nowrap;color:var(--accent,#4f8ef7);text-decoration:none;}
    .footer-phone-num:hover{text-decoration:underline;}
    .footer-bottom{display:flex;flex-wrap:nowrap;justify-content:space-between;gap:8px;padding-top:14px;border-top:1px solid rgba(128,128,128,.15);margin-top:8px;font-size:.78rem;opacity:.6;}
  </style>
  <?php seo_jsonld(seo_breadcrumb([['Home', 'https://trusted-peptide.com/'], ['Products', 'https://trusted-peptide.com/products'], [$product['name'], $pageUrl]])); ?>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a href="/" class="brand">
<img src="assets/brand/logo-icon.png" alt="Trusted Peptide" class="brand-logo" width="64" height="64" />
        <span class="brand-name">Trusted<span class="lab"><span class="brand-dash">-</span>Peptide</span></span>
      </a>
      <nav class="main-nav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="best-sellers">Best Sellers</a>
        <a href="cosmetics">Cosmetics</a>
        <a href="vitamins">Vitamins</a>
        <a href="blog">Blog</a>

        <a href="peptide-guide">Peptide Guide</a>
        <a href="gallery">Gallery</a>
        <a href="contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="/ar/product?id=<?php echo rawurlencode($product['id'] ?? ''); ?>" class="lang-switch" title="التبديل إلى العربية">عربي</a>
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
        <a href="cart" class="cart-link"><span class="cart-link-word">Cart</span> <span class="cart-count">0</span></a>
        <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

    <nav class="mobile-nav">
      <a href="/">Home</a>
      <a href="about">About</a>
      <a href="best-sellers">Best Sellers</a>
      <a href="cosmetics">Cosmetics</a>
      <a href="vitamins">Vitamins</a>
      <a href="blog">Blog</a>

      <a href="peptide-guide">Peptide Guide</a>
      <a href="gallery">Gallery</a>
      <a href="contact">Contact</a>
      <a href="/ar/product?id=<?php echo rawurlencode($product['id'] ?? ''); ?>" class="lang-switch">عربي</a>
    </nav>

  <main class="section container" style="padding-top:48px;" id="product-detail-root">
    <?php if ($product): ?>
    <!-- Server-rendered fallback: replaced by product-detail.js on load, but
         gives search engines and no-JS clients real content immediately
         instead of an empty container. -->
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="products">Products</a> / <?php echo htmlspecialchars($product['name']); ?>
    </div>
    <h1><?php echo htmlspecialchars($product['name']); ?></h1>
    <div class="pd-desc"><?php echo $product['shortDescription']; ?></div>
    <?php if (!empty($product['images'][0])): ?>
    <img src="<?php echo htmlspecialchars($product['images'][0]); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" width="600" height="600" style="max-width:100%;height:auto;" />
    <?php endif; ?>
    <?php endif; ?>
  </main>

  <section class="category-icons-section">
    <div class="container">
      <span class="eyebrow">Shop by Category</span>
      <div class="category-icons-grid" id="category-icons-grid"></div>
    </div>
  </section>

  <?php $footerLang = 'en'; include __DIR__ . '/partials/footer.php'; ?>

  <script src="js/pricing.js?v=<?php echo filemtime(__DIR__ . '/js/pricing.js'); ?>" data-cfasync="false"></script>
  <script src="js/products-data.js?v=<?php echo filemtime(__DIR__ . '/js/products-data.js'); ?>" data-cfasync="false"></script>
  <script src="js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="js/share.js?v=<?php echo filemtime(__DIR__ . '/js/share.js'); ?>" data-cfasync="false"></script>
  <script src="js/gallery-data.js?v=<?php echo filemtime(__DIR__ . '/js/gallery-data.js'); ?>" data-cfasync="false"></script>
  <script src="js/gallery-lightbox.js?v=<?php echo filemtime(__DIR__ . '/js/gallery-lightbox.js'); ?>" data-cfasync="false"></script>
  <script src="js/product-detail.js?v=<?php echo filemtime(__DIR__ . '/js/product-detail.js'); ?>" data-cfasync="false"></script>
  <script src="js/product-promo.js?v=<?php echo filemtime(__DIR__ . '/js/product-promo.js'); ?>" data-cfasync="false"></script>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
