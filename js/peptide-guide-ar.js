/**
 * Arabic twin of peptide-guide.js for ar/peptide-guide.php and
 * ar/peptide-guide-topic.php. Reads the same PEPTIDE_TOPICS from
 * js/peptide-guide-data.js — most titles/summaries/bodies are already
 * Arabic (migrated from Tips & Guide) or English per-topic; this only
 * localizes the page chrome around them (empty states, labels).
 */

function peptideTopicQueryParamAr(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const PEPTIDE_TOPIC_RTL_PATTERN_AR = /[֑-߿יִ-﷽ﹰ-ﻼ]/;
function peptideTopicDirAr(text) {
  return PEPTIDE_TOPIC_RTL_PATTERN_AR.test(text || "") ? "rtl" : "ltr";
}

function peptideTopicIconAr() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function peptideTopicCardHTMLAr(topic) {
  const img = topic.images && topic.images[0] ? topic.images[0] : "";
  return `
    <a class="guide-card reveal" href="peptide-guide-topic?id=${encodeURIComponent(topic.id)}">
      <div class="guide-card-media">
        ${img ? `<img src="/${img}" alt="${topic.title}" loading="lazy" />` : `<span class="guide-card-icon">${peptideTopicIconAr()}</span>`}
      </div>
      <div class="guide-card-body">
        <span class="guide-card-title" dir="${peptideTopicDirAr(topic.title)}">${topic.title}</span>
        <p class="guide-card-summary" dir="${peptideTopicDirAr(topic.summary)}">${topic.summary}</p>
        <span class="btn btn-ghost">قراءة الموضوع ←</span>
      </div>
    </a>
  `;
}

/**
 * PEPTIDE_TOPICS holds both the English topics (migrated from Tips &
 * Guide) and their separate Arabic counterparts, distinguished only by
 * an "-ar" id suffix — there's no language field. The Arabic pages must
 * show only the "-ar" entries, or English topics leak onto /ar/ pages.
 */
function arabicPeptideTopics() {
  return typeof PEPTIDE_TOPICS !== "undefined" ? PEPTIDE_TOPICS.filter((t) => t.id.endsWith("-ar")) : [];
}

function initPeptideTopicsListPageAr() {
  const grid = document.getElementById("peptide-topics-grid");
  if (!grid) return;

  const topics = arabicPeptideTopics();
  if (!topics.length) {
    grid.innerHTML = `<div class="empty-state"><h3>لا توجد مواضيع بعد</h3><p>عد قريباً.</p></div>`;
    return;
  }

  grid.innerHTML = topics.map(peptideTopicCardHTMLAr).join("");
  initScrollReveal();
}

function initPeptideTopicDetailPageAr() {
  const root = document.getElementById("peptide-topic-detail-root");
  if (!root) return;

  const id = peptideTopicQueryParamAr("id");
  const topic = arabicPeptideTopics().find((t) => t.id === id);

  if (!topic) {
    root.innerHTML = `<div class="empty-state"><h3>الموضوع غير موجود</h3><p>عد إلى <a href="peptide-guide">دليل الببتيد</a>.</p></div>`;
    return;
  }

  document.title = `${topic.title} — trusted-peptide.com`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="/ar/">الرئيسية</a> / <a href="peptide-guide">دليل الببتيد</a> / ${topic.title}
    </div>
    <article class="guide-article">
      <h1 dir="${peptideTopicDirAr(topic.title)}">${topic.title}</h1>
      <p class="guide-article-summary" dir="${peptideTopicDirAr(topic.summary)}">${topic.summary}</p>
      ${
        topic.images && topic.images.length
          ? `<div class="guide-article-gallery">${topic.images
              .map((img) => `<img src="/${img}" alt="${topic.title}" loading="lazy" />`)
              .join("")}</div>`
          : ""
      }
      ${
        topic.video
          ? `<div class="guide-article-video"><video controls src="/${topic.video}"></video></div>`
          : ""
      }
      <div class="guide-article-body">
        ${(topic.body || []).map(peptideTopicParagraphHTMLAr).join("")}
      </div>
      <div class="guide-article-share" id="topic-share-wrap"></div>
    </article>
  `;

  renderShareButton(document.getElementById("topic-share-wrap"), {
    title: topic.title,
    text: topic.title,
  });
}

function peptideTopicParagraphHTMLAr(para) {
  const dir = peptideTopicDirAr(para);

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
  initPeptideTopicsListPageAr();
  initPeptideTopicDetailPageAr();
});
