/**
 * Local admin panel server for trusted-peptide.com.
 *
 * Run with: npm install && npm start   (from inside the /admin folder)
 * Then open: http://localhost:4000
 *
 * Reads/writes ../js/products-data.js directly (the site's single source of
 * truth) and stores uploaded images/videos under ../assets/products/<id>/.
 * This is a LOCAL-ONLY tool — it edits files on this machine. To publish
 * changes to the live site, re-upload/deploy the project folder as usual.
 */

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "js", "products-data.js");
const ASSETS_DIR = path.join(ROOT, "assets", "products");
const GUIDES_DATA_FILE = path.join(ROOT, "js", "guides-data.js");
const GUIDES_ASSETS_DIR = path.join(ROOT, "assets", "guides");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(ROOT, "assets")));

/* ---------- Read products-data.js -> { PRODUCTS, CATEGORY_LIST } ---------- */
function loadData() {
  const code = fs.readFileSync(DATA_FILE, "utf8");
  const sandbox = {};
  const fn = new Function(
    "module",
    code + "\nmodule.exports = { PRODUCTS, CATEGORY_LIST: typeof CATEGORY_LIST !== 'undefined' ? CATEGORY_LIST : undefined };"
  );
  fn(sandbox);
  const exported = sandbox.exports || sandbox;
  const products = exported.PRODUCTS || [];
  // Back-compat: if this file predates CATEGORY_LIST, derive it once from products.
  const categoryList =
    exported.CATEGORY_LIST || [...new Set(products.map((p) => p.category).filter(Boolean))].sort();
  return { products, categoryList };
}

function loadProducts() {
  return loadData().products;
}

function loadCategories() {
  return loadData().categoryList;
}

/* ---------- Write { PRODUCTS, CATEGORY_LIST } -> products-data.js ---------- */
function serializeData(products, categoryList) {
  const header = `/**
 * trusted-peptide.com — Product Catalog
 * ------------------------------------------------------------
 * This file is managed by the local Admin Panel (/admin). You can still
 * edit it by hand if you prefer — just keep the same object shape.
 *
 * Field reference:
 *   id                 unique slug, used in URLs: product.html?id=...
 *   name               display name
 *   category           primary category, must match a name in CATEGORY_LIST below
 *   categories         optional array of extra category names, for products that
 *                      belong to more than one section (include the primary one too)
 *   purity             e.g. "99.9%" — shown as a lab badge
 *   showPurity         true/false — whether the purity badge is displayed on the site
 *   shortDescription   1-2 lines, shown on catalog cards
 *   composition        array of strings — ingredient / formulation bullets
 *   uses                array of strings — indication / use-case bullets
 *   images             array of image paths, first is the primary/cover image
 *   video              path or embed URL to an explainer video (optional)
 *   variants           array of { size, price } — price is EUR per unit at that size
 *   wholesaleTiers     array of { minQty, discountPercent }, evaluated to find
 *                      the highest qualifying tier for a given quantity
 *
 * CATEGORY_LIST is the managed list of top-level category names shown as
 * filter chips (products.html) and category cards (about.html). Edit it via
 * the Admin Panel's Categories tab — renaming a category there updates every
 * product that used the old name. A category can exist here with zero
 * products assigned yet (e.g. while you're preparing a new section).
 */

`;
  const body = `const CATEGORY_LIST = ${JSON.stringify(categoryList, null, 2)};\n\nconst PRODUCTS = ${JSON.stringify(products, null, 2)};\n\n// Back-compat alias — some code may still reference PRODUCT_CATEGORIES.\nconst PRODUCT_CATEGORIES = CATEGORY_LIST;\n`;
  return header + body;
}

function saveData(products, categoryList) {
  fs.writeFileSync(DATA_FILE, serializeData(products, categoryList), "utf8");
}

function saveProducts(products) {
  saveData(products, loadCategories());
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ---------- API: list/get/create/update/delete products ---------- */

app.get("/api/products", (req, res) => {
  try {
    res.json(loadProducts());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/products", (req, res) => {
  try {
    const products = loadProducts();
    const incoming = req.body;
    if (!incoming.id) incoming.id = slugify(incoming.name || "product");
    if (products.some((p) => p.id === incoming.id)) {
      return res.status(400).json({ error: `A product with id "${incoming.id}" already exists.` });
    }
    products.push(normalizeProduct(incoming));
    saveProducts(products);
    fs.mkdirSync(path.join(ASSETS_DIR, incoming.id), { recursive: true });
    res.json({ ok: true, id: incoming.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put("/api/products/:id", (req, res) => {
  try {
    const products = loadProducts();
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Product not found." });
    products[idx] = normalizeProduct({ ...products[idx], ...req.body, id: req.params.id });
    saveProducts(products);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/api/products/:id", (req, res) => {
  try {
    const products = loadProducts();
    const filtered = products.filter((p) => p.id !== req.params.id);
    saveProducts(filtered);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* ---------- API: manage the category list ---------- */

app.get("/api/categories", (req, res) => {
  try {
    res.json(loadCategories());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/categories", (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    if (!name) return res.status(400).json({ error: "Category name is required." });
    const { products, categoryList } = loadData();
    if (categoryList.includes(name)) {
      return res.status(400).json({ error: `Category "${name}" already exists.` });
    }
    const updated = [...categoryList, name];
    saveData(products, updated);
    res.json({ ok: true, categories: updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put("/api/categories/:name", (req, res) => {
  try {
    const oldName = req.params.name;
    const newName = String(req.body.name || "").trim();
    if (!newName) return res.status(400).json({ error: "New category name is required." });
    const { products, categoryList } = loadData();
    if (!categoryList.includes(oldName)) {
      return res.status(404).json({ error: `Category "${oldName}" not found.` });
    }
    if (newName !== oldName && categoryList.includes(newName)) {
      return res.status(400).json({ error: `Category "${newName}" already exists.` });
    }
    const updatedList = categoryList.map((c) => (c === oldName ? newName : c));
    const renameCat = (c) => (c === oldName ? newName : c);
    const updatedProducts = products.map((p) => {
      const hadCategories = Array.isArray(p.categories) && p.categories.length;
      const nextCategory = renameCat(p.category);
      const nextCategories = hadCategories ? p.categories.map(renameCat) : undefined;
      if (nextCategory === p.category && !hadCategories) return p;
      return { ...p, category: nextCategory, ...(hadCategories ? { categories: nextCategories } : {}) };
    });
    saveData(updatedProducts, updatedList);
    const productsUpdated = updatedProducts.filter(
      (p) => p.category === newName || (Array.isArray(p.categories) && p.categories.includes(newName))
    ).length;
    res.json({ ok: true, categories: updatedList, productsUpdated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/api/categories/:name", (req, res) => {
  try {
    const name = req.params.name;
    const { products, categoryList } = loadData();
    const inUse = products.filter(
      (p) => p.category === name || (Array.isArray(p.categories) && p.categories.includes(name))
    ).length;
    if (inUse > 0) {
      return res.status(400).json({
        error: `"${name}" is used by ${inUse} product(s). Reassign or delete those products first.`,
      });
    }
    const updated = categoryList.filter((c) => c !== name);
    saveData(products, updated);
    res.json({ ok: true, categories: updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

function normalizeProduct(p) {
  const toLines = (val) =>
    Array.isArray(val)
      ? val.filter(Boolean)
      : String(val || "")
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean);

  const categories = Array.isArray(p.categories) ? p.categories.filter(Boolean) : [];
  return {
    id: p.id,
    name: p.name || "",
    category: p.category || categories[0] || "",
    ...(categories.length > 1 ? { categories } : {}),
    purity: p.purity || "",
    showPurity: p.showPurity !== false,
    shortDescription: p.shortDescription || "",
    composition: toLines(p.composition),
    uses: toLines(p.uses),
    images: Array.isArray(p.images) ? p.images.filter(Boolean) : [],
    video: p.video || "",
    variants: Array.isArray(p.variants)
      ? p.variants.map((v) => ({ size: v.size, price: Number(v.price) || 0 }))
      : [],
    wholesaleTiers: Array.isArray(p.wholesaleTiers)
      ? p.wholesaleTiers.map((t) => ({
          minQty: Number(t.minQty) || 0,
          discountPercent: Number(t.discountPercent) || 0,
        }))
      : [],
  };
}

/* ---------- Guides (Tips & Guide) ---------- */
function loadGuides() {
  if (!fs.existsSync(GUIDES_DATA_FILE)) return [];
  const code = fs.readFileSync(GUIDES_DATA_FILE, "utf8");
  const sandbox = {};
  const fn = new Function("module", code + "\nmodule.exports = { GUIDES };");
  fn(sandbox);
  const exported = sandbox.exports || sandbox;
  return exported.GUIDES || [];
}

function serializeGuides(guides) {
  const header = `/**
 * trusted-peptide.com — Tips & Guide Articles
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Guides" tab. Independent of the
 * product catalog — general educational articles (storage, handling,
 * reconstitution, etc.), not tied to any specific product.
 *
 * Field reference:
 *   id          unique slug, used in URLs: tip.html?id=...
 *   title       article title
 *   summary     1-2 lines shown on the guide card in the listing
 *   body        array of paragraph strings — the article content
 *   images      array of image paths (optional)
 *   video       path or embed URL to a video (optional)
 */

`;
  const body = `const GUIDES = ${JSON.stringify(guides, null, 2)};\n`;
  return header + body;
}

function saveGuides(guides) {
  fs.writeFileSync(GUIDES_DATA_FILE, serializeGuides(guides), "utf8");
}

function normalizeGuide(g) {
  const toLines = (val) =>
    Array.isArray(val)
      ? val.filter(Boolean)
      : String(val || "")
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean);

  return {
    id: g.id,
    title: g.title || "",
    summary: g.summary || "",
    body: toLines(g.body),
    images: Array.isArray(g.images) ? g.images.filter(Boolean) : [],
    video: g.video || "",
  };
}

app.get("/api/guides", (req, res) => {
  try {
    res.json(loadGuides());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/guides", (req, res) => {
  try {
    const guides = loadGuides();
    const incoming = req.body;
    if (!incoming.id) incoming.id = slugify(incoming.title || "guide");
    if (guides.some((g) => g.id === incoming.id)) {
      return res.status(400).json({ error: `A guide with id "${incoming.id}" already exists.` });
    }
    guides.push(normalizeGuide(incoming));
    saveGuides(guides);
    fs.mkdirSync(path.join(GUIDES_ASSETS_DIR, incoming.id), { recursive: true });
    res.json({ ok: true, id: incoming.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put("/api/guides/:id", (req, res) => {
  try {
    const guides = loadGuides();
    const idx = guides.findIndex((g) => g.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Guide not found." });
    guides[idx] = normalizeGuide({ ...guides[idx], ...req.body, id: req.params.id });
    saveGuides(guides);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/api/guides/:id", (req, res) => {
  try {
    const guides = loadGuides();
    const filtered = guides.filter((g) => g.id !== req.params.id);
    saveGuides(filtered);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const guideUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const guideId = req.params.id;
      const dir = path.join(GUIDES_ASSETS_DIR, guideId);
      fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || "";
      const base = path.basename(file.originalname, ext);
      const safeBase = slugify(base) || "file";
      cb(null, `${safeBase}-${Date.now()}${ext}`);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024 },
});

app.post("/api/guides/:id/upload", guideUpload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded." });
  const relPath = `assets/guides/${req.params.id}/${req.file.filename}`;
  res.json({ ok: true, path: relPath });
});

/* ---------- File uploads (images / videos) ---------- */
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const productId = req.params.id;
      const dir = path.join(ASSETS_DIR, productId);
      fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || "";
      const base = path.basename(file.originalname, ext);
      const safeBase = slugify(base) || "file";
      const unique = `${safeBase}-${Date.now()}${ext}`;
      cb(null, unique);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB, generous for video
});

app.post("/api/products/:id/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded." });
  const relPath = `assets/products/${req.params.id}/${req.file.filename}`;
  res.json({ ok: true, path: relPath });
});

app.get("/api/products/:id/files", (req, res) => {
  const dir = path.join(ASSETS_DIR, req.params.id);
  if (!fs.existsSync(dir)) return res.json([]);
  const files = fs.readdirSync(dir).map((f) => `assets/products/${req.params.id}/${f}`);
  res.json(files);
});

app.delete("/api/products/:id/files/:filename", (req, res) => {
  try {
    const filePath = path.join(ASSETS_DIR, req.params.id, req.params.filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Trusted-Peptide admin panel running at http://localhost:${PORT}`);
  console.log(`On your phone (same Wi-Fi): http://<this-computer's-IP>:${PORT}`);
});
