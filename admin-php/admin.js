let PRODUCTS = [];
let CATEGORIES = [];
let PEPTIDE_TOPICS = [];
let BLOG_POSTS = [];
let GALLERY_ITEMS = [];
let currentId = null;
let isNew = false;
let activeTab = "products"; // "products" | "peptide-guide" | "blog" | "gallery"

/**
 * Floating scroll-to-top / scroll-to-bottom buttons for the editor pane
 * (the long product-edit form is the main scrollable area in this panel).
 */
function initScrollButtons() {
  const wrap = document.createElement("div");
  wrap.className = "scroll-buttons";
  wrap.innerHTML = `
    <button type="button" class="scroll-btn scroll-btn-up" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <button type="button" class="scroll-btn scroll-btn-down" aria-label="Scroll to bottom">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;
  document.body.appendChild(wrap);

  const upBtn = wrap.querySelector(".scroll-btn-up");
  const downBtn = wrap.querySelector(".scroll-btn-down");

  function getScrollTarget() {
    const wrapEl = document.getElementById("editor-pane-wrap");
    const listEl = document.getElementById("product-list");
    if (wrapEl && !wrapEl.classList.contains("is-hidden-mobile")) return wrapEl;
    return listEl || wrapEl;
  }

  upBtn.addEventListener("click", () => getScrollTarget().scrollTo({ top: 0, behavior: "smooth" }));
  downBtn.addEventListener("click", () => {
    const el = getScrollTarget();
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  });

  function updateVisibility() {
    const el = getScrollTarget();
    if (!el) return;
    const scrollTop = el.scrollTop;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const nearTop = scrollTop < 150;
    const nearBottom = maxScroll - scrollTop < 150;
    upBtn.classList.toggle("is-visible", !nearTop);
    downBtn.classList.toggle("is-visible", maxScroll > 200 && !nearBottom);
  }

  updateVisibility();
  ["editor-pane-wrap", "product-list"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("scroll", updateVisibility, { passive: true });
  });
  window.addEventListener("resize", updateVisibility);

  // Re-check visibility whenever the editor content changes size (e.g. a
  // new product is opened) or mobile view toggles between list/editor.
  const observer = new MutationObserver(updateVisibility);
  const wrapEl = document.getElementById("editor-pane-wrap");
  if (wrapEl) observer.observe(wrapEl, { childList: true, subtree: true, attributes: true });
}
document.addEventListener("DOMContentLoaded", initScrollButtons);

const listEl = document.getElementById("product-list");
const editorEl = document.getElementById("editor-pane");
const editorPaneWrap = document.getElementById("editor-pane-wrap");
const searchBox = document.getElementById("search-box");
const toastEl = document.getElementById("toast");
const productListPane = document.getElementById("product-list-pane");

/** On mobile (list + editor stacked), show only the editor pane. No-op on desktop. */
function showMobileEditor() {
  if (window.innerWidth > 860) return;
  productListPane.classList.add("is-hidden-mobile");
  editorPaneWrap.classList.remove("is-hidden-mobile");
  window.scrollTo(0, 0);
}
/** On mobile, show only the product list pane. No-op on desktop. */
function showMobileList() {
  if (window.innerWidth > 860) return;
  productListPane.classList.remove("is-hidden-mobile");
  editorPaneWrap.classList.add("is-hidden-mobile");
  window.scrollTo(0, 0);
}

document.getElementById("back-to-list-btn").addEventListener("click", showMobileList);

function showToast(msg, type = "success") {
  toastEl.textContent = msg;
  toastEl.className = `toast ${type}`;
  toastEl.hidden = false;
  setTimeout(() => (toastEl.hidden = true), 2800);
}

/* ---------- Theme toggle ---------- */
(function initThemeToggle() {
  const THEME_KEY = "peptidesLabsTheme";
  const btn = document.getElementById("theme-toggle-btn");
  if (!btn) return;

  function getAutoTheme() {
    const h = new Date().getHours();
    return h >= 6 && h < 18 ? "light" : "dark";
  }
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || getAutoTheme();
  }
  function updateUI(theme) {
    btn.classList.toggle("is-light", theme === "light");
    btn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  }

  updateUI(currentTheme());
  btn.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    updateUI(next);
  });
})();

async function api(path, opts) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    // Belt-and-suspenders alongside the server's own Cache-Control:
    // no-store on every /api/* response — this stops the *browser's*
    // HTTP cache specifically from ever serving a GET here from its
    // local disk/memory cache without even checking the network,
    // which server-side headers alone don't always prevent.
    cache: "no-store",
    ...opts,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

async function loadProducts() {
  PRODUCTS = await api("/api/products");
  if (activeTab === "products") renderList();
}

async function loadCategories() {
  CATEGORIES = await api("/api/categories");
}

async function loadPeptideTopics() {
  PEPTIDE_TOPICS = await api("/api/peptide-topics");
  if (activeTab === "peptide-guide") renderList();
}

async function loadBlogPosts() {
  BLOG_POSTS = await api("/api/blog-posts");
  if (activeTab === "blog") renderList();
}

async function loadGalleryItems() {
  GALLERY_ITEMS = await api("/api/gallery");
  if (activeTab === "gallery") renderList();
}

function renderList() {
  const term = searchBox.value.trim().toLowerCase();

  if (activeTab === "gallery") {
    const filtered = GALLERY_ITEMS.filter((g) => !term || (g.caption || "").toLowerCase().includes(term));
    listEl.innerHTML = filtered
      .map((g, i) => {
        const thumbSrc = g.type === "video" ? g.thumbnail || g.src : g.src;
        const useVideoTag = g.type === "video" && !g.thumbnail && g.src;
        const productCount = (g.productIds || []).length;
        return `
      <div class="product-list-item gallery-list-item${g.id === currentId ? " active" : ""}" data-id="${g.id}">
        <div class="gallery-list-thumb">
          ${useVideoTag ? `<video src="/${escapeAttr(g.src)}" muted preload="metadata"></video>` : thumbSrc ? `<img src="/${escapeAttr(thumbSrc)}" alt="" />` : ""}
          <span class="gallery-list-type-icon">${g.type === "video" ? "▶" : "🖼"}</span>
        </div>
        <div>
          <div class="name">${escapeHtml(g.caption) || "(no caption)"}</div>
          <div class="cat">${productCount} product${productCount === 1 ? "" : "s"} tagged</div>
        </div>
        <div class="gallery-list-move">
          <button type="button" class="btn btn-sm gallery-move-up" data-idx="${i}" ${i === 0 ? "disabled" : ""} title="Move up">↑</button>
          <button type="button" class="btn btn-sm gallery-move-down" data-idx="${i}" ${i === filtered.length - 1 ? "disabled" : ""} title="Move down">↓</button>
        </div>
      </div>
    `;
      })
      .join("");

    listEl.querySelectorAll(".gallery-move-up, .gallery-move-down").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = Number(btn.dataset.idx);
        const delta = btn.classList.contains("gallery-move-up") ? -1 : 1;
        moveGalleryItem(filtered[idx].id, delta);
      });
    });
  } else if (activeTab === "peptide-guide" || activeTab === "blog") {
    const source = activeTab === "peptide-guide" ? PEPTIDE_TOPICS : BLOG_POSTS;
    const filtered = source.filter((g) => !term || g.title.toLowerCase().includes(term)).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    listEl.innerHTML = filtered
      .map(
        (g) => `
      <div class="product-list-item${g.id === currentId ? " active" : ""}" data-id="${g.id}">
        <div class="name">${g.title || "(untitled)"}</div>
        <div class="cat">${g.summary ? g.summary.slice(0, 40) : "—"}</div>
      </div>
    `
      )
      .join("");
  } else {
    const productCats = (p) =>
      Array.isArray(p.categories) && p.categories.length ? p.categories : [p.category].filter(Boolean);
    const filtered = PRODUCTS.filter(
      (p) => !term || p.name.toLowerCase().includes(term) || productCats(p).some((c) => c.toLowerCase().includes(term))
    ).sort((a, b) => a.name.localeCompare(b.name));
    listEl.innerHTML = filtered
      .map(
        (p) => `
      <div class="product-list-item${p.id === currentId ? " active" : ""}" data-id="${p.id}">
        <div class="name">${p.name || "(untitled)"}</div>
        <div class="cat">${productCats(p).join(" · ") || "—"}</div>
      </div>
    `
      )
      .join("");
  }

  listEl.querySelectorAll(".product-list-item").forEach((el) => {
    el.addEventListener("click", () => openEditor(el.dataset.id));
  });
}

searchBox.addEventListener("input", renderList);

const newItemBtn = document.getElementById("new-item-btn");
newItemBtn.addEventListener("click", () => {
  isNew = true;
  currentId = null;
  showMobileEditor();
  if (activeTab === "peptide-guide") {
    renderPeptideTopicEditor({ id: "", title: "", summary: "", body: [], images: [], video: "" });
  } else if (activeTab === "blog") {
    renderBlogPostEditor({ id: "", title: "", summary: "", bodyHtml: "", coverImage: "", video: "", embedHtml: "" });
  } else if (activeTab === "gallery") {
    renderGalleryEditor({ id: "", type: "image", src: "", thumbnail: "", caption: "", productIds: [] });
  } else {
    renderEditor({
      id: "",
      name: "",
      category: "",
      purity: "",
      showPurity: true,
      shortDescription: "",
      composition: [],
      uses: [],
      images: [],
      video: "",
      variants: [{ size: "", price: 0 }],
      wholesaleTiers: [
        { minQty: 5, discountPercent: 10 },
        { minQty: 10, discountPercent: 20 },
      ],
    });
  }
});

function openEditor(id) {
  isNew = false;
  currentId = id;
  renderList();
  showMobileEditor();
  if (activeTab === "peptide-guide") {
    const topic = PEPTIDE_TOPICS.find((t) => t.id === id);
    if (topic) renderPeptideTopicEditor(topic);
  } else if (activeTab === "blog") {
    const post = BLOG_POSTS.find((p) => p.id === id);
    if (post) renderBlogPostEditor(post);
  } else if (activeTab === "gallery") {
    const item = GALLERY_ITEMS.find((g) => g.id === id);
    if (item) renderGalleryEditor(item);
  } else {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) renderEditor(product);
  }
}

/* ---------- Tab switching ---------- */
function switchTab(tab) {
  if (tab === activeTab) return;
  activeTab = tab;
  currentId = null;
  isNew = false;

  document.getElementById("manage-categories-btn").hidden = tab !== "products";

  document.getElementById("tab-products").classList.toggle("active", tab === "products");
  document.getElementById("tab-peptide-guide").classList.toggle("active", tab === "peptide-guide");
  document.getElementById("tab-blog").classList.toggle("active", tab === "blog");
  document.getElementById("tab-gallery").classList.toggle("active", tab === "gallery");

  const placeholders = { "peptide-guide": "Search topics…", blog: "Search posts…", products: "Search products…", gallery: "Search gallery…" };
  const newLabels = { "peptide-guide": "+ New Topic", blog: "+ New Post", products: "+ New Product", gallery: "+ New Gallery Item" };
  const emptyLabels = { "peptide-guide": "a topic", blog: "a post", products: "a product", gallery: "a gallery item" };

  searchBox.value = "";
  searchBox.placeholder = placeholders[tab];
  newItemBtn.textContent = newLabels[tab];
  editorEl.innerHTML = `<div class="empty-editor">Select ${emptyLabels[tab]} from the list, or create a new one.</div>`;
  renderList();
}

document.getElementById("tab-products").addEventListener("click", () => switchTab("products"));
document.getElementById("tab-peptide-guide").addEventListener("click", () => switchTab("peptide-guide"));
document.getElementById("tab-blog").addEventListener("click", () => switchTab("blog"));
document.getElementById("tab-gallery").addEventListener("click", () => switchTab("gallery"));

function renderEditor(product) {
  editorEl.innerHTML = `
    <div class="section-title">Basic Info</div>
    <div class="field-group" style="display:flex;gap:24px;flex-wrap:wrap;padding:10px 14px;border:1px solid var(--border-strong);border-radius:8px;background:rgba(201,161,90,0.06);margin-bottom:18px;">
      <label class="checkbox-label" style="font-weight:700;">
        <input type="checkbox" id="f-featured" ${product.featured ? "checked" : ""} />
        ⭐ Featured — يظهر في الصفحة الرئيسية
      </label>
      <label class="checkbox-label" style="font-weight:700;">
        <input type="checkbox" id="f-bestSeller" ${product.bestSeller ? "checked" : ""} />
        🔥 Best Seller — يظهر في صفحة الأكثر طلباً
      </label>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label>Product Name</label>
        <input type="text" id="f-name" value="${escapeAttr(product.name)}" />
      </div>
      <div class="field-group">
        <label>Categories</label>
        <div class="category-checkbox-list" id="f-categories">
          ${(() => {
            const selected = Array.isArray(product.categories) && product.categories.length
              ? product.categories
              : [product.category].filter(Boolean);
            return orderedCategories().map(
              (c) =>
                `<label class="checkbox-label${isSubcat(c) ? " is-subcat" : ""}" style="--depth:${subcatDepth(c)}"><input type="checkbox" value="${escapeAttr(c)}" ${selected.includes(c) ? "checked" : ""} /> ${isSubcat(c) ? "↳ " + escapeHtml(subcatLabel(c)) : escapeHtml(c)}</label>`
            ).join("");
          })()}
        </div>
        <span class="field-hint">Select one or more. The first checked category is used as the primary one shown first. Manage the list via the "Categories" button above.</span>
      </div>
    </div>
    <div class="field-group promo-field">
      <label>📣 Promoted products — shown as an ad on this product's page</label>
      <input type="search" id="f-promoted-filter" class="promo-filter" placeholder="Search products…" />
      <div class="category-checkbox-list promo-list" id="f-promoted">
        ${PRODUCTS.filter((p) => p.id !== product.id)
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))
          .map((p) => {
            const on = Array.isArray(product.promoted) && product.promoted.includes(p.id);
            return `<label class="checkbox-label" data-name="${escapeAttr(p.name.toLowerCase())}"><input type="checkbox" value="${escapeAttr(p.id)}" ${on ? "checked" : ""} /> ${escapeHtml(p.name)}</label>`;
          })
          .join("")}
      </div>
      <label class="checkbox-label promo-mutual">
        <input type="checkbox" id="f-promoted-mutual" checked />
        🔁 Link both ways — also show <strong>this</strong> product as an ad on the ones checked above
      </label>
      <span class="field-hint">Shown next to "Add to Cart" and in a "You may also like" section at the bottom of the page (English &amp; Arabic).</span>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label>Purity</label>
        <input type="text" id="f-purity" value="${escapeAttr(product.purity)}" placeholder="e.g. 99.9%" />
        <label class="checkbox-label">
          <input type="checkbox" id="f-showPurity" ${product.showPurity !== false ? "checked" : ""} />
          Show purity badge on site
        </label>
      </div>
      <div class="field-group">
        <label>Product ID / URL slug ${isNew ? "" : "(locked)"}</label>
        <input type="text" id="f-id" value="${escapeAttr(product.id)}" ${isNew ? "" : "disabled"} placeholder="auto-generated from name if left blank" />
      </div>
    </div>
    <div class="field-group">
      <label>Short Description</label>
      <p class="modal-hint">Use the toolbar for bold, italic, underline, text color, headings, and links. Click the image icon to insert a photo anywhere in the description.</p>
      <div id="f-shortDescription-quill" style="background:#fff; border-radius:8px;"></div>
      <button type="button" class="btn btn-sm" id="f-shortDescription-dedupe-btn" style="margin-top:8px;">Remove Duplicate Paragraphs</button>
    </div>

    <div class="section-title">Details (one per line)</div>
    <div class="field-group">
      <textarea id="f-composition" rows="4">${escapeHtml((product.composition || []).join("\n"))}</textarea>
    </div>

    <div class="section-title">How to Use (one per line)</div>
    <div class="field-group">
      <textarea id="f-uses" rows="4">${escapeHtml((product.uses || []).join("\n"))}</textarea>
    </div>

    <div class="section-title">Photos &amp; Video</div>
    <div class="media-grid" id="media-grid"></div>
    <div class="upload-drop" id="upload-drop">
      ${isNew ? "Save the product once first, then come back to upload media." : "Click to upload images or a video for this product"}
    </div>
    <input type="file" id="file-input" accept="image/*,video/*" multiple hidden ${isNew ? "disabled" : ""} />
    ${isNew ? "" : `<div class="url-import-row">
      <input type="url" id="image-url-input" placeholder="…or paste an image link (https://…)" />
      <button type="button" class="btn btn-sm" id="image-url-btn">🔗 Add from link</button>
    </div>`}

    <div class="section-title">Variants (size &amp; price)</div>
    <div id="variants-list"></div>
    <button class="btn btn-sm" id="add-variant-btn">+ Add size</button>

    <div class="section-title">Wholesale Discount Tiers</div>
    <div id="tiers-list"></div>
    <button class="btn btn-sm" id="add-tier-btn">+ Add tier</button>

    ${isNew ? "" : `
    <div class="ar-translation-block" style="border:2px solid #c9a15a; border-radius:10px; padding:16px; margin-top:8px; background:rgba(201,161,90,0.06);">
      <div class="section-title" style="margin-top:0;">Arabic Translation (trusted-peptide.com/ar)</div>
      <p class="modal-hint">Category, purity, video, sizes and prices always match the English product above. Images are shared by default — untick "Same images as English" to give the Arabic page its own. Text fields are saved exactly as written; leaving a field blank saves it blank (no automatic fallback to the English text).</p>
      <div class="field-group">
        <label>Product Name (Arabic)</label>
        <input type="text" id="ar-name" dir="rtl" placeholder="جارٍ التحميل…" disabled />
      </div>
      <div class="field-group ar-images-field">
        <label>Images (Arabic page)</label>
        <label class="checkbox-label">
          <input type="checkbox" id="ar-shared-images" checked />
          🔗 Same images as English (shared)
        </label>
        <div id="ar-own-images" hidden>
          <div class="media-grid" id="ar-media-grid"></div>
          <label class="btn btn-sm ar-upload-btn">📤 Upload Arabic images
            <input type="file" id="ar-upload-input" accept="image/*" multiple hidden />
          </label>
          <div class="url-import-row">
            <input type="url" id="ar-image-url-input" placeholder="…or paste an image link (https://…)" />
            <button type="button" class="btn btn-sm" id="ar-image-url-btn">🔗 Add from link</button>
          </div>
          <span class="field-hint">The first image is the cover. Saved with "Save Arabic Translation".</span>
        </div>
      </div>
      <div class="field-group">
        <label>Short Description (Arabic)</label>
        <div id="ar-shortDescription-quill" style="background:#fff; border-radius:8px;" dir="rtl"></div>
        <button type="button" class="btn btn-sm" id="ar-shortDescription-dedupe-btn" style="margin-top:8px;">Remove Duplicate Paragraphs</button>
      </div>
      <div class="section-title">Details, Arabic (one per line)</div>
      <div class="field-group">
        <textarea id="ar-composition" rows="4" dir="rtl" placeholder="جارٍ التحميل…" disabled></textarea>
      </div>
      <div class="section-title">How to Use, Arabic (one per line)</div>
      <div class="field-group">
        <textarea id="ar-uses" rows="4" dir="rtl" placeholder="جارٍ التحميل…" disabled></textarea>
      </div>
      <p class="modal-hint" style="color:#a15a2a; font-weight:600;">⚠ This section has its own Save button below — it does NOT save with "Save Changes" at the bottom of the page.</p>
      <div class="editor-actions">
        <button class="btn btn-primary" id="save-ar-btn">💾 Save Arabic Translation</button>
      </div>
    </div>
    `}

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-btn">${isNew ? "Create Product" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-btn">Delete Product</button>'}
    </div>
  `;

  renderVariants(product.variants || []);
  renderTiers(product.wholesaleTiers || []);
  renderMedia(product.images || [], product.video || "");

  // Rich-text description editor — same Quill config/pattern as the Blog
  // editor's Post Body field, so descriptions can use bold/color/headings/
  // links and inline images instead of being a single plain-text block.
  productDescQuillInstance = new Quill("#f-shortDescription-quill", {
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ color: [] }],
          [{ align: [] }, { direction: "rtl" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: () => productDescQuillImageHandler(product.id, productDescQuillInstance),
        },
      },
    },
  });
  productDescQuillInstance.root.innerHTML = product.shortDescription || "";
  document.getElementById("f-shortDescription-dedupe-btn").addEventListener("click", () => dedupeQuillBlocks(productDescQuillInstance));

  if (!isNew) {
    loadArabicTranslation(product.id);
  }

  document.getElementById("add-variant-btn").addEventListener("click", () => {
    const list = readVariants();
    list.push({ size: "", price: 0 });
    renderVariants(list);
  });
  document.getElementById("add-tier-btn").addEventListener("click", () => {
    const list = readTiers();
    list.push({ minQty: 0, discountPercent: 0 });
    renderTiers(list);
  });

  document.getElementById("save-btn").addEventListener("click", () => saveProduct(product));
  const deleteBtn = document.getElementById("delete-btn");
  if (deleteBtn) deleteBtn.addEventListener("click", () => deleteProduct(product.id));

  if (!isNew) {
    const dropZone = document.getElementById("upload-drop");
    const fileInput = document.getElementById("file-input");
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => handleUpload(product.id, fileInput.files));

    // Product photo from a link: the server downloads it into assets/products/<id>/.
    const urlInput = document.getElementById("image-url-input");
    const addFromLink = async () => {
      const url = urlInput.value.trim();
      if (!url) return;
      try {
        const data = await importImageFromUrl(product.id, url, "");
        currentImages.push(data.path);
        renderMedia(currentImages, currentVideo);
        urlInput.value = "";
        showToast("Image added — remember to Save Changes to keep it linked.");
      } catch (e) {
        showToast(`Could not add image: ${e.message}`, "error");
      }
    };
    document.getElementById("image-url-btn").addEventListener("click", addFromLink);
    urlInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); addFromLink(); } });
  }
}

/** Asks the server to download an image from a link. kind "desc" = description images folder. */
async function importImageFromUrl(productId, url, kind) {
  showToast("Downloading image…");
  return api(`/api/products/${encodeURIComponent(productId)}/upload-url`, {
    method: "POST",
    body: JSON.stringify({ url, kind }),
  });
}

function renderVariants(variants) {
  const container = document.getElementById("variants-list");
  container.innerHTML = variants
    .map(
      (v, i) => `
    <div class="repeat-row" data-idx="${i}">
      <input type="text" class="variant-size" placeholder="e.g. 5mg" value="${escapeAttr(v.size)}" />
      <input type="number" class="variant-price" placeholder="Price (EUR)" value="${v.price}" step="0.01" />
      <button class="btn btn-sm btn-danger remove-variant">✕</button>
    </div>
  `
    )
    .join("");
  container.querySelectorAll(".remove-variant").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const idx = Number(e.target.closest(".repeat-row").dataset.idx);
      const list = readVariants();
      list.splice(idx, 1);
      renderVariants(list);
    })
  );
}

function readVariants() {
  return Array.from(document.querySelectorAll("#variants-list .repeat-row")).map((row) => ({
    size: row.querySelector(".variant-size").value,
    price: Number(row.querySelector(".variant-price").value) || 0,
  }));
}

function renderTiers(tiers) {
  const container = document.getElementById("tiers-list");
  container.innerHTML = tiers
    .map(
      (t, i) => `
    <div class="repeat-row tier-row" data-idx="${i}">
      <input type="number" class="tier-qty" placeholder="Min quantity" value="${t.minQty}" />
      <input type="number" class="tier-discount" placeholder="Discount %" value="${t.discountPercent}" />
      <button class="btn btn-sm btn-danger remove-tier">✕</button>
    </div>
  `
    )
    .join("");
  container.querySelectorAll(".remove-tier").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const idx = Number(e.target.closest(".repeat-row").dataset.idx);
      const list = readTiers();
      list.splice(idx, 1);
      renderTiers(list);
    })
  );
}

function readTiers() {
  return Array.from(document.querySelectorAll("#tiers-list .repeat-row")).map((row) => ({
    minQty: Number(row.querySelector(".tier-qty").value) || 0,
    discountPercent: Number(row.querySelector(".tier-discount").value) || 0,
  }));
}

let currentImages = [];
let currentVideo = "";

function renderMedia(images, video) {
  currentImages = [...images];
  currentVideo = video;
  const grid = document.getElementById("media-grid");
  const imageThumbs = currentImages
    .map(
      (src, i) => `
    <div class="media-thumb${i === 0 ? " is-cover" : ""}" data-src="${escapeAttr(src)}" data-type="image">
      <img src="/${src}" />
      <button class="remove-btn" data-src="${escapeAttr(src)}">✕</button>
    </div>
  `
    )
    .join("");
  const videoThumb = currentVideo
    ? `
    <div class="media-thumb" data-src="${escapeAttr(currentVideo)}" data-type="video">
      <video src="/${currentVideo}" muted></video>
      <button class="remove-btn" data-src="${escapeAttr(currentVideo)}">✕</button>
    </div>
  `
    : "";
  grid.innerHTML = imageThumbs + videoThumb;

  grid.querySelectorAll(".remove-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const src = btn.dataset.src;
      if (src === currentVideo) {
        currentVideo = "";
      } else {
        currentImages = currentImages.filter((s) => s !== src);
      }
      renderMedia(currentImages, currentVideo);
    })
  );
}

async function handleUpload(productId, files) {
  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`/api/products/${encodeURIComponent(productId)}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      if (file.type.startsWith("video/")) {
        currentVideo = data.path;
      } else {
        currentImages.push(data.path);
      }
    } catch (e) {
      showToast(`Upload failed: ${e.message}`, "error");
    }
  }
  renderMedia(currentImages, currentVideo);
  showToast("Media uploaded — remember to Save Changes to keep it linked.");
}

// Live filter for the "Promoted products" checklist (editor is re-rendered
// via innerHTML, so listen at the document level).
document.addEventListener("input", (e) => {
  if (e.target.id !== "f-promoted-filter") return;
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll("#f-promoted .checkbox-label").forEach((l) => {
    l.style.display = !q || l.dataset.name.includes(q) ? "" : "none";
  });
});

function collectFormData(base) {
  const selectedCategories = Array.from(
    document.querySelectorAll("#f-categories input[type=checkbox]:checked")
  ).map((cb) => cb.value);
  return {
    name: document.getElementById("f-name").value.trim(),
    promoted: Array.from(document.querySelectorAll("#f-promoted input[type=checkbox]:checked")).map((cb) => cb.value),
    promotedMutual: document.getElementById("f-promoted-mutual").checked,
    featured: document.getElementById("f-featured").checked,
    bestSeller: document.getElementById("f-bestSeller").checked,
    category: selectedCategories[0] || "",
    categories: selectedCategories,
    purity: document.getElementById("f-purity").value.trim(),
    showPurity: document.getElementById("f-showPurity").checked,
    shortDescription: collapseRepeatedEmptyParagraphs(productDescQuillInstance.root.innerHTML),
    composition: document.getElementById("f-composition").value.split("\n").map((s) => s.trim()).filter(Boolean),
    uses: document.getElementById("f-uses").value.split("\n").map((s) => s.trim()).filter(Boolean),
    images: currentImages,
    video: currentVideo,
    variants: readVariants().filter((v) => v.size),
    wholesaleTiers: readTiers(),
    id: isNew ? document.getElementById("f-id").value.trim() : base.id,
  };
}

async function saveProduct(base) {
  const payload = collectFormData(base);
  try {
    if (isNew) {
      const result = await api("/api/products", { method: "POST", body: JSON.stringify(payload) });
      showToast("Product created.");
      isNew = false;
      currentId = result.id;
    } else {
      await api(`/api/products/${encodeURIComponent(base.id)}`, { method: "PUT", body: JSON.stringify(payload) });
      showToast("Changes saved.");
    }
    await loadProducts();
    openEditor(currentId);
  } catch (e) {
    showToast(e.message, "error");
  }
}

/* ---------- Arabic translation (per-product, trusted-peptide.com/ar) ---------- */

// Arabic-only image set (used when "Same images as English" is unticked).
let arImages = [];

function renderArImages() {
  const grid = document.getElementById("ar-media-grid");
  if (!grid) return;
  grid.innerHTML = arImages
    .map(
      (src, i) => `
    <div class="media-thumb${i === 0 ? " is-cover" : ""}">
      <img src="/${src}" />
      <button class="remove-btn" data-src="${escapeAttr(src)}">✕</button>
    </div>`
    )
    .join("") || '<p class="field-hint" style="margin:0;">No Arabic images yet — upload below.</p>';
  grid.querySelectorAll(".remove-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      arImages = arImages.filter((s) => s !== btn.dataset.src);
      renderArImages();
    })
  );
}

async function uploadArImages(productId, files) {
  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`/api/products/${encodeURIComponent(productId)}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      arImages.push(data.path);
    } catch (e) {
      showToast(`Upload failed: ${e.message}`, "error");
    }
  }
  renderArImages();
  showToast("Arabic images uploaded — click Save Arabic Translation to keep them.");
}

async function loadArabicTranslation(productId) {
  const nameInput = document.getElementById("ar-name");
  const compositionInput = document.getElementById("ar-composition");
  const usesInput = document.getElementById("ar-uses");
  const quillContainer = document.getElementById("ar-shortDescription-quill");
  if (!nameInput || !quillContainer) return; // isNew — section not rendered

  productDescQuillInstanceAr = new Quill("#ar-shortDescription-quill", {
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ color: [] }],
          [{ align: [] }, { direction: "rtl" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: () => productDescQuillImageHandler(productId, productDescQuillInstanceAr),
        },
      },
    },
  });

  let ar;
  try {
    ar = await api(`/api/products-ar/${encodeURIComponent(productId)}`);
  } catch (e) {
    ar = { name: "", shortDescription: "", composition: [], uses: [] };
  }

  nameInput.value = ar.name || "";
  nameInput.disabled = false;
  nameInput.placeholder = "";
  compositionInput.value = (ar.composition || []).join("\n");
  compositionInput.disabled = false;
  compositionInput.placeholder = "";
  usesInput.value = (ar.uses || []).join("\n");
  usesInput.disabled = false;
  usesInput.placeholder = "";
  productDescQuillInstanceAr.root.innerHTML = ar.shortDescription || "";

  // Images: shared with English unless this product has its own Arabic set.
  const sharedBox = document.getElementById("ar-shared-images");
  const ownWrap = document.getElementById("ar-own-images");
  arImages = ar.ownImages && Array.isArray(ar.images) ? [...ar.images] : [];
  sharedBox.checked = !ar.ownImages;
  ownWrap.hidden = sharedBox.checked;
  renderArImages();
  sharedBox.addEventListener("change", () => {
    ownWrap.hidden = sharedBox.checked;
    // Start the Arabic set from the English images, to edit from there.
    if (!sharedBox.checked && !arImages.length) { arImages = [...currentImages]; renderArImages(); }
  });
  document.getElementById("ar-upload-input").addEventListener("change", (e) => {
    uploadArImages(productId, [...e.target.files]);
    e.target.value = "";
  });

  // Arabic image from a link (server downloads it, same as the English photos).
  const arUrlInput = document.getElementById("ar-image-url-input");
  const addArFromLink = async () => {
    const url = arUrlInput.value.trim();
    if (!url) return;
    try {
      const data = await importImageFromUrl(productId, url, "");
      arImages.push(data.path);
      renderArImages();
      arUrlInput.value = "";
      showToast("Arabic image added — click Save Arabic Translation to keep it.");
    } catch (err) {
      showToast(`Could not add image: ${err.message}`, "error");
    }
  };
  document.getElementById("ar-image-url-btn").addEventListener("click", addArFromLink);
  arUrlInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); addArFromLink(); } });

  document.getElementById("ar-shortDescription-dedupe-btn").addEventListener("click", () => dedupeQuillBlocks(productDescQuillInstanceAr));
  document.getElementById("save-ar-btn").addEventListener("click", () => saveArabicTranslation(productId));
}

async function saveArabicTranslation(productId) {
  const payload = {
    name: document.getElementById("ar-name").value.trim(),
    shortDescription: collapseRepeatedEmptyParagraphs(productDescQuillInstanceAr.root.innerHTML),
    composition: document.getElementById("ar-composition").value.split("\n").map((s) => s.trim()).filter(Boolean),
    uses: document.getElementById("ar-uses").value.split("\n").map((s) => s.trim()).filter(Boolean),
  };
  if (!document.getElementById("ar-shared-images").checked) {
    if (!arImages.length) { showToast("Add at least one Arabic image, or tick \"Same images as English\".", "error"); return; }
    payload.ownImages = true;
    payload.images = arImages;
  }
  try {
    await api(`/api/products-ar/${encodeURIComponent(productId)}`, { method: "PUT", body: JSON.stringify(payload) });
    showToast("Arabic translation saved.");
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function deleteProduct(id) {
  if (!confirm("Delete this product? This cannot be undone.")) return;
  try {
    await api(`/api/products/${encodeURIComponent(id)}`, { method: "DELETE" });
    currentId = null;
    showToast("Product deleted.");
    await loadProducts();
    editorEl.innerHTML = '<div class="empty-editor">Select a product from the list, or create a new one.</div>';
  } catch (e) {
    showToast(e.message, "error");
  }
}

// Groups the textarea's lines into paragraphs: consecutive non-blank lines
// are joined into one paragraph, a blank line (or a "---" divider line)
// starts a new paragraph. This way pasting text that has one sentence per
// line (common when copying from Notepad) doesn't turn every sentence into
// its own paragraph with extra spacing on the live site.
function splitGuideBody(text) {
  const lines = text.split("\n").map((s) => s.trim());
  const paragraphs = [];
  let current = [];
  lines.forEach((line) => {
    if (!line || /^-{3,}$/.test(line)) {
      if (current.length) paragraphs.push(current.join(" "));
      current = [];
    } else {
      current.push(line);
    }
  });
  if (current.length) paragraphs.push(current.join(" "));
  return paragraphs;
}

/* ---------- Peptide Guide topic editor ---------- */
function renderPeptideTopicEditor(topic) {
  editorEl.innerHTML = `
    <div class="section-title">Topic Info</div>
    <div class="field-group">
      <label>Title</label>
      <input type="text" id="pt-title" value="${escapeAttr(topic.title)}" placeholder="e.g. Growth Hormone Secretagogues Explained" />
    </div>
    <div class="field-group">
      <label>Topic ID / URL slug ${isNew ? "" : "(locked)"}</label>
      <input type="text" id="pt-id" value="${escapeAttr(topic.id)}" ${isNew ? "" : "disabled"} placeholder="auto-generated from title if left blank" />
    </div>
    <div class="field-group">
      <label>Summary</label>
      <textarea id="pt-summary" placeholder="1-2 lines shown on the topic card">${escapeHtml(topic.summary)}</textarea>
    </div>

    <div class="section-title">Topic Body (blank line = new paragraph)</div>
    <div class="field-group">
      <textarea id="pt-body" rows="8">${escapeHtml((topic.body || []).join("\n"))}</textarea>
      <button type="button" class="btn btn-sm" id="pt-dedupe-btn" style="margin-top:8px;">Remove Duplicate Paragraphs</button>
    </div>

    <div class="section-title">Infographic &amp; Video</div>
    <div class="media-grid" id="media-grid"></div>
    <div class="upload-drop" id="upload-drop">
      ${isNew ? "Save the topic once first, then come back to upload media." : "Click to upload infographic images or a video for this topic"}
    </div>
    <input type="file" id="file-input" accept="image/*,video/*" multiple hidden ${isNew ? "disabled" : ""} />

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-topic-btn">${isNew ? "Create Topic" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-topic-btn">Delete Topic</button>'}
    </div>
  `;

  renderMedia(topic.images || [], topic.video || "");

  document.getElementById("save-topic-btn").addEventListener("click", () => savePeptideTopic(topic));
  const deleteBtn = document.getElementById("delete-topic-btn");
  if (deleteBtn) deleteBtn.addEventListener("click", () => deletePeptideTopic(topic.id));
  document.getElementById("pt-dedupe-btn").addEventListener("click", () => dedupeParagraphTextarea("pt-body"));

  if (!isNew) {
    const dropZone = document.getElementById("upload-drop");
    const fileInput = document.getElementById("file-input");
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => handlePeptideTopicUpload(topic.id, fileInput.files));
  }
}

async function handlePeptideTopicUpload(topicId, files) {
  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`/api/peptide-topics/${encodeURIComponent(topicId)}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      if (file.type.startsWith("video/")) {
        currentVideo = data.path;
      } else {
        currentImages.push(data.path);
      }
    } catch (e) {
      showToast(`Upload failed: ${e.message}`, "error");
    }
  }
  renderMedia(currentImages, currentVideo);
  showToast("Media uploaded — remember to Save Changes to keep it linked.");
}

function collectPeptideTopicFormData(base) {
  return {
    title: document.getElementById("pt-title").value.trim(),
    summary: document.getElementById("pt-summary").value.trim(),
    body: splitGuideBody(document.getElementById("pt-body").value),
    images: currentImages,
    video: currentVideo,
    id: isNew ? document.getElementById("pt-id").value.trim() : base.id,
  };
}

async function savePeptideTopic(base) {
  const payload = collectPeptideTopicFormData(base);
  try {
    if (isNew) {
      const result = await api("/api/peptide-topics", { method: "POST", body: JSON.stringify(payload) });
      showToast("Topic created.");
      isNew = false;
      currentId = result.id;
    } else {
      await api(`/api/peptide-topics/${encodeURIComponent(base.id)}`, { method: "PUT", body: JSON.stringify(payload) });
      showToast("Changes saved.");
    }
    await loadPeptideTopics();
    openEditor(currentId);
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function deletePeptideTopic(id) {
  if (!confirm("Delete this topic? This cannot be undone.")) return;
  try {
    await api(`/api/peptide-topics/${encodeURIComponent(id)}`, { method: "DELETE" });
    currentId = null;
    showToast("Topic deleted.");
    await loadPeptideTopics();
    editorEl.innerHTML = '<div class="empty-editor">Select a topic from the list, or create a new one.</div>';
  } catch (e) {
    showToast(e.message, "error");
  }
}

/* ---------- Gallery editor ---------- */
let galleryCurrentSrc = "";
let galleryCurrentThumbnail = "";

function renderGalleryEditor(item) {
  editorEl.innerHTML = `
    <div class="section-title">Gallery Item</div>
    <div class="field-row">
      <div class="field-group">
        <label>Type</label>
        <select id="gl-type">
          <option value="image" ${item.type !== "video" ? "selected" : ""}>Image</option>
          <option value="video" ${item.type === "video" ? "selected" : ""}>Video</option>
        </select>
      </div>
      <div class="field-group">
        <label>Gallery Item ID / slug ${isNew ? "" : "(locked)"}</label>
        <input type="text" id="gl-id" value="${escapeAttr(item.id)}" ${isNew ? "" : "disabled"} placeholder="auto-generated from caption if left blank" />
      </div>
    </div>
    <div class="field-group">
      <label>Caption</label>
      <input type="text" id="gl-caption" value="${escapeAttr(item.caption)}" placeholder="Shown under the item and in the lightbox" />
    </div>

    <div class="section-title" id="gl-media-title">Media</div>
    <div class="media-grid" id="media-grid"></div>
    <div class="upload-drop" id="upload-drop">
      ${isNew ? "Save the gallery item once first, then come back to upload media." : "Click to upload an image or video"}
    </div>
    <input type="file" id="file-input" accept="image/*,video/*" hidden ${isNew ? "disabled" : ""} />

    <div class="section-title" id="gl-thumb-title" ${item.type === "video" ? "" : "hidden"}>Thumbnail (optional — falls back to the video's own first frame)</div>
    <div class="media-grid" id="gl-thumb-grid" ${item.type === "video" ? "" : "hidden"}></div>
    <div class="upload-drop" id="gl-thumb-drop" ${item.type === "video" ? "" : "hidden"}>
      ${isNew ? "Save the gallery item once first, then come back to upload a thumbnail." : "Click to upload a poster/thumbnail image"}
    </div>
    <input type="file" id="gl-thumb-input" accept="image/*" hidden ${isNew ? "disabled" : ""} />

    <div class="section-title">Tag Products</div>
    <p class="modal-hint">Checked products will show this item in their Gallery section.</p>
    <div class="category-checkbox-list" id="gl-products">
      ${PRODUCTS
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          (p) =>
            `<label class="checkbox-label"><input type="checkbox" value="${escapeAttr(p.id)}" ${(item.productIds || []).includes(p.id) ? "checked" : ""} /> ${escapeHtml(p.name)}</label>`
        )
        .join("")}
    </div>

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-gallery-btn">${isNew ? "Create Gallery Item" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-gallery-btn">Delete Gallery Item</button>'}
    </div>
  `;

  galleryCurrentSrc = item.src || "";
  galleryCurrentThumbnail = item.thumbnail || "";

  function renderGalleryMedia() {
    const grid = document.getElementById("media-grid");
    if (!galleryCurrentSrc) {
      grid.innerHTML = "";
    } else if (item.type === "video") {
      grid.innerHTML = `<div class="media-thumb" data-src="${escapeAttr(galleryCurrentSrc)}"><video src="/${escapeAttr(galleryCurrentSrc)}" muted></video><button class="remove-btn">✕</button></div>`;
    } else {
      grid.innerHTML = `<div class="media-thumb" data-src="${escapeAttr(galleryCurrentSrc)}"><img src="/${escapeAttr(galleryCurrentSrc)}" /><button class="remove-btn">✕</button></div>`;
    }
    const removeBtn = grid.querySelector(".remove-btn");
    if (removeBtn) removeBtn.addEventListener("click", () => { galleryCurrentSrc = ""; renderGalleryMedia(); });
  }
  function renderGalleryThumb() {
    const grid = document.getElementById("gl-thumb-grid");
    grid.innerHTML = galleryCurrentThumbnail
      ? `<div class="media-thumb" data-src="${escapeAttr(galleryCurrentThumbnail)}"><img src="/${escapeAttr(galleryCurrentThumbnail)}" /><button class="remove-btn">✕</button></div>`
      : "";
    const removeBtn = grid.querySelector(".remove-btn");
    if (removeBtn) removeBtn.addEventListener("click", () => { galleryCurrentThumbnail = ""; renderGalleryThumb(); });
  }
  renderGalleryMedia();
  renderGalleryThumb();

  const typeSelect = document.getElementById("gl-type");
  const thumbTitle = document.getElementById("gl-thumb-title");
  const thumbGrid = document.getElementById("gl-thumb-grid");
  const thumbDrop = document.getElementById("gl-thumb-drop");
  typeSelect.addEventListener("change", () => {
    item.type = typeSelect.value;
    const isVideo = item.type === "video";
    thumbTitle.hidden = !isVideo;
    thumbGrid.hidden = !isVideo;
    thumbDrop.hidden = !isVideo;
    renderGalleryMedia();
  });

  async function uploadGalleryFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/gallery/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data.path;
  }

  if (!isNew) {
    const dropZone = document.getElementById("upload-drop");
    const fileInput = document.getElementById("file-input");
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", async () => {
      const file = fileInput.files[0];
      if (!file) return;
      try {
        galleryCurrentSrc = await uploadGalleryFile(file);
        renderGalleryMedia();
        showToast("Media uploaded — remember to Save Changes.");
      } catch (e) {
        showToast(`Upload failed: ${e.message}`, "error");
      }
    });

    thumbDrop.addEventListener("click", () => document.getElementById("gl-thumb-input").click());
    document.getElementById("gl-thumb-input").addEventListener("change", async () => {
      const input = document.getElementById("gl-thumb-input");
      const file = input.files[0];
      if (!file) return;
      try {
        galleryCurrentThumbnail = await uploadGalleryFile(file);
        renderGalleryThumb();
        showToast("Thumbnail uploaded — remember to Save Changes.");
      } catch (e) {
        showToast(`Upload failed: ${e.message}`, "error");
      }
    });
  }

  document.getElementById("save-gallery-btn").addEventListener("click", () => saveGalleryItem(item));
  const deleteBtn = document.getElementById("delete-gallery-btn");
  if (deleteBtn) deleteBtn.addEventListener("click", () => deleteGalleryItem(item.id));
}

function collectGalleryFormData(base) {
  const productIds = Array.from(document.querySelectorAll("#gl-products input[type=checkbox]:checked")).map((cb) => cb.value);
  return {
    type: document.getElementById("gl-type").value,
    caption: document.getElementById("gl-caption").value.trim(),
    src: galleryCurrentSrc,
    thumbnail: galleryCurrentThumbnail,
    productIds,
    id: isNew ? document.getElementById("gl-id").value.trim() : base.id,
  };
}

async function saveGalleryItem(base) {
  const payload = collectGalleryFormData(base);
  try {
    if (isNew) {
      const result = await api("/api/gallery", { method: "POST", body: JSON.stringify(payload) });
      showToast("Gallery item created.");
      isNew = false;
      currentId = result.id;
    } else {
      await api(`/api/gallery/${encodeURIComponent(base.id)}`, { method: "PUT", body: JSON.stringify(payload) });
      showToast("Changes saved.");
    }
    await loadGalleryItems();
    openEditor(currentId);
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function deleteGalleryItem(id) {
  if (!confirm("Delete this gallery item? This cannot be undone.")) return;
  try {
    await api(`/api/gallery/${encodeURIComponent(id)}`, { method: "DELETE" });
    currentId = null;
    showToast("Gallery item deleted.");
    await loadGalleryItems();
    editorEl.innerHTML = '<div class="empty-editor">Select a gallery item from the list, or create a new one.</div>';
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function moveGalleryItem(id, delta) {
  const list = [...GALLERY_ITEMS];
  const idx = list.findIndex((g) => g.id === id);
  const newIdx = idx + delta;
  if (idx === -1 || newIdx < 0 || newIdx >= list.length) return;
  [list[idx], list[newIdx]] = [list[newIdx], list[idx]];
  GALLERY_ITEMS = list;
  renderList();
  try {
    await api("/api/gallery/reorder", { method: "PUT", body: JSON.stringify({ order: list.map((g) => g.id) }) });
  } catch (e) {
    showToast(e.message, "error");
    await loadGalleryItems();
  }
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}
function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

/**
 * "Remove Duplicate Paragraphs" for the plain-paragraph editors (Tips &
 * Guide, Peptide Guide) — splits the textarea's lines back into
 * paragraphs the same way splitGuideBody() does when saving, drops any
 * paragraph whose trimmed text exactly repeats an earlier one, and
 * writes the deduplicated text back in. Content-authoring accidents
 * (pasting the same section twice) are the usual cause, not a rendering
 * bug — this lets the paragraph be fixed in one click instead of
 * hunting through a long textarea by eye.
 */
function dedupeParagraphTextarea(textareaId) {
  const textarea = document.getElementById(textareaId);
  const paragraphs = splitGuideBody(textarea.value);
  const seen = new Set();
  const deduped = [];
  let removedCount = 0;
  for (const para of paragraphs) {
    const key = para.trim();
    if (seen.has(key)) {
      removedCount++;
      continue;
    }
    seen.add(key);
    deduped.push(para);
  }
  textarea.value = deduped.join("\n\n");
  showToast(removedCount ? `Removed ${removedCount} duplicate paragraph${removedCount === 1 ? "" : "s"}.` : "No duplicate paragraphs found.");
}

/**
 * Same idea for the Blog editor's rich-text (Quill) body: walks the
 * editor's top-level blocks (paragraphs, headings) and removes any block
 * whose text content exactly repeats an earlier block — handles the
 * "pasted the same section twice" case for Quill-authored HTML the same
 * way dedupeParagraphTextarea() does for plain paragraph arrays.
 */
function dedupeQuillBlocks(quill) {
  const root = quill.root;
  const blocks = Array.from(root.children);
  const seen = new Set();
  let removedCount = 0;
  for (const block of blocks) {
    const key = (block.textContent || "").trim();
    if (key && seen.has(key)) {
      block.remove();
      removedCount++;
      continue;
    }
    if (key) seen.add(key);
  }
  showToast(removedCount ? `Removed ${removedCount} duplicate block${removedCount === 1 ? "" : "s"}.` : "No duplicate blocks found.");
}

/* ---------- Categories modal ---------- */
const categoriesModal = document.getElementById("categories-modal");
const categoriesListEl = document.getElementById("categories-list");
const newCategoryInput = document.getElementById("new-category-input");
const newCategoryParent = document.getElementById("new-category-parent");

// Sub-categories are stored as a path — "Parent › Child" or
// "Parent › Child › Grandchild" — so the storefront, filters and product
// data all keep working with plain category strings.
const SUBCAT_SEP = " › ";
const isSubcat = (c) => c.includes(SUBCAT_SEP);
const subcatDepth = (c) => c.split(SUBCAT_SEP).length - 1;
const subcatParent = (c) => c.split(SUBCAT_SEP).slice(0, -1).join(SUBCAT_SEP);
const subcatLabel = (c) => c.split(SUBCAT_SEP).pop();

// Main categories in their saved order, each followed (depth-first) by its
// sub-categories and their own children.
function orderedCategories() {
  const out = [];
  const walk = (parent) => {
    for (const c of CATEGORIES.filter((x) => (parent === null ? !isSubcat(x) : isSubcat(x) && subcatParent(x) === parent))) {
      out.push(c);
      walk(c);
    }
  };
  walk(null);
  // Orphans (parent renamed/deleted) still show, at the end.
  return out.concat(CATEGORIES.filter((c) => !out.includes(c)));
}

function renderCategoriesModal() {
  const current = newCategoryParent.value;
  // Any main category or first-level sub-category can be a parent (max 3 levels).
  newCategoryParent.innerHTML =
    `<option value="">— Main category —</option>` +
    orderedCategories()
      .filter((c) => subcatDepth(c) < 2)
      .map((c) => `<option value="${escapeAttr(c)}">Under: ${escapeHtml(c)}</option>`)
      .join("");
  newCategoryParent.value = CATEGORIES.includes(current) ? current : "";

  const usageCounts = {};
  for (const p of PRODUCTS) {
    const cats = Array.isArray(p.categories) && p.categories.length ? p.categories : [p.category].filter(Boolean);
    for (const c of cats) usageCounts[c] = (usageCounts[c] || 0) + 1;
  }

  categoriesListEl.innerHTML = CATEGORIES.length
    ? orderedCategories().map(
        (cat) => `
    <div class="category-row${isSubcat(cat) ? " is-subcat" : ""}" data-name="${escapeAttr(cat)}" style="--depth:${subcatDepth(cat)}">
      ${isSubcat(cat) ? `<span class="subcat-mark" aria-hidden="true">↳</span>` : ""}
      <input type="text" class="category-name-input" value="${escapeAttr(cat)}" />
      <span class="category-usage">${usageCounts[cat] || 0} product${usageCounts[cat] === 1 ? "" : "s"}</span>
      <button class="btn btn-sm rename-category-btn">Rename</button>
      <button class="btn btn-sm btn-danger delete-category-btn" ${usageCounts[cat] ? "disabled title=\"Reassign products first\"" : ""}>Delete</button>
    </div>
  `
      ).join("")
    : '<p style="color:var(--steel-blue); font-size:0.85rem;">No categories yet. Add one below.</p>';
}

async function openCategoriesModal() {
  categoriesModal.hidden = false;
  categoriesListEl.innerHTML = '<p style="color:var(--steel-blue); font-size:0.85rem;">Loading…</p>';
  try {
    await Promise.all([loadCategories(), loadProducts()]);
    renderCategoriesModal();
  } catch (e) {
    categoriesListEl.innerHTML = `<p style="color:var(--danger); font-size:0.85rem;">Failed to load categories: ${escapeHtml(e.message)}</p>`;
  }
}
function closeCategoriesModal() {
  categoriesModal.hidden = true;
}

document.getElementById("manage-categories-btn").addEventListener("click", openCategoriesModal);
document.getElementById("categories-modal-close").addEventListener("click", closeCategoriesModal);
categoriesModal.addEventListener("click", (e) => {
  if (e.target === categoriesModal) closeCategoriesModal();
});

categoriesListEl.addEventListener("click", async (e) => {
  const row = e.target.closest(".category-row");
  if (!row) return;
  const oldName = row.dataset.name;

  if (e.target.classList.contains("rename-category-btn")) {
    const newName = row.querySelector(".category-name-input").value.trim();
    if (!newName || newName === oldName) return;
    try {
      const result = await api(`/api/categories/${encodeURIComponent(oldName)}`, {
        method: "PUT",
        body: JSON.stringify({ name: newName }),
      });
      showToast(`Renamed to "${newName}"${result.productsUpdated ? ` — updated ${result.productsUpdated} product(s)` : ""}.`);
      await Promise.all([loadCategories(), loadProducts()]);
      renderCategoriesModal();
    } catch (err) {
      showToast(err.message, "error");
    }
  }

  if (e.target.classList.contains("delete-category-btn")) {
    if (e.target.disabled) return;
    if (!confirm(`Delete category "${oldName}"?`)) return;
    try {
      await api(`/api/categories/${encodeURIComponent(oldName)}`, { method: "DELETE" });
      showToast(`Deleted "${oldName}".`);
      await loadCategories();
      renderCategoriesModal();
    } catch (err) {
      showToast(err.message, "error");
    }
  }
});

document.getElementById("add-category-btn").addEventListener("click", async () => {
  // One name per line. Indent a line (spaces or tab) to nest it under the
  // unindented line above it — so a whole tree can be pasted at once:
  //   Eye Care
  //     Eye Cream
  //     Eye Mask
  const parent = newCategoryParent.value;
  const names = [];
  let group = null;
  for (const raw of newCategoryInput.value.split(/\r?\n/)) {
    const text = raw.trim();
    if (!text) continue;
    const indented = /^[ \t ]/.test(raw);
    const base = parent ? parent + SUBCAT_SEP : "";
    if (indented && group) names.push(group + SUBCAT_SEP + text);
    else { group = base + text; names.push(group); }
  }
  const toAdd = [...new Set(names)].filter((n) => !CATEGORIES.includes(n));
  const skipped = new Set(names).size - toAdd.length;
  if (!toAdd.length) { showToast(skipped ? "All of these already exist." : "Nothing to add."); return; }
  let added = 0;
  const failed = [];
  for (const name of toAdd) {
    try {
      await api("/api/categories", { method: "POST", body: JSON.stringify({ name }) });
      added++;
    } catch (err) {
      failed.push(`${name.split(SUBCAT_SEP).pop()}: ${err.message}`);
    }
  }
  if (!failed.length) newCategoryInput.value = "";
  const note = skipped ? ` (${skipped} already existed)` : "";
  showToast(failed.length ? `Added ${added}${note}. Failed: ${failed.join(" | ")}` : `Added ${added} categor${added === 1 ? "y" : "ies"}${note}.`, failed.length ? "error" : undefined);
  await loadCategories();
  renderCategoriesModal();
});

newCategoryInput.addEventListener("keydown", (e) => {
  // Enter adds; Shift+Enter starts a new line for bulk entry.
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("add-category-btn").click(); }
});

// On mobile, start on the list view (hide the empty editor pane until a
// product is selected or "New Product" is clicked). No-op on desktop.
if (window.innerWidth <= 860) {
  editorPaneWrap.classList.add("is-hidden-mobile");
}

/* ---------- Theme modal ---------- */
// Built-in palette ids/labels/swatches, kept in sync with js/theme.js's
// PALETTES list — needed here because theme.js itself isn't loaded in the
// admin panel (it drives the public site's theme toggle/picker UI).
const BUILTIN_PALETTES = [
  { id: "classic", label: "Classic", swatch: ["#021024", "#c9a15a"] },
  { id: "bloom", label: "Dusk Bloom", swatch: ["#1b3358", "#f1916d"] },
  { id: "ember", label: "Ember", swatch: ["#242f49", "#b51a2b"] },
  { id: "forest", label: "Forest", swatch: ["#0b2b26", "#8eb69b"] },
  { id: "tide", label: "Tide", swatch: ["#072e33", "#0f969c"] },
  { id: "crimson", label: "Crimson", swatch: ["#941020", "#f64547"] },
  { id: "royal", label: "Royal", swatch: ["#1f0270", "#e8a317"] },
  { id: "papaya", label: "Papaya", swatch: ["#4a2810", "#f57a1b"] },
  { id: "orbit", label: "Orbit Blue", swatch: ["#08152f", "#2457ff"] },
  { id: "neoncyan", label: "Neon Cyan", swatch: ["#043a7e", "#00f5ff"] },
  { id: "lakers", label: "Lakers", swatch: ["#3d0f78", "#fdb927"] },
  { id: "aurora", label: "Aurora", swatch: ["#022e21", "#cdfc8a"] },
  { id: "blueprint", label: "Blueprint", swatch: ["#00539c", "#ffd662"] },
  { id: "coastal", label: "Coastal", swatch: ["#062045", "#f2c4ce"] },
  { id: "citrusink", label: "Citrus Ink", swatch: ["#121212", "#ff6b1a"] },
  { id: "chocolate", label: "Chocolate", swatch: ["#231F26", "#DC9170"] },
  { id: "burgundy", label: "Burgundy", swatch: ["#621124", "#FC829B"] },
];

const themeModal = document.getElementById("theme-modal");
const themePaletteListEl = document.getElementById("theme-palette-list");
let currentThemeSettings = { defaultPaletteId: "classic", paletteLabels: {} };

function renderThemeModal() {
  themePaletteListEl.innerHTML = BUILTIN_PALETTES.map((p) => {
    const customLabel = currentThemeSettings.paletteLabels[p.id] || "";
    const isDefault = currentThemeSettings.defaultPaletteId === p.id;
    return `
    <div class="category-row" data-palette-id="${p.id}">
      <span class="palette-swatch" style="display:inline-block;width:20px;height:20px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg, ${p.swatch[0]}, ${p.swatch[1]});"></span>
      <input type="text" class="theme-label-input" placeholder="${p.label}" value="${escapeAttr(customLabel)}" style="flex:1;" />
      <label style="display:flex;align-items:center;gap:6px;font-size:0.82rem;white-space:nowrap;">
        <input type="radio" name="default-palette" class="theme-default-radio" ${isDefault ? "checked" : ""} />
        Default
      </label>
    </div>
  `;
  }).join("");
}

async function openThemeModal() {
  themeModal.hidden = false;
  themePaletteListEl.innerHTML = '<p style="color:var(--steel-blue); font-size:0.85rem;">Loading…</p>';
  try {
    const settings = await api("/api/theme-settings");
    currentThemeSettings = {
      defaultPaletteId: settings.defaultPaletteId || "classic",
      paletteLabels: settings.paletteLabels || {},
    };
    renderThemeModal();
  } catch (e) {
    themePaletteListEl.innerHTML = `<p style="color:var(--danger); font-size:0.85rem;">Failed to load theme settings: ${escapeHtml(e.message)}</p>`;
  }
}
function closeThemeModal() {
  themeModal.hidden = true;
}

document.getElementById("manage-theme-btn").addEventListener("click", openThemeModal);
document.getElementById("theme-modal-close").addEventListener("click", closeThemeModal);
themeModal.addEventListener("click", (e) => {
  if (e.target === themeModal) closeThemeModal();
});

document.getElementById("save-theme-btn").addEventListener("click", async () => {
  const paletteLabels = {};
  let defaultPaletteId = "classic";
  themePaletteListEl.querySelectorAll(".category-row").forEach((row) => {
    const id = row.dataset.paletteId;
    const label = row.querySelector(".theme-label-input").value.trim();
    if (label) paletteLabels[id] = label;
    if (row.querySelector(".theme-default-radio").checked) defaultPaletteId = id;
  });
  try {
    await api("/api/theme-settings", {
      method: "PUT",
      body: JSON.stringify({ defaultPaletteId, paletteLabels }),
    });
    showToast("Theme settings saved.");
    closeThemeModal();
  } catch (err) {
    showToast(err.message, "error");
  }
});

/* ---------- Category tile labels ("Shop by Category" icon grid) ---------- */
// Mirrors CATEGORY_SHORT_LABELS_STANDALONE in js/main.js — shown as each
// field's placeholder so the admin can see the current default before
// typing an override.
const CATEGORY_DEFAULT_LABELS = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "Weight Loss",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "Growth Support",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "Injury Recovery",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "Anti-Aging",
  "Brain, Cognitive Function, Mood & Sleep": "Brain Health",
  "Male Hormones, Fertility, Sexual Health & Tanning": "Sexual Health",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "Bioregulator Peptides",
  "Skin, Hair Care": "Skin Care",
  "Digestive & Gut Health": "Gut Health",
  "Accessories & Supplies": "Lab Supplies",
};

const categoryLabelsModal = document.getElementById("category-labels-modal");
const categoryLabelsListEl = document.getElementById("category-labels-list");
let currentCategoryTileLabels = {};
let currentCategoryLabelsAr = {};

function renderCategoryLabelsModal() {
  categoryLabelsListEl.innerHTML = CATEGORIES.map((cat) => {
    const value = currentCategoryTileLabels[cat] || "";
    const placeholder = CATEGORY_DEFAULT_LABELS[cat] || cat;
    const valueAr = currentCategoryLabelsAr[cat] || "";
    return `
    <div class="category-row" data-category="${escapeAttr(cat)}">
      <span style="font-size:0.85rem; color:var(--text-secondary);">${escapeHtml(cat)}</span>
      <input type="text" class="category-label-input" placeholder="${escapeAttr(placeholder)}" value="${escapeAttr(value)}" />
      <input type="text" class="category-label-ar-input" dir="rtl" placeholder="التسمية بالعربية" value="${escapeAttr(valueAr)}" />
    </div>
  `;
  }).join("");
}

async function openCategoryLabelsModal() {
  categoryLabelsModal.hidden = false;
  categoryLabelsListEl.innerHTML = '<p style="color:var(--steel-blue); font-size:0.85rem;">Loading…</p>';
  try {
    await loadCategories();
    currentCategoryTileLabels = await api("/api/category-tile-labels");
    currentCategoryLabelsAr = await api("/api/category-labels-ar");
    renderCategoryLabelsModal();
  } catch (e) {
    categoryLabelsListEl.innerHTML = `<p style="color:var(--danger); font-size:0.85rem;">Failed to load: ${escapeHtml(e.message)}</p>`;
  }
}
function closeCategoryLabelsModal() {
  categoryLabelsModal.hidden = true;
}

document.getElementById("manage-category-labels-btn").addEventListener("click", openCategoryLabelsModal);
document.getElementById("category-labels-modal-close").addEventListener("click", closeCategoryLabelsModal);
categoryLabelsModal.addEventListener("click", (e) => {
  if (e.target === categoryLabelsModal) closeCategoryLabelsModal();
});

document.getElementById("save-category-labels-btn").addEventListener("click", async () => {
  const labels = {};
  const labelsAr = {};
  categoryLabelsListEl.querySelectorAll(".category-row").forEach((row) => {
    const cat = row.dataset.category;
    const label = row.querySelector(".category-label-input").value.trim();
    if (label) labels[cat] = label;
    const labelAr = row.querySelector(".category-label-ar-input").value.trim();
    if (labelAr) labelsAr[cat] = labelAr;
  });
  try {
    await api("/api/category-tile-labels", { method: "PUT", body: JSON.stringify(labels) });
    await api("/api/category-labels-ar", { method: "PUT", body: JSON.stringify(labelsAr) });
    showToast("Category labels saved.");
    closeCategoryLabelsModal();
  } catch (err) {
    showToast(err.message, "error");
  }
});

/* ---------- Blog post editor (rich text via Quill) ---------- */
let blogQuillInstance = null;
let productDescQuillInstance = null;
let productDescQuillInstanceAr = null;

function renderBlogPostEditor(post) {
  editorEl.innerHTML = `
    <div class="section-title">Post Info</div>
    <div class="field-group">
      <label>Title</label>
      <input type="text" id="bp-title" value="${escapeAttr(post.title)}" placeholder="e.g. What Is BPC-157? A Research Overview" />
    </div>
    <div class="field-group">
      <label>Post ID / URL slug ${isNew ? "" : "(locked)"}</label>
      <input type="text" id="bp-id" value="${escapeAttr(post.id)}" ${isNew ? "" : "disabled"} placeholder="auto-generated from title if left blank" />
    </div>
    <div class="field-group">
      <label>Summary</label>
      <textarea id="bp-summary" placeholder="1-2 lines shown on the post card and in search results">${escapeHtml(post.summary)}</textarea>
    </div>

    <div class="section-title">Cover Image</div>
    <div class="media-grid" id="bp-cover-grid"></div>
    <div class="upload-drop" id="bp-cover-drop">
      ${isNew ? "Save the post once first, then come back to upload a cover image." : "Click to upload a cover image"}
    </div>
    <input type="file" id="bp-cover-input" accept="image/*" hidden ${isNew ? "disabled" : ""} />

    <div class="section-title">Post Body</div>
    <p class="modal-hint">Use the toolbar for bold, italic, underline, text color, headings, and links. Click the image icon to insert a photo or infographic anywhere in the article.</p>
    <div class="field-group">
      <div id="bp-quill-editor" style="background:#fff; border-radius:8px;"></div>
      <button type="button" class="btn btn-sm" id="bp-dedupe-btn" style="margin-top:8px;">Remove Duplicate Paragraphs</button>
    </div>

    <div class="section-title">Video (optional)</div>
    <div class="media-grid" id="bp-video-grid"></div>
    <div class="upload-drop" id="bp-video-drop">
      ${isNew ? "Save the post once first, then come back to upload a video." : "Click to upload a video for this post"}
    </div>
    <input type="file" id="bp-video-input" accept="video/*" hidden ${isNew ? "disabled" : ""} />

    <div class="section-title">Embed (optional)</div>
    <p class="modal-hint">Paste a single &lt;iframe&gt; embed code (e.g. an interactive guide page) — it's shown below the post body. Other tags are ignored for safety; only iframe is allowed here.</p>
    <div class="field-group">
      <textarea id="bp-embed" rows="3" placeholder='&lt;iframe src="/Guide/weight-loss-protocols.html" width="100%" height="1700" style="border:none;"&gt;&lt;/iframe&gt;'>${escapeHtml(post.embedHtml || "")}</textarea>
    </div>

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-post-btn">${isNew ? "Create Post" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-post-btn">Delete Post</button>'}
    </div>
  `;

  let bpCoverImage = post.coverImage || "";
  let bpVideo = post.video || "";

  function renderCoverGrid() {
    const grid = document.getElementById("bp-cover-grid");
    grid.innerHTML = bpCoverImage
      ? `<div class="media-thumb" data-src="${escapeAttr(bpCoverImage)}"><img src="/${bpCoverImage}" /><button class="remove-btn">✕</button></div>`
      : "";
    const removeBtn = grid.querySelector(".remove-btn");
    if (removeBtn) removeBtn.addEventListener("click", () => { bpCoverImage = ""; renderCoverGrid(); });
  }
  function renderVideoGrid() {
    const grid = document.getElementById("bp-video-grid");
    grid.innerHTML = bpVideo
      ? `<div class="media-thumb" data-src="${escapeAttr(bpVideo)}"><video src="/${bpVideo}" muted></video><button class="remove-btn">✕</button></div>`
      : "";
    const removeBtn = grid.querySelector(".remove-btn");
    if (removeBtn) removeBtn.addEventListener("click", () => { bpVideo = ""; renderVideoGrid(); });
  }
  renderCoverGrid();
  renderVideoGrid();

  // Quill toolbar: bold/italic/underline, text color, H2/H3, link, and an
  // image button that uploads through the post's own /upload endpoint
  // (same pattern as the other editors) and inserts the resulting URL at
  // the cursor — this is how infographic images get embedded inline.
  blogQuillInstance = new Quill("#bp-quill-editor", {
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ color: [] }],
          [{ align: [] }, { direction: "rtl" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: () => blogQuillImageHandler(post.id),
        },
      },
    },
  });
  blogQuillInstance.root.innerHTML = post.bodyHtml || "";

  document.getElementById("bp-dedupe-btn").addEventListener("click", () => dedupeQuillBlocks(blogQuillInstance));

  async function uploadBlogFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`/api/blog-posts/${encodeURIComponent(post.id)}/upload`, { method: "POST", body: formData });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data.path;
  }

  if (!isNew) {
    const coverDrop = document.getElementById("bp-cover-drop");
    const coverInput = document.getElementById("bp-cover-input");
    coverDrop.addEventListener("click", () => coverInput.click());
    coverInput.addEventListener("change", async () => {
      const file = coverInput.files[0];
      if (!file) return;
      try {
        bpCoverImage = await uploadBlogFile(file);
        renderCoverGrid();
        showToast("Cover image uploaded — remember to Save Changes.");
      } catch (e) {
        showToast(`Upload failed: ${e.message}`, "error");
      }
    });

    const videoDrop = document.getElementById("bp-video-drop");
    const videoInput = document.getElementById("bp-video-input");
    videoDrop.addEventListener("click", () => videoInput.click());
    videoInput.addEventListener("change", async () => {
      const file = videoInput.files[0];
      if (!file) return;
      try {
        bpVideo = await uploadBlogFile(file);
        renderVideoGrid();
        showToast("Video uploaded — remember to Save Changes.");
      } catch (e) {
        showToast(`Upload failed: ${e.message}`, "error");
      }
    });
  }

  document.getElementById("save-post-btn").addEventListener("click", () => saveBlogPost(post, () => bpCoverImage, () => bpVideo));
  const deleteBtn = document.getElementById("delete-post-btn");
  if (deleteBtn) deleteBtn.addEventListener("click", () => deleteBlogPost(post.id));
}

// Image button in the product description editors (English or Arabic —
// `quill` is the editor it was clicked in). Offers a link or a file; either
// way the image is stored in assets/descriptions/<id>/, apart from the
// product photos in assets/products/<id>/.
function productDescQuillImageHandler(productId, quill) {
  if (isNew) {
    showToast("Save the product once first, then come back to insert images.", "error");
    return;
  }
  const range = quill.getSelection(true);
  const insert = (path) => {
    quill.insertEmbed(range.index, "image", `/${path}`);
    quill.setSelection(range.index + 1);
  };
  const url = prompt("Paste an image link (https://…)\n\n— or leave empty and press OK to choose a file from your computer:", "");
  if (url === null) return; // cancelled
  if (url.trim()) {
    importImageFromUrl(productId, url.trim(), "desc")
      .then((data) => insert(data.path))
      .catch((e) => showToast(`Could not add image: ${e.message}`, "error"));
    return;
  }
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("kind", "desc");
      const res = await fetch(`/api/products/${encodeURIComponent(productId)}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      insert(data.path);
    } catch (e) {
      showToast(`Image upload failed: ${e.message}`, "error");
    }
  };
  input.click();
}

function blogQuillImageHandler(postId) {
  if (isNew) {
    showToast("Save the post once first, then come back to insert images.", "error");
    return;
  }
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`/api/blog-posts/${encodeURIComponent(postId)}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      const range = blogQuillInstance.getSelection(true);
      blogQuillInstance.insertEmbed(range.index, "image", `/${data.path}`);
      blogQuillInstance.setSelection(range.index + 1);
    } catch (e) {
      showToast(`Image upload failed: ${e.message}`, "error");
    }
  };
  input.click();
}

// Quill inserts a separate <p><br></p> for every blank line pressed
// while composing, so pressing Enter twice between entries (common when
// pasting or spacing things out) produces two/three stacked empty
// paragraphs instead of one — each rendering with its own margin. This
// collapses any run of 2+ consecutive empty paragraphs down to a single
// one before saving, without touching real content.
function collapseRepeatedEmptyParagraphs(html) {
  return html.replace(/(?:<p><br><\/p>\s*){2,}/gi, "<p><br></p>");
}

async function saveBlogPost(base, getCoverImage, getVideo) {
  const payload = {
    title: document.getElementById("bp-title").value.trim(),
    summary: document.getElementById("bp-summary").value.trim(),
    bodyHtml: collapseRepeatedEmptyParagraphs(blogQuillInstance.root.innerHTML),
    coverImage: getCoverImage(),
    video: getVideo(),
    embedHtml: document.getElementById("bp-embed").value.trim(),
    id: isNew ? document.getElementById("bp-id").value.trim() : base.id,
  };
  try {
    if (isNew) {
      const result = await api("/api/blog-posts", { method: "POST", body: JSON.stringify(payload) });
      showToast("Post created.");
      isNew = false;
      currentId = result.id;
    } else {
      await api(`/api/blog-posts/${encodeURIComponent(base.id)}`, { method: "PUT", body: JSON.stringify(payload) });
      showToast("Changes saved.");
    }
    await loadBlogPosts();
    openEditor(currentId);
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function deleteBlogPost(id) {
  if (!confirm("Delete this post? This cannot be undone.")) return;
  try {
    await api(`/api/blog-posts/${encodeURIComponent(id)}`, { method: "DELETE" });
    currentId = null;
    showToast("Post deleted.");
    await loadBlogPosts();
    editorEl.innerHTML = '<div class="empty-editor">Select a post from the list, or create a new one.</div>';
  } catch (e) {
    showToast(e.message, "error");
  }
}

Promise.all([loadCategories(), loadProducts(), loadPeptideTopics(), loadBlogPosts(), loadGalleryItems()]).catch((e) => showToast(e.message, "error"));
