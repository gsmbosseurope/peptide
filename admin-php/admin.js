let PRODUCTS = [];
let CATEGORIES = [];
let GUIDES = [];
let currentId = null;
let isNew = false;
let activeTab = "products"; // "products" | "guides"

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

async function loadGuides() {
  GUIDES = await api("/api/guides");
  if (activeTab === "guides") renderList();
}

function renderList() {
  const term = searchBox.value.trim().toLowerCase();

  if (activeTab === "guides") {
    const filtered = GUIDES.filter((g) => !term || g.title.toLowerCase().includes(term)).sort((a, b) =>
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
  if (activeTab === "guides") {
    renderGuideEditor({ id: "", title: "", summary: "", body: [], images: [], video: "" });
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
  if (activeTab === "guides") {
    const guide = GUIDES.find((g) => g.id === id);
    if (guide) renderGuideEditor(guide);
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
  searchBox.value = "";
  searchBox.placeholder = tab === "guides" ? "Search guides…" : "Search products…";
  newItemBtn.textContent = tab === "guides" ? "+ New Guide" : "+ New Product";
  document.getElementById("manage-categories-btn").hidden = tab === "guides";
  document.getElementById("tab-products").classList.toggle("active", tab === "products");
  document.getElementById("tab-guides").classList.toggle("active", tab === "guides");
  editorEl.innerHTML = `<div class="empty-editor">Select ${
    tab === "guides" ? "a guide" : "a product"
  } from the list, or create a new one.</div>`;
  renderList();
}

document.getElementById("tab-products").addEventListener("click", () => switchTab("products"));
document.getElementById("tab-guides").addEventListener("click", () => switchTab("guides"));

function renderEditor(product) {
  editorEl.innerHTML = `
    <div class="section-title">Basic Info</div>
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
            return CATEGORIES.map(
              (c) =>
                `<label class="checkbox-label"><input type="checkbox" value="${escapeAttr(c)}" ${selected.includes(c) ? "checked" : ""} /> ${escapeHtml(c)}</label>`
            ).join("");
          })()}
        </div>
        <span class="field-hint">Select one or more. The first checked category is used as the primary one shown first. Manage the list via the "Categories" button above.</span>
      </div>
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
      <textarea id="f-shortDescription">${escapeHtml(product.shortDescription)}</textarea>
    </div>

    <div class="section-title">Composition (one per line)</div>
    <div class="field-group">
      <textarea id="f-composition" rows="4">${escapeHtml((product.composition || []).join("\n"))}</textarea>
    </div>

    <div class="section-title">Uses (one per line)</div>
    <div class="field-group">
      <textarea id="f-uses" rows="4">${escapeHtml((product.uses || []).join("\n"))}</textarea>
    </div>

    <div class="section-title">Photos &amp; Video</div>
    <div class="media-grid" id="media-grid"></div>
    <div class="upload-drop" id="upload-drop">
      ${isNew ? "Save the product once first, then come back to upload media." : "Click to upload images or a video for this product"}
    </div>
    <input type="file" id="file-input" accept="image/*,video/*" multiple hidden ${isNew ? "disabled" : ""} />

    <div class="section-title">Variants (size &amp; price)</div>
    <div id="variants-list"></div>
    <button class="btn btn-sm" id="add-variant-btn">+ Add size</button>

    <div class="section-title">Wholesale Discount Tiers</div>
    <div id="tiers-list"></div>
    <button class="btn btn-sm" id="add-tier-btn">+ Add tier</button>

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-btn">${isNew ? "Create Product" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-btn">Delete Product</button>'}
    </div>
  `;

  renderVariants(product.variants || []);
  renderTiers(product.wholesaleTiers || []);
  renderMedia(product.images || [], product.video || "");

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
  }
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

function collectFormData(base) {
  const selectedCategories = Array.from(
    document.querySelectorAll("#f-categories input[type=checkbox]:checked")
  ).map((cb) => cb.value);
  return {
    name: document.getElementById("f-name").value.trim(),
    category: selectedCategories[0] || "",
    categories: selectedCategories,
    purity: document.getElementById("f-purity").value.trim(),
    showPurity: document.getElementById("f-showPurity").checked,
    shortDescription: document.getElementById("f-shortDescription").value.trim(),
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

/* ---------- Guide (Tips & Guide) editor ---------- */
function renderGuideEditor(guide) {
  editorEl.innerHTML = `
    <div class="section-title">Guide Info</div>
    <div class="field-group">
      <label>Title</label>
      <input type="text" id="g-title" value="${escapeAttr(guide.title)}" placeholder="e.g. How to Store Your Peptides Correctly" />
    </div>
    <div class="field-group">
      <label>Guide ID / URL slug ${isNew ? "" : "(locked)"}</label>
      <input type="text" id="g-id" value="${escapeAttr(guide.id)}" ${isNew ? "" : "disabled"} placeholder="auto-generated from title if left blank" />
    </div>
    <div class="field-group">
      <label>Summary</label>
      <textarea id="g-summary" placeholder="1-2 lines shown on the guide card">${escapeHtml(guide.summary)}</textarea>
    </div>

    <div class="section-title">Article Body (blank line = new paragraph)</div>
    <div class="field-group">
      <textarea id="g-body" rows="8">${escapeHtml((guide.body || []).join("\n"))}</textarea>
    </div>

    <div class="section-title">Photos &amp; Video</div>
    <div class="media-grid" id="media-grid"></div>
    <div class="upload-drop" id="upload-drop">
      ${isNew ? "Save the guide once first, then come back to upload media." : "Click to upload images or a video for this guide"}
    </div>
    <input type="file" id="file-input" accept="image/*,video/*" multiple hidden ${isNew ? "disabled" : ""} />

    <div class="editor-actions">
      <button class="btn btn-primary" id="save-guide-btn">${isNew ? "Create Guide" : "Save Changes"}</button>
      ${isNew ? "" : '<button class="btn btn-danger" id="delete-guide-btn">Delete Guide</button>'}
    </div>
  `;

  renderMedia(guide.images || [], guide.video || "");

  document.getElementById("save-guide-btn").addEventListener("click", () => saveGuide(guide));
  const deleteBtn = document.getElementById("delete-guide-btn");
  if (deleteBtn) deleteBtn.addEventListener("click", () => deleteGuide(guide.id));

  if (!isNew) {
    const dropZone = document.getElementById("upload-drop");
    const fileInput = document.getElementById("file-input");
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => handleGuideUpload(guide.id, fileInput.files));
  }
}

async function handleGuideUpload(guideId, files) {
  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`/api/guides/${encodeURIComponent(guideId)}/upload`, { method: "POST", body: formData });
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

function collectGuideFormData(base) {
  return {
    title: document.getElementById("g-title").value.trim(),
    summary: document.getElementById("g-summary").value.trim(),
    body: splitGuideBody(document.getElementById("g-body").value),
    images: currentImages,
    video: currentVideo,
    id: isNew ? document.getElementById("g-id").value.trim() : base.id,
  };
}

async function saveGuide(base) {
  const payload = collectGuideFormData(base);
  try {
    if (isNew) {
      const result = await api("/api/guides", { method: "POST", body: JSON.stringify(payload) });
      showToast("Guide created.");
      isNew = false;
      currentId = result.id;
    } else {
      await api(`/api/guides/${encodeURIComponent(base.id)}`, { method: "PUT", body: JSON.stringify(payload) });
      showToast("Changes saved.");
    }
    await loadGuides();
    openEditor(currentId);
  } catch (e) {
    showToast(e.message, "error");
  }
}

async function deleteGuide(id) {
  if (!confirm("Delete this guide? This cannot be undone.")) return;
  try {
    await api(`/api/guides/${encodeURIComponent(id)}`, { method: "DELETE" });
    currentId = null;
    showToast("Guide deleted.");
    await loadGuides();
    editorEl.innerHTML = '<div class="empty-editor">Select a guide from the list, or create a new one.</div>';
  } catch (e) {
    showToast(e.message, "error");
  }
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}
function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

/* ---------- Categories modal ---------- */
const categoriesModal = document.getElementById("categories-modal");
const categoriesListEl = document.getElementById("categories-list");
const newCategoryInput = document.getElementById("new-category-input");

function renderCategoriesModal() {
  const usageCounts = {};
  for (const p of PRODUCTS) {
    const cats = Array.isArray(p.categories) && p.categories.length ? p.categories : [p.category].filter(Boolean);
    for (const c of cats) usageCounts[c] = (usageCounts[c] || 0) + 1;
  }

  categoriesListEl.innerHTML = CATEGORIES.length
    ? CATEGORIES.map(
        (cat) => `
    <div class="category-row" data-name="${escapeAttr(cat)}">
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
  const name = newCategoryInput.value.trim();
  if (!name) return;
  try {
    await api("/api/categories", { method: "POST", body: JSON.stringify({ name }) });
    newCategoryInput.value = "";
    showToast(`Added "${name}".`);
    await loadCategories();
    renderCategoriesModal();
  } catch (err) {
    showToast(err.message, "error");
  }
});

newCategoryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("add-category-btn").click();
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

Promise.all([loadCategories(), loadProducts(), loadGuides()]).catch((e) => showToast(e.message, "error"));
