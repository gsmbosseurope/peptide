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
  <title>trusted-peptide.com — Research Peptides, EU Sourced &amp; Certified</title>
  <meta name="description" content="120+ research peptides, HPLC-verified purity, EU sourced. Transparent variant pricing and wholesale discounts." />
  <link rel="canonical" href="https://trusted-peptide.com/" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="trusted-peptide.com — Research Peptides, EU Sourced & Certified" />
  <meta property="og:description" content="120+ research peptides, HPLC-verified purity, EU sourced. Transparent variant pricing and wholesale discounts." />
  <meta property="og:url" content="https://trusted-peptide.com/" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="trusted-peptide.com — Research Peptides, EU Sourced & Certified" />
  <meta name="twitter:description" content="120+ research peptides, HPLC-verified purity, EU sourced. Transparent variant pricing and wholesale discounts." />
  <meta name="twitter:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
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
        <a href="/ar/" class="lang-switch" title="تصفح الموقع بالعربية">عربي</a>
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
      <a href="/ar/products" class="lang-switch">عربي</a>
    </nav>

  <section class="catalog-banner">
    <img class="catalog-banner-img" src="assets/brand/hero-vials.jpg" width="1600" height="678" fetchpriority="high" alt="DNA Peptides Lab research vials — BPC-157, GHK-Cu, SEMAX, TB-500, NAD+, Tirzepetide, GLOW, KLOW" />
    <div class="catalog-banner-fade"></div>
    <div class="container catalog-banner-content reveal">
      <span class="eyebrow">No.1 Trusted Peptides<br />in Europe</span>
      <h1 style="margin-bottom:0;">Research-Grade<br />Peptides</h1>
    </div>
  </section>

  <div class="shop-by-category-pill-wrap">
    <a href="#shop-by-category" class="shop-by-category-pill reveal">
      <span class="shop-by-category-pill-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/></svg>
      </span>
      <span class="shop-by-category-pill-text">
        <strong>Shop by Category</strong>
        <span>Browse peptides by research use</span>
      </span>
      <span class="shop-by-category-pill-arrow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </a>
  </div>

  <main class="section container" style="padding-top:16px;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-bottom:24px;">
      <span class="eyebrow" style="margin:0;">Most Requested</span>
      <a href="products" class="btn btn-ghost view-all-products-link">View All<span class="view-all-products-word"> Products</span> →</a>
    </div>
    <div class="product-grid" id="featured-grid"></div>
  </main>

  <section class="category-icons-section" id="shop-by-category">
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
          <ul><li><a href="/">All Products</a></li><li><a href="cart">Cart</a></li><li><a href="checkout">Checkout</a></li><li><a href="contact">Support</a></li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul><li><a href="about">About</a></li><li><a href="blog">Blog</a></li><li><a href="tips">Tips &amp; Guide</a></li><li><a href="peptide-guide">Peptide Guide</a></li></ul>
        </div>
        <div class="footer-seal-col">
          <img class="badge-eu" src="assets/brand/eu-seal.png" alt="EU Certified Lab" width="96" height="96" loading="lazy" />
        </div>
      </div>
      <div class="footer-contact-section">
        <h4 class="footer-contact-heading">Get in Touch</h4>
        <div class="footer-contact-row">
          <span class="footer-contact-label">Call Us</span>
          <a href="tel:+32469126244">+32 469 12 62 44</a>
          <a class="footer-whatsapp-icon" href="https://wa.me/32469126244" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64zm-5.55 12.2h-.02a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.28-3.5 6.6 6.6 0 01-6.67 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.51.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" fill="#fff"/></svg></a>
        </div>
      </div>
      <div class="footer-methods">
        <div class="footer-methods-group">
          <span class="footer-methods-label">We Ship With</span>
          <div class="footer-methods-icons">
            <span class="icon-chip brand-dhl">DHL</span>
            <span class="icon-chip brand-bpost">Bpost</span>
            <span class="icon-chip brand-fedex">FedEx</span>
            <span class="icon-chip brand-gls">GLS</span>
            <span class="icon-chip brand-postnl">PostNL</span>
            <span class="icon-chip brand-ups">UPS</span>
            <span class="icon-chip brand-dpd">DPD</span>
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
  <script src="js/catalog.js?v=<?php echo filemtime(__DIR__ . '/js/catalog.js'); ?>" data-cfasync="false"></script>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
