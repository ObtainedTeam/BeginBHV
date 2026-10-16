import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
const root = '/home/claude/beginbhv/dist';
const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg','.woff2':'font/woff2','.mp4':'video/mp4','.webm':'video/webm'};
const srv = createServer(async (req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/')) p+='index.html'; let f=join(root,p); try{ if((await stat(f)).isDirectory()) f=join(f,'index.html'); }catch{ f=join(root,p+'.html'); } try{ const b=await readFile(f); res.setHeader('Content-Type',mime[extname(f)]||'application/octet-stream'); res.end(b);}catch{res.statusCode=404;res.end('nf');} }).listen(4321);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--autoplay-policy=no-user-gesture-required'] });
for (const [w,h,name] of [[1386,560,'desk'],[390,700,'mob']]) {
  const pg = await b.newPage({ viewport:{width:w,height:h} });
  await pg.goto('http://localhost:4321/', { waitUntil:'networkidle' }); await pg.waitForTimeout(3000);
  const st = await pg.$eval('[data-hero-video]', v=>({t:v.currentTime, paused:v.paused, src:v.currentSrc, rs:v.readyState}));
  console.log(name, JSON.stringify(st));
  await pg.evaluate(()=>{ try{localStorage.setItem('bhv-cookies','functional')}catch{}; document.querySelector('[data-cookie]')?.setAttribute('hidden','') });
  await pg.screenshot({ path:`/tmp/video-${name}.png` });
}
await b.close(); srv.close();
