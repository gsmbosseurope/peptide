/**
 * Shared pricing/discount engine.
 * Used by product-detail.js (live preview) and cart.js (final totals) so the
 * discount math only exists in one place.
 */

/**
 * Store contact details — single source of truth, loaded on every page.
 * WhatsApp number must be digits only (no "+", spaces, or leading zeros).
 */
const STORE_PHONE_DISPLAY = "+32 469 12 62 44";
const STORE_WHATSAPP_NUMBER = "32469126244";

/**
 * Given a product's wholesale tiers and a quantity, return the tier that
 * applies (the highest minQty the quantity satisfies), or null if none apply.
 */
function getApplicableTier(wholesaleTiers, qty) {
  if (!wholesaleTiers || !wholesaleTiers.length) return null;
  const eligible = wholesaleTiers
    .filter((t) => qty >= t.minQty)
    .sort((a, b) => b.minQty - a.minQty);
  return eligible[0] || null;
}

/**
 * Compute full pricing breakdown for a single line (one variant, one qty).
 * Returns { unitPrice, qty, tier, discountPercent, subtotal, discountAmount, total }
 */
function computeLinePricing(variant, qty, wholesaleTiers) {
  const unitPrice = variant.price;
  const tier = getApplicableTier(wholesaleTiers, qty);
  const discountPercent = tier ? tier.discountPercent : 0;
  const subtotal = unitPrice * qty;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount;
  return { unitPrice, qty, tier, discountPercent, subtotal, discountAmount, total };
}

function formatEUR(amount) {
  const hasCents = Math.round(amount * 100) % 100 !== 0;
  const formatted = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
  return formatted.replace("€", "€ ");
}

/**
 * Wraps every "0" digit in a <span class="zero"> so CSS can draw a thin
 * diagonal mark on top of it. This does NOT depend on any webfont loading —
 * it works identically even if the page falls back to the device's system
 * font, which is what makes it reliable across all browsers/devices.
 */
function slashZeros(str) {
  return str.replace(/0/g, '<span class="zero">0</span>');
}

/**
 * Same as formatEUR but wraps the "€" symbol in a <span class="currency-symbol">
 * so it can be styled smaller than the digits via CSS, and applies the
 * always-visible zero marker. Only safe to use where the result is inserted
 * via innerHTML (not .textContent).
 */
function formatEURHtml(amount) {
  const withCurrency = formatEUR(amount).replace("€", '<span class="currency-symbol">€</span>');
  return slashZeros(withCurrency);
}
