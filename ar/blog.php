<?php
require_once __DIR__ . '/../admin-php/config.php';
require_once __DIR__ . '/../admin-php/data.php';
$allPosts = load_blog_posts();
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
  <title>مدونة الببتيدات البحثية: الآليات والأبحاث وطرق الاستخدام | Trusted-Peptide</title>
  <meta name="description" content="مقالات تعليمية عن الببتيدات البحثية — الآليات والفئات وطريقة التعامل." />
  <link rel="canonical" href="https://trusted-peptide.com/ar/blog" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/blog" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/blog" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="مدونة الببتيدات البحثية: الآليات والأبحاث وطرق الاستخدام | Trusted-Peptide" />
  <meta property="og:description" content="مقالات تعليمية عن الببتيدات البحثية — الآليات والفئات وطريقة التعامل." />
  <meta property="og:url" content="https://trusted-peptide.com/ar/blog" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="مدونة الببتيدات البحثية: الآليات والأبحاث وطرق الاستخدام | Trusted-Peptide" />
  <meta name="twitter:description" content="مقالات تعليمية عن الببتيدات البحثية — الآليات والفئات وطريقة التعامل." />
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
        <a href="/blog" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="/blog" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:56px;">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">المدونة</span>
        <h1 style="margin-bottom:0;">مدونة أبحاث الببتيد</h1>
        <p style="max-width:52ch; margin-top:12px;">مقالات عن فئات الببتيد وآلياته وتطبيقاته البحثية.</p>
      </div>
    </div>

    <?php if (empty($allPosts)): ?>
    <div class="empty-state">
      <h3>لا توجد مقالات بعد</h3>
      <p>عد قريباً.</p>
    </div>
    <?php else: ?>
    <div class="guide-grid" id="blog-posts-grid">
      <?php foreach ($allPosts as $p): if (empty($p['id'])) continue; ?>
      <!-- Server-rendered fallback card: replaced by blog.js on load. -->
      <a class="guide-card" href="blog-post?id=<?php echo rawurlencode($p['id']); ?>">
        <div class="guide-card-media">
          <?php if (!empty($p['coverImage'])): ?>
            <img src="/<?php echo htmlspecialchars($p['coverImage']); ?>" alt="<?php echo htmlspecialchars($p['title']); ?>" loading="lazy" />
          <?php endif; ?>
        </div>
        <div class="guide-card-body">
          <span class="guide-card-title"><?php echo htmlspecialchars($p['title']); ?></span>
          <p class="guide-card-summary"><?php echo htmlspecialchars($p['summary']); ?></p>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
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
  <script src="../js/category-labels-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/category-labels-ar.js'); ?>" data-cfasync="false"></script>  <script src="../js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/../js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="../js/blog-data.js?v=<?php echo filemtime(__DIR__ . '/../js/blog-data.js'); ?>" data-cfasync="false"></script>
  <script src="../js/blog-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/blog-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
