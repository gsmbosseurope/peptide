<?php
/**
 * Arabic product detail page — server-side SEO twin of ../product.php.
 * Reads the same ?id= against js/products-data-ar.js (translated name /
 * shortDescription, English category/categories/images/variants preserved
 * so lookups stay in sync with the English catalog) so title/meta/OG tags
 * are in Arabic for this URL. Not wired into admin-php/data.php's CRUD
 * layer yet — this file is hand-maintained, translated alongside the
 * English catalog when products are added.
 */
// ROOT_DIR = public_html (parent of ar/)
define('AR_ROOT_DIR', __DIR__ . '/..');

function load_products_ar() {
    $file = AR_ROOT_DIR . '/js/products-data-ar.js';
    if (!file_exists($file)) return [];
    $code = file_get_contents($file);
    return extract_const_json_ar($code, 'PRODUCTS') ?: [];
}

/** Same balanced-bracket JSON extractor as admin-php/data.php's extract_const_json(), duplicated here to avoid pulling in the full admin data layer for a single read-only lookup. */
function extract_const_json_ar($code, $name) {
    if (!preg_match('/const\s+' . preg_quote($name, '/') . '\s*=\s*/', $code, $m, PREG_OFFSET_CAPTURE)) {
        return null;
    }
    $start = $m[0][1] + strlen($m[0][0]);
    $depth = 0;
    $inString = false;
    $stringChar = '';
    $escaped = false;
    $len = strlen($code);
    $end = -1;
    for ($i = $start; $i < $len; $i++) {
        $ch = $code[$i];
        if ($inString) {
            if ($escaped) {
                $escaped = false;
            } elseif ($ch === '\\') {
                $escaped = true;
            } elseif ($ch === $stringChar) {
                $inString = false;
            }
            continue;
        }
        if ($ch === '"' || $ch === "'") {
            $inString = true;
            $stringChar = $ch;
            continue;
        }
        if ($ch === '[' || $ch === '{') {
            $depth++;
        } elseif ($ch === ']' || $ch === '}') {
            $depth--;
            if ($depth === 0) {
                $end = $i + 1;
                break;
            }
        }
    }
    if ($end === -1) return null;
    $jsonLiteral = substr($code, $start, $end - $start);
    return json_decode($jsonLiteral, true);
}

$productId = isset($_GET['id']) ? (string) $_GET['id'] : '';
$products = load_products_ar();
$product = null;
foreach ($products as $p) {
    if ($p['id'] === $productId) { $product = $p; break; }
}
if (!$product && count($products)) $product = $products[0];

$pageTitle = $product ? htmlspecialchars($product['name']) . ' — trusted-peptide.com' : 'المنتج — trusted-peptide.com';
$pageDesc = $product && !empty($product['shortDescription'])
    ? htmlspecialchars(trim(strip_tags($product['shortDescription'])))
    : 'ببتيد بحثي مصدره الاتحاد الأوروبي، معتمد للنقاء والجودة الثابتة.';
$pageUrl = 'https://trusted-peptide.com/ar/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageUrlEn = 'https://trusted-peptide.com/product' . ($product ? '?id=' . rawurlencode($product['id']) : '');
$pageImage = $product && !empty($product['images'][0])
    ? 'https://trusted-peptide.com/' . ltrim($product['images'][0], '/')
    : 'https://trusted-peptide.com/assets/brand/hero-vials.jpg';

// Product schema (JSON-LD) — same AggregateOffer pattern as product.php.
// Skipped when the product has no translated name yet (untranslated
// products render an empty-state page instead of real content, so there's
// nothing meaningful to describe).
$productSchema = null;
if ($product && !empty($product['name']) && !empty($product['variants'])) {
    $prices = array_map(function ($v) { return (float) $v['price']; }, $product['variants']);
    $productSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Product',
        'name' => $product['name'],
        'description' => trim(strip_tags($product['shortDescription'] ?? '')),
        'image' => $pageImage,
        'url' => $pageUrl,
        'inLanguage' => 'ar',
        'offers' => [
            '@type' => 'AggregateOffer',
            'priceCurrency' => 'EUR',
            'lowPrice' => min($prices),
            'highPrice' => max($prices),
            'offerCount' => count($product['variants']),
            'availability' => 'https://schema.org/InStock',
            'url' => $pageUrl,
        ],
    ];
}
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
      var validPalettes = ["bloom", "ember", "forest", "tide", "crimson", "royal", "papaya", "orbit", "neoncyan", "lakers", "aurora", "blueprint", "coastal", "citrusink", "chocolate", "burgundy"];
      var storedPalette = localStorage.getItem("peptidesLabsPalette");
      var palette = validPalettes.indexOf(storedPalette) !== -1 ? storedPalette : (typeof THEME_SETTINGS !== "undefined" ? THEME_SETTINGS.defaultPaletteId : null);
      if (palette && palette !== "classic") document.documentElement.setAttribute("data-palette", palette);
    })();
  </script>
  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo $pageDesc; ?>" />
  <link rel="canonical" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="en" href="<?php echo htmlspecialchars($pageUrlEn); ?>" />
  <link rel="alternate" hreflang="ar" href="<?php echo htmlspecialchars($pageUrl); ?>" />
  <link rel="alternate" hreflang="x-default" href="<?php echo htmlspecialchars($pageUrlEn); ?>" />
  <meta property="og:type" content="product" />
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
  <style>
    /* عنوان المنتج — محاذاة إنجليزية (LTR) لأن الأسماء لاتينية */
    #product-detail-root h1,
    .pdp-name, .pdp-title, .product-name, .product-detail-name,
    [class*="pdp-n"], [class*="product-name"] {
      direction: ltr !important;
      text-align: left !important;
      unicode-bidi: isolate;
    }
  </style>
  <?php if ($productSchema): ?>
  <script type="application/ld+json"><?php echo json_encode($productSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?></script>
  <?php endif; ?>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a href="/ar/" class="brand">
<img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" class="brand-logo" />
        <span class="brand-name">Trusted<span class="lab"><span class="brand-dash">-</span>Peptide</span></span>
      </a>
      <nav class="main-nav">
        <a href="/ar/"">الرئيسية</a>
        <a href="about">من نحن</a>
        <a href="best-sellers">الأكثر مبيعاً</a>
        <a href="blog">المدونة</a>

        <a href="peptide-guide">دليل الببتيد</a>
        <a href="gallery">معرض الصور</a>
        <a href="contact">تواصل معنا</a>
      </nav>
      <div class="header-actions">
        <a href="<?php echo htmlspecialchars($pageUrlEn); ?>" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="/ar/"">الرئيسية</a>
      <a href="about">من نحن</a>
      <a href="best-sellers">الأكثر مبيعاً</a>
      <a href="blog">المدونة</a>

      <a href="peptide-guide">دليل الببتيد</a>
      <a href="gallery">معرض الصور</a>
      <a href="contact">تواصل معنا</a>
      <a href="<?php echo htmlspecialchars($pageUrlEn); ?>" class="lang-switch">English</a>
    </nav>

  <main class="section container" style="padding-top:48px;" id="product-detail-root">
    <?php if ($product): ?>
    <!-- Server-rendered fallback: replaced by product-detail.js on load. -->
    <div class="breadcrumb">
      <a href="/ar/"">الرئيسية</a> / <a href="products">المنتجات</a> / <?php echo htmlspecialchars($product['name']); ?>
    </div>
    <h1><?php echo htmlspecialchars($product['name']); ?></h1>
    <div class="pd-desc"><?php echo $product['shortDescription']; ?></div>
    <?php if (!empty($product['images'][0])): ?>
    <img src="/<?php echo htmlspecialchars($product['images'][0]); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" width="600" height="600" style="max-width:100%;height:auto;" />
    <?php endif; ?>
    <?php endif; ?>
  </main>

  <section class="category-icons-section">
    <div class="container">
      <span class="eyebrow">تسوق حسب الفئة</span>
      <div class="category-icons-grid" id="category-icons-grid"></div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="margin-bottom:12px;gap:10px;"><img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" style="width:32px;height:32px;flex-shrink:0;" aria-hidden="true" /><span>Trusted<span style="color:var(--accent);"> Peptide</span></span></div>
          <p style="max-width:32ch;">ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة. للاستخدام المخبري والبحثي فقط.</p>
        </div>
        <div>
          <h4>المتجر</h4>
          <ul><li><a href="products">كل المنتجات</a></li><li><a href="cart">السلة</a></li><li><a href="checkout">إتمام الطلب</a></li></ul>
        </div>
        <div>
          <h4>الشركة</h4>
          <ul><li><a href="about">من نحن</a></li><li><a href="blog">المدونة</a></li><li></li><li><a href="peptide-guide">دليل الببتيد</a></li><li><a href="contact">تواصل معنا</a></li></ul>
        </div>
        <div>
          <h4>تواصل معنا</h4>
          <ul><li><a href="https://wa.me/32469126244" target="_blank" rel="noopener" dir="ltr">+32 469 12 62 44</a></li><li><a href="contact">الدعم</a></li><li><img class="badge-eu" src="../assets/brand/eu-seal.png" alt="مختبر معتمد أوروبي" width="72" height="72" loading="lazy" /></li></ul>
        </div>
      </div>
                  <div class="footer-contact-section">
        <h4 class="footer-contact-heading">تواصل معنا</h4>
        <div class="footer-contact-row">
          <span class="footer-contact-label">إتصل بنا</span>
          <a href="tel:+32469126244" style="white-space:nowrap;">+32 469 12 62 44</a>
          <a class="footer-whatsapp-icon" href="https://wa.me/32469126244" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64zm-5.55 12.2h-.02a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.28-3.5 6.6 6.6 0 01-6.67 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.51.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" fill="#fff"/></svg></a>
        </div>
      </div>
      <div class="footer-methods">
        <div class="footer-methods-group">
          <span class="footer-methods-label">نشحن عبر</span>
          <div class="footer-methods-icons">
            <span class="icon-chip brand-dhl">DHL</span>
            <span class="icon-chip brand-bpost">Bpost</span>
            <span class="icon-chip brand-fedex">FedEx</span>
            <span class="icon-chip brand-gls">GLS</span>
            <span class="icon-chip brand-postnl">PostNL</span>
            <span class="icon-chip brand-ups">UPS</span>
            <span class="icon-chip brand-dpd">DPD</span>
            <span class="icon-chip brand-tnt">TNT</span>
          </div>
        </div>
        <div class="footer-methods-group">
          <span class="footer-methods-label">نقبل</span>
          <div class="footer-methods-icons">
            <span class="icon-chip brand-visa">Visa</span>
            <span class="icon-chip brand-mastercard">Mastercard</span>
            <span class="icon-chip brand-paypal">PayPal</span>
            <span class="icon-chip brand-applepay">Apple Pay</span>
            <span class="icon-chip brand-googlepay">Google Pay</span>
            <span class="icon-chip brand-digitalwallet">Digital Wallet</span>
            <span class="icon-chip brand-klarna">Klarna</span>
            <span class="icon-chip brand-ideal">iDEAL</span>
            <span class="icon-chip brand-bnpfortis">BNP Fortis</span>
            <span class="icon-chip brand-belfius">Belfius</span>
            <span class="icon-chip brand-kbc">KBC</span>
            <span class="icon-chip brand-ing">ING</span>
            <span class="icon-chip brand-debitcard">Debit Card</span>
            <span class="icon-chip brand-payafter">Pay After Delivery</span>
            <span class="icon-chip brand-bitcoin">Bitcoin</span>
            <span class="icon-chip brand-usdc">USDC</span>
            <span class="icon-chip brand-usdt">USDT</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 trusted-peptide.com — للاستخدام البحثي فقط. غير مخصص للاستهلاك البشري.</span>
        <span>كل الأسعار باليورو</span>
      </div>
    </div>
  </footer>

  <script src="../js/pricing.js?v=<?php echo filemtime(__DIR__ . '/../js/pricing.js'); ?>" data-cfasync="false"></script>
  <script src="../js/products-data-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/products-data-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/category-labels-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/category-labels-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/../js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="../js/share.js?v=<?php echo filemtime(__DIR__ . '/../js/share.js'); ?>" data-cfasync="false"></script>
  <script src="../js/gallery-data.js?v=<?php echo filemtime(__DIR__ . '/../js/gallery-data.js'); ?>" data-cfasync="false"></script>
  <script src="../js/gallery-lightbox.js?v=<?php echo filemtime(__DIR__ . '/../js/gallery-lightbox.js'); ?>" data-cfasync="false"></script>
  <script src="../js/product-detail-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/product-detail-ar.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
