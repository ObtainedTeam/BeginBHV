# BeginBHV website

Astro (statisch) op Vercel. Elke push naar `main` deployt automatisch.

## Werken met de site

- `npm install` en `npm run dev` voor lokaal; `npm run build` bouwt naar `dist/`.
- Teksten en data staan in `src/data/`:
  - `site.js` adres, telefoon, e-mail, GA4-ID, navigatie, USP's
  - `courses.js` alle cursussen (titel, tekst, bullets, prijs, specificaties, beeld)
  - `content.js` reviews, FAQ en de vragen van de aanvraagfunnel
- Extra data: `kennisbank.js`, `branches.js`, `blog.js`, `locaties.js` (locaties zijn nog placeholders).
- Beeld staat op vaste bestandsnamen in `public/images/`. Beeld vervangen = bestand met dezelfde naam overschrijven en pushen.
- Aanvragen gaan naar `api/aanvraag.js` (Vercel function). Mail staat uit tot de env-vars zijn gezet:
  `MAIL_PROVIDER` (brevo of resend), `MAIL_API_KEY`, `MAIL_TO`, `MAIL_FROM`.

## Beeldbestanden (export uit Figma)

De huidige bestanden zijn lage-resolutie placeholders. Exporteer uit Figma op 2x en overschrijf:

| Bestand | Figma-laag | Formaat |
|---|---|---|
| logo.png | BeginBHV (15) 1 (74:2) | PNG transparant |
| hero-bg.webp | image 26 (1:3) | webp 2772x1044 |
| hero-dennis.webp | BeginBHV templates 1 (1:4) | PNG transparant |
| icon-aanmelden.png | Untitled design (16) 1 (13:421) | PNG transparant |
| icon-bhv-standaard.png | BHV Standaard 1 (1:26) | PNG transparant |
| icon-bhv-nibhv.png | BHV (NIBHV) 1 (1:24) | PNG transparant |
| icon-bhv-ploegleider.png | BHV 1 (1:23) | PNG transparant |
| dennis-portret.webp | image 27 (2:192) | webp |
| review-cuckie.png | image 30 (7:132) | PNG transparant |
| review-eindhoven.png | image 29 (7:129) | PNG transparant |
| map-nl.webp | pngtree-map-of-the-netherlands (12:229) | PNG transparant |
| dennis-bos.webp | Afbeelding van WhatsApp 2025-10-14 (12:233) | webp |
| icon-kruis.webp | 2 3 (13:487) | PNG transparant |
| foto-cursus-klas.webp | download 2 (6:66) | webp |
| foto-blusser.webp | images 1 (6:67) | webp |
| icon-chevron.png | 4 1 (13:419) | PNG transparant |
| logo-ideal.png, logo-creditcard.png, logo-ccv.png, logo-bvbn.png | footer-logo's (258:603) | PNG |
| cursussen-hero.webp | Afbeelding van WhatsApp 2025-11-03 (105:627) | webp |
| cursus-bhv-standaard.webp, cursus-bhv-herhaling.webp, cursus-bhv-nibhv.webp, cursus-ehbo.webp, cursus-ontruiming.webp, cursus-bhv-bedrijfsleider.webp | istockphoto-* (Curs2) | webp |
| icon-check.png | 1 1 (105:509) | PNG transparant |
| icon-scenario.png, icon-werkvormen.png, icon-stappenplan.png | 23 1, 24 1, 25 1 (Curs3) | PNG transparant |
| video-thumb.webp | image 41 (105:357) | webp (of echte video) |
| boek-open.webp, boek-cover.webp | 22 1, 21 1 (Curs5) | PNG transparant |
| cursus-detail-hero.webp | image 31 (11:186) | webp |
| overons-foto.webp | istockphoto-619263856 (105:87) | webp |
| og-default.jpg | (social share, 1200x630) | jpg |

USP-iconen (map-location, certificate, cap, advice), de hartslaglijn en de pijl op de kaart zijn als SVG in de code gezet.
