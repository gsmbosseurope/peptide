/**
 * Shared behavior across all pages: mobile nav toggle, scroll-reveal
 * animations, active nav link, and cart-count badge sync.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initActiveNavLink();
  updateCartCountBadge();
  initScrollButtons();
  initWhatsAppButton();
  initCategoryIconsSection();
});

/**
 * Renders the "Shop by Category" icon grid (a standalone section placed
 * just above the footer on about, index, product, products, tip, tips)
 * with one square icon tile per category, deep-linking into
 * products.html?cat=<name> (catalog.js reads that query param and
 * pre-selects the matching filter chip on load). Uses the same short
 * labels and outlined SVG icons as the filter chips on products.html,
 * for visual consistency between the two.
 */
const CATEGORY_ICONS_STANDALONE = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11l3-3a3 3 0 014.24 0l1.76 1.76a3 3 0 010 4.24l-3 3M17 13l-3 3a3 3 0 01-4.24 0L8 14.24a3 3 0 010-4.24l3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 14.5l5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 5.4L20 9l-4.6 3.4L17 18l-5-3.2L7 18l1.6-5.6L4 9l5.6-1.6L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  "Brain, Cognitive Function, Mood & Sleep": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3a5 5 0 00-3 9 5 5 0 003 9h1a2 2 0 002-2V5a2 2 0 00-2-2H9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 3a5 5 0 013 9 5 5 0 01-3 9h-1a2 2 0 01-2-2V5a2 2 0 012-2h1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  "Male Hormones, Fertility, Sexual Health & Tanning": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="15" r="5" stroke="currentColor" stroke-width="1.6"/><path d="M13 11l6-6M14 5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Organ-Specific Bioregulators & Therapeutic Compounds": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  "Skin, Hair Care": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 21c2.5 0 4-1.2 4-1.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  "Accessories & Supplies": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};
const CATEGORY_ICON_FALLBACK_STANDALONE = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" stroke-width="1.6"/></svg>`;
const CATEGORY_SHORT_LABELS_STANDALONE = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "Weight Loss",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "Growth & Strength",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "Recovery",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "Anti-Aging",
  "Brain, Cognitive Function, Mood & Sleep": "Brain & Mood",
  "Male Hormones, Fertility, Sexual Health & Tanning": "Sexual Health",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "Bioregulators",
  "Skin, Hair Care": "Skin & Hair",
  "Accessories & Supplies": "Accessories",
};

function initCategoryIconsSection() {
  const grid = document.getElementById("category-icons-grid");
  if (!grid || typeof PRODUCT_CATEGORIES === "undefined") return;
  grid.innerHTML = PRODUCT_CATEGORIES.map((cat) => {
    const label = CATEGORY_SHORT_LABELS_STANDALONE[cat] || cat;
    const icon = CATEGORY_ICONS_STANDALONE[cat] || CATEGORY_ICON_FALLBACK_STANDALONE;
    return `
      <a class="category-icon-tile" href="products?cat=${encodeURIComponent(cat)}" title="${cat}">
        <span class="category-icon-tile-icon">${icon}</span>
        <span class="category-icon-tile-label">${label}</span>
      </a>
    `;
  }).join("");
}

/**
 * Persistent floating WhatsApp button, fixed bottom-left (mirrors the
 * scroll-to-top/bottom buttons on the right) so it's reachable from any
 * page without competing for the same corner.
 */
function initWhatsAppButton() {
  if (typeof STORE_WHATSAPP_NUMBER === "undefined") return;
  const message = "Hi Trusted-Peptide, I have a question.";
  const link = document.createElement("a");
  link.className = "whatsapp-float-btn";
  link.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with us on WhatsApp");
  link.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64zm-5.55 12.2h-.02a6.58 6.58 0 01-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.28-3.5 6.6 6.6 0 01-6.67 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.51.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" fill="#fff"/>
    </svg>
  `;
  document.body.appendChild(link);
}

/**
 * Floating "scroll to top" / "scroll to bottom" buttons, fixed bottom-right.
 * Up hides near the top of the page; down hides near the bottom. Both use
 * smooth scrolling and respect prefers-reduced-motion via CSS.
 */
function initScrollButtons() {
  const wrap = document.createElement("div");
  wrap.className = "scroll-buttons";
  wrap.innerHTML = `
    <button type="button" class="scroll-btn scroll-btn-up" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button type="button" class="scroll-btn scroll-btn-down" aria-label="Scroll to bottom">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;
  document.body.appendChild(wrap);

  const upBtn = wrap.querySelector(".scroll-btn-up");
  const downBtn = wrap.querySelector(".scroll-btn-down");

  upBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  downBtn.addEventListener("click", () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
  );

  function updateVisibility() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const nearTop = scrollY < 200;
    const nearBottom = maxScroll - scrollY < 200;
    upBtn.classList.toggle("is-visible", !nearTop);
    downBtn.classList.toggle("is-visible", maxScroll > 300 && !nearBottom);
  }

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
}

function initMobileNav() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const drawer = document.querySelector(".mobile-nav");
  if (!toggle || !drawer) return;
  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  drawer.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggle.classList.remove("open");
    })
  );
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function initActiveNavLink() {
  let path = window.location.pathname.split("/").pop() || "";
  path = path.replace(/\.html$/, "");
  document.querySelectorAll(".main-nav a, .mobile-nav a").forEach((a) => {
    let href = a.getAttribute("href").replace(/^\//, "").replace(/\.html$/, "");
    if (href === path || (path === "" && (href === "index" || href === ""))) {
      a.classList.add("active");
    }
  });
}

/* ---------- Cart storage helpers (shared with cart.js / product-detail.js) ---------- */
const CART_STORAGE_KEY = "peptidesLabsCart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCountBadge();
}

function addToCart(productId, variantSize, qty) {
  const cart = getCart();
  const existing = cart.find((i) => i.productId === productId && i.variant === variantSize);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, variant: variantSize, qty });
  }
  saveCart(cart);
}

function updateCartCountBadge() {
  const badge = document.querySelector(".cart-count");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}
