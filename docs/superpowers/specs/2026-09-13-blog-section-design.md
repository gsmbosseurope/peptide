# Blog Section — Design

## Goal
A new, independent "Blog" content section for peptide-education articles, edited from the admin panel with a real rich-text editor (bold/italic/underline/color/headings/links/inline images/video) — unlike Tips & Guide and Peptide Guide, whose plain-paragraph body has no formatting control.

## Data model
New file `js/blog-data.js`:
```js
const BLOG_POSTS = [
  {
    id: "slug",
    title: "string",
    summary: "1-2 lines for the card/meta description",
    bodyHtml: "<p>...</p>...",   // Quill-produced HTML, rendered as-is
    coverImage: "assets/blog/<id>/cover.jpg",
    video: "",                    // optional embed URL or uploaded file path
    createdAt: "2026-09-13",
  },
];
```
Mirrors `guides-data.js` / `peptide-guide-data.js` in shape and in the `extract_const_json` parsing convention already used by `admin-php/data.php`.

## Backend (admin-php)
- `config.php`: `BLOG_DATA_FILE`, `BLOG_ASSETS_DIR`.
- `data.php`: `load_blog_posts()`, `save_blog_posts()`, `normalize_blog_post()` — same shape as `normalize_guide()`/`normalize_peptide_topic()`, except `bodyHtml` is stored as a raw string (sanitized minimally: strip `<script>` tags) instead of split into paragraph lines.
- `api.php`: `/api/blog-posts` (GET/POST), `/api/blog-posts/:id` (PUT/DELETE), `/api/blog-posts/:id/upload` (POST, image/video — reuses the existing upload pattern).

## Admin UI
- New tab "Blog" next to Products / Tips & Guide / Peptide Guide, reusing the existing list+editor pane layout.
- Editor fields: Title, ID/slug, Summary, Cover image (single, via existing media-thumb pattern), **rich body editor (Quill)**, optional video upload.
- Quill loaded via CDN (`cdnjs.cloudflare.com/ajax/libs/quill`), toolbar: bold/italic/underline, text color, H2/H3, link, image (uploads through the same `/upload` endpoint and inserts the returned URL into the content).

## Public pages
- `blog.php` — listing page, cards (title, summary, cover image), same server-rendered-fallback + client-render pattern as `tips.php`.
- `blog-post.php` — full article page: server-side dynamic `<title>`/meta description/canonical/OG (same pattern as `tip.php`/`product.php`), body rendered via `bodyHtml` echoed directly (trusted, admin-authored content only — no user-submitted input).
- Both linked from main nav/footer and included in `sitemap.php`.

## Out of scope (not building now)
- Multiple images/galleries beyond one cover + inline images already embedded in body.
- Comments, authors, tags/categories, drafts/scheduling.
