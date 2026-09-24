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
    summaryEl.innerHTML = `<div class="empty-state"><h3>Your cart is empty</h3><p>Add products from the <a href="products">catalog</a> before checking out.</p></div>`;
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

  // Warn on navigating away with unsaved order details — a buyer who typed
  // name/address/phone and then hits back or closes the tab shouldn't lose
  // it silently. Cleared once the order is actually submitted below.
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

    const message = buildOrderMessage(formData);
    if (!message) return;

    // --- UX: disable submit button and show spinner while "processing" ---
    const submitBtn = form.querySelector('[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<svg style="display:inline-block;vertical-align:middle;margin-right:6px;animation:spin 0.8s linear infinite" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2.5" stroke-dasharray="28" stroke-dashoffset="10" stroke-linecap="round"/></svg>Processing…';
    }
    if (!document.getElementById("_co-spin-style")) {
      const s = document.createElement("style");
      s.id = "_co-spin-style";
      s.textContent = "@keyframes spin{to{transform:rotate(360deg)}}";
      document.head.appendChild(s);
    }

    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(
      "New order — trusted-peptide.com"
    )}&body=${encodeURIComponent(message)}`;

    // Short delay so the user sees the Processing state before panel swap
    setTimeout(() => {
      document.getElementById("checkout-whatsapp-link").href = whatsappUrl;
      document.getElementById("checkout-mailto-link").href = mailtoUrl;
      document.getElementById("checkout-form-panel").style.display = "none";

      const confirmPanel = document.getElementById("checkout-confirm-panel");
      confirmPanel.style.display = "block";

      // --- UX: "Order placed!" success message above the send buttons ---
      if (!confirmPanel.querySelector(".order-placed-msg")) {
        const msg = document.createElement("p");
        msg.className = "order-placed-msg";
        msg.style.cssText =
          "color:#38a169;font-weight:600;font-size:1rem;margin-bottom:12px;";
        msg.textContent = "Order placed! Please choose how to send your details:";
        confirmPanel.insertBefore(msg, confirmPanel.querySelector("div"));
      }

      // Re-enable button in case user navigates back (edge case)
      if (submitBtn && originalBtnHtml) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }

      // Order details have been handed off to WhatsApp/email at this point;
      // stop warning so the confirm-panel links (which navigate away) work.
      formTouched = false;
      window.removeEventListener("beforeunload", onBeforeUnload);
    }, 600);
  });
}

document.addEventListener("DOMContentLoaded", initCheckoutPage);
