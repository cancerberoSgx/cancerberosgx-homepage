import { readFileSync, writeFileSync } from 'fs';

const newContent = readFileSync('docs/index.html').toString().replace('src="bundle.js"', `src="bundle.jst=?${Date.now()}"`)
writeFileSync('docs/index.html', newContent)