const CATEGORY_GRADIENTS = {
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
      #category-icons-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
        max-width: 960px;
        margin: 20px auto 0;
        padding: 0 8px;
      }
      @media (min-width: 600px) {
        #category-icons-grid { grid-template-columns: repeat(3, 1fr); }
      }
      @media (min-width: 900px) {
        #category-icons-grid { grid-template-columns: repeat(5, 1fr); }
      }
      .cat-card-v2 {
        border-radius: 18px;
        padding: 20px 14px 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        transition: transform .18s ease, filter .18s ease;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        min-height: 130px;
      }
      .cat-card-v2:hover { transform: translateY(-3px); filter: brightness(1.12); }
      .cat-card-v2::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,.1) 0%, transparent 55%);
        pointer-events: none;
      }
      .cat-card-v2-icon {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,.18);
        border-radius: 10px;
        flex-shrink: 0;
        color: #fff;
      }
      .cat-card-v2-icon svg { width: 20px; height: 20px; }
      .cat-card-v2-name {
        font-size: 13px;
        font-weight: 800;
        color: #fff;
        line-height: 1.3;
      }
      .cat-card-v2-sub {
        font-size: 11px;
        color: rgba(255,255,255,.65);
        margin-top: 2px;
        font-weight: 400;
        line-height: 1.4;
      }
    `;
    document.head.appendChild(s);
  }
  const ICONS = {
    "Weight Loss, Metabolic Regulation & Insulin Resistance": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="18" height="11" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M9 10a3 3 0 016 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="15.5" r="2.3" stroke="currentColor" stroke-width="1.8"/><path d="M12 15.5l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    "Growth Hormone Secretagogues, Hypertrophy & Endurance": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9v6M4 10.5v3M18 9v6M20 10.5v3M6 12h12" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "Recovery, Tendon/Joint Repair & Anti-Inflammatory": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3v6.5L5.5 13a3.5 3.5 0 004.9 4.9L14 14.4V21M9 3h6M9 21h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8.5h4M9.5 12.5l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "Anti-Aging, Cellular Immunity & Mitochondrial Repair": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12M6 21h12M7 3c0 5 5 6.5 5 9s-5 4-5 9M17 3c0 5-5 6.5-5 9s5 4 5 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "Brain, Cognitive Function, Mood & Sleep": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4a3 3 0 00-3 3 3 3 0 00-1 5.8A3.5 3.5 0 008.5 18h1a1 1 0 001-1V6a2 2 0 00-1.5-2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M15 4a3 3 0 013 3 3 3 0 011 5.8A3.5 3.5 0 0115.5 18h-1a1 1 0 01-1-1V6a2 2 0 011.5-2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    "Male Hormones, Fertility, Sexual Health & Tanning": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7.5-4.7-9.8-9.4C.6 7 2.7 3.5 6.4 3.5c2 0 3.6 1.1 4.6 2.6C12 4.6 13.6 3.5 15.6 3.5c3.7 0 5.8 3.5 4.2 7.1C17.5 15.3 12 20 12 20z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    "Organ-Specific Bioregulators & Therapeutic Compounds": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.5C6 3.5 4 6.5 4.5 10c.4 2.6 2.5 3 2.5 5.5S5 20.5 8 20.5c2.5 0 3.2-2 3.2-4 0-1.6 1-2.2 2-2.2s2 .6 2 2.2c0 2 .7 4 3.2 4 3 0 1-2.5 1-5s2.1-2.9 2.5-5.5c.5-3.5-1.5-6.5-5-6.5-2 0-3 1.2-3.9 1.2S11.5 3.5 9.5 3.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    "Skin, Hair Care": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 12.5c0 1.8-1 2.8-2.5 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    "Digestive & Gut Health": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.5c0 2-1.5 2.5-1.5 5 0 3.5 3 4 3 7 0 2.5-2 3-3.5 3M8 3.5c1 1.5 2.5 1.5 4 1s3-1.5 4.5-.5c2 1.3 2.5 4 1.5 6.5-.8 2-2.5 2.5-2.5 5 0 2-1.5 3.5-3.5 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "Accessories & Supplies": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const ICON_FALLBACK = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
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
  grid.innerHTML = PRODUCT_CATEGORIES.map((cat) => {
    const label = labelsAr[cat] || labelOverrides[cat] || SHORT_LABELS[cat] || cat;
    const sub   = isAr ? (CATEGORY_SUBLABELS_AR[cat] || "") : (CATEGORY_SUBLABELS_EN[cat] || "");
    const icon  = ICONS[cat] || ICON_FALLBACK;
    const grad  = CATEGORY_GRADIENTS[cat] || CATEGORY_GRADIENT_FALLBACK;
    return '<a class="cat-card-v2" href="products?cat=' + encodeURIComponent(cat) + '" title="' + cat + '" style="background:' + grad + ';"><div class="cat-card-v2-icon">' + icon + '</div><div><div class="cat-card-v2-name">' + label + '</div>' + (sub ? '<div class="cat-card-v2-sub">' + sub + '</div>' : '') + '</div></a>';
  }).join("");
}
