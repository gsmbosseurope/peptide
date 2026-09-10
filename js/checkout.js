/**
 * Checkout page: builds a human-readable order summary from the cart and
 * form fields, then hands it off via WhatsApp deep link + mailto fallback.
 * No payment gateway / backend — this is the fast-launch flow the user
 * chose (pre-filled order message, fulfilled manually).
 */

const STORE_EMAIL = "sale@trusted-peptide.com";

function buildOrderMessage(formData) {
  const lines = hydrateCartLines();
  if (!lines.length) return null;

  const subtotal = lines.reduce((s, l) => s + l.pricing.subtotal, 0);
  const discount = lines.reduce((s, l) => s + l.pricing.discountAmount, 0);
  const total = lines.reduce((s, l) => s + l.pricing.total, 0);

  const itemLines = lines
    .map(
      ({ product, variant, item, pricing }) =>
        `• ${product.name} (${variant.size}) x${item.qty} — ${formatEUR(pricing.total)}`
    )
    .join("\n");

  return [
    "New order — trusted-peptide.com",
    "",
    itemLines,
    "",
    `Subtotal: ${formatEUR(subtotal)}`,
    discount > 0 ? `Wholesale discount: −${formatEUR(discount)}` : null,
    `Total: ${formatEUR(total)}`,
    "",
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Address: ${formData.address}`,
    formData.notes ? `Notes: ${formData.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function initCheckoutPage() {
  const form = document.getElementById("checkout-form");
  const summaryEl = document.getElementById("checkout-summary");
  if (!form || !summaryEl) return;

  const lines = hydrateCartLines();

  if (!lines.length) {
    summaryEl.innerHTML = `<div class="empty-state"><h3>Your cart is empty</h3><p>Add products from the <a href="products.html">catalog</a> before checking out.</p></div>`;
    form.style.display = "none";
    return;
  }

  const subtotal = lines.reduce((s, l) => s + l.pricing.subtotal, 0);
  const discount = lines.reduce((s, l) => s + l.pricing.discountAmount, 0);
  const total = lines.reduce((s, l) => s + l.pricing.total, 0);

  summaryEl.innerHTML = `
    <h3>Order Summary</h3>
    ${lines
      .map(
        ({ product, variant, item, pricing }) => `
      <div class="price-row"><span>${product.name} (${variant.size}) x${item.qty}</span><span>${formatEURHtml(pricing.total)}</span></div>
    `
      )
      .join("")}
    <div class="price-row"><span>Subtotal</span><span>${formatEURHtml(subtotal)}</span></div>
    ${discount > 0 ? `<div class="price-row"><span>Wholesale discount</span><span class="discount">−${formatEURHtml(discount)}</span></div>` : ""}
    <div class="price-row total"><span>Total</span><span>${formatEURHtml(total)}</span></div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      notes: form.notes.value.trim(),
    };

    const message = buildOrderMessage(formData);
    if (!message) return;

    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(
      "New order — trusted-peptide.com"
    )}&body=${encodeURIComponent(message)}`;

    document.getElementById("checkout-whatsapp-link").href = whatsappUrl;
    document.getElementById("checkout-mailto-link").href = mailtoUrl;
    document.getElementById("checkout-form-panel").style.display = "none";
    document.getElementById("checkout-confirm-panel").style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", initCheckoutPage);
