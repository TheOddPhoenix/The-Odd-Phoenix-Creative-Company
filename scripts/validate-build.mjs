import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const files=walk(root).filter(p=>p.endsWith('.html'));
let links=0;
for(const file of files){const html=fs.readFileSync(file,'utf8');assert.equal((html.match(/<h1\b/g)||[]).length,1,`${file}: exactly one H1`);assert(!/no corporate speak|U\.S\. Army|150 published|200,000 readers/i.test(html),`${file}: retired copy`);for(const [,href] of html.matchAll(/href="([^"]+)"/g)){if(!href.startsWith('/')&&!href.startsWith('#'))continue;const [route,hash]=href.split('#');const target=route?path.join(root,route.split('?')[0].replace(/^\//,'')):file;const targetFile=fs.existsSync(target)&&fs.statSync(target).isDirectory()?path.join(target,'index.html'):target;assert(fs.existsSync(targetFile),`${file}: missing ${href}`);if(hash&&targetFile.endsWith('.html'))assert(fs.readFileSync(targetFile,'utf8').includes(`id="${hash}"`),`${file}: missing anchor ${href}`);links++;}for(const [,src] of html.matchAll(/<img[^>]+src="([^"]+)"/g))if(src.startsWith('/'))assert(fs.existsSync(path.join(root,src)),`${file}: missing image ${src}`);}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.equal((home.match(/class="photo-card /g)||[]).length,6,'Six photographic homepage cards');
const services=fs.readFileSync(path.join(root,'services/index.html'),'utf8');assert(services.includes('E-Commerce &amp; Online Stores'));assert(services.includes('Shopify setup'));assert(services.includes('Print-on-demand integrations'));
console.log(`Validated ${files.length} pages, ${links} internal links, six cards, e-commerce offerings, and image references.`);

