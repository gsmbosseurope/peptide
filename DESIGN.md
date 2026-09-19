---
name: Trusted Peptide
description: EU-sourced research peptides, verified for purity and sold with transparent pricing
colors:
  void-navy:
    dark: "#07111f"
    light: "#eef3f8"
  panel-navy:
    dark: "#0f1e35"
    light: "#ffffff"
  panel-navy-raised:
    dark: "#152540"
    light: "#f7fafc"
  ink:
    dark: "#dce8f4"
    light: "#0c1c35"
  ink-secondary:
    dark: "#a8c0d6"
    light: "#2d4460"
  ink-muted:
    dark: "#7d96ae"
    light: "#4e667c"
  lab-gold:
    dark: "#c9a045"
    light: "#9b7320"
  lab-gold-bright:
    dark: "#e2c478"
    light: "#b8892a"
  text-accent-light-only: "#856012"
  verified-emerald:
    dark: "#1e7a5a"
    light: "#196350"
  emerald-mid:
    dark: "#25896b"
    light: "#1f7a62"
  danger:
    dark: "#e88a8a"
    light: "#c94b4b"
  success:
    dark: "#7fd8a4"
    light: "#2f9e63"
  border-subtle:
    dark: "rgba(184,202,214,0.10)"
    light: "rgba(10,22,40,0.09)"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  display-hero:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.8rem"
  price:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "1.05rem"
    fontWeight: 600
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  header-height: "76px"
  max-width: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.lab-gold-bright}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.lab-gold-bright}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "8px 16px 8px 12px"
  chip-active:
    backgroundColor: "{colors.lab-gold}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.panel-navy}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "{colors.panel-navy-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: Trusted Peptide

## 1. Overview

**Creative North Star: "The Verified Vial"**

The system takes its cue from the product itself: a navy-labeled vial with a gold cap, sealed and checkable. Every surface should feel like it's showing its work rather than asking for trust on faith, exact prices in tabular mono digits, HPLC purity numbers, EU sourcing badges stated plainly rather than dressed up. The default mode is dark: a deep navy field (#07111f) that reads closer to a lab-notebook-at-night than a consumer storefront, with an ice-blue text scale and a single warm gold accent standing in for the vial's cap. Light mode inverts the same relationships rather than introducing a second identity: same navy, same gold, same emerald, just swapped onto a pale ice-blue field.

This is premium and refined, not clinical and cold, and not loud. The gold accent is rationed: it marks the primary action and the brand mark, nothing else. A second color, emerald, is reserved specifically as a "verified/good" signal, category labels and savings hints, so it never competes with gold for the buyer's attention. The system explicitly rejects the low-trust-reseller look this category is full of: no stock-photo hero clichés, no cluttered upsell chrome, no generic "Acme"-style branding standing in for a real identity.

**Key Characteristics:**
- Dark-first navy field with a single warm gold accent, rationed to brand mark and primary CTA
- Emerald as a dedicated verification/savings signal, never a general second brand color
- Roboto Mono for every price and label; numbers are meant to be scanned, not designed
- Ambient glow and translucent panel layering over crisp drop shadows
- Tactile, confident interaction: buttons compress on press, chips spring on hover

## 2. Colors

A near-monochrome navy field carries the page; gold and emerald are rationed accents, never blended together, never doubled up in the same component.

### Primary
- **Lab Gold** (`#c9a045` dark / `#9b7320` light): the brand accent. Used for the primary CTA background, the active state on filter/variant chips, and the brand wordmark's second word. Nowhere else — see the One Accent Rule below.
- **Lab Gold Bright** (`#e2c478` dark / `#b8892a` light): the lighter step of the gold ramp, used in the primary-button gradient and for the deeper-gold high-contrast fix on active chips in light mode.

### Secondary
- **Verified Emerald** (`#1e7a5a` dark / `#196350` light): the "confirmed/good" signal. Used for category-section labels and the "Buy 10, save 25%" style pricing hints, never for the primary CTA or brand mark. Keep it out of button backgrounds; its job is confirmation, not action.

### Neutral
- **Void Navy** (`#07111f` dark / `#eef3f8` light): the page background. This is the field everything else sits on, dark by default.
- **Panel Navy** (`#0f1e35` dark / `#ffffff` light): card and panel surfaces, one step lighter than the page field in dark mode, pure white in light mode.
- **Panel Navy Raised** (`#152540` dark / `#f7fafc` light): form inputs and raised surfaces, one step lighter again.
- **Ink** (`#dce8f4` dark / `#0c1c35` light): primary text.
- **Ink Secondary** (`#a8c0d6` dark / `#2d4460` light): secondary text, labels, body copy that isn't the primary read.
- **Ink Muted** (`#7d96ae` dark / `#4e667c` light): tertiary text, helper copy, timestamps.
- **Border Subtle** (`rgba(184,202,214,0.10)` dark / `rgba(10,22,40,0.09)` light): the default hairline on cards, inputs, and dividers.

### Named Rules
**The One Accent Rule.** Gold appears on exactly one thing per screen at a time: the primary CTA, or the active chip, or the brand mark. It never doubles up (a gold button next to a gold badge next to a gold heading). If a section needs a second point of color, that's emerald's job, not a second use of gold.

**The Verified-Text Exception.** Where gold is used as *text* rather than a button fill (an eyebrow label, a price highlight) in light mode, use the darker `text-accent` step (`#856012`) instead of the button gold (`#9b7320`). The button gold fails WCAG AA as text on the light background; the darker step exists specifically to keep small gold labels readable without touching the button color.

## 3. Typography

**Display Font:** Space Grotesk (with Inter, sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** Roboto Mono (with monospace fallback), used for prices, filter-chip labels, and anything tabular

**Character:** A geometric display face over a humanist body face, precise and slightly technical without tipping into a pure engineering-tool look. Mono is reserved for numbers and short labels, so the page reads as "this has exact data" wherever it appears, deliberately, not decoratively.

### Hierarchy
- **Display (hero)** (600 weight, `clamp(2.4rem, 5vw, 4rem)`, line-height 1.05, letter-spacing -0.025em): the H1 on hero and landing sections. Uses `text-wrap: balance`.
- **Headline** (600 weight, `clamp(1.8rem, 3.2vw, 2.6rem)`, line-height 1.15, letter-spacing -0.02em): section H2s. Also balanced.
- **Title** (600 weight, 1.4rem): H3, card and panel titles.
- **Body** (400 weight, 16px, line-height 1.6): paragraph text, `text-wrap: pretty`, capped near 65-75ch where it runs long.
- **Label** (mono, 0.8rem, uppercase tracked): filter chips, eyebrow labels, metadata rows.
- **Price** (mono, 1.05rem, 600 weight, tabular-nums): every price on the site. Always mono, always tabular so digits align in stacked lists.

### Named Rules
**The Mono-Numbers Rule.** Any number a buyer needs to compare (price, quantity, purity percentage, discount tier) renders in Roboto Mono with `font-variant-numeric: tabular-nums`. Body copy stays in Inter even when it contains a number in passing; this rule is for numbers that are the point of the sentence.

## 4. Elevation

Depth comes from ambient glow and translucent panel layering, not crisp drop shadows. Panels (`--bg-card`, `--bg-panel-raised`) are built from low-opacity navy gradients that let the page field show through at the edges, so a card reads as "a pool of light on the same field" rather than "a sheet stacked on top of it." The one hard shadow in the system, `--shadow-card` (`0 12px 32px rgba(2,16,36,0.55)` dark), is reserved for the header on scroll and hover states on cards; it's a state response, not a resting condition.

### Shadow Vocabulary
- **Ambient glow** (`--shadow-glow`: `0 0 40px rgba(193,232,255,0.08)` dark / `0 0 40px rgba(84,131,179,0.08)` light): a soft diffuse halo, paired with `--shadow-card` on hover states to suggest the element lifting into the light rather than casting a shadow.
- **Card shadow** (`--shadow-card`: `0 12px 32px rgba(2,16,36,0.55)` dark / `0 12px 32px rgba(5,38,89,0.12)` light): structural weight on the sticky header and on product-card hover. Not present at rest.
- **Button glow** (`0 8px 24px rgba(201,161,90,0.25)`, deepening to `0 10px 30px rgba(201,161,90,0.4)` on hover): the primary button's own colored glow, tinted to the gold it sits under rather than a neutral black shadow.

### Named Rules
**The Glow-Not-Shadow Rule.** When something needs to feel elevated, reach for a tinted, diffuse glow in the element's own hue family before reaching for a neutral drop shadow. A shadow tinted gray on a navy field reads as a UI-kit default; a glow tinted to the surface's own color reads as intentional.

## 5. Components

Buttons and chips are tactile and confident: they compress on press and chips spring slightly on hover. Nothing lingers in a hover state without a purpose; motion signals state, not decoration.

### Buttons
- **Shape:** small radius (6px, `--radius-sm`), never pill-shaped except chips.
- **Primary:** gold gradient (`linear-gradient(135deg, lab-gold-bright, lab-gold)`) on void-navy text, 13px/26px padding, colored glow shadow (`0 8px 24px rgba(201,161,90,0.25)`).
- **Secondary:** near-transparent background (`rgba(125,160,202,0.08)`), a full border in `--border-strong`, ink-colored text; hover deepens the fill and borders toward `--text-primary`.
- **Ghost:** fully transparent, secondary-ink text; hover lifts to primary-ink text only, no background.
- **Hover / Focus:** primary and secondary lift `translateY(-1px)` with a deepening glow; every interactive element also gets a 2px solid `--focus-ring` outline with 2px offset on `:focus-visible`, independent of the hover treatment.
- **Active:** `translateY(1px) scale(0.98)` — the tactile compression that defines the whole interaction language.

### Chips (filter / variant)
- **Style:** pill radius (999px), 1px `--border-subtle` border, `rgba(84,131,179,0.08)` background at rest, mono label text.
- **Hover:** border shifts to `--soft-blue`, text to `--text-primary`, lifts `translateY(-2px)` with a soft blue glow; the chip's icon rotates -8deg and scales 1.1.
- **Active/selected:** solid gold fill, void-navy text, 600 weight, gold glow shadow. In light mode specifically, active chips use `lab-gold-bright` rather than the base `lab-gold`, since navy-on-base-gold falls just under WCAG AA as a filled background.

### Cards / Containers
- **Corner Style:** 20px (`--radius-lg`) for product and content cards.
- **Background:** the translucent `--bg-card` gradient (navy tones at low opacity), never a flat panel fill.
- **Shadow Strategy:** none at rest; `--shadow-card` plus `--shadow-glow` together on hover, alongside a 6px lift (`translateY(-6px)`) and a border shift to `--border-strong`.
- **Border:** 1px `--border-subtle` at rest.
- **Internal Padding:** 18px/20px sides, 22px bottom on the card body.

### Inputs / Fields
- **Style:** `--bg-input` (translucent navy) background, 1px `--border-subtle` border, 6px radius, 12px/14px padding, Inter body font. Labels sit above the field, never inside it as a placeholder.
- **Focus:** border shifts to `--text-primary`; no separate glow, keeps focus state legible against the ambient-glow language used elsewhere.
- **Mobile:** field font-size is fixed at 16px on screens ≤560px regardless of the base 0.95rem scale, specifically to stop iOS Safari zooming the page on focus.

### Navigation
- Sticky header, 76px tall (64px on mobile), translucent `--bg-header` background that solidifies to `--bg-header-solid` on scroll. Icon-only controls (search, language, theme, palette, cart, menu) sit in a tight row; on phones each gets an invisible tap-area extension to reach a 44px minimum hit target without growing the visible 38px icon.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold to one use per screen: the primary CTA, the active chip, or the brand mark — never more than one at once (the One Accent Rule).
- **Do** render every price and comparable number in Roboto Mono with tabular-nums.
- **Do** use the darker `text-accent` gold step (`#856012`) for any gold text in light mode; the button gold fails contrast as text.
- **Do** build elevation from tinted ambient glow, not neutral drop shadows.
- **Do** give buttons and chips a physical, compressing press state (`scale(0.98)` on active).
- **Do** keep the two-language site (English, Arabic/RTL) at visual parity: same tokens, same trust signals, mirrored layout, not a simplified second version.

### Don't:
- **Don't** use a stock-photo hero, generic "Acme"-style branding, or cluttered upsell chrome — this reads as the low-trust reseller look the category is already full of, which is exactly what the legitimacy positioning has to overcome.
- **Don't** use emerald as a general second brand color or button fill; it is reserved for the verified/savings signal only.
- **Don't** use `border-left`/`border-right` as a colored accent stripe on cards or list rows.
- **Don't** use `background-clip: text` gradient headings; a single solid ink color carries emphasis through weight, not a gradient.
- **Don't** apply glassmorphism decoratively; the translucent card backgrounds exist for the navy-field layering effect specifically, not as a generic blur-everything treatment.
- **Don't** default to identical three-card feature grids; vary composition per section.
- **Don't** let the WhatsApp secondary CTA get buried behind or below the primary action; the belief ladder depends on it staying reachable for a buyer who isn't ready to check out yet.
