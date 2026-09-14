/**
 * Arabic twin of cart.js for ar/cart.php — same logic, Arabic UI strings.
 * Reads/writes the same cart (getCart/saveCart from js/main.js) against
 * PRODUCTS from js/products-data-ar.js.
 */

function hydrateCartLinesAr() {
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

function renderCartPageAr() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!container || !summary) return;

  const lines = hydrateCartLinesAr();

  if (!lines.length) {
    container.innerHTML = `
      <div class="empty-state">
        <img src="../assets/brand/logo-icon.png" alt="Trusted Peptide" style="width:48px;height:48px;margin:0 auto 16px;display:block;opacity:0.6;" aria-hidden="true" />
        <h3>سلتك فارغة</h3>
        <p>تصفح <a href="../products">الكتالوج الكامل</a> لإضافة ببتيدات بحثية.</p>
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
        <img src="/${product.images[0] || ""}" alt="${product.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-variant">${variant.size} · ${formatEURHtml(pricing.unitPrice)} / وحدة${pricing.discountPercent ? ` · خصم ${pricing.discountPercent}%` : ""}</div>
        </div>
        <div class="cart-item-qty">
          <div class="qty-stepper">
            <button type="button" class="cart-qty-minus" data-idx="${idx}">−</button>
            <input type="number" min="1" value="${item.qty}" class="cart-qty-input" data-idx="${idx}" name="qty-${idx}" aria-label="الكمية لـ ${product.name}" />
            <button type="button" class="cart-qty-plus" data-idx="${idx}">+</button>
          </div>
          <button class="cart-item-remove" data-idx="${idx}">إزالة</button>
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
    <h3>ملخص الطلب</h3>
    <div class="price-row"><span>الإجمالي الفرعي</span><span>${formatEURHtml(subtotal)}</span></div>
    ${discount > 0 ? `<div class="price-row"><span>خصم الجملة</span><span class="discount">−${formatEURHtml(discount)}</span></div>` : ""}
    <div class="price-row total"><span>الإجمالي</span><span>${formatEURHtml(total)}</span></div>
    <a href="checkout" class="btn btn-primary btn-block" style="margin-top:18px;">المتابعة لإتمام الطلب</a>
  `;

  container.addEventListener("click", handleCartClickAr);
  container.addEventListener("input", handleCartInputAr);
}

function handleCartClickAr(e) {
  const cart = getCart();
  const removeBtn = e.target.closest(".cart-item-remove");
  const minusBtn = e.target.closest(".cart-qty-minus");
  const plusBtn = e.target.closest(".cart-qty-plus");

  if (removeBtn) {
    cart.splice(Number(removeBtn.dataset.idx), 1);
    saveCart(cart);
    renderCartPageAr();
  } else if (minusBtn) {
    const idx = Number(minusBtn.dataset.idx);
    cart[idx].qty = Math.max(1, cart[idx].qty - 1);
    saveCart(cart);
    renderCartPageAr();
  } else if (plusBtn) {
    const idx = Number(plusBtn.dataset.idx);
    cart[idx].qty += 1;
    saveCart(cart);
    renderCartPageAr();
  }
}

function handleCartInputAr(e) {
  const input = e.target.closest(".cart-qty-input");
  if (!input) return;
  const cart = getCart();
  const idx = Number(input.dataset.idx);
  cart[idx].qty = Math.max(1, Number(input.value) || 1);
  saveCart(cart);
  renderCartPageAr();
}

document.addEventListener("DOMContentLoaded", renderCartPageAr);
