/**
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

const CATEGORY_LIST = [
  "Weight Loss, Metabolic Regulation & Insulin Resistance",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
  "Brain, Cognitive Function, Mood & Sleep",
  "Male Hormones, Fertility, Sexual Health & Tanning",
  "Organ-Specific Bioregulators & Therapeutic Compounds",
  "Skin, Hair Care",
  "Accessories & Supplies"
];

const PRODUCTS = [
  {
    "id": "bpc-157",
    "name": "BPC-157",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Stable gastric pentadecapeptide studied for tissue and tendon recovery support",
    "composition": [
      "BPC-157",
      "----------",
      "Your body already makes a version of this",
      "Scientists just turned it into one of the most talked-about healing compounds in research 🧬",
      "It’s called BPC-157 — short for “Body Protection Compound",
      "It’s based on a protective protein found in your gut",
      "which is a big part of why it’s so interesting",
      "It’s not foreign chemistry, it’s built on something your body already uses to repair itself",
      "What it’s studied for is speeding up healing — specifically in the tissue that’s notoriously slow to recover",
      "tendons, ligaments, muscle and the gut lining",
      "The stuff that takes forever to heal on its own",
      "One of its main mechanisms is growing new blood vessels into damaged tissue",
      "And blood flow is what healing actually runs on",
      "more supply lines to the injury means faster repair",
      "That’s why it gets associated with stubborn injuries and gut issues",
      "the areas where normal healing tends to stall",
      "It’s one of the most researched repair compounds out there",
      "but quality and sourcing vary massively, and this is firmly research territory",
      "Would you try something like this for an old injury? 👇",
      "\\#recovery #healing #bpc #mobility #wellness #Gsm-Boss",
      "Synthetic pentadecapeptide (15 amino acid sequence)",
      "Lyophilized powder, no fillers or preservatives",
      "Reconstitute with bacteriostatic water for research use"
    ],
    "uses": [
      "Musculoskeletal and soft-tissue recovery research",
      "Gastrointestinal barrier studies",
      "Angiogenesis and wound-healing models"
    ],
    "images": [
      "assets/products/bpc-157/bpc-157-10-mg-1788830485123.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "2 mg",
        "price": 19
      },
      {
        "size": "5 mg",
        "price": 29
      },
      {
        "size": "10 mg",
        "price": 39
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "tb-500",
    "name": "TB-500",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Synthetic fragment of Thymosin Beta-4, studied for cell migration and repair pathways.",
    "composition": [
      "TB-500",
      "---------------",
      "Tells your body where to heal",
      "Most healing compounds speed up repair everywhere",
      "This one actually tells your body WHERE to heal 🧬",
      "TB-500 is a synthetic version of a protein you already make (Thymosin Beta-4)",
      "and its whole job is controlling how cells move",
      "Here's why that matters: an injury can't heal until repair cells physically travel to it",
      "TB-500 is studied to mobilise those cells and send them straight to the damage",
      "so they show up faster and in bigger numbers",
      "It also helps build new blood vessels into the area",
      "That's why the research is all about the slow",
      "stubborn injuries — tendons, ligaments, muscle tears",
      "the ones that take forever because blood flow to them is so poor",
      "It's basically the sidekick to BPC-157: one rebuilds locally",
      "this one directs the traffic.",
      "Have you got an injury that just won't heal? 👇",
      "\\#tb500 #tendons #peptide #jointpain #mobility #Gsm-Boss",
      "Synthetic peptide fragment, Thymosin Beta-4 analogue",
      "Lyophilized, single-vial format",
      "Cold-chain shipped, EU sourced"
    ],
    "uses": [
      "Cell migration and cytoskeletal research",
      "Soft-tissue and flexibility studies",
      "Combination research protocols with BPC-157"
    ],
    "images": [
      "assets/products/tb-500/tb-500-10-mg-1788829737114.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "2 mg",
        "price": 59
      },
      {
        "size": "5 mg",
        "price": 69
      },
      {
        "size": "10 mg",
        "price": 79
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ghk-cu",
    "name": "GHK-Cu",
    "category": "Skin, Hair Care",
    "categories": ["Skin, Hair Care", "Anti-Aging, Cellular Immunity & Mitochondrial Repair"],
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "You Know it for Skin But Also Rebuilds your Bones",
    "composition": [
      "GHK-Cu",
      "===========",
      "YOU KNOW IT FOR SKIN",
      "Also Rebuilds your Bones",
      "Everyone knows GHK-Cu as a \"skin peptide.\" But that's only half the story 🧬",
      "It's a tiny copper-carrying peptide your body makes, and it got famous in skincare for boosting collagen. But here's what people miss: collagen isn't just in your skin — it's the scaffold your bones are built on.",
      "And copper is essential for bone. Your body needs copper-dependent enzymes to cross-link collagen and turn it into strong, healthy bone — copper deficiency is actually linked to weaker bones. GHK-Cu's whole job is delivering copper where those repair enzymes need it.",
      "That's why it's been studied for bone remodelling — the process of breaking down old bone and building fresh bone in its place. Not just skin.",
      "Did you know the \"skin peptide\" could do this? 👇",
      "#bonehealth #collagen #biohacking #wellness #healthfacts #Gsm-Boss"
    ],
    "uses": [],
    "images": [
      "assets/products/ghk-cu/ghk-cu-10-mg-1788829764898.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "50 mg",
        "price": 19
      },
      {
        "size": "100 mg",
        "price": 29
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "glutathione",
    "name": "Glutathione",
    "category": "Skin, Hair Care",
    "categories": ["Skin, Hair Care", "Anti-Aging, Cellular Immunity & Mitochondrial Repair"],
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Master antioxidant tripeptide studied for oxidative stress reduction and skin tone evening.",
    "composition": [
      "Glutathione",
      "-------------",
      "Your Master Antioxidant",
      "Your body makes its own \"master antioxidant\"",
      "and modern life drains it fast 🧬",
      "It's called glutathione, and your cells produce it to neutralise free radicals",
      "the reactive molecules made by stress, pollution, alcohol, UV and ageing",
      "Those cause oxidative damage, basically your cells slowly rusting",
      "Why \"master\"? Because it doesn't just mop up damage itself",
      "it recharges your OTHER antioxidants (like vitamin C and E) so they keep working too",
      "It's the centre of the whole defence system",
      "It's also how your liver clears toxins, and a big reason it's linked",
      "to clearer, brighter, more even skin",
      "less oxidative damage showing on the outside",
      "The catch: levels drop with age, and get burned through faster by stress, bad sleep and alcohol",
      "When did you last think about your antioxidant levels? 👇",
      "\\#glutathione #skincare #antiaging #pep #detox #Gsm-Boss",
      "L-Glutathione (reduced form), tripeptide of glutamate/cysteine/glycine",
      "99.9% purity, EU certified batch testing",
      "Lyophilized, light-protected vial"
    ],
    "uses": [
      "Antioxidant and oxidative-stress research",
      "Skin brightening and even-tone research",
      "Hepatic detoxification support studies"
    ],
    "images": [
      "assets/products/glutathione/glutathione-10-mg-1788829797736.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "600 mg",
        "price": 39
      },
      {
        "size": "1500 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "semaglutide",
    "name": "Semaglutide - Ozempic",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "categories": ["Weight Loss, Metabolic Regulation & Insulin Resistance"],
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "GLP-1 receptor agonist analogue used extensively in metabolic and appetite-regulation research.",
    "composition": [
      "Synthetic GLP-1 receptor agonist analogue",
      "Lyophilized powder, precision-dosed vial",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Glycemic control research models",
      "Appetite regulation and satiety studies",
      "Metabolic rate research protocols"
    ],
    "images": [
      "assets/products/semaglutide/semaglutide-ozempic-10-mg-1788872124697.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5 mg",
        "price": 19
      },
      {
        "size": "10 mg",
        "price": 39
      },
      {
        "size": "15 mg",
        "price": 49
      },
      {
        "size": "20 mg",
        "price": 59
      },
      {
        "size": "30 mg",
        "price": 69
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ipamorelin",
    "name": "iPamorelin",
    "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
    "categories": ["Growth Hormone Secretagogues, Hypertrophy & Endurance"],
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Selective growth-hormone secretagogue studied for lean mass and recovery research.",
    "composition": [
      "Pentapeptide, selective GH secretagogue",
      "Lyophilized, single-use research vial",
      "Batch-tested for endotoxins and purity"
    ],
    "uses": [
      "Growth-hormone pulse research",
      "Lean body mass and recovery studies",
      "Sleep-quality research protocols"
    ],
    "images": [
      "assets/products/ipamorelin/ipamorelin-10-mg-1788871806294.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "2 mg",
        "price": 19
      },
      {
        "size": "5 mg",
        "price": 39
      },
      {
        "size": "10 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "melanotan-2",
    "name": "Melanotan II",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "categories": ["Male Hormones, Fertility, Sexual Health & Tanning"],
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Melanocortin analogue studied for pigmentation response research.",
    "composition": [
      "Synthetic alpha-MSH analogue",
      "Lyophilized powder, amber vial (light-sensitive)",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Melanocortin receptor research",
      "Pigmentation-response studies",
      "Appetite and libido pathway research"
    ],
    "images": [
      "assets/products/melanotan-2/melanotan-2-10-mg-1788831162389.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "cjc-1295",
    "name": "CJC-1295",
    "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
    "categories": ["Growth Hormone Secretagogues, Hypertrophy & Endurance"],
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Long-acting GHRH analogue frequently paired with Ipamorelin in stacked research protocols.",
    "composition": [
      "CJC-1295",
      "-------------",
      "Extends Your Own Growth Hormone",
      "Your body already makes growth hormone in short bursts",
      "this peptide is designed to extend your own natural release, not replace it 🧬",
      "The key distinction: injecting synthetic HGH floods your body with outside hormone",
      "and can shut down your own production",
      "CJC-1295 works differently — it's a GHRH analogue",
      "a copy of the upstream signal your brain uses to tell your pituitary",
      "to make its own GH. So it works with your machinery, not around it",
      "Its signature feature: natural GHRH gets broken down within minutes",
      "CJC-1295 was engineered to resist that, so it lasts far longer",
      "sustaining your natural GH release over a longer window instead of a quick spike",
      "Not a bigger flash, a longer signal",
      "It's often paired with Ipamorelin, since they hit different levers",
      "one raises the \"release more\" signal, the other triggers a clean pulse",
      "Did you know your body could be prompted like this? 👇",
      "\\#recovery #biohacking #Gsm-Boss",
      "Modified GHRH(1-29) analogue, no DAC",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Growth-hormone axis research",
      "Combination protocols with GH secretagogues",
      "Recovery and body-composition studies"
    ],
    "images": [
      "assets/products/cjc-1295/cjc-1295-10-mg-1788831193230.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "2 mg",
        "price": 59
      },
      {
        "size": "5 mg",
        "price": 69
      },
      {
        "size": "10 mg",
        "price": 79
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "retatrutide",
    "name": "RetaTrutide",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "categories": ["Weight Loss, Metabolic Regulation & Insulin Resistance"],
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Triple GIP/GLP-1/glucagon receptor agonist studied for metabolic rate and weight research.",
    "composition": [
      "Synthetic triple-agonist peptide (GIP/GLP-1/glucagon receptors)",
      "Lyophilized powder, precision-dosed vial",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Metabolic rate and energy expenditure research",
      "Weight and body-composition studies",
      "Glycemic control research models"
    ],
    "images": [
      "assets/products/retatrutide/retatrutide-10-mg-1788831219711.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5 mg",
        "price": 29
      },
      {
        "size": "10 mg",
        "price": 39
      },
      {
        "size": "15 mg",
        "price": 49
      },
      {
        "size": "20 mg",
        "price": 59
      },
      {
        "size": "30 mg",
        "price": 69
      },
      {
        "size": "40 mg",
        "price": 79
      },
      {
        "size": "50 mg",
        "price": 89
      },
      {
        "size": "60 mg",
        "price": 99
      },
      {
        "size": "100 mg",
        "price": 109
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "mots-c",
    "name": "MOTS-c",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "categories": ["Anti-Aging, Cellular Immunity & Mitochondrial Repair"],
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Mitochondrial-derived peptide studied for metabolic homeostasis and exercise-response research.",
    "composition": [
      "MOTS-c",
      "--------------",
      "CELLULAR",
      "a message from your mitochondria",
      "Your mitochondria can send messages to the rest of your cell",
      "and one of them is a peptide called MOTS-c 🧬",
      "Everyone learns mitochondria make energy and stops there",
      "But here's the surprising part: they have their own separate set of DNA",
      "and that DNA codes for signalling peptides",
      "MOTS-c is one of them. When your cell is under metabolic stress",
      "MOTS-c travels from the mitochondria to the nucleus — the cell's control centre",
      "and helps influence which genes switch on",
      "A message sent from your power plants to your command centre, telling the cell how to adapt",
      "The message is mostly about metabolism: it's studied for activating AMPK (a master energy regulator)",
      "improving insulin sensitivity, and helping cells handle glucose and stress",
      "And its levels drop as we age, which is why longevity researchers are so interested",
      "Did you know your mitochondria could do this? 👇",
      "\\#mitochondria #longevity #cellularhealth #biohacking #Gsm-Boss",
      "The exercise molecule",
      "Scientists found a molecule that mimics exercise",
      "and your body already makes it 🧬",
      "It's called MOTS-c, and here's the wild part: it's not made by your regular DNA",
      "It's encoded inside your mitochondria",
      "the tiny power plants in your cells",
      "Your mitochondria are basically sending chemical messages to the rest of your body",
      "And the message is: burn fuel, adapt, get metabolically fit",
      "It flips the same switch (AMPK) that exercise",
      "fasting and cold exposure do",
      "which is why people call it the \"exercise molecule",
      "Research links it to better insulin sensitivity and metabolic health",
      "and levels drop as we age — which might be part of why metabolism slows down over time",
      "It's not a replacement for actually training",
      "and the human research is still early",
      "But the idea that your mitochondria make an \"exercise signal\" is kind of incredible",
      "Did you know your cells made something like this? 👇",
      "#metabolism #mitochondria #biohacking #longevity #Gsmn-Boss",
      "Synthetic mitochondrial-derived peptide (16 amino acids)",
      "Lyophilized, single-vial format",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Mitochondrial and metabolic homeostasis research",
      "Insulin sensitivity studies",
      "Exercise-response and aging research"
    ],
    "images": [
      "assets/products/mots-c/mots-c-40-mg-1788829841227.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10 mg",
        "price": 99
      },
      {
        "size": "15 mg",
        "price": 109
      },
      {
        "size": "20 mg",
        "price": 119
      },
      {
        "size": "40 mg",
        "price": 139
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "pt-141",
    "name": "PT-141",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "categories": ["Male Hormones, Fertility, Sexual Health & Tanning"],
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Melanocortin receptor agonist (Bremelanotide) studied for libido and arousal-pathway research.",
    "composition": [
      "PT-141",
      "-------------",
      "NEUROSCIENCE",
      "Desire starts in the brain",
      "Every treatment you’ve heard of for low libido works on blood flow",
      "This one works on the brain 🧬",
      "PT-141 was discovered by accident",
      "researchers were studying a tanning peptide",
      "and noticed an unexpected effect in trials",
      "Here’s the thing most people don’t realise",
      "the famous ED meds are vascular",
      "They improve blood flow so a physical response can happen",
      "But they do nothing for actual desire",
      "If the wanting isn’t there, blood flow doesn’t fix it",
      "PT-141 works further upstream",
      "activating melanocortin receptors in the hypothalamus",
      "the part of your brain that drives arousal and motivation",
      "It targets the signal itself, not the plumbing",
      "Which is why it’s the only one approved for low desire rather than physical dysfunction.",
      "Desire is neurological before it’s physical",
      "Did you know that? 👇",
      "\\#neuroscience #peptide #healthtok #libido #healthfacts #Gsm-Boss",
      "Synthetic melanocortin receptor agonist (Bremelanotide)",
      "Lyophilized powder, amber vial",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Melanocortin receptor and libido-pathway research",
      "Central nervous system arousal studies",
      "Combination protocols with Melanotan II"
    ],
    "images": [
      "assets/products/pt-141/pt-141-mg-1788829897107.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "nad-plus",
    "name": "NAD+",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "categories": ["Anti-Aging, Cellular Immunity & Mitochondrial Repair"],
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Nicotinamide adenine dinucleotide, studied for cellular energy metabolism and longevity research.",
    "composition": [
      "NAD+",
      "-----------------",
      "Recharges your cells",
      "There's a molecule inside every cell that powers your energy",
      "and repairs your DNA — and it runs low as you age 🧬",
      "It's called NAD+, and every cell uses it",
      "Think of it as a rechargeable currency your cells spend to turn food into energy",
      "and to run the repair crews that fix your DNA",
      "The problem: your NAD+ levels drop as you get older —",
      "by middle age you have a fraction of what you had young",
      "As it falls, cells make energy less efficiently, DNA repair slows",
      "and your mitochondria start to struggle",
      "That decline is now seen as one of the core threads of aging",
      "The catch: you can't just swallow NAD+ — it's too big and unstable to reach your cells",
      "So research focuses on precursors like NMN and NR — smaller building blocks your body turns into NAD+",
      "Did you know your cells ran on something like this? 👇",
      "#longevity #cellularhealth #nad #biohacking #healthfacts #Gsm-Boss",
      "Nicotinamide adenine dinucleotide (oxidized form)",
      "Lyophilized powder, light-protected vial",
      "EU certified batch testing"
    ],
    "uses": [
      "Cellular energy metabolism research",
      "Mitochondrial function and longevity studies",
      "Oxidative stress research models"
    ],
    "images": [
      "assets/products/nad-plus/nad-1000-mg-1788830635857.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "100 mg",
        "price": 19
      },
      {
        "size": "300 mg",
        "price": 29
      },
      {
        "size": "500 mg",
        "price": 39
      },
      {
        "size": "1000 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 21
      }
    ]
  },
  {
    "id": "lemon-bottle",
    "name": "Lemon Bottle",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "categories": ["Weight Loss, Metabolic Regulation & Insulin Resistance"],
    "purity": "99%",
    "showPurity": false,
    "shortDescription": "Fat-dissolving compound blend studied for localized lipolysis and body-contouring research.",
    "composition": [
      "Proprietary lipolytic compound blend",
      "Sterile, ready-to-use solution",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Localized lipolysis research",
      "Body-contouring study protocols",
      "Subcutaneous fat-reduction models"
    ],
    "images": [
      "assets/products/lemon-bottle/lemon-bottle-10-mg-1788830710093.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 39
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "kiss-peptin",
    "name": "Kiss-Peptin",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "categories": ["Male Hormones, Fertility, Sexual Health & Tanning"],
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Kisspeptin analogue studied for reproductive-axis and hormonal signaling research.",
    "composition": [
      "KissPeptin",
      "---------------",
      "The master switch of your hormones",
      "There's a single molecular switch that has to fire before your body makes almost any reproductive hormone 🧬",
      "Your hormone system runs on a chain of command, and kisspeptin sits right at the top",
      "When it fires, it triggers GnRH ➔ which triggers LH and FSH ➔ which drive testosterone and oestrogen",
      "Nothing downstream happens until kisspeptin fires first",
      "That's why it's called the master switch — it's the ignition for the whole cascade",
      "And it was only discovered in this role in the early 2000s",
      "which totally reshaped how scientists understand the system",
      "Because it sits at the very top, it's being studied for fertility",
      "puberty disorders, and cases where that natural switch isn't firing right",
      "working with your body's own signalling instead of flooding it with hormones",
      "Did you know one switch controlled all of it? 👇 \\#kisspeptin #fertility #endocrinology #biohacking",
      "Synthetic kisspeptin analogue",
      "Lyophilized, single-vial format",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Reproductive-axis (HPG) signaling research",
      "GnRH pulse-response studies",
      "Hormonal regulation research models"
    ],
    "images": [
      "assets/products/kiss-peptin/kiss-peptin-10-mg-1788831959306.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5 mg",
        "price": 39
      },
      {
        "size": "10 mg",
        "price": 49
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 10
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "klow-blend",
    "name": "KLOW",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Combination blend of BPC-157 10mg, GHK-Cu 50mg, TB-500 10mg, and KPV 10mg for stacked recovery research.",
    "composition": [
      "BPC-157 10mg",
      "GHK-Cu 50mg",
      "TB-500 10mg",
      "KPV 10mg",
      "Lyophilized combination blend, single vial"
    ],
    "uses": [
      "Stacked tissue-repair and recovery research",
      "Combined anti-inflammatory pathway studies",
      "Dermal and musculoskeletal research protocols"
    ],
    "images": [
      "assets/products/klow-blend/klow-80-mg-1788830753081.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "80mg",
        "price": 99
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "epithalon",
    "name": "Epithalon",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "purity": "99.9%",
    "showPurity": false,
    "shortDescription": "Synthetic tetrapeptide studied for telomerase activation and longevity research.",
    "composition": [
      "Synthetic tetrapeptide (Ala-Glu-Asp-Gly)",
      "Lyophilized powder, single-vial format",
      "EU certified batch testing"
    ],
    "uses": [
      "Telomerase activation research",
      "Circadian rhythm and pineal gland studies",
      "Cellular aging and longevity research"
    ],
    "images": [
      "assets/products/epithalon/epithalon-50-mg-1788830789876.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 28
      },
      {
        "size": "50mg",
        "price": 95
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "aod-9604",
    "name": "AOD-9604",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "Modified fragment of human growth hormone studied for lipolysis research without effect on blood sugar/IGF-1.",
    "composition": [
      "Modified HGH fragment (176-191 analogue)",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Lipolysis and fat-metabolism research",
      "Cartilage-repair research models",
      "Body-composition studies"
    ],
    "images": [
      "assets/products/aod-9604/aod-9604-10-mg-1788830805411.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 26
      },
      {
        "size": "10mg",
        "price": 44
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "5-amino-1mq",
    "name": "5-Amino-1MQ",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Small-molecule NNMT inhibitor studied for adipocyte metabolism and weight research.",
    "composition": [
      "Small-molecule NNMT inhibitor",
      "Lyophilized powder or capsule format",
      "EU sourced, certified purity"
    ],
    "uses": [
      "NNMT enzyme inhibition research",
      "Adipocyte metabolism and weight studies",
      "Cellular energy regulation research"
    ],
    "images": [
      "assets/products/5-amino-1mq/5-amino-1mq-50-mg-1788830817311.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "50mg",
        "price": 45
      },
      {
        "size": "100mg",
        "price": 78
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "selank",
    "name": "Selank",
    "category": "Brain, Cognitive Function, Mood & Sleep",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Synthetic heptapeptide analogue of Tuftsin studied for anxiolytic and cognitive-function research.",
    "composition": [
      "Synthetic heptapeptide (Tuftsin analogue)",
      "Lyophilized powder, single-vial format",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Anxiolytic pathway research",
      "Cognitive function and neuroplasticity studies",
      "Stress-response research models"
    ],
    "images": [
      "assets/products/selank/selank-10-mg-1788871831235.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 30
      },
      {
        "size": "10mg",
        "price": 52
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "semax",
    "name": "Semax",
    "category": "Brain, Cognitive Function, Mood & Sleep",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Synthetic heptapeptide analogue of ACTH(4-10) studied for neuroprotective and cognitive research.",
    "composition": [
      "Synthetic heptapeptide (ACTH(4-10) analogue)",
      "Lyophilized powder, single-vial format",
      "EU certified batch testing"
    ],
    "uses": [
      "Neuroprotective pathway research",
      "Cognitive performance and BDNF studies",
      "Neurotrophic factor research models"
    ],
    "images": [
      "assets/products/semax/semax-10-mg-1788830921656.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 30
      },
      {
        "size": "10mg",
        "price": 52
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ss-31",
    "name": "SS-31",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "Mitochondria-targeted tetrapeptide (Elamipretide) studied for oxidative stress and mitochondrial research.",
    "composition": [
      "Mitochondria-targeted synthetic tetrapeptide (Elamipretide)",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Mitochondrial dysfunction research",
      "Oxidative stress reduction studies",
      "Cellular energy and aging research"
    ],
    "images": [
      "assets/products/ss-31/ss-31-mg-1788830930763.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 38
      },
      {
        "size": "50mg",
        "price": 145
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "snap-8",
    "name": "SNAP-8",
    "category": "Skin, Hair Care",
    "categories": ["Skin, Hair Care", "Organ-Specific Bioregulators & Therapeutic Compounds"],
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Octapeptide studied for topical wrinkle-reduction and neuromuscular signaling research.",
    "composition": [
      "Synthetic octapeptide (SNAP-25 fragment analogue)",
      "Lyophilized powder or topical-grade solution",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Topical wrinkle-reduction research",
      "Neuromuscular signaling studies",
      "Cosmetic dermal formulation research"
    ],
    "images": [
      "assets/products/snap-8/snap-8-10-mg-1788830939291.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "50mg",
        "price": 34
      },
      {
        "size": "100mg",
        "price": 58
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "oxytocin",
    "name": "Oxytocin",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Nonapeptide hormone studied for social-bonding, mood, and neuroendocrine research.",
    "composition": [
      "Synthetic nonapeptide hormone",
      "Lyophilized powder, light-protected vial",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Social-bonding and mood pathway research",
      "Neuroendocrine signaling studies",
      "Stress-response research models"
    ],
    "images": [
      "assets/products/oxytocin/oxytocin-10-mg-1788830949259.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 24
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "cerebrolysin",
    "name": "Cerebrolysin",
    "category": "Brain, Cognitive Function, Mood & Sleep",
    "purity": "99%",
    "showPurity": false,
    "shortDescription": "Neuropeptide preparation studied for neurotrophic and cognitive-recovery research.",
    "composition": [
      "Low-molecular-weight neuropeptide preparation",
      "Sterile solution, single-use ampoule",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Neurotrophic factor research",
      "Cognitive-recovery study protocols",
      "Neuroplasticity research models"
    ],
    "images": [
      "assets/products/cerebrolysin/cerebrolysin-10-mg-1788830973674.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5ml",
        "price": 42
      },
      {
        "size": "10ml",
        "price": 75
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ara-290",
    "name": "ARA-290",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Erythropoietin-derived peptide studied for neuropathic and anti-inflammatory research.",
    "composition": [
      "Synthetic erythropoietin-derived peptide",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Neuropathic pain-pathway research",
      "Anti-inflammatory signaling studies",
      "Tissue-protective research models"
    ],
    "images": [
      "assets/products/ara-290/ara-290-10-mg-1788830992495.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 40
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "dsip",
    "name": "DSIP",
    "category": "Brain, Cognitive Function, Mood & Sleep",
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "Delta sleep-inducing peptide studied for sleep-regulation and stress-response research.",
    "composition": [
      "Synthetic delta sleep-inducing peptide (DSIP)",
      "Lyophilized powder, single-vial format",
      "EU certified batch testing"
    ],
    "uses": [
      "Sleep-regulation pathway research",
      "Circadian rhythm studies",
      "Stress and cortisol-response research"
    ],
    "images": [
      "assets/products/dsip/dsip-10-mg-1788831003791.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 26
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "dihexa",
    "name": "DiHexa",
    "category": "Brain, Cognitive Function, Mood & Sleep",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Small-molecule nootropic studied for synaptogenesis and cognitive-enhancement research.",
    "composition": [
      "Small-molecule synthetic nootropic compound",
      "Lyophilized powder or capsule format",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Synaptogenesis and neuroplasticity research",
      "Cognitive-enhancement study protocols",
      "HGF/c-Met pathway research models"
    ],
    "images": [
      "assets/products/dihexa/dihexa-10-mg-1788831013373.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "50mg",
        "price": 48
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ll-37",
    "name": "LL-37",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Human cathelicidin antimicrobial peptide studied for immune and wound-healing research.",
    "composition": [
      "Synthetic human cathelicidin peptide (LL-37)",
      "Lyophilized, single-vial format",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Antimicrobial and innate-immune research",
      "Wound-healing pathway studies",
      "Inflammatory signaling research models"
    ],
    "images": [
      "assets/products/ll-37/ll-37-5-mg-1788831023045.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 36
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "follistatin",
    "name": "Follistatin",
    "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Myostatin-inhibiting glycoprotein studied for muscle-growth and body-composition research.",
    "composition": [
      "Recombinant follistatin glycoprotein (Follistatin-344)",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Myostatin-inhibition pathway research",
      "Muscle-growth and hypertrophy studies",
      "Body-composition research models"
    ],
    "images": [
      "assets/products/follistatin/fullistatin-1-mg-1788831034167.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "1mg",
        "price": 85
      },
      {
        "size": "2mg",
        "price": 150
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "caqk",
    "name": "CAQK",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Tetrapeptide studied for targeted delivery to injured brain and spinal cord tissue in research models.",
    "composition": [
      "Synthetic tetrapeptide (Cys-Ala-Gln-Lys)",
      "Lyophilized powder, single-vial format",
      "EU certified batch testing"
    ],
    "uses": [
      "CNS injury-targeting research",
      "Neural tissue-repair pathway studies",
      "Drug-delivery targeting research models"
    ],
    "images": [
      "assets/products/caqk/caqk-10-mg-1788871850694.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "10mg",
        "price": 44
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "ahk-cu",
    "name": "AHK-Cu",
    "category": "Skin, Hair Care",
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "Copper tripeptide studied for collagen synthesis and dermal wound-healing research.",
    "composition": [
      "Copper tripeptide complex (Ala-His-Lys-Cu)",
      "Lyophilized powder, blue-tinted vial",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Collagen synthesis and dermal-repair research",
      "Wound-healing pathway studies",
      "Anti-aging skin research models"
    ],
    "images": [
      "assets/products/ahk-cu/ahk-cu-50-mg-1788831055911.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "50mg",
        "price": 34
      },
      {
        "size": "100mg",
        "price": 58
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "cjc-1295-no-dac-ipamorelin",
    "name": "CJC-1295 (No DAC) + iPamorelin",
    "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Combination blend pairing a non-DAC GHRH analogue with a selective GH secretagogue for stacked research.",
    "composition": [
      "CJC-1295 (no DAC), modified GHRH(1-29) analogue",
      "Ipamorelin, selective GH secretagogue pentapeptide",
      "Lyophilized combination blend, single vial"
    ],
    "uses": [
      "Combined growth-hormone axis research",
      "Recovery and lean-mass stacked protocols",
      "Sleep-quality and body-composition studies"
    ],
    "images": [
      "assets/products/cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg-1788831088245.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg blend",
        "price": 62
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "kpv",
    "name": "KPV",
    "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Tripeptide fragment of alpha-MSH studied for anti-inflammatory and gut-barrier research.",
    "composition": [
      "Synthetic tripeptide (Lys-Pro-Val, alpha-MSH fragment)",
      "Lyophilized, single-vial format",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Anti-inflammatory pathway research",
      "Gastrointestinal barrier studies",
      "Dermal healing research models"
    ],
    "images": [
      "assets/products/kpv/kpv-10-mg-1788830422731.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 29
      },
      {
        "size": "10mg",
        "price": 39
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
    "purity": "99.7%",
    "showPurity": false,
    "shortDescription": "GHRH analogue studied for visceral-fat reduction and growth-hormone axis research.",
    "composition": [
      "Synthetic GHRH analogue (Tesamorelin)",
      "Lyophilized, single-vial format",
      "HPLC verified, EU laboratory sourced"
    ],
    "uses": [
      "Visceral-fat reduction research",
      "Growth-hormone axis studies",
      "Metabolic and body-composition research"
    ],
    "images": [
      "assets/products/tesamorelin/tesamorelin-10-mg-1788830186772.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 59
      },
      {
        "size": "10mg",
        "price": 89
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "gonadorelin",
    "name": "Gonadorelin",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "purity": "99.8%",
    "showPurity": false,
    "shortDescription": "Synthetic GnRH decapeptide studied for reproductive-axis and hormonal regulation research.",
    "composition": [
      "Synthetic gonadotropin-releasing hormone decapeptide",
      "Lyophilized powder, single-vial format",
      "EU certified batch testing"
    ],
    "uses": [
      "HPG axis and reproductive-hormone research",
      "LH/FSH pulse-response studies",
      "Fertility-pathway research models"
    ],
    "images": [
      "assets/products/gonadorelin/gonadorelin-10-mg-1788830157455.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "2mg",
        "price": 29
      },
      {
        "size": "5mg",
        "price": 49
      },
      {
        "size": "10mg",
        "price": 59
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "hmg",
    "name": "HMG",
    "category": "Male Hormones, Fertility, Sexual Health & Tanning",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Human menopausal gonadotropin studied for fertility and reproductive-hormone research.",
    "composition": [
      "Human menopausal gonadotropin (FSH/LH activity)",
      "Lyophilized, single-vial format",
      "Third-party HPLC-verified purity"
    ],
    "uses": [
      "Fertility and ovarian-stimulation research",
      "Gonadotropin pathway studies",
      "Reproductive-hormone research models"
    ],
    "images": [
      "assets/products/hmg/hmg-75-iu-1788830109748.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "75iU",
        "price": 39
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "vip",
    "name": "VIP",
    "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
    "purity": "99.5%",
    "showPurity": false,
    "shortDescription": "Vasoactive intestinal peptide studied for immune modulation and mold-illness research.",
    "composition": [
      "Synthetic vasoactive intestinal peptide (VIP)",
      "Lyophilized powder, single-vial format",
      "EU sourced, certified purity"
    ],
    "uses": [
      "Immune modulation research",
      "Neuroinflammatory pathway studies",
      "Pituitary and hormonal regulation research"
    ],
    "images": [
      "assets/products/vip/vip-10-mg-1788830080134.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5mg",
        "price": 59
      },
      {
        "size": "10mg",
        "price": 79
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  },
  {
    "id": "tirzepatide-mounjaro",
    "name": "Tirzepatide Mounjaro",
    "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
    "purity": "",
    "showPurity": true,
    "shortDescription": "Lose Weight",
    "composition": [
      "Lose Weight"
    ],
    "uses": [
      "Lose Weight"
    ],
    "images": [
      "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-10-mg-1788872360628.jpeg"
    ],
    "video": "",
    "variants": [
      {
        "size": "5 mg",
        "price": 29
      },
      {
        "size": "10 mg",
        "price": 39
      }
    ],
    "wholesaleTiers": [
      {
        "minQty": 5,
        "discountPercent": 12
      },
      {
        "minQty": 10,
        "discountPercent": 25
      }
    ]
  }
];

// Back-compat alias — some code may still reference PRODUCT_CATEGORIES.
const PRODUCT_CATEGORIES = CATEGORY_LIST;
