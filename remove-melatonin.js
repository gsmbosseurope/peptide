const fs = require('fs');
['js/products-data.js','js/products-data-ar.js'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  ['melatonin-injectable','melatonin_injectable'].forEach(id => {
    const idx = c.indexOf('"id": "' + id + '"');
    if (idx < 0) return;
    let start = c.lastIndexOf('{', idx);
    let depth = 0, end = start;
    for (let i = start; i < c.length; i++) {
      if (c[i] === '{') depth++;
      else if (c[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
    }
    const block = c.substring(start, end + 1);
    c = c.replace(',\n' + block, '').replace(block + ',\n', '').replace(block, '');
    console.log(f + ': removed ' + id);
  });
  fs.writeFileSync(f, c, 'utf8');
});
