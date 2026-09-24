const fs = require('fs');
const path = 'C:/CODE/Peptides-Labs.com/js/main.js';
let c = fs.readFileSync(path, 'utf8');
const marker = 'document.addEventListener(';
const pos = c.indexOf(marker);
if (pos < 0) { console.log('marker not found'); process.exit(1); }
const patch = fs.readFileSync('C:/CODE/Peptides-Labs.com/js/main-patch.js', 'utf8');
c = c.slice(0, pos) + patch + '\n\n' + c.slice(pos);
fs.writeFileSync(path, c, 'utf8');
console.log('Done!');
