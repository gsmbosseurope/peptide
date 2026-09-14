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

$productId = isset($_GET['id']) ? (string) $_GET['id'] : '';
$products = load_products();
$product = null;
foreach ($products as $p) {
    if ($p['id'] === $productId) { $product = $p; break; }
}
if (!$product && count($products)) $product = $products[0];

$pageTitle = $product ? htmlspecialchars($product['name']) . ' — trusted-peptide.com' : 'Product — trusted-peptide.com';
// shortDescription is rich HTML (Quill-authored) — meta tags must be plain
// text, so tags are stripped here; the on-page fallback below renders the
// real HTML instead.
$pageDesc = $product && !empty($product['shortDescription'])
    ? htmlspecialchars(trim(strip_tags($product['shortDescription'])))
    : 'Research-grade peptide, EU sourced and certified for purity and consistency.';
$pageUrl = 'https://trusted-peptide.com/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageImage = $product && !empty($product['images'][0])
    ? 'https://trusted-peptide.com/' . ltrim($product['images'][0], '/')
    : 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';
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
      var validPalettes = ["bloom", "ember", "forest", "tide", "crimson", "royal", "papaya", "orbit", "neoncyan", "lakers", "aurora", "blueprint", "coastal", "citrusink", "chocolate", "burgundy", "harmonynavy", "harmonyviolet", "harmonymauve", "harmonycream", "harmonymocha", "harmonyroyale", "harmonyteal", "harmonyvintage"];
      var storedPalette = localStorage.getItem("peptidesLabsPalette");
      var palette = validPalettes.indexOf(storedPalette) !== -1 ? storedPalette : (typeof THEME_SETTINGS !== "undefined" ? THEME_SETTINGS.defaultPaletteId : null);
      if (palette && palette !== "classic") document.documentElement.setAttribute("data-palette", palette);
    })();
  </script>
  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo $pageDesc; ?>" />
  <link rel="canonical" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="<?php echo $pageTitle; ?>" />
  <meta property="og:description" content="<?php echo $pageDesc; ?>" />
  <meta property="og:url" content="<?php echo htmlspecialchars($pageUrl); ?>" />
  <meta property="og:image" content="<?php echo htmlspecialchars($pageImage); ?>" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="<?php echo $pageTitle; ?>" />
  <meta name="twitter:description" content="<?php echo $pageDesc; ?>" />
  <meta name="twitter:image" content="<?php echo htmlspecialchars($pageImage); ?>" />
  <link rel="icon" href="assets/brand/logo-icon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&display=swap" />
  <link rel="stylesheet" href="css/main.css?v=<?php echo filemtime(__DIR__ . '/css/main.css'); ?>" />
  <link rel="stylesheet" href="css/animations.css?v=<?php echo filemtime(__DIR__ . '/css/animations.css'); ?>" />
  <link rel="stylesheet" href="css/hero.css?v=<?php echo filemtime(__DIR__ . '/css/hero.css'); ?>" />
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a href="/" class="brand">
<img src="assets/brand/logo-icon.png" alt="Trusted Peptide" class="brand-logo" />
        <span class="brand-name">Trusted<span class="lab"><span class="brand-dash">-</span>Peptide</span></span>
      </a>
      <nav class="main-nav">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="best-sellers">Best Sellers</a>
        <a href="blog">Blog</a>
        <a href="tips">Tips &amp; Guide</a>
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
      <a href="blog">Blog</a>
      <a href="tips">Tips &amp; Guide</a>
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

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="margin-bottom:12px;gap:10px;"><img src="assets/brand/logo-icon.png" alt="Trusted Peptide" style="width:32px;height:32px;flex-shrink:0;" aria-hidden="true" /><span>Trusted<span style="color:var(--accent);"> Peptide</span></span></div>
          <p style="max-width:32ch;">EU-sourced research peptides, certified for purity and consistency. For laboratory and research use only.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul><li><a href="products">All Products</a></li><li><a href="cart">Cart</a></li><li><a href="checkout">Checkout</a></li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul><li><a href="about">About</a></li><li><a href="blog">Blog</a></li><li><a href="tips">Tips &amp; Guide</a></li><li><a href="peptide-guide">Peptide Guide</a></li><li><a href="contact">Contact</a></li></ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul><li><a href="https://wa.me/32469126244" target="_blank" rel="noopener">+32 469 12 62 44</a></li><li><a href="contact">Support</a></li><li><img class="badge-eu" src="assets/brand/eu-seal.png" alt="EU Certified Lab" width="72" height="72" loading="lazy" /></li></ul>
        </div>
      </div>
      <div class="footer-methods">
        <div class="footer-methods-group">
          <span class="footer-methods-label">We Ship With</span>
          <div class="footer-methods-icons">
            <span class="icon-chip brand-dhl">DHL</span>
            <span class="icon-chip brand-gls">GLS</span>
            <span class="icon-chip brand-bpost">Bpost</span>
            <span class="icon-chip brand-postnl">PostNL</span>
            <span class="icon-chip brand-ups">UPS</span>
            <span class="icon-chip brand-dpd">DPD</span>
            <span class="icon-chip brand-fedex">FedEx</span>
          </div>
        </div>
        <div class="footer-methods-group">
          <span class="footer-methods-label">We Accept</span>
          <div class="footer-methods-icons">
            <span class="icon-chip brand-visa">Visa</span>
            <span class="icon-chip brand-mastercard">Mastercard</span>
            <span class="icon-chip brand-paypal">PayPal</span>
            <span class="icon-chip brand-klarna">Klarna</span>
            <span class="icon-chip brand-ideal">iDEAL</span>
            <span class="icon-chip brand-debitcard">Debit Card</span>
            <span class="icon-chip brand-payafter">Pay After Delivery</span>
            <span class="icon-chip brand-bitcoin">Bitcoin</span>
            <span class="icon-chip brand-usdc">USDC</span>
            <span class="icon-chip brand-usdt">USDT</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 trusted-peptide.com — For research use only. Not for human consumption.</span>
        <span>All prices in EUR</span>
      </div>
    </div>
  </footer>

  <script src="js/pricing.js?v=<?php echo filemtime(__DIR__ . '/js/pricing.js'); ?>" data-cfasync="false"></script>
  <script src="js/products-data.js?v=<?php echo filemtime(__DIR__ . '/js/products-data.js'); ?>" data-cfasync="false"></script>
  <script src="js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="js/share.js?v=<?php echo filemtime(__DIR__ . '/js/share.js'); ?>" data-cfasync="false"></script>
  <script src="js/gallery-data.js?v=<?php echo filemtime(__DIR__ . '/js/gallery-data.js'); ?>" data-cfasync="false"></script>
  <script src="js/gallery-lightbox.js?v=<?php echo filemtime(__DIR__ . '/js/gallery-lightbox.js'); ?>" data-cfasync="false"></script>
  <script src="js/product-detail.js?v=<?php echo filemtime(__DIR__ . '/js/product-detail.js'); ?>" data-cfasync="false"></script>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
