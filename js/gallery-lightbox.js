/**
 * Shared gallery lightbox — used by gallery.php/ar/gallery.php (full grid)
 * and product.php/ar/product.php (tagged product gallery section). Renders
 * a full-viewport overlay on click of any element carrying
 * data-gallery-src/data-gallery-type/data-gallery-caption, and closes on
 * the close button or a click outside the media itself.
 */

function isEmbedVideoUrl(src) {
  return /youtube\.com|youtu\.be|vimeo\.com/i.test(src || "");
}

function toEmbedUrl(src) {
  const ytMatch = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return src;
}

function initGalleryLightbox(gridSelector) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;

  const overlay = document.createElement("div");
  overlay.className = "gallery-lightbox-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="gallery-lightbox-content">
      <button type="button" class="gallery-lightbox-close" aria-label="Close">✕</button>
      <div class="gallery-lightbox-media"></div>
      <div class="gallery-lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const mediaEl = overlay.querySelector(".gallery-lightbox-media");
  const captionEl = overlay.querySelector(".gallery-lightbox-caption");

  function open(src, type, caption) {
    if (isEmbedVideoUrl(src)) {
      mediaEl.innerHTML = `<iframe src="${toEmbedUrl(src)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else if (type === "video") {
      mediaEl.innerHTML = `<video src="${src}" controls autoplay></video>`;
    } else {
      mediaEl.innerHTML = `<img src="${src}" alt="" />`;
    }
    captionEl.textContent = caption || "";
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.hidden = true;
    mediaEl.innerHTML = "";
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-gallery-src]");
    if (!tile) return;
    open(tile.dataset.gallerySrc, tile.dataset.galleryType, tile.dataset.galleryCaption);
  });

  overlay.querySelector(".gallery-lightbox-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) close();
  });
}
