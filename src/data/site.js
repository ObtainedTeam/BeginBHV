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

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Cursussen', href: '/cursussen' },
  { label: 'BHV', href: '/cursussen/bhv-standaard' },
  { label: 'Advies', href: '/incompany' },
];
export const navRight = [
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Blog', href: '/blog' },
];

export const usps = [
  { icon: 'map', label: 'Landelijke dekking' },
  { icon: 'certificate', label: 'Trainingen met erkend certificaat' },
  { icon: 'cap', label: 'Kiwa gecertificeerd opleider' },
  { icon: 'advice', label: 'Advies op maat' },
];
