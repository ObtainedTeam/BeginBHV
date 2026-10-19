// Extra homepagesecties (KAN-46). Alles hier is tekst/data; de componenten staan in src/components/.

// "Zo werkt het in drie stappen"
export const steps = [
  { n: '1', title: 'Aanvragen', text: 'Kies een cursus en vraag een datum aan. Binnen één werkdag heb je een voorstel met datum, locatie en prijs.' },
  { n: '2', title: 'E-learning thuis', text: 'Iedere deelnemer doet de theorie online, in eigen tempo. Ongeveer twee uur, op telefoon of laptop.' },
  { n: '3', title: 'Praktijkdag en certificaat', text: 'Eén dag oefenen met realistische scenario’s bij jullie op locatie. Het erkende certificaat volgt binnen enkele dagen.' },
];

// Cijferbalk. DEMO-WAARDEN: vervangen door echte cijfers van Dennis.
// value = getal om naar toe te tellen, suffix/prefix zijn tekst, decimals bepaalt de weergave.
export const stats = [
  { value: 1250, suffix: '+', label: 'BHV’ers getraind' },
  { value: 340, suffix: '+', label: 'bedrijven geholpen' },
  { value: 9.6, decimals: 1, label: 'gemiddelde beoordeling' },
  { value: 98, suffix: '%', label: 'slaagt in één keer' },
];

// Klantlogo-balk. PLACEHOLDERS: vervang src door echte logo's in public/images/klanten/ (png of svg, liefst zwart of grijs).
export const clientLogos = [
  { name: 'Klant 1', src: '/images/klanten/placeholder-1.svg' },
  { name: 'Klant 2', src: '/images/klanten/placeholder-2.svg' },
  { name: 'Klant 3', src: '/images/klanten/placeholder-3.svg' },
  { name: 'Klant 4', src: '/images/klanten/placeholder-4.svg' },
  { name: 'Klant 5', src: '/images/klanten/placeholder-5.svg' },
  { name: 'Klant 6', src: '/images/klanten/placeholder-6.svg' },
];

// "Waarom BeginBHV"
export const whyUs = [
  { icon: 'person', title: 'Eén vaste trainer', text: 'Je traint met Dennis zelf, niet met een wisselende freelancer. Hij kent jullie situatie en de afspraken.' },
  { icon: 'pin', title: 'Bij jullie op locatie', text: 'We komen naar je toe, overal in Nederland, met alle oefenmaterialen. Je oefent waar het straks moet gebeuren.' },
  { icon: 'badge', title: 'Erkend certificaat', text: 'Kiwa-gecertificeerd opleider, erkend door BVBN, met NIBHV-variant. Geldig voor Arbo-inspectie en verzekeraar.' },
  { icon: 'group', title: 'Kleine groepen', text: 'Maximaal twaalf deelnemers, dus iedereen komt aan bod op de pop, bij de blusbak en in de ontruiming.' },
];

