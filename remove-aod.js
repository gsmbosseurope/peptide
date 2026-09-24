const fs = require('fs');
['js/products-data.js','js/products-data-ar.js'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  const idx = c.indexOf('"id": "aod9604"');
  if (idx < 0) { console.log(f + ': not found'); return; }
  let start = c.lastIndexOf('{', idx);
  let depth = 0, end = start;
  for (let i = start; i < c.length; i++) {
    if (c[i] === '{') depth++;
    else if (c[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
  }
  const block = c.substring(start, end + 1);
  let result = c.replace(',\n' + block, '').replace(block + ',\n', '').replace(block, '');
  fs.writeFileSync(f, result, 'utf8');
  console.log(f + ': done');
});
