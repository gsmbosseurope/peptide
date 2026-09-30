<?php
$organizationSchema = [
    '@context' => 'https://schema.org',
    '@type' => 'Organization',
    'name' => 'Trusted-Peptide',
    'url' => 'https://trusted-peptide.com/ar/',
    'logo' => 'https://trusted-peptide.com/assets/brand/logo-icon.png',
    'contactPoint' => [
        '@type' => 'ContactPoint',
        'telephone' => '+32-469-12-62-44',
        'contactType' => 'customer service',
    ],
];
$websiteSchema = [
    '@context' => 'https://schema.org',
    '@type' => 'WebSite',
    'name' => 'Trusted-Peptide',
    'url' => 'https://trusted-peptide.com/ar/',
    'inLanguage' => 'ar',
];
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
  <title>trusted-peptide.com — ببتيدات بحثية معتمدة أوروبية المصدر</title>
  <meta name="description" content="أكثر من 120 ببتيداً بحثياً، نقاء موثّق بتحليل HPLC، مصدرها الاتحاد الأوروبي. أسعار شفافة لكل مقاس وخصومات للكميات." />
  <link rel="canonical" href="https://trusted-peptide.com/ar/" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="trusted-peptide.com — ببتيدات بحثية معتمدة أوروبية المصدر" />
  <meta property="og:description" content="أكثر من 120 ببتيداً بحثياً، نقاء موثّق بتحليل HPLC، مصدرها الاتحاد الأوروبي. أسعار شفافة لكل مقاس وخصومات للكميات." />
  <meta property="og:url" content="https://trusted-peptide.com/ar/" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="trusted-peptide.com — ببتيدات بحثية معتمدة أوروبية المصدر" />
  <meta name="twitter:description" content="أكثر من 120 ببتيداً بحثياً، نقاء موثّق بتحليل HPLC، مصدرها الاتحاد الأوروبي. أسعار شفافة لكل مقاس وخصومات للكميات." />
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
  <script type="application/ld+json"><?php echo json_encode($organizationSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
  <script type="application/ld+json"><?php echo json_encode($websiteSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
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
        <a href="/ar/about">من نحن</a>
        <a href="/ar/best-sellers">الأكثر مبيعاً</a>
        <a href="/ar/cosmetics">مستحضرات التجميل</a>
        <a href="/ar/vitamins">الفيتامينات</a>
        <a href="/ar/blog">المدونة</a>

        <a href="/ar/peptide-guide">دليل الببتيد</a>
        <a href="/ar/gallery">معرض الصور</a>
        <a href="/ar/contact">تواصل معنا</a>
      </nav>
      <div class="header-actions">
        <a href="/" class="lang-switch" title="Switch to English">EN</a>
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
        <a href="/ar/cart" class="cart-link">السلة <span class="cart-count">0</span></a>
        <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

    <nav class="mobile-nav">
      <a href="/ar/">الرئيسية</a>
      <a href="/ar/about">من نحن</a>
      <a href="/ar/best-sellers">الأكثر مبيعاً</a>
      <a href="/ar/cosmetics">مستحضرات التجميل</a>
      <a href="/ar/vitamins">الفيتامينات</a>
      <a href="/ar/blog">المدونة</a>

      <a href="/ar/peptide-guide">دليل الببتيد</a>
      <a href="/ar/gallery">معرض الصور</a>
      <a href="/ar/contact">تواصل معنا</a>
      <a href="/" class="lang-switch">English</a>
    </nav>

  <section class="catalog-banner">
    <img class="catalog-banner-img" src="/assets/brand/hero-vials.jpg" width="1600" height="678" fetchpriority="high" alt="مختبر DNA Peptides — BPC-157, GHK-Cu, SEMAX, TB-500, NAD+, Tirzepetide, GLOW, KLOW" />
    <div class="catalog-banner-fade"></div>
    <div class="container catalog-banner-content reveal">
      <span class="eyebrow">الببتيدات الأكثر ثقة<br /><span class="eyebrow-center-line">في أوروبا</span></span>
      <h1 style="margin-bottom:0;">ببتيدات طبية<br />عالية الجودة</h1>
    </div>
  </section>

  <div class="shop-by-category-pill-wrap">
    <a href="#shop-by-category" class="shop-by-category-pill reveal">
      <span class="shop-by-category-pill-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.7"/></svg>
      </span>
      <span class="shop-by-category-pill-text">
        <strong>تسوق حسب الفئة</strong>
        <span>تصفح الببتيدات حسب الاستخدام البحثي</span>
      </span>
      <span class="shop-by-category-pill-arrow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </a>
  </div>

  <main class="section container" style="padding-top:16px;">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-bottom:24px;">
      <a href="/ar/best-sellers" class="eyebrow" style="margin:0; text-decoration:none;">الأكثر طلباً ←</a>
      <a href="/ar/products" class="btn btn-ghost view-all-products-link">عرض الكل<span class="view-all-products-word"> المنتجات</span> ←</a>
    </div>
    <div class="product-grid" id="featured-grid"></div>
  </main>

  <section class="category-icons-section" id="shop-by-category">
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
  <script src="../js/catalog.js?v=<?php echo filemtime(__DIR__ . '/../js/catalog.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
