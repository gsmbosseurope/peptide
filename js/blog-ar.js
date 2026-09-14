/**
 * Arabic twin of blog.js for ar/blog.php and ar/blog-post.php. Reads the
 * same BLOG_POSTS from js/blog-data.js — post titles/summaries/bodies are
 * whatever the admin wrote (English or Arabic per-post); this only
 * localizes the page chrome around them (empty states, labels, dates).
 */

function blogQueryParamAr(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function blogPostCardHTMLAr(post) {
  const img = post.coverImage || "";
  return `
    <a class="guide-card reveal" href="blog-post?id=${encodeURIComponent(post.id)}">
      <div class="guide-card-media">
        ${img ? `<img src="/${img}" alt="${post.title}" loading="lazy" />` : `<span class="guide-card-icon">${blogPostIconAr()}</span>`}
      </div>
      <div class="guide-card-body">
        <span class="guide-card-title" dir="${BLOG_RTL_PATTERN_AR.test(post.title) ? "rtl" : "ltr"}">${post.title}</span>
        <p class="guide-card-summary" dir="${BLOG_RTL_PATTERN_AR.test(post.summary) ? "rtl" : "ltr"}">${post.summary}</p>
        <span class="btn btn-ghost">قراءة المقال ←</span>
      </div>
    </a>
  `;
}

function blogPostIconAr() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function initBlogListPageAr() {
  const grid = document.getElementById("blog-posts-grid");
  if (!grid) return;

  if (typeof BLOG_POSTS === "undefined" || !BLOG_POSTS.length) {
    grid.innerHTML = `<div class="empty-state"><h3>لا توجد مقالات بعد</h3><p>عد قريباً.</p></div>`;
    return;
  }

  grid.innerHTML = BLOG_POSTS.map(blogPostCardHTMLAr).join("");
  initScrollReveal();
}

function initBlogPostDetailPageAr() {
  const root = document.getElementById("blog-post-detail-root");
  if (!root) return;

  const id = blogQueryParamAr("id");
  const post = typeof BLOG_POSTS !== "undefined" ? BLOG_POSTS.find((p) => p.id === id) : null;

  if (!post) {
    root.innerHTML = `<div class="empty-state"><h3>المقال غير موجود</h3><p>عد إلى <a href="blog">المدونة</a>.</p></div>`;
    return;
  }

  document.title = `${post.title} — trusted-peptide.com`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/ar/">الرئيسية</a> / <a href="blog">المدونة</a> / ${post.title}
    </div>
    <article class="guide-article">
      <h1 dir="${BLOG_RTL_PATTERN_AR.test(post.title) ? "rtl" : "ltr"}">${post.title}</h1>
      <p class="guide-article-summary" dir="${BLOG_RTL_PATTERN_AR.test(post.summary) ? "rtl" : "ltr"}">${post.summary}</p>
      ${
        post.coverImage
          ? `<div class="guide-article-gallery"><img src="/${post.coverImage}" alt="${post.title}" loading="lazy" /></div>`
          : ""
      }
      ${
        post.video
          ? `<div class="guide-article-video"><video controls src="/${post.video}"></video></div>`
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

  formatBlogPostParagraphsAr(root.querySelector(".blog-post-body"));

  renderShareButton(document.getElementById("blog-share-wrap"), {
    title: post.title,
    text: post.title,
  });
}

const BLOG_RTL_PATTERN_AR = /[֑-߿יִ-﷿ﹰ-ﻼ]/;

function formatBlogPostParagraphsAr(container) {
  if (!container) return;
  const nbspPattern = new RegExp(String.fromCharCode(160), "g");
  const paragraphs = Array.from(container.querySelectorAll(":scope > p, :scope > h2, :scope > h3"));
  const texts = paragraphs.map((p) => (p.textContent || "").replace(nbspPattern, " ").trim());

  paragraphs.forEach((p, i) => {
    const text = texts[i];
    const isEmpty = !text;
    const endsWithColon = /[:：]\s*$/.test(text);
    const hasDashSeparator = /\s[—–-]\s/.test(text);
    const isHeadingLine = !isEmpty && (endsWithColon || hasDashSeparator) && text.length <= 140;

    if (!isEmpty) {
      const ownIsRtl = BLOG_RTL_PATTERN_AR.test(text);
      const dirSourceText = isHeadingLine && !ownIsRtl ? texts[i + 1] || text : text;
      p.dir = BLOG_RTL_PATTERN_AR.test(dirSourceText) ? "rtl" : "ltr";
    }

    if (isHeadingLine) {
      p.classList.add("blog-post-heading-line");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initBlogListPageAr();
  initBlogPostDetailPageAr();
});
