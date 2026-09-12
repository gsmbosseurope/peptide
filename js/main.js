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
  /* Bathroom scale — literal "weight" cue for Weight Loss. */
  "Weight Loss, Metabolic Regulation & Insulin Resistance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="18" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M9 10a3 3 0 016 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="15.5" r="2.3" stroke="currentColor" stroke-width="1.6"/><path d="M12 15.5l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  /* Dumbbell — literal "strength/growth" cue. */
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9v6M4 10.5v3M18 9v6M20 10.5v3M6 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  /* Bandaged joint / knee wrap — literal "recovery" cue. */
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3v6.5L5.5 13a3.5 3.5 0 004.9 4.9L14 14.4V21M9 3h6M9 21h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8.5h4M9.5 12.5l2.5 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  /* Hourglass — literal "anti-aging / time" cue. */
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12M6 21h12M7 3c0 5 5 6.5 5 9s-5 4-5 9M17 3c0 5-5 6.5-5 9s5 4 5 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  /* Brain (single lobe, more literal than a jigsaw split). */
  "Brain, Cognitive Function, Mood & Sleep": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4a3 3 0 00-3 3 3 3 0 00-1 5.8A3.5 3.5 0 008.5 18h1a1 1 0 001-1V6a2 2 0 00-1.5-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 4a3 3 0 013 3 3 3 0 011 5.8A3.5 3.5 0 0115.5 18h-1a1 1 0 01-1-1V6a2 2 0 011.5-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="8.7" cy="9" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.3" cy="9" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  /* Heart with pulse line — literal "sexual/vital health" cue. */
  "Male Hormones, Fertility, Sexual Health & Tanning": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7.5-4.7-9.8-9.4C.6 7 2.7 3.5 6.4 3.5c2 0 3.6 1.1 4.6 2.6C12 4.6 13.6 3.5 15.6 3.5c3.7 0 5.8 3.5 4.2 7.1C17.5 15.3 12 20 12 20z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 11h2.5l1.5-2.5 2 5 1.5-2.5H16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  /* Kidney-like organ shape — literal "organ" cue for bioregulators. */
  "Organ-Specific Bioregulators & Therapeutic Compounds": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.5C6 3.5 4 6.5 4.5 10c.4 2.6 2.5 3 2.5 5.5S5 20.5 8 20.5c2.5 0 3.2-2 3.2-4 0-1.6 1-2.2 2-2.2s2 .6 2 2.2c0 2 .7 4 3.2 4 3 0 1-2.5 1-5s2.1-2.9 2.5-5.5c.5-3.5-1.5-6.5-5-6.5-2 0-3 1.2-3.9 1.2S11.5 3.5 9.5 3.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  /* Leaf + droplet — literal "skin/hair care" cue. */
  "Skin, Hair Care": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c2 3 5 5.5 5 9.5a5 5 0 01-10 0C7 8.5 10 6 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 12.5c0 1.8-1 2.8-2.5 2.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  /* Shopping bag — literal "accessories/supplies" cue. */
  "Accessories & Supplies": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};
const CATEGORY_ICONS_STANDALONE_EXTRA = {
  /* Stomach outline — literal "digestive/gut" cue. */
  "Digestive & Gut Health": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.5c0 2-1.5 2.5-1.5 5 0 3.5 3 4 3 7 0 2.5-2 3-3.5 3M8 3.5c1 1.5 2.5 1.5 4 1s3-1.5 4.5-.5c2 1.3 2.5 4 1.5 6.5-.8 2-2.5 2.5-2.5 5 0 2-1.5 3.5-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
Object.assign(CATEGORY_ICONS_STANDALONE, CATEGORY_ICONS_STANDALONE_EXTRA);
const CATEGORY_ICON_FALLBACK_STANDALONE = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 13.41L12 22l-9-9V4h9l8.59 9.41a2 2 0 010 2.83z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" stroke-width="1.6"/></svg>`;
/**
 * One accent color per category — used as the icon-tile's badge background
 * (a colored circle behind the icon) so each category reads distinctly at
 * a glance instead of every tile sharing the same monochrome outline.
 */
const CATEGORY_ACCENTS_STANDALONE = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "#FF6B4A",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "#4A9BFF",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "#3DD9B4",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "#C77DFF",
  "Brain, Cognitive Function, Mood & Sleep": "#7B8CFF",
  "Male Hormones, Fertility, Sexual Health & Tanning": "#FF8FB1",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "#FFB84A",
  "Skin, Hair Care": "#5EE0D0",
  "Digestive & Gut Health": "#8FD654",
  "Accessories & Supplies": "#B8C4D9",
};
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
    const accent = CATEGORY_ACCENTS_STANDALONE[cat] || "#B8C4D9";
    return `
      <a class="category-icon-tile" href="products?cat=${encodeURIComponent(cat)}" title="${cat}" style="--tile-accent:${accent};">
        <span class="category-icon-tile-icon"><span class="category-icon-tile-badge">${icon}</span></span>
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
