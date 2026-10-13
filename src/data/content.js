// Teksten voor reviews, FAQ en de funnel. Lorem ipsum uit de Figma is hier
// vervangen door passende BeginBHV-copy. Pas aan waar nodig.

export const clientReview = {
  name: 'Cuckie in Amsterdam - De Amstel Business group',
  logo: '/images/review-cuckie.png',
  quote:
    '“Dennis heeft ons hele team in één dag BHV-klaar gemaakt. Geen droge theorie maar echte scenario’s in onze eigen zaak: een collega die onwel wordt, een vetbrand in de keuken, de ontruiming via de achteruitgang. Iedereen ging naar huis met het gevoel dat ze het ook écht kunnen. De planning was flexibel en het certificaat hadden we dezelfde week binnen.”',
};

export const studentReviews = [
  {
    name: 'Bart Barterstra - Vliegend Vliegveld',
    logo: '/images/review-eindhoven.png',
    quote:
      '“Duidelijke uitleg, veel oefenen en een trainer die precies weet waar het in de praktijk misgaat. Ik voelde me na deze dag voor het eerst echt zeker over reanimatie en de AED!”',
  },
  {
    name: 'Sanne de Vries - Kinderopvang De Vlinder',
    logo: '',
    quote:
      '“De cursus was afgestemd op onze locatie met jonge kinderen. Praktisch, rustig en met humor gebracht. De herhaling plannen we volgend jaar zeker weer bij BeginBHV.”',
  },
  {
    name: 'Mohammed El Idrissi - Bouwbedrijf Noord',
    logo: '',
    quote:
      '“Op onze eigen bouwplaats getraind, inclusief de blusoefening. Dat maakt het verschil: je oefent waar je werkt. Certificaten waren binnen twee dagen geregeld.”',
  },
];

export const faq = [
  {
    q: 'Wat is NIBHV?',
    a: 'NIBHV (Nederlands Instituut voor Bedrijfshulpverlening) is een keurmerk voor BHV-opleidingen. Een NIBHV-cursus wordt afgesloten met een examen en levert een landelijk erkend diploma op dat in het NIBHV-register wordt vastgelegd.',
  },
  {
    q: 'Is een NIBHV diploma verplicht?',
    a: 'Nee, een BHV cursus hoeft niet NIBHV erkend te zijn. Er bestaat in Nederland geen officieel instituut of examen voor bedrijfshulpverlening.',
  },
  {
    q: 'Moet een BHV cursus NIBHV erkend zijn?',
    a: 'Niet volgens de Arbowet. Sommige opdrachtgevers, verzekeraars of branches vragen er wel om. Twijfel je? Vraag het na bij je opdrachtgever of neem contact met ons op; wij bieden beide varianten aan.',
  },
  {
    q: 'Hebben jullie het NIBHV keurmerk?',
    a: 'Ja. Naast onze eigen erkende BHV-trainingen bieden we de BHV (NIBHV) cursus aan, inclusief officieel examen, diploma en pasje.',
  },
  {
    q: 'Hoe lang is een BHV certificaat geldig?',
    a: 'Een BHV certificaat en BHV pasje zijn één jaar geldig. Met de jaarlijkse herhalingscursus verleng je de geldigheid telkens met een jaar.',
  },
  {
    q: 'Kan de cursus ook op onze eigen locatie?',
    a: 'Zeker. Vanaf vijf deelnemers komen we naar uw bedrijf, overal in Nederland. We nemen alle oefenmaterialen mee, inclusief reanimatiepoppen, AED-trainer en blusmiddelen.',
  },
];

// Meerstaps aanvraagfunnel (datagedreven). Vragen aanpassen = alleen dit bestand.
export const funnel = {
  title: 'Welke cursus wilt u aanvragen?',
  intro: 'Beantwoord vier korte vragen. We nemen binnen één werkdag contact met u op met een passend voorstel.',
  steps: [
    {
      id: 'course',
      title: 'Welke cursus wilt u aanvragen?',
      type: 'choice',
      intro: 'Kies de cursus die bij u past. In drie korte stappen weten we wat u nodig heeft en nemen we binnen één werkdag contact met u op.',
      options: [
        { value: 'bhv-nibhv', label: 'BHV (NIBHV)', icon: '\u{1F477}' },
        { value: 'bhv-standaard', label: 'BHV', icon: '\u{1FA79}' },
        { value: 'bhv-ploegleider', label: 'BHV Ploegleider', icon: '\u{1F6A8}' },
        { value: 'bhv-herhaling', label: 'BHV Herhaling', icon: '\u{1F501}' },
      ],
    },
    {
      id: 'participants',
      title: 'Voor hoeveel deelnemers?',
      type: 'choice',
      options: [
        { value: '1', label: '1 persoon' },
        { value: '2-4', label: '2 tot 4 personen' },
        { value: '5-12', label: '5 tot 12 personen' },
        { value: '12+', label: 'Meer dan 12 personen' },
      ],
    },
    {
      id: 'location',
      title: 'Waar wilt u de cursus volgen?',
      type: 'choice',
      options: [
        { value: 'incompany', label: 'Op onze eigen locatie (incompany)' },
        { value: 'beginbhv', label: 'Op een trainingslocatie van BeginBHV' },
        { value: 'onbekend', label: 'Weet ik nog niet' },
      ],
    },
    {
      id: 'contact',
      title: 'Uw gegevens',
      type: 'form',
      fields: [
        { name: 'company', label: 'Bedrijfsnaam', type: 'text', required: true, autocomplete: 'organization' },
        { name: 'name', label: 'Uw naam', type: 'text', required: true, autocomplete: 'name' },
        { name: 'email', label: 'E-mailadres', type: 'email', required: true, autocomplete: 'email' },
        { name: 'phone', label: 'Telefoonnummer', type: 'tel', required: false, autocomplete: 'tel' },
        { name: 'address', label: 'Bedrijfsadres', type: 'text', required: false, autocomplete: 'street-address' },
        { name: 'postcode', label: 'Postcode', type: 'text', required: false, autocomplete: 'postal-code' },
        { name: 'city', label: 'Plaats', type: 'text', required: false, autocomplete: 'address-level2' },
        { name: 'message', label: 'Opmerking(en)', type: 'textarea', required: false },
      ],
    },
  ],
  done: {
    title: 'Bedankt voor uw aanvraag!',
    text: 'We nemen binnen één werkdag contact met u op. Wilt u sneller schakelen? Bel ons gerust.',
  },
};

// Titel boven de aanvraagfunnel op de homepage (Figma BHV3).
export const funnelSectionTitle = 'Ploegleider BHV Cursus';

// Drie infokaarten onder "Veel gestelde vragen" op de homepage (Figma Page).
export const homeInfoCards = [
  {
    title: 'BHV certificaat en BHV pasje',
    html: 'Na het volgen van de BHV cursus ontvang je een <a href="/cursussen/bhv-standaard">BHV certificaat</a> en BHV pasje. De BHV certificaat en BHV pasje is 1 jaar geldig.',
    href: '/cursussen/bhv-standaard',
    image: '/images/foto-cursus-klas.webp',
    alt: 'BHV-cursus in een klaslokaal met reanimatieoefening',
  },
  {
    title: 'Boek nu een BHV cursus en betaal achteraf',
    html: 'Het is mogelijk om de BHV cursus via iDeal, vooraf- of achteraf te betalen. De getoonde tarieven zijn alle kosten.',
    href: '/cursussen',
    image: '/images/foto-blusser.webp',
    alt: 'Blusoefening met een brandblusser',
  },
  {
    title: 'Training op uw eigen locatie',
    html: 'Vanaf vijf deelnemers komen we naar uw bedrijf, overal in Nederland. We nemen alle oefenmaterialen mee, zodat uw team oefent op de plek waar het straks moet handelen.',
    href: '/contact',
    image: '/images/foto-cursus-klas.webp',
    alt: 'Incompany BHV-training op locatie',
  },
];
