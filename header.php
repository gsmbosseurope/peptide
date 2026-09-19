<?php
/**
 * header.php — Shared site header for trusted-peptide.com
 * Usage: <?php include __DIR__ . '/header.php'; ?>
 *
 * Variables you can set BEFORE including this file:
 *   $pageTitle       — <title> tag content (optional, falls back to site default)
 *   $pageDescription — meta description (optional, falls back to site default)
 *   $pageCanonical   — canonical URL (optional, falls back to https://trusted-peptide.com/)
 *   $ogImage         — OG image URL (optional)
 *   $schemaJson      — array of JSON-LD schema objects to inject (optional)
 */

// Defaults
$pageTitle       = $pageTitle       ?? 'trusted-peptide.com — Research Peptides, EU Sourced &amp; Certified';
$pageDescription = $pageDescription ?? '120+ research peptides, HPLC-verified purity, EU sourced. Transparent variant pricing and wholesale discounts.';
$pageCanonical   = $pageCanonical   ?? 'https://trusted-peptide.com/';
$ogImage         = $ogImage         ?? 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';

// Default schema (override by setting $schemaJson before include)
if (!isset($schemaJson)) {
    $schemaJson = [
        [
            '@context' => 'https://schema.org',
            '@type'    => 'Organization',
            'name'     => 'Trusted-Peptide',
            'url'      => 'https://trusted-peptide.com/',
            'logo'     => 'https://trusted-peptide.com/assets/brand/logo-icon.png',
            'contactPoint' => [
                '@type'       => 'ContactPoint',
                'telephone'   => '+32-469-12-62-44',
                'contactType' => 'customer service',
            ],
        ],
        [
            '@context' => 'https://schema.org',
            '@type'    => 'WebSite',
            'name'     => 'Trusted-Peptide',
            'url'      => 'https://trusted-peptide.com/',
        ],
    ];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

  <!-- Theme: apply before first paint to avoid flash -->
  <script>
    (function() {
      /* Palette system disabled — identity is fixed (Emerald · Navy · Gold · Silver) */
      var stored = localStorage.getItem("peptidesLabsTheme");
      var theme = stored === "light" || stored === "dark" ? stored : "light";
      document.documentElement.setAttribute("data-theme", theme);
      /* Clear any previously stored palette so data-palette is never applied */
      try { localStorage.removeItem("peptidesLabsPalette"); } catch(_) {}
    })();
  </script>

  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>" />
  <link rel="canonical" href="<?php echo htmlspecialchars($pageCanonical); ?>" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/" />

  <meta property="og:type"        content="website" />
  <meta property="og:site_name"   content="Trusted-Peptide" />
  <meta property="og:title"       content="<?php echo htmlspecialchars(strip_tags($pageTitle)); ?>" />
  <meta property="og:description" content="<?php echo htmlspecialchars($pageDescription); ?>" />
  <meta property="og:url"         content="<?php echo htmlspecialchars($pageCanonical); ?>" />
  <meta property="og:image"       content="<?php echo htmlspecialchars($ogImage); ?>" />
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="<?php echo htmlspecialchars(strip_tags($pageTitle)); ?>" />
  <meta name="twitter:description" content="<?php echo htmlspecialchars($pageDescription); ?>" />
  <meta name="twitter:image"       content="<?php echo htmlspecialchars($ogImage); ?>" />

  <link rel="icon" href="assets/brand/logo-icon.png" type="image/png" />

  <!-- Fonts: preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Fonts: Space Grotesk (display) + Inter (body) + Roboto Mono (prices/numbers), async -->
  <link rel="preload" as="style"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap"
        onload="this.onload=null;this.rel='stylesheet'" />
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@500;600&display=swap" />
  </noscript>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/main.css?v=<?php echo filemtime(__DIR__ . '/css/main.css'); ?>" />
  <link rel="stylesheet" href="css/animations.css?v=<?php echo filemtime(__DIR__ . '/css/animations.css'); ?>" />
  <link rel="stylesheet" href="css/hero.css?v=<?php echo filemtime(__DIR__ . '/css/hero.css'); ?>" />

  <!-- JSON-LD structured data -->
  <?php foreach ($schemaJson as $schema): ?>
  <script type="application/ld+json"><?php echo json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
  <?php endforeach; ?>

  <!-- Page-specific inline styles can go here via $extraHead variable -->
  <?php if (!empty($extraHead)) echo $extraHead; ?>
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
        <a href="blog">Blog</a>
        <a href="peptide-guide">Peptide Guide</a>
        <a href="gallery">Gallery</a>
        <a href="contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="/ar/" class="lang-switch" title="تصفح الموقع بالعربية">عربي</a>
        <button class="theme-toggle" aria-label="Switch to light theme" title="Toggle light/dark theme">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        </button>
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
    <a href="peptide-guide">Peptide Guide</a>
    <a href="gallery">Gallery</a>
    <a href="contact">Contact</a>
    <a href="/ar/products" class="lang-switch">عربي</a>
  </nav>
