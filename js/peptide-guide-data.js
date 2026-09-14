/**
 * trusted-peptide.com — Peptide Guide Topics
 * ------------------------------------------------------------
 * Managed by the Admin Panel (/admin), "Peptide Guide" tab. Standalone
 * topic articles shown on peptide-guide.php (English "Peptide Guide"
 * listing) — independent of the product catalog and of the Tips &
 * Guide (GUIDES) storage/handling articles.
 *
 * Field reference:
 *   id          unique slug, used in URLs: peptide-guide-topic.html?id=...
 *   title       topic title
 *   summary     1-2 lines shown on the topic card in the listing
 *   body        array of paragraph strings — the article content
 *   images      array of image paths (optional) — the infographic artwork
 *   video       path or embed URL to a video (optional)
 */

const PEPTIDE_TOPICS = [];
