/**
 * trusted-peptide.com — Blog Posts
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Blog" tab. Independent of the
 * product catalog, Tips & Guide, and Peptide Guide — long-form
 * educational articles with a rich-text body (bold/italic/underline/
 * color/headings/links/inline images), authored via the Quill editor
 * in the admin panel.
 *
 * Field reference:
 *   id           unique slug, used in URLs: blog-post.html?id=...
 *   title        post title
 *   summary      1-2 lines shown on the post card / meta description
 *   bodyHtml     rich HTML string produced by the admin's Quill editor —
 *                rendered as-is on the public page (admin-authored only,
 *                never user-submitted, so no sanitization is applied
 *                beyond stripping <script> tags on save)
 *   coverImage   path to the cover image shown on the card and at the
 *                top of the article (optional)
 *   video        path or embed URL to a video (optional)
 *   createdAt    "YYYY-MM-DD", set once on creation
 */

const BLOG_POSTS = [];
