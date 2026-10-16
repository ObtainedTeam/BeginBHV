import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
const root = '/home/claude/beginbhv/dist';
const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg','.woff2':'font/woff2'};
const srv = createServer(async (req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/')) p+='index.html'; let f=join(root,p); try{ if((await stat(f)).isDirectory()) f=join(f,'index.html'); }catch{ f=join(root,p+'.html'); } try{ const b=await readFile(f); res.setHeader('Content-Type',mime[extname(f)]||'application/octet-stream'); res.end(b);}catch{res.statusCode=404;res.end('nf');} }).listen(4321);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [w,name] of [[1920,'d'],[390,'m']]) {
  const pg = await b.newPage({ viewport:{width:w,height:900} });
  await pg.goto('http://localhost:4321/cursussen', { waitUntil:'networkidle' });
  const box = await pg.$eval('.ecg', e=>{const r=e.getBoundingClientRect(); return {x:r.x,y:r.y+window.scrollY,w:r.width,h:r.height}});
  await pg.evaluate((y)=>window.scrollTo(0,y-200), box.y); await pg.waitForTimeout(300);
  for (let i=0;i<3;i++){ await pg.screenshot({ path:`/tmp/ecg-${name}${i}.png`, clip:{x:0,y:200,width:w,height:box.h} }); await pg.waitForTimeout(2200); }
}
await b.close(); srv.close();
