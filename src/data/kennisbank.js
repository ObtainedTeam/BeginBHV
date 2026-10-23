// Kennisbank-artikelen. Eén object per pagina; route /kennisbank/[slug].
// Teksten zijn eerste versies door Obtained, nog te controleren door Dennis op juridische details.

export const kennisbank = [
  {
    slug: 'wat-is-bhv',
    title: 'Wat is BHV?',
    metaTitle: 'Wat is BHV? Bedrijfshulpverlening uitgelegd',
    description: 'Wat BHV precies inhoudt, wat een BHV’er doet en waarom elk bedrijf in Nederland bedrijfshulpverlening moet regelen.',
    image: '/images/sfeer-ehbo-cursus.webp',
    intro: 'BHV staat voor bedrijfshulpverlening: de hulp die collega’s verlenen bij een ongeval, brand of ontruiming totdat de professionele hulpdiensten er zijn.',
    course: 'bhv-basis',
    sections: [
      { h: 'De taken van een BHV’er', p: ['Een bedrijfshulpverlener is een gewone medewerker die is opgeleid om in de eerste minuten van een noodsituatie op te treden. Die eerste minuten zijn vaak bepalend: bij een hartstilstand daalt de overlevingskans elke minuut met ongeveer tien procent, en een beginnende brand is in de eerste twee minuten nog te blussen.'], list: ['Eerste hulp verlenen bij ongevallen en onwelwordingen', 'Reanimeren en een AED bedienen', 'Een beginnende brand bestrijden', 'Een ontruiming begeleiden en de hulpdiensten opvangen'] },
      { h: 'Waarom BHV verplicht is', p: ['De Arbowet (artikel 15) verplicht elke werkgever om bedrijfshulpverlening te organiseren. Dat geldt voor ieder bedrijf met personeel, van een winkel met twee medewerkers tot een fabriek met honderden. Hoeveel BHV’ers je nodig hebt, hangt af van de risico’s in jouw bedrijf. Lees meer in <a href="/kennisbank/is-bhv-verplicht">Is BHV verplicht?</a> en <a href="/kennisbank/hoeveel-bhvers">Hoeveel BHV’ers heb ik nodig?</a>'] },
      { h: 'Hoe word je BHV’er?', p: ['Met een eendaagse praktijkcursus. Bij BeginBHV leer je in één dag reanimeren, eerste hulp verlenen, blussen en ontruimen, met realistische scenario’s en kleine groepen. Na afloop ontvang je een erkend certificaat dat één jaar geldig is; met een jaarlijkse herhalingscursus blijft het geldig.'], note: 'Geen vooropleiding nodig. Iedereen die fysiek in staat is om te handelen, kan BHV’er worden.' },
    ],
  },
  {
    slug: 'is-bhv-verplicht',
    title: 'Is BHV verplicht?',
    metaTitle: 'Is BHV verplicht? Wat de Arbowet van werkgevers vraagt',
    description: 'Ja, elke werkgever met personeel moet bedrijfshulpverlening regelen. Wat de Arbowet precies eist, wat de boetes zijn en hoe je het praktisch regelt.',
    image: '/images/branche-kantoor.webp',
    intro: 'Kort antwoord: ja. Iedere werkgever met personeel in Nederland is verplicht om bedrijfshulpverlening te organiseren. Hoe dat eruitziet, bepaal je zelf op basis van de risico’s in je bedrijf.',
    course: 'bhv-basis',
    sections: [
      { h: 'Wat de wet zegt', p: ['Artikel 15 van de Arbowet verplicht de werkgever om zich bij te laten staan door een of meer werknemers die zijn aangewezen als bedrijfshulpverlener. Zij moeten eerste hulp kunnen verlenen, brand kunnen beperken en bestrijden, en alarmeren en ontruimen. De werkgever zorgt voor opleiding en materiaal.', 'Er is geen wettelijk minimumaantal BHV’ers. Het aantal moet passen bij de risico-inventarisatie en -evaluatie (RI&E) van je bedrijf: grootte, aantal medewerkers en bezoekers, aard van het werk en bereikbaarheid voor hulpdiensten.'] },
      { h: 'Ook verplicht als je alleen werkt?', p: ['Een zzp’er zonder personeel valt niet onder deze verplichting. Zodra je één werknemer in dienst hebt, geldt de Arbowet, dus ook de BHV-plicht. Bij een eenmanszaak met personeel mag de eigenaar zelf de BHV’er zijn.'] },
      { h: 'Wat als je het niet regelt?', p: ['De Nederlandse Arbeidsinspectie kan bij een controle of na een incident een boete opleggen. De boetes voor het ontbreken van BHV lopen op tot enkele duizenden euro’s per overtreding. Belangrijker: bij een ongeval zonder adequate hulpverlening kun je als werkgever aansprakelijk worden gesteld.'] },
      { h: 'Zo regel je het', list: ['Bepaal in je RI&E hoeveel BHV’ers je nodig hebt', 'Laat ze opleiden met een erkende BHV-cursus', 'Zorg voor materiaal: verbanddoos, blusmiddelen, AED', 'Leg de afspraken vast in een BHV-plan en oefen jaarlijks', 'Herhaal de cursus elk jaar zodat de certificaten geldig blijven'], note: 'BeginBHV helpt met alles hierboven: van cursus tot BHV-plan. <a href="/contact">Vraag een vrijblijvend advies aan.</a>' },
    ],
  },
  {
    slug: 'bhv-plan',
    title: 'Het BHV-plan',
    metaTitle: 'BHV-plan opstellen: wat erin moet en hoe je het bijhoudt',
    description: 'Een BHV-plan beschrijft wie wat doet bij een noodsituatie. Wat er in een goed BHV-plan staat en hoe je het praktisch houdt.',
    image: '/images/sfeer-blusser.webp',
    intro: 'Een BHV-plan is de uitwerking van je bedrijfshulpverlening op papier: wie zijn de BHV’ers, hoe wordt gealarmeerd, waar liggen de middelen en hoe verloopt een ontruiming. Het is geen wettelijk verplicht document, maar het is wel de enige manier om aan te tonen dat je BHV op orde is.',
    course: 'ontruimingsoefening',
    sections: [
      { h: 'Wat staat er in een BHV-plan?', list: ['Overzicht van de BHV’ers, hun taken en bereikbaarheid', 'Alarmeringsprocedure: wie belt 112, wie waarschuwt de BHV’ers', 'Plattegronden met vluchtroutes, verzamelplaats, blusmiddelen en AED', 'Ontruimingsplan en instructies per afdeling', 'Afspraken over oefenen, herhaling en onderhoud van middelen', 'Specifieke risico’s uit de RI&E en de bijbehorende maatregelen'] },
      { h: 'Houd het praktisch', p: ['Een BHV-plan van veertig pagina’s dat niemand leest, helpt niet. Maak een korte versie voor aan de muur (wie bel je, waar is de verzamelplaats) en bewaar de volledige versie digitaal. Loop het plan elk jaar na bij de herhalingscursus en pas het aan bij verbouwingen, verhuizingen of personeelswisselingen.'] },
      { h: 'Van plan naar praktijk', p: ['Met een <a href="/cursussen/ontruimingsoefening">begeleide ontruimingsoefening</a> zie je hoe je een papieren BHV-plan vertaalt naar de praktijk en hoe je een ploeg traint en voorbereidt. Wil je dat wij het plan voor je opstellen of toetsen? Dat kan als onderdeel van ons <a href="/contact">advies op maat</a>.'] },
    ],
  },
  {
    slug: 'rie-en-bhv',
    title: 'RI&E en BHV',
    metaTitle: 'RI&E en BHV: hoe de risico-inventarisatie je BHV bepaalt',
    description: 'De risico-inventarisatie en -evaluatie (RI&E) is de basis voor je BHV-organisatie. Zo gebruik je de RI&E om het aantal BHV’ers en de middelen te bepalen.',
    image: '/images/sfeer-blusoefening.webp',
    intro: 'Elke werkgever is verplicht een RI&E te hebben: een overzicht van de risico’s op de werkvloer en een plan van aanpak. De RI&E bepaalt wat je BHV-organisatie moet kunnen.',
    course: 'ontruimingsoefening',
    sections: [
      { h: 'Wat de RI&E voor BHV betekent', p: ['De RI&E brengt in kaart welke gevaren er zijn: brandgevaarlijke stoffen, machines, veel bezoekers, mensen die niet zelfredzaam zijn, werken op hoogte. Uit die risico’s volgt wat de BHV moet afdekken en hoeveel BHV’ers je nodig hebt. Een kantoor met tien medewerkers heeft iets anders nodig dan een kinderdagverblijf of een productiehal.'] },
      { h: 'Vragen die de RI&E beantwoordt', list: ['Hoeveel mensen zijn er maximaal tegelijk aanwezig?', 'Zijn er bezoekers of mensen die hulp nodig hebben bij ontruiming?', 'Welke brandrisico’s zijn er en welke blusmiddelen passen daarbij?', 'Hoe snel is professionele hulp ter plaatse?', 'Op welke tijden en plekken moet er altijd een BHV’er zijn?'] },
      { h: 'Geen RI&E?', p: ['Dan ben je als werkgever direct in overtreding. Voor kleine bedrijven zijn er branche-RI&E’s die je grotendeels zelf kunt invullen. BeginBHV helpt bij het BHV-deel van je RI&E en vertaalt de uitkomst naar een concreet BHV-plan. Vraag ons gerust om <a href="/contact">advies op maat</a> voor directie en leidinggevenden.'] },
    ],
  },
  {
    slug: 'hoeveel-bhvers',
    title: 'Hoeveel BHV’ers heb ik nodig?',
    metaTitle: 'Hoeveel BHV’ers heb ik nodig? Vuistregels per bedrijfsgrootte',
    description: 'Er is geen wettelijk minimum, maar wel duidelijke vuistregels. Zo bepaal je hoeveel BHV’ers jouw bedrijf nodig heeft.',
    image: '/images/branche-bouw.webp',
    intro: 'De wet noemt geen getal. Het aantal BHV’ers moet passen bij de risico’s in je bedrijf en er moet altijd een BHV’er aanwezig zijn als er gewerkt wordt. In de praktijk gelden deze vuistregels.',
    course: 'bhv-basis',
    sections: [
      { h: 'Vuistregels', list: ['Tot 50 medewerkers: minimaal 1 BHV’er per 50 aanwezigen, en altijd een vervanger voor ziekte, vakantie en ploegendiensten', 'Meerdere verdiepingen of gebouwen: per verdieping of gebouw minimaal 1 BHV’er', 'Bezoekers of niet-zelfredzame personen (kinderopvang, zorg, horeca): meer BHV’ers, afgestemd op de ontruiming', 'Verhoogd risico (brandgevaarlijke stoffen, machines, werken op hoogte): meer BHV’ers en specifieke training'], note: 'Reken met aanwezigheid, niet met het personeelsbestand. Bij ploegendiensten, parttimers en thuiswerkers heb je vaak meer BHV’ers nodig dan je denkt.' },
      { h: 'Rekenvoorbeeld', p: ['Een kantoor met 30 medewerkers op twee verdiepingen, waarvan gemiddeld 20 tegelijk aanwezig: minimaal 2 BHV’ers (één per verdieping) plus 2 vervangers, dus 4 opgeleide BHV’ers. Een kinderdagverblijf met 12 medewerkers en 60 kinderen: minimaal 1 BHV’er per groep die tegelijk aanwezig is, dus vaak 4 tot 6.'] },
      { h: 'Twijfel je?', p: ['Stuur ons de basisgegevens (aantal medewerkers, verdiepingen, bezoekers, openingstijden) en je krijgt binnen één werkdag een advies. Vanaf vijf deelnemers trainen we bij jou op locatie. <a href="/contact">Vraag het hier aan.</a>'] },
    ],
  },
  {
    slug: 'aed-op-de-werkvloer',
    title: 'AED op de werkvloer',
    metaTitle: 'AED op de werkvloer: verplicht, nodig en hoe je ermee omgaat',
    description: 'Een AED is niet verplicht maar wel verstandig. Wat een AED doet, waar je hem ophangt en hoe BHV’ers ermee leren werken.',
    image: '/images/sfeer-reanimatie-aed.webp',
    intro: 'Een AED (automatische externe defibrillator) geeft bij een hartstilstand een elektrische schok die het hart weer in het juiste ritme kan brengen. Gecombineerd met reanimatie verdubbelt het de overlevingskans.',
    course: 'bhv-basis',
    sections: [
      { h: 'Is een AED verplicht?', p: ['Nee, de wet verplicht geen AED. Wel moet je BHV passen bij de risico’s, en in veel RI&E’s komt daar een AED uit: bij veel medewerkers of bezoekers, bij fysiek werk, of wanneer een ambulance niet binnen zes minuten ter plaatse kan zijn. Een AED kost ongeveer 1.200 tot 2.000 euro en gaat tien jaar mee.'] },
      { h: 'Waar hang je hem?', list: ['Centraal, zichtbaar en binnen 1 tot 2 minuten lopen vanaf elke werkplek', 'Niet achter slot, wel in een kast met alarm of melding', 'Aangemeld bij HartslagNu, zodat burgerhulpverleners hem ook kunnen gebruiken', 'Met een onderhoudsschema voor batterij en elektroden'] },
      { h: 'Leren werken met de AED', p: ['Elke BHV-cursus van BeginBHV bevat reanimatie met AED-trainer. Je oefent net zo lang tot de handelingen automatisch gaan: controleren, 112 bellen, borstcompressies, AED aansluiten, schok volgen. Dat herhalen we elk jaar in de <a href="/cursussen/bhv-herhaling">herhalingscursus</a>.'] },
    ],
  },
  {
    slug: 'ontruimingsplan',
    title: 'Ontruimingsplan',
    metaTitle: 'Ontruimingsplan maken: stappen, plattegrond en oefenen',
    description: 'Hoe je een ontruimingsplan opstelt dat in de praktijk werkt: alarmering, vluchtroutes, verzamelplaats en de jaarlijkse oefening.',
    image: '/images/cursus-ontruiming.webp',
    intro: 'Een ontruimingsplan beschrijft hoe iedereen het gebouw veilig verlaat bij brand of een andere calamiteit. Voor gebouwen met een brandmeldinstallatie is het verplicht; voor alle andere bedrijven is het onderdeel van goede BHV.',
    course: 'ontruimingsoefening',
    sections: [
      { h: 'Onderdelen van een ontruimingsplan', list: ['Hoe het alarm wordt gegeven (slow-whoop, omroep, mondeling)', 'Taken van BHV’ers en ploegleider tijdens de ontruiming', 'Vluchtroutes en nooduitgangen per verdieping, op plattegrond', 'Verzamelplaats en wie daar de telling doet', 'Afspraken voor bezoekers, mindervaliden en kinderen', 'Opvang van de brandweer en overdracht'] },
      { h: 'Oefen minimaal één keer per jaar', p: ['Een plan dat nooit geoefend is, werkt niet. Kondig de eerste oefening aan, evalueer, en oefen daarna onaangekondigd. Leg vast wat goed ging en wat beter moet. Wij begeleiden een <a href="/cursussen/ontruimingsoefening">ontruimingsoefening</a> op locatie, inclusief verslag en evaluatie.'] },
      { h: 'Hulp nodig?', p: ['Wij stellen ontruimingsplannen op, maken de plattegronden en begeleiden de eerste oefening op locatie. <a href="/contact">Vraag advies aan.</a>'] },
    ],
  },
];

export const getArticle = (slug) => kennisbank.find((a) => a.slug === slug);
