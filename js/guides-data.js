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
  },
  {
    "id": "weight-loss-metabolic-peptides-overview",
    "title": "Weight Loss & Metabolic Regulation — Peptide Overview",
    "summary": "A quick reference to the main GLP-1, GIP, and fat-metabolism peptides used in weight loss research.",
    "body": [
      "Semaglutide: A selective GLP-1 receptor agonist. It stimulates glucose-dependent insulin secretion, suppresses hepatic glucagon release, slows gastric motility and emptying, and sends direct satiety signals to the hypothalamic appetite center to significantly reduce caloric intake and regulate HbA1c levels.",
      "Tirzepatide: A dual GLP-1 and GIP (glucose-dependent insulinotropic polypeptide) receptor agonist. It combines central appetite suppression with enhanced insulin sensitivity in adipose tissue, promoting deep fat breakdown and cumulative weight loss at rates superior to single-hormone agonists.",
      "Retatrutide: An advanced triple agonist targeting GLP-1, GIP, and Glucagon receptors (GCGR) simultaneously. Glucagon elevates basal metabolic rate, hepatic fat oxidation, and resting energy expenditure, while GLP-1 and GIP suppress hunger and regulate blood glucose, making it highly potent for severe obesity and metabolic dysfunction-associated steatohepatitis (MASH).",
      "Mazdutide: A dual GLP-1 and Glucagon receptor agonist designed to balance appetite suppression with enhanced hepatic fatty acid oxidation, reducing overall fat mass and improving lipid profiles.",
      "Survodutide: A dual GLP-1/Glucagon receptor agonist targeting advanced clinical weight loss and metabolic liver disease by stimulating energy expenditure in peripheral tissues and burning deep visceral fat.",
      "Cagrilintide / Cagrilintide + Semaglutide: A long-acting synthetic amylin analogue. It delays nutrient absorption and promotes gastric fullness; when combined with Semaglutide, it targets hunger through two distinct biological pathways for synergistic, amplified weight loss results.",
      "HGH Fragment 176-191: The C-terminal region of human growth hormone (amino acids 176–191). It exclusively stimulates lipolysis and inhibits lipogenesis without affecting blood glucose levels, insulin sensitivity, or cellular proliferation.",
      "AOD9604: A modified, stabilized C-terminal growth hormone analogue (177–191) designed to stimulate fat release from adipocytes without elevating blood sugar, while also aiding in cartilage and joint repair.",
      "Adipotide / FTTP: A pro-apoptotic targeting peptide that selectively binds to blood vessels supplying white adipose tissue, cutting off blood supply to induce targeted adipocyte apoptosis and rapid fat tissue reduction.",
      "5-Amino-1MQ: A small molecule inhibitor of the enzyme nicotinamide N-methyltransferase (NNMT) in fat tissue. It elevates cellular NAD+ levels, accelerates basal metabolic rate, and drives fat loss while sparing lean muscle mass from catabolism.",
      "SLU-PP-322: An estrogen-related receptor (ERR) metabolic agonist that triggers skeletal muscle to consume fatty acids and produce energy, mimicking the physiological adaptations of endurance exercise without physical strain.",
      "Lipo-C / Lemon Bottle: Injectable localized solutions containing fat-dissolving agents and lymphatic circulation boosters used to break down and drain stubborn localized fat deposits (such as the submental area, abdomen, and flanks).",
      "L-Carnitine: A carrier amino acid that shuttles long-chain fatty acids into the mitochondrial matrix for ATP generation, supporting exercise performance and fat oxidation."
    ],
    "images": [],
    "video": ""
  },
  {
    "id": "recovery-tendon-joint-repair-anti-inflammatory-peptides",
    "title": "Recovery, Tendon/Joint Repair & Anti-Inflammatory Peptides",
    "summary": "A quick reference to the main tissue-repair, joint, and anti-inflammatory peptides used in recovery research.",
    "body": [
      "BPC-157: A pentadecapeptide derived from gastric juice. It stimulates vascular endothelial growth factor (VEGF) to promote angiogenesis, accelerating the healing of torn tendons, ligaments, and muscle fibers while repairing ulcerated and inflamed gastrointestinal lining.",
      "TB-500 (Thymosin Beta-4 Acetate): The synthetic functional domain of Thymosin Beta-4. It regulates cellular actin polymerization to enhance cell migration, improve soft tissue flexibility, reduce scar and fibrotic tissue formation, and accelerate systemic muscle and skin repair.",
      "BPC-157 + TB-500 Blends: A synergistic therapeutic combination blending the direct local angiogenic repair of BPC-157 with the systemic tissue-healing reach of TB-500 for rapid recovery from sports injuries and surgical trauma.",
      "Glow / KLOW80: Advanced multi-peptide protocols combining BPC-157, TB-500, and GHK-Cu (with or without KPV). This formulation simultaneously repairs deep tissue, stimulates collagen synthesis, resolves acute inflammation, and revitalizes skin elasticity.",
      "Cartalax: A short bioregulatory peptide (Ala-Glu-Asp) that targets chondrocytes directly, stimulating endogenous collagen synthesis to regenerate worn joint cartilage in osteoarthritis and spinal degenerative conditions.",
      "ARA-290 (Cibinetide): A non-erythropoietic peptide derived from erythropoietin that binds to the innate repair receptor (IRR) to suppress neuroinflammation, stimulate small nerve fiber regeneration, and alleviate chronic neuropathic pain.",
      "B7-33: A synthetic relaxin-derived peptide that halts and reverses pathological tissue fibrosis in the heart, lungs, and kidneys without causing severe blood pressure drops.",
      "KPV: A tripeptide derived from α-MSH that inhibits the NF-κB inflammatory pathway, functioning as a potent anti-inflammatory and antimicrobial agent for gut inflammation, acne, and psoriasis."
    ],
    "images": [],
    "video": ""
  }
];
