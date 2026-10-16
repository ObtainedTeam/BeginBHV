// Trainingslocaties. PLACEHOLDER: vervang door de echte locaties van BeginBHV (naam, adres, parkeren, foto).
export const locaties = [
  { slug: 'lelystad', city: 'Lelystad', name: 'BeginBHV Trainingscentrum Lelystad', address: 'Adres volgt', postcode: '', note: 'Hoofdlocatie. Gratis parkeren voor de deur, 10 minuten lopen vanaf station Lelystad Centrum.', image: '/images/foto-blussen-wide.webp', region: 'Flevoland en Noord-Holland', placeholder: true },
  { slug: 'amsterdam', city: 'Amsterdam', name: 'Trainingslocatie Amsterdam', address: 'Adres volgt', postcode: '', note: 'Goed bereikbaar met OV en auto, parkeergarage naast het gebouw.', image: '/images/cursus-bhv-standaard.webp', region: 'Amsterdam en omgeving', placeholder: true },
  { slug: 'utrecht', city: 'Utrecht', name: 'Trainingslocatie Utrecht', address: 'Adres volgt', postcode: '', note: 'Centraal in het land, direct aan de A2. Gratis parkeren.', image: '/images/cursus-bhv-nibhv.webp', region: 'Midden-Nederland', placeholder: true },
];
export const getLocatie = (slug) => locaties.find((l) => l.slug === slug);
