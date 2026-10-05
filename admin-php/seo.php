<?php
/**
 * Shared JSON-LD helpers for the public detail pages (product, blog post,
 * peptide-guide topic — EN and AR). Include-only; direct access is denied
 * by admin-php/.htaccess like the other helpers in this folder.
 */

/** Echo one JSON-LD <script> block. */
function seo_jsonld($data) {
    echo '<script type="application/ld+json">'
        . json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
        . "</script>\n";
}

/** BreadcrumbList from [[name, absolute url], ...]; the last item is the current page. */
function seo_breadcrumb($items) {
    $list = [];
    foreach (array_values($items) as $i => $it) {
        $list[] = [
            '@type' => 'ListItem',
            'position' => $i + 1,
            'name' => html_entity_decode(strip_tags($it[0]), ENT_QUOTES, 'UTF-8'),
            'item' => $it[1],
        ];
    }
    return [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => $list,
    ];
}

/** BlogPosting for an article page. */
function seo_article($title, $desc, $url, $image, $date, $lang) {
    $data = [
        '@context' => 'https://schema.org',
        '@type' => 'BlogPosting',
        'headline' => html_entity_decode(strip_tags($title), ENT_QUOTES, 'UTF-8'),
        'description' => html_entity_decode(strip_tags($desc), ENT_QUOTES, 'UTF-8'),
        'image' => $image,
        'url' => $url,
        'mainEntityOfPage' => $url,
        'inLanguage' => $lang,
        'author' => ['@type' => 'Organization', 'name' => 'Trusted-Peptide', 'url' => 'https://trusted-peptide.com/'],
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'Trusted-Peptide',
            'logo' => ['@type' => 'ImageObject', 'url' => 'https://trusted-peptide.com/assets/brand/logo-icon.png'],
        ],
    ];
    if ($date) {
        $data['datePublished'] = $date;
        $data['dateModified'] = $date;
    }
    return $data;
}

/**
 * Hand-written <title>/meta description for the most searched products, EN + AR.
 * Returns [title, description] or null (then the page uses its automatic ones).
 * Kept here instead of the product data so admin-panel saves can never drop them.
 */
function seo_product_override($id, $lang) {
    static $map = [
        'bpc-157' => [
            'en' => ['BPC-157 Peptide for Research – HPLC Tested | Trusted-Peptide', 'Research-grade BPC-157 with a batch certificate of analysis (HPLC purity and mass-spec identity). Shipped from Europe, cold-chain packed. For laboratory research use only.'],
            'ar' => ['ببتيد BPC-157 للأبحاث – مُختبر بتقنية HPLC | ترستد ببتيد', 'ببتيد BPC-157 بجودة بحثية مع شهادة تحليل لكل دفعة (نقاء HPLC وتأكيد الهوية بطيف الكتلة). يُشحن من أوروبا بتغليف مبرّد. للاستخدام المخبري والبحثي فقط.'],
        ],
        'tb-500' => [
            'en' => ['TB-500 Peptide for Research – HPLC Tested | Trusted-Peptide', 'Research-grade TB-500 (thymosin beta-4 fragment) with a certificate of analysis for every batch. Shipped from Europe in cold-chain packaging. For laboratory research use only.'],
            'ar' => ['ببتيد TB-500 للأبحاث – مُختبر بتقنية HPLC | ترستد ببتيد', 'ببتيد TB-500 (جزء من ثيموسين بيتا-4) بجودة بحثية مع شهادة تحليل لكل دفعة. يُشحن من أوروبا بتغليف مبرّد. للاستخدام المخبري والبحثي فقط.'],
        ],
        'ghk-cu' => [
            'en' => ['GHK-Cu Copper Peptide for Research – Lab Tested | Trusted-Peptide', 'Research-grade GHK-Cu copper peptide, HPLC tested with a certificate of analysis. Shipped from Europe. For laboratory research use only.'],
            'ar' => ['ببتيد النحاس GHK-Cu للأبحاث – مُختبر مخبرياً | ترستد ببتيد', 'ببتيد النحاس GHK-Cu بجودة بحثية، مُختبر بتقنية HPLC مع شهادة تحليل. يُشحن من أوروبا. للاستخدام المخبري والبحثي فقط.'],
        ],
        'bpc-tb-blend' => [
            'en' => ['BPC-157 + TB-500 Blend for Research | Trusted-Peptide', 'Pre-mixed BPC-157 and TB-500 research blend, HPLC tested with a batch certificate of analysis. Shipped from Europe. For laboratory research use only.'],
            'ar' => ['مزيج BPC-157 وTB-500 للأبحاث | ترستد ببتيد', 'مزيج جاهز من BPC-157 وTB-500 للأبحاث، مُختبر بتقنية HPLC مع شهادة تحليل لكل دفعة. يُشحن من أوروبا. للاستخدام المخبري والبحثي فقط.'],
        ],
    ];
    return $map[$id][$lang] ?? null;
}
