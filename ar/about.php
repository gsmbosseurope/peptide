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
      var validPalettes = ["bloom", "ember", "forest", "tide", "crimson", "royal", "papaya", "orbit", "neoncyan", "lakers", "aurora", "blueprint", "coastal", "citrusink", "chocolate", "burgundy", "harmonynavy", "harmonyviolet", "harmonymauve", "harmonycream", "harmonymocha", "harmonyroyale", "harmonyteal", "harmonyvintage"];
      var storedPalette = localStorage.getItem("peptidesLabsPalette");
      var palette = validPalettes.indexOf(storedPalette) !== -1 ? storedPalette : (typeof THEME_SETTINGS !== "undefined" ? THEME_SETTINGS.defaultPaletteId : null);
      if (palette && palette !== "classic") document.documentElement.setAttribute("data-palette", palette);
    })();
  </script>
  <title>من نحن — trusted-peptide.com</title>
  <meta name="description" content="ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة. تعرّف على مصادرنا واختباراتنا وطريقة الشحن." />
  <link rel="canonical" href="https://trusted-peptide.com/ar/about" />
  <link rel="alternate" hreflang="en" href="https://trusted-peptide.com/about" />
  <link rel="alternate" hreflang="ar" href="https://trusted-peptide.com/ar/about" />
  <link rel="alternate" hreflang="x-default" href="https://trusted-peptide.com/about" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trusted-Peptide" />
  <meta property="og:title" content="من نحن — trusted-peptide.com" />
  <meta property="og:description" content="ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة. تعرّف على مصادرنا واختباراتنا وطريقة الشحن." />
  <meta property="og:url" content="https://trusted-peptide.com/ar/about" />
  <meta property="og:image" content="https://trusted-peptide.com/assets/brand/hero-vials.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="من نحن — trusted-peptide.com" />
  <meta name="twitter:description" content="ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة. تعرّف على مصادرنا واختباراتنا وطريقة الشحن." />
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
<img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" class="brand-logo" />
        <span class="brand-name">Trusted<span class="lab"><span class="brand-dash">-</span>Peptide</span></span>
      </a>
      <nav class="main-nav">
        <a href="/ar/">الرئيسية</a>
        <a href="about">من نحن</a>
        <a href="best-sellers">الأكثر مبيعاً</a>
        <a href="blog">المدونة</a>

        <a href="peptide-guide">دليل الببتيد</a>
        <a href="gallery">معرض الصور</a>
        <a href="contact">تواصل معنا</a>
      </nav>
      <div class="header-actions">
        <a href="/about" class="lang-switch" title="Switch to English">EN</a>
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
      <a href="blog">المدونة</a>

      <a href="peptide-guide">دليل الببتيد</a>
      <a href="gallery">معرض الصور</a>
      <a href="contact">تواصل معنا</a>
      <a href="/about" class="lang-switch">English</a>
    </nav>

  <main>
    <section class="hero" style="max-width:var(--max-width); margin:0 auto; padding-left:24px; padding-right:24px;">
      <div class="container" style="display:contents;">
        <div class="hero-copy">
          <img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" width="44" height="44" style="margin-bottom:16px;" aria-hidden="true" />
          <span class="eyebrow">مصدرها الاتحاد الأوروبي · موثّقة بتحليل HPLC</span>
          <h1>ببتيدات بحثية،<br />مقاسة إلى <span class="hl">الميكروغرام.</span></h1>
          <p class="hero-lede">أكثر من 120 ببتيداً عبر فئات بحثية للتعافي والأيض والجلد. كل دفعة معتمدة، وكل سعر شفاف — اختر المقاس، اختر الكمية، وشاهد السعر يتحدّث فوراً.</p>
          <div class="hero-cta-row">
            <a href="products" class="btn btn-primary">تصفح الكتالوج</a>
            <a href="contact" class="btn btn-secondary">تواصل معنا</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><span class="num">+120</span><span class="label">ببتيد</span></div>
            <div class="hero-stat"><span class="num">%99.9</span><span class="label">متوسط النقاء</span></div>
            <div class="hero-stat"><span class="num">EU</span><span class="label">مصدر ومختبر</span></div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-orb o1"></div>
          <div class="hero-orb o2"></div>
          <svg class="helix-svg" viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="molecule-strand">
              <path d="M40 10 C 40 60, 160 60, 160 110 C 160 160, 40 160, 40 210 C 40 260, 160 260, 160 310" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
              <path d="M160 10 C 160 60, 40 60, 40 110 C 40 160, 160 160, 160 210 C 160 260, 40 260, 40 310" stroke="#C9A15A" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
              <g stroke="#5483B3" stroke-width="1.6" opacity="0.6">
                <line x1="52" y1="30" x2="148" y2="30"/>
                <line x1="70" y1="60" x2="130" y2="60"/>
                <line x1="90" y1="90" x2="110" y2="90"/>
                <line x1="90" y1="130" x2="110" y2="130"/>
                <line x1="70" y1="160" x2="130" y2="160"/>
                <line x1="52" y1="190" x2="148" y2="190"/>
                <line x1="70" y1="220" x2="130" y2="220"/>
                <line x1="90" y1="250" x2="110" y2="250"/>
                <line x1="90" y1="280" x2="110" y2="280"/>
                <line x1="70" y1="310" x2="130" y2="310"/>
              </g>
              <circle class="glow-dot" cx="40" cy="10" r="5" fill="currentColor"/>
              <circle class="glow-dot" cx="160" cy="110" r="5" fill="#C9A15A"/>
              <circle class="glow-dot" cx="40" cy="210" r="5" fill="currentColor"/>
              <circle class="glow-dot" cx="160" cy="310" r="5" fill="#C9A15A"/>
            </g>
          </svg>
          <div class="vial-card"><b>BPC-157 · 5 ملغم</b>دفعة موثّقة · %99.9 نقاء</div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="trust-strip">
        <div class="trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="2"/></svg> فحص HPLC من طرف ثالث</div>
        <div class="trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2"/></svg> متوسط نقاء %99+</div>
        <div class="trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" stroke-width="2"/></svg> شحن مبرّد وسرّي</div>
        <div class="trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="2"/></svg> أسعار جملة متدرّجة</div>
      </div>
    </div>

    <section class="section container">
      <div class="split-section reveal">
        <div>
          <span class="eyebrow">مختبرنا</span>
          <h1>الدقة هي المنتج بأكمله.</h1>
          <p>بُني trusted-peptide.com للباحثين الذين لا يتنازلون عن دقة البيانات. كل مركّب مُدرج موثّق النقاء بتحليل HPLC، مصدره مختبرات معتمدة أوروبياً، ويُشحن ببراد حافظ للحفاظ على سلامته من القارورة حتى المختبر.</p>
          <p>ننشر التركيب والنقاء الدقيقين لكل ببتيد — بدون عبارات غامضة مثل "خلطة خاصة". ما هو مكتوب على الملصق هو بالضبط ما في القارورة.</p>
        </div>
        <div class="stat-grid" style="margin-top:0;">
          <div class="stat-card"><div class="num">+120</div><div class="label">منتج في الكتالوج</div></div>
          <div class="stat-card"><div class="num">%99.9</div><div class="label">متوسط نقاء HPLC</div></div>
          <div class="stat-card"><div class="num">EU</div><div class="label">مصدر معتمد</div></div>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">الفئات</span>
          <h2>ابحث عن مجال تركيزك البحثي</h2>
        </div>
        <a href="products" class="btn btn-ghost">عرض كل المنتجات ←</a>
      </div>
      <div class="category-grid reveal-stagger">
        <div class="category-tile">
          <svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M7 11l3-3a3 3 0 014.24 0l1.76 1.76a3 3 0 010 4.24l-3 3M17 13l-3 3a3 3 0 01-4.24 0L8 14.24a3 3 0 010-4.24l3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 14.5l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          <h3>التعافي والإصلاح</h3>
          <p>مركّبات بحثية للأنسجة والأوتار وحاجز الأمعاء.</p>
        </div>
        <div class="category-tile">
          <svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 21c2.5 0 4-1.2 4-1.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          <h3>البشرة ومكافحة الشيخوخة</h3>
          <p>دراسات إعادة تشكيل الجلد والتصبغ والكولاجين.</p>
        </div>
        <div class="category-tile">
          <svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          <h3>الأبحاث الأيضية</h3>
          <p>مركّبات التحكم بسكر الدم وتنظيم الشهية.</p>
        </div>
        <div class="category-tile">
          <svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <h3>النمو والأداء</h3>
          <p>محفّزات هرمون النمو وبروتوكولات بحثية للكتلة الخالية من الدهون.</p>
        </div>
        <div class="category-tile">
          <svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 5.4L20 9l-4.6 3.4L17 18l-5-3.2L7 18l1.6-5.6L4 9l5.6-1.6L12 2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          <h3>مضادات الأكسدة والتفتيح</h3>
          <p>خفض الإجهاد التأكسدي ومركّبات بحثية لتوحيد لون البشرة.</p>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">العملية</span>
          <h2>كيف تُختبر كل دفعة</h2>
        </div>
      </div>
      <div class="category-grid reveal-stagger">
        <div class="category-tile">
          <h3>المصدر</h3>
          <p>الببتيد الخام مصدره حصرياً مختبرات تصنيع مسجّلة في الاتحاد الأوروبي.</p>
        </div>
        <div class="category-tile">
          <h3>فحص من طرف ثالث</h3>
          <p>فحص مستقل بتحليل HPLC ومطيافية الكتلة يوثّق النقاء لكل دفعة.</p>
        </div>
        <div class="category-tile">
          <h3>تغليف مبرّد</h3>
          <p>مجفّف بالتجميد ومعبّأ بعناصر تبريد للحفاظ على ثبات الببتيد أثناء النقل.</p>
        </div>
        <div class="category-tile">
          <h3>شهادة تحليل</h3>
          <p>يمكن إرفاق كل طلب بشهادة تحليل خاصة بالدفعة عند الطلب.</p>
        </div>
      </div>
    </section>

    <section class="section container reveal">
      <div class="split-section">
        <div>
          <span class="eyebrow">الجملة</span>
          <h2>كلما زادت كميتك، وفّرت أكثر.</h2>
          <p>تعرض كل صفحة منتج أسعار الجملة الحية — اطلب 5 وحدات وافتح أول مستوى خصم، اطلب 10 وافتح المستوى التالي. بدون أكواد ولا انتظار: السعر يتحدّث أثناء الكتابة.</p>
          <a href="products" class="btn btn-primary">ابدأ طلباً</a>
        </div>
        <div class="stat-grid">
          <div class="stat-card"><div class="num">1x</div><div class="label">السعر الأساسي</div></div>
          <div class="stat-card"><div class="num">5x</div><div class="label">وفّر حتى %12</div></div>
          <div class="stat-card"><div class="num">10x</div><div class="label">وفّر حتى %22</div></div>
        </div>
      </div>
    </section>

    <section class="section container reveal text-center">
      <h2>للاستخدام المخبري والبحثي فقط</h2>
      <p style="max-width:60ch; margin:0 auto;">جميع المنتجات المدرجة على trusted-peptide.com مخصصة حصراً للاستخدام البحثي والمخبري في المختبر. لا شيء في هذا الموقع يشكّل نصيحة طبية، ولا يُقصد بأي منتج الاستهلاك البشري أو البيطري.</p>
    </section>
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
          <div class="brand" style="margin-bottom:12px;gap:10px;"><img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" width="32" height="32" style="flex-shrink:0;" aria-hidden="true" /><span>Trusted<span style="color:var(--accent);"> Peptide</span></span></div>
          <p style="max-width:32ch;">ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة. للاستخدام المخبري والبحثي فقط.</p>
        </div>
        <div>
          <h4>المتجر</h4>
          <ul>
            <li><a href="products">كل المنتجات</a></li>
            <li><a href="cart">السلة</a></li>
            <li><a href="checkout">إتمام الطلب</a></li>
          </ul>
        </div>
        <div>
          <h4>الشركة</h4>
          <ul>
            <li><a href="about">من نحن</a></li>
            <li><a href="contact">تواصل معنا</a></li>
          </ul>
        </div>
        <div class="footer-seal-col">
          <img class="badge-eu" src="../assets/brand/eu-seal.png" alt="مختبر معتمد أوروبي" width="96" height="96" loading="lazy" />
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
  <script src="../js/category-labels-ar.js?v=<?php echo filemtime(__DIR__ . '/../js/category-labels-ar.js'); ?>" data-cfasync="false"></script>  <script src="../js/category-tile-labels.js?v=<?php echo filemtime(__DIR__ . '/../js/category-tile-labels.js'); ?>" data-cfasync="false"></script>
  <script src="../js/theme.js?v=<?php echo filemtime(__DIR__ . '/../js/theme.js'); ?>" data-cfasync="false"></script>
  <script src="../js/main.js?v=<?php echo filemtime(__DIR__ . '/../js/main.js'); ?>" data-cfasync="false"></script>
</body>
</html>
