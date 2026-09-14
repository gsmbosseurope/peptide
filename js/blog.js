/**
 * Renders the Blog listing (blog.php) and post detail
 * (blog-post.php?id=...) pages from BLOG_POSTS in blog-data.js.
 * Unlike Tips & Guide / Peptide Guide (plain paragraph arrays), a blog
 * post's body is already rich HTML (bodyHtml, authored via the admin's
 * Quill editor) and is inserted as-is — no paragraph-formatting
 * heuristics needed here.
 */

function blogQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function blogPostCardHTML(post) {
  const img = post.coverImage || "";
  return `
    <a class="guide-card reveal" href="blog-post?id=${encodeURIComponent(post.id)}">
      <div class="guide-card-media">
        ${img ? `<img src="${img}" alt="${post.title}" loading="lazy" />` : `<span class="guide-card-icon">${blogPostIcon()}</span>`}
      </div>
      <div class="guide-card-body">
        <span class="guide-card-title" dir="${BLOG_RTL_PATTERN.test(post.title) ? "rtl" : "ltr"}">${post.title}</span>
        <p class="guide-card-summary" dir="${BLOG_RTL_PATTERN.test(post.summary) ? "rtl" : "ltr"}">${post.summary}</p>
        <span class="btn btn-ghost">Read post →</span>
      </div>
    </a>
  `;
}

function blogPostIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function initBlogListPage() {
  const grid = document.getElementById("blog-posts-grid");
  if (!grid) return;

  if (typeof BLOG_POSTS === "undefined" || !BLOG_POSTS.length) {
    grid.innerHTML = `<div class="empty-state"><h3>No posts published yet</h3><p>Check back soon.</p></div>`;
    return;
  }

  grid.innerHTML = BLOG_POSTS.map(blogPostCardHTML).join("");
  initScrollReveal();
}

function initBlogPostDetailPage() {
  const root = document.getElementById("blog-post-detail-root");
  if (!root) return;

  const id = blogQueryParam("id");
  const post = typeof BLOG_POSTS !== "undefined" ? BLOG_POSTS.find((p) => p.id === id) : null;

  if (!post) {
    root.innerHTML = `<div class="empty-state"><h3>Post not found</h3><p>Return to <a href="blog">Blog</a>.</p></div>`;
    return;
  }

  document.title = `${post.title} — trusted-peptide.com`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="blog">Blog</a> / ${post.title}
    </div>
    <article class="guide-article">
      <h1 dir="${BLOG_RTL_PATTERN.test(post.title) ? "rtl" : "ltr"}">${post.title}</h1>
      <p class="guide-article-summary" dir="${BLOG_RTL_PATTERN.test(post.summary) ? "rtl" : "ltr"}">${post.summary}</p>
      ${
        post.coverImage
          ? `<div class="guide-article-gallery"><img src="${post.coverImage}" alt="${post.title}" loading="lazy" /></div>`
          : ""
      }
      ${
        post.video
          ? `<div class="guide-article-video"><video controls src="${post.video}"></video></div>`
          : ""
      }
      <div class="guide-article-body blog-post-body">${post.bodyHtml || ""}</div>
      ${
        post.embedHtml
          ? `<div class="guide-article-embed">${post.embedHtml}</div>`
          : ""
      }
      <div class="guide-article-share" id="blog-share-wrap"></div>
    </article>
  `;

  formatBlogPostParagraphs(root.querySelector(".blog-post-body"));

  renderShareButton(document.getElementById("blog-share-wrap"), {
    title: post.title,
    text: post.title,
  });
}

// Detects Arabic (and other RTL-script) text per paragraph and sets
// dir="rtl" — Quill's raw output carries no direction attribute at all
// (unlike the plain-paragraph guide renderers, which already add
// dir="rtl" themselves), so Arabic content was defaulting to left-aligned.
const BLOG_RTL_PATTERN = /[֑-߿יִ-﷿ﹰ-ﻼ]/;

// Quill's body content is a flat run of <p> tags — a "Name:" heading line
// and its explanation are structurally identical paragraphs, so the same
// margin-bottom applies after the heading as after every other
// paragraph, reading as an oversized gap between a title and its own
// text. This walks the rendered paragraphs after insertion and tightens
// the gap specifically where a short paragraph ends in a colon and is
// immediately followed by another paragraph — the "Name: / explanation"
// pattern already used throughout the site's other guide content —
// without requiring the stored HTML to be rewritten.
function formatBlogPostParagraphs(container) {
  if (!container) return;
  const nbspPattern = new RegExp(String.fromCharCode(160), "g");
  const paragraphs = Array.from(container.querySelectorAll(":scope > p, :scope > h2, :scope > h3"));
  const texts = paragraphs.map((p) => (p.textContent || "").replace(nbspPattern, " ").trim());

  paragraphs.forEach((p, i) => {
    const text = texts[i];
    const isEmpty = !text;
    // Two heading styles are used across posts: "Name:" (colon-ended) and
    // "Name — description" (em/en-dash separated, e.g. "Retatrutide —
    // الاختراع..."). Both mark the start of a new topic entry.
    const endsWithColon = /[:：]\s*$/.test(text);
    const hasDashSeparator = /\s[—–-]\s/.test(text);
    // A heading-shaped line doesn't need a following paragraph to still be
    // a heading — it may be the last topic entry in the article, with an
    // embed (not a Quill <p>) coming after it rather than an explanation
    // paragraph. Only the shape of the text itself decides this.
    const isHeadingLine = !isEmpty && (endsWithColon || hasDashSeparator) && text.length <= 140;

    if (!isEmpty) {
      // A short "Name:" heading (e.g. "Bronchogen / Chonluten:") is often
      // pure Latin text with no Arabic characters of its own, so on its
      // own it would default to ltr even inside an Arabic article —
      // follow the explanation paragraph right after it instead, so the
      // heading aligns with the rest of its own entry. But only borrow
      // direction from the next paragraph when the heading itself has no
      // RTL characters to go on — a heading that already contains Arabic
      // (e.g. "8 — 11 — البروتوكول...") must not be overridden by a
      // following paragraph that happens to be Latin-only (such as a
      // pasted <iframe> embed code block), which would wrongly flip it
      // to ltr even though it reads correctly as its own line.
      const ownIsRtl = BLOG_RTL_PATTERN.test(text);
      const dirSourceText = isHeadingLine && !ownIsRtl ? texts[i + 1] || text : text;
      p.dir = BLOG_RTL_PATTERN.test(dirSourceText) ? "rtl" : "ltr";
    }

    if (isHeadingLine) {
      p.classList.add("blog-post-heading-line");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initBlogListPage();
  initBlogPostDetailPage();
});
