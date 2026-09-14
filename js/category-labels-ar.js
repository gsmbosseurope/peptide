/**
 * trusted-peptide.com — خريطة تسميات الفئات بالعربية
 * ------------------------------------------------------------
 * هذا الملف يوفر الترجمة العربية المعروضة لأسماء الفئات، بينما تبقى النصوص
 * الإنجليزية الأصلية (من CATEGORY_LIST في products-data.js) هي المفاتيح
 * الداخلية المستخدمة في كل مكان آخر (js/catalog.js، حقلي category/categories
 * في المنتجات، وأي منطق بحث عن الأيقونات أو الفلاتر). لا يجوز استبدال هذه
 * المفاتيح الإنجليزية بنصوص عربية في أي مكان آخر من الكود، لأن ذلك سيكسر
 * عمليات البحث (lookups) بصمت.
 *
 * عند إضافة فئة جديدة إلى CATEGORY_LIST في products-data.js، أضف إدخالًا
 * مطابقًا هنا بنفس النص الإنجليزي كمفتاح مع ترجمته العربية كقيمة.
 */

const CATEGORY_LABELS_AR = {
  "Weight Loss, Metabolic Regulation & Insulin Resistance": "إنقاص الوزن وتنظيم الأيض ومقاومة الإنسولين",
  "Growth Hormone Secretagogues, Hypertrophy & Endurance": "محفزات هرمون النمو، بناء العضلات والتحمل",
  "Recovery, Tendon/Joint Repair & Anti-Inflammatory": "التعافي وإصلاح الأوتار/المفاصل ومضادات الالتهاب",
  "Anti-Aging, Cellular Immunity & Mitochondrial Repair": "مكافحة الشيخوخة، المناعة الخلوية وإصلاح الميتوكوندريا",
  "Brain, Cognitive Function, Mood & Sleep": "الدماغ، الوظائف الإدراكية، المزاج والنوم",
  "Male Hormones, Fertility, Sexual Health & Tanning": "الهرمونات الذكرية، الخصوبة، الصحة الجنسية والتسمير",
  "Organ-Specific Bioregulators & Therapeutic Compounds": "المنظمات الحيوية الخاصة بالأعضاء والمركبات العلاجية",
  "Skin, Hair Care": "العناية بالبشرة والشعر",
  "Digestive & Gut Health": "صحة الجهاز الهضمي والأمعاء",
  "Accessories & Supplies": "الملحقات واللوازم"
};
