/**
 * Renders the product grid on products.html (and the "featured" grid on
 * index.html) plus category filter chips + search.
 */

function cheapestVariantPrice(product) {
  return Math.min(...product.variants.map((v) => v.price));
}

/**
 * Purpose-built line icons per product category, matching the site's
 * outlined SVG style (2px stroke, currentColor). Falls back to a grid icon
 * for "All" and any unmapped category.
 */
const CATEGORY_ICONS = {
  "All": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>`,
  "Recovery & Repair": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11l3-3a3 3 0 014.24 0l1.76 1.76a3 3 0 010 4.24l-3 3M17 13l-3 3a3 3 0 01-4.24 0L8 14.24a3 3 0 010-4.24l3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 14.5l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  "Skin & Anti-Aging": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 21c2.5 0 4-1.2 4-1.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  "Metabolic Research": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  "Growth & Performance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Antioxidant & Whitening": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 5.4L20 9l-4.6 3.4L17 18l-5-3.2L7 18l1.6-5.6L4 9l5.6-1.6L12 2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  "Accessories & Supplies": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

/** Generic fallback icon (tag) for any category without a specific icon above. */
const CATEGORY_ICON_FALLBACK = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" stroke-width="1.8"/></svg>`;

function categoryIcon(category) {
  return `<span class="filter-chip-icon">${CATEGORY_ICONS[category] || CATEGORY_ICON_FALLBACK}</span>`;
}

/** A product's full set of categories — the `categories` array when present, else its single `category`. */
function productCategories(product) {
  return Array.isArray(product.categories) && product.categories.length
    ? product.categories
    : [product.category].filter(Boolean);
}

function productCardHTML(product) {
  const price = cheapestVariantPrice(product);
  const img = product.images && product.images[0] ? product.images[0] : "";
  const cats = productCategories(product);
  return `
    <a class="product-card reveal" href="product?id=${encodeURIComponent(product.id)}">
      <div class="product-card-media">
        ${img ? `<img src="${img}" alt="${product.name}" loading="lazy" />` : ""}
      </div>
      <div class="product-card-body">
        <div class="product-card-meta-row">
          <span class="product-card-cat">${cats.join(" · ")}</span>
          ${product.showPurity !== false && product.purity ? `<span class="badge-purity badge-purity-inline">${product.purity} purity</span>` : ""}
        </div>
        <span class="product-card-name">${product.name}</span>
        <p class="product-card-desc">${product.shortDescription}</p>
        <div class="product-card-footer">
          <span class="price-tag">from ${formatEURHtml(price)} <small>/ unit</small></span>
          <span class="btn btn-ghost">View →</span>
        </div>
      </div>
    </a>
  `;
}

function renderProductGrid(container, products) {
  if (!products.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No products match your filters</h3>
        <p>Try a different category or search term.</p>
      </div>
    `;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
  initScrollReveal();
}

function initCatalogPage() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const filterBar = document.getElementById("filter-bar");
  const searchInput = document.getElementById("search-input");

  let activeCategory = "All";
  let searchTerm = "";

  function applyFilters() {
    const filtered = PRODUCTS.filter((p) => {
      const cats = productCategories(p);
      const matchesCategory = activeCategory === "All" || cats.includes(activeCategory);
      const matchesSearch =
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm) ||
        cats.some((c) => c.toLowerCase().includes(searchTerm)) ||
        p.shortDescription.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
    renderProductGrid(grid, filtered);
  }

  if (filterBar) {
    const categories = ["All", ...PRODUCT_CATEGORIES];
    filterBar.innerHTML = categories
      .map(
        (cat, i) =>
          `<button class="filter-chip${i === 0 ? " active" : ""}" data-cat="${cat}">${categoryIcon(cat)}<span>${cat}</span></button>`
      )
      .join("");

    filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      filterBar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  applyFilters();
}

function initFeaturedGrid() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 4);
  renderProductGrid(grid, featured);
}

document.addEventListener("DOMContentLoaded", () => {
  initCatalogPage();
  initFeaturedGrid();
});
