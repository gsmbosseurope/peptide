/**
 * Renders the Peptide Guide listing (peptide-guide.php) and topic detail
 * (peptide-guide-topic.php?id=...) pages from PEPTIDE_TOPICS in
 * peptide-guide-data.js, managed from the "Peptide Guide" tab in the
 * Admin Panel.
 */

function peptideTopicQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Detects Arabic (and other RTL-script) text so topic titles/paragraphs
// written in Arabic render right-to-left, while English text is left
// untouched — checked per text chunk, not per page.
const PEPTIDE_TOPIC_RTL_PATTERN = /[֑-߿יִ-﷽ﹰ-ﻼ]/;
function peptideTopicDir(text) {
  return PEPTIDE_TOPIC_RTL_PATTERN.test(text || "") ? "rtl" : "ltr";
}

function peptideTopicIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function peptideTopicCardHTML(topic) {
  const img = topic.images && topic.images[0] ? topic.images[0] : "";
  return `
    <a class="guide-card reveal" href="peptide-guide-topic?id=${encodeURIComponent(topic.id)}">
      <div class="guide-card-media">
        ${img ? `<img src="${img}" alt="${topic.title}" loading="lazy" />` : `<span class="guide-card-icon">${peptideTopicIcon()}</span>`}
      </div>
      <div class="guide-card-body">
        <span class="guide-card-title" dir="${peptideTopicDir(topic.title)}">${topic.title}</span>
        <p class="guide-card-summary" dir="${peptideTopicDir(topic.summary)}">${topic.summary}</p>
        <span class="btn btn-ghost">Read topic →</span>
      </div>
    </a>
  `;
}

function initPeptideTopicsListPage() {
  const grid = document.getElementById("peptide-topics-grid");
  if (!grid) return;

  if (typeof PEPTIDE_TOPICS === "undefined" || !PEPTIDE_TOPICS.length) {
    grid.innerHTML = `<div class="empty-state"><h3>No topics published yet</h3><p>Check back soon.</p></div>`;
    return;
  }

  grid.innerHTML = PEPTIDE_TOPICS.map(peptideTopicCardHTML).join("");
  initScrollReveal();
}

function initPeptideTopicDetailPage() {
  const root = document.getElementById("peptide-topic-detail-root");
  if (!root) return;

  const id = peptideTopicQueryParam("id");
  const topic = typeof PEPTIDE_TOPICS !== "undefined" ? PEPTIDE_TOPICS.find((t) => t.id === id) : null;

  if (!topic) {
    root.innerHTML = `<div class="empty-state"><h3>Topic not found</h3><p>Return to <a href="peptide-guide">Peptide Guide</a>.</p></div>`;
    return;
  }

  document.title = `${topic.title} — trusted-peptide.com`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="peptide-guide">Peptide Guide</a> / ${topic.title}
    </div>
    <article class="guide-article">
      <h1 dir="${peptideTopicDir(topic.title)}">${topic.title}</h1>
      <p class="guide-article-summary" dir="${peptideTopicDir(topic.summary)}">${topic.summary}</p>
      ${
        topic.images && topic.images.length
          ? `<div class="guide-article-gallery">${topic.images
              .map((img) => `<img src="${img}" alt="${topic.title}" loading="lazy" />`)
              .join("")}</div>`
          : ""
      }
      ${
        topic.video
          ? `<div class="guide-article-video"><video controls src="${topic.video}"></video></div>`
          : ""
      }
      <div class="guide-article-body">
        ${(topic.body || []).map(peptideTopicParagraphHTML).join("")}
      </div>
      <div class="guide-article-share" id="topic-share-wrap"></div>
    </article>
  `;

  renderShareButton(document.getElementById("topic-share-wrap"), {
    title: topic.title,
    text: topic.title,
  });
}

// A paragraph is treated as its own bold, accent-colored heading line in
// three cases:
//   1. "Name: description" — a short label before the first colon, with
//      description text following it.
//   2. A short line that opens with a decorative bullet/symbol (◎ ◇ ✦ ○ ◆
//      etc. — anything that isn't a letter, digit, space or dash) or with a
//      number, followed by a name and an em/en-dash — the convention used
//      by the per-compound section headers pasted into topic bodies
//      (e.g. "◎ Semaglutide — الجيل الأول المُعتمد").
//   3. Same as #2 but ending in a bare, trailing colon with nothing after
//      it (e.g. "1 — بروتوكول Retatrutide الثلاثي (الأقوى) :") — a
//      decorative colon rather than a "label: description" separator.
// Either way the whole line becomes its own heading paragraph with no
// separate body text below it.
function peptideTopicParagraphHTML(para) {
  const dir = peptideTopicDir(para);

  const colonMatch = para.match(/^([^:]{1,60}):\s*(.+)$/s);
  if (colonMatch) {
    return `<p class="guide-article-entry" dir="${dir}"><strong>${colonMatch[1]} :</strong><br>${colonMatch[2]}</p>`;
  }

  const isMarkerHeading =
    !para.includes("\n") &&
    para.length <= 100 &&
    /^(?:[^\p{L}\p{N}\s-]|[0-9]{1,3})\s+.{0,80}[—–].{0,80}$/u.test(para);
  if (isMarkerHeading) {
    return `<p class="guide-article-entry" dir="${dir}"><strong>${para}</strong></p>`;
  }

  return `<p dir="${dir}">${para}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initPeptideTopicsListPage();
  initPeptideTopicDetailPage();
});
