/**
 * trusted-peptide.com — Product Catalog
 * ------------------------------------------------------------
 * This file is managed by the Admin Panel (/admin). You can still
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
    "Digestive & Gut Health",
    "Accessories & Supplies",
    "Cosmetics",
    "Vitamins"
];

const PRODUCTS = [
    {
        "id": "bpc-157",
        "name": "BPC-157",
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "featured": true,
        "bestSeller": true,
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "<p>Stable gastric pentadecapeptide studied for tissue and tendon recovery support</p>",
        "composition": [
            "BPC-157",
            "Your body already makes a version of this",
            "Scientists just turned it into one of the most talked-about healing compounds in research",
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
            "assets/products/bpc-157/bpc-157-2-mg.webp",
            "assets/products/bpc-157/bpc-157-5-mg.webp",
            "assets/products/bpc-157/bpc-157-10-mg.webp"
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
        "shortDescription": "<p>Synthetic fragment of Thymosin Beta-4, studied for cell migration and repair pathways.</p>",
        "composition": [
            "TB-500",
            "Tells your body where to heal",
            "Most healing compounds speed up repair everywhere",
            "This one actually tells your body WHERE to heal",
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
            "assets/products/tb-500/tb-500-2-mg.webp",
            "assets/products/tb-500/tb-500-5-mg.webp",
            "assets/products/tb-500/tb-500-10-mg.webp",
            "assets/products/tb-500/tb-500-20-mg.webp"
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "categories": [
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
            "Skin, Hair Care"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "<p>You Know it for Skin But Also Rebuilds your Bones</p>",
        "composition": [
            "GHK-Cu",
            "YOU KNOW IT FOR SKIN",
            "Also Rebuilds your Bones",
            "Everyone knows GHK-Cu as a \"skin peptide.\" But that's only half the story",
            "It's a tiny copper-carrying peptide your body makes, and it got famous in skincare for boosting collagen. But here's what people miss: collagen isn't just in your skin — it's the scaffold your bones are built on.",
            "And copper is essential for bone. Your body needs copper-dependent enzymes to cross-link collagen and turn it into strong, healthy bone — copper deficiency is actually linked to weaker bones. GHK-Cu's whole job is delivering copper where those repair enzymes need it.",
            "That's why it's been studied for bone remodelling — the process of breaking down old bone and building fresh bone in its place. Not just skin."
        ],
        "uses": [],
        "images": [
            "assets/products/ghk-cu/ghk-cu-50-mg.webp",
            "assets/products/ghk-cu/ghk-cu-100-mg.webp"
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
                "discountPercent": 10
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "categories": [
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
            "Skin, Hair Care"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "<p>Master antioxidant tripeptide studied for oxidative stress reduction and skin tone evening.</p>",
        "composition": [
            "Glutathione",
            "Your Master Antioxidant",
            "Your body makes its own \"master antioxidant\"",
            "and modern life drains it fast",
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
            "assets/products/glutathione/glutathione-600-mg.webp",
            "assets/products/glutathione/glutathione-1500-mg.webp"
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
        "categories": [
            "Weight Loss, Metabolic Regulation & Insulin Resistance"
        ],
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
            "assets/products/semaglutide/semaglutide-ozempic-5-mg.webp",
            "assets/products/semaglutide/semaglutide-ozempic-10-mg.webp",
            "assets/products/semaglutide/semaglutide-ozempic-20-mg.webp",
            "assets/products/semaglutide/semaglutide-ozempic-30-mg.webp"
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
        "categories": [
            "Growth Hormone Secretagogues, Hypertrophy & Endurance"
        ],
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
            "assets/products/ipamorelin/ipamorelin-2-mg.webp",
            "assets/products/ipamorelin/ipamorelin-5-mg.webp",
            "assets/products/ipamorelin/ipamorelin-10-mg.webp"
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
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Melanocortin analogue studied for pigmentation response research.</p>",
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
            "assets/products/melanotan-2/melanotan-2-10-mg.webp"
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
        "categories": [
            "Growth Hormone Secretagogues, Hypertrophy & Endurance"
        ],
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "Long-acting GHRH analogue frequently paired with Ipamorelin in stacked research protocols.",
        "composition": [
            "CJC-1295",
            "Extends Your Own Growth Hormone",
            "Your body already makes growth hormone in short bursts",
            "this peptide is designed to extend your own natural release, not replace it",
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
            "assets/products/cjc-1295/cjc-1295-2-mg.webp",
            "assets/products/cjc-1295/cjc-1295-5-mg.webp",
            "assets/products/cjc-1295/cjc-1295-10-mg.webp"
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
        "id": "retatrutide",
        "name": "RetaTrutide",
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Triple GIP/GLP-1/glucagon receptor agonist studied for metabolic rate and weight research.</p>",
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
            "assets/products/retatrutide/retatrutide-5-mg.webp",
            "assets/products/retatrutide/retatrutide-10-mg.webp",
            "assets/products/retatrutide/retatrutide-20-mg.webp",
            "assets/products/retatrutide/retatrutide-30-mg.webp",
            "assets/products/retatrutide/retatrutide-40-mg.webp",
            "assets/products/retatrutide/retatrutide-50-mg.webp",
            "assets/products/retatrutide/retatrutide-60-mg.webp",
            "assets/products/retatrutide/retatrutide-100-mg.webp"
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
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "<p>Mitochondrial-derived peptide studied for metabolic homeostasis and exercise-response research.</p>",
        "composition": [
            "MOTS-c",
            "CELLULAR",
            "a message from your mitochondria",
            "Your mitochondria can send messages to the rest of your cell",
            "and one of them is a peptide called MOTS-c",
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
            "The exercise molecule",
            "Scientists found a molecule that mimics exercise",
            "and your body already makes it",
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
            "assets/products/mots-c/mots-c-10-mg.webp",
            "assets/products/mots-c/mots-c-15-mg.webp",
            "assets/products/mots-c/mots-c-20-mg.webp",
            "assets/products/mots-c/mots-c-40-mg.webp"
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
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "<p>Melanocortin receptor agonist (Bremelanotide) studied for libido and arousal-pathway research.</p>",
        "composition": [
            "PT-141",
            "NEUROSCIENCE",
            "Desire starts in the brain",
            "Every treatment you’ve heard of for low libido works on blood flow",
            "This one works on the brain",
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
            "assets/products/pt-141/pt-141-10-mg.webp"
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
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "<p>Nicotinamide adenine dinucleotide, studied for cellular energy metabolism and longevity research.</p>",
        "composition": [
            "NAD+",
            "Recharges your cells",
            "There's a molecule inside every cell that powers your energy",
            "and repairs your DNA — and it runs low as you age",
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
            "assets/products/nad-plus/nad-100-mg.webp",
            "assets/products/nad-plus/nad-300-mg.webp",
            "assets/products/nad-plus/nad-500-mg.webp",
            "assets/products/nad-plus/nad-1000-mg.webp"
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
                "discountPercent": 25
            }
        ]
    },
    {
        "id": "lemon-bottle",
        "name": "Lemon Bottle",
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "categories": [
            "Weight Loss, Metabolic Regulation & Insulin Resistance"
        ],
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
            "assets/products/lemon-bottle/lemon-bottle-10-mg.webp"
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
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Kisspeptin analogue studied for reproductive-axis and hormonal signaling research.</p>",
        "composition": [
            "KissPeptin",
            "The master switch of your hormones",
            "There's a single molecular switch that has to fire before your body makes almost any reproductive hormone",
            "Your hormone system runs on a chain of command, and kisspeptin sits right at the top",
            "When it fires, it triggers GnRH which triggers LH and FSH which drive testosterone and oestrogen",
            "Nothing downstream happens until kisspeptin fires first",
            "That's why it's called the master switch — it's the ignition for the whole cascade",
            "And it was only discovered in this role in the early 2000s",
            "which totally reshaped how scientists understand the system",
            "Because it sits at the very top, it's being studied for fertility",
            "puberty disorders, and cases where that natural switch isn't firing right",
            "working with your body's own signalling instead of flooding it with hormones",
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
            "assets/products/kiss-peptin/kiss-peptin-5-mg.webp",
            "assets/products/kiss-peptin/kiss-peptin-10-mg.webp"
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
        "shortDescription": "<p>Combination blend of BPC-157 10mg, GHK-Cu 50mg, TB-500 10mg, and KPV 10mg for stacked recovery research.</p>",
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
            "assets/products/klow-blend/klow-80-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/epithalon/epithalon-10-mg.webp",
            "assets/products/epithalon/epithalon-50-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "<p>Modified fragment of human growth hormone studied for lipolysis research without effect on blood sugar/IGF-1.</p>",
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
            "assets/products/aod-9604/aod-9604-2-mg.webp",
            "assets/products/aod-9604/aod-9604-5-mg.webp",
            "assets/products/aod-9604/aod-9604-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Synthetic heptapeptide analogue of Tuftsin studied for anxiolytic and cognitive-function research.</p>",
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
            "assets/products/selank/selank-5-mg.webp",
            "assets/products/selank/selank-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Synthetic heptapeptide analogue of ACTH(4-10) studied for neuroprotective and cognitive research.</p>",
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
            "assets/products/semax/semax-5-mg.webp",
            "assets/products/semax/semax-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Mitochondria-targeted tetrapeptide (Elamipretide) studied for oxidative stress and mitochondrial research.</p>",
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
            "assets/products/ss-31/ss-31-10-mg.webp",
            "assets/products/ss-31/ss-31-50-mg.webp"
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
                "discountPercent": 10
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "categories": [
            "Organ-Specific Bioregulators & Therapeutic Compounds",
            "Skin, Hair Care"
        ],
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Octapeptide studied for topical wrinkle-reduction and neuromuscular signaling research.</p>",
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
            "assets/products/snap-8/snap-8-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Nonapeptide hormone studied for social-bonding, mood, and neuroendocrine research.</p>",
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
            "assets/products/oxytocin/oxytocin-2-mg.webp",
            "assets/products/oxytocin/oxytocin-5-mg.webp",
            "assets/products/oxytocin/oxytocin-10-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/cerebrolysin/cerebrolysin-60-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Erythropoietin-derived peptide studied for neuropathic and anti-inflammatory research.</p>",
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
            "assets/products/ara-290/ara-290-10-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "<p>Delta sleep-inducing peptide studied for sleep-regulation and stress-response research.</p>",
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
            "assets/products/dsip/dsip-10-mg.webp",
            "assets/products/dsip/dsip-20-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "<p>Small-molecule nootropic studied for synaptogenesis and cognitive-enhancement research.</p>",
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
            "assets/products/dihexa/dihexa-10-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/ll-37/ll-37-5-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Myostatin-inhibiting glycoprotein studied for muscle-growth and body-composition research.</p>",
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
            "assets/products/follistatin/fullistatin-1-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/caqk/caqk-10-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "<p>Copper tripeptide studied for collagen synthesis and dermal wound-healing research.</p>",
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
            "assets/products/ahk-cu/ahk-cu-50-mg.webp",
            "assets/products/ahk-cu/ahk-cu-100-mg.webp"
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
                "discountPercent": 10
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
        "featured": true,
        "bestSeller": true,
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "<p>Combination blend pairing a non-DAC GHRH analogue with a selective GH secretagogue for stacked research.</p>",
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
            "assets/products/cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-2-mg.webp",
            "assets/products/cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-5-mg.webp",
            "assets/products/cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>Tripeptide fragment of alpha-MSH studied for anti-inflammatory and gut-barrier research.</p>",
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
            "assets/products/kpv/kpv-5-mg.webp",
            "assets/products/kpv/kpv-10-mg.webp"
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
                "discountPercent": 10
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
        "shortDescription": "<p>GHRH analogue studied for visceral-fat reduction and growth-hormone axis research.</p>",
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
            "assets/products/tesamorelin/tesamorelin-2-mg.webp",
            "assets/products/tesamorelin/tesamorelin-5-mg.webp",
            "assets/products/tesamorelin/tesamorelin-10-mg.webp",
            "assets/products/tesamorelin/tesamorelin-20-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/gonadorelin/gonadorelin-2-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/hmg/hmg-75-iu.webp"
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
                "discountPercent": 10
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
            "assets/products/vip/vip-5-mg.webp",
            "assets/products/vip/vip-10-mg.webp",
            "assets/products/vip/vip-20-mg.webp"
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
                "discountPercent": 10
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
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-5-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-10-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-20-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-30-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-40-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-50-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-60-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-100-mg.webp"
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
                "discountPercent": 10
            },
            {
                "minQty": 10,
                "discountPercent": 25
            }
        ]
    },
    {
        "id": "hgh-176-191",
        "name": "HGH Fragment 176-191",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "The C-terminal region of human growth hormone that exclusively stimulates lipolysis and inhibits lipogenesis without affecting blood glucose or insulin sensitivity.",
        "composition": [
            "Stimulates lipolysis (fat breakdown) from adipocytes",
            "Inhibits lipogenesis (new fat formation)",
            "Does not affect blood glucose levels or insulin sensitivity",
            "No effect on cellular proliferation or IGF-1 axis"
        ],
        "uses": [
            "Targeted fat loss without metabolic side effects",
            "Body recomposition support",
            "Stack with other peptides for enhanced fat burning"
        ],
        "images": [
            "assets/products/hgh-176-191/hgh-176-191-2-mg.webp",
            "assets/products/hgh-176-191/hgh-176-191-5-mg.webp",
            "assets/products/hgh-176-191/hgh-176-191-10-mg.webp",
            "assets/products/hgh-176-191/hgh-176-191-15-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 18
            },
            {
                "size": "5 mg",
                "price": 35
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
        "id": "mazdutide",
        "name": "Mazdutide",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A dual GLP-1 and Glucagon receptor agonist designed to balance appetite suppression with enhanced hepatic fatty acid oxidation, reducing overall fat mass and improving lipid profiles.",
        "composition": [
            "Dual GLP-1 and Glucagon receptor agonist",
            "Suppresses appetite via GLP-1 pathway",
            "Enhances hepatic fatty acid oxidation via glucagon receptor",
            "Improves lipid profiles and reduces visceral fat"
        ],
        "uses": [
            "Weight loss and obesity management",
            "Metabolic liver disease support",
            "Improving lipid profiles"
        ],
        "images": [
            "assets/products/mazdutide/mazdutide-5-mg.webp",
            "assets/products/mazdutide/mazdutide-10-mg.webp",
            "assets/products/mazdutide/mazdutide-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 55
            },
            {
                "size": "10 mg",
                "price": 95
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
        "id": "survodutide",
        "name": "Survodutide",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A dual GLP-1/Glucagon receptor agonist targeting advanced clinical weight loss and metabolic liver disease by stimulating energy expenditure in peripheral tissues and burning deep visceral fat.",
        "composition": [
            "Dual GLP-1 and Glucagon receptor agonist",
            "Stimulates energy expenditure in peripheral tissues",
            "Burns deep visceral and hepatic fat",
            "Targets metabolic-dysfunction-associated steatohepatitis (MASH)"
        ],
        "uses": [
            "Advanced clinical weight loss",
            "Metabolic liver disease (MASH/NAFLD)",
            "Visceral fat reduction"
        ],
        "images": [
            "assets/products/survodutide/survodutide-5-mg.webp",
            "assets/products/survodutide/survodutide-10-mg.webp",
            "assets/products/survodutide/survodutide-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 55
            },
            {
                "size": "10 mg",
                "price": 95
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
        "id": "cagrilintide",
        "name": "Cagrilintide",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A long-acting synthetic amylin analogue that delays nutrient absorption and promotes gastric fullness; combined with Semaglutide it targets hunger through two distinct pathways for amplified weight loss.",
        "composition": [
            "Long-acting synthetic amylin analogue",
            "Delays gastric emptying and nutrient absorption",
            "Promotes satiety and gastric fullness",
            "Synergistic with Semaglutide for dual-pathway appetite suppression"
        ],
        "uses": [
            "Weight loss augmentation",
            "Appetite control through amylin pathway",
            "Combined protocol with Semaglutide for enhanced results"
        ],
        "images": [
            "assets/products/cagrilintide/cagrilintide-5-mg.webp",
            "assets/products/cagrilintide/cagrilintide-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 60
            },
            {
                "size": "10 mg",
                "price": 105
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
        "id": "adipotide",
        "name": "Adipotide (FTTP)",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A pro-apoptotic targeting peptide that selectively binds to blood vessels supplying white adipose tissue, cutting off blood supply to induce targeted adipocyte apoptosis and rapid fat tissue reduction.",
        "composition": [
            "Pro-apoptotic peptide targeting white adipose vasculature",
            "Selectively binds PROHIBITIN on fat tissue blood vessels",
            "Cuts off blood supply to adipocytes inducing apoptosis",
            "Rapid and targeted fat tissue reduction"
        ],
        "uses": [
            "Targeted fat reduction in specific depots",
            "Research into obesity and fat tissue apoptosis",
            "Visceral and subcutaneous fat elimination"
        ],
        "images": [
            "assets/products/adipotide/adipotide-2-mg.webp",
            "assets/products/adipotide/adipotide-5-mg.webp",
            "assets/products/adipotide/adipotide-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 35
            },
            {
                "size": "5 mg",
                "price": 70
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
        "id": "adipotide-plain",
        "name": "Adipotide",
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "categories": [
            "Weight Loss, Metabolic Regulation & Insulin Resistance"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A pro-apoptotic targeting peptide that selectively binds to blood vessels supplying white adipose tissue, cutting off blood supply to induce targeted adipocyte apoptosis and rapid fat tissue reduction.",
        "composition": [
            "Pro-apoptotic peptide targeting white adipose vasculature",
            "Selectively binds PROHIBITIN on fat tissue blood vessels",
            "Cuts off blood supply to adipocytes inducing apoptosis",
            "Rapid and targeted fat tissue reduction"
        ],
        "uses": [
            "Targeted fat reduction in specific depots",
            "Research into obesity and fat tissue apoptosis",
            "Visceral and subcutaneous fat elimination"
        ],
        "images": [
            "assets/products/adipotide/adipotide-2-mg.webp",
            "assets/products/adipotide/adipotide-5-mg.webp",
            "assets/products/adipotide/adipotide-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 35
            },
            {
                "size": "5 mg",
                "price": 70
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
        "id": "5-amino-1mq",
        "name": "5-Amino-1MQ",
        "category": "",
        "featured": true,
        "bestSeller": true,
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A small molecule inhibitor of NNMT in fat tissue that elevates cellular NAD+ levels, accelerates basal metabolic rate, and drives fat loss while sparing lean muscle mass from catabolism.</p>",
        "composition": [
            "Inhibitor of nicotinamide N-methyltransferase (NNMT) enzyme",
            "Elevates intracellular NAD+ levels in adipose tissue",
            "Accelerates basal metabolic rate",
            "Drives fat oxidation while preserving lean muscle mass"
        ],
        "uses": [
            "Metabolic rate enhancement",
            "Fat loss while preserving lean mass",
            "NAD+ pathway support"
        ],
        "images": [
            "assets/products/5-amino-1mq/5-amino-1mq-5-mg.webp",
            "assets/products/5-amino-1mq/5-amino-1mq-10-mg.webp",
            "assets/products/5-amino-1mq/5-amino-1mq-50-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "50 mg",
                "price": 45
            },
            {
                "size": "100 mg",
                "price": 80
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
        "id": "slu-pp-322",
        "name": "SLU-PP-322",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "An estrogen-related receptor (ERR) metabolic agonist that triggers skeletal muscle to consume fatty acids and produce energy, mimicking the physiological adaptations of endurance exercise without physical strain.",
        "composition": [
            "Estrogen-related receptor (ERR) agonist",
            "Triggers skeletal muscle fatty acid consumption",
            "Mimics endurance exercise metabolic adaptations",
            "Enhances mitochondrial biogenesis and oxidative capacity"
        ],
        "uses": [
            "Exercise mimetic for metabolic benefit",
            "Fat burning through muscle energy expenditure",
            "Metabolic conditioning support"
        ],
        "images": [
            "assets/products/slu-pp-322/slu-pp-322-5-mg.webp",
            "assets/products/slu-pp-322/slu-pp-322-10-mg.webp",
            "assets/products/slu-pp-322/slu-pp-322-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "50 mg",
                "price": 50
            },
            {
                "size": "100 mg",
                "price": 90
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
        "id": "l-carnitine",
        "name": "L-Carnitine",
        "category": "Weight Loss & Metabolic",
        "categories": [
            "Weight Loss & Metabolic"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A carrier amino acid that shuttles long-chain fatty acids into the mitochondrial matrix for ATP generation, supporting exercise performance and fat oxidation.",
        "composition": [
            "Carrier amino acid synthesized from lysine and methionine",
            "Shuttles long-chain fatty acids into mitochondrial matrix",
            "Facilitates beta-oxidation for ATP generation",
            "Supports exercise performance and recovery"
        ],
        "uses": [
            "Fat oxidation during exercise",
            "Energy metabolism support",
            "Exercise performance enhancement"
        ],
        "images": [
            "assets/products/l-carnitine/l-carnitine-600-mg.webp",
            "assets/products/l-carnitine/l-carnitine-1200-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "500 mg",
                "price": 15
            },
            {
                "size": "1000 mg",
                "price": 25
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
        "id": "hgh-191aa",
        "name": "HGH 191aa (Somatropin)",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Recombinant human growth hormone (191 amino acids) identical to endogenous pituitary GH, stimulating IGF-1 production for muscle growth, fat loss, recovery, and anti-aging effects.",
        "composition": [
            "191 amino acid recombinant human growth hormone",
            "Identical sequence to endogenous pituitary-secreted GH",
            "Stimulates hepatic IGF-1 production",
            "Promotes anabolic signaling across muscle, bone, and connective tissue"
        ],
        "uses": [
            "Muscle growth and body recomposition",
            "Fat loss and metabolic optimization",
            "Recovery acceleration",
            "Anti-aging and cellular regeneration"
        ],
        "images": [
            "assets/products/hgh-191aa/hgh-191aa-6-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-8-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-10-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-12-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-15-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-24-iu.webp",
            "assets/products/hgh-191aa/hgh-191aa-36-iu.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 IU",
                "price": 25
            },
            {
                "size": "100 IU",
                "price": 200
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
        "id": "sermorelin",
        "name": "Sermorelin",
        "category": "",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A synthetic analogue of GHRH (1-29) that stimulates the pituitary gland to produce and secrete natural growth hormone in a pulsatile, physiological pattern.</p>",
        "composition": [
            "Synthetic GHRH analogue (amino acids 1-29)",
            "Stimulates pituitary GH release in pulsatile pattern",
            "Preserves natural GH feedback regulation",
            "Increases IGF-1 levels through endogenous GH stimulation"
        ],
        "uses": [
            "Natural GH optimization",
            "Anti-aging and body recomposition",
            "GH deficiency treatment",
            "Sleep quality and recovery improvement"
        ],
        "images": [
            "assets/products/sermorelin/sermorelin-5-mg.webp",
            "assets/products/sermorelin/sermorelin-10-mg.webp",
            "assets/products/sermorelin/sermorelin-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 22
            },
            {
                "size": "5 mg",
                "price": 48
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
        "id": "ghrp-2",
        "name": "GHRP-2",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A potent ghrelin mimetic and GH secretagogue that strongly stimulates pituitary GH release while also raising IGF-1 and promoting appetite.",
        "composition": [
            "Synthetic hexapeptide ghrelin receptor agonist",
            "Strongly stimulates pituitary GH secretion",
            "Raises IGF-1 levels",
            "Promotes appetite and gastric motility"
        ],
        "uses": [
            "GH pulse amplification",
            "Muscle building and fat loss",
            "Recovery and anti-aging",
            "Appetite stimulation"
        ],
        "images": [
            "assets/products/ghrp-2/ghrp-2-5-mg.webp",
            "assets/products/ghrp-2/ghrp-2-10-mg.webp",
            "assets/products/ghrp-2/ghrp-2-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 20
            },
            {
                "size": "10 mg",
                "price": 35
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
        "id": "ghrp-6",
        "name": "GHRP-6",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A ghrelin analogue that stimulates GH release from the pituitary while significantly increasing appetite, making it ideal for bulking and muscle gain protocols.",
        "composition": [
            "Hexapeptide ghrelin receptor agonist",
            "Stimulates GH release from anterior pituitary",
            "Significantly increases appetite (ghrelin effect)",
            "Raises IGF-1 and promotes anabolic environment"
        ],
        "uses": [
            "GH stimulation for muscle gain",
            "Bulking and mass building protocols",
            "Recovery and healing support",
            "Combined with GHRH analogues for synergistic effect"
        ],
        "images": [
            "assets/products/ghrp-6/ghrp-6-5-mg.webp",
            "assets/products/ghrp-6/ghrp-6-10-mg.webp",
            "assets/products/ghrp-6/ghrp-6-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 18
            },
            {
                "size": "10 mg",
                "price": 30
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
        "id": "hexarelin",
        "name": "Hexarelin",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "One of the most potent GH secretagogues available, stimulating powerful GH pulses from the pituitary with additional cardioprotective and anti-fibrotic effects.",
        "composition": [
            "Hexapeptide GH secretagogue (most potent in class)",
            "Triggers strong GH pulses from pituitary",
            "Cardioprotective via GHS-R and CD36 receptors",
            "Anti-fibrotic effects on cardiac tissue"
        ],
        "uses": [
            "Maximum GH stimulation",
            "Cardioprotection and cardiac recovery",
            "Muscle building and fat loss",
            "Anti-aging protocols"
        ],
        "images": [
            "assets/products/hexarelin/hexarelin-2-mg.webp",
            "assets/products/hexarelin/hexarelin-5-mg.webp",
            "assets/products/hexarelin/hexarelin-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 25
            },
            {
                "size": "5 mg",
                "price": 55
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
        "id": "mk-677",
        "name": "MK-677 (Ibutamoren)",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "An orally active ghrelin mimetic that stimulates sustained GH and IGF-1 secretion, improving muscle mass, bone density, sleep quality, and fat metabolism.",
        "composition": [
            "Orally bioavailable non-peptide GH secretagogue",
            "Mimics ghrelin to stimulate GH and IGF-1 release",
            "Sustained 24-hour GH elevation after single dose",
            "Improves deep sleep stages (SWS)"
        ],
        "uses": [
            "Oral GH optimization (no injection required)",
            "Muscle mass and strength building",
            "Bone density improvement",
            "Sleep quality enhancement"
        ],
        "images": [
            "assets/products/mk-677/mk-677-5-mg.webp",
            "assets/products/mk-677/mk-677-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 mg",
                "price": 30
            },
            {
                "size": "25 mg",
                "price": 65
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
        "id": "igf-1-lr3",
        "name": "IGF-1 LR3",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A long-acting analogue of insulin-like growth factor 1 with 13x longer half-life than native IGF-1, driving muscle hyperplasia, satellite cell activation, and enhanced nutrient uptake.",
        "composition": [
            "Long R3 IGF-1 analogue with extended 20-30 hour half-life",
            "Binds IGF-1R to drive muscle protein synthesis",
            "Stimulates satellite cell proliferation (hyperplasia)",
            "Enhances cellular glucose and amino acid uptake"
        ],
        "uses": [
            "Muscle hyperplasia and lean mass gain",
            "Post-workout nutrient partitioning",
            "Combined GH + IGF-1 protocols",
            "Injury recovery and tissue repair"
        ],
        "images": [
            "assets/products/igf-1-lr3/igf-1-lr3-01-mg.webp",
            "assets/products/igf-1-lr3/igf-1-lr3-1-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1 mg",
                "price": 35
            },
            {
                "size": "5 mg",
                "price": 150
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
        "id": "igf-des",
        "name": "IGF-1 DES",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A truncated, highly potent IGF-1 variant that does not bind to binding proteins, providing immediate local tissue anabolic effects at the injection site.",
        "composition": [
            "Truncated IGF-1 lacking amino acids 1-3",
            "Does not bind IGF binding proteins (IGFBPs)",
            "Immediate and localized anabolic signaling",
            "Higher receptor affinity than standard IGF-1"
        ],
        "uses": [
            "Local muscle tissue growth at injection site",
            "Lagging muscle group enhancement",
            "Injury site healing and regeneration",
            "Hyperplasia induction protocols"
        ],
        "images": [
            "assets/products/igf-des/igf-des-2-mg.webp",
            "assets/products/igf-des/igf-des-5-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1 mg",
                "price": 30
            },
            {
                "size": "5 mg",
                "price": 130
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
        "id": "mgf-peg-mgf",
        "name": "MGF / PEG-MGF",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Mechano Growth Factor (MGF) and its pegylated form PEG-MGF activate muscle satellite cells after exercise or injury to drive localized muscle repair and hypertrophy.",
        "composition": [
            "IGF-1 splice variant produced locally in muscle tissue",
            "Activates quiescent satellite cells for muscle repair",
            "PEG form extends half-life from minutes to days",
            "Local hypertrophic and regenerative signaling"
        ],
        "uses": [
            "Post-workout muscle recovery and repair",
            "Localized muscle hypertrophy",
            "Sports injury healing",
            "Satellite cell activation protocols"
        ],
        "images": [
            "assets/products/mgf-peg-mgf/mgf-2-mg.webp",
            "assets/products/mgf-peg-mgf/mgf-5-mg.webp",
            "assets/products/mgf-peg-mgf/peg-mgf-2-mg.webp",
            "assets/products/mgf-peg-mgf/peg-mgf-5-mg.webp",
            "assets/products/mgf-peg-mgf/peg-mgf-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 28
            },
            {
                "size": "5 mg",
                "price": 60
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
        "id": "ace-031",
        "name": "ACE-031",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A fusion protein that acts as a myostatin trap, blocking myostatin and activin signaling to remove the natural brake on muscle growth and significantly increase lean mass.",
        "composition": [
            "Activin receptor type IIB (ActRIIB) fusion protein",
            "Traps myostatin and other TGF-beta family ligands",
            "Removes natural brake on skeletal muscle growth",
            "Significantly increases lean muscle mass"
        ],
        "uses": [
            "Maximum lean mass gain",
            "Muscle wasting disease research",
            "Strength and muscle building",
            "Myostatin inhibition protocols"
        ],
        "images": [
            "assets/products/ace-031/ace-031-default.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1 mg",
                "price": 45
            },
            {
                "size": "3 mg",
                "price": 120
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
        "id": "aicar",
        "name": "AICAR",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "An AMPK activator that mimics the metabolic effects of exercise, increasing fatty acid oxidation, mitochondrial biogenesis, and endurance capacity.",
        "composition": [
            "AMPK pathway activator (AMP analogue)",
            "Mimics metabolic effects of aerobic exercise",
            "Increases fatty acid oxidation and glucose uptake",
            "Stimulates mitochondrial biogenesis"
        ],
        "uses": [
            "Endurance enhancement without exercise",
            "Fat burning and metabolic optimization",
            "Cardiovascular health support",
            "Combined exercise mimetic protocols"
        ],
        "images": [
            "assets/products/aicar/aicar-50-mg.webp",
            "assets/products/aicar/aicar-100-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "50 mg",
                "price": 40
            },
            {
                "size": "100 mg",
                "price": 75
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
        "id": "epo",
        "name": "EPO (Erythropoietin)",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A glycoprotein hormone that stimulates red blood cell production in bone marrow, dramatically increasing oxygen-carrying capacity and endurance performance.",
        "composition": [
            "Recombinant erythropoietin glycoprotein hormone",
            "Stimulates red blood cell production in bone marrow",
            "Dramatically increases oxygen-carrying capacity",
            "Enhances VO2max and aerobic endurance"
        ],
        "uses": [
            "Endurance and aerobic performance enhancement",
            "Anemia treatment support",
            "High-altitude adaptation",
            "Oxygen delivery optimization"
        ],
        "images": [
            "assets/products/epo/epo-3000-iu.webp",
            "assets/products/epo/epo-5000-iu.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "3000 IU",
                "price": 35
            },
            {
                "size": "10000 IU",
                "price": 90
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
        "id": "cjc-1295-dac",
        "name": "CJC-1295 DAC",
        "category": "GH Secretagogues & IGF",
        "categories": [
            "GH Secretagogues & IGF"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A GHRH analogue with Drug Affinity Complex (DAC) technology extending its half-life to 6–8 days, providing sustained elevation of GH and IGF-1 levels with once-weekly dosing.",
        "composition": [
            "Modified GHRH analogue with DAC technology",
            "Extended half-life of 6-8 days (once-weekly dosing)",
            "Sustained GH and IGF-1 elevation",
            "Preserves pulsatile GH secretion pattern"
        ],
        "uses": [
            "Convenient once-weekly GH optimization",
            "Muscle mass and body recomposition",
            "Anti-aging and recovery",
            "GH deficiency management"
        ],
        "images": [
            "assets/products/cjc-1295-dac/cjc-1295-dac-2-mg.webp",
            "assets/products/cjc-1295-dac/cjc-1295-dac-5-mg.webp",
            "assets/products/cjc-1295-dac/cjc-1295-dac-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 25
            },
            {
                "size": "5 mg",
                "price": 55
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
        "id": "bpc-tb-blend",
        "name": "BPC-157 + TB-500 Mix",
        "category": "",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A synergistic therapeutic combination blending the direct local angiogenic repair of BPC-157 with the systemic tissue-healing reach of TB-500 for rapid recovery from sports injuries and surgical trauma.</p>",
        "composition": [
            "BPC-157: local angiogenic and tendon/gut repair",
            "TB-500: systemic actin regulation and soft tissue healing",
            "Synergistic dual-action tissue recovery",
            "Reduces scarring and fibrotic tissue formation"
        ],
        "uses": [
            "Sports injury recovery",
            "Surgical trauma healing",
            "Tendon and ligament repair",
            "Comprehensive soft tissue recovery"
        ],
        "images": [
            "assets/products/bpc-tb-blend/bpc-tb-blend-10-mg.webp",
            "assets/products/bpc-tb-blend/bpc-tb-blend-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 mg",
                "price": 55
            },
            {
                "size": "20 mg",
                "price": 100
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
        "id": "cartalax",
        "name": "Cartalax",
        "category": "Recovery & Repair",
        "categories": [
            "Recovery & Repair"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A short bioregulatory peptide (Ala-Glu-Asp) that targets chondrocytes directly, stimulating endogenous collagen synthesis to regenerate worn joint cartilage in osteoarthritis and spinal degenerative conditions.",
        "composition": [
            "Tripeptide bioregulator (Ala-Glu-Asp) targeting chondrocytes",
            "Stimulates endogenous collagen synthesis",
            "Regenerates worn and damaged joint cartilage",
            "Supports spinal disc and connective tissue regeneration"
        ],
        "uses": [
            "Osteoarthritis joint cartilage regeneration",
            "Spinal degenerative disc disease support",
            "Joint health maintenance",
            "Collagen synthesis stimulation"
        ],
        "images": [
            "assets/products/cartalax/cartalax-10-mg.webp",
            "assets/products/cartalax/cartalax-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 45
            },
            {
                "size": "60 mg",
                "price": 120
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
        "id": "b7-33",
        "name": "B7-33",
        "category": "Recovery & Repair",
        "categories": [
            "Recovery & Repair"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A synthetic relaxin-derived peptide that halts and reverses pathological tissue fibrosis in the heart, lungs, and kidneys without causing severe blood pressure drops.",
        "composition": [
            "Single-chain relaxin-2 analogue (B-chain fragment)",
            "Activates RXFP1 receptor to halt pathological fibrosis",
            "Reverses fibrotic tissue in heart, lungs, and kidneys",
            "Does not cause hypotension like native relaxin"
        ],
        "uses": [
            "Cardiac fibrosis reversal",
            "Pulmonary fibrosis treatment support",
            "Renal fibrosis prevention",
            "Post-injury scar tissue reduction"
        ],
        "images": [
            "assets/products/b7-33/b7-33-2-mg.webp",
            "assets/products/b7-33/b7-33-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2 mg",
                "price": 40
            },
            {
                "size": "5 mg",
                "price": 90
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
        "id": "foxo4-dri",
        "name": "FOXO4-DRI",
        "category": "Anti-Aging & Longevity",
        "categories": [
            "Anti-Aging & Longevity"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A D-retro-inverso peptide that selectively induces apoptosis in senescent cells ('zombie cells'), clearing them from tissues to restore youthful function and reduce age-related dysfunction.",
        "composition": [
            "D-retro-inverso FOXO4 peptide (protease-resistant)",
            "Disrupts FOXO4-p53 interaction in senescent cells",
            "Selectively triggers apoptosis in senescent cells only",
            "Spares healthy non-senescent cells completely"
        ],
        "uses": [
            "Senolytic clearance of zombie cells",
            "Age-related dysfunction reversal",
            "Healthspan and longevity extension",
            "Tissue rejuvenation protocols"
        ],
        "images": [
            "assets/products/foxo4-dri/foxo4-dri-10-mg.webp",
            "assets/products/foxo4-dri/foxo4-dri-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 mg",
                "price": 150
            },
            {
                "size": "30 mg",
                "price": 400
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
        "id": "humanin",
        "name": "Humanin",
        "category": "Anti-Aging & Longevity",
        "categories": [
            "Anti-Aging & Longevity"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A mitochondria-derived peptide that protects neurons from Alzheimer's-related toxicity, reduces insulin resistance, and extends cellular lifespan through multiple cytoprotective mechanisms.",
        "composition": [
            "21-amino acid mitochondria-derived cytoprotective peptide",
            "Protects neurons against amyloid-beta and other toxic insults",
            "Reduces systemic insulin resistance",
            "Activates STAT3 and JAK2 cytoprotective pathways"
        ],
        "uses": [
            "Neuroprotection against Alzheimer's pathology",
            "Insulin sensitivity improvement",
            "Cellular and mitochondrial longevity",
            "Anti-aging and cognitive preservation"
        ],
        "images": [
            "assets/products/humanin/humanin-10-mg.webp",
            "assets/products/humanin/humanin-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 60
            },
            {
                "size": "10 mg",
                "price": 110
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
        "id": "thymosin-alpha-1",
        "name": "Thymosin Alpha-1",
        "category": "",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A thymic peptide that modulates and strengthens immune responses, enhancing T-cell maturation, NK cell activity, and cytokine balance for infection resistance and immune aging reversal.</p>",
        "composition": [
            "28-amino acid thymic peptide (thymosin fraction 5)",
            "Stimulates T-cell maturation and differentiation",
            "Enhances natural killer (NK) cell activity",
            "Regulates pro- and anti-inflammatory cytokine balance"
        ],
        "uses": [
            "Immune system strengthening and modulation",
            "Chronic infection and viral disease support",
            "Cancer immunotherapy adjunct",
            "Immune aging reversal"
        ],
        "images": [
            "assets/products/thymosin-alpha-1/thymosin-alpha-1-5-mg.webp",
            "assets/products/thymosin-alpha-1/thymosin-alpha-1-10-mg.webp",
            "assets/products/thymosin-alpha-1/thymosin-alpha-1-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1.6 mg",
                "price": 35
            },
            {
                "size": "5 mg",
                "price": 95
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
        "id": "thymalin",
        "name": "Thymalin",
        "category": "",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A thymic bioregulatory peptide complex that restores thymus gland function, normalizes immune responses in both deficiency and excess, and reverses immunosenescence.</p>",
        "composition": [
            "Natural thymic peptide complex bioregulator",
            "Restores thymus gland functional activity",
            "Normalizes immune function in under- and over-active states",
            "Reverses age-related immune decline (immunosenescence)"
        ],
        "uses": [
            "Thymus regeneration and immune restoration",
            "Immunosenescence reversal",
            "Autoimmune disease modulation",
            "Longevity and healthspan protocols"
        ],
        "images": [
            "assets/products/thymalin/thymalin-10-mg.webp",
            "assets/products/thymalin/thymalin-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 mg",
                "price": 55
            },
            {
                "size": "30 mg",
                "price": 145
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
        "id": "adamax",
        "name": "Adamax",
        "category": "Brain & Cognitive",
        "categories": [
            "Brain & Cognitive"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "An enhanced, stabilized derivative of Semax with improved blood-brain barrier permeability, delivering prolonged cognitive stimulation, mental clarity, and focus.",
        "composition": [
            "Stabilized derivative of Semax (ACTH 4-10 analogue)",
            "Enhanced blood-brain barrier permeability",
            "Prolonged BDNF and dopamine upregulation",
            "Extended cognitive stimulation versus standard Semax"
        ],
        "uses": [
            "Extended cognitive enhancement and focus",
            "Mental clarity and processing speed",
            "Neuroprotection",
            "Nootropic stacking with Selank or other peptides"
        ],
        "images": [
            "assets/products/adamax/adamax-5-mg.webp",
            "assets/products/adamax/adamax-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1 mg",
                "price": 25
            },
            {
                "size": "5 mg",
                "price": 95
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
        "id": "pinealon",
        "name": "Pinealon / P21",
        "category": "Brain & Cognitive",
        "categories": [
            "Brain & Cognitive"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Bioregulatory peptides that protect cerebral cortical cells from oxidative damage while supporting short- and long-term memory, learning capacity, and cognitive speed.",
        "composition": [
            "Pinealon: tripeptide bioregulator targeting brain cortex",
            "P21: CNTF-derived peptide with neurogenic activity",
            "Protects neurons from oxidative and excitotoxic damage",
            "Supports memory consolidation and cognitive speed"
        ],
        "uses": [
            "Memory and learning enhancement",
            "Neuroprotection from oxidative damage",
            "Cognitive speed and clarity",
            "Anti-aging brain support"
        ],
        "images": [
            "assets/products/pinealon/pinealon-5-mg.webp",
            "assets/products/pinealon/pinealon-10-mg.webp",
            "assets/products/pinealon/pinealon-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 40
            },
            {
                "size": "60 mg",
                "price": 110
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
        "id": "cortagen",
        "name": "Cortagen",
        "category": "Brain & Cognitive",
        "categories": [
            "Brain & Cognitive"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A brain-cortex bioregulator that repairs central and peripheral nerve pathways and stimulates axonal regeneration after trauma.",
        "composition": [
            "Short tetrapeptide brain cortex bioregulator",
            "Repairs central and peripheral nerve pathways",
            "Stimulates axonal regeneration after neurological trauma",
            "Supports re-establishment of neural circuit function"
        ],
        "uses": [
            "Nerve damage recovery and axonal repair",
            "Post-stroke neurological rehabilitation",
            "Peripheral neuropathy support",
            "TBI and spinal injury recovery"
        ],
        "images": [
            "assets/products/cortagen/cortagen-10-mg.webp",
            "assets/products/cortagen/cortagen-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 40
            },
            {
                "size": "60 mg",
                "price": 110
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
        "id": "hcg",
        "name": "HCG (Human Chorionic Gonadotropin)",
        "category": "Male Hormones & Fertility",
        "categories": [
            "Male Hormones & Fertility"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Directly mimics LH, binding to Leydig cell receptors to stimulate endogenous testosterone synthesis and prevent testicular atrophy during hormonal therapy or PCT.",
        "composition": [
            "Recombinant LH-mimetic glycoprotein hormone",
            "Binds LH receptors on testicular Leydig cells",
            "Stimulates endogenous testosterone biosynthesis",
            "Prevents and reverses testicular atrophy"
        ],
        "uses": [
            "TRT and anabolic cycle support",
            "Post-cycle therapy (PCT) testosterone recovery",
            "Testicular atrophy prevention",
            "Hypogonadism and fertility treatment"
        ],
        "images": [
            "assets/products/hcg/hcg-1000-iu.webp",
            "assets/products/hcg/hcg-2000-iu.webp",
            "assets/products/hcg/hcg-5000-iu.webp",
            "assets/products/hcg/hcg-10000-iu.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "2000 IU",
                "price": 18
            },
            {
                "size": "5000 IU",
                "price": 35
            },
            {
                "size": "10000 IU",
                "price": 60
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
        "id": "testagen",
        "name": "Testagen",
        "category": "Male Hormones & Fertility",
        "categories": [
            "Male Hormones & Fertility"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A peptide bioregulator targeting testicular tissue that improves internal metabolism of reproductive tissue and supports the biological environment for hormone and sperm production.",
        "composition": [
            "Short peptide bioregulator targeting testicular tissue",
            "Improves metabolic function of reproductive cells",
            "Supports Leydig and Sertoli cell environment",
            "Enhances endogenous hormone and sperm production capacity"
        ],
        "uses": [
            "Testosterone production support",
            "Testicular function optimization",
            "Male fertility enhancement",
            "Age-related androgen decline management"
        ],
        "images": [
            "assets/products/testagen/testagen-10-mg.webp",
            "assets/products/testagen/testagen-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 40
            },
            {
                "size": "60 mg",
                "price": 110
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
        "id": "melanotan-1",
        "name": "Melanotan I",
        "category": "",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "<p>A selective MC1R agonist in skin melanocyte cells that stimulates melanin pigment secretion for natural skin tanning and UV protection without the sexual side effects of Melanotan II.</p>",
        "composition": [
            "Selective MC1R agonist (alpha-MSH analogue)",
            "Stimulates melanin production in skin melanocytes",
            "Provides natural-looking skin darkening (tan)",
            "UV protection without sun exposure required"
        ],
        "uses": [
            "Skin tanning without sun exposure",
            "UV radiation and sunburn protection",
            "Photoprotection for fair-skinned individuals",
            "Erythropoietic protoporphyria treatment"
        ],
        "images": [
            "assets/products/melanotan-1/melanotan-1-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 mg",
                "price": 30
            },
            {
                "size": "30 mg",
                "price": 80
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
        "id": "cardiogen",
        "name": "Cardiogen / Vesugen",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Vascular and myocardial peptides that enhance arterial elasticity, optimize microcirculation, and protect against arteriosclerosis and cardiac strain.",
        "composition": [
            "Cardiogen: cardiac myocyte bioregulator peptide",
            "Vesugen: vascular endothelial bioregulator peptide",
            "Enhances arterial elasticity and wall compliance",
            "Optimizes microcirculation and protects against arteriosclerosis"
        ],
        "uses": [
            "Cardiac health and myocardial protection",
            "Vascular health and arterial elasticity",
            "Arteriosclerosis prevention",
            "Microcirculation improvement"
        ],
        "images": [
            "assets/products/cardiogen/cardiogen-10-mg.webp",
            "assets/products/cardiogen/cardiogen-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 45
            },
            {
                "size": "60 mg",
                "price": 120
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
        "id": "bronchogen",
        "name": "Bronchogen / Chonluten",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "Respiratory bioregulators; Chonluten soothes mucosal inflammation and clears excess mucus, while Bronchogen regenerates epithelial and lung tissue damaged by smoking, asthma, or fibrosis.",
        "composition": [
            "Bronchogen: lung tissue regenerating bioregulator",
            "Chonluten: mucosal inflammation modulator",
            "Regenerates bronchial epithelial cells",
            "Clears excess mucus and reduces airway inflammation"
        ],
        "uses": [
            "Lung tissue repair from smoking or pollution",
            "Asthma and chronic bronchitis support",
            "Pulmonary fibrosis recovery",
            "Respiratory health maintenance"
        ],
        "images": [
            "assets/products/bronchogen/bronchogen-5-mg.webp",
            "assets/products/bronchogen/bronchogen-10-mg.webp",
            "assets/products/bronchogen/bronchogen-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 40
            },
            {
                "size": "60 mg",
                "price": 110
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
        "id": "pancragen",
        "name": "Pancragen",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A pancreatic bioregulator that supports islet cell metabolism, digestive enzyme secretion, and stable glucose regulation.",
        "composition": [
            "Short peptide targeting pancreatic islet cells",
            "Supports beta and alpha cell metabolic function",
            "Enhances digestive enzyme secretion",
            "Stabilizes glucose regulation"
        ],
        "uses": [
            "Pancreatic function support",
            "Glucose metabolism stabilization",
            "Digestive enzyme optimization",
            "Type 2 diabetes adjunct support"
        ],
        "images": [
            "assets/products/pancragen/pancragen-5-mg.webp",
            "assets/products/pancragen/pancragen-10-mg.webp",
            "assets/products/pancragen/pancragen-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "20 mg",
                "price": 40
            },
            {
                "size": "60 mg",
                "price": 110
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
        "id": "teriparatide",
        "name": "Teriparatide (PTH 1-34)",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "The active recombinant fragment of parathyroid hormone (PTH 1–34) that stimulates osteoblast activity for new bone formation, treating severe osteoporosis.",
        "composition": [
            "Recombinant PTH 1-34 fragment (active parathyroid hormone domain)",
            "Stimulates osteoblast differentiation and activity",
            "Promotes new bone matrix formation (anabolic effect)",
            "FDA-approved treatment for severe osteoporosis"
        ],
        "uses": [
            "Severe osteoporosis treatment",
            "Bone density improvement",
            "Fracture risk reduction",
            "Post-menopausal bone loss management"
        ],
        "images": [
            "assets/products/teriparatide/teriparatide-5-mg.webp",
            "assets/products/teriparatide/teriparatide-10-mg.webp",
            "assets/products/teriparatide/teriparatide-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1 mg",
                "price": 35
            },
            {
                "size": "3 mg",
                "price": 90
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
        "id": "pnc-27",
        "name": "PNC-27",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A membrane-active research peptide engineered to target HDM-2 on cancer cell membranes, forming pores that lyse malignant cells in preclinical studies while sparing healthy cells.",
        "composition": [
            "p53-MDM2 binding domain peptide with membrane-active motif",
            "Targets HDM-2 overexpressed on cancer cell membranes",
            "Forms transmembrane pores in malignant cells",
            "Spares normal healthy cells lacking surface HDM-2"
        ],
        "uses": [
            "Preclinical cancer research",
            "Selective cancer cell lysis studies",
            "Oncology peptide research",
            "Targeted anti-tumor investigation"
        ],
        "images": [
            "assets/products/pnc-27/pnc-27-5-mg.webp",
            "assets/products/pnc-27/pnc-27-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 80
            },
            {
                "size": "10 mg",
                "price": 145
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
        "id": "dermorphin",
        "name": "Dermorphin",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A potent natural opioid peptide with high affinity for μ-opioid receptors, providing deep analgesia many times more potent than morphine.",
        "composition": [
            "Heptapeptide natural opioid from frog skin secretion",
            "High selectivity and affinity for mu-opioid receptors",
            "Analgesic potency significantly greater than morphine",
            "Crosses blood-brain barrier for central analgesia"
        ],
        "uses": [
            "Severe and chronic pain research",
            "Opioid receptor pharmacology studies",
            "Pain management investigation",
            "Nociception research"
        ],
        "images": [
            "assets/products/dermorphin/dermorphin-5-mg.webp",
            "assets/products/dermorphin/dermorphin-10-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "5 mg",
                "price": 55
            },
            {
                "size": "10 mg",
                "price": 100
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
        "id": "chloramphenicol",
        "name": "Chloramphenicol",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "A broad-spectrum antibiotic that binds the 50S ribosomal subunit to halt bacterial protein synthesis in severe infections.",
        "composition": [
            "Broad-spectrum bacteriostatic antibiotic",
            "Binds 50S ribosomal subunit of bacterial ribosomes",
            "Inhibits peptidyl transferase and bacterial protein synthesis",
            "Effective against gram-positive, gram-negative, and anaerobic bacteria"
        ],
        "uses": [
            "Severe systemic bacterial infections",
            "Meningitis and typhoid fever treatment",
            "Topical ophthalmic infections",
            "Research reconstitution solvent applications"
        ],
        "images": [
            "assets/products/chloramphenicol/chloramphenicol-default.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "100 mg",
                "price": 15
            },
            {
                "size": "500 mg",
                "price": 45
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
        "id": "vitamin-b12",
        "name": "Vitamin B-12 (Cobalamin)",
        "category": "Organ-Specific Bioregulators",
        "categories": [
            "Organ-Specific Bioregulators"
        ],
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "An essential vitamin for DNA synthesis, red blood cell production, myelin sheath maintenance, and energy metabolism.",
        "composition": [
            "Cobalamin (cyanocobalamin or methylcobalamin)",
            "Essential cofactor for DNA synthesis and cell division",
            "Required for red blood cell formation",
            "Maintains myelin sheath integrity and neurological function"
        ],
        "uses": [
            "B12 deficiency and pernicious anemia treatment",
            "Energy and fatigue support",
            "Neurological health maintenance",
            "Peptide reconstitution solution additive"
        ],
        "images": [
            "assets/products/vitamin-b12/vitamin-b12-10-mg.webp",
            "assets/products/vitamin-b12/vitamin-b12-20-mg.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "1000 mcg/ml (10 ml)",
                "price": 12
            },
            {
                "size": "1000 mcg/ml (30 ml)",
                "price": 25
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
        "id": "bac-water",
        "name": "Bacteriostatic Water (BAC Water)",
        "category": "Accessories & Solvents",
        "categories": [
            "Accessories & Solvents"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "Sterile water containing 0.9% benzyl alcohol as a bacteriostatic agent, used for reconstituting lyophilized peptides and injectable compounds.",
        "composition": [
            "Sterile water for injection (WFI grade)",
            "0.9% benzyl alcohol as bacteriostatic preservative",
            "Inhibits bacterial growth after vial puncture",
            "Maintains sterility through multiple draw-downs"
        ],
        "uses": [
            "Peptide reconstitution solvent",
            "Lyophilized compound reconstitution",
            "Multi-use vial preparation",
            "Injectable solution preparation"
        ],
        "images": [
            "assets/products/bac-water/bac-water-default.webp"
        ],
        "video": "",
        "variants": [
            {
                "size": "10 ml",
                "price": 8
            },
            {
                "size": "30 ml",
                "price": 18
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
    }
];

// Back-compat alias — some code may still reference PRODUCT_CATEGORIES.
const PRODUCT_CATEGORIES = CATEGORY_LIST;
