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
  <title>Checkout â trusted-peptide.com</title>
  <meta name="robots" content="noindex,follow" />
  <link rel="canonical" href="https://trusted-peptide.com/checkout" />
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
        <a href="contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="/ar/checkout" class="lang-switch" title="التبديل إلى العربية">عربي</a>
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
      <a href="/ar/checkout" class="lang-switch">عربي</a>
    </nav>

  <main class="section container" style="padding-top:48px; max-width:900px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:0;">
      <img src="assets/brand/logo-icon.png" alt="Trusted Peptide" style="width:36px;height:36px;flex-shrink:0;" aria-hidden="true" />
      <h1 style="margin:0;">Checkout</h1>
    </div>
    <div class="cart-layout checkout-layout">
      <div>
        <div id="checkout-form-panel">
          <form id="checkout-form">
            <div class="field">
              <label for="name">Full name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="field">
              <label for="phone">Phone / WhatsApp number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div class="field">
              <label for="address">Shipping address</label>
              <textarea id="address" name="address" required></textarea>
            </div>
            <div class="field">
              <label for="notes">Order notes (optional)</label>
              <textarea id="notes" name="notes"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Review &amp; Send Order</button>
            <p style="font-size:0.8rem; margin-top:12px;">No payment is taken here. We'll confirm your order and send a secure payment link via WhatsApp or email.</p>
          </form>
        </div>
        <div id="checkout-confirm-panel" style="display:none;">
          <h3>Almost done â send your order</h3>
          <p>Choose how you'd like to send your order details to our team:</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a id="checkout-whatsapp-link" class="btn btn-primary" target="_blank" rel="noopener">Send via WhatsApp</a>
            <a id="checkout-mailto-link" class="btn btn-secondary">Send via Email</a>
          </div>
        </div>
      </div>
      <div class="summary-card" id="checkout-summary"></div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
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
        <span>Â© 2026 trusted-peptide.com â For research use only. Not for human consumption.</span>
        <span>All prices in EUR</span>
      </div>
    </div>
  </footer>

  <script src="js/pricing.js?v=<?php echo filemtime(__DIR__ . '/js/pricing.js'); ?>" data-cfasync="false"></script>
  <script src="js/products-data.js?v=<?php echo filemtime(__DIR__ . '/js/products-data.js'); ?>" data-cfasync="false"></script>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
  <script src="js/cart.js" data-cfasync="false"></script>
  <script src="js/checkout.js" data-cfasync="false"></script>
</body>
</html>
