<?php
require_once __DIR__ . '/admin-php/config.php';
require_once __DIR__ . '/admin-php/data.php';
$galleryItems = load_gallery_items();
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
  <title>Product Gallery: Research Peptide Vials &amp; Packaging | Trusted-Peptide</title>
  <meta name="description" content="Photos and videos from trusted-peptide.com — lab, packaging, and product shots." />
  <link rel="canonical" href="https://trusted-peptide.com/gallery" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/gallery" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/gallery" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/gallery" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="Product Gallery: Research Peptide Vials &amp; Packaging | Trusted-Peptide" />
  <meta property="og:description" content="Photos and videos from trusted-peptide.com — lab, packaging, and product shots." />
  <meta property="og:url" content="https://trusted-peptide.com/gallery" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Product Gallery: Research Peptide Vials &amp; Packaging | Trusted-Peptide" />
  <meta name="twitter:description" content="Photos and videos from trusted-peptide.com — lab, packaging, and product shots." />
  <meta name="twitter:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
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
        <a href="blog">Blog</a>

        <a href="peptide-guide">Peptide Guide</a>
        <a href="gallery">Gallery</a>
        <a href="contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="/ar/gallery" class="lang-switch" title="التبديل إلى العربية">عربي</a>
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
      <a href="/ar/gallery" class="lang-switch">عربي</a>
    </nav>

  <main class="section container" style="padding-top:56px;">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Gallery</span>
        <h1 style="margin-bottom:0;">Photos &amp; Videos</h1>
        <p style="max-width:52ch; margin-top:12px;">Lab documentation — vials, batches, and the protocols behind them.</p>
      </div>
    </div>

    <?php $hasGalleryItems = false; foreach ($galleryItems as $g) { if (!empty($g['id']) && !empty($g['src'])) { $hasGalleryItems = true; break; } } ?>
    <?php if (!$hasGalleryItems): ?>
    <div class="gallery-empty-state">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="8.5" cy="10" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M21 15l-5-5-11 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>No photos or videos yet — check back soon.</p>
    </div>
    <?php else: ?>
    <div class="gallery-grid" id="gallery-grid">
      <?php $photoNum = 0; $videoNum = 0; foreach ($galleryItems as $g): if (empty($g['id']) || empty($g['src'])) continue;
        $isVideo = $g['type'] === 'video';
        $tag = $isVideo ? sprintf('VID %03d', ++$videoNum) : sprintf('No. %03d', ++$photoNum);
      ?>
      <div class="gallery-tile" data-gallery-src="<?php echo htmlspecialchars($g['src']); ?>" data-gallery-type="<?php echo htmlspecialchars($g['type']); ?>" data-gallery-caption="<?php echo htmlspecialchars($g['caption']); ?>">
        <?php if ($isVideo && empty($g['thumbnail'])): ?>
        <video src="<?php echo htmlspecialchars($g['src']); ?>" muted preload="metadata"></video>
        <?php else: ?>
        <img src="<?php echo htmlspecialchars($isVideo ? $g['thumbnail'] : $g['src']); ?>" alt="<?php echo htmlspecialchars($g['caption']); ?>" loading="lazy" />
        <?php endif; ?>
        <span class="gallery-tile-tag"><?php echo $tag; ?></span>
        <?php if ($isVideo): ?>
        <span class="gallery-tile-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
        <?php endif; ?>
        <?php if (!empty($g['caption'])): ?>
        <span class="gallery-tile-caption"><?php echo htmlspecialchars($g['caption']); ?></span>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>
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
  <script src="js/gallery-lightbox.js?v=<?php echo filemtime(__DIR__ . '/js/gallery-lightbox.js'); ?>" data-cfasync="false"></script>
  <script>document.addEventListener("DOMContentLoaded", function () { initGalleryLightbox("#gallery-grid"); });</script>
  <script src="js/theme.js?v=<?php echo filemtime(__DIR__ . '/js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="js/main.js?v=<?php echo filemtime(__DIR__ . '/js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
