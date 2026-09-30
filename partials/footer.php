<?php
/**
 * Shared site footer (EN + AR). Every public page includes this instead of
 * carrying its own copy, so the footer stays identical across the site.
 * Set $footerLang = 'ar' before including for the Arabic version.
 * All URLs are root-absolute so the same markup works from / and /ar/.
 */
$fAr = isset($footerLang) && $footerLang === 'ar';
$fBase = $fAr ? '/ar' : '';
$t = $fAr ? [
    'name1' => 'ترستد', 'name2' => 'ببتيد',
    'tag' => 'ببتيدات بحثية مصدرها الاتحاد الأوروبي، معتمدة للنقاء والجودة الثابتة.',
    'trust' => ['مصدر أوروبي', 'نقاء ‎99%+‎ HPLC', 'شحن مبرّد'],
    'call' => 'اتصل بنا', 'wa' => 'واتساب',
    'shop' => 'المتجر', 'learn' => 'تعلّم', 'company' => 'الشركة',
    'links' => [
        'shop' => [['/products', 'كل المنتجات'], ['/best-sellers', 'الأكثر مبيعاً'], ['/cosmetics', 'مستحضرات التجميل'], ['/vitamins', 'الفيتامينات']],
        'learn' => [['/peptide-guide', 'دليل الببتيد'], ['/blog', 'المدونة'], ['/gallery', 'معرض الصور']],
        'company' => [['/about', 'من نحن'], ['/contact', 'تواصل معنا'], ['/cart', 'السلة']],
    ],
    'ship' => 'نشحن عبر', 'pay' => 'طرق الدفع',
    'legal' => '© 2026 trusted-peptide.com — للاستخدام البحثي فقط. غير مخصص للاستهلاك البشري.',
    'eur' => 'كل الأسعار باليورو',
] : [
    'name1' => 'Trusted', 'name2' => 'Peptide',
    'tag' => 'EU-sourced research peptides, certified for purity and consistency.',
    'trust' => ['EU Sourced', 'HPLC 99%+ Purity', 'Cold-Chain Shipping'],
    'call' => 'Call us', 'wa' => 'WhatsApp',
    'shop' => 'Shop', 'learn' => 'Learn', 'company' => 'Company',
    'links' => [
        'shop' => [['/products', 'All Products'], ['/best-sellers', 'Best Sellers'], ['/cosmetics', 'Cosmetics'], ['/vitamins', 'Vitamins']],
        'learn' => [['/peptide-guide', 'Peptide Guide'], ['/blog', 'Blog'], ['/gallery', 'Gallery']],
        'company' => [['/about', 'About'], ['/contact', 'Contact'], ['/cart', 'Cart']],
    ],
    'ship' => 'We ship with', 'pay' => 'We accept',
    'legal' => '© 2026 trusted-peptide.com — For research use only. Not for human consumption.',
    'eur' => 'All prices in EUR',
];
$ship = ['dhl' => 'DHL', 'bpost' => 'Bpost', 'fedex' => 'FedEx', 'gls' => 'GLS', 'postnl' => 'PostNL', 'ups' => 'UPS', 'dpd' => 'DPD', 'tnt' => 'TNT'];
$pay = ['visa' => 'Visa', 'mastercard' => 'Mastercard', 'paypal' => 'PayPal', 'applepay' => 'Apple Pay', 'googlepay' => 'Google Pay',
    'digitalwallet' => 'Digital Wallet', 'klarna' => 'Klarna', 'ideal' => 'iDEAL', 'bnpfortis' => 'BNP Fortis', 'belfius' => 'Belfius',
    'kbc' => 'KBC', 'ing' => 'ING', 'debitcard' => 'Debit Card', 'payafter' => 'Pay After Delivery', 'bitcoin' => 'Bitcoin', 'usdc' => 'USDC', 'usdt' => 'USDT'];
?>
  <footer class="site-footer tpf">
    <div class="container">
      <div class="tpf-top">
        <div class="tpf-brand">
          <a href="<?php echo $fBase ?: '/'; ?>" class="brand tpf-logo">
            <img src="/assets/brand/logo-icon.png" alt="" width="40" height="40" aria-hidden="true" />
            <span><?php echo $t['name1']; ?> <span class="tpf-accent"><?php echo $t['name2']; ?></span></span>
          </a>
          <p class="tpf-tag"><?php echo $t['tag']; ?></p>
          <ul class="tpf-trust">
            <?php foreach ($t['trust'] as $tr): ?><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><?php echo $tr; ?></li><?php endforeach; ?>
          </ul>
          <div class="tpf-contact">
            <a class="tpf-btn" href="tel:+32469126244"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" fill="currentColor"/></svg><span><small><?php echo $t['call']; ?></small><b dir="ltr">+32 469 12 62 44</b></span></a>
            <a class="tpf-btn tpf-btn--wa" href="https://wa.me/32469126244" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.83 1H12a7.94 7.94 0 007.94-7.94 7.9 7.9 0 00-2.34-5.64zm-5.55 12.2a6.58 6.58 0 01-3.38-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.28-3.5 6.6 6.6 0 01-6.67 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.51.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.19-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" fill="currentColor"/></svg><span><small><?php echo $t['wa']; ?></small><b dir="ltr">+32 469 12 62 44</b></span></a>
          </div>
        </div>
        <nav class="tpf-links" aria-label="Footer">
          <?php foreach (['shop', 'learn', 'company'] as $g): ?>
          <div>
            <h4><?php echo $t[$g]; ?></h4>
            <ul><?php foreach ($t['links'][$g] as $l): ?><li><a href="<?php echo $fBase . $l[0]; ?>"><?php echo $l[1]; ?></a></li><?php endforeach; ?></ul>
          </div>
          <?php endforeach; ?>
        </nav>
      </div>
      <div class="tpf-methods">
        <div>
          <span class="tpf-label"><?php echo $t['ship']; ?></span>
          <div class="footer-methods-icons"><?php foreach ($ship as $k => $v): ?><span class="icon-chip brand-<?php echo $k; ?>"><?php echo $v; ?></span><?php endforeach; ?></div>
        </div>
        <div>
          <span class="tpf-label"><?php echo $t['pay']; ?></span>
          <div class="footer-methods-icons"><?php foreach ($pay as $k => $v): ?><span class="icon-chip brand-<?php echo $k; ?>"><?php echo $v; ?></span><?php endforeach; ?></div>
        </div>
      </div>
      <div class="tpf-bottom">
        <span><?php echo $t['legal']; ?></span>
        <span><?php echo $t['eur']; ?></span>
      </div>
    </div>
  </footer>
