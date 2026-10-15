import numpy as np, sys, os
from PIL import Image, ImageFilter

def grade(im):
    a = np.asarray(im.convert('RGB')).astype(np.float32)/255.0
    # 1. witbalans: grijs-wereld op weinig-verzadigde pixels
    mx, mn = a.max(2), a.min(2); sat = (mx-mn)/(mx+1e-6)
    m = (sat < 0.25) & (mx > 0.15) & (mx < 0.95)
    means = np.array([a[...,c][m].mean() for c in range(3)]); g = means.mean()
    a = np.clip(a * (g/means), 0, 1)
    # 2. zwart/witpunt
    lum = 0.2126*a[...,0]+0.7152*a[...,1]+0.0722*a[...,2]
    lo, hi = np.percentile(lum, 0.3), np.percentile(lum, 99.7)
    a = np.clip((a-lo)/(hi-lo+1e-6), 0, 1)
    # 3. belichting: mediaan naar vast doel via gamma
    lum = 0.2126*a[...,0]+0.7152*a[...,1]+0.0722*a[...,2]
    med = np.median(lum); target = 0.40
    gamma = np.log(target)/np.log(max(med,1e-3)); gamma = float(np.clip(gamma, 0.6, 1.6))
    a = a**gamma
    # 4. zachte S-curve
    a = a + 0.10*np.sin(2*np.pi*a)*(-1)*np.sign(a-0.5)*(np.abs(a-0.5)*2)**0.5*0.5
    a = np.clip(a,0,1)
    # 5. verzadiging -10%, rood behouden
    lum = (0.2126*a[...,0]+0.7152*a[...,1]+0.0722*a[...,2])[...,None]
    r,g_,b = a[...,0],a[...,1],a[...,2]
    redness = np.clip((r - np.maximum(g_,b))*3, 0, 1)[...,None]
    k = 0.90 + 0.15*redness
    a = np.clip(lum + (a-lum)*k, 0, 1)
    # 6. schaduwen licht koel-neutraal
    sh = np.clip(1 - lum*2.5, 0, 1)
    a[...,0] -= 0.012*sh[...,0]; a[...,2] += 0.008*sh[...,0]; a = np.clip(a,0,1)
    out = Image.fromarray((a*255+0.5).astype(np.uint8))
    # 7. lichte ruisreductie + scherpte
    out = out.filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=3))
    return out

if __name__ == '__main__':
    for f in sys.argv[1:]:
        im = Image.open(f); out = grade(im)
        n = os.path.splitext(os.path.basename(f))[0]
        out.save(f'out/{n}.jpg', quality=92, subsampling=0); print(n, 'ok')
