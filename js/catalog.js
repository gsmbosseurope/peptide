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
  "Weight Loss, Metabolic Regulation & Insulin Resistance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="18" height="11" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M9 10a3 3 0 016 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="15.5" r="2.3" stroke="currentColor" stroke-width="1.8"/><path d="M12 15.5l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9v6M4 10.5v3M18 9v6M20 10.5v3M6 12h12" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3v6.5L5.5 13a3.5 3.5 0 004.9 4.9L14 14.4V21M9 3h6M9 21h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8.5h4M9.5 12.5l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12M6 21h12M7 3c0 5 5 6.5 5 9s-5 4-5 9M17 3c0 5-5 6.5-5 9s5 4 5 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Brain, Cognitive Function, Mood & Sleep": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4a3 3 0 00-3 3 3 3 0 00-1 5.8A3.5 3.5 0 008.5 18h1a1 1 0 001-1V6a2 2 0 00-1.5-2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M15 4a3 3 0 013 3 3 3 0 011 5.8A3.5 3.5 0 0115.5 18h-1a1 1 0 01-1-1V6a2 2 0 011.5-2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  "Male Hormones, Fertility, Sexual Health & Tanning": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7.5-4.7-9.8-9.4C.6 7 2.7 3.5 6.4 3.5c2 0 3.6 1.1 4.6 2.6C12 4.6 13.6 3.5 15.6 3.5c3.7 0 5.8 3.5 4.2 7.1C17.5 15.3 12 20 12 20z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  "Organ-Specific Bioregulators & Therapeutic Compounds": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.5C6 3.5 4 6.5 4.5 10c.4 2.6 2.5 3 2.5 5.5S5 20.5 8 20.5c2.5 0 3.2-2 3.2-4 0-1.6 1-2.2 2-2.2s2 .6 2 2.2c0 2 .7 4 3.2 4 3 0 1-2.5 1-5s2.1-2.9 2.5-5.5c.5-3.5-1.5-6.5-5-6.5-2 0-3 1.2-3.9 1.2S11.5 3.5 9.5 3.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  "Skin, Hair Care": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 12.5c0 1.8-1 2.8-2.5 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "Digestive & Gut Health": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.5c0 2-1.5 2.5-1.5 5 0 3.5 3 4 3 7 0 2.5-2 3-3.5 3M8 3.5c1 1.5 2.5 1.5 4 1s3-1.5 4.5-.5c2 1.3 2.5 4 1.5 6.5-.8 2-2.5 2.5-2.5 5 0 2-1.5 3.5-3.5 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Accessories & Supplies": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

/** Generic fallback icon (tag) for any category without a specific icon above. */
const CATEGORY_ICON_FALLBACK = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" stroke-width="1.8"/></svg>`;

function categoryIcon(category) {
  return `<span class="filter-chip-icon">${CATEGORY_ICONS[category] || CATEGORY_ICON_FALLBACK}</span>`;
}

/**
 * Short 1-2 word labels for the filter chips, so long category names
 * (e.g. "Weight Loss, Metabolic Regulation & Insulin Resistance") don't
 * wrap into oversized pill buttons. The full name still shows as a
 * tooltip (title attribute) and is what's used for actual filtering.
 */
const CATEGORY_SHORT_LABELS = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "Weight Loss",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "Growth & Strength",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "Recovery",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "Anti-Aging",
  "Brain, Cognitive Function, Mood & Sleep": "Brain & Mood",
  "Male Hormones, Fertility, Sexual Health & Tanning": "Sexual Health",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "Bioregulators",
  "Skin, Hair Care": "Skin & Hair",
  "Digestive & Gut Health": "Gut Health",
  "Accessories & Supplies": "Accessories",
};

function categoryShortLabel(category) {
  return CATEGORY_SHORT_LABELS[category] || category;
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
          <span class="product-card-cat" title="${cats.join(" · ")}">${cats.map(categoryShortLabel).join(" · ")}</span>
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

function renderProductGrid(container, products, options) {
  const sortAlphabetically = !options || options.sort !== false;
  if (sortAlphabetically) {
    products = [...products].sort((a, b) => a.name.localeCompare(b.name));
  }
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

  const urlCategory = new URLSearchParams(window.location.search).get("cat");
  let activeCategory = urlCategory && PRODUCT_CATEGORIES.includes(urlCategory) ? urlCategory : "All";
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
        (cat) =>
          `<button class="filter-chip${cat === activeCategory ? " active" : ""}" data-cat="${cat}" title="${cat}">${categoryIcon(cat)}<span>${categoryShortLabel(cat)}</span></button>`
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
