/**
 * trusted-peptide.com — كتالوج المنتجات (النسخة العربية)
 * ------------------------------------------------------------
 * هذا الملف يُدار من لوحة التحكم (/admin-php)، قسم "Arabic Translation" في
 * محرر المنتج. category/categories/images/video/variants/wholesaleTiers
 * تبقى دائماً مطابقة لملف products-data.js الإنجليزي (تُنسخ تلقائياً عند
 * الحفظ) — لا تُعدّل هنا يدوياً، لأن js/catalog.js يستخدم النصوص الإنجليزية
 * كمفاتيح بحث عن الأيقونات والفلاتر. الترجمة العربية لأسماء الفئات المعروضة
 * موجودة بدلاً من ذلك في js/category-labels-ar.js.
 *
 * مرجع الحقول المُترجمة: name, shortDescription, composition, uses
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
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "خماسي عشر ببتيد مشتق من عصير المعدة يحفز VEGF لتعزيز تكوين الأوعية الدموية، يسرّع شفاء الأوتار والأربطة والألياف العضلية الممزقة مع إصلاح بطانة الجهاز الهضمي الملتهبة والمتقرحة.",
        "composition": [
            "يحفز عامل النمو البطاني الوعائي (VEGF) لتكوين الأوعية",
            "يسرّع شفاء الأوتار والأربطة والألياف العضلية",
            "يُصلح بطانة الجهاز الهضمي الملتهبة والمتقرحة",
            "يعزز نشاط مستقبل هرمون النمو وتخليق كولاجين الأوتار"
        ],
        "uses": [
            "تسريع شفاء الإصابات الرياضية",
            "إصلاح الأوتار والأربطة والعضلات",
            "علاج قرحة الجهاز الهضمي والتهابه",
            "التعافي الجراحي وتحسين الأداء"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "tb-500",
        "name": "TB-500",
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "جزء اصطناعي من الثيموسين بيتا-4، يُدرس لمساراته في هجرة الخلايا والإصلاح",
        "composition": [
            "TB-500",
            "يُخبر جسمك أين يجب أن يشفي",
            "معظم مركبات الشفاء تسرّع الإصلاح في كل مكان",
            "أما هذا فيُخبر جسمك فعليًا بمكان الشفاء",
            "TB-500 هو نسخة اصطناعية من بروتين ينتجه جسمك أصلًا (الثيموسين بيتا-4)",
            "ووظيفته الأساسية هي التحكم في كيفية تحرك الخلايا",
            "وهنا تكمن الأهمية: لا يمكن للإصابة أن تشفى حتى تصل خلايا الإصلاح إليها فعليًا",
            "يُدرس TB-500 لتحفيز تلك الخلايا وتوجيهها مباشرة نحو موضع الضرر",
            "لتصل بشكل أسرع وبأعداد أكبر",
            "كما يساعد على بناء أوعية دموية جديدة في المنطقة المصابة",
            "لهذا تتركز الأبحاث على الإصابات البطيئة",
            "والمزمنة — الأوتار والأربطة وتمزقات العضلات",
            "تلك التي تستغرق وقتًا طويلًا بسبب ضعف تدفق الدم إليها",
            "يُعد أشبه بالمكمل لـ BPC-157: أحدهما يعيد البناء محليًا",
            "والآخر يوجّه الحركة",
            "جزء ببتيدي اصطناعي، نظير للثيموسين بيتا-4",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "يُشحن بسلسلة تبريد، مصدره أوروبي"
        ],
        "uses": [
            "أبحاث هجرة الخلايا والهيكل الخلوي",
            "دراسات الأنسجة الرخوة والمرونة",
            "بروتوكولات بحثية مركّبة مع BPC-157"
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
        "category": "Skin, Hair Care",
        "categories": [
            "Skin, Hair Care",
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "تعرفه للعناية بالبشرة، لكنه يساعد أيضًا في إعادة بناء العظام",
        "composition": [
            "GHK-Cu",
            "تعرفه من أجل البشرة",
            "لكنه يعيد بناء عظامك أيضًا",
            "الجميع يعرف GHK-Cu كـ\"ببتيد العناية بالبشرة\"، لكن هذه نصف القصة فقط",
            "إنه ببتيد صغير يحمل النحاس ينتجه جسمك، واشتهر في مستحضرات التجميل لتعزيزه إنتاج الكولاجين. لكن ما يغفل عنه كثيرون هو أن الكولاجين ليس موجودًا في بشرتك فقط — بل هو الهيكل الذي تُبنى عليه عظامك",
            "والنحاس عنصر أساسي لصحة العظام؛ فجسمك يحتاج إنزيمات معتمدة على النحاس لربط ألياف الكولاجين وتحويلها إلى عظم قوي وصحي — ونقص النحاس مرتبط فعليًا بضعف العظام. مهمة GHK-Cu الأساسية هي إيصال النحاس إلى حيث تحتاجه إنزيمات الإصلاح تلك",
            "لهذا يُدرس في مجال إعادة تشكيل العظام — عملية تكسير العظم القديم وبناء عظم جديد مكانه. وليس البشرة فقط"
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
        "category": "Skin, Hair Care",
        "categories": [
            "Skin, Hair Care",
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "ثلاثي ببتيد مضاد للأكسدة الرئيسي، يُدرس لتقليل الإجهاد التأكسدي وتوحيد لون البشرة",
        "composition": [
            "Glutathione",
            "مضاد الأكسدة الرئيسي في جسمك",
            "جسمك ينتج \"مضاد الأكسدة الرئيسي\" الخاص به",
            "والحياة العصرية تستنزفه بسرعة",
            "يُعرف بالغلوتاثيون، وتنتجه خلاياك لتحييد الجذور الحرة",
            "تلك الجزيئات النشطة الناتجة عن التوتر والتلوث والكحول والأشعة فوق البنفسجية والتقدم في العمر",
            "وهي تسبب ضررًا تأكسديًا، أي أن خلاياك \"تصدأ\" ببطء",
            "لماذا يُسمى \"رئيسيًا\"؟ لأنه لا يكتفي بإزالة الضرر بنفسه",
            "بل يعيد شحن مضادات الأكسدة الأخرى (مثل فيتامين C وE) لتستمر في العمل أيضًا",
            "فهو مركز منظومة الدفاع بأكملها",
            "كما أنه الوسيلة التي يتخلص بها كبدك من السموم، وهو سبب رئيسي وراء ارتباطه",
            "ببشرة أكثر إشراقًا ونقاءً وتجانسًا",
            "أي ضرر تأكسدي أقل يظهر على السطح",
            "المشكلة: تنخفض مستوياته مع التقدم في العمر، ويُستهلك بسرعة أكبر بسبب التوتر وقلة النوم والكحول",
            "غلوتاثيون-L (الشكل المختزل)، ثلاثي ببتيد من الغلوتامات والسيستئين والغليسين",
            "نقاء 99.9%، اختبار دفعات معتمد أوروبيًا",
            "مجفف بالتجميد، قارورة محمية من الضوء"
        ],
        "uses": [
            "أبحاث مضادات الأكسدة والإجهاد التأكسدي",
            "أبحاث تفتيح البشرة وتوحيد لونها",
            "دراسات دعم إزالة السموم الكبدية"
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
        "shortDescription": "نظير محفّز لمستقبلات GLP-1، يُستخدم على نطاق واسع في أبحاث الأيض وتنظيم الشهية",
        "composition": [
            "نظير اصطناعي محفّز لمستقبلات GLP-1",
            "مسحوق مجفف بالتجميد، بقارورة مقننة الجرعة بدقة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "نماذج بحثية لضبط مستوى السكر في الدم",
            "دراسات تنظيم الشهية والشعور بالشبع",
            "بروتوكولات بحثية لمعدل الأيض"
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
        "shortDescription": "محفّز انتقائي لهرمون النمو، يُدرس في أبحاث الكتلة العضلية النحيلة والتعافي",
        "composition": [
            "خماسي ببتيد، محفّز انتقائي لهرمون النمو",
            "مجفف بالتجميد، قارورة بحثية للاستخدام الواحد",
            "مختبر لضمان خلوّه من الذيفانات الداخلية والنقاء"
        ],
        "uses": [
            "أبحاث نبضات إفراز هرمون النمو",
            "دراسات الكتلة العضلية النحيلة والتعافي",
            "بروتوكولات بحثية لجودة النوم"
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
        "categories": [
            "Male Hormones, Fertility, Sexual Health & Tanning"
        ],
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "نظير للميلانوكورتين يُدرس في أبحاث استجابة التصبغ",
        "composition": [
            "نظير اصطناعي للهرمون المنبه للخلايا الصباغية (alpha-MSH)",
            "مسحوق مجفف بالتجميد، قارورة كهرمانية حساسة للضوء",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث مستقبلات الميلانوكورتين",
            "دراسات استجابة التصبغ",
            "أبحاث مسارات الشهية والرغبة الجنسية"
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
        "shortDescription": "نظير طويل المفعول لهرمون GHRH، غالبًا ما يُستخدم مع الإيبامورلين في بروتوكولات بحثية مركّبة",
        "composition": [
            "CJC-1295",
            "يُطيل أمد هرمون النمو الطبيعي في جسمك",
            "جسمك ينتج هرمون النمو أصلًا على شكل نبضات قصيرة",
            "وهذا الببتيد مصمم لإطالة أمد إفرازك الطبيعي، لا لاستبداله",
            "الفرق الجوهري: حقن هرمون النمو الصناعي يُغرق جسمك بهرمون خارجي",
            "وقد يوقف إنتاجك الطبيعي له",
            "أما CJC-1295 فيعمل بشكل مختلف — فهو نظير لهرمون GHRH",
            "أي نسخة من الإشارة الأصلية التي يستخدمها دماغك لإخبار الغدة النخامية",
            "بإنتاج هرمون النمو الخاص بها. فهو يعمل مع آلياتك الطبيعية لا حولها",
            "ميزته المميزة: هرمون GHRH الطبيعي يتحلل خلال دقائق",
            "بينما صُمم CJC-1295 ليقاوم ذلك، فيدوم لفترة أطول بكثير",
            "ليُحافظ على إفراز هرمون نموك الطبيعي لفترة أطول بدلًا من ارتفاع سريع",
            "ليس ذروة أكبر، بل إشارة أطول",
            "غالبًا ما يُستخدم مع الإيبامورلين لأنهما يعملان على مسارين مختلفين",
            "أحدهما يرفع إشارة \"أفرز المزيد\"، والآخر يُطلق نبضة نظيفة",
            "نظير معدّل لهرمون GHRH(1-29)، بدون DAC",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث محور هرمون النمو",
            "بروتوكولات مركّبة مع محفزات هرمون النمو",
            "دراسات التعافي وتركيب الجسم"
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
        "categories": [
            "Weight Loss, Metabolic Regulation & Insulin Resistance"
        ],
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "محفّز ثلاثي لمستقبلات GIP/GLP-1/الغلوكاغون، يُدرس في أبحاث معدل الأيض والوزن",
        "composition": [
            "ببتيد اصطناعي محفّز ثلاثي (مستقبلات GIP/GLP-1/الغلوكاغون)",
            "مسحوق مجفف بالتجميد، بقارورة مقننة الجرعة بدقة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث معدل الأيض واستهلاك الطاقة",
            "دراسات الوزن وتركيب الجسم",
            "نماذج بحثية لضبط مستوى السكر في الدم"
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
        "categories": [
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair"
        ],
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "ببتيد ناتج عن الميتوكوندريا، يُدرس في أبحاث الاتزان الأيضي والاستجابة للتمرين",
        "composition": [
            "MOTS-c",
            "على المستوى الخلوي",
            "رسالة من الميتوكوندريا الخاصة بك",
            "يمكن للميتوكوندريا أن ترسل رسائل إلى بقية الخلية",
            "وأحدها ببتيد يُسمى MOTS-c",
            "يتعلم الجميع أن الميتوكوندريا تنتج الطاقة ويتوقفون عند هذا الحد",
            "لكن المفاجأة هي أن لها حمضًا نوويًا منفصلًا خاصًا بها",
            "وهذا الحمض النووي يرمّز لببتيدات إشارية",
            "MOTS-c واحد منها. فعندما تتعرض خليتك لإجهاد أيضي",
            "ينتقل MOTS-c من الميتوكوندريا إلى النواة — مركز التحكم في الخلية",
            "ويساعد في التأثير على الجينات التي يتم تفعيلها",
            "رسالة تُرسل من محطات الطاقة إلى مركز القيادة، تُخبر الخلية كيف تتكيف",
            "الرسالة تتمحور غالبًا حول الأيض: فهو يُدرس لتفعيل إنزيم AMPK (المنظم الرئيسي للطاقة)",
            "وتحسين حساسية الإنسولين، ومساعدة الخلايا على التعامل مع الغلوكوز والإجهاد",
            "وتنخفض مستوياته مع التقدم في العمر، لهذا يهتم به باحثو طول العمر كثيرًا",
            "جزيء التمرين",
            "اكتشف العلماء جزيئًا يحاكي تأثير التمرين",
            "وجسمك ينتجه أصلًا",
            "يُسمى MOTS-c، والمثير في الأمر أنه لا يُصنع بواسطة حمضك النووي المعتاد",
            "بل مُشفّر داخل الميتوكوندريا",
            "محطات الطاقة الصغيرة داخل خلاياك",
            "فالميتوكوندريا في جوهرها ترسل إشارات كيميائية إلى بقية جسمك",
            "والرسالة هي: احرق الوقود، تكيّف، كن لائقًا أيضيًا",
            "فهو يُفعّل نفس المفتاح (AMPK) الذي يُفعّله التمرين",
            "والصيام والتعرض للبرد",
            "لهذا يُطلق عليه البعض \"جزيء التمرين\"",
            "وترتبط الأبحاث به بتحسين حساسية الإنسولين والصحة الأيضية",
            "وتنخفض مستوياته مع التقدم في العمر — وقد يكون هذا جزءًا من سبب تباطؤ الأيض بمرور الوقت",
            "وهو ليس بديلًا عن التمرين الفعلي",
            "والأبحاث البشرية عليه ما زالت في بدايتها",
            "لكن فكرة أن الميتوكوندريا تُنتج \"إشارة تمرين\" أمر مذهل نوعًا ما",
            "ببتيد اصطناعي ناتج عن الميتوكوندريا (16 حمضًا أمينيًا)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث الاتزان الأيضي والميتوكوندريا",
            "دراسات حساسية الإنسولين",
            "أبحاث الاستجابة للتمرين والشيخوخة"
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
        "categories": [
            "Male Hormones, Fertility, Sexual Health & Tanning"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "محفّز لمستقبلات الميلانوكورتين (بريميلانوتيد)، يُدرس في أبحاث مسارات الرغبة والإثارة",
        "composition": [
            "PT-141",
            "علم الأعصاب",
            "الرغبة تبدأ في الدماغ",
            "كل علاج سمعت عنه لضعف الرغبة الجنسية يعمل على تدفق الدم",
            "أما هذا فيعمل على الدماغ",
            "اكتُشف PT-141 بالصدفة",
            "كان الباحثون يدرسون ببتيدًا للتسمير",
            "ولاحظوا تأثيرًا غير متوقع أثناء التجارب",
            "وهنا الأمر الذي يغفل عنه معظم الناس",
            "أدوية ضعف الانتصاب الشهيرة تعمل على الأوعية الدموية",
            "فهي تُحسّن تدفق الدم ليحدث استجابة جسدية",
            "لكنها لا تفعل شيئًا للرغبة الفعلية",
            "فإن لم تكن الرغبة موجودة، لن يُصلحها تدفق الدم",
            "أما PT-141 فيعمل في مرحلة أسبق",
            "بتفعيل مستقبلات الميلانوكورتين في منطقة الوطاء",
            "الجزء من دماغك المسؤول عن الإثارة والدافع",
            "فهو يستهدف الإشارة نفسها، لا الأنابيب",
            "ولهذا هو الوحيد المعتمد لعلاج ضعف الرغبة لا الخلل الجسدي",
            "فالرغبة عصبية قبل أن تكون جسدية",
            "محفّز اصطناعي لمستقبلات الميلانوكورتين (بريميلانوتيد)",
            "مسحوق مجفف بالتجميد، قارورة كهرمانية",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث مستقبلات الميلانوكورتين ومسارات الرغبة الجنسية",
            "دراسات إثارة الجهاز العصبي المركزي",
            "بروتوكولات مركّبة مع Melanotan II"
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
        "categories": [
            "Anti-Aging, Cellular Immunity & Mitochondrial Repair"
        ],
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "ثنائي نوكليوتيد النيكوتيناميد أدينين، يُدرس في أبحاث الطاقة الخلوية وطول العمر",
        "composition": [
            "NAD+",
            "يعيد شحن خلاياك",
            "يوجد جزيء داخل كل خلية يُشغّل طاقتك",
            "ويُصلح حمضك النووي — ويقل مستواه مع التقدم في العمر",
            "يُسمى NAD+، وتستخدمه كل خلية",
            "تخيله عملة قابلة لإعادة الشحن تنفقها خلاياك لتحويل الطعام إلى طاقة",
            "ولتشغيل طواقم الإصلاح التي تُصلح حمضك النووي",
            "المشكلة: تنخفض مستويات NAD+ لديك مع التقدم في العمر —",
            "فبحلول منتصف العمر يكون لديك جزء بسيط مما كان لديك في شبابك",
            "ومع انخفاضه، تنتج الخلايا الطاقة بكفاءة أقل، ويتباطأ إصلاح الحمض النووي",
            "وتبدأ الميتوكوندريا في المعاناة",
            "ويُنظر إلى هذا التراجع الآن كأحد الخيوط الأساسية للشيخوخة",
            "المشكلة: لا يمكنك ببساطة تناول NAD+ — فهو أكبر من أن يصل إلى خلاياك وغير مستقر",
            "لذلك تركز الأبحاث على سلائف مثل NMN وNR — لبنات بناء أصغر يحوّلها جسمك إلى NAD+",
            "ثنائي نوكليوتيد النيكوتيناميد أدينين (الشكل المؤكسد)",
            "مسحوق مجفف بالتجميد، قارورة محمية من الضوء",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث الطاقة الخلوية الأيضية",
            "دراسات وظائف الميتوكوندريا وطول العمر",
            "نماذج أبحاث الإجهاد التأكسدي"
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
        "shortDescription": "خليط مركّبات مذيبة للدهون، يُدرس في أبحاث التحلل الدهني الموضعي ونحت الجسم",
        "composition": [
            "خليط مركّبات حالّة للدهون بتركيبة خاصة",
            "محلول معقّم جاهز للاستخدام",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث التحلل الدهني الموضعي",
            "بروتوكولات دراسة نحت الجسم",
            "نماذج تقليل الدهون تحت الجلد"
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
        "categories": [
            "Male Hormones, Fertility, Sexual Health & Tanning"
        ],
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "نظير للكيسبيبتين، يُدرس في أبحاث محور التكاثر والإشارات الهرمونية",
        "composition": [
            "KissPeptin",
            "المفتاح الرئيسي لهرموناتك",
            "يوجد مفتاح جزيئي واحد يجب أن يُفعَّل قبل أن يُنتج جسمك تقريبًا أي هرمون تكاثري",
            "منظومتك الهرمونية تعمل بسلسلة قيادة، ويقف الكيسبيبتين في أعلاها تمامًا",
            "فعندما يُفعَّل، يُحفّز GnRH الذي بدوره يُحفّز LH وFSH اللذين يُنتجان التستوستيرون والإستروجين",
            "لا شيء يحدث في السلسلة قبل أن يُفعَّل الكيسبيبتين أولًا",
            "لهذا يُسمى المفتاح الرئيسي — فهو شرارة الانطلاق للسلسلة بأكملها",
            "ولم يُكتشف دوره هذا إلا في أوائل الألفينات",
            "مما غيّر بالكامل فهم العلماء لهذه المنظومة",
            "ولأنه يقف في القمة، يُدرس في أبحاث الخصوبة",
            "واضطرابات البلوغ، والحالات التي لا يُفعَّل فيها هذا المفتاح الطبيعي بشكل صحيح",
            "بالعمل مع إشارات جسمك الطبيعية بدلًا من إغراقه بالهرمونات",
            "نظير اصطناعي للكيسبيبتين",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث إشارات محور الغدة النخامية-التناسلية (HPG)",
            "دراسات استجابة نبضات GnRH",
            "نماذج أبحاث التنظيم الهرموني"
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
        "shortDescription": "خليط مركّب من BPC-157 بـ10 ملغ، وGHK-Cu بـ50 ملغ، وTB-500 بـ10 ملغ، وKPV بـ10 ملغ، لأبحاث التعافي المتكاملة",
        "composition": [
            "BPC-157 بمقدار 10 ملغ",
            "GHK-Cu بمقدار 50 ملغ",
            "TB-500 بمقدار 10 ملغ",
            "KPV بمقدار 10 ملغ",
            "خليط مركّب مجفف بالتجميد، قارورة واحدة"
        ],
        "uses": [
            "أبحاث إصلاح الأنسجة والتعافي المتكاملة",
            "دراسات المسارات المضادة للالتهاب المركّبة",
            "بروتوكولات أبحاث الجلد والعضلات الهيكلية"
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
        "shortDescription": "رباعي ببتيد اصطناعي، يُدرس في أبحاث تفعيل التيلوميراز وطول العمر",
        "composition": [
            "رباعي ببتيد اصطناعي (Ala-Glu-Asp-Gly)",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث تفعيل إنزيم التيلوميراز",
            "دراسات الإيقاع اليومي والغدة الصنوبرية",
            "أبحاث الشيخوخة الخلوية وطول العمر"
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
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "جزء معدَّل من هرمون النمو البشري، يُدرس في أبحاث التحلل الدهني دون تأثير على سكر الدم أو IGF-1",
        "composition": [
            "جزء معدَّل من هرمون النمو البشري (نظير 176-191)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث التحلل الدهني وأيض الدهون",
            "نماذج أبحاث إصلاح الغضاريف",
            "دراسات تركيب الجسم"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "selank",
        "name": "Selank",
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "نظير سباعي ببتيد اصطناعي من التافتسين، يُدرس في أبحاث تقليل القلق والوظائف الإدراكية",
        "composition": [
            "سباعي ببتيد اصطناعي (نظير التافتسين)",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث مسارات تقليل القلق",
            "دراسات الوظائف الإدراكية والمرونة العصبية",
            "نماذج أبحاث الاستجابة للتوتر"
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
        "shortDescription": "نظير سباعي ببتيد اصطناعي من ACTH(4-10)، يُدرس في أبحاث الحماية العصبية والوظائف الإدراكية",
        "composition": [
            "سباعي ببتيد اصطناعي (نظير ACTH(4-10))",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث مسارات الحماية العصبية",
            "دراسات الأداء الإدراكي وعامل BDNF",
            "نماذج أبحاث العوامل التغذوية العصبية"
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
        "shortDescription": "رباعي ببتيد موجّه للميتوكوندريا (إيلاميبريتيد)، يُدرس في أبحاث الإجهاد التأكسدي والميتوكوندريا",
        "composition": [
            "رباعي ببتيد اصطناعي موجّه للميتوكوندريا (إيلاميبريتيد)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث اختلال وظائف الميتوكوندريا",
            "دراسات تقليل الإجهاد التأكسدي",
            "أبحاث الطاقة الخلوية والشيخوخة"
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
        "category": "Skin, Hair Care",
        "categories": [
            "Skin, Hair Care",
            "Organ-Specific Bioregulators & Therapeutic Compounds"
        ],
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "ثماني ببتيد يُدرس في أبحاث تقليل التجاعيد الموضعي والإشارات العصبية العضلية",
        "composition": [
            "ثماني ببتيد اصطناعي (نظير جزء SNAP-25)",
            "مسحوق مجفف بالتجميد أو محلول بدرجة تجميلية",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث تقليل التجاعيد الموضعي",
            "دراسات الإشارات العصبية العضلية",
            "أبحاث تركيبات العناية بالجلد التجميلية"
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
        "shortDescription": "هرمون تساعي ببتيد، يُدرس في أبحاث الترابط الاجتماعي والمزاج والغدد الصماء العصبية",
        "composition": [
            "هرمون تساعي ببتيد اصطناعي",
            "مسحوق مجفف بالتجميد، قارورة محمية من الضوء",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث مسارات الترابط الاجتماعي والمزاج",
            "دراسات إشارات الغدد الصماء العصبية",
            "نماذج أبحاث الاستجابة للتوتر"
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
        "shortDescription": "مستحضر ببتيدات عصبية، يُدرس في أبحاث العوامل التغذوية العصبية والتعافي الإدراكي",
        "composition": [
            "مستحضر ببتيدات عصبية منخفضة الوزن الجزيئي",
            "محلول معقّم، أمبولة للاستخدام الواحد",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث العوامل التغذوية العصبية",
            "بروتوكولات دراسة التعافي الإدراكي",
            "نماذج أبحاث المرونة العصبية"
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
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "ببتيد مشتق من الإريثروبويتين، يُدرس في أبحاث الألم العصبي ومضادات الالتهاب",
        "composition": [
            "ببتيد اصطناعي مشتق من الإريثروبويتين",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث مسارات الألم العصبي",
            "دراسات الإشارات المضادة للالتهاب",
            "نماذج أبحاث حماية الأنسجة"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "dsip",
        "name": "DSIP",
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "ببتيد دلتا المحفّز للنوم، يُدرس في أبحاث تنظيم النوم والاستجابة للتوتر",
        "composition": [
            "ببتيد دلتا اصطناعي محفّز للنوم (DSIP)",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث مسارات تنظيم النوم",
            "دراسات الإيقاع اليومي",
            "أبحاث التوتر واستجابة الكورتيزول"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "dihexa",
        "name": "DiHexa",
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "مركّب جزيئي صغير معزّز للإدراك، يُدرس في أبحاث تكوّن التشابكات العصبية وتحسين الإدراك",
        "composition": [
            "مركّب جزيئي صغير اصطناعي معزّز للإدراك",
            "مسحوق مجفف بالتجميد أو بتركيبة كبسولة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث تكوّن التشابكات العصبية والمرونة العصبية",
            "بروتوكولات دراسة تحسين الإدراك",
            "نماذج أبحاث مسار HGF/c-Met"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "ll-37",
        "name": "LL-37",
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "ببتيد الكاثيليسيدين البشري المضاد للميكروبات، يُدرس في أبحاث المناعة وشفاء الجروح",
        "composition": [
            "ببتيد كاثيليسيدين بشري اصطناعي (LL-37)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث المناعة الفطرية ومضادات الميكروبات",
            "دراسات مسارات شفاء الجروح",
            "نماذج أبحاث الإشارات الالتهابية"
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
        "shortDescription": "بروتين سكري مثبّط للميوستاتين، يُدرس في أبحاث نمو العضلات وتركيب الجسم",
        "composition": [
            "بروتين سكري مؤتلف من الفوليستاتين (Follistatin-344)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث مسار تثبيط الميوستاتين",
            "دراسات نمو العضلات وضخامتها",
            "نماذج أبحاث تركيب الجسم"
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
        "shortDescription": "رباعي ببتيد يُدرس في أبحاث التوصيل المستهدف لأنسجة الدماغ والحبل الشوكي المصابة",
        "composition": [
            "رباعي ببتيد اصطناعي (Cys-Ala-Gln-Lys)",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث استهداف إصابات الجهاز العصبي المركزي",
            "دراسات مسارات إصلاح الأنسجة العصبية",
            "نماذج أبحاث استهداف توصيل الأدوية"
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
        "purity": "99.7%",
        "showPurity": false,
        "shortDescription": "ثلاثي ببتيد نحاسي يُدرس في أبحاث تصنيع الكولاجين وشفاء الجروح الجلدية",
        "composition": [
            "معقّد ثلاثي ببتيد نحاسي (Ala-His-Lys-Cu)",
            "مسحوق مجفف بالتجميد، قارورة زرقاء اللون",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث تصنيع الكولاجين وإصلاح الجلد",
            "دراسات مسارات شفاء الجروح",
            "نماذج أبحاث مكافحة شيخوخة البشرة"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "cjc-1295-no-dac-ipamorelin",
        "name": "CJC-1295 (No DAC) + iPamorelin",
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.8%",
        "showPurity": false,
        "shortDescription": "خليط مركّب يجمع بين نظير GHRH بدون DAC ومحفّز انتقائي لهرمون النمو لأبحاث متكاملة",
        "composition": [
            "CJC-1295 (بدون DAC)، نظير معدَّل لهرمون GHRH(1-29)",
            "Ipamorelin، خماسي ببتيد محفّز انتقائي لهرمون النمو",
            "خليط مركّب مجفف بالتجميد، قارورة واحدة"
        ],
        "uses": [
            "أبحاث محور هرمون النمو المركّبة",
            "بروتوكولات متكاملة للتعافي والكتلة النحيلة",
            "دراسات جودة النوم وتركيب الجسم"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "kpv",
        "name": "KPV",
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.5%",
        "showPurity": false,
        "shortDescription": "جزء ثلاثي ببتيد من alpha-MSH، يُدرس في أبحاث مضادات الالتهاب وحاجز الأمعاء",
        "composition": [
            "ثلاثي ببتيد اصطناعي (Lys-Pro-Val، جزء من alpha-MSH)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث المسارات المضادة للالتهاب",
            "دراسات حاجز الجهاز الهضمي",
            "نماذج أبحاث الشفاء الجلدي"
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
        "shortDescription": "نظير لهرمون GHRH، يُدرس في أبحاث تقليل الدهون الحشوية ومحور هرمون النمو",
        "composition": [
            "نظير اصطناعي لهرمون GHRH (تيسامورلين)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "موثّق بواسطة HPLC، مصدره مختبرات أوروبية"
        ],
        "uses": [
            "أبحاث تقليل الدهون الحشوية",
            "دراسات محور هرمون النمو",
            "أبحاث الأيض وتركيب الجسم"
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
        "shortDescription": "عشاري ببتيد اصطناعي من GnRH، يُدرس في أبحاث محور التكاثر والتنظيم الهرموني",
        "composition": [
            "عشاري ببتيد اصطناعي من الهرمون المطلق لموجهة الغدد التناسلية",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "اختبار دفعات معتمد أوروبيًا"
        ],
        "uses": [
            "أبحاث محور HPG والهرمونات التكاثرية",
            "دراسات استجابة نبضات LH/FSH",
            "نماذج أبحاث مسار الخصوبة"
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
        "shortDescription": "موجهة الغدد التناسلية المستخلصة من مصل النساء بعد سن اليأس، تُدرس في أبحاث الخصوبة والهرمونات التكاثرية",
        "composition": [
            "موجهة الغدد التناسلية البشرية بعد سن اليأس (فعالية FSH/LH)",
            "مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "نقاء موثّق بواسطة HPLC من طرف ثالث"
        ],
        "uses": [
            "أبحاث الخصوبة وتحفيز المبايض",
            "دراسات مسار موجهات الغدد التناسلية",
            "نماذج أبحاث الهرمونات التكاثرية"
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
        "shortDescription": "الببتيد المعوي الوعائي النشط، يُدرس في أبحاث تعديل المناعة وأمراض التعرض للعفن",
        "composition": [
            "ببتيد معوي وعائي نشط اصطناعي (VIP)",
            "مسحوق مجفف بالتجميد، بتركيبة القارورة الواحدة",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث تعديل المناعة",
            "دراسات مسارات الالتهاب العصبي",
            "أبحاث الغدة النخامية والتنظيم الهرموني"
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
        "shortDescription": "إنقاص الوزن",
        "composition": [
            "إنقاص الوزن"
        ],
        "uses": [
            "إنقاص الوزن"
        ],
        "images": [
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-5-mg.webp",
            "assets/products/tirzepatide-mounjaro/tirzepatide-mounjaro-10-mg.webp"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "الجزء الطرفي C من هرمون النمو البشري (الأحماض الأمينية 176-191) الذي يحفز تحلل الدهون ويثبط تصنيعها دون أي تأثير على مستويات السكر في الدم أو حساسية الأنسولين.",
        "composition": [
            "يحفز تحلل الدهون (lipolysis) من الخلايا الشحمية",
            "يثبط تصنيع الدهون الجديدة (lipogenesis)",
            "لا يؤثر على مستويات الجلوكوز أو الأنسولين في الدم",
            "لا يؤثر على محور IGF-1 أو تكاثر الخلايا"
        ],
        "uses": [
            "فقدان الدهون المستهدف دون آثار جانبية استقلابية",
            "إعادة تشكيل الجسم",
            "يُدمج مع ببتيدات أخرى لتعزيز حرق الدهون"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ناهض مزدوج لمستقبلي GLP-1 والجلوكاجون مصمم لموازنة قمع الشهية مع تعزيز أكسدة الأحماض الدهنية الكبدية، مما يقلل كتلة الدهون الكلية ويحسن ملف الدهون.",
        "composition": [
            "ناهض مزدوج لمستقبلي GLP-1 والجلوكاجون",
            "يقمع الشهية عبر مسار GLP-1",
            "يعزز أكسدة الأحماض الدهنية الكبدية عبر مستقبل الجلوكاجون",
            "يحسن ملف الدهون ويقلل الدهون الحشوية"
        ],
        "uses": [
            "إدارة الوزن والسمنة",
            "دعم أمراض الكبد الاستقلابية",
            "تحسين ملف الدهون"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ناهض مزدوج لمستقبلي GLP-1 والجلوكاجون يستهدف فقدان الوزن السريري المتقدم وأمراض الكبد الاستقلابية عن طريق تحفيز استهلاك الطاقة في الأنسجة الطرفية وحرق الدهون الحشوية العميقة.",
        "composition": [
            "ناهض مزدوج لمستقبلي GLP-1 والجلوكاجون",
            "يحفز استهلاك الطاقة في الأنسجة الطرفية",
            "يحرق الدهون الحشوية والكبدية العميقة",
            "يستهدف التهاب الكبد الدهني المرتبط بالاستقلاب (MASH)"
        ],
        "uses": [
            "فقدان الوزن السريري المتقدم",
            "أمراض الكبد الاستقلابية (MASH/NAFLD)",
            "تقليل الدهون الحشوية"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير صناعي طويل المفعول للأميلين يؤخر امتصاص العناصر الغذائية ويعزز الشعور بالامتلاء المعدي؛ يُستخدم مع السيماجلوتيد لاستهداف الجوع عبر مسارين بيولوجيين مستقلين.",
        "composition": [
            "نظير صناعي طويل المفعول للأميلين",
            "يؤخر إفراغ المعدة وامتصاص العناصر الغذائية",
            "يعزز الشعور بالشبع والامتلاء المعدي",
            "تآزر مع السيماجلوتيد لقمع الشهية بمسارين مختلفين"
        ],
        "uses": [
            "تعزيز فقدان الوزن",
            "التحكم في الشهية عبر مسار الأميلين",
            "بروتوكولات مشتركة مع السيماجلوتيد لنتائج محسّنة"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد استهدافي مُحفِّز للموت الخلوي المبرمج يرتبط انتقائياً بأوعية دموية الأنسجة الدهنية البيضاء، يقطع إمدادها الدموي لتحفيز موت الخلايا الشحمية وتقليل الدهون بسرعة.",
        "composition": [
            "ببتيد استهدافي لأوعية الأنسجة الدهنية البيضاء",
            "يرتبط بـ PROHIBITIN على أوعية الخلايا الشحمية",
            "يقطع الإمداد الدموي محفزاً الموت الخلوي المبرمج",
            "تقليل سريع ومستهدف للأنسجة الدهنية"
        ],
        "uses": [
            "تقليل الدهون المستهدف في مناطق معينة",
            "أبحاث السمنة وموت الخلايا الشحمية",
            "القضاء على الدهون الحشوية وتحت الجلد"
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
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد موجّه مؤيد للاستماتة يرتبط انتقائياً بالأوعية الدموية المغذية للأنسجة الدهنية البيضاء، مما يقطع إمداد الدم ويُحفّز موت الخلايا الدهنية.",
        "composition": [
            "ببتيد مؤيد للاستماتة يستهدف أوعية الأنسجة الدهنية البيضاء",
            "يرتبط انتقائياً ببروتين PROHIBITIN في أوعية الدهون",
            "يقطع إمداد الدم عن الخلايا الدهنية مُحفّزاً الاستماتة",
            "تقليل سريع ومستهدف للأنسجة الدهنية"
        ],
        "uses": [
            "تقليل الدهون المستهدف في مناطق محددة",
            "أبحاث السمنة واستماتة الأنسجة الدهنية",
            "القضاء على الدهون الحشوية والتحت جلدية"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "مثبط صغير الجزيء لإنزيم NNMT في الأنسجة الدهنية يرفع مستويات NAD+ داخل الخلايا، ويسرّع معدل الأيض الأساسي، ويحفز حرق الدهون مع الحفاظ على الكتلة العضلية.",
        "composition": [
            "مثبط إنزيم نيكوتيناميد N-ميثيل ترانسفيراز (NNMT)",
            "يرفع مستويات NAD+ داخل الخلايا الدهنية",
            "يسرّع معدل الأيض الأساسي",
            "يحفز أكسدة الدهون مع الحفاظ على الكتلة العضلية"
        ],
        "uses": [
            "تحسين معدل الأيض",
            "حرق الدهون مع الحفاظ على العضلات",
            "دعم مسار NAD+"
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
        ],
        "featured": true,
        "bestSeller": true
    },
    {
        "id": "slu-pp-322",
        "name": "SLU-PP-322",
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ناهض لمستقبل ERR الاستقلابي يحفز العضلات الهيكلية على استهلاك الأحماض الدهنية وإنتاج الطاقة، محاكياً التكيفات الفسيولوجية للتمرين الهوائي دون بذل جهد جسدي.",
        "composition": [
            "ناهض لمستقبلات ERR المرتبطة بالإستروجين",
            "يحفز العضلات الهيكلية على استهلاك الأحماض الدهنية",
            "يحاكي التكيفات الاستقلابية للتمرين الهوائي",
            "يعزز تكوين الميتوكوندريا والطاقة التأكسدية"
        ],
        "uses": [
            "محاكاة التمرين لفوائد استقلابية",
            "حرق الدهون عبر استهلاك الطاقة العضلية",
            "دعم اللياقة الاستقلابية"
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
        "category": "Weight Loss, Metabolic Regulation & Insulin Resistance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "حمض أميني ناقل ينقل الأحماض الدهنية طويلة السلسلة إلى مصفوفة الميتوكوندريا لتوليد ATP، يدعم أداء التمرين وأكسدة الدهون.",
        "composition": [
            "حمض أميني ناقل يُصنَّع من اللايسين والميثيونين",
            "ينقل الأحماض الدهنية طويلة السلسلة إلى الميتوكوندريا",
            "يسهّل أكسدة بيتا لتوليد ATP",
            "يدعم أداء التمرين والتعافي"
        ],
        "uses": [
            "أكسدة الدهون خلال التمرين",
            "دعم استقلاب الطاقة",
            "تحسين الأداء الرياضي"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "هرمون النمو البشري المؤتلف (191 حمضاً أمينياً) مطابق لهرمون النمو الطبيعي من الغدة النخامية، يحفز إنتاج IGF-1 لبناء العضلات وحرق الدهون والتعافي ومكافحة الشيخوخة.",
        "composition": [
            "هرمون النمو البشري المؤتلف (191 حمضاً أمينياً)",
            "تسلسل مطابق لهرمون النمو الطبيعي من الغدة النخامية",
            "يحفز إنتاج IGF-1 الكبدي",
            "يعزز الإشارات الابتنائية في العضلات والعظام والأنسجة الضامة"
        ],
        "uses": [
            "بناء العضلات وإعادة تشكيل الجسم",
            "حرق الدهون وتحسين الاستقلاب",
            "تسريع التعافي",
            "مكافحة الشيخوخة والتجديد الخلوي"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير صناعي لهرمون GHRH (1-29) يحفز الغدة النخامية على إنتاج وإفراز هرمون النمو الطبيعي في نمط نبضي فسيولوجي.",
        "composition": [
            "نظير صناعي لـ GHRH (الأحماض الأمينية 1-29)",
            "يحفز إطلاق هرمون النمو نبضياً من الغدة النخامية",
            "يحافظ على آلية التغذية الراجعة الطبيعية لهرمون النمو",
            "يرفع مستويات IGF-1 عبر تحفيز هرمون النمو الذاتي"
        ],
        "uses": [
            "تحسين مستويات هرمون النمو الطبيعي",
            "مكافحة الشيخوخة وإعادة تشكيل الجسم",
            "علاج نقص هرمون النمو",
            "تحسين جودة النوم والتعافي"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "محاكٍ قوي للجريلين ومحفز لإفراز هرمون النمو يحفز بشكل كبير إطلاق هرمون النمو من الغدة النخامية مع رفع مستويات IGF-1 وتعزيز الشهية.",
        "composition": [
            "سداسي ببتيد صناعي ناهض لمستقبل الجريلين",
            "يحفز بقوة إفراز هرمون النمو من الغدة النخامية",
            "يرفع مستويات IGF-1",
            "يعزز الشهية وحركة المعدة"
        ],
        "uses": [
            "تضخيم نبضات هرمون النمو",
            "بناء العضلات وحرق الدهون",
            "التعافي ومكافحة الشيخوخة",
            "تحفيز الشهية"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير الجريلين الذي يحفز إطلاق هرمون النمو من الغدة النخامية مع زيادة ملحوظة في الشهية، مما يجعله مثالياً لبروتوكولات زيادة الكتلة العضلية.",
        "composition": [
            "سداسي ببتيد ناهض لمستقبل الجريلين",
            "يحفز إطلاق هرمون النمو من الغدة النخامية الأمامية",
            "يزيد الشهية بشكل ملحوظ (تأثير الجريلين)",
            "يرفع مستويات IGF-1 ويعزز البيئة الابتنائية"
        ],
        "uses": [
            "تحفيز هرمون النمو لزيادة الكتلة العضلية",
            "بروتوكولات بناء الحجم والكتلة",
            "دعم التعافي والشفاء",
            "يُدمج مع نظائر GHRH لتأثير تآزري"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "أحد أقوى محفزات إفراز هرمون النمو المتاحة، يطلق نبضات قوية من الغدة النخامية مع تأثيرات وقائية إضافية للقلب ومضادة للتليف.",
        "composition": [
            "سداسي ببتيد محفز لهرمون النمو (الأقوى في فئته)",
            "يطلق نبضات قوية من الغدة النخامية",
            "وقائي للقلب عبر مستقبلات GHS-R وCD36",
            "تأثيرات مضادة للتليف في الأنسجة القلبية"
        ],
        "uses": [
            "التحفيز الأقصى لهرمون النمو",
            "حماية القلب والتعافي القلبي",
            "بناء العضلات وحرق الدهون",
            "بروتوكولات مكافحة الشيخوخة"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "محاكٍ فموي نشط للجريلين يحفز الإفراز المستمر لهرمون النمو وIGF-1، محسّناً الكتلة العضلية وكثافة العظام وجودة النوم واستقلاب الدهون.",
        "composition": [
            "محفز هرمون النمو غير الببتيدي الفموي النشط",
            "يحاكي الجريلين لتحفيز إطلاق هرمون النمو وIGF-1",
            "ارتفاع مستدام لهرمون النمو لمدة 24 ساعة بجرعة واحدة",
            "يحسن مراحل النوم العميق (SWS)"
        ],
        "uses": [
            "تحسين هرمون النمو فمياً (دون حقن)",
            "بناء الكتلة العضلية والقوة",
            "تحسين كثافة العظام",
            "تحسين جودة النوم"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير طويل المفعول لعامل النمو الشبيه بالأنسولين-1 بعمر نصف 13 مرة أطول من IGF-1 الطبيعي، يحفز تكاثر الخلايا العضلية وتنشيط الخلايا الساتلايت وتحسين امتصاص العناصر الغذائية.",
        "composition": [
            "نظير IGF-1 LR3 بعمر نصف 20-30 ساعة ممتد",
            "يرتبط بمستقبلات IGF-1R لتحفيز بناء البروتين العضلي",
            "يحفز تكاثر الخلايا الساتلايت (فرط التضخم)",
            "يعزز امتصاص الجلوكوز والأحماض الأمينية داخل الخلايا"
        ],
        "uses": [
            "فرط تضخم العضلات وزيادة الكتلة النحيلة",
            "توزيع العناصر الغذائية بعد التمرين",
            "بروتوكولات هرمون النمو + IGF-1 المدمجة",
            "التعافي من الإصابات وإصلاح الأنسجة"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير IGF-1 مبتور وعالي الفاعلية لا يرتبط ببروتينات الربط، يوفر تأثيرات ابتنائية فورية وموضعية في موقع الحقن.",
        "composition": [
            "IGF-1 مبتور يفتقر للأحماض الأمينية 1-3",
            "لا يرتبط ببروتينات ربط IGF (IGFBPs)",
            "إشارة ابتنائية فورية وموضعية",
            "تقارب أعلى للمستقبلات من IGF-1 القياسي"
        ],
        "uses": [
            "نمو الأنسجة العضلية الموضعي في موقع الحقن",
            "تعزيز المجموعات العضلية المتأخرة",
            "شفاء وتجديد موقع الإصابة",
            "بروتوكولات تحفيز فرط التضخم"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "عامل النمو الميكانيكي (MGF) وصيغته المبيغلة PEG-MGF تنشّطان الخلايا الساتلايت العضلية بعد التمرين أو الإصابة لتحفيز إصلاح موضعي وتضخم عضلي.",
        "composition": [
            "متغير نضج IGF-1 يُنتج محلياً في الأنسجة العضلية",
            "يُنشِّط الخلايا الساتلايت الكامنة لإصلاح العضلات",
            "صيغة PEG تمدد عمر النصف من دقائق إلى أيام",
            "إشارة تضخمية وتجديدية موضعية"
        ],
        "uses": [
            "التعافي وإصلاح العضلات بعد التمرين",
            "التضخم العضلي الموضعي",
            "شفاء الإصابات الرياضية",
            "بروتوكولات تنشيط الخلايا الساتلايت"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "بروتين اندماجي يعمل كمصيدة للميوستاتين، يمنع إشارات الميوستاتين والأكتيفين لإزالة الكابح الطبيعي على نمو العضلات وزيادة الكتلة النحيلة بشكل ملحوظ.",
        "composition": [
            "بروتين اندماجي لمستقبل الأكتيفين IIB (ActRIIB)",
            "يلتقط الميوستاتين وروابط عائلة TGF-beta الأخرى",
            "يزيل الكابح الطبيعي على نمو العضلات الهيكلية",
            "يزيد الكتلة العضلية النحيلة بشكل ملحوظ"
        ],
        "uses": [
            "زيادة الكتلة النحيلة القصوى",
            "أبحاث ضمور العضلات",
            "بناء القوة والعضلات",
            "بروتوكولات تثبيط الميوستاتين"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "منشط لمسار AMPK يحاكي التأثيرات الاستقلابية للتمرين، يزيد أكسدة الأحماض الدهنية وتكوين الميتوكوندريا وقدرة التحمل.",
        "composition": [
            "منشط مسار AMPK (نظير AMP)",
            "يحاكي التأثيرات الاستقلابية للتمرين الهوائي",
            "يزيد أكسدة الأحماض الدهنية وامتصاص الجلوكوز",
            "يحفز تكوين الميتوكوندريا الجديدة"
        ],
        "uses": [
            "تحسين التحمل دون تمرين",
            "حرق الدهون والتحسين الاستقلابي",
            "دعم صحة القلب والأوعية",
            "بروتوكولات محاكاة التمرين المدمجة"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "هرمون بروتيني سكري يحفز إنتاج كريات الدم الحمراء في نخاع العظام، يزيد بشكل كبير من قدرة نقل الأكسجين وأداء التحمل.",
        "composition": [
            "هرمون إريثروبويتين البروتيني السكري المؤتلف",
            "يحفز إنتاج كريات الدم الحمراء في نخاع العظام",
            "يزيد بشكل كبير من قدرة نقل الأكسجين",
            "يحسن VO2max والتحمل الهوائي"
        ],
        "uses": [
            "تحسين الأداء الهوائي والتحمل",
            "دعم علاج الأنيميا",
            "التكيف مع الارتفاع",
            "تحسين توصيل الأكسجين"
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
        "category": "Growth Hormone Secretagogues, Hypertrophy & Endurance",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "نظير GHRH بتقنية مركب تقارب الدواء (DAC) يمدد عمر نصفه إلى 6-8 أيام، يوفر ارتفاعاً مستداماً لهرمون النمو وIGF-1 بجرعة أسبوعية واحدة.",
        "composition": [
            "نظير GHRH معدّل بتقنية DAC",
            "عمر نصف ممتد 6-8 أيام (جرعة أسبوعية واحدة)",
            "ارتفاع مستدام لهرمون النمو وIGF-1",
            "يحافظ على نمط الإفراز النبضي لهرمون النمو"
        ],
        "uses": [
            "تحسين هرمون النمو أسبوعياً مريحاً",
            "بناء الكتلة العضلية وإعادة تشكيل الجسم",
            "مكافحة الشيخوخة والتعافي",
            "إدارة نقص هرمون النمو"
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
        "name": "BPC-157 + TB-500 Blend",
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "مزيج علاجي تآزري يجمع إصلاح BPC-157 الوعائي الموضعي مع الوصول الجهازي لـ TB-500، للتعافي السريع من الإصابات الرياضية والصدمات الجراحية.",
        "composition": [
            "BPC-157: إصلاح وعائي وأوتار وجهاز هضمي موضعي",
            "TB-500: تنظيم الأكتين الجهازي وشفاء الأنسجة اللينة",
            "تعافٍ مزدوج الإجراء للأنسجة",
            "يقلل تكوين النسيج الندبي والتليفي"
        ],
        "uses": [
            "التعافي من الإصابات الرياضية",
            "الشفاء من الصدمات الجراحية",
            "إصلاح الأوتار والأربطة",
            "التعافي الشامل للأنسجة اللينة"
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
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد بيوريغيولاتوري قصير (Ala-Glu-Asp) يستهدف الخلايا الغضروفية مباشرة، يحفز تخليق الكولاجين الذاتي لتجديد الغضروف المفصلي التالف في التهاب المفاصل والتنكس الفقري.",
        "composition": [
            "ببتيد بيوريغيولاتوري ثلاثي يستهدف الخلايا الغضروفية",
            "يحفز تخليق الكولاجين الذاتي",
            "يجدد الغضروف المفصلي التالف والمتآكل",
            "يدعم تجديد القرص الفقري والأنسجة الضامة"
        ],
        "uses": [
            "تجديد غضروف المفصل في التهاب المفاصل",
            "دعم التنكس الفقري والقرص الانزلاقي",
            "صيانة صحة المفاصل",
            "تحفيز تخليق الكولاجين"
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
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد صناعي مشتق من الريلاكسين يوقف ويعكس التليف النسيجي المرضي في القلب والرئتين والكلى دون التسبب في انخفاض حاد في ضغط الدم.",
        "composition": [
            "نظير أحادي السلسلة للريلاكسين-2 (شظية السلسلة B)",
            "يُنشِّط مستقبل RXFP1 لوقف التليف المرضي",
            "يعكس التليف في القلب والرئتين والكلى",
            "لا يسبب انخفاضاً في ضغط الدم كالريلاكسين الطبيعي"
        ],
        "uses": [
            "عكس التليف القلبي",
            "دعم علاج التليف الرئوي",
            "الوقاية من التليف الكلوي",
            "تقليل النسيج الندبي بعد الإصابة"
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد D-retro-inverso يحفز الموت الخلوي المبرمج انتقائياً في الخلايا الشيخوخية ('الخلايا الزومبي')، مستعيداً الوظيفة الشبابية للأنسجة وتقليل الخلل المرتبط بالعمر.",
        "composition": [
            "ببتيد FOXO4 المقاوم للبروتياز (D-retro-inverso)",
            "يعطل تفاعل FOXO4-p53 في الخلايا الشيخوخية",
            "يحفز الموت الخلوي انتقائياً في الخلايا الشيخوخية فقط",
            "يبقي الخلايا الصحية سليمة تماماً"
        ],
        "uses": [
            "إزالة الخلايا الشيخوخية (senolytic)",
            "عكس الخلل المرتبط بالتقدم في العمر",
            "إطالة فترة الصحة والعمر",
            "بروتوكولات تجديد الأنسجة"
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد مشتق من الميتوكوندريا يحمي الخلايا العصبية من سمية الألزهايمر، يقلل مقاومة الأنسولين، ويطيل العمر الخلوي عبر آليات خلوية واقية متعددة.",
        "composition": [
            "ببتيد واقٍ ذو 21 حمضاً أمينياً مشتق من الميتوكوندريا",
            "يحمي الخلايا العصبية ضد الأميلويد-بيتا والسموم الأخرى",
            "يقلل مقاومة الأنسولين الجهازية",
            "يُنشِّط مسارات STAT3 وJAK2 الواقية"
        ],
        "uses": [
            "حماية الأعصاب من أمراض الألزهايمر",
            "تحسين حساسية الأنسولين",
            "طول العمر الخلوي والميتوكوندري",
            "مكافحة الشيخوخة والحفاظ المعرفي"
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد تيموسي يعدّل ويعزز الاستجابات المناعية، يرفع نضج الخلايا التائية ونشاط خلايا NK ويوازن الإشارات السيتوكينية لمقاومة العدوى وعكس شيخوخة المناعة.",
        "composition": [
            "ببتيد تيموسي ذو 28 حمضاً أمينياً (جزء الثيموسين 5)",
            "يحفز نضج وتمايز الخلايا التائية",
            "يعزز نشاط خلايا القتل الطبيعي (NK)",
            "يوازن السيتوكينات الالتهابية ومضادات الالتهاب"
        ],
        "uses": [
            "تقوية المناعة وتعديلها",
            "دعم العدوى المزمنة والأمراض الفيروسية",
            "مساعد للعلاج المناعي للسرطان",
            "عكس شيخوخة المناعة"
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
        "category": "Anti-Aging, Cellular Immunity & Mitochondrial Repair",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "مركب ببتيد بيوريغيولاتوري تيموسي يستعيد وظيفة الغدة التيموسية، يطبّع الاستجابات المناعية في حالتي النقص والزيادة، ويعكس شيخوخة المناعة.",
        "composition": [
            "مركب ببتيد تيموسي طبيعي بيوريغيولاتوري",
            "يستعيد النشاط الوظيفي للغدة التيموسية",
            "يطبّع وظيفة المناعة في الحالات الناقصة والمفرطة",
            "يعكس التراجع المناعي المرتبط بالعمر"
        ],
        "uses": [
            "تجديد الغدة التيموسية واستعادة المناعة",
            "عكس شيخوخة المناعة",
            "تعديل أمراض المناعة الذاتية",
            "بروتوكولات الصحة وإطالة العمر"
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
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "مشتق محسّن ومثبّت من سيماكس بنفاذية أعلى عبر الحاجز الدموي الدماغي، يوفر تحفيزاً معرفياً مطوّلاً ووضوحاً ذهنياً وتركيزاً فائقاً.",
        "composition": [
            "مشتق مثبّت من سيماكس (نظير ACTH 4-10)",
            "نفاذية محسّنة عبر الحاجز الدموي الدماغي",
            "رفع مطوّل للـ BDNF والدوبامين",
            "تحفيز معرفي ممتد مقارنة بسيماكس القياسي"
        ],
        "uses": [
            "التعزيز المعرفي الممتد والتركيز",
            "الوضوح الذهني وسرعة التفكير",
            "الحماية العصبية",
            "تراكيب نوتروبيك مع سيلانك أو ببتيدات أخرى"
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
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيدات بيوريغيولاتورية تحمي خلايا قشرة المخ من الضرر التأكسدي وتدعم الذاكرة قصيرة وطويلة المدى والتعلم وسرعة التفكير.",
        "composition": [
            "بيناليون: ببتيد بيوريغيولاتوري يستهدف قشرة الدماغ",
            "P21: ببتيد مشتق من CNTF بنشاط توليد عصبي",
            "يحمي الخلايا العصبية من الضرر التأكسدي والسمي الإثارة",
            "يدعم توطيد الذاكرة وسرعة التفكير"
        ],
        "uses": [
            "تعزيز الذاكرة والتعلم",
            "الحماية العصبية من الضرر التأكسدي",
            "سرعة التفكير والوضوح",
            "دعم الدماغ لمكافحة الشيخوخة"
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
        "category": "Brain, Cognitive Function, Mood & Sleep",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "منظم بيولوجي لقشرة الدماغ يُصلح مسارات الأعصاب المركزية والطرفية ويحفز تجديد المحاور العصبية بعد الصدمة.",
        "composition": [
            "رباعي ببتيد قصير منظم لقشرة الدماغ",
            "يُصلح مسارات الأعصاب المركزية والطرفية",
            "يحفز تجديد المحاور العصبية بعد الصدمة العصبية",
            "يدعم إعادة بناء وظائف الدوائر العصبية"
        ],
        "uses": [
            "التعافي من تلف الأعصاب وإصلاح المحاور",
            "إعادة التأهيل العصبي بعد السكتة الدماغية",
            "دعم الاعتلال العصبي الطرفي",
            "التعافي من إصابات الدماغ والحبل الشوكي"
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
        "category": "Male Hormones, Fertility, Sexual Health & Tanning",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "يحاكي هرمون LH بشكل مباشر، يرتبط بمستقبلات خلايا لايديغ في الخصيتين لتحفيز تصنيع التستوستيرون الداخلي ومنع ضمور الخصية.",
        "composition": [
            "بروتين سكري مؤتلف محاكٍ لـ LH",
            "يرتبط بمستقبلات LH على خلايا لايديغ في الخصية",
            "يحفز تخليق التستوستيرون الداخلي",
            "يمنع ويعكس ضمور الخصية"
        ],
        "uses": [
            "دعم العلاج بالتستوستيرون والدورات الابتنائية",
            "علاج ما بعد الدورة (PCT) لاستعادة التستوستيرون",
            "الوقاية من ضمور الخصية",
            "علاج نقص الغدد التناسلية والعقم"
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
        "category": "Male Hormones, Fertility, Sexual Health & Tanning",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "منظم بيولوجي ببتيدي يستهدف أنسجة الخصيتين، يحسن التمثيل الغذائي الداخلي للأنسجة التناسلية ويدعم البيئة الحيوية لإنتاج الهرمونات والحيوانات المنوية.",
        "composition": [
            "ببتيد بيوريغيولاتوري قصير يستهدف أنسجة الخصية",
            "يحسن الوظيفة الاستقلابية للخلايا التناسلية",
            "يدعم بيئة خلايا لايديغ وسيرتولي",
            "يعزز قدرة إنتاج الهرمونات والحيوانات المنوية الداخلية"
        ],
        "uses": [
            "دعم إنتاج التستوستيرون",
            "تحسين وظيفة الخصية",
            "تعزيز الخصوبة الذكرية",
            "إدارة انخفاض الأندروجينات المرتبط بالعمر"
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
        "category": "Male Hormones, Fertility, Sexual Health & Tanning",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ناهض انتقائي لمستقبلات MC1R في خلايا الجلد الصباغية يحفز إفراز صبغة الميلانين لتسمير البشرة ومنحها سمرة طبيعية وحماية من الأشعة فوق البنفسجية.",
        "composition": [
            "ناهض انتقائي لـ MC1R (نظير ألفا-MSH)",
            "يحفز إنتاج الميلانين في الخلايا الصباغية للجلد",
            "يمنح تسمير طبيعي المظهر للبشرة",
            "حماية من الأشعة فوق البنفسجية دون تعرض شمسي"
        ],
        "uses": [
            "تسمير البشرة دون تعرض شمسي",
            "الحماية من الأشعة فوق البنفسجية وحروق الشمس",
            "الحماية الضوئية لأصحاب البشرة الفاتحة",
            "علاج البرفيريا الجلدية الكبدية"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيدات وعائية وعضلة قلبية تعزز مرونة الشرايين وتحسّن الدورة الدموية الدقيقة وتحمي من تصلب الشرايين وضغوط القلب.",
        "composition": [
            "كارديوجين: ببتيد بيوريغيولاتوري لخلايا عضلة القلب",
            "فيسوجين: ببتيد بيوريغيولاتوري للبطانة الوعائية",
            "يعزز مرونة الشرايين وامتثال جدارها",
            "يحسّن الدورة الدموية الدقيقة ويحمي من تصلب الشرايين"
        ],
        "uses": [
            "صحة القلب وحماية عضلته",
            "صحة الأوعية الدموية ومرونة الشرايين",
            "الوقاية من تصلب الشرايين",
            "تحسين الدورة الدموية الدقيقة"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "منظمات بيولوجية للجهاز التنفسي؛ يهدّئ شونلوتين التهاب الغشاء المخاطي ويصفّي المخاط الزائد، بينما يجدد برونكوجين الأنسجة الظهارية والرئوية التالفة.",
        "composition": [
            "برونكوجين: ببتيد بيوريغيولاتوري لتجديد أنسجة الرئة",
            "شونلوتين: معدّل التهاب الغشاء المخاطي",
            "يجدد الخلايا الظهارية القصبية",
            "يصفّي المخاط الزائد ويقلل التهاب مجرى الهواء"
        ],
        "uses": [
            "إصلاح أنسجة الرئة من التدخين أو التلوث",
            "دعم الربو والتهاب الشعب الهوائية المزمن",
            "التعافي من التليف الرئوي",
            "صيانة صحة الجهاز التنفسي"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "منظم بيولوجي للبنكرياس يدعم استقلاب خلايا الجزيرة وإفراز الإنزيمات الهاضمة وتنظيم الجلوكوز بشكل مستقر.",
        "composition": [
            "ببتيد قصير يستهدف خلايا جزيرات لانغرهانس",
            "يدعم وظيفة الخلايا بيتا وألفا الاستقلابية",
            "يعزز إفراز الإنزيمات الهاضمة",
            "يثبّت تنظيم الجلوكوز"
        ],
        "uses": [
            "دعم وظيفة البنكرياس",
            "استقرار استقلاب الجلوكوز",
            "تحسين إفراز الإنزيمات الهاضمة",
            "دعم مكمّل لمرض السكري من النوع 2"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "الشظية المؤتلفة النشطة من هرمون الغدة جارات الدرقية (PTH 1-34) التي تحفز نشاط ناقضات العظم لتشكيل عظام جديدة في هشاشة العظام الشديدة.",
        "composition": [
            "شظية PTH 1-34 المؤتلفة (النطاق النشط لهرمون الغدة جارات الدرقية)",
            "تحفز تمايز ونشاط بانيات العظم",
            "تعزز تشكيل مصفوفة العظم الجديدة (تأثير ابتنائي)",
            "معتمدة من FDA لعلاج هشاشة العظام الشديدة"
        ],
        "uses": [
            "علاج هشاشة العظام الشديدة",
            "تحسين كثافة العظام",
            "تقليل خطر الكسور",
            "إدارة فقدان العظام في انقطاع الطمث"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد بحثي نشط على الغشاء مهندس لاستهداف HDM-2 على أغشية خلايا السرطان، يكوّن مسامات تحلل الخلايا الخبيثة في الدراسات قبل السريرية مع إبقاء الخلايا السليمة.",
        "composition": [
            "ببتيد مجال ربط p53-MDM2 مع دافع نشط على الغشاء",
            "يستهدف HDM-2 المُفرَط التعبير على أغشية خلايا السرطان",
            "يُكوّن مسامات عبر الغشاء في الخلايا الخبيثة",
            "يُبقي الخلايا الطبيعية سليمة التي تفتقر إلى HDM-2 السطحي"
        ],
        "uses": [
            "أبحاث السرطان قبل السريرية",
            "دراسات التحلل الانتقائي لخلايا السرطان",
            "أبحاث الببتيدات في الأورام",
            "التحقيق في الأدوية المضادة للأورام المستهدفة"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "ببتيد أفيوني طبيعي قوي عالي الألفة لمستقبلات μ-الأفيونية يوفر تسكيناً عميقاً للألم يفوق قوته المورفين بأضعاف كثيرة.",
        "composition": [
            "سباعي ببتيد أفيوني طبيعي من إفرازات جلد الضفدع",
            "انتقائية عالية وألفة لمستقبلات المو الأفيونية",
            "قوة تسكين أعلى بكثير من المورفين",
            "يعبر الحاجز الدموي الدماغي للتسكين المركزي"
        ],
        "uses": [
            "أبحاث الألم الشديد والمزمن",
            "دراسات صيدلانية المستقبلات الأفيونية",
            "التحقيق في إدارة الألم",
            "أبحاث الإحساس بالألم"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "مضاد حيوي واسع الطيف يرتبط بالوحدة 50S الريبوسومية لإيقاف تخليق البروتين البكتيري في العدوى الشديدة.",
        "composition": [
            "مضاد حيوي واسع الطيف موقف للنمو البكتيري",
            "يرتبط بالوحدة الريبوسومية 50S للبكتيريا",
            "يثبط ناقل الببتيد وتخليق البروتين البكتيري",
            "فعّال ضد البكتيريا إيجابية وسلبية الغرام والأنيروبية"
        ],
        "uses": [
            "العدوى البكتيرية الجهازية الشديدة",
            "علاج التهاب السحايا وحمى التيفوئيد",
            "عدوى العين الموضعية",
            "تطبيقات مذيب الإعادة في أبحاث الببتيدات"
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
        "category": "Organ-Specific Bioregulators & Therapeutic Compounds",
        "purity": "99.0%",
        "showPurity": false,
        "shortDescription": "فيتامين أساسي لتخليق DNA وإنتاج كريات الدم الحمراء وصيانة غمد الميالين واستقلاب الطاقة.",
        "composition": [
            "كوبالامين (سيانوكوبالامين أو ميثيلكوبالامين)",
            "عامل مساعد أساسي لتخليق DNA وانقسام الخلايا",
            "ضروري لتكوين كريات الدم الحمراء",
            "يحافظ على سلامة غمد الميالين والوظيفة العصبية"
        ],
        "uses": [
            "علاج نقص B12 وفقر الدم الخبيث",
            "دعم الطاقة والتعب",
            "صيانة الصحة العصبية",
            "إضافة لمحاليل إعادة الحل للببتيدات"
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
        "category": "Accessories & Supplies",
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "ماء معقم يحتوي على 0.9% كحول البنزيل كعامل بكتيريوستاتيك، يُستخدم لإعادة حل الببتيدات المجففة بالتجميد والمركبات القابلة للحقن.",
        "composition": [
            "ماء معقم للحقن (درجة WFI)",
            "0.9% كحول بنزيل كمادة حافظة بكتيريوستاتية",
            "يثبط نمو البكتيريا بعد ثقب قارورة",
            "يحافظ على العقامة عبر سحبات متعددة"
        ],
        "uses": [
            "مذيب إعادة الحل للببتيدات",
            "إعادة حل المركبات المجففة بالتجميد",
            "تحضير قوارير متعددة الاستخدام",
            "تحضير محاليل قابلة للحقن"
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

// اسم بديل للتوافق مع الإصدارات السابقة — قد تعتمد بعض الأكواد على PRODUCT_CATEGORIES.
const PRODUCT_CATEGORIES = CATEGORY_LIST;
