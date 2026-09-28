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
