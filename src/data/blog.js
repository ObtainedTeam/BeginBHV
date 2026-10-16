// Blogartikelen. Route /blog/[slug]. Datum in ISO, nieuwste eerst op de overzichtspagina.
export const posts = [
  {
    slug: 'bhv-certificaat-verlopen-wat-nu',
    title: 'BHV-certificaat verlopen? Dit moet je doen',
    date: '2026-10-06',
    author: 'Dennis Sluijmer',
    image: '/images/cursus-bhv-herhaling.webp',
    excerpt: 'Een BHV-certificaat is één jaar geldig. Verlopen? Geen paniek, maar wel snel handelen. Dit zijn je opties.',
    sections: [
      { p: ['Elk jaar krijgen we tientallen telefoontjes van bedrijven die ontdekken dat de certificaten van hun BHV’ers verlopen zijn. Meestal door een verhuizing, een personeelswissel of gewoon omdat niemand de datum in de agenda had gezet. Goed nieuws: het is snel op te lossen.'] },
      { h: 'Tot zes maanden verlopen: herhalingscursus', p: ['Is het certificaat maximaal zes maanden verlopen, dan volstaat de <a href="/cursussen/bhv-herhaling">herhalingscursus</a> van één dag. Je frist alle vaardigheden op en het certificaat wordt met een jaar verlengd.'] },
      { h: 'Langer dan zes maanden: volledige cursus', p: ['Daarna adviseren we de volledige <a href="/cursussen/bhv-standaard">BHV Standaard</a>. Niet omdat het moet van de wet, maar omdat vaardigheden als reanimatie snel wegzakken. Je team verdient een echte opfrisser.'] },
      { h: 'Voorkom het volgende jaar', list: ['Zet de herhaling direct na de cursus in de agenda', 'Koppel BHV aan een vast moment, bijvoorbeeld de jaarlijkse ontruimingsoefening', 'Wij sturen automatisch een herinnering twee maanden voor de vervaldatum'] },
    ],
  },
  {
    slug: 'reanimatie-in-6-stappen',
    title: 'Reanimeren in 6 stappen: zo doe je het',
    date: '2026-09-22',
    author: 'Dennis Sluijmer',
    image: '/images/foto-aed.webp',
    excerpt: 'Bij een hartstilstand telt elke minuut. Dit zijn de zes stappen die je in de BHV-cursus leert, als geheugensteun.',
    sections: [
      { p: ['Dit artikel vervangt geen cursus. Reanimeren leer je door te oefenen op een pop, met feedback van een trainer. Maar als geheugensteun helpt het om de stappen te kennen.'] },
      { h: 'De zes stappen', list: ['Controleer het bewustzijn: schud aan de schouders en roep', 'Bel 112 (of laat bellen) en vraag om een AED', 'Controleer de ademhaling: kijk, luister, voel, maximaal 10 seconden', 'Start borstcompressies: 30 keer, midden op de borst, 5 tot 6 cm diep, 100 tot 120 per minuut', 'Geef 2 beademingen en ga door met 30:2', 'Sluit de AED aan zodra die er is en volg de instructies'] },
      { h: 'De meest gemaakte fouten', p: ['Te zacht drukken, te langzaam, en te lang pauzeren. In de cursus zie je op de oefenpop precies hoe diep en hoe snel je drukt. Na een uur oefenen zit het in je handen.'], note: 'Wil je dit echt leren? In elke BHV-cursus van BeginBHV oefen je reanimatie met AED tot het automatisch gaat.' },
    ],
  },
  {
    slug: 'ontruimingsoefening-organiseren',
    title: 'Een ontruimingsoefening organiseren in 5 stappen',
    date: '2026-09-08',
    author: 'Dennis Sluijmer',
    image: '/images/cursus-ontruiming.webp',
    excerpt: 'Een plan dat nooit geoefend is, werkt niet. Zo zet je in een middag een ontruimingsoefening op die wat oplevert.',
    sections: [
      { h: '1. Bepaal het scenario', p: ['Kies iets realistisch: brand in de keuken, rook in de serverruimte, een gaslucht. Spreek af wie het alarm geeft en hoe laat.'] },
      { h: '2. Kondig de eerste keer aan', p: ['Een eerste oefening kondig je aan, zodat iedereen weet wat er verwacht wordt. Pas bij de tweede of derde oefening doe je het onaangekondigd.'] },
      { h: '3. Zet waarnemers neer', p: ['Twee of drie collega’s die niet meedoen, maar kijken: hoe snel is het alarm gegeven, worden de vluchtroutes gebruikt, lopen mensen terug voor hun jas?'] },
      { h: '4. Tel op de verzamelplaats', p: ['De ploegleider telt en vergelijkt met de aanwezigheidslijst. Ontbreekt er iemand, dan is dat de eerste melding aan de brandweer.'] },
      { h: '5. Evalueer direct', p: ['Bespreek binnen een kwartier wat goed ging en wat beter moet. Leg het vast en pas het <a href="/kennisbank/ontruimingsplan">ontruimingsplan</a> aan. Lees ook: <a href="/kennisbank/bhv-plan">het BHV-plan</a>.'], note: 'Wij begeleiden ontruimingsoefeningen op locatie, inclusief evaluatie. Vraag het aan via de contactpagina.' },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const fmtDate = (iso) => new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
