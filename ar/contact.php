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
  <title>تواصل معنا | Trusted-Peptide: الطلبات والجملة ودعم الببتيدات البحثية</title>
  <meta name="description" content="لديك سؤال عن طلب أو مركّب؟ تواصل مع Trusted-Peptide عبر واتساب أو البريد الإلكتروني." />
  <link rel="canonical" href="https://trusted-peptide.com/ar/contact" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/contact" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/contact" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/contact" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="تواصل معنا | Trusted-Peptide: الطلبات والجملة ودعم الببتيدات البحثية" />
  <meta property="og:description" content="لديك سؤال عن طلب أو مركّب؟ تواصل مع Trusted-Peptide عبر واتساب أو البريد الإلكتروني." />
  <meta property="og:url" content="https://trusted-peptide.com/ar/contact" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="تواصل معنا | Trusted-Peptide: الطلبات والجملة ودعم الببتيدات البحثية" />
  <meta name="twitter:description" content="لديك سؤال عن طلب أو مركّب؟ تواصل مع Trusted-Peptide عبر واتساب أو البريد الإلكتروني." />
  <meta name="twitter:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
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
        <a href="/contact" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="/contact" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:56px;">
    <img src="../assets/brand/logo-icon.png" alt="ترستد ببتيد" width="44" height="44" style="margin-bottom:16px;" aria-hidden="true" />
    <span class="eyebrow">تواصل معنا</span>
    <h1>لديك سؤال عن طلب أو مركّب؟</h1>
    <p style="max-width:52ch;">فريقنا يرد بأسرع وقت عبر واتساب. للاستفسارات عن الجملة أو شهادات التحليل، راسلنا مباشرة عبر البريد الإلكتروني.</p>

    <div class="contact-methods reveal-stagger">
      <div class="contact-card">
        <h3>واتساب / هاتف</h3>
        <p>أسرع رد على أسئلة الطلبات وأسعار الجملة.</p>
        <a href="https://wa.me/32469126244" target="_blank" rel="noopener" class="btn btn-primary" dir="ltr">+32 469 12 62 44</a>
      </div>
      <div class="contact-card">
        <h3>البريد الإلكتروني</h3>
        <p>لشهادات التحليل واستفسارات الشراكة.</p>
        <a href="mailto:sale@trusted-peptide.com" class="btn btn-secondary" dir="ltr">sale@trusted-peptide.com</a>
      </div>
      <div class="contact-card">
        <h3>الجملة</h3>
        <p>تطلب 10+ وحدات بانتظام؟ اسأل عن مستويات أسعار مخصصة.</p>
        <a href="mailto:sale@trusted-peptide.com" class="btn btn-secondary" dir="ltr">sale@trusted-peptide.com</a>
      </div>
    </div>

    <div style="margin-top:56px;">
      <h2>أرسل رسالة</h2>
      <form style="max-width:520px;" onsubmit="event.preventDefault(); window.location.href='mailto:sale@trusted-peptide.com?subject=' + encodeURIComponent('استفسار من الموقع من ' + this.name.value) + '&body=' + encodeURIComponent(this.message.value + '\n\nالرد على: ' + this.email.value);">
        <div class="field">
          <label for="c-name">الاسم</label>
          <input type="text" id="c-name" name="name" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="c-email">البريد الإلكتروني</label>
          <input type="email" id="c-email" name="email" autocomplete="email" inputmode="email" spellcheck="false" required dir="ltr" />
        </div>
        <div class="field">
          <label for="c-message">الرسالة</label>
          <textarea id="c-message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">إرسال الرسالة</button>
      </form>
    </div>
  </main>

  <?php $footerLang = 'ar'; include __DIR__ . '/../partials/footer.php'; ?>

  <script src="../js/pricing.js?v=<?php echo filemtime(__DIR__ . '/../js/pricing.js'); ?>" data-cfasync="false"></script>
  <?php require_once __DIR__ . '/../partials/slim.php'; echo slim_data_tag('ar', '../'); ?>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
