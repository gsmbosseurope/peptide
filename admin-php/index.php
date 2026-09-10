<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/auth.php';
require_login_page();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>
    (function() {
      var stored = localStorage.getItem("peptidesLabsTheme");
      var theme = stored === "light" || stored === "dark" ? stored : (function() {
        var h = new Date().getHours();
        return h >= 6 && h < 18 ? "light" : "dark";
      })();
      document.documentElement.setAttribute("data-theme", theme);
    })();
  </script>
  <title>Trusted-Peptide Admin</title>
  <link rel="stylesheet" href="admin.css?v=<?php echo filemtime(__DIR__ . '/admin.css'); ?>" />
</head>
<body>
  <header class="admin-header">
    <div class="brand">Trusted<span>-Peptide</span> <small>Admin Panel</small></div>
    <div class="header-btns">
      <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Switch to light theme" title="Toggle light/dark theme">
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
      </button>
      <button class="btn" id="manage-categories-btn">Categories</button>
      <button class="btn btn-primary" id="new-item-btn">+ New Product</button>
      <a class="btn" href="logout.php">Log Out</a>
    </div>
  </header>

  <nav class="tab-bar">
    <button class="tab-btn active" id="tab-products" data-tab="products">Products</button>
    <button class="tab-btn" id="tab-guides" data-tab="guides">Tips &amp; Guide</button>
  </nav>

  <main class="admin-layout" id="admin-layout">
    <aside class="product-list-pane" id="product-list-pane">
      <input type="text" id="search-box" placeholder="Search products…" />
      <div id="product-list" class="product-list"></div>
    </aside>

    <div class="editor-pane-wrap" id="editor-pane-wrap">
      <button class="btn btn-sm back-to-list-btn" id="back-to-list-btn">← Back to list</button>
      <section class="editor-pane" id="editor-pane">
        <div class="empty-editor">Select a product from the list, or create a new one.</div>
      </section>
    </div>
  </main>

  <div id="categories-modal" class="modal-overlay" hidden>
    <div class="modal">
      <div class="modal-header">
        <h2>Manage Categories</h2>
        <button class="modal-close" id="categories-modal-close">✕</button>
      </div>
      <div class="modal-body">
        <div id="categories-list"></div>
        <div class="add-category-row">
          <input type="text" id="new-category-input" placeholder="e.g. Accessories & Supplies" />
          <button class="btn btn-primary btn-sm" id="add-category-btn">+ Add Category</button>
        </div>
      </div>
    </div>
  </div>

  <div id="toast" class="toast" hidden></div>

  <script src="admin.js?v=<?php echo filemtime(__DIR__ . '/admin.js'); ?>"></script>
</body>
</html>
