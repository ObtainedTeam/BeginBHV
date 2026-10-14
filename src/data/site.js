// Centrale sitegegevens. Pas hier aan, niet in de componenten.
export const site = {
  name: 'BeginBHV',
  legalName: 'BeginBHV B.V.',
  url: 'https://beginbhv.com',
  owner: 'Dennis Sluijmer',
  // Adres en telefoon komen letterlijk uit de Figma (placeholder); vervang door de echte gegevens.
  address: ['Pascallaan 3 – 2e etage', '2289 CL Rijswijk'],
  phone: '085 201 47 33',
  phoneHref: 'tel:+31852014733',
  email: 'info@beginbhv.nl',
  googleRating: '9.6',
  description:
    'BeginBHV verzorgt erkende BHV-trainingen door heel Nederland. Eendaagse praktijkcursussen op onze locatie of bij u op het bedrijf, met certificaat.',
  // GA4: vul het measurement-ID in (bijv. G-XXXXXXXXXX). Leeg = geen tracking.
  ga4: '',
};

// Hoofdmenu met dropdowns. `children` = submenu; het hoofditem zelf linkt naar de overzichtspagina.
export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Cursussen', href: '/cursussen',
    children: [
      { label: 'Alle cursussen', href: '/cursussen' },
      { label: 'BHV Basis', href: '/cursussen/bhv-basis' },
      { label: 'BHV Standaard', href: '/cursussen/bhv-standaard' },
      { label: 'BHV Herhaling', href: '/cursussen/bhv-herhaling' },
      { label: 'BHV NIBHV', href: '/cursussen/bhv-nibhv' },
      { label: 'Ploegleider BHV', href: '/cursussen/bhv-ploegleider' },
      { label: 'Bedrijfsleider BHV', href: '/cursussen/bhv-bedrijfsleider' },
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
