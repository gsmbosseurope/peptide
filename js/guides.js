/**
 * Renders the Tips & Guide listing (tips.html) and article detail
 * (tip.html?id=...) pages from GUIDES in guides-data.js.
 */

function guideQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function guideCardHTML(guide) {
  const img = guide.images && guide.images[0] ? guide.images[0] : "";
  return `
    <a class="guide-card reveal" href="tip?id=${encodeURIComponent(guide.id)}">
      <div class="guide-card-media">
        ${img ? `<img src="${img}" alt="${guide.title}" loading="lazy" />` : `<span class="guide-card-icon">${guideIcon()}</span>`}
      </div>
      <div class="guide-card-body">
        <span class="guide-card-title">${guide.title}</span>
        <p class="guide-card-summary">${guide.summary}</p>
        <span class="btn btn-ghost">Read guide →</span>
      </div>
    </a>
  `;
}

function guideIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function initGuidesListPage() {
  const grid = document.getElementById("guides-grid");
  if (!grid) return;

  if (!GUIDES.length) {
    grid.innerHTML = `<div class="empty-state"><h3>No guides published yet</h3><p>Check back soon.</p></div>`;
    return;
  }

  grid.innerHTML = GUIDES.map(guideCardHTML).join("");
  initScrollReveal();
}

function initGuideDetailPage() {
  const root = document.getElementById("guide-detail-root");
  if (!root) return;

  const id = guideQueryParam("id");
  const guide = GUIDES.find((g) => g.id === id);

  if (!guide) {
    root.innerHTML = `<div class="empty-state"><h3>Guide not found</h3><p>Return to <a href="tips">Tips &amp; Guide</a>.</p></div>`;
    return;
  }

  document.title = `${guide.title} — trusted-peptide.com`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="tips">Tips &amp; Guide</a> / ${guide.title}
    </div>
    <article class="guide-article">
      <h1>${guide.title}</h1>
      <p class="guide-article-summary">${guide.summary}</p>
      ${
        guide.images && guide.images.length
          ? `<div class="guide-article-gallery">${guide.images
              .map((img) => `<img src="${img}" alt="${guide.title}" loading="lazy" />`)
              .join("")}</div>`
          : ""
      }
      ${
        guide.video
          ? `<div class="guide-article-video"><video controls src="${guide.video}"></video></div>`
          : ""
      }
      <div class="guide-article-body">
        ${guide.body.map(guideParagraphHTML).join("")}
      </div>
    </article>
  `;
}

// If a paragraph starts with "Name: description" (a short label before the
// first colon), render the name as its own bold heading line above the
// description instead of inline — used by reference-list style guides
// (e.g. the peptide overview articles) so each entry reads like a term
// definition rather than a run-on sentence.
function guideParagraphHTML(para) {
  const match = para.match(/^([^:]{1,60}):\s*(.+)$/s);
  if (match) {
    return `<p class="guide-article-entry"><strong>${match[1]} :</strong><br>${match[2]}</p>`;
  }
  return `<p>${para}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initGuidesListPage();
  initGuideDetailPage();
});
