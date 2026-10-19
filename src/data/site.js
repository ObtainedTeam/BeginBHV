// Centrale sitegegevens. Pas hier aan, niet in de componenten.
export const site = {
  name: 'BeginBHV',
  legalName: 'BeginBHV B.V.',
  url: 'https://beginbhv.com',
  owner: 'Dennis Sluijmer',
  // Vestigingsplaats op de site; het volledige adres (Zomerlinde 36, 8224 JW Lelystad) staat alleen in de voorwaarden en privacyverklaring.
  address: ['Lelystad'],
  fullAddress: ['Zomerlinde 36', '8224 JW Lelystad'],
  // Telefoonnummer volgt (Dennis regelt een 088-nummer). Tot die tijd placeholder.
  phone: '085 201 47 33',
  phoneHref: 'tel:+31852014733',
  // Openingstijden klantenservice
  hours: [['Maandag t/m vrijdag', '08:30 - 17:00'], ['Zaterdag', '09:00 - 12:00'], ['Zondag', 'Gesloten']],
  openingHours: ['Mo-Fr 08:30-17:00', 'Sa 09:00-12:00'],
  email: 'info@beginbhv.nl',
  googleRating: '9.6',
  description:
    'BeginBHV verzorgt erkende BHV-trainingen door heel Nederland. Eendaagse praktijkcursussen op onze locatie of bij u op het bedrijf, met certificaat.',
  // GA4: vul het measurement-ID in (bijv. G-XXXXXXXXXX). Leeg = geen tracking.
  ga4: 'G-B21ESPKSZQ',
};

// Hoofdmenu met dropdowns. `children` = submenu; het hoofditem zelf linkt naar de overzichtspagina.
export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Cursussen', href: '/cursussen',
    children: [
      { label: 'Alle cursussen', href: '/cursussen' },
      { label: 'Basis BHV + e-learning', href: '/cursussen/bhv-basis' },
      { label: 'Herhaling BHV + e-learning', href: '/cursussen/bhv-herhaling' },
      { label: 'Basis BHV (NIBHV)', href: '/cursussen/bhv-nibhv' },
      { label: 'Herhaling BHV (NIBHV)', href: '/cursussen/bhv-nibhv-herhaling' },
      { label: 'Reanimatie workshop', href: '/cursussen/reanimatie-workshop' },
      { label: 'Ontruimingsoefening', href: '/cursussen/ontruimingsoefening' },
      { label: 'Cursusboek bestellen', href: '/cursusboek' },
    ],
  },
  {
    label: 'Incompany', href: '/incompany',
    children: [
      { label: 'Incompany training', href: '/incompany' },
      { label: 'BHV per branche', href: '/branches' },
      { label: 'Kinderopvang', href: '/branches/kinderopvang' },
      { label: 'Horeca', href: '/branches/horeca' },
      { label: 'Bouw', href: '/branches/bouw' },
      { label: 'Kantoor', href: '/branches/kantoor' },
      { label: 'Zorg', href: '/branches/zorg' },
      { label: 'Onderwijs', href: '/branches/onderwijs' },
    ],
  },
  {
    label: 'Kennis', href: '/kennisbank',
    children: [
      { label: 'Kennisbank', href: '/kennisbank' },
      { label: 'Wat is BHV?', href: '/kennisbank/wat-is-bhv' },
      { label: 'Is BHV verplicht?', href: '/kennisbank/is-bhv-verplicht' },
      { label: 'Hoeveel BHV’ers?', href: '/kennisbank/hoeveel-bhvers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Veelgestelde vragen', href: '/veelgestelde-vragen' },
    ],
  },
];
export const navRight = [
  {
    label: 'Over Ons', href: '/over-ons',
    children: [
      { label: 'Over BeginBHV', href: '/over-ons' },
      { label: 'Over Dennis', href: '/over-dennis' },
      { label: 'Locaties', href: '/locaties' },
      { label: 'Vacatures', href: '/vacatures' },
      { label: 'Klantenservice', href: '/klantenservice' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const usps = [
  { icon: 'map', label: 'Landelijke dekking' },
  { icon: 'certificate', label: 'Trainingen met erkend certificaat' },
  { icon: 'cap', label: 'Kiwa gecertificeerd opleider' },
  { icon: 'advice', label: 'Advies op maat' },
];
