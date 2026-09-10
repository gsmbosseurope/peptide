<?php
/**
 * trusted-peptide.com — Admin Panel (PHP) configuration TEMPLATE.
 *
 * Copy this file to `config.php` (which is git-ignored and never committed)
 * and set your own ADMIN_PASSWORD there. This example file is safe to keep
 * in version control since it contains no real secrets.
 */

// Login password for the admin panel. Change this to something private.
define('ADMIN_PASSWORD', 'ChangeThisPassword123!');

// Paths (relative to this file's parent — the site root, since /admin
// sits one folder below it).
define('ROOT_DIR', dirname(__DIR__));
define('DATA_FILE', ROOT_DIR . '/js/products-data.js');
define('GUIDES_DATA_FILE', ROOT_DIR . '/js/guides-data.js');
define('PRODUCTS_ASSETS_DIR', ROOT_DIR . '/assets/products');
define('GUIDES_ASSETS_DIR', ROOT_DIR . '/assets/guides');

define('MAX_UPLOAD_BYTES', 50 * 1024 * 1024); // 50MB — Hostinger shared hosting caps uploads; adjust if your plan allows more.

session_start();
