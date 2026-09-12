/**
 * Cart page: renders line items from localStorage, recomputes pricing via
 * the shared pricing.js engine, allows qty edits/removal, and syncs totals
 * for the summary panel / checkout handoff.
 */

function hydrateCartLines() {
  const cart = getCart();
  return cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      if (!product) return null;
      const variant = product.variants.find((v) => v.size === item.variant) || product.variants[0];
      const pricing = computeLinePricing(variant, item.qty, product.wholesaleTiers);
      return { item, product, variant, pricing };
    })
    .filter(Boolean);
}

function renderCartPage() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!container || !summary) return;

  const lines = hydrateCartLines();

  if (!lines.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="60 60 480 560" xmlns="http://www.w3.org/2000/svg" style="width:48px;height:48px;margin:0 auto 16px;display:block;opacity:0.6;" aria-hidden="true">
          <defs><linearGradient id="dnaGradientCartEmpty" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#082B66"/><stop offset="45%" stop-color="#006DCE"/><stop offset="75%" stop-color="#08C9D9"/><stop offset="100%" stop-color="#087F91"/></linearGradient></defs>
          <g stroke-linecap="round">
            <path d="M125 75 H475 L420 130 H180 Z" fill="url(#dnaGradientCartEmpty)"/>
            <path d="M280 130 C175 190 175 265 285 325 C395 385 395 460 285 520 C250 540 235 565 235 600" fill="none" stroke="url(#dnaGradientCartEmpty)" stroke-width="48"/>
            <path d="M320 130 C425 190 425 265 315 325 C205 385 205 460 315 520 C350 540 365 565 365 600" fill="none" stroke="url(#dnaGradientCartEmpty)" stroke-width="48"/>
            <g stroke="#19D7E5" stroke-width="15">
              <line x1="260" y1="205" x2="340" y2="205"/><line x1="235" y1="250" x2="365" y2="250"/><line x1="250" y1="295" x2="350" y2="295"/>
              <line x1="250" y1="410" x2="350" y2="410"/><line x1="235" y1="455" x2="365" y2="455"/><line x1="260" y1="500" x2="340" y2="500"/>
            </g>
          </g>
        </svg>
        <h3>Your cart is empty</h3>
        <p>Browse the <a href="products">full catalog</a> to add research peptides.</p>
      </div>
    `;
    summary.innerHTML = "";
    summary.hidden = true;
    return;
  }
  summary.hidden = false;

  container.innerHTML = lines
    .map(
      ({ item, product, variant, pricing }, idx) => `
      <div class="cart-item" data-idx="${idx}">
        <img src="${product.images[0] || ""}" alt="${product.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-variant">${variant.size} · ${formatEURHtml(pricing.unitPrice)} / unit${pricing.discountPercent ? ` · ${pricing.discountPercent}% off` : ""}</div>
        </div>
        <div class="cart-item-qty">
          <div class="qty-stepper">
            <button type="button" class="cart-qty-minus" data-idx="${idx}">−</button>
            <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}" name="qty-${idx}" aria-label="Quantity for ${product.name}" />
            <button type="button" class="cart-qty-plus" data-idx="${idx}">+</button>
          </div>
          <button class="cart-item-remove" data-idx="${idx}">Remove</button>
        </div>
        <div class="cart-item-total">${formatEURHtml(pricing.total)}</div>
      </div>
    `
    )
    .join("");

  const subtotal = lines.reduce((s, l) => s + l.pricing.subtotal, 0);
  const discount = lines.reduce((s, l) => s + l.pricing.discountAmount, 0);
  const total = lines.reduce((s, l) => s + l.pricing.total, 0);

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="price-row"><span>Subtotal</span><span>${formatEURHtml(subtotal)}</span></div>
    ${discount > 0 ? `<div class="price-row"><span>Wholesale discount</span><span class="discount">−${formatEURHtml(discount)}</span></div>` : ""}
    <div class="price-row total"><span>Total</span><span>${formatEURHtml(total)}</span></div>
    <a href="checkout" class="btn btn-primary btn-block" style="margin-top:18px;">Proceed to Checkout</a>
  `;

  container.addEventListener("click", handleCartClick);
  container.addEventListener("input", handleCartInput);
}

function handleCartClick(e) {
  const cart = getCart();
  const removeBtn = e.target.closest(".cart-item-remove");
  const minusBtn = e.target.closest(".cart-qty-minus");
  const plusBtn = e.target.closest(".cart-qty-plus");

  if (removeBtn) {
    cart.splice(Number(removeBtn.dataset.idx), 1);
    saveCart(cart);
    renderCartPage();
  } else if (minusBtn) {
    const idx = Number(minusBtn.dataset.idx);
    cart[idx].qty = Math.max(1, cart[idx].qty - 1);
    saveCart(cart);
    renderCartPage();
  } else if (plusBtn) {
    const idx = Number(plusBtn.dataset.idx);
    cart[idx].qty += 1;
    saveCart(cart);
    renderCartPage();
  }
}

function handleCartInput(e) {
  const input = e.target.closest(".cart-qty-input");
  if (!input) return;
  const cart = getCart();
  const idx = Number(input.dataset.idx);
  cart[idx].qty = Math.max(1, Number(input.value) || 1);
  saveCart(cart);
  renderCartPage();
}

document.addEventListener("DOMContentLoaded", renderCartPage);
