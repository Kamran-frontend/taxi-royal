import type { ContentSection, Faq } from "./types";

export interface AirportPage {
  slug: string;
  airport: string;
  code: string;
  distanceKm: number;
  durationText: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  highlights: string[];
  sections: ContentSection[];
  faqs: Faq[];
}

const meetGreet: ContentSection = {
  h: "Abholung mit Namensschild (Meet & Greet)",
  p: [
    "Auf Wunsch erwartet Sie unser Fahrer in der Ankunftshalle mit einem Schild mit Ihrem Namen und hilft beim Gepäck bis zum Fahrzeug. Das ist besonders praktisch nach Langstreckenflügen, für Gäste aus dem Ausland und für ältere Fahrgäste.",
    "Wir überwachen Ihre Flugnummer: Landet die Maschine früher oder später, passen wir die Abholzeit automatisch an. Wartezeit durch Flugverspätung berechnen wir nicht.",
  ],
};

const fixedPrice: ContentSection = {
  h: "Festpreis statt Taxameter",
  p: [
    "Sie erfahren den Preis vor der Buchung und er bleibt gültig – unabhängig von Stau, Umleitung oder Uhrzeit. Der Preis gilt pro Fahrzeug inklusive Gepäck, nicht pro Person.",
    "Bezahlen können Sie bar, per PayPal oder per Überweisung. Für Firmen stellen wir auf Wunsch eine Rechnung aus.",
  ],
};

export const airportPages: AirportPage[] = [
  {
    slug: "frankfurt-hahn",
    airport: "Flughafen Frankfurt-Hahn",
    code: "HHN",
    distanceKm: 150,
    durationText: "ca. 1,5 – 2 Stunden",
    title: "Taxi Frankfurt-Hahn (HHN) | Transfer ab Friedberg & Wetterau",
    description:
      "Flughafentransfer zum Flughafen Frankfurt-Hahn ab Friedberg, Bad Nauheim und der Wetterau. Festpreis, Flugüberwachung, Abholung mit Namensschild.",
    h1: "Flughafentransfer Frankfurt-Hahn (HHN)",
    lead:
      "Der Hunsrück-Flughafen Hahn ist mit öffentlichen Verkehrsmitteln umständlich zu erreichen. Wir fahren Sie in rund zwei Stunden direkt von Ihrer Haustür zum Terminal.",
    highlights: [
      "Direktfahrt ohne Busumstieg",
      "Festpreis auf Anfrage",
      "Auch für frühe Abflüge und Nachtankünfte",
      "Abholung mit Namensschild möglich",
    ],
    sections: [
      {
        h: "Warum ein Transfer zum Hahn sinnvoll ist",
        p: [
          "Zum Flughafen Frankfurt-Hahn gibt es keine Bahnanbindung; die Buslinien fahren selten und erfordern eine Anreise nach Frankfurt oder Mainz. Ein Direkttransfer spart mehrere Stunden Umsteigezeit – gerade bei Billigflügen, die häufig sehr früh oder sehr spät liegen.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt zum Flughafen Hahn?",
        a: "Ab der Wetterau rechnen wir mit rund eineinhalb bis zwei Stunden, abhängig von Startadresse und Verkehr.",
      },
      {
        q: "Was kostet der Transfer?",
        a: "Wir kalkulieren einen Festpreis nach Startadresse, Uhrzeit und Fahrzeuggröße und nennen ihn vor der Buchung.",
      },
      {
        q: "Holen Sie mich auch nachts am Hahn ab?",
        a: "Ja, Abholungen sind rund um die Uhr auf Vorbestellung möglich.",
      },
    ],
  },
  {
    slug: "koeln-bonn",
    airport: "Flughafen Köln/Bonn",
    code: "CGN",
    distanceKm: 200,
    durationText: "ca. 2 – 2,5 Stunden",
    title: "Taxi Flughafen Köln/Bonn (CGN) | Transfer ab der Wetterau",
    description:
      "Transfer zum Flughafen Köln/Bonn ab Friedberg, Bad Nauheim, Butzbach und Frankfurt. Festpreis, Flugüberwachung, 24/7 buchbar.",
    h1: "Flughafentransfer Köln/Bonn (CGN)",
    lead:
      "Rund 200 Kilometer über die A3 – wir bringen Sie ohne Umsteigen zum Terminal 1 oder 2 des Flughafens Köln/Bonn.",
    highlights: [
      "Direkt zum richtigen Terminal",
      "Festpreis inklusive Gepäck",
      "Frühabflüge und Nachtankünfte möglich",
      "Auch als Gruppentransfer im Van",
    ],
    sections: [
      {
        h: "Wann sich der Transfer nach Köln/Bonn lohnt",
        p: [
          "Viele Ferien- und Billigflüge starten ab Köln/Bonn statt ab Frankfurt. Die Bahnanreise erfordert mindestens einen Umstieg und ist mit Gepäck und Kindern mühsam. Ein Direkttransfer bringt Sie ausgeruht und ohne Anschlussrisiko zum Check-in.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Fahren Sie zu Terminal 1 oder Terminal 2?",
        a: "Wir bringen Sie direkt zum Terminal Ihres Abflugs – geben Sie Airline und Flugnummer bei der Buchung an.",
      },
      {
        q: "Wie früh sollte ich starten?",
        a: "Wir planen die Ankunft in der Regel zwei bis drei Stunden vor Abflug, je nach Reiseziel und Airline.",
      },
      {
        q: "Ist ein Van für Gruppen buchbar?",
        a: "Ja, für bis zu acht Personen inklusive Gepäck.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    airport: "Flughafen Düsseldorf",
    code: "DUS",
    distanceKm: 250,
    durationText: "ca. 2,5 – 3 Stunden",
    title: "Taxi Flughafen Düsseldorf (DUS) | Transfer ab Friedberg",
    description:
      "Flughafentransfer nach Düsseldorf ab Friedberg, Bad Nauheim und Frankfurt. Festpreis, Tür zu Tür, Flugüberwachung, rund um die Uhr buchbar.",
    h1: "Flughafentransfer Düsseldorf (DUS)",
    lead:
      "Für Interkontinentalflüge und Ferienflieger ab Düsseldorf fahren wir Sie in rund drei Stunden über die A3 direkt zum Terminal.",
    highlights: [
      "Tür-zu-Tür ohne Umsteigen",
      "Puffer für Rushhour im Ruhrgebiet",
      "Festpreis mit Gepäck",
      "Business-Transfer mit Rechnung",
    ],
    sections: [
      {
        h: "Planbar trotz Ruhrgebietsverkehr",
        p: [
          "Die A3 zwischen Köln und Düsseldorf gehört zu den am stärksten befahrenen Abschnitten Deutschlands. Wir planen entsprechend Puffer ein und beobachten die Verkehrslage vor Abfahrt, damit Ihr Check-in nicht knapp wird.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt nach Düsseldorf?",
        a: "Etwa zweieinhalb bis drei Stunden, abhängig von Uhrzeit und Verkehrslage.",
      },
      {
        q: "Bekomme ich eine Rechnung für die Firma?",
        a: "Ja, auf Wunsch stellen wir eine ordnungsgemäße Rechnung aus.",
      },
      {
        q: "Kann ich sehr früh morgens starten?",
        a: "Ja, Abfahrten mitten in der Nacht sind auf Vorbestellung kein Problem.",
      },
    ],
  },
  {
    slug: "stuttgart",
    airport: "Flughafen Stuttgart",
    code: "STR",
    distanceKm: 220,
    durationText: "ca. 2,5 Stunden",
    title: "Taxi Flughafen Stuttgart (STR) | Transfer ab der Wetterau",
    description:
      "Transfer zum Flughafen Stuttgart ab Friedberg, Bad Nauheim und Frankfurt zum Festpreis. Tür-zu-Tür, Flugüberwachung, 24/7 verfügbar.",
    h1: "Flughafentransfer Stuttgart (STR)",
    lead:
      "Über die A5 und A8 erreichen wir den Flughafen Stuttgart in rund zweieinhalb Stunden – bequem und ohne Umstieg.",
    highlights: [
      "Direkt zum Terminal",
      "Auch zur Messe Stuttgart",
      "Festpreisangebot vorab",
      "Gruppen- und Familienfahrzeuge",
    ],
    sections: [
      {
        h: "Flughafen und Messe in einem",
        p: [
          "Die Landesmesse Stuttgart liegt direkt am Flughafen. Wir fahren Sie zu beidem – ob für einen Abflug, einen Messetag oder eine Kombination aus beidem mit Wartezeit vor Ort.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Fahren Sie auch zur Messe Stuttgart?",
        a: "Ja, die Landesmesse liegt direkt neben dem Flughafen und wird von uns ebenfalls angefahren.",
      },
      {
        q: "Was kostet der Transfer?",
        a: "Sie erhalten vor der Buchung ein verbindliches Festpreisangebot.",
      },
      {
        q: "Wie viele Koffer passen ins Fahrzeug?",
        a: "In der Limousine drei bis vier große Koffer, im Van deutlich mehr.",
      },
    ],
  },
  {
    slug: "muenchen",
    airport: "Flughafen München",
    code: "MUC",
    distanceKm: 400,
    durationText: "ca. 4 Stunden",
    title: "Taxi Flughafen München (MUC) | Transfer ab Friedberg",
    description:
      "Flughafentransfer nach München ab Friedberg, Bad Nauheim und Frankfurt. Festpreis, Direktfahrt Tür zu Tür, Flugüberwachung inklusive.",
    h1: "Flughafentransfer München (MUC)",
    lead:
      "Rund vier Stunden über die A3 und A9 – wir bringen Sie direkt zu Terminal 1 oder 2 am Flughafen München Franz Josef Strauß.",
    highlights: [
      "Direktfahrt ohne Bahnumstieg",
      "Auch für Umsteigeverbindungen ab MUC",
      "Nachtfahrten möglich",
      "Festpreis inklusive Maut und Gepäck",
    ],
    sections: [
      {
        h: "Wenn der Flug ab München startet",
        p: [
          "Manche Langstrecken und Ferienflüge starten nur ab München. Statt Bahnfahrt plus S-Bahn plus Gepäckhandling fahren wir Sie direkt zum Terminal – auch nachts, damit Sie den frühen Abflug sicher erreichen.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt nach München?",
        a: "Etwa vier Stunden reine Fahrzeit ab der Wetterau.",
      },
      {
        q: "Fahren Sie zu Terminal 1 oder 2?",
        a: "Wir fahren das Terminal Ihres Abflugs an – bitte Airline und Flugnummer angeben.",
      },
      {
        q: "Ist auch die Abholung möglich?",
        a: "Ja, inklusive Flugüberwachung und Abholung mit Namensschild in der Ankunftshalle.",
      },
    ],
  },
  {
    slug: "nuernberg",
    airport: "Flughafen Nürnberg",
    code: "NUE",
    distanceKm: 230,
    durationText: "ca. 2,5 Stunden",
    title: "Taxi Flughafen Nürnberg (NUE) | Transfer ab der Wetterau",
    description:
      "Transfer zum Flughafen Nürnberg ab Friedberg, Bad Nauheim, Butzbach und Frankfurt. Festpreis, Tür zu Tür, jederzeit buchbar.",
    h1: "Flughafentransfer Nürnberg (NUE)",
    lead:
      "Über die A3 erreichen wir den Albrecht-Dürer-Flughafen Nürnberg in rund zweieinhalb Stunden – ideal für Ferienflüge und Geschäftstermine in Franken.",
    highlights: [
      "Direktfahrt über die A3",
      "Auch zur Messe Nürnberg",
      "Festpreis vorab",
      "Rückholung mit Flugüberwachung",
    ],
    sections: [
      {
        h: "Ferienflüge und Messetermine in Franken",
        p: [
          "Ab Nürnberg starten viele Ferienflieger, und die Messe Nürnberg zieht ganzjährig Fachbesucher an. Wir kombinieren beides gerne: Hinfahrt zum Termin, Wartezeit und Rückfahrt am selben Tag.",
        ],
      },
      fixedPrice,
      meetGreet,
    ],
    faqs: [
      {
        q: "Was kostet der Transfer nach Nürnberg?",
        a: "Der Festpreis richtet sich nach Startadresse und Fahrzeug und wird vor der Buchung genannt.",
      },
      {
        q: "Fahren Sie auch zur Messe Nürnberg?",
        a: "Ja, Messe- und Kongresstransfers gehören zu unserem Angebot.",
      },
      {
        q: "Ist eine Tagesfahrt mit Rückfahrt möglich?",
        a: "Ja, inklusive planbarer Wartezeit vor Ort.",
      },
    ],
  },
];

export const getAirport = (slug?: string) => airportPages.find((a) => a.slug === slug);
