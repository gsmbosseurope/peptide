/**
 * Product-page ads: products listed in the current product's `promoted`
 * array (chosen in the admin panel) are shown twice —
 *   1. a compact card right under the Add to Cart buttons, and
 *   2. a "You may also like" section at the bottom of the page.
 * Loaded after product-detail(-ar).js, so the page is already rendered.
 */
(function () {
  function init() {
    if (typeof PRODUCTS === "undefined") return;
    const id = new URLSearchParams(window.location.search).get("id");
    const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
    if (!product || !Array.isArray(product.promoted) || !product.promoted.length) return;

    const promos = product.promoted.map((pid) => PRODUCTS.find((p) => p.id === pid)).filter(Boolean);
    if (!promos.length) return;

    const isAr = document.documentElement.lang === "ar";
    const t = isAr
      ? { tag: "يُنصح به معه", view: "عرض المنتج", from: "من", title: "قد يعجبك أيضاً", eyebrow: "مختار لك" }
      : { tag: "Pairs well with", view: "View product", from: "from", title: "You may also like", eyebrow: "Picked for you" };
    const price = (p) => {
      const min = Math.min(...(p.variants || []).map((v) => v.price));
      if (!isFinite(min)) return "";
      return typeof formatEURHtml === "function" ? formatEURHtml(min) : "€" + min.toFixed(2);
    };
    const img = (p) => (p.images && p.images[0] ? "/" + p.images[0].replace(/^\//, "") : "");
    const href = (p) => "product?id=" + encodeURIComponent(p.id);

    // 1) Compact card(s) under the buy buttons.
    const actions = document.querySelector(".pd-actions");
    if (actions) {
      const box = document.createElement("div");
      box.className = "pd-promo";
      box.innerHTML = promos
        .map(
          (p) => `
        <a class="pd-promo-card" href="${href(p)}">
          ${img(p) ? `<img src="${img(p)}" alt="" loading="lazy" />` : ""}
          <span class="pd-promo-text">
            <span class="pd-promo-tag">${t.tag}</span>
            <span class="pd-promo-name">${p.name}</span>
            <span class="pd-promo-price">${t.from} ${price(p)}</span>
          </span>
          <span class="pd-promo-go" aria-hidden="true">${isAr ? "←" : "→"}</span>
        </a>`
        )
        .join("");
      actions.after(box);
    }

    // 2) "You may also like" section after the product block.
    const detail = document.querySelector(".product-detail");
    if (detail) {
      const sec = document.createElement("section");
      sec.className = "pd-related";
      sec.innerHTML = `
        <span class="eyebrow">${t.eyebrow}</span>
        <h2 class="pd-related-title">${t.title}</h2>
        <div class="pd-related-grid">
          ${promos
            .map(
              (p) => `
            <a class="pd-related-card" href="${href(p)}">
              <div class="pd-related-media">${img(p) ? `<img src="${img(p)}" alt="${p.name}" loading="lazy" />` : ""}</div>
              <div class="pd-related-body">
                <h3>${p.name}</h3>
                <div class="pd-related-foot">
                  <span class="pd-related-price">${t.from} ${price(p)}</span>
                  <span class="pd-related-btn">${t.view}</span>
                </div>
              </div>
            </a>`
            )
            .join("")}
        </div>`;
      detail.after(sec);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
