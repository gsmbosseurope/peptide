/**
 * Arabic twin of product-detail.js for ar/product.php. Reads the same
 * ?id= against PRODUCTS from js/products-data-ar.js (category/categories
 * stay the canonical English strings there, so productCategories() below
 * still works the same — only the displayed category label is translated,
 * via CATEGORY_LABELS_AR from js/category-labels-ar.js).
 */

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/** A product's full set of categories — the `categories` array when present, else its single `category`. */
function productCategories(product) {
  return Array.isArray(product.categories) && product.categories.length
    ? product.categories
    : [product.category].filter(Boolean);
}

function categoryLabelAr(category) {
  return (typeof CATEGORY_LABELS_AR !== "undefined" && CATEGORY_LABELS_AR[category]) || category;
}

// Translates only the unit in a variant's size string for display (e.g.
// "5 mg" -> "5 ملغم", "10ml" -> "10 مل") — the underlying variant.size
// value passed to addToCart()/pricing stays the original English string,
// since cart/checkout match against the English catalog's exact size text.
// \b doesn't fire between a digit and a letter (both are "word" chars in
// regex), so "5mg"/"75iU" need the digit captured and re-inserted with a
// space rather than a plain \b-anchored match.
const SIZE_UNIT_TRANSLATIONS = [
  [/(\d)\s*mg\b/i, "$1 ملغم"],
  [/(\d)\s*ml\b/i, "$1 مل"],
  [/(\d)\s*iu\b/i, "$1 وحدة دولية"],
];

function sizeLabelAr(size) {
  let label = size;
  for (const [pattern, replacement] of SIZE_UNIT_TRANSLATIONS) {
    label = label.replace(pattern, replacement);
  }
  return label;
}

/** Arabic twin of renderProductGallerySection() in product-detail.js — empty string (no heading) when nothing is tagged. */
function renderProductGallerySectionAr(productId) {
  if (typeof GALLERY_ITEMS === "undefined") return "";
  const items = GALLERY_ITEMS.filter((g) => (g.productIds || []).includes(productId) && g.src);
  if (!items.length) return "";
  return `
    <div class="pd-gallery-section">
      <div class="section-title-row"><h2>معرض الصور</h2></div>
      <div class="gallery-grid" id="pd-gallery-grid">
        ${items
          .map(
            (g) => `
          <div class="gallery-tile" data-gallery-src="/${g.src}" data-gallery-type="${g.type}" data-gallery-caption="${g.caption || ""}">
            ${
              g.type === "video" && !g.thumbnail
                ? `<video src="/${g.src}" muted preload="metadata"></video>`
                : `<img src="/${g.type === "video" ? g.thumbnail : g.src}" alt="${g.caption || ""}" loading="lazy" />`
            }
            ${g.type === "video" ? `<span class="gallery-tile-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>` : ""}
            ${g.caption ? `<span class="gallery-tile-caption">${g.caption}</span>` : ""}
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

/* ── Animation helpers ─────────────────────────────────────────────────── */
(function injectAnimStyles() {
  if (document.getElementById("pdp-anim-css")) return;
  const s = document.createElement("style");
  s.id = "pdp-anim-css";
  s.textContent = `
    @keyframes pdpFlipIn {
      0%   { transform: perspective(700px) rotateY(-65deg) scale(0.9); opacity: 0; filter: brightness(1.3); }
      55%  { transform: perspective(700px) rotateY(6deg)  scale(1.02); opacity: 1; filter: brightness(1.15); }
      80%  { transform: perspective(700px) rotateY(-2deg) scale(1);    filter: brightness(1); }
      100% { transform: perspective(700px) rotateY(0deg)  scale(1);    opacity: 1; filter: brightness(1); }
    }
    #pd-main-image.pdp-flip {
      animation: pdpFlipIn 0.42s cubic-bezier(0.22,1,0.36,1) both;
      transform-origin: center center;
    }
    @keyframes pdpChipPress {
      0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(var(--accent-rgb,99,102,241),.0); }
      28%  { transform: scale(0.91); box-shadow: 0 0 0 7px rgba(var(--accent-rgb,99,102,241),.22); }
      62%  { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(var(--accent-rgb,99,102,241),.10); }
      100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(var(--accent-rgb,99,102,241),.0); }
    }
    .pdp-chip-press { animation: pdpChipPress 0.38s ease both !important; }
    @keyframes pdpQtyPulse {
      0%   { transform: scale(1); }
      40%  { transform: scale(0.86); }
      72%  { transform: scale(1.09); }
      100% { transform: scale(1); }
    }
    .pdp-qty-pulse { animation: pdpQtyPulse 0.26s ease both !important; }
    @keyframes pdpThumbFlash {
      0%,100% { box-shadow: 0 0 0 0 transparent; }
      45%     { box-shadow: 0 0 0 4px var(--accent,#6366f1); transform: scale(1.08); }
    }
    .pd-thumb.pdp-thumb-flash { animation: pdpThumbFlash 0.3s ease both; }
  `;
  document.head.appendChild(s);
})();

function animMainImg(img) {
  if (!img) return;
  img.classList.remove("pdp-flip");
  void img.offsetWidth;
  img.classList.add("pdp-flip");
}

function animBtn(el, cls) {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
  el.addEventListener("animationend", () => el.classList.remove(cls), { once: true });
}

/** Category line: only the most specific entry of a category path, e.g. "Face Serum". */
function pdCategoryLine(cats, labelFn) {
  const SEP = " › ";
  const leaves = cats.filter((c) => !cats.some((o) => o !== c && o.startsWith(c + SEP)));
  return leaves
    .map((c) => {
      const label = labelFn(c);
      return label && label !== c ? label : c.split(SEP).pop();
    })
    .join(" · ");
}

function initProductDetailPage() {
  const root = document.getElementById("product-detail-root");
  if (!root) return;

  const id = getQueryParam("id");
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  if (!product) {
    root.innerHTML = `<div class="empty-state"><h3>المنتج غير موجود</h3><p>عد إلى <a href="products">الكتالوج الكامل</a>.</p></div>`;
    return;
  }

  if (!product.name) {
    root.innerHTML = `<div class="empty-state"><h3>هذا المنتج قيد الترجمة حالياً</h3><p>لم تتم إضافة النسخة العربية لهذا المنتج بعد. عد إلى <a href="products">الكتالوج الكامل</a> أو تصفح <a href="/product?id=${encodeURIComponent(product.id)}">النسخة الإنجليزية</a>.</p></div>`;
    document.title = "المنتج قيد الترجمة — trusted-peptide.com";
    return;
  }

  document.title = `${product.name} — trusted-peptide.com`;

  let activeVariantIndex = 0;
  let qty = 1;
  let activeImageIndex = 0;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/">الرئيسية</a> / <a href="products">المنتجات</a> / ${product.name}
    </div>
    <div class="product-detail">
      <div class="pd-gallery">
        <div class="pd-gallery-main">
          <img id="pd-main-image" src="${product.images[0] ? "/" + product.images[0] : ""}" alt="${product.name}" />
        </div>
        <div class="pd-thumbs" id="pd-thumbs">
          ${product.images
            .map(
              (img, i) =>
                `<button class="pd-thumb${i === 0 ? " active" : ""}" data-idx="${i}"><img src="/${img}" alt="${product.name} ${i + 1}" /></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="pd-info">
        ${product.showPurity !== false && product.purity ? `<span class="badge-purity">نقاء ${product.purity}</span>` : ""}
        <div class="pd-cat">${pdCategoryLine(productCategories(product), categoryLabelAr)}</div>
        <h1 class="pd-name">${product.name}</h1>
        <div class="pd-desc">${product.shortDescription}</div>

        <div class="variant-select">
          <label>اختر المقاس</label>
          <div class="variant-chips" id="variant-chips">
            ${product.variants
              .map(
                (v, i) =>
                  `<button class="variant-chip${i === 0 ? " active" : ""}" data-idx="${i}" data-dose="${parseInt(v.size) || 0}">${sizeLabelAr(v.size)}&nbsp;–&nbsp;${formatEURHtml(v.price)}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="qty-select">
          <label for="qty-input">الكمية</label>
          <div class="qty-stepper">
            <button type="button" id="qty-minus" aria-label="إنقاص الكمية">−</button>
            <input type="number" id="qty-input" value="1" min="1" aria-label="الكمية" />
            <button type="button" id="qty-plus" aria-label="زيادة الكمية">+</button>
          </div>
        </div>

        <div class="tier-hints" id="tier-hints"></div>

        <div class="price-panel">
          <div class="price-row"><span>سعر الوحدة</span><span id="price-unit"></span></div>
          <div class="price-row"><span>الإجمالي الفرعي</span><span id="price-subtotal"></span></div>
          <div class="price-row" id="price-discount-row" style="display:none;"><span>خصم الجملة</span><span class="discount" id="price-discount"></span></div>
          <div class="price-row total"><span>الإجمالي</span><span id="price-total"></span></div>
        </div>

        <div class="pd-actions">
          <button class="btn btn-primary" id="add-to-cart-btn">أضف إلى السلة</button>
          <a class="btn btn-secondary" id="whatsapp-order-btn" target="_blank" rel="noopener">اطلب عبر واتساب</a>
          <span id="pd-share-wrap"></span>
        </div>

        <div class="pd-tabs">
          <div class="pd-tab active" data-tab="main">فوائد الاستخدام</div>
          <div class="pd-tab" data-tab="video">فيديو</div>
        </div>
        <div class="pd-tab-panel active" data-panel="main">
          <ul>${product.uses.map((u) => `<li>${u}</li>`).join("")}</ul>
          <h4 class="pd-composition-heading"><strong>التركيبة العلمية</strong></h4>
          <ul>${product.composition.map((c) => `<li>${c}</li>`).join("")}</ul>
        </div>
        <div class="pd-tab-panel" data-panel="video">
          <div class="pd-video">
            ${product.video ? `<video controls src="${product.video}"></video>` : "فيديو الشرح قريباً."}
          </div>
        </div>
      </div>
    </div>
    ${renderProductGallerySectionAr(product.id)}
  `;

  formatProductDescParagraphs(document.querySelector(".pd-desc"));

  const descText = document.querySelector(".pd-desc").textContent.trim();
  renderShareButton(document.getElementById("pd-share-wrap"), {
    title: product.name,
    text: `${product.name} — ${descText}`,
  });

  function renderTierHints(wholesaleTiers, currentQty) {
    if (!wholesaleTiers || !wholesaleTiers.length) {
      tierHintsEl.innerHTML = "";
      return;
    }
    const sorted = [...wholesaleTiers].sort((a, b) => a.minQty - b.minQty);
    const applicableTier = getApplicableTier(wholesaleTiers, currentQty);
    tierHintsEl.innerHTML = sorted
      .map((tier) => {
        const isApplied = applicableTier && tier.minQty === applicableTier.minQty;
        const isIncluded = !isApplied && currentQty >= tier.minQty;
        const stateClass = isApplied ? " is-achieved" : isIncluded ? " is-included" : "";
        const mark = isApplied ? "✓" : isIncluded ? "–" : "";
        return `
          <button type="button" class="tier-hint-item${stateClass}" data-min-qty="${tier.minQty}">
            <span class="tier-hint-check">${mark}</span>
            <span>اشترِ ${tier.minQty} ووفّر ${tier.discountPercent} %</span>
          </button>
        `;
      })
      .join("");
  }

  const priceUnitEl = document.getElementById("price-unit");
  const priceSubtotalEl = document.getElementById("price-subtotal");
  const priceDiscountRow = document.getElementById("price-discount-row");
  const priceDiscountEl = document.getElementById("price-discount");
  const priceTotalEl = document.getElementById("price-total");
  const tierHintsEl = document.getElementById("tier-hints");
  const qtyInput = document.getElementById("qty-input");
  const mainImage = document.getElementById("pd-main-image");

  function render() {
    const variant = product.variants[activeVariantIndex];
    const pricing = computeLinePricing(variant, qty, product.wholesaleTiers);

    priceUnitEl.innerHTML = formatEURHtml(pricing.unitPrice);
    priceSubtotalEl.innerHTML = formatEURHtml(pricing.subtotal);
    priceTotalEl.innerHTML = formatEURHtml(pricing.total);

    if (pricing.discountPercent > 0) {
      priceDiscountRow.style.display = "flex";
      priceDiscountEl.innerHTML = `−${formatEURHtml(pricing.discountAmount)} (${pricing.discountPercent}%)`;
    } else {
      priceDiscountRow.style.display = "none";
    }

    renderTierHints(product.wholesaleTiers, qty);

    const whatsappBtn = document.getElementById("whatsapp-order-btn");
    const message = `مرحباً Trusted-Peptide، أرغب بطلب:\n${product.name} (${sizeLabelAr(variant.size)}) × ${qty}\nالإجمالي التقديري: ${formatEUR(pricing.total)}`;
    whatsappBtn.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  document.getElementById("variant-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".variant-chip");
    if (!chip) return;
    document.querySelectorAll(".variant-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    animBtn(chip, "pdp-chip-press");
    activeVariantIndex = Number(chip.dataset.idx);
    // If the product has an image matching this variant index, switch to it
    if (product.images[activeVariantIndex]) {
      animMainImg(mainImage);
      mainImage.src = "/" + product.images[activeVariantIndex];
      activeImageIndex = activeVariantIndex;
      document.querySelectorAll(".pd-thumb").forEach((t, i) => {
        t.classList.toggle("active", i === activeVariantIndex);
      });
    }
    render();
  });

  document.getElementById("pd-thumbs").addEventListener("click", (e) => {
    const thumb = e.target.closest(".pd-thumb");
    if (!thumb) return;
    document.querySelectorAll(".pd-thumb").forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    animBtn(thumb, "pdp-thumb-flash");
    activeImageIndex = Number(thumb.dataset.idx);
    animMainImg(mainImage);
    mainImage.src = "/" + product.images[activeImageIndex];
  });

  document.querySelectorAll(".pd-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".pd-tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".pd-tab-panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`.pd-tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add("active");
    });
  });

  function setQty(newQty) {
    qty = Math.max(1, newQty);
    qtyInput.value = qty;
    render();
  }

  document.getElementById("qty-minus").addEventListener("click", (e) => { animBtn(e.currentTarget, "pdp-qty-pulse"); setQty(qty - 1); });
  document.getElementById("qty-plus").addEventListener("click", (e) => { animBtn(e.currentTarget, "pdp-qty-pulse"); setQty(qty + 1); });
  qtyInput.addEventListener("input", (e) => setQty(Number(e.target.value) || 1));

  tierHintsEl.addEventListener("click", (e) => {
    const item = e.target.closest(".tier-hint-item");
    if (!item) return;
    setQty(Number(item.dataset.minQty));
  });

  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const variant = product.variants[activeVariantIndex];
    addToCart(product.id, variant.size, qty);
    const btn = document.getElementById("add-to-cart-btn");
    const original = btn.textContent;
    btn.textContent = "تمت الإضافة ✓";
    setTimeout(() => (btn.textContent = original), 1400);
  });

  render();

  if (typeof initGalleryLightbox === "function") initGalleryLightbox("#pd-gallery-grid");
}

// Same heading/RTL-line detection as js/blog.js's formatBlogPostParagraphs()
// — needed because Quill's rich-text output carries no direction
// attribute and every paragraph is structurally identical.
const PD_RTL_PATTERN = /[֑-߿יִ-﷿ﹰ-ﻼ]/;

function formatProductDescParagraphs(container) {
  if (!container) return;
  const nbspPattern = new RegExp(String.fromCharCode(160), "g");
  const paragraphs = Array.from(container.querySelectorAll(":scope > p, :scope > h2, :scope > h3"));
  const texts = paragraphs.map((p) => (p.textContent || "").replace(nbspPattern, " ").trim());

  paragraphs.forEach((p, i) => {
    const text = texts[i];
    const isEmpty = !text;
    const endsWithColon = /[:：]\s*$/.test(text);
    const hasDashSeparator = /\s[—–-]\s/.test(text);
    const isHeadingLine = !isEmpty && (endsWithColon || hasDashSeparator) && text.length <= 140;

    if (!isEmpty) {
      const ownIsRtl = PD_RTL_PATTERN.test(text);
      const dirSourceText = isHeadingLine && !ownIsRtl ? texts[i + 1] || text : text;
      p.dir = PD_RTL_PATTERN.test(dirSourceText) ? "rtl" : "ltr";
    }

    if (isHeadingLine) {
      p.classList.add("pd-desc-heading-line");
    }
  });
}

document.addEventListener("DOMContentLoaded", initProductDetailPage);
