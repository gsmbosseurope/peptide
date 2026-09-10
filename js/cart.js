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
        <h3>Your cart is empty</h3>
        <p>Browse the <a href="products.html">full catalog</a> to add research peptides.</p>
      </div>
    `;
    summary.innerHTML = "";
    return;
  }

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
    <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:18px;">Proceed to Checkout</a>
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
