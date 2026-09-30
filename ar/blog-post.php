<?php
require_once __DIR__ . '/../admin-php/config.php';
require_once __DIR__ . '/../admin-php/data.php';
require_once __DIR__ . '/../admin-php/seo.php';

$postId = isset($_GET['id']) ? (string) $_GET['id'] : '';
$posts = load_blog_posts();
$post = null;
foreach ($posts as $p) {
    if ($p['id'] === $postId) { $post = $p; break; }
}

// Unknown or missing id: never fall back to other content (that made
// every bad URL a duplicate page). Empty id goes to the listing page;
// an unknown id gets a real 404.
if (!$post) {
    if ($postId === '') { header('Location: /ar/blog', true, 301); exit; }
    http_response_code(404);
    include __DIR__ . '/404.php';
    exit;
}
$pageTitle = $post ? htmlspecialchars($post['title']) . ' — trusted-peptide.com' : 'المدونة — trusted-peptide.com';
$pageDesc = $post && !empty($post['summary'])
    ? htmlspecialchars($post['summary'])
    : 'مقالات تعليمية عن الببتيدات البحثية — الآليات والفئات وطريقة التعامل.';
$pageUrl = 'https://trusted-peptide.com/ar/blog-post' . ($post ? '?id=' . rawurlencode($post['id']) : '');
$pageImage = $post && !empty($post['coverImage'])
    ? 'https://trusted-peptide.com/' . ltrim($post['coverImage'], '/')
    : 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';
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
  <link rel="canonical" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <?php if ($post): ?>
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/blog-post?id=<?php echo rawurlencode($post['id']); ?>" />
  <link rel="alternate" hreflang="ar" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/blog-post?id=<?php echo rawurlencode($post['id']); ?>" />
  <?php endif; ?>
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="<?php echo $pageTitle; ?>" />
  <meta property="og:description" content="<?php echo $pageDesc; ?>" />
  <meta property="og:url" content="<?php echo htmlspecialchars($pageUrl); ?>" />
  <meta property="og:image" content="<?php echo htmlspecialchars($pageImage); ?>" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="<?php echo $pageTitle; ?>" />
  <meta name="twitter:description" content="<?php echo $pageDesc; ?>" />
  <meta name="twitter:image" content="<?php echo htmlspecialchars($pageImage); ?>" />
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
  <?php seo_jsonld(seo_article($post['title'], $post['summary'] ?? '', $pageUrl, $pageImage, $post['createdAt'] ?? '', 'ar')); ?>
  <?php seo_jsonld(seo_breadcrumb([['الرئيسية', 'https://trusted-peptide.com/ar/'], ['المدونة', 'https://trusted-peptide.com/ar/blog'], [$post['title'], $pageUrl]])); ?>
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
        <a href="<?php echo $post ? '/blog-post?id=' . rawurlencode($post['id']) : '/blog'; ?>" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="<?php echo $post ? '/blog-post?id=' . rawurlencode($post['id']) : '/blog'; ?>" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:48px; max-width:800px;" id="blog-post-detail-root">
    <?php if ($post): ?>
    <!-- Server-rendered fallback: replaced by blog-ar.js on load. -->
    <div class="breadcrumb">
      <a href="/ar/">الرئيسية</a> / <a href="blog">المدونة</a> / <?php echo htmlspecialchars($post['title']); ?>
    </div>
    <article class="guide-article">
      <h1><?php echo htmlspecialchars($post['title']); ?></h1>
      <p class="guide-article-summary"><?php echo htmlspecialchars($post['summary']); ?></p>
      <?php if (!empty($post['coverImage'])): ?>
      <div class="guide-article-gallery">
        <img src="/<?php echo htmlspecialchars($post['coverImage']); ?>" alt="<?php echo htmlspecialchars($post['title']); ?>" loading="lazy" />
      </div>
      <?php endif; ?>
      <?php if (!empty($post['video'])): ?>
      <div class="guide-article-video"><video controls src="/<?php echo htmlspecialchars($post['video']); ?>"></video></div>
      <?php endif; ?>
      <div class="guide-article-body blog-post-body"><?php echo $post['bodyHtml']; ?></div>
      <?php if (!empty($post['embedHtml'])): ?>
      <div class="guide-article-embed"><?php echo $post['embedHtml']; ?></div>
      <?php endif; ?>
      <div class="guide-article-share" id="blog-share-wrap"></div>
    </article>
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
  <script src="../js/share.js?v=<?php echo filemtime(__DIR__ . '/../js/share.js'); ?>" data-cfasync="false"></script>
  <script src="../js/blog-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/blog-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
