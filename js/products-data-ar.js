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
    "Accessories & Supplies"
];

const PRODUCTS = [
    {
        "id": "bpc-157",
        "name": "",
        "category": "Recovery, Tendon/Joint Repair & Anti-Inflammatory",
        "purity": "99.9%",
        "showPurity": false,
        "shortDescription": "",
        "composition": [],
        "uses": [],
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
        "shortDescription": "مثبّط جزيئي صغير لإنزيم NNMT، يُدرس في أبحاث أيض الخلايا الدهنية والوزن",
        "composition": [
            "مثبّط جزيئي صغير لإنزيم NNMT",
            "مسحوق مجفف بالتجميد أو بتركيبة كبسولة",
            "مصدره أوروبي، نقاء معتمد"
        ],
        "uses": [
            "أبحاث تثبيط إنزيم NNMT",
            "دراسات أيض الخلايا الدهنية والوزن",
            "أبحاث تنظيم الطاقة الخلوية"
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
        "shortDescription": "إنقاص الوزن",
        "composition": [
            "إنقاص الوزن"
        ],
        "uses": [
            "إنقاص الوزن"
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

// اسم بديل للتوافق مع الإصدارات السابقة — قد تعتمد بعض الأكواد على PRODUCT_CATEGORIES.
const PRODUCT_CATEGORIES = CATEGORY_LIST;
