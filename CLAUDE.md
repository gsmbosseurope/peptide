# Trusted-Peptide (trusted-peptide.com)

Bilingual PHP site (English at `/`, Arabic at `/ar/`, RTL) for research peptides, cosmetics and vitamins. Products render client-side from `js/products-data*.js`; detail pages (`product.php`, `ar/product.php`) also print title/description/schema on the server for SEO and share previews.

## Working rules
- Explain to the user in **Arabic** (code, paths and identifiers stay as they are).
- After a change, **list the files to upload**; do not rebuild a zip unless asked.
- Hosting is cPanel with manual upload behind Cloudflare. After uploading, purge the Cloudflare cache.
- No PHP on this machine: PHP files cannot be linted or run locally. Say so instead of claiming they were tested.
- Pushing to GitHub (`gsmbosseurope/peptide`, private) is outward-facing: confirm first.

## Live data: the admin panel edits these on the SERVER
`js/products-data.js`, `js/products-data-ar.js`, `js/blog-data.js`, `js/gallery-data.js`, `js/peptide-guide-data.js`, `js/theme-settings.js`, `js/category-tile-labels.js`, `js/category-labels-ar.js`.
Never tell the user to upload a local copy of these unless it was rebuilt from a fresh live download (`https://trusted-peptide.com/js/<file>?nc=<random>` to bypass the cache). Apply changes to the live copy, using Python in `rb`/`wb` mode to keep UTF-8.

## Secrets
`admin-php/config.php` holds the admin password. It is git-ignored and is never uploaded casually. The real one lives on the server; `config.example.php` is the template.

## Structure
- `partials/footer.php`: the only footer (set `$footerLang = 'ar'` for Arabic). Pages include it; do not paste footer markup.
- `admin-php/`: control panel (`seo.php` JSON-LD helpers, `share.php` share-preview helpers, `data.php` data access).
- `css/main.css` (themes, components), `css/hero.css` (later overrides + mobile pass), `css/rtl.css` (Arabic).
- 11 colour styles x light/dark (`js/theme.js`); check contrast in all of them after CSS changes.

## Brand
Logo: peptide-chain mark, teal `#12B5A8` (`#5FD6CB` on dark), navy `#0B1F3A`, white. Arabic name "ترستد ببتيد". Purity seal: `assets/brand/purity-seal.svg` (product-page trust card).

## Content
Keep product names in English scientific notation, also on Arabic pages. Every root page has an `/ar/` twin. Product copy is research-use only; avoid new medical or therapeutic claims.

## Tools in `.claude/`
Hook `guard.js` blocks `config.php` and asks before touching live-data files; hook `check-js.js` strips BOMs and syntax-checks JS; `/deploy-check` lists and packages changed files; agent `ar-en-sync-reviewer` compares EN/AR.
