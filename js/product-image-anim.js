/**
 * product-image-anim.js
 * ─────────────────────────────────────────────────────────────────────────
 * Adds smooth animations to the product image whenever:
 *  1. A variant / quantity button is clicked  → pulse + glow on button
 *  2. The main product image src changes      → flip-in OR shimmer animation
 *
 * Drop this file anywhere in /js/ and add ONE script tag in product.php
 * (and product-ar.php) AFTER product-detail.js / product-detail-ar.js:
 *
 *   <script src="../js/product-image-anim.js?v=1" defer></script>
 *
 * No other changes needed.  Works by observing DOM mutations so it stays
 * in sync even when the detail script rebuilds the page asynchronously.
 * ─────────────────────────────────────────────────────────────────────────
 */

(function () {
  "use strict";

  /* ── 1. Inject CSS ───────────────────────────────────────────────────── */
  var css = `
    /* ── Variant / qty button press effect ── */
    .variant-btn,
    .qty-btn,
    [class*="variant"],
    [class*="qty-option"],
    [class*="size-btn"],
    [class*="amount-btn"] {
      transition: transform 0.15s ease, box-shadow 0.2s ease !important;
    }

    .variant-btn-pressed {
      animation: variantPress 0.35s ease forwards !important;
    }

    @keyframes variantPress {
      0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(var(--accent-rgb, 99,102,241), 0); }
      30%  { transform: scale(0.93); box-shadow: 0 0 0 6px rgba(var(--accent-rgb, 99,102,241), 0.25); }
      60%  { transform: scale(1.04); box-shadow: 0 0 0 10px rgba(var(--accent-rgb, 99,102,241), 0.12); }
      100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(var(--accent-rgb, 99,102,241), 0); }
    }

    /* ── Image flip-in (Y-axis 3-D flip) ── */
    @keyframes imgFlipIn {
      0%   { transform: perspective(600px) rotateY(-70deg) scale(0.88); opacity: 0; }
      55%  { transform: perspective(600px) rotateY(8deg)  scale(1.02); opacity: 1; }
      80%  { transform: perspective(600px) rotateY(-3deg) scale(1); }
      100% { transform: perspective(600px) rotateY(0deg)  scale(1);    opacity: 1; }
    }

    /* ── Shimmer / shine sweep ── */
    @keyframes imgShimmer {
      0%   { filter: brightness(1); }
      30%  { filter: brightness(1.22) saturate(1.1); }
      60%  { filter: brightness(1.05); }
      100% { filter: brightness(1); }
    }

    /* ── Combined: flip + shimmer applied together ── */
    .img-changed {
      animation:
        imgFlipIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards,
        imgShimmer 0.55s ease forwards !important;
      transform-origin: center center;
    }

    /* ── Thumbnail highlight when selected ── */
    .thumb-selected-pulse {
      animation: thumbPulse 0.4s ease !important;
    }

    @keyframes thumbPulse {
      0%   { outline: 2px solid transparent; outline-offset: 2px; transform: scale(1); }
      40%  { outline: 3px solid var(--accent, #6366f1); outline-offset: 4px; transform: scale(1.08); }
      100% { outline: 2px solid var(--accent, #6366f1); outline-offset: 2px; transform: scale(1); }
    }
  `;

  var style = document.createElement("style");
  style.id = "product-image-anim-css";
  style.textContent = css;
  document.head.appendChild(style);

  /* ── 2. Helper: detect which element is the main product image ──────── */
  function findMainImage() {
    // Try selectors from most-specific to generic
    var selectors = [
      ".pdp-main-img",
      ".product-main-image img",
      ".product-image-main img",
      "#pdp-main-image",
      ".product-gallery__main img",
      ".main-product-img",
      '[class*="pdp"] img:not([class*="thumb"])',
      '[class*="product-detail"] .product-img',
      "main img[src*='products']",
      "main .product-img img",
      "main figure img",
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el && el.tagName === "IMG" && el.offsetWidth > 80) return el;
    }
    // Fallback: largest <img> inside main
    var imgs = Array.from(document.querySelectorAll("main img"));
    imgs.sort(function (a, b) { return (b.offsetWidth * b.offsetHeight) - (a.offsetWidth * a.offsetHeight); });
    return imgs[0] || null;
  }

  /* ── 3. Trigger image animation ─────────────────────────────────────── */
  function animateImage(img) {
    if (!img) return;
    img.classList.remove("img-changed");
    // Force reflow so animation restarts
    void img.offsetWidth;
    img.classList.add("img-changed");
    img.addEventListener("animationend", function onEnd() {
      img.classList.remove("img-changed");
      img.removeEventListener("animationend", onEnd);
    }, { once: true });
  }

  /* ── 4. Button press animation ──────────────────────────────────────── */
  function animateBtn(btn) {
    if (!btn) return;
    btn.classList.remove("variant-btn-pressed");
    void btn.offsetWidth;
    btn.classList.add("variant-btn-pressed");
    btn.addEventListener("animationend", function () {
      btn.classList.remove("variant-btn-pressed");
    }, { once: true });
  }

  /* ── 5. Observe image src changes with MutationObserver ─────────────── */
  function startObserver() {
    var mainImg = findMainImage();
    if (!mainImg) return;

    // Watch src attribute changes on the img itself
    var imgObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === "attributes" && m.attributeName === "src") {
          animateImage(m.target);
        }
      });
    });
    imgObserver.observe(mainImg, { attributes: true, attributeFilter: ["src"] });

    // Also watch parent container for child replacement (some PDP scripts
    // replace the whole <img> element rather than changing src)
    var container = mainImg.closest('[class*="gallery"], [class*="pdp"], [class*="product-img"], figure, .product-image-main, .product-main-wrap') || mainImg.parentElement;
    if (container && container !== mainImg) {
      var containerObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) {
              var newImg = node.tagName === "IMG" ? node : node.querySelector("img");
              if (newImg && newImg.offsetWidth > 80) {
                animateImage(newImg);
                // Re-attach observer to new img
                imgObserver.disconnect();
                imgObserver.observe(newImg, { attributes: true, attributeFilter: ["src"] });
              }
            }
          });
        });
      });
      containerObserver.observe(container, { childList: true, subtree: true });
    }
  }

  /* ── 6. Button click delegation ─────────────────────────────────────── */
  function attachButtonListeners() {
    var btnSelectors = [
      ".variant-btn",
      ".qty-btn",
      '[class*="variant-opt"]',
      '[class*="qty-option"]',
      '[class*="size-btn"]',
      '[class*="amount-btn"]',
      '[class*="vial-btn"]',
      '[data-variant]',
    ].join(", ");

    document.addEventListener("click", function (e) {
      var btn = e.target.closest(btnSelectors);
      if (!btn) return;

      animateBtn(btn);

      // Wait a tick for the PDP script to update the image src
      setTimeout(function () {
        var img = findMainImage();
        animateImage(img);
      }, 30);
    }, true);
  }

  /* ── 7. Thumbnail clicks ─────────────────────────────────────────────── */
  function attachThumbListeners() {
    document.addEventListener("click", function (e) {
      var thumb = e.target.closest('[class*="thumb"], .gallery-thumb, .pdp-thumb');
      if (!thumb) return;
      thumb.classList.remove("thumb-selected-pulse");
      void thumb.offsetWidth;
      thumb.classList.add("thumb-selected-pulse");
    }, true);
  }

  /* ── 8. Init ─────────────────────────────────────────────────────────── */
  function init() {
    startObserver();
    attachButtonListeners();
    attachThumbListeners();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOMContentLoaded already fired — wait one frame for PDP script to render
    requestAnimationFrame(function () { setTimeout(init, 50); });
  }

})();
