"""Card thumbnails (<name>-t.webp, 400px) for every product main image + hero webp files.
Run after adding products:  python tools/make-thumbs.py   (needs Pillow). Safe to re-run."""
import json, os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIZE = 400          # px, longest side: card images show at 170-290 css px (x2 for retina phones)

def first_images(fname):
    s = open(os.path.join(ROOT, 'js', fname), encoding='utf-8').read()
    i = s.index('const PRODUCTS = ') + len('const PRODUCTS = ')
    data, _ = json.JSONDecoder().raw_decode(s[i:])
    return [p['images'][0] for p in data if p.get('images')]

paths = sorted(set(first_images('products-data.js') + first_images('products-data-ar.js')))
made = skipped = missing = 0; before = after = 0
for rel in paths:
    src = os.path.join(ROOT, rel.replace('/', os.sep))
    if not os.path.isfile(src):
        missing += 1; print('missing source:', rel); continue
    dst = os.path.splitext(src)[0] + '-t.webp'
    if os.path.isfile(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        skipped += 1; continue
    im = Image.open(src)
    if im.mode not in ('RGB', 'RGBA'): im = im.convert('RGBA' if 'A' in im.mode else 'RGB')
    im.thumbnail((SIZE, SIZE), Image.LANCZOS)
    im.save(dst, 'WEBP', quality=80, method=6)
    made += 1; before += os.path.getsize(src); after += os.path.getsize(dst)
print('card thumbnails: made %d, up-to-date %d, source missing %d' % (made, skipped, missing))
if made: print('originals %.1f MB -> thumbnails %.1f MB (%.0f KB avg each)' % (before/1e6, after/1e6, after/made/1024))

# Hero banner: webp 1600w + 800w (the jpg stays for og:image / social previews)
hero = os.path.join(ROOT, 'assets', 'brand', 'hero-vials.jpg')
im = Image.open(hero).convert('RGB')
im.save(os.path.join(ROOT, 'assets', 'brand', 'hero-vials.webp'), 'WEBP', quality=80, method=6)
im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS).save(os.path.join(ROOT, 'assets', 'brand', 'hero-vials-800.webp'), 'WEBP', quality=80, method=6)
for n in ('hero-vials.jpg', 'hero-vials.webp', 'hero-vials-800.webp'):
    print(n, round(os.path.getsize(os.path.join(ROOT, 'assets', 'brand', n)) / 1024), 'KB')
