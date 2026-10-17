// Trainingslocatie van BeginBHV. Het exacte adres van de trainingslocatie volgt nog (Dennis).
export const locaties = [
  { slug: 'lelystad', city: 'Lelystad', name: 'Trainingslocatie BeginBHV Lelystad', address: 'Adres ontvang je bij je bevestiging', postcode: '', note: 'Onze eigen trainingslocatie in Lelystad, centraal in Flevoland en goed bereikbaar vanuit de Randstad en het noorden. Alle open cursussen vinden hier plaats; incompany komen we naar u toe.', image: '/images/foto-blussen-wide.webp', region: 'Flevoland, Randstad en Noord-Nederland', placeholder: true },
];
export const getLocatie = (slug) => locaties.find((l) => l.slug === slug);
