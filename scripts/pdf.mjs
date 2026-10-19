import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
const root = '/home/claude/beginbhv/dist';
const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg','.woff2':'font/woff2','.json':'application/json'};
const srv = createServer(async (req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/')) p+='index.html'; let f=join(root,p); try{ if((await stat(f)).isDirectory()) f=join(f,'index.html'); }catch{ f=join(root,p+'.html'); } try{ const b=await readFile(f); res.setHeader('Content-Type',mime[extname(f)]||'application/octet-stream'); res.end(b);}catch{res.statusCode=404;res.end('nf');} }).listen(4321);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [path, out] of [['/algemene-voorwaarden','/home/claude/beginbhv-algemene-voorwaarden.pdf'],['/privacy','/home/claude/beginbhv-privacy-en-cookies.pdf']]) {
  const pg = await b.newPage();
  await pg.goto('http://localhost:4321'+path, { waitUntil:'networkidle' });
  await pg.addStyleTag({ content: 'header, footer, .nav-wrap, [data-cookie], .ph-bar, .usp, .ecg { display:none !important } body{background:#fff} .ph{background:#fff;color:#000} .ph-text{color:#000} main{padding:0}' });
  await pg.pdf({ path: out, format: 'A4', margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' }, printBackground: false, displayHeaderFooter: true, headerTemplate: '<div></div>', footerTemplate: '<div style="font-size:9px;color:#777;width:100%;text-align:center">BeginBHV B.V. · beginbhv.com · pagina <span class="pageNumber"></span> van <span class="totalPages"></span></div>' });
  await pg.close();
}
await b.close(); srv.close();
