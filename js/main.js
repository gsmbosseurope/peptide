/**
 * Shared behavior across all pages: mobile nav toggle, scroll-reveal
 * animations, active nav link, and cart-count badge sync.
 */

﻿const CATEGORY_GRADIENTS = {
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory":      "linear-gradient(145deg,#1a5c3a,#0f3d26)",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance":  "linear-gradient(145deg,#2d4a8a,#1a2f5e)",
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "linear-gradient(145deg,#7c2d3b,#4e1a24)",
  "Male Hormones, Fertility, Sexual Health & Tanning":      "linear-gradient(145deg,#5a3472,#361e4a)",
  "Brain, Cognitive Function, Mood & Sleep":                "linear-gradient(145deg,#1e5872,#0f3348)",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair":   "linear-gradient(145deg,#7a4a1a,#4e2d0e)",
  "Digestive & Gut Health":                                 "linear-gradient(145deg,#1e5c4a,#0f3830)",
  "Skin, Hair Care":                                        "linear-gradient(145deg,#6b3060,#42183a)",
  "Organ-Specific Bioregulators & Therapeutic Compounds":   "linear-gradient(145deg,#3a3a72,#22224a)",
  "Accessories & Supplies":                                 "linear-gradient(145deg,#2d5a2d,#193819)",
  "Cosmetics":                                              "linear-gradient(145deg,#8a3a5c,#5a1f3a)",
  "Vitamins":                                               "linear-gradient(145deg,#8a6a1a,#5a430e)",
};
const CATEGORY_GRADIENT_FALLBACK = "linear-gradient(145deg,#2a2a3a,#111)";
const CATEGORY_SUBLABELS_EN = {
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory":      "Anti-inflammatory",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance":  "Muscle & Endurance",
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "Metabolism & Insulin",
  "Male Hormones, Fertility, Sexual Health & Tanning":      "Fertility & Tanning",
  "Brain, Cognitive Function, Mood & Sleep":                "Mood, Sleep & Focus",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair":   "Immunity & Mitochondria",
  "Digestive & Gut Health":                                 "Digestion & Microbiome",
  "Skin, Hair Care":                                        "Beauty & Cell Renewal",
  "Organ-Specific Bioregulators & Therapeutic Compounds":   "Specialized Therapeutics",
  "Accessories & Supplies":                                 "BAC Water & Essentials",
  "Cosmetics":                                              "Beauty & Skin Care",
  "Vitamins":                                               "Essential Nutrients",
};
const CATEGORY_SUBLABELS_AR = {
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory":      "مضادات الالتهاب",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance":  "بناء العضلات والتحمل",
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "تنظيم الأيض والإنسولين",
  "Male Hormones, Fertility, Sexual Health & Tanning":      "الخصوبة والذكورية والتسمير",
  "Brain, Cognitive Function, Mood & Sleep":                "المزاج والنوم والتركيز",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair":   "المناعة والميتوكوندريا",
  "Digestive & Gut Health":                                 "الهضم والبكتيريا النافعة",
  "Skin, Hair Care":                                        "الجمال والتجديد الخلوي",
  "Organ-Specific Bioregulators & Therapeutic Compounds":   "المركبات العلاجية المتخصصة",
  "Accessories & Supplies":                                 "ماء BAC والمستلزمات",
  "Cosmetics":                                              "الجمال والعناية بالبشرة",
  "Vitamins":                                               "العناصر الغذائية الأساسية",
};

function initCategoryIconsSection() {
  const grid = document.getElementById("category-icons-grid");
  if (!grid || typeof PRODUCT_CATEGORIES === "undefined") return;
  const isAr = typeof CATEGORY_LABELS_AR !== "undefined";
  const labelsAr = isAr ? CATEGORY_LABELS_AR : {};
  const labelOverrides = typeof CATEGORY_TILE_LABELS !== "undefined" ? CATEGORY_TILE_LABELS : {};
  if (!document.getElementById("cat-grid-v2-style")) {
    const s = document.createElement("style");
    s.id = "cat-grid-v2-style";
    s.textContent = `
      .category-icons-section { background: linear-gradient(180deg,#0a0d14 0%,#0d1120 60%,#0a0d14 100%); padding: 48px 0 56px; }
      .category-icons-section .eyebrow { color: #00c8d4; }

      #category-icons-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; max-width:1200px; margin:20px auto 0; }
      .cat-card-v2 { border-radius:20px; padding:22px 16px 18px; display:flex; flex-direction:column; align-items:flex-start; gap:14px; cursor:pointer; text-decoration:none; position:relative; overflow:hidden; min-height:150px;
        background:radial-gradient(120% 90% at 100% 0%,var(--cat-tint,rgba(226,183,94,.10)) 0%,transparent 55%),linear-gradient(160deg,#141a26 0%,#0b0f17 100%);
        border:1px solid rgba(226,183,94,.22); box-shadow:0 10px 28px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,241,201,.06);
        transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease; }
      .cat-card-v2:hover { transform:translateY(-4px); border-color:rgba(0,200,210,.6); box-shadow:0 16px 36px rgba(0,0,0,.45), 0 0 0 1px rgba(0,180,190,.15), inset 0 1px 0 rgba(0,220,230,.1); }
      .cat-card-v2::before { content:''; position:absolute; left:16px; right:16px; top:0; height:1px; background:linear-gradient(90deg,transparent,rgba(0,200,210,.7),transparent); opacity:.6; transition:opacity .25s ease; }
      .cat-card-v2:hover::before { opacity:1; }
      .cat-card-v2::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,241,201,.05) 0%,transparent 50%); pointer-events:none; }
      .cat-card-v2:focus-visible { outline:2px solid #00c8d4; outline-offset:3px; }
      .cat-card-v2-icon { position:relative; width:56px; height:56px; display:flex; align-items:center; justify-content:center; border-radius:50%; flex-shrink:0; color:#f1d58f;
        background:radial-gradient(circle at 30% 25%,rgba(255,236,190,.22),rgba(0,0,0,.28) 70%);
        box-shadow:inset 0 0 0 1px rgba(241,213,143,.55), inset 0 0 0 4px rgba(0,0,0,.18), inset 0 0 0 5px rgba(241,213,143,.22), 0 6px 18px rgba(0,0,0,.35), 0 0 22px rgba(241,213,143,.12);
        transition:box-shadow .25s ease, transform .25s ease; }
      .cat-card-v2:hover .cat-card-v2-icon { transform:scale(1.06); box-shadow:inset 0 0 0 1px rgba(0,200,210,.85), inset 0 0 0 4px rgba(0,0,0,.18), inset 0 0 0 5px rgba(0,200,210,.35), 0 8px 22px rgba(0,0,0,.4), 0 0 28px rgba(0,200,210,.3); }
      .cat-card-v2-icon svg { width:28px; height:28px; filter:drop-shadow(0 1px 1px rgba(0,0,0,.45)); }
      .cat-card-v2-name { font-size:14px; font-weight:700; color:#c8f0f4; line-height:1.4; letter-spacing:.01em; }
      .cat-card-v2:hover .cat-card-v2-name { color:#e0f8fc; }
      @media(min-width:600px){#category-icons-grid{grid-template-columns:repeat(3,1fr);}} @media(min-width:900px){#category-icons-grid{grid-template-columns:repeat(5,1fr);}} .cat-card-v2-sub { font-size:11px; color:rgba(0,190,200,.78); margin-top:3px; font-weight:400; line-height:1.4; }
      :root[data-theme='light'] .cat-card-v2 { background:linear-gradient(160deg,#e8f6f7 0%,#d0edf0 100%) !important; border-color:rgba(0,120,130,.3) !important; box-shadow:0 4px 16px rgba(0,90,100,.1) !important; }
      :root[data-theme='light'] .cat-card-v2:hover { border-color:rgba(0,140,150,.7) !important; box-shadow:0 8px 24px rgba(0,90,100,.18) !important; }
      :root[data-theme='light'] .cat-card-v2::after { background:none !important; }
      :root[data-theme='light'] .cat-card-v2-name { color:#003a40 !important; }
      :root[data-theme='light'] .cat-card-v2:hover .cat-card-v2-name { color:#001e22 !important; }
      :root[data-theme='light'] .cat-card-v2-sub { color:rgba(0,100,110,.8) !important; }
      :root[data-theme='light'] .cat-card-v2-icon { color:#006b75 !important; background:radial-gradient(circle at 30% 25%,rgba(0,160,175,.18),rgba(0,0,0,.04) 70%) !important; box-shadow:inset 0 0 0 1px rgba(0,140,155,.55),inset 0 0 0 4px rgba(0,0,0,.04),inset 0 0 0 5px rgba(0,140,155,.2),0 4px 12px rgba(0,90,100,.12) !important; }
    `;
    document.head.appendChild(s);
  }
  const G = `<defs><linearGradient id="lxg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a0f0f8"/><stop offset=".5" stop-color="#00c8d4"/><stop offset="1" stop-color="#007a85"/></linearGradient></defs>`;
  const lx = (body) => `<svg viewBox="0 0 32 32" fill="none" stroke="url(#lxg)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">${G}${body}</svg>`;
  const ICONS = {
    // Metabolism — flame inside a laurel-like drop
    "Weight Loss, Metabolic Regulation & Insulin Resistance": lx(`<path d="M16 4c1.2 3.6 6.5 6.6 6.5 13a6.5 6.5 0 01-13 0c0-3.5 1.8-5.6 3.2-7 .3 2 1.2 3.2 2.3 3.6C14.6 10.6 15 7 16 4z"/><path d="M16 26c-2 0-3.3-1.5-3.3-3.3 0-2 1.6-3 3.3-5.2 1.7 2.2 3.3 3.2 3.3 5.2 0 1.8-1.3 3.3-3.3 3.3z"/>`),
    // Growth — rising column crowned with a star
    "Growth Hormone Secretagogues, Hypertrophy & Endurance": lx(`<path d="M5 26h22M8 26V18M13 26V14M19 26V14M24 26V18"/><path d="M16 4l1.4 2.9 3.1.4-2.3 2.2.6 3.1-2.8-1.5-2.8 1.5.6-3.1-2.3-2.2 3.1-.4z"/>`),
    // Recovery — caduceus-style staff with ribbon
    "Recovery, Tendon/Joint Repair & Anti-Inflammatory": lx(`<path d="M16 4v24"/><circle cx="16" cy="4.5" r="1.3"/><path d="M11 8c3 0 10 .5 10 3.5S11 14 11 17s10 2.5 10 5.5-4 3-5 3"/><path d="M9 7.5c2-1 4.5-1.5 7-1.5s5 .5 7 1.5"/>`),
    // Anti-aging — ornate hourglass
    "Anti-Aging, Cellular Immunity & Mitochondrial Repair": lx(`<path d="M8 4h16M8 28h16M10 4c0 6 5 8 5 12s-5 6-5 12M22 4c0 6-5 8-5 12s5 6 5 12"/><path d="M13 25c1-1.6 2-2.2 3-2.2s2 .6 3 2.2z"/><circle cx="16" cy="16" r=".6" fill="url(#lxg)"/>`),
    // Brain — crescent moon + star (mood & sleep, focus)
    "Brain, Cognitive Function, Mood & Sleep": lx(`<path d="M20.5 5.5A10.5 10.5 0 1026.5 21 8.5 8.5 0 0120.5 5.5z"/><path d="M23 8.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z"/>`),
    // Hormones — interlinked rings
    "Male Hormones, Fertility, Sexual Health & Tanning": lx(`<circle cx="12.5" cy="17.5" r="6.5"/><circle cx="19.5" cy="14.5" r="6.5"/><path d="M24 10l3.5-3.5M24.5 6.5h3v3"/>`),
    // Bioregulators — faceted gem
    "Organ-Specific Bioregulators & Therapeutic Compounds": lx(`<path d="M9 6h14l5 6-12 15L4 12z"/><path d="M4 12h24M12 6l-2 6 6 15 6-15-2-6M10 12l6-6 6 6"/>`),
    // Skin & hair — lotus
    "Skin, Hair Care": lx(`<path d="M16 7c2.5 2.5 3.5 5.5 3.5 8.5S18 21 16 22c-2-1-3.5-3.5-3.5-6.5S13.5 9.5 16 7z"/><path d="M12.6 12.5C9.5 11.5 7 12 5 13c.5 5 4.5 9 11 9M19.4 12.5c3.1-1 5.6-.5 7.6.5-.5 5-4.5 9-11 9"/><path d="M8 25.5c2.5-.8 5-1 8-1s5.5.2 8 1"/>`),
    // Gut — botanical leaf (probiotic/natural)
    "Digestive & Gut Health": lx(`<path d="M6 26C6 14 13 6 26 6c0 13-8 20-20 20z"/><path d="M6 26L20 12M11 21h5M14 18v-5M17 15h3"/>`),
    // Accessories — vial
    "Accessories & Supplies": lx(`<path d="M12 4h8M13 4v3h6V4M12.5 7h7l.5 2v16a3 3 0 01-3 3h-2a3 3 0 01-3-3V9z"/><path d="M12 17h8M12 21h5"/>`),
    // Cosmetics — cream jar with sparkle
    "Cosmetics": lx(`<path d="M8 14h16v9a3 3 0 01-3 3H11a3 3 0 01-3-3z"/><path d="M7 11h18v3H7z"/><path d="M12 19h8"/><path d="M22 4l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z"/>`),
    // Vitamins — capsule
    "Vitamins": lx(`<rect x="5" y="11" width="22" height="10" rx="5" transform="rotate(-35 16 16)"/><path d="M13.1 11.9l5.8 8.2"/><path d="M20 8.5l2 1.5"/>`),
  };
  const ICON_FALLBACK = `<svg viewBox="0 0 24 24" fill="none"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.8"/></svg>`;
  const SHORT_LABELS = {
    "Weight Loss, Metabolic Regulation & Insulin Resistance": "Weight Loss",
    "Growth Hormone Secretagogues, Hypertrophy & Endurance": "Growth & Strength",
    "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "Recovery",
    "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "Anti-Aging",
    "Brain, Cognitive Function, Mood & Sleep": "Brain & Mood",
    "Male Hormones, Fertility, Sexual Health & Tanning": "Sexual Health",
    "Organ-Specific Bioregulators & Therapeutic Compounds": "Bioregulators",
    "Skin, Hair Care": "Skin & Hair",
    "Digestive & Gut Health": "Gut Health",
    "Accessories & Supplies": "Accessories",
  };
  grid.innerHTML = PRODUCT_CATEGORIES.filter((cat) => !cat.includes(" › ")).map((cat) => {
    const label = labelsAr[cat] || labelOverrides[cat] || SHORT_LABELS[cat] || cat;
    const sub   = isAr ? (CATEGORY_SUBLABELS_AR[cat] || "") : (CATEGORY_SUBLABELS_EN[cat] || "");
    const icon  = ICONS[cat] || ICON_FALLBACK;
    const grad  = CATEGORY_GRADIENTS[cat] || CATEGORY_GRADIENT_FALLBACK;
    return `<a class="cat-card-v2" href="products?cat=${encodeURIComponent(cat)}" title="${cat}" style="--cat-tint:${(grad.match(/#[0-9a-f]{6}/i) || ["#e2b75e"])[0]}55;"><div class="cat-card-v2-icon">${icon}</div><div><div class="cat-card-v2-name">${label}</div>${sub ? `<div class="cat-card-v2-sub">${sub}</div>` : ""}</div></a>`;
  }).join("");
}


document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();   // â† ÙˆØ¶Ø¹ Ù„ÙŠÙ„ÙŠ / Ù†Ù‡Ø§Ø±ÙŠ â€” ÙŠØ´ØªØºÙ„ Ù‚Ø¨Ù„ ÙƒÙ„ Ø´ÙŠØ¡
  initMobileNav();
  initScrollReveal();
  initNavDropdown();
  initActiveNavLink();
  updateCartCountBadge();
  initScrollButtons();
  initWhatsAppButton();
  initCategoryIconsSection();
  initQuickSearch();
});

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   THEME TOGGLE â€” ÙˆØ¶Ø¹ Ù„ÙŠÙ„ÙŠ / Ù†Ù‡Ø§Ø±ÙŠ
   ÙŠÙ‚Ø±Ø£ Ø§Ù„Ø§Ø®ØªÙŠØ§Ø± Ù…Ù† localStorageØŒ ÙŠØ·Ø¨Ù‘Ù‚Ù‡ ÙÙˆØ±Ø§Ù‹ Ø¹Ù„Ù‰ <html>ØŒ
   ÙˆÙŠØ±Ø¨Ø· ÙƒÙ„ Ø§Ù„Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªÙŠ ØªØ­Ù…Ù„ class="theme-toggle-btn"
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
(function applyThemeEarly() {
  // Ù†Ø·Ø¨Ù‘Ù‚ Ø§Ù„Ø«ÙŠÙ… Ù‚Ø¨Ù„ Ø±Ø³Ù… Ø§Ù„ØµÙØ­Ø© Ù„ØªØ¬Ù†Ù‘Ø¨ Ø§Ù„ÙˆÙ…ÙŠØ¶
  try {
    const saved = localStorage.getItem("tp-theme");
    if (saved === "dark")  document.documentElement.setAttribute("data-theme", "dark");
    if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
  } catch (_) {}
})();

function initThemeToggle() {
  const root = document.documentElement;

  function getTheme() {
    try { return localStorage.getItem("tp-theme") || "auto"; } catch { return "auto"; }
  }

  function applyTheme(t) {
    if (t === "dark")       root.setAttribute("data-theme", "dark");
    else if (t === "light") root.setAttribute("data-theme", "light");
    else                    root.removeAttribute("data-theme");
  }

  function isDark() {
    const t = getTheme();
    if (t === "dark")  return true;
    if (t === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Ø§Ø±Ø¨Ø· ÙƒÙ„ Ø§Ù„Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªÙŠ ØªØ­Ù…Ù„ class="theme-toggle-btn"
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      try { localStorage.setItem("tp-theme", next); } catch {}
      applyTheme(next);
    });
  });

  // Ø¥Ø°Ø§ Ù„Ù… ÙŠÙØ¶Ù Ø§Ù„Ø²Ø± Ø¨Ø¹Ø¯ (Ù…Ø«Ù„Ø§Ù‹ ÙŠÙØ¶Ø§Ù Ø¨Ù€ JS Ù„Ø§Ø­Ù‚Ø§Ù‹) â€” delegate Ø¹Ù„Ù‰ Ø§Ù„Ù€ body
  document.body.addEventListener("click", e => {
    const btn = e.target.closest(".theme-toggle-btn");
    if (!btn) return;
    // ØªØ¬Ù†Ù‘Ø¨ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ Ù…Ø±ØªÙŠÙ† Ø¥Ø°Ø§ ÙƒØ§Ù† querySelector Ø£Ù…Ø³Ùƒ Ø§Ù„Ø²Ø± Ø£Ø¹Ù„Ø§Ù‡
    if (document.querySelectorAll(".theme-toggle-btn").length === 0) {
      const next = isDark() ? "light" : "dark";
      try { localStorage.setItem("tp-theme", next); } catch {}
      applyTheme(next);
    }
  });
}

/**
 * Renders the "Shop by Category" icon grid (a standalone section placed
 * just above the footer on about, index, product, products, tip, tips)
 * with one square icon tile per category, deep-linking into
 * products.html?cat=<name> (catalog.js reads that query param and
 * pre-selects the matching filter chip on load). Uses the same short
 * labels and outlined SVG icons as the filter chips on products.html,
 * for visual consistency between the two.
 */


function initWhatsAppButton() {
  if (typeof STORE_WHATSAPP_NUMBER === "undefined") return;
  const message = "Hi Trusted-Peptide, I have a question.";
  const link = document.createElement("a");
  link.className = "whatsapp-float-btn";
  link.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with us on WhatsApp");
  link.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64zm-5.55 12.2h-.02a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.28-3.5 6.6 6.6 0 01-6.67 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.51.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" fill="#fff"/>
    </svg>
  `;
  document.body.appendChild(link);

  // On phones the button sits directly over scrolling content (there's no
  // room to place it elsewhere), so it's faded further while the page is
  // actively moving and restored once scrolling settles â€” avoids it
  // blocking text/links mid-scroll while staying available at rest.
  const isMobile = window.matchMedia("(max-width: 560px)");
  if (isMobile.matches) {
    let scrollTimer;
    window.addEventListener(
      "scroll",
      () => {
        link.classList.add("is-scrolling");
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => link.classList.remove("is-scrolling"), 400);
      },
      { passive: true }
    );
  }
}

/**
 * Floating "scroll to top" / "scroll to bottom" buttons, fixed bottom-right.
 * Up hides near the top of the page; down hides near the bottom. Both use
 * smooth scrolling and respect prefers-reduced-motion via CSS.
 */
function initScrollButtons() {
  const wrap = document.createElement("div");
  wrap.className = "scroll-buttons";
  wrap.innerHTML = `
    <button type="button" class="scroll-btn scroll-btn-up" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button type="button" class="scroll-btn scroll-btn-down" aria-label="Scroll to bottom">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;
  document.body.appendChild(wrap);

  const upBtn = wrap.querySelector(".scroll-btn-up");
  const downBtn = wrap.querySelector(".scroll-btn-down");

  upBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  downBtn.addEventListener("click", () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
  );

  function updateVisibility() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const nearTop = scrollY < 200;
    const nearBottom = maxScroll - scrollY < 200;
    upBtn.classList.toggle("is-visible", !nearTop);
    downBtn.classList.toggle("is-visible", maxScroll > 300 && !nearBottom);
  }

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
}

function initMobileNav() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const drawer = document.querySelector(".mobile-nav");
  if (!toggle || !drawer) return;

  function closeDrawer() {
    drawer.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

  // Tapping anywhere outside the open drawer (the darkened page behind it,
  // or the header logo/actions) closes it â€” previously only the toggle
  // button, the X, or a nav link inside the drawer would close it.
  document.addEventListener("click", (e) => {
    if (!drawer.classList.contains("open")) return;
    if (drawer.contains(e.target) || toggle.contains(e.target)) return;
    closeDrawer();
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

// Folds the secondary desktop links (About, Blog, Peptide Guide, Contact)
// into one "More" dropdown that opens on hover, focus, or tap.
// Cosmetics / Vitamins nav links get a hover menu of their sub-categories
// ("Parent › Child", created in the admin panel). Each item deep-links to
// the section page with ?sub=<full category name> preselected.
function initSectionSubmenus(nav, seg) {
  if (typeof PRODUCT_CATEGORIES === "undefined") return;
  const SEP = " › ";
  const labelsAr = typeof CATEGORY_LABELS_AR !== "undefined" ? CATEGORY_LABELS_AR : {};
  const isAr = document.documentElement.lang === "ar";
  const SECTIONS = { cosmetics: "cosmetic", vitamins: "vitamin" };
  [...nav.querySelectorAll(":scope > a")].forEach((a) => {
    const href = a.getAttribute("href") || "";
    const key = SECTIONS[seg(href)];
    if (!key) return;
    const subs = PRODUCT_CATEGORIES.filter((c) => c.includes(SEP) && c.split(SEP)[0].toLowerCase().includes(key));
    if (!subs.length) return;
    const wrap = document.createElement("div");
    wrap.className = "nav-more nav-section";
    a.before(wrap);
    a.classList.add("nav-section-link");
    a.insertAdjacentHTML("beforeend", `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
    wrap.appendChild(a);
    const menu = document.createElement("div");
    menu.className = "nav-more-menu";
    menu.setAttribute("role", "menu");
    const base = href.split("?")[0];
    // Depth-first order so each group (e.g. "Face Care") is followed by its
    // own items (Face Cream, Face Serum…), which are indented beneath it.
    const ordered = [];
    const walk = (parent) => subs
      .filter((c) => c.split(SEP).slice(0, -1).join(SEP) === parent)
      .forEach((c) => { ordered.push(c); walk(c); });
    walk(subs.length ? subs[0].split(SEP)[0] : "");
    subs.forEach((c) => { if (!ordered.includes(c)) ordered.push(c); });
    const depth = (c) => c.split(SEP).length - 1;
    const hasKids = (c) => subs.some((x) => x.startsWith(c + SEP));
    const label = (c) => (isAr && labelsAr[c]) || c.split(SEP).pop();
    const link = (c, cls) => `<a href="${base}?sub=${encodeURIComponent(c)}" role="menuitem" class="${cls}">${label(c)}</a>`;
    const allLink = `<a href="${base}" role="menuitem" class="nav-sub-all">${isAr ? "عرض الكل" : "View all"}</a>`;
    const chevron = `<svg class="nav-fly-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    // Desktop: cascading flyout — groups listed with a chevron; hovering a
    // group opens its own items in a side panel.
    menu.classList.add("nav-cascade");
    menu.innerHTML =
      allLink +
      ordered
        .filter((c) => depth(c) === 1)
        .map((c) => {
          if (!hasKids(c)) return link(c, "nav-fly-link");
          const kids = ordered.filter((x) => depth(x) === 2 && x.startsWith(c + SEP));
          return `<div class="nav-fly">
            <a href="${base}?sub=${encodeURIComponent(c)}" role="menuitem" class="nav-fly-link" aria-haspopup="true">${label(c)}${chevron}</a>
            <div class="nav-fly-panel" role="menu">${kids.map((k) => link(k, "")).join("")}</div>
          </div>`;
        })
        .join("");
    wrap.appendChild(menu);

    // Mobile drawer keeps a simple indented list (built below from this).
    const flatHTML =
      allLink +
      ordered.map((c) => link(c, `nav-sub-d${depth(c)}${hasKids(c) ? " nav-sub-group" : ""}`)).join("");

    // Touch screens have no hover: first tap opens the menu, a second tap
    // on the same link goes to the section page.
    a.addEventListener("click", (e) => {
      if (window.matchMedia("(hover: hover)").matches || wrap.classList.contains("open")) return;
      e.preventDefault();
      document.querySelectorAll(".nav-more.open").forEach((w) => w.classList.remove("open"));
      wrap.classList.add("open");
    });
    document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) wrap.classList.remove("open"); });

    // Mobile drawer: same sub-categories as a tap-to-expand accordion.
    const mlink = [...document.querySelectorAll(".mobile-nav > a")].find((m) => seg(m.getAttribute("href") || "") === seg(href));
    if (mlink) {
      const det = document.createElement("details");
      det.className = "mnav-more mnav-section";
      det.innerHTML =
        `<summary>${mlink.textContent.trim()}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>` +
        `<div class="mnav-more-list">${flatHTML}</div>`;
      mlink.replaceWith(det);
    }
  });
}

// "Peptides" nav item: cascading menu of the peptide categories, each
// opening a side panel listing that category's products (A→Z).
const PEPTIDE_NAV_SHORT = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "Weight Loss & Metabolism",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "Growth Hormone & Muscle",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "Recovery & Joints",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "Anti-Aging & Immunity",
  "Brain, Cognitive Function, Mood & Sleep": "Brain, Mood & Sleep",
  "Male Hormones, Fertility, Sexual Health & Tanning": "Hormones & Sexual Health",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "Bioregulators",
  "Skin, Hair Care": "Skin & Hair",
  "Digestive & Gut Health": "Gut Health",
  "Accessories & Supplies": "Accessories",
};
function initPeptidesMenu(nav) {
  if (typeof PRODUCT_CATEGORIES === "undefined" || typeof PRODUCTS === "undefined" || nav.querySelector(".nav-peptides")) return;
  const isAr = document.documentElement.lang === "ar";
  const labelsAr = typeof CATEGORY_LABELS_AR !== "undefined" ? CATEGORY_LABELS_AR : {};
  const prefix = isAr ? "/ar/" : "/";
  const cats = PRODUCT_CATEGORIES.filter((c) => !c.includes(" › ") && !/cosmetic|vitamin/i.test(c));
  const catsOf = (p) => (Array.isArray(p.categories) && p.categories.length ? p.categories : [p.category]).filter(Boolean);
  const chevron = `<svg class="nav-fly-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const groups = cats
    .map((c) => ({
      cat: c,
      label: (isAr && labelsAr[c]) || PEPTIDE_NAV_SHORT[c] || c,
      items: PRODUCTS.filter((p) => catsOf(p).includes(c)).sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true })),
    }))
    .filter((g) => g.items.length);
  if (!groups.length) return;

  const wrap = document.createElement("div");
  wrap.className = "nav-more nav-section nav-peptides";
  wrap.innerHTML =
    `<a href="${prefix}products" class="nav-section-link">${isAr ? "الببتيدات" : "Peptides"}<svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` +
    `<div class="nav-more-menu nav-cascade" role="menu">` +
    `<a href="${prefix}products" role="menuitem" class="nav-sub-all">${isAr ? "كل الببتيدات" : "All peptides"}</a>` +
    groups
      .map(
        (g) => `<div class="nav-fly">
          <a href="${prefix}products?cat=${encodeURIComponent(g.cat)}" role="menuitem" class="nav-fly-link" aria-haspopup="true">${g.label}${chevron}</a>
          <div class="nav-fly-panel nav-fly-panel--scroll" role="menu">${g.items.map((p) => `<a href="${prefix}product?id=${encodeURIComponent(p.id)}" role="menuitem">${p.name}</a>`).join("")}</div>
        </div>`
      )
      .join("") +
    `</div>`;
  // Right after "Home".
  const first = nav.querySelector(":scope > a");
  first ? first.after(wrap) : nav.prepend(wrap);

  const link = wrap.querySelector(".nav-section-link");
  link.addEventListener("click", (e) => {
    if (window.matchMedia("(hover: hover)").matches || wrap.classList.contains("open")) return;
    e.preventDefault();
    document.querySelectorAll(".nav-more.open").forEach((w) => w.classList.remove("open"));
    wrap.classList.add("open");
  });
  document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) wrap.classList.remove("open"); });

  // Mobile drawer: accordion of categories (each linking to its filtered list).
  const mnav = document.querySelector(".mobile-nav");
  if (mnav && !mnav.querySelector(".mnav-peptides")) {
    const det = document.createElement("details");
    det.className = "mnav-more mnav-section mnav-peptides";
    det.innerHTML =
      `<summary>${isAr ? "الببتيدات" : "Peptides"}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>` +
      `<div class="mnav-more-list"><a href="${prefix}products" class="nav-sub-all">${isAr ? "كل الببتيدات" : "All peptides"}</a>` +
      groups.map((g) => `<a href="${prefix}products?cat=${encodeURIComponent(g.cat)}">${g.label}</a>`).join("") +
      `</div>`;
    const mfirst = mnav.querySelector(":scope > a");
    mfirst ? mfirst.after(det) : mnav.prepend(det);
  }
}

function initNavDropdown() {
  const nav = document.querySelector(".main-nav");
  if (!nav || nav.querySelector(".nav-more")) return;
  const GROUP = ["about", "blog", "peptide-guide", "contact"];
  const seg = (h) => (h.split("?")[0].split("/").pop() || "").replace(/\.(html|php)$/, "");
  initPeptidesMenu(nav);
  initSectionSubmenus(nav, seg);
  const links = [...nav.querySelectorAll(":scope > a")].filter((a) => GROUP.includes(seg(a.getAttribute("href") || "")));
  if (!links.length) return;
  const isAr = document.documentElement.lang === "ar";

  const wrap = document.createElement("div");
  wrap.className = "nav-more";
  wrap.innerHTML = `<button type="button" class="nav-more-btn" aria-haspopup="true" aria-expanded="false">${isAr ? "المزيد" : "More"}<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="nav-more-menu" role="menu"></div>`;
  const menu = wrap.querySelector(".nav-more-menu");
  nav.appendChild(wrap); // always the last item in the nav
  links.forEach((a) => { a.setAttribute("role", "menuitem"); menu.appendChild(a); });

  const btn = wrap.querySelector(".nav-more-btn");
  const setOpen = (open) => { wrap.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
  btn.addEventListener("click", (e) => { e.stopPropagation(); setOpen(!wrap.classList.contains("open")); });
  document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) setOpen(false); });
  wrap.addEventListener("keydown", (e) => { if (e.key === "Escape") { setOpen(false); btn.focus(); } });

  // Mobile drawer: same group as a tap-to-expand accordion, placed last
  // (just above the language switch).
  const mnav = document.querySelector(".mobile-nav");
  if (!mnav || mnav.querySelector(".mnav-more")) return;
  const mlinks = [...mnav.querySelectorAll(":scope > a")].filter((a) => GROUP.includes(seg(a.getAttribute("href") || "")));
  if (!mlinks.length) return;
  const det = document.createElement("details");
  det.className = "mnav-more";
  det.innerHTML = `<summary>${isAr ? "المزيد" : "More"}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="mnav-more-list"></div>`;
  const list = det.querySelector(".mnav-more-list");
  const langLink = mnav.querySelector(":scope > .lang-switch");
  langLink ? langLink.before(det) : mnav.appendChild(det);
  mlinks.forEach((a) => list.appendChild(a));
}

function initActiveNavLink() {
  // Compare last path segments only, so /ar/about and about both match "about".
  const lastSeg = (p) => (p.split("/").pop() || "").replace(/\.(html|php)$/, "");
  const path = lastSeg(window.location.pathname);
  document.querySelectorAll(".main-nav a, .mobile-nav a").forEach((a) => {
    if (a.classList.contains("lang-switch")) return;
    // Sub-category menu items: the section link itself already shows active.
    if (a.closest(".nav-section .nav-more-menu")) return;
    const href = lastSeg(a.getAttribute("href") || "");
    if (href === path || (path === "" && (href === "index" || href === ""))) {
      a.classList.add("active");
    }
  });
  // Highlight the "More" trigger when the current page lives inside it.
  const more = document.querySelector(".nav-more");
  if (more && more.querySelector(".nav-more-menu a.active")) more.querySelector(".nav-more-btn").classList.add("active");
  const mmore = document.querySelector(".mnav-more");
  if (mmore && mmore.querySelector("a.active")) mmore.open = true;
}

/* ---------- Quick Search ---------- */
function initQuickSearch() {
  if (typeof PRODUCTS === "undefined") return;

  const isAr = document.documentElement.lang === "ar" ||
               document.documentElement.getAttribute("dir") === "rtl";
  const placeholder = isAr ? "Ø§Ø¨Ø­Ø« Ø¹Ù† Ù…Ù†ØªØ¬â€¦" : "Search productsâ€¦";
  const hintText    = isAr ? "Ø§Ø¶ØºØ· Esc Ù„Ù„Ø¥ØºÙ„Ø§Ù‚" : "Press Esc to close";
  const emptyText   = isAr ? "Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬" : "No results found";
  // Ø±Ø§Ø¨Ø· ØµÙØ­Ø© Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø­Ø³Ø¨ Ø§Ù„Ù„ØºØ©
  const productBase = isAr ? "/ar/product" : "/product";

  // â”€â”€ Ø²Ø± Ø§Ù„Ø¨Ø­Ø« ÙÙŠ Ø§Ù„Ù‡ÙŠØ¯Ø± â”€â”€
  const btn = document.createElement("button");
  btn.className = "quick-search-btn";
  btn.setAttribute("aria-label", isAr ? "Ø¨Ø­Ø«" : "Search");
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

  // Ø£Ø¯Ø±Ø¬ Ø§Ù„Ø²Ø± Ù‚Ø¨Ù„ Ø²Ø± Ø§Ù„Ù„ØºØ© ÙÙŠ header-actions
  const actions = document.querySelector(".header-actions");
  if (actions) {
    const langSwitch = actions.querySelector(".lang-switch");
    actions.insertBefore(btn, langSwitch || actions.firstChild);
  }

  // â”€â”€ Ø§Ù„Ù€ overlay â”€â”€
  const overlay = document.createElement("div");
  overlay.className = "quick-search-overlay";
  overlay.innerHTML = `
    <div class="quick-search-box" role="dialog" aria-modal="true" aria-label="${isAr ? "Ø¨Ø­Ø« Ø³Ø±ÙŠØ¹" : "Quick search"}">
      <div class="quick-search-input-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="quick-search-input" type="search" placeholder="${placeholder}" autocomplete="off" spellcheck="false" dir="${isAr ? 'rtl' : 'ltr'}" />
        <button class="quick-search-close" aria-label="Close">âœ•</button>
      </div>
      <div class="quick-search-results"></div>
      <div class="quick-search-hint">${hintText}</div>
    </div>
  `;
  document.body.appendChild(overlay);

  const input   = overlay.querySelector(".quick-search-input");
  const results = overlay.querySelector(".quick-search-results");
  const closeBtn = overlay.querySelector(".quick-search-close");

  function open() {
    overlay.classList.add("is-open");
    setTimeout(() => input.focus(), 50);
    renderResults("");
  }
  function close() {
    overlay.classList.remove("is-open");
    input.value = "";
    results.innerHTML = "";
  }

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if ((e.key === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); open(); }
  });

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    const all = Object.values(PRODUCTS);
    const matched = q
      ? all.filter(p =>
          (p.name || "").toLowerCase().includes(q) ||
          (p.nameAr || "").includes(query.trim()) ||
          (p.category || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q) ||
          (p.descriptionAr || "").includes(query.trim())
        ).slice(0, 8)
      : all.slice(0, 6);

    if (!matched.length) {
      results.innerHTML = `<div class="quick-search-empty">${emptyText}</div>`;
      return;
    }
    results.innerHTML = matched.map(p => {
      const img = p.images && p.images[0]
        ? `<img class="quick-search-item-img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />`
        : `<span class="quick-search-item-img"></span>`;
      const name = isAr && p.nameAr ? p.nameAr : p.name;
      const cat  = isAr && p.categoryAr ? p.categoryAr : (p.category || "");
      return `<a class="quick-search-item" href="${productBase}?id=${encodeURIComponent(p.id || p.name)}">
        ${img}
        <div>
          <div class="quick-search-item-name">${name}</div>
          <div class="quick-search-item-cat">${cat}</div>
        </div>
      </a>`;
    }).join("");
  }

  let debounceTimer;
  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderResults(input.value), 180);
  });
}

/* ---------- Cart storage helpers (shared with cart.js / product-detail.js) ---------- */
const CART_STORAGE_KEY = "peptidesLabsCart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCountBadge();
}

function addToCart(productId, variantSize, qty) {
  const cart = getCart();
  const existing = cart.find((i) => i.productId === productId && i.variant === variantSize);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, variant: variantSize, qty });
  }
  saveCart(cart);
}

function updateCartCountBadge() {
  const badge = document.querySelector(".cart-count");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}

