/**
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

const GUIDES = [
  {
    "id": "how-to-store-peptides",
    "title": "How to Store Your Peptides Correctly استخدام السيرنغ",
    "summary": "Temperature, light, and reconstitution basics to preserve potency. بطريقة فنية",
    "body": [
      "Lyophilized (freeze-dried) peptides should be stored in a refrigerator between 2–8°C before reconstitution, away from direct light.",
      "Once reconstituted with bacteriostatic water, most peptides remain stable for 2–4 weeks when kept refrigerated — always check the specific product page for exact guidance.",
      "Avoid repeated freeze-thaw cycles, as this can degrade the peptide structure. Keep vials upright and protected from physical shock during storage and transport."
    ],
    "images": [],
    "video": ""
  },
  {
    "id": "how-to-use-a-syringe",
    "title": "How to Use a Syringe for Reconstitution",
    "summary": "A step-by-step overview of drawing and reconstituting safely.",
    "body": [
      "Always work on a clean, disinfected surface and sanitize the vial stopper with an alcohol wipe before inserting a needle.",
      "Draw the bacteriostatic water slowly into the syringe, then inject it gently down the inside wall of the vial to avoid disturbing the lyophilized powder too aggressively.",
      "Gently swirl (do not shake) the vial to dissolve the powder fully before drawing your research dose."
    ],
    "images": [],
    "video": ""
  }
];
