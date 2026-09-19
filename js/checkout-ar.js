/**
 * Arabic twin of checkout.js for ar/checkout.php — same logic, Arabic UI
 * strings, built on hydrateCartLinesAr() from cart-ar.js.
 */

const STORE_EMAIL = "sale@trusted-peptide.com";

function buildOrderMessageAr(formData) {
  const lines = hydrateCartLinesAr();
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
    "طلب جديد — trusted-peptide.com",
    "",
    itemLines,
    "",
    `الإجمالي الفرعي: ${formatEUR(subtotal)}`,
    discount > 0 ? `خصم الجملة: −${formatEUR(discount)}` : null,
    `الإجمالي: ${formatEUR(total)}`,
    "",
    `الاسم: ${formData.name}`,
    `الهاتف: ${formData.phone}`,
    `العنوان: ${formData.address}`,
    formData.notes ? `ملاحظات: ${formData.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function initCheckoutPageAr() {
  const form = document.getElementById("checkout-form");
  const summaryEl = document.getElementById("checkout-summary");
  if (!form || !summaryEl) return;

  const lines = hydrateCartLinesAr();

  if (!lines.length) {
    summaryEl.innerHTML = `<div class="empty-state"><h3>سلتك فارغة</h3><p>أضف منتجات من <a href="../products">الكتالوج</a> قبل إتمام الطلب.</p></div>`;
    form.style.display = "none";
    return;
  }

  const subtotal = lines.reduce((s, l) => s + l.pricing.subtotal, 0);
  const discount = lines.reduce((s, l) => s + l.pricing.discountAmount, 0);
  const total = lines.reduce((s, l) => s + l.pricing.total, 0);

  summaryEl.innerHTML = `
    <h3>ملخص الطلب</h3>
    ${lines
      .map(
        ({ product, variant, item, pricing }) => `
      <div class="price-row"><span>${product.name} (${variant.size}) x${item.qty}</span><span>${formatEURHtml(pricing.total)}</span></div>
    `
      )
      .join("")}
    <div class="price-row"><span>الإجمالي الفرعي</span><span>${formatEURHtml(subtotal)}</span></div>
    ${discount > 0 ? `<div class="price-row"><span>خصم الجملة</span><span class="discount">−${formatEURHtml(discount)}</span></div>` : ""}
    <div class="price-row total"><span>الإجمالي</span><span>${formatEURHtml(total)}</span></div>
  `;

  // Warn on navigating away with unsaved order details — see checkout.js
  // for the English twin of this same fix.
  let formTouched = false;
  const onBeforeUnload = (e) => {
    if (!formTouched) return;
    e.preventDefault();
    e.returnValue = "";
  };
  form.addEventListener(
    "input",
    () => {
      formTouched = true;
    },
    { once: true }
  );
  window.addEventListener("beforeunload", onBeforeUnload);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      notes: form.notes.value.trim(),
    };

    const message = buildOrderMessageAr(formData);
    if (!message) return;

    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(
      "طلب جديد — trusted-peptide.com"
    )}&body=${encodeURIComponent(message)}`;

    document.getElementById("checkout-whatsapp-link").href = whatsappUrl;
    document.getElementById("checkout-mailto-link").href = mailtoUrl;
    document.getElementById("checkout-form-panel").style.display = "none";
    document.getElementById("checkout-confirm-panel").style.display = "block";

    formTouched = false;
    window.removeEventListener("beforeunload", onBeforeUnload);
  });
}

document.addEventListener("DOMContentLoaded", initCheckoutPageAr);
