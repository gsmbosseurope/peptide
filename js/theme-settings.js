/**
 * Site-wide theme/palette configuration, managed from the Admin Panel
 * ("Theme" tab). Loaded before theme.js on every public page, and before
 * the inline no-flash <head> script reads it (see THEME_SETTINGS below is
 * a plain global, safe to read synchronously).
 *
 *   defaultPaletteId    the palette applied to a first-time visitor who
 *                        has no localStorage preference yet (must match an
 *                        id in theme.js's PALETTES list)
 *   paletteLabels        { [paletteId]: "Custom Display Name" } — overrides
 *                        the built-in label shown in the palette picker,
 *                        without changing the id (so localStorage values
 *                        already saved by visitors keep working)
 */
const THEME_SETTINGS = {
  "defaultPaletteId": "classic",
  "paletteLabels": {}
};
