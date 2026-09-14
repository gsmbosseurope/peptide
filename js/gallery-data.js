/**
 * trusted-peptide.com — Gallery
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin-php), "Gallery" tab. Shown on
 * gallery.php / ar/gallery.php and, filtered by productIds, on each
 * tagged product's detail page (product.php / ar/product.php).
 *
 * Field reference:
 *   id           unique slug
 *   type         "image" | "video"
 *   src          path to the image, or path/embed URL to the video
 *   thumbnail    path to the poster image — required for type "video",
 *                unused for type "image"
 *   caption      shown under the item and in the lightbox
 *   productIds   array of product ids (from js/products-data.js) this item
 *                is tagged to — controls which product pages show it
 */

const GALLERY_ITEMS = [];
