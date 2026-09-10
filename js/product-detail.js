/**
 * Product detail page: reads ?id= from the URL, renders gallery/composition/
 * uses/video, and drives the live variant + quantity pricing preview using
 * the shared pricing.js helpers.
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

function initProductDetailPage() {
  const root = document.getElementById("product-detail-root");
  if (!root) return;

  const id = getQueryParam("id");
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  if (!product) {
    root.innerHTML = `<div class="empty-state"><h3>Product not found</h3><p>Return to the <a href="products">full catalog</a>.</p></div>`;
    return;
  }

  document.title = `${product.name} — trusted-peptide.com`;

  let activeVariantIndex = 0;
  let qty = 1;
  let activeImageIndex = 0;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="products">Products</a> / ${product.name}
    </div>
    <div class="product-detail">
      <div class="pd-gallery">
        <div class="pd-gallery-main">
          <img id="pd-main-image" src="${product.images[0] || ""}" alt="${product.name}" />
        </div>
        <div class="pd-thumbs" id="pd-thumbs">
          ${product.images
            .map(
              (img, i) =>
                `<button class="pd-thumb${i === 0 ? " active" : ""}" data-idx="${i}"><img src="${img}" alt="${product.name} view ${i + 1}" /></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="pd-info">
        ${product.showPurity !== false && product.purity ? `<span class="badge-purity">${product.purity} purity</span>` : ""}
        <div class="pd-cat">${productCategories(product).join(" · ")}</div>
        <h1 class="pd-name">${product.name}</h1>
        <p class="pd-desc">${product.shortDescription}</p>

        <div class="variant-select">
          <label>Select size</label>
          <div class="variant-chips" id="variant-chips">
            ${product.variants
              .map(
                (v, i) =>
                  `<button class="variant-chip${i === 0 ? " active" : ""}" data-idx="${i}">${v.size} — ${formatEURHtml(v.price)}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="qty-select">
          <label for="qty-input">Quantity</label>
          <div class="qty-stepper">
            <button type="button" id="qty-minus" aria-label="Decrease quantity">−</button>
            <input type="number" id="qty-input" value="1" min="1" aria-label="Quantity" />
            <button type="button" id="qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <div class="tier-hints" id="tier-hints"></div>

        <div class="price-panel">
          <div class="price-row"><span>Unit price</span><span id="price-unit"></span></div>
          <div class="price-row"><span>Subtotal</span><span id="price-subtotal"></span></div>
          <div class="price-row" id="price-discount-row" style="display:none;"><span>Wholesale discount</span><span class="discount" id="price-discount"></span></div>
          <div class="price-row total"><span>Total</span><span id="price-total"></span></div>
        </div>

        <div class="pd-actions">
          <button class="btn btn-primary" id="add-to-cart-btn">Add to Cart</button>
          <a class="btn btn-secondary" id="whatsapp-order-btn" target="_blank" rel="noopener">Order via WhatsApp</a>
        </div>

        <div class="pd-tabs">
          <div class="pd-tab active" data-tab="composition">Composition</div>
          <div class="pd-tab" data-tab="uses">Uses</div>
          <div class="pd-tab" data-tab="video">Video</div>
        </div>
        <div class="pd-tab-panel active" data-panel="composition">
          <ul>${product.composition.map((c) => `<li>${c}</li>`).join("")}</ul>
        </div>
        <div class="pd-tab-panel" data-panel="uses">
          <ul>${product.uses.map((u) => `<li>${u}</li>`).join("")}</ul>
        </div>
        <div class="pd-tab-panel" data-panel="video">
          <div class="pd-video">
            ${product.video ? `<video controls src="${product.video}"></video>` : "Explainer video coming soon."}
          </div>
        </div>
      </div>
    </div>
  `;

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
            <span>Buy ${tier.minQty}+, save ${tier.discountPercent}%</span>
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
    const message = `Hi Trusted-Peptide, I'd like to order:\n${product.name} (${variant.size}) x${qty}\nEstimated total: ${formatEUR(pricing.total)}`;
    whatsappBtn.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  document.getElementById("variant-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".variant-chip");
    if (!chip) return;
    document.querySelectorAll(".variant-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeVariantIndex = Number(chip.dataset.idx);
    render();
  });

  document.getElementById("pd-thumbs").addEventListener("click", (e) => {
    const thumb = e.target.closest(".pd-thumb");
    if (!thumb) return;
    document.querySelectorAll(".pd-thumb").forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    activeImageIndex = Number(thumb.dataset.idx);
    mainImage.src = product.images[activeImageIndex];
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

  document.getElementById("qty-minus").addEventListener("click", () => setQty(qty - 1));
  document.getElementById("qty-plus").addEventListener("click", () => setQty(qty + 1));
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
    btn.textContent = "Added ✓";
    setTimeout(() => (btn.textContent = original), 1400);
  });

  render();
}

document.addEventListener("DOMContentLoaded", initProductDetailPage);
