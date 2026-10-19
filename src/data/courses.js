// Alle cursusdata op één plek. Prijzen en aanbod volgens opgave van Dennis (okt 2026).
// Alle trainingen: e-learning vooraf + praktijkdag bij de klant op locatie of op een externe locatie in overleg.
// Beeld: vaste bestandsnamen in public/images/ (bestand vervangen = klaar).

export const priceNote = 'per deelnemer, excl. btw';

export const courses = [
  {
    slug: 'bhv-basis',
    title: 'Basis BHV',
    subtitle: '+ e-learning',
    short: 'Basis',
    image: '/images/cursus-bhv-standaard.webp',
    icon: '/images/icon-bhv-standaard.png',
    featured: true,
    blurb: 'De complete BHV-opleiding: e-learning vooraf en één praktijkdag met reanimatie, AED, eerste hulp, brand en ontruiming.',
    bullets: ['E-learning + 1 praktijkdag', 'Erkend BHV-certificaat'],
    price: '150,00',
    variants: [
      { label: 'Nederlandstalig', price: '150,00' },
      { label: 'Engelstalig', price: '180,00' },
      { label: 'Spaanstalig', price: '220,00' },
    ],
    description: [
      'Je begint thuis met de e-learning, zodat de theorie al zit als je bij ons binnenstapt. Op de praktijkdag oefen je reanimatie met AED, eerste hulp, het blussen van een beginnende brand en een ontruiming in realistische scenario’s. Geen dag luisteren, maar doen.',
      'De cursus voldoet aan de eisen uit de Arbowet en is geschikt voor iedereen zonder eerdere BHV-ervaring. Na afloop ontvang je een erkend BHV-certificaat en BHV-pasje. Ook beschikbaar in het Engels en Spaans.',
    ],
    content: ['E-learning: theorie in eigen tempo', 'Levensreddende eerste handelingen', 'Reanimatie en AED', 'Beginnende brand bestrijden', 'Ontruiming en communicatie'],
    specs: {
      Duur: 'E-learning + 1 praktijkdag',
      Tijdsduur: '09:00 - 17:00',
      Studiebelasting: 'Circa 2 uur e-learning vooraf',
      Vooropleiding: 'Geen vooropleiding vereist',
      Certificaat: 'Erkend BHV-certificaat, één jaar geldig',
      Groepsgrootte: 'Maximaal 12 personen',
      Taal: 'Nederlands, Engels (€ 180) of Spaans (€ 220)',
    },
    heroLabel: 'In één dag BHV’er!',
    heroTitle: 'Basis BHV + e-learning',
  },
  {
    slug: 'bhv-herhaling',
    title: 'Herhaling BHV',
    subtitle: '+ e-learning',
    short: 'Herhaling',
    image: '/images/foto-blussen-actie.webp',
    icon: '/images/icon-bhv-standaard.png',
    featured: true,
    blurb: 'Houd je BHV-kennis actueel: e-learning vooraf en een praktijkdag waarin je alle vaardigheden opfrist en je certificaat verlengt.',
    bullets: ['E-learning + 1 praktijkdag', 'Verlenging BHV-certificaat'],
    price: '125,00',
    description: [
      'Een BHV-certificaat is één jaar geldig. Tijdens de herhaling fris je via de e-learning de theorie op en oefen je op de praktijkdag reanimatie, AED, verbandleer, brandbestrijding en ontruiming. De nadruk ligt op doen, niet op luisteren.',
      'Na afloop wordt je certificaat met een jaar verlengd en ontvang je een nieuw BHV-pasje.',
    ],
    content: ['E-learning: opfrissen theorie', 'Eerste hulp en reanimatie met AED', 'Brandbestrijding', 'Ontruimingsoefening'],
    specs: {
      Duur: 'E-learning + 1 praktijkdag',
      Tijdsduur: '09:00 - 16:00',
      Studiebelasting: 'Circa 1 uur e-learning vooraf',
      Vooropleiding: 'Geldig of maximaal 6 maanden verlopen BHV-certificaat',
      Certificaat: 'Verlenging BHV-certificaat met één jaar',
      Groepsgrootte: 'Maximaal 12 personen',
    },
    heroLabel: 'Blijf paraat!',
    heroTitle: 'Herhaling BHV + e-learning',
  },
  {
    slug: 'bhv-nibhv',
    title: 'Basis BHV (NIBHV)',
    subtitle: '+ e-learning',
    short: 'NIBHV',
    image: '/images/cursus-bhv-nibhv.webp',
    icon: '/images/icon-bhv-nibhv.png',
    featured: true,
    blurb: 'De BHV-opleiding met het NIBHV-keurmerk: landelijk erkend diploma, examen en registratie in het NIBHV-register.',
    bullets: ['E-learning + 1 praktijkdag', 'NIBHV-diploma en pasje'],
    price: '225,00',
    description: [
      'Kies voor de NIBHV-variant als je opdrachtgever, verzekeraar of branche om een landelijk erkend diploma vraagt. De inhoud is gelijk aan Basis BHV, aangevuld met een officieel NIBHV-examen.',
      'Na het behalen van het examen ontvang je het NIBHV-diploma en -pasje en word je opgenomen in het NIBHV-register.',
    ],
    content: ['E-learning: theorie in eigen tempo', 'Eerste hulp en reanimatie', 'Brandbestrijding en ontruiming', 'NIBHV theorie-examen', 'NIBHV praktijkexamen'],
    specs: {
      Duur: 'E-learning + 1 praktijkdag',
      Tijdsduur: '09:00 - 17:00',
      Studiebelasting: 'Circa 2 uur e-learning vooraf',
      Vooropleiding: 'Geen vooropleiding vereist',
      Certificaat: 'NIBHV-diploma, één jaar geldig',
      Groepsgrootte: 'Maximaal 12 personen',
    },
    heroLabel: 'Erkend door NIBHV',
    heroTitle: 'Basis BHV (NIBHV) + e-learning',
  },
  {
    slug: 'bhv-nibhv-herhaling',
    title: 'Herhaling BHV (NIBHV)',
    subtitle: '+ e-learning',
    short: 'NIBHV herhaling',
    image: '/images/foto-aed.webp',
    icon: '/images/icon-bhv-nibhv.png',
    blurb: 'Verleng je NIBHV-diploma: e-learning vooraf en een praktijkdag met examen, zodat je registratie in het NIBHV-register doorloopt.',
    bullets: ['E-learning + 1 praktijkdag', 'Verlenging NIBHV-diploma'],
    price: '185,00',
    description: [
      'Het NIBHV-diploma is één jaar geldig. In de herhaling fris je de theorie op via de e-learning en oefen je op de praktijkdag alle vaardigheden, afgesloten met het NIBHV-examen.',
      'Na afloop wordt je diploma verlengd en blijft je registratie in het NIBHV-register actief.',
    ],
    content: ['E-learning: opfrissen theorie', 'Eerste hulp en reanimatie met AED', 'Brandbestrijding en ontruiming', 'NIBHV-examen'],
    specs: {
      Duur: 'E-learning + 1 praktijkdag',
      Tijdsduur: '09:00 - 16:00',
      Studiebelasting: 'Circa 1 uur e-learning vooraf',
      Vooropleiding: 'Geldig of maximaal 6 maanden verlopen NIBHV-diploma',
      Certificaat: 'Verlenging NIBHV-diploma met één jaar',
      Groepsgrootte: 'Maximaal 12 personen',
    },
    heroLabel: 'Blijf geregistreerd',
    heroTitle: 'Herhaling BHV (NIBHV) + e-learning',
  },
  {
    slug: 'reanimatie-workshop',
    title: 'Reanimatie workshop',
    short: 'Reanimatie',
    image: '/images/foto-reanimatie-uitleg.webp',
    icon: '/images/icon-bhv-standaard.png',
    blurb: 'Twee uur intensief oefenen met reanimatie en AED, voor het hele team. Per groep, op onze locatie of bij jullie op het bedrijf.',
    bullets: ['Circa 2 uur', 'Per groep, max 12 deelnemers'],
    price: '295,00',
    priceNote: 'per groep tot 6 deelnemers, excl. btw',
    variants: [
      { label: 'Tot 6 deelnemers', price: '295,00' },
      { label: '6 tot 12 deelnemers', price: '450,00' },
    ],
    description: [
      'Bij een hartstilstand telt elke minuut. In deze workshop van circa twee uur leert iedereen in het team reanimeren en een AED gebruiken, met veel oefentijd op de pop en directe feedback van de trainer.',
      'Ideaal als aanvulling op de BHV-organisatie, als teamactiviteit of voor collega’s die geen volledige BHV-cursus nodig hebben. Tot 6 deelnemers € 295, van 6 tot 12 deelnemers € 450 (excl. btw).',
    ],
    content: ['Herkennen van een hartstilstand', 'Borstcompressies en beademing', 'AED aansluiten en gebruiken', 'Oefenen tot het automatisch gaat'],
    specs: {
      Duur: 'Circa 2 uur',
      Groepsgrootte: 'Tot 6 deelnemers € 295, 6 tot 12 deelnemers € 450',
      Vooropleiding: 'Geen',
      Certificaat: 'Deelnamebewijs',
      Locatie: 'Bij u op het bedrijf of op een externe locatie in overleg',
    },
    heroLabel: 'Elke minuut telt',
    heroTitle: 'Reanimatie workshop',
  },
  {
    slug: 'ontruimingsoefening',
    title: 'Ontruimingsoefening',
    short: 'Ontruiming',
    image: '/images/cursus-ontruiming.webp',
    icon: '/images/icon-bhv-ploegleider.png',
    blurb: 'Een begeleide ontruimingsoefening op uw eigen locatie, inclusief waarnemers, verslag en evaluatie met het BHV-team.',
    bullets: ['Op uw eigen locatie', 'Inclusief verslag en evaluatie'],
    price: '345,00',
    priceNote: 'per oefening, excl. btw',
    description: [
      'Een ontruimingsplan dat nooit geoefend is, werkt niet. Wij bereiden samen met u een realistisch scenario voor, begeleiden de oefening op uw locatie en kijken mee: hoe snel wordt het alarm gegeven, worden de vluchtroutes gebruikt, klopt de telling op de verzamelplaats?',
      'Na afloop bespreken we de oefening direct met het BHV-team en ontvangt u een schriftelijk verslag met concrete verbeterpunten voor uw ontruimingsplan.',
    ],
    content: ['Voorbereiding en scenario', 'Begeleide oefening op locatie', 'Waarneming en tijdmeting', 'Evaluatie met het team', 'Schriftelijk verslag'],
    specs: {
      Duur: 'Circa een dagdeel',
      Locatie: 'Op uw eigen locatie',
      Vooropleiding: 'Geen',
      Certificaat: 'Verslag en evaluatie',
      Groepsgrootte: 'Hele organisatie',
    },
    heroLabel: 'Oefenen op locatie',
    heroTitle: 'Ontruimingsoefening',
  },
];

// Incompany groepsprijzen (excl. btw). Voorrijkosten € 0,33 per km naar de locatie.
export const incompanyPrices = [
  { title: 'Basis BHV', rows: [['Groep tot 8 cursisten', '1.250,00'], ['Groep van 8 tot 12 cursisten', '1.650,00']] },
  { title: 'Basis BHV (NIBHV)', rows: [['Groep tot 8 cursisten', '1.800,00'], ['Groep van 8 tot 12 cursisten', '2.700,00']] },
];
export const travelCost = '€ 0,33 per kilometer naar de locatie';

export const getCourse = (slug) => courses.find((c) => c.slug === slug);

// Datum-badge op de cursuskaarten (eerstvolgende startdatum). Voorbeeldwaarde.
export const nextDate = { day: '13', month: 'NOV' };
