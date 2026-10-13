import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
const [,, pathArg='/', out='shot.png', w='1386', full='1', clipArg=''] = process.argv;
const root = '/home/claude/beginbhv/dist';
const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg'};
const srv = createServer(async (req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/')) p+='index.html';
  let f = join(root,p); try { if((await stat(f)).isDirectory()) f=join(f,'index.html'); } catch { f = join(root,p+'.html'); }
  try { const b=await readFile(f); res.setHeader('Content-Type', mime[extname(f)]||'application/octet-stream'); res.end(b);} catch { res.statusCode=404; res.end('nf'); }
}).listen(4321);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }); const pg = await b.newPage({ viewport:{width:+w, height:900}, deviceScaleFactor:1 });
await pg.goto('http://localhost:4321'+pathArg, { waitUntil:'networkidle' });
await pg.evaluate(()=>document.querySelectorAll('img').forEach(i=>{i.loading='eager'; i.decoding='sync';}));
await pg.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80));} window.scrollTo(0,0);});
await pg.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible')));
await Promise.race([pg.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?1:new Promise(r=>{i.onload=i.onerror=r;})))), new Promise(r=>setTimeout(r,4000))]);
await pg.waitForTimeout(800);
const opts = { path: out, fullPage: full==='1', animations: 'disabled' };
if (clipArg) { const [x,y,cw,ch]=clipArg.split(',').map(Number); opts.clip={x,y,width:cw,height:ch}; opts.fullPage=false; }
await pg.screenshot(opts); await b.close(); srv.close();
