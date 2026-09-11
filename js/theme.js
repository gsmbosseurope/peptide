/**
 * Light/Dark theme engine, plus an optional alternate color palette.
 * Default theme: automatic, based on the visitor's local device clock
 * (06:00–18:00 = light "day" theme, otherwise dark "night" theme).
 * A manual toggle in the header overrides this for the session and is
 * remembered in localStorage until cleared.
 *
 * Palette: independent of light/dark — "classic" (navy/gold, default),
 * "bloom" (navy/plum/peach), "ember" (navy/slate/peach/crimson),
 * "forest" (evergreen/sage/mint), "tide" (deep teal/cyan/slate blue),
 * "crimson" (wine/scarlet/coral), "royal" (deep royal blue/gold),
 * "papaya" (espresso/papaya orange/warm cream), "orbit" (deep navy/
 * electric blue/ice/steel), "neoncyan" (dark azure/vivid neon cyan),
 * "lakers" (deep purple/gold), "aurora" (deep teal green/vivid lime),
 * "blueprint" (royal blue/muted yellow beige), "coastal" (deep navy/
 * soft blush pink), "citrusink" (near-black/vivid orange/soft
 * yellow), or "chocolate" (cocoa/caramel/slate blue). Chosen via a
 * dropdown next to the theme toggle, remembered in localStorage,
 * applied via [data-palette] on <html>.
 *
 * IMPORTANT: getInitialTheme()/applyTheme() below are also inlined as a
 * blocking <script> in <head> on every page (see THEME_INIT_SCRIPT in this
 * file, copy kept in sync manually) so the correct theme/palette applies
 * before first paint — avoiding a flash of the wrong theme. This file
 * re-runs the same logic after DOM load to wire up the toggle button.
 */

const THEME_STORAGE_KEY = "peptidesLabsTheme"; // "light" | "dark" | absent (auto)
const PALETTE_STORAGE_KEY = "peptidesLabsPalette"; // "classic" | "bloom" | "ember" | "forest" | "tide" | "crimson" | "royal" | "papaya" | "orbit" | "neoncyan" | "lakers" | "aurora" | "blueprint" | "coastal" | "citrusink" | "chocolate" | "burgundy"
const PALETTES = [
  { id: "classic", label: "Classic", swatch: ["#021024", "#c9a15a"] },
  { id: "bloom", label: "Dusk Bloom", swatch: ["#1b3358", "#f1916d"] },
  { id: "ember", label: "Ember", swatch: ["#242f49", "#b51a2b"] },
  { id: "forest", label: "Forest", swatch: ["#0b2b26", "#8eb69b"] },
  { id: "tide", label: "Tide", swatch: ["#072e33", "#0f969c"] },
  { id: "crimson", label: "Crimson", swatch: ["#941020", "#f64547"] },
  { id: "royal", label: "Royal", swatch: ["#1f0270", "#e8a317"] },
  { id: "papaya", label: "Papaya", swatch: ["#4a2810", "#f57a1b"] },
  { id: "orbit", label: "Orbit Blue", swatch: ["#08152f", "#2457ff"] },
  { id: "neoncyan", label: "Neon Cyan", swatch: ["#043a7e", "#00f5ff"] },
  { id: "lakers", label: "Lakers", swatch: ["#3d0f78", "#fdb927"] },
  { id: "aurora", label: "Aurora", swatch: ["#022e21", "#cdfc8a"] },
  { id: "blueprint", label: "Blueprint", swatch: ["#00539c", "#ffd662"] },
  { id: "coastal", label: "Coastal", swatch: ["#062045", "#f2c4ce"] },
  { id: "citrusink", label: "Citrus Ink", swatch: ["#121212", "#ff6b1a"] },
  { id: "chocolate", label: "Chocolate", swatch: ["#231F26", "#DC9170"] },
  { id: "burgundy", label: "Burgundy", swatch: ["#621124", "#FC829B"] },
];

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

function getActiveTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : getAutoTheme();
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function setManualTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
  updateThemeToggleUI(theme);
}

function updateThemeToggleUI(theme) {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  toggle.classList.toggle("is-light", theme === "light");
}

function initThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  updateThemeToggleUI(getActiveTheme());
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || getAutoTheme();
    setManualTheme(current === "light" ? "dark" : "light");
  });
}

/* ---------- Palette switcher ---------- */
function getDefaultPaletteId() {
  const configured = typeof THEME_SETTINGS !== "undefined" ? THEME_SETTINGS.defaultPaletteId : null;
  return PALETTES.some((p) => p.id === configured) ? configured : "classic";
}

function getPaletteLabel(id) {
  const override = typeof THEME_SETTINGS !== "undefined" && THEME_SETTINGS.paletteLabels ? THEME_SETTINGS.paletteLabels[id] : null;
  if (override) return override;
  const found = PALETTES.find((p) => p.id === id);
  return found ? found.label : id;
}

function getActivePalette() {
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
  return PALETTES.some((p) => p.id === stored) ? stored : getDefaultPaletteId();
}

function applyPalette(palette) {
  if (palette === "classic") {
    document.documentElement.removeAttribute("data-palette");
  } else {
    document.documentElement.setAttribute("data-palette", palette);
  }
}

function setManualPalette(palette) {
  localStorage.setItem(PALETTE_STORAGE_KEY, palette);
  applyPalette(palette);
  updatePaletteToggleUI(palette);
}

function updatePaletteToggleUI(palette) {
  const btn = document.querySelector(".palette-toggle");
  const menu = document.querySelector(".palette-menu");
  if (!btn || !menu) return;
  menu.querySelectorAll("[data-palette-option]").forEach((el) => {
    el.classList.toggle("active", el.dataset.paletteOption === palette);
  });
}

function initPaletteToggle() {
  const btn = document.querySelector(".palette-toggle");
  const menu = document.querySelector(".palette-menu");
  if (!btn || !menu) return;

  menu.innerHTML = PALETTES.map(
    (p) => `
    <button type="button" class="palette-option" data-palette-option="${p.id}">
      <span class="palette-swatch" style="background: linear-gradient(135deg, ${p.swatch[0]}, ${p.swatch[1]})"></span>
      ${getPaletteLabel(p.id)}
    </button>
  `
  ).join("");

  updatePaletteToggleUI(getActivePalette());

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (e) => {
    const option = e.target.closest("[data-palette-option]");
    if (!option) return;
    setManualPalette(option.dataset.paletteOption);
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("open")) return;
    if (e.target === btn || btn.contains(e.target) || menu.contains(e.target)) return;
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });
}

/* ---------- First-visit welcome modal ---------- */
// Shown once per visitor (tracked separately from the theme/palette keys
// themselves, since a visitor could dismiss without changing anything and
// still count as "seen") so they know the site is themeable before they'd
// otherwise stumble onto the toggle/picker buttons in the header.
const WELCOME_SEEN_KEY = "peptidesLabsWelcomeSeen";

function buildWelcomeModal() {
  const overlay = document.createElement("div");
  overlay.className = "welcome-modal-overlay";
  overlay.innerHTML = `
    <div class="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title">
      <button type="button" class="welcome-modal-close" aria-label="Close">✕</button>
      <h2 id="welcome-modal-title">Make it yours</h2>
      <p>Pick a day or night mode, and a color palette — you can always change these later from the header.</p>
      <div class="welcome-modal-section">
        <span class="welcome-modal-label">Mode</span>
        <div class="welcome-modal-mode-row">
          <button type="button" class="welcome-mode-btn" data-mode="light">☀️ Light</button>
          <button type="button" class="welcome-mode-btn" data-mode="dark">🌙 Dark</button>
        </div>
      </div>
      <div class="welcome-modal-section">
        <span class="welcome-modal-label">Color palette</span>
        <div class="welcome-modal-palette-grid"></div>
      </div>
      <button type="button" class="btn btn-primary welcome-modal-continue">Continue</button>
    </div>
  `;
  return overlay;
}

function initWelcomeModal() {
  if (localStorage.getItem(WELCOME_SEEN_KEY)) return;

  const overlay = buildWelcomeModal();
  document.body.appendChild(overlay);

  let chosenMode = getActiveTheme();
  let chosenPalette = getActivePalette();

  const modeButtons = overlay.querySelectorAll(".welcome-mode-btn");
  const paletteGrid = overlay.querySelector(".welcome-modal-palette-grid");

  function updateModeUI() {
    modeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === chosenMode));
  }
  function updatePaletteUI() {
    paletteGrid.querySelectorAll("[data-welcome-palette]").forEach((el) => {
      el.classList.toggle("active", el.dataset.welcomePalette === chosenPalette);
    });
  }

  paletteGrid.innerHTML = PALETTES.map(
    (p) => `
    <button type="button" class="welcome-palette-option" data-welcome-palette="${p.id}" title="${getPaletteLabel(p.id)}">
      <span class="welcome-palette-swatch" style="background: linear-gradient(135deg, ${p.swatch[0]}, ${p.swatch[1]})"></span>
      <span class="welcome-palette-name">${getPaletteLabel(p.id)}</span>
    </button>
  `
  ).join("");

  updateModeUI();
  updatePaletteUI();

  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      chosenMode = btn.dataset.mode;
      updateModeUI();
      applyTheme(chosenMode);
    });
  });

  paletteGrid.addEventListener("click", (e) => {
    const option = e.target.closest("[data-welcome-palette]");
    if (!option) return;
    chosenPalette = option.dataset.welcomePalette;
    updatePaletteUI();
    applyPalette(chosenPalette);
  });

  function closeWelcomeModal(save) {
    if (save) {
      setManualTheme(chosenMode);
      setManualPalette(chosenPalette);
    }
    localStorage.setItem(WELCOME_SEEN_KEY, "1");
    overlay.remove();
  }

  overlay.querySelector(".welcome-modal-continue").addEventListener("click", () => closeWelcomeModal(true));
  overlay.querySelector(".welcome-modal-close").addEventListener("click", () => closeWelcomeModal(false));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeWelcomeModal(false);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initPaletteToggle();
  initWelcomeModal();
});
