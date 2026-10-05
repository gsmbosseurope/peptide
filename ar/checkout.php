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
  <title>إتمام الطلب — trusted-peptide.com</title>
  <meta name="robots" content="noindex,follow" />
  <link rel="canonical" href="https://trusted-peptide.com/ar/checkout" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/checkout" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/checkout" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/checkout" />
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
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a href="/ar/" class="brand">
<img src="../assets/brand/logo-icon.png" alt="ترستد ببتيد" class="brand-logo" />
        <span class="brand-name">ترستد<span class="lab"><span class="brand-dash">-</span>ببتيد</span></span>
      </a>
      <nav class="main-nav">
        <a href="/ar/">الرئيسية</a>
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
        <a href="/checkout" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="/ar/">الرئيسية</a>
      <a href="about">من نحن</a>
      <a href="best-sellers">الأكثر مبيعاً</a>
      <a href="cosmetics">مستحضرات التجميل</a>
      <a href="vitamins">الفيتامينات</a>
      <a href="blog">المدونة</a>

      <a href="peptide-guide">دليل الببتيد</a>
      <a href="gallery">معرض الصور</a>
      <a href="contact">تواصل معنا</a>
      <a href="/checkout" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:48px; max-width:900px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:0;">
      <img src="../assets/brand/logo-icon.png" alt="ترستد ببتيد" width="36" height="36" style="flex-shrink:0;" aria-hidden="true" />
      <h1 style="margin:0;">إتمام الطلب</h1>
    </div>
    <div class="cart-layout checkout-layout">
      <div>
        <div id="checkout-form-panel">
          <form id="checkout-form">
            <div class="field">
              <label for="name">الاسم الكامل</label>
              <input type="text" id="name" name="name" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="phone">رقم الهاتف / واتساب</label>
              <input type="tel" id="phone" name="phone" autocomplete="tel" inputmode="tel" required dir="ltr" />
            </div>
            <div class="field">
              <label for="address">عنوان الشحن</label>
              <textarea id="address" name="address" autocomplete="street-address" required></textarea>
            </div>
            <div class="field">
              <label for="notes">ملاحظات الطلب (اختياري)</label>
              <textarea id="notes" name="notes"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">مراجعة وإرسال الطلب</button>
            <p style="font-size:0.8rem; margin-top:12px;">لا يتم أخذ أي دفعة هنا. سنؤكد طلبك ونرسل رابط دفع آمناً عبر واتساب أو البريد الإلكتروني.</p>
          </form>
        </div>
        <div id="checkout-confirm-panel" style="display:none;">
          <h3>تقريباً انتهينا — أرسل طلبك</h3>
          <p>اختر الطريقة التي تريد بها إرسال تفاصيل طلبك إلى فريقنا:</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a id="checkout-whatsapp-link" class="btn btn-primary" target="_blank" rel="noopener">إرسال عبر واتساب</a>
            <a id="checkout-mailto-link" class="btn btn-secondary">إرسال عبر البريد الإلكتروني</a>
          </div>
        </div>
      </div>
      <div class="summary-card" id="checkout-summary"></div>
    </div>
  </main>

  <?php $footerLang = 'ar'; include __DIR__ . '/../partials/footer.php'; ?>

  <script src="../js/pricing.js?v=<?php echo filemtime(__DIR__ . '/../js/pricing.js'); ?>" data-cfasync="false"></script>
  <?php require_once __DIR__ . '/../partials/slim.php'; echo slim_data_tag('ar', '../'); ?>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
  <script src="../js/cart-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/cart-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/checkout-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/checkout-ar.js'); ?>" data-cfasync="false"></script>
</body>
</html>
