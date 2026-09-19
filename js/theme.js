/**
 * Light/Dark theme engine — Trusted Peptide
 * Palette system DISABLED; visual identity is fixed (Emerald · Navy · Gold · Silver).
 * Only the light/dark toggle remains active.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "peptidesLabsTheme";

  /* ── One-time cleanup ── */
  try { localStorage.removeItem("peptidesLabsPalette"); } catch (_) {}
  try { localStorage.removeItem("peptidesLabsWelcomeSeen"); } catch (_) {}

  /* ── Core helpers ── */
  function getStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (_) { return null; }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.removeAttribute("data-palette");
  }

  function saveTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }

  function updateUI(theme) {
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      btn.classList.toggle("is-dark", theme === "dark");
      btn.classList.toggle("is-light", theme === "light");
    });
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function toggle() {
    var next = getCurrentTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    saveTheme(next);
    updateUI(next);
  }

  /* ── Attach toggle listeners ── */
  function attachListeners() {
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      /* Remove any existing listener clone trick — replace with fresh node */
      var fresh = btn.cloneNode(true);
      btn.parentNode.replaceChild(fresh, btn);
      fresh.addEventListener("click", function (e) {
        e.stopPropagation();
        toggle();
      });
    });
    /* Apply correct UI state after attaching */
    updateUI(getCurrentTheme());
  }

  /* ── Init ── */
  function init() {
    var stored = getStored();
    if (stored) {
      applyTheme(stored);
    }
    attachListeners();
  }

  /* Run as soon as DOM is ready (or immediately if already ready) */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
