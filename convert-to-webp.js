/**
 * convert-to-webp.js
 * يحول كل صور المنتجات (jpg/jpeg/png) إلى WebP بجودة 90
 * الاستخدام: node convert-to-webp.js
 * المجلد: C:\CODE\Peptides-Labs.com\0
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ====== الإعدادات ======
const INPUT_DIR = path.join(__dirname, '0');
const QUALITY = 90;          // جودة WebP (85-90 مثالي)
const DELETE_ORIGINAL = false; // true = احذف الأصل بعد التحويل
// =======================

let converted = 0;
let skipped = 0;
let errors = 0;

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // تخطي لو WebP موجود بالفعل
  if (fs.existsSync(webpPath)) {
    console.log(`⏭  موجود مسبقاً: ${path.relative(INPUT_DIR, webpPath)}`);
    skipped++;
    return;
  }

  try {
    const originalSize = fs.statSync(filePath).size;
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.relative(INPUT_DIR, filePath)} → .webp  (${(originalSize/1024).toFixed(0)}kB → ${(newSize/1024).toFixed(0)}kB, وفّر ${saving}%)`);

    if (DELETE_ORIGINAL) fs.unlinkSync(filePath);
    converted++;
  } catch (err) {
    console.error(`❌ خطأ: ${filePath}\n   ${err.message}`);
    errors++;
  }
}

async function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ المجلد غير موجود: ${dir}`);
    process.exit(1);
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else {
      await convertFile(fullPath);
    }
  }
}

(async () => {
  console.log(`\n🚀 بدء التحويل إلى WebP (جودة ${QUALITY})`);
  console.log(`📁 المجلد: ${INPUT_DIR}\n`);

  // تثبيت sharp تلقائياً لو مش موجود
  try {
    require.resolve('sharp');
  } catch {
    console.log('📦 تثبيت sharp...');
    require('child_process').execSync('npm install sharp', { stdio: 'inherit' });
  }

  await walkDir(INPUT_DIR);

  console.log(`\n──────────────────────────`);
  console.log(`✅ تم تحويل: ${converted} صورة`);
  console.log(`⏭  متخطى:   ${skipped} صورة`);
  console.log(`❌ أخطاء:    ${errors}`);
  console.log(`──────────────────────────\n`);
})();
