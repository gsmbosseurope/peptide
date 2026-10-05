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
  <title>Checkout — trusted-peptide.com</title>
  <meta name="robots" content="noindex,follow" />
  <link rel="canonical" href="https://trusted-peptide.com/checkout" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/checkout" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/checkout" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/checkout" />
  <link rel="icon" href="assets/brand/logo-icon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap" /></noscript>
  <link rel="stylesheet" href="css/main.css?v=<?php echo filemtime(__DIR__ . '/css/main.css'); ?>" />
  <link rel="stylesheet" href="css/animations.css?v=<?php echo filemtime(__DIR__ . '/css/animations.css'); ?>" />
  <link rel="stylesheet" href="css/hero.css?v=<?php echo filemtime(__DIR__ . '/css/hero.css'); ?>" />
  <style>
    .footer-phone-bar{display:flex;align-items:center;gap:14px;padding:14px 0 4px;border-top:1px solid rgba(128,128,128,.18);margin-top:12px;}
    .footer-phone-label{font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.55;}
    .footer-phone-num{font-size:1.05rem;font-weight:600;white-space:nowrap;color:var(--accent,#4f8ef7);text-decoration:none;}
    .footer-phone-num:hover{text-decoration:underline;}
    .footer-bottom{display:flex;flex-wrap:nowrap;justify-content:space-between;gap:8px;padding-top:14px;border-top:1px solid rgba(128,128,128,.15);margin-top:8px;font-size:.78rem;opacity:.6;}
    .field-error{color:#e53e3e;font-size:0.8rem;display:block;margin-top:2px;}
    .field-valid-mark{color:#38a169;font-size:0.85rem;display:block;margin-top:2px;}
  </style>
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
        <a href="gallery">Gallery</a>
        <a href="blog">Blog</a>
        
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
      <a href="cosmetics">Cosmetics</a>
      <a href="vitamins">Vitamins</a>
      <a href="blog">Blog</a>
      
      <a href="peptide-guide">Peptide Guide</a>
      <a href="gallery">Gallery</a>
      <a href="contact">Contact</a>
      <a href="/ar/checkout" class="lang-switch">عربي</a>
    </nav>

  <main class="section container" style="padding-top:48px; max-width:900px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:0;">
      <img src="assets/brand/logo-icon.png" alt="Trusted Peptide" width="36" height="36" style="flex-shrink:0;" aria-hidden="true" />
      <h1 style="margin:0;">Checkout</h1>
    </div>
    <div class="cart-layout checkout-layout">
      <div>
        <div id="checkout-form-panel">
          <form id="checkout-form">
            <div class="field">
              <label for="name">Full name</label>
              <input type="text" id="name" name="name" autocomplete="name" required
                onblur="(function(el){var err=el.parentNode.querySelector('.field-error'),ok=el.parentNode.querySelector('.field-valid-mark');if(!el.value.trim()){if(err)err.textContent='Please enter your full name.';if(ok)ok.textContent='';}else{if(err)err.textContent='';if(ok)ok.textContent='✓';}})(this)" />
              <span class="field-error"></span>
              <span class="field-valid-mark"></span>
            </div>
            <div class="field">
              <label for="phone">Phone / WhatsApp number</label>
              <input type="tel" id="phone" name="phone" autocomplete="tel" inputmode="tel" required
                onblur="(function(el){var err=el.parentNode.querySelector('.field-error'),ok=el.parentNode.querySelector('.field-valid-mark'),v=el.value.trim();var valid=v.length>0&&/^[+\d][\d\s\-().]{5,}$/.test(v);if(!v){if(err)err.textContent='Please enter your phone number.';if(ok)ok.textContent='';}else if(!valid){if(err)err.textContent='Please enter a valid phone number.';if(ok)ok.textContent='';}else{if(err)err.textContent='';if(ok)ok.textContent='✓';}})(this)" />
              <span class="field-error"></span>
              <span class="field-valid-mark"></span>
            </div>
            <div class="field">
              <label for="address">Shipping address</label>
              <textarea id="address" name="address" autocomplete="street-address" required
                onblur="(function(el){var err=el.parentNode.querySelector('.field-error'),ok=el.parentNode.querySelector('.field-valid-mark');if(!el.value.trim()){if(err)err.textContent='Please enter your shipping address.';if(ok)ok.textContent='';}else{if(err)err.textContent='';if(ok)ok.textContent='✓';}})(this)"></textarea>
              <span class="field-error"></span>
              <span class="field-valid-mark"></span>
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
          <h3>Almost done — send your order</h3>
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

  <?php $footerLang = 'en'; include __DIR__ . '/partials/footer.php'; ?>

  <script src="js/pricing.js?v=<?php echo filemtime(__DIR__ . '/js/pricing.js'); ?>" data-cfasync="false"></script>
  <?php require_once __DIR__ . '/partials/slim.php'; echo slim_data_tag('en', ''); ?>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
  <script src="js/cart.js" data-cfasync="false"></script>
  <script src="js/checkout.js" data-cfasync="false"></script>
</body>
</html>
