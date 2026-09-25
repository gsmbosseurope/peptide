/**
 * Light/Dark theme engine + style picker — Trusted Peptide
 * Two visual identities, each with a light and dark mode:
 *   Peptide 1 — the original Emerald · Navy · Gold · Silver identity (no data-palette)
 *   Peptide 2 — deep green · sage · amber (data-palette="peptide2", css/main.css)
 *   Peptide 3 — navy · warm cream · coral · slate (data-palette="peptide3")
 */

(function () {
  "use strict";

  var STORAGE_KEY = "peptidesLabsTheme";
  var PALETTE_KEY = "peptidesLabsPalette";
  var PALETTES = [
    { id: "", label: "Peptide 1", swatch: ["#021024", "#c9a15a"] },
    { id: "peptide2", label: "Peptide 2", swatch: ["#164A41", "#F1B24A"] },
    { id: "peptide3", label: "Peptide 3", swatch: ["#172A39", "#FC563C"] },
    { id: "peptide4", label: "Peptide 4", swatch: ["#222223", "#B62A2D"] },
    { id: "peptide5", label: "Peptide 5", swatch: ["#0F172A", "#3B82F6"] },
    { id: "peptide6", label: "Peptide 6", swatch: ["#1F2937", "#A3E635"] },
    { id: "peptide7", label: "Peptide 7", swatch: ["#065F46", "#A7F3D0"] },
    { id: "peptide8", label: "Peptide 8", swatch: ["#7F1D1D", "#F3D5D8"] },
    { id: "peptide9", label: "Peptide 9", swatch: ["#0F766E", "#FF7F50"] },
    { id: "peptide10", label: "Peptide 10", swatch: ["#6D28D9", "#C4B5FD"] },
    { id: "peptide11", label: "Peptide 11", swatch: ["#C2410C", "#EAB308"] },
  ];
  var VALID = PALETTES.map(function (p) { return p.id; });

  try { localStorage.removeItem("peptidesLabsWelcomeSeen"); } catch (_) {}

  /* ── Core helpers ── */
  function getStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (_) { return null; }
  }

  function getPalette() {
    try {
      var v = localStorage.getItem(PALETTE_KEY) || "";
      return VALID.indexOf(v) !== -1 ? v : "";
    } catch (_) { return ""; }
  }

  function applyPalette(id) {
    if (id) document.documentElement.setAttribute("data-palette", id);
    else document.documentElement.removeAttribute("data-palette");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
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

  /* ── Style picker (the round swatch button in the header) ── */
  function initPalettePicker() {
    var isAr = document.documentElement.lang === "ar";
    document.querySelectorAll(".palette-switcher").forEach(function (sw) {
      var btn = sw.querySelector(".palette-toggle");
      var menu = sw.querySelector(".palette-menu");
      if (!btn || !menu) return;
      btn.setAttribute("aria-label", isAr ? "اختر النمط" : "Choose style");
      btn.title = isAr ? "اختر النمط" : "Choose style";

      function render() {
        var current = getPalette();
        menu.innerHTML = PALETTES.map(function (p) {
          return '<button type="button" class="palette-option' + (p.id === current ? " active" : "") + '" data-palette="' + p.id + '">' +
            '<span class="palette-option-swatch" style="background:linear-gradient(135deg,' + p.swatch[0] + ' 50%,' + p.swatch[1] + ' 50%)"></span>' +
            p.label + "</button>";
        }).join("");
      }
      render();

      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
      menu.addEventListener("click", function (e) {
        var opt = e.target.closest(".palette-option");
        if (!opt) return;
        var id = opt.getAttribute("data-palette") || "";
        try { localStorage.setItem(PALETTE_KEY, id); } catch (_) {}
        applyPalette(id);
        render();
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
      document.addEventListener("click", function (e) {
        if (!sw.contains(e.target)) { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
      });
    });
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
    applyPalette(getPalette());
    attachListeners();
    initPalettePicker();
  }

  /* Run as soon as DOM is ready (or immediately if already ready) */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
