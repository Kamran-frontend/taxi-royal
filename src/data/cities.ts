import type { ContentSection, Faq } from "./types";

export interface CityPage {
  slug: string;
  city: string;
  postalCode: string;
  airportPrice: number;
  title: string;
  description: string;
  h1: string;
  lead: string;
  districts: string[];
  landmarks: string[];
  sections: ContentSection[];
  faqs: Faq[];
}

const localServices = (city: string): ContentSection => ({
  h: `Unsere Leistungen in ${city}`,
  p: [
    `Von der kurzen Stadtfahrt bis zur Fernfahrt quer durch Europa: In ${city} übernehmen wir Flughafentransfers nach Frankfurt, Krankenfahrten zu Arzt-, Dialyse- und Reha-Terminen, Rollstuhltaxi-Fahrten mit Rampe, Schul- und Kindergartenfahrten, Einkaufs- und Behördenfahrten sowie Kurier- und Botenfahrten.`,
  ],
  list: [
    "Flughafentransfer Frankfurt zum Festpreis",
    "Krankenfahrten und Dialysefahrten (Rezept möglich)",
    "Rollstuhlgerechtes Fahrzeug mit Rampe",
    "Schul- und Kindergartenfahrten mit Kindersitz",
    "Fernfahrten deutschland- und europaweit",
    "Kurier- und Botenfahrten",
  ],
});

const bookingSection = (city: string): ContentSection => ({
  h: `Taxi in ${city} bestellen – so geht's`,
  p: [
    `Am schnellsten erreichen Sie uns telefonisch unter 0171 1670001. Alternativ schreiben Sie uns per WhatsApp – das ist besonders praktisch, wenn Sie Ihre Adresse als Standort teilen möchten – oder nutzen Sie unser Online-Buchungsformular für Vorbestellungen.`,
    `Vorbestellungen sind jederzeit möglich, auch außerhalb unserer Kernzeiten. Für frühe Flüge oder wichtige Termine empfehlen wir eine Vorbestellung am Vortag: Dann steht das Fahrzeug garantiert bereit, auch um vier Uhr morgens.`,
  ],
});

export const cityPages: CityPage[] = [
  {
    slug: "friedberg",
    city: "Friedberg",
    postalCode: "61169",
    airportPrice: 67,
    title: "Taxi Friedberg (Hessen) | MiniTAXI Royal – 24/7 bestellen",
    description:
      "Taxi in Friedberg (Hessen): Flughafentransfer ab 67 €, Krankenfahrten, Rollstuhltaxi, Fernfahrten. Jetzt per Telefon oder WhatsApp bestellen: 0171 1670001.",
    h1: "Taxi Friedberg (Hessen) – zuverlässig zu jeder Tageszeit",
    lead:
      "MiniTAXI Royal ist Ihr Taxi- und Mietwagenunternehmen mitten in Friedberg. Von der Kaiserstraße bis Dorheim, Ockstadt oder Fauerbach holen wir Sie ab – meist innerhalb weniger Minuten.",
    districts: ["Friedberg-Mitte", "Dorheim", "Ockstadt", "Fauerbach", "Bruchenbrücken", "Bauernheim"],
    landmarks: [
      "Bahnhof Friedberg",
      "Burg Friedberg",
      "Bürgerhospital Friedberg",
      "Kaiserstraße",
      "Technische Hochschule Mittelhessen",
      "Usa-Wellenbad",
    ],
    sections: [
      {
        h: "Ihr Taxi in Friedberg – ortskundig und schnell",
        p: [
          "Friedberg ist unser Heimatstandort: Unser Firmensitz liegt im Mühlweg 52. Deshalb kennen wir jede Einbahnstraße, jede Zufahrt zum Bahnhof und jeden Klinikeingang – und sind meist innerhalb weniger Minuten bei Ihnen.",
          "Ob Sie morgens zum Bahnhof müssen, abends aus der Kaiserstraße nach Hause wollen oder einen Termin im Bürgerhospital haben: Wir fahren pünktlich vor, helfen beim Gepäck und bringen Sie sicher ans Ziel.",
        ],
      },
      localServices("Friedberg"),
      {
        h: "Flughafentransfer ab Friedberg zum Festpreis",
        p: [
          "Von Friedberg zum Flughafen Frankfurt berechnen wir einen Festpreis von 67 € – unabhängig von Verkehrslage und Wartezeit im Stau. Der Preis gilt für das Fahrzeug, nicht pro Person, und schließt Gepäck ein.",
          "Wir überwachen Ihre Flugnummer bei Abholungen und passen die Ankunftszeit an Verspätungen an, damit niemand unnötig wartet.",
        ],
      },
      bookingSection("Friedberg"),
    ],
    faqs: [
      {
        q: "Wie schnell ist ein Taxi in Friedberg bei mir?",
        a: "Im Stadtgebiet Friedberg sind wir in der Regel innerhalb weniger Minuten bei Ihnen. Rufen Sie an unter 0171 1670001 – wir nennen Ihnen sofort die voraussichtliche Ankunftszeit.",
      },
      {
        q: "Was kostet das Taxi von Friedberg zum Flughafen Frankfurt?",
        a: "Der Festpreis beträgt 67 € für das gesamte Fahrzeug inklusive Gepäck.",
      },
      {
        q: "Fahren Sie auch nachts in Friedberg?",
        a: "Montag bis Freitag sind wir von 07:00 bis 01:00 Uhr im Einsatz, samstags und sonntags rund um die Uhr. Vorbestellungen sind jederzeit möglich, auch für Nachtfahrten unter der Woche.",
      },
      {
        q: "Kann ich mit Karte bezahlen?",
        a: "Wir akzeptieren Bargeld, PayPal und Überweisung. Kartenzahlung bieten wir derzeit nicht an.",
      },
    ],
  },
  {
    slug: "bad-nauheim",
    city: "Bad Nauheim",
    postalCode: "61231",
    airportPrice: 69,
    title: "Taxi Bad Nauheim | Kur-, Klinik- & Flughafenfahrten",
    description:
      "Taxi Bad Nauheim: Flughafentransfer Frankfurt ab 69 €, Kur- und Klinikfahrten, Rollstuhltaxi, Krankenfahrten. Jetzt bestellen unter 0171 1670001.",
    h1: "Taxi Bad Nauheim – Kurstadt, Kliniken und Flughafen",
    lead:
      "Als Kur- und Klinikstadt hat Bad Nauheim besondere Anforderungen an einen Taxidienst. Wir fahren Patienten, Kurgäste und Berufspendler zuverlässig – vom Sprudelhof bis zur Kerckhoff-Klinik.",
    districts: ["Bad Nauheim-Mitte", "Nieder-Mörlen", "Schwalheim", "Rödgen", "Steinfurth", "Wisselsheim"],
    landmarks: [
      "Kerckhoff-Klinik",
      "Hochwaldkrankenhaus",
      "Sprudelhof",
      "Bahnhof Bad Nauheim",
      "Therme Bad Nauheim",
      "Kurpark",
    ],
    sections: [
      {
        h: "Klinik- und Kurfahrten in Bad Nauheim",
        p: [
          "Bad Nauheim ist geprägt von Kliniken und Reha-Einrichtungen. Wir fahren täglich Patientinnen und Patienten zur Kerckhoff-Klinik, zum Hochwaldkrankenhaus und zu Rehazentren – pünktlich zum Termin, mit Hilfe beim Ein- und Aussteigen und auf Wunsch mit Begleitung bis zur Anmeldung.",
          "Für regelmäßige Behandlungen wie Dialyse, Chemotherapie oder Physiotherapie richten wir feste Fahrpläne ein: gleicher Fahrer, gleiche Uhrzeit, kein neues Erklären.",
        ],
      },
      localServices("Bad Nauheim"),
      {
        h: "Flughafentransfer ab Bad Nauheim",
        p: [
          "Von Bad Nauheim zum Flughafen Frankfurt fahren wir zum Festpreis von 69 €. Kurgäste, die anreisen, holen wir auf Wunsch direkt am Terminal mit Namensschild ab und bringen sie bis zur Klinik oder zum Hotel.",
        ],
      },
      bookingSection("Bad Nauheim"),
    ],
    faqs: [
      {
        q: "Fahren Sie zur Kerckhoff-Klinik?",
        a: "Ja, wir fahren alle Kliniken und Reha-Einrichtungen in Bad Nauheim an, darunter die Kerckhoff-Klinik und das Hochwaldkrankenhaus.",
      },
      {
        q: "Was kostet der Flughafentransfer ab Bad Nauheim?",
        a: "Zum Flughafen Frankfurt gilt ein Festpreis von 69 € pro Fahrzeug.",
      },
      {
        q: "Übernehmen Sie Krankenfahrten mit Verordnung?",
        a: "Ja. Bringen Sie die ärztliche Verordnung mit; wir beraten Sie zum Ablauf mit Ihrer Krankenkasse.",
      },
      {
        q: "Gibt es ein rollstuhlgerechtes Fahrzeug?",
        a: "Ja, wir setzen ein Fahrzeug mit Rampe ein. Bitte geben Sie den Bedarf bei der Bestellung an.",
      },
    ],
  },
  {
    slug: "butzbach",
    city: "Butzbach",
    postalCode: "35510",
    airportPrice: 95,
    title: "Taxi Butzbach | Flughafentransfer, Krankenfahrten & mehr",
    description:
      "Taxi Butzbach: Festpreis zum Flughafen Frankfurt 95 €, Krankenfahrten, Rollstuhltaxi, Fernfahrten. Bestellung per Telefon oder WhatsApp.",
    h1: "Taxi Butzbach – zuverlässig in der Wetterau unterwegs",
    lead:
      "Ob Bahnhof, Klinik oder Flughafen: Wir fahren Sie ab Butzbach und den Stadtteilen sicher und pünktlich zum Ziel – auch als Vorbestellung für frühe Termine.",
    districts: ["Butzbach-Mitte", "Griedel", "Nieder-Weisel", "Ostheim", "Hoch-Weisel", "Kirch-Göns"],
    landmarks: [
      "Bahnhof Butzbach",
      "Marktplatz Butzbach",
      "Bürgerhaus Butzbach",
      "Schrenzerbad",
      "Gewerbegebiet Butzbach-Ost",
    ],
    sections: [
      {
        h: "Taxi und Mietwagen für Butzbach und Umgebung",
        p: [
          "Butzbach liegt am nördlichen Rand unseres Kerngebiets. Damit Sie nicht auf ein zufällig freies Fahrzeug angewiesen sind, empfehlen wir für Butzbacher Fahrten die Vorbestellung – dann ist der Wagen garantiert zur gewünschten Zeit vor Ort.",
          "Besonders häufig fahren wir Pendler zum Bahnhof, Patienten zu Facharztterminen in Gießen und Bad Nauheim sowie Reisende zum Flughafen Frankfurt.",
        ],
      },
      localServices("Butzbach"),
      {
        h: "Festpreis zum Flughafen Frankfurt",
        p: [
          "Ab Butzbach berechnen wir 95 € zum Flughafen Frankfurt. Der Preis ist verbindlich – auch wenn es auf der A5 einmal stockt.",
        ],
      },
      bookingSection("Butzbach"),
    ],
    faqs: [
      {
        q: "Fahren Sie auch die Butzbacher Stadtteile an?",
        a: "Ja, wir fahren unter anderem Griedel, Nieder-Weisel, Ostheim, Hoch-Weisel und Kirch-Göns an.",
      },
      {
        q: "Sollte ich in Butzbach vorbestellen?",
        a: "Ja, für Butzbach empfehlen wir eine Vorbestellung, damit das Fahrzeug garantiert zur gewünschten Zeit bereitsteht.",
      },
      {
        q: "Was kostet die Fahrt zum Flughafen Frankfurt?",
        a: "Der Festpreis ab Butzbach beträgt 95 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie auch nach Gießen?",
        a: "Ja, Fahrten nach Gießen, Wetzlar und Marburg – etwa zu Kliniken – gehören zu unserem Alltag.",
      },
    ],
  },
  {
    slug: "karben",
    city: "Karben",
    postalCode: "61184",
    airportPrice: 75,
    title: "Taxi Karben | Flughafentransfer ab 75 € & Krankenfahrten",
    description:
      "Taxi Karben: Festpreis zum Flughafen Frankfurt 75 €, Krankenfahrten, Rollstuhltaxi, Schul- und Pendlerfahrten. Jetzt buchen: 0171 1670001.",
    h1: "Taxi Karben – schnell zum Bahnhof, zur Klinik und zum Flughafen",
    lead:
      "Karben liegt verkehrsgünstig zwischen Frankfurt und der Wetterau. Wir fahren Sie ab Groß-Karben, Klein-Karben, Okarben, Petterweil, Burg-Gräfenrode und Rendel.",
    districts: ["Groß-Karben", "Klein-Karben", "Okarben", "Petterweil", "Burg-Gräfenrode", "Rendel"],
    landmarks: ["Bahnhof Groß-Karben", "Bahnhof Okarben", "Degussa-Park", "Kurt-Moosdorf-Halle"],
    sections: [
      {
        h: "Pendler, Familien und Patienten in Karben",
        p: [
          "Viele Karbener pendeln nach Frankfurt. Wenn die S-Bahn ausfällt oder der Termin zu früh liegt, sind wir die zuverlässige Alternative – auch spontan und auch für die Rückfahrt nach einem langen Arbeitstag.",
          "Familien nutzen uns für Schul- und Vereinsfahrten, Patienten für Termine in Frankfurter Kliniken und Praxen in Bad Vilbel oder Friedberg.",
        ],
      },
      localServices("Karben"),
      {
        h: "Flughafentransfer ab Karben",
        p: [
          "Zum Flughafen Frankfurt gilt ab Karben ein Festpreis von 75 €. Für frühe Abflüge holen wir Sie auch um drei oder vier Uhr morgens ab – bitte am Vortag vorbestellen.",
        ],
      },
      bookingSection("Karben"),
    ],
    faqs: [
      {
        q: "Was kostet ein Taxi von Karben zum Flughafen?",
        a: "Der Festpreis zum Flughafen Frankfurt beträgt 75 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie auch nach Frankfurt-Innenstadt?",
        a: "Ja, Fahrten nach Frankfurt sind jederzeit buchbar – auf Wunsch auch mit Wartezeit und Rückfahrt.",
      },
      {
        q: "Bieten Sie Schulfahrten an?",
        a: "Ja, wir übernehmen regelmäßige Schul- und Kindergartenfahrten mit passenden Kindersitzen.",
      },
      {
        q: "Wie weit im Voraus muss ich buchen?",
        a: "Spontane Fahrten sind oft möglich; für frühe Morgenfahrten und Flughafentransfers empfehlen wir die Vorbestellung am Vortag.",
      },
    ],
  },
  {
    slug: "rosbach",
    city: "Rosbach v. d. Höhe",
    postalCode: "61191",
    airportPrice: 63,
    title: "Taxi Rosbach v. d. Höhe | Flughafentransfer ab 63 €",
    description:
      "Taxi Rosbach vor der Höhe: Flughafentransfer Frankfurt ab 63 €, Krankenfahrten, Rollstuhltaxi und Fernfahrten. Bestellen unter 0171 1670001.",
    h1: "Taxi Rosbach vor der Höhe – günstig zum Flughafen Frankfurt",
    lead:
      "Rosbach liegt besonders günstig zur A5. Deshalb ist unser Flughafenfestpreis hier mit 63 € einer der niedrigsten in der Region.",
    districts: ["Nieder-Rosbach", "Ober-Rosbach", "Rodheim v. d. Höhe"],
    landmarks: ["Bahnhof Rosbach", "Römerkastell Kapersburg", "Adolf-Reichwein-Schule"],
    sections: [
      {
        h: "Kurze Wege, faire Preise",
        p: [
          "Durch die Nähe zur Autobahnauffahrt Friedberg/Ober-Mörlen erreichen wir von Rosbach aus den Flughafen Frankfurt besonders schnell. Das geben wir über einen niedrigen Festpreis weiter.",
          "Wir fahren alle Ortsteile an: Nieder-Rosbach, Ober-Rosbach und Rodheim vor der Höhe.",
        ],
      },
      localServices("Rosbach"),
      {
        h: "Regelmäßige Fahrten und Abos",
        p: [
          "Für Pendler und Patienten mit wiederkehrenden Terminen richten wir feste Fahrten ein – etwa dreimal wöchentlich zur Dialyse oder täglich zum Bahnhof.",
        ],
      },
      bookingSection("Rosbach"),
    ],
    faqs: [
      {
        q: "Was kostet der Flughafentransfer ab Rosbach?",
        a: "Der Festpreis zum Flughafen Frankfurt beträgt 63 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie auch Rodheim vor der Höhe an?",
        a: "Ja, alle Rosbacher Ortsteile werden angefahren.",
      },
      {
        q: "Sind regelmäßige Fahrten möglich?",
        a: "Ja, wir richten feste Termine für Pendler, Schüler und Patienten ein.",
      },
      {
        q: "Wie bestelle ich am schnellsten?",
        a: "Telefonisch unter 0171 1670001 oder per WhatsApp – dort können Sie Ihren Standort direkt teilen.",
      },
    ],
  },
  {
    slug: "woellstadt",
    city: "Wöllstadt",
    postalCode: "61206",
    airportPrice: 69,
    title: "Taxi Wöllstadt | Flughafentransfer & Krankenfahrten",
    description:
      "Taxi Wöllstadt (Nieder- und Ober-Wöllstadt): Flughafentransfer Frankfurt 69 €, Krankenfahrten, Rollstuhltaxi. Jetzt bestellen: 0171 1670001.",
    h1: "Taxi Wöllstadt – für Nieder- und Ober-Wöllstadt",
    lead:
      "Wir fahren beide Ortsteile Wöllstadts zuverlässig an – zum Bahnhof, zur Arbeit, zum Arzt oder zum Flughafen Frankfurt zum Festpreis von 69 €.",
    districts: ["Nieder-Wöllstadt", "Ober-Wöllstadt"],
    landmarks: ["Bahnhof Nieder-Wöllstadt", "Bürgerhaus Wöllstadt"],
    sections: [
      {
        h: "Zuverlässig in Wöllstadt unterwegs",
        p: [
          "Wöllstadt ist über die Main-Weser-Bahn gut angebunden – aber nicht zu jeder Tageszeit. Für frühe Flüge, späte Rückfahrten oder Termine abseits der Bahnlinie sind wir die verlässliche Alternative.",
          "Wir holen Sie an der Haustür ab, helfen beim Gepäck und bringen Sie ohne Umstieg ans Ziel.",
        ],
      },
      localServices("Wöllstadt"),
      bookingSection("Wöllstadt"),
    ],
    faqs: [
      {
        q: "Was kostet die Fahrt von Wöllstadt zum Flughafen Frankfurt?",
        a: "Der Festpreis beträgt 69 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie zum Bahnhof Nieder-Wöllstadt?",
        a: "Ja, Bahnhofsfahrten gehören zu unseren häufigsten Aufträgen – auch früh morgens auf Vorbestellung.",
      },
      {
        q: "Sind Krankenfahrten möglich?",
        a: "Ja, wir übernehmen Fahrten zu Ärzten, Kliniken, Dialyse und Reha, auf Wunsch mit Begleitung bis zur Anmeldung.",
      },
      {
        q: "Wie buche ich eine Vorbestellung?",
        a: "Telefonisch, per WhatsApp oder über unser Buchungsformular auf der Startseite.",
      },
    ],
  },
  {
    slug: "niddatal",
    city: "Niddatal",
    postalCode: "61194",
    airportPrice: 78,
    title: "Taxi Niddatal | Flughafentransfer ab 78 € & Krankenfahrten",
    description:
      "Taxi Niddatal (Assenheim, Ilbenstadt, Bönstadt, Kaichen): Flughafentransfer Frankfurt 78 €, Krankenfahrten, Rollstuhltaxi. Tel. 0171 1670001.",
    h1: "Taxi Niddatal – Assenheim, Ilbenstadt, Bönstadt und Kaichen",
    lead:
      "Wir bedienen alle Niddataler Ortsteile mit Stadtfahrten, Krankenfahrten und Flughafentransfers zum Festpreis.",
    districts: ["Assenheim", "Ilbenstadt", "Bönstadt", "Kaichen"],
    landmarks: ["Bahnhof Assenheim", "Kloster Ilbenstadt", "Nidda-Auen"],
    sections: [
      {
        h: "Alle Ortsteile zuverlässig angebunden",
        p: [
          "In ländlicheren Ortsteilen wie Bönstadt oder Kaichen ist der ÖPNV abends dünn getaktet. Wir schließen diese Lücke – auch für Heimfahrten nach Veranstaltungen oder Schichtende.",
          "Für Feiern und Vereinsabende fahren wir auf Wunsch mehrere Gäste nacheinander nach Hause; ein Van mit acht Plätzen ist ebenfalls buchbar.",
        ],
      },
      localServices("Niddatal"),
      bookingSection("Niddatal"),
    ],
    faqs: [
      {
        q: "Was kostet der Flughafentransfer ab Niddatal?",
        a: "Zum Flughafen Frankfurt gilt ein Festpreis von 78 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie auch spätabends?",
        a: "Montag bis Freitag bis 01:00 Uhr, am Wochenende rund um die Uhr. Vorbestellungen sind immer möglich.",
      },
      {
        q: "Können mehrere Personen zusammen fahren?",
        a: "Ja, für Gruppen setzen wir einen Van mit bis zu acht Sitzplätzen ein.",
      },
      {
        q: "Gibt es Kindersitze?",
        a: "Ja, Kindersitze stellen wir kostenlos bereit – bitte bei der Bestellung angeben.",
      },
    ],
  },
  {
    slug: "florstadt",
    city: "Florstadt",
    postalCode: "61197",
    airportPrice: 89,
    title: "Taxi Florstadt | Flughafentransfer & Krankenfahrten Wetterau",
    description:
      "Taxi Florstadt: Flughafentransfer Frankfurt 89 €, Krankenfahrten, Dialysefahrten, Rollstuhltaxi und Fernfahrten. Jetzt bestellen: 0171 1670001.",
    h1: "Taxi Florstadt – verlässlich in der östlichen Wetterau",
    lead:
      "Von Nieder-Florstadt bis Staden fahren wir Sie zu Arztterminen, zum Bahnhof, zum Flughafen oder auf die lange Strecke.",
    districts: ["Nieder-Florstadt", "Ober-Florstadt", "Stammheim", "Staden", "Leidhecken"],
    landmarks: ["Bahnhof Nidderau-Richtung", "Bürgerhaus Nieder-Florstadt", "Nidda-Radweg"],
    sections: [
      {
        h: "Taxi für die östliche Wetterau",
        p: [
          "Florstadt liegt außerhalb der dichten Bahnanbindung. Gerade deshalb sind planbare Vorbestellungen hier wichtig: Wir garantieren die Abholzeit und kalkulieren Fahrten zum Flughafen zum Festpreis.",
          "Häufige Ziele sind Kliniken in Friedberg, Bad Nauheim und Frankfurt, der Bahnhof Friedberg sowie der Flughafen Frankfurt.",
        ],
      },
      localServices("Florstadt"),
      bookingSection("Florstadt"),
    ],
    faqs: [
      {
        q: "Was kostet die Fahrt zum Flughafen Frankfurt?",
        a: "Ab Florstadt gilt ein Festpreis von 89 € pro Fahrzeug.",
      },
      {
        q: "Fahren Sie regelmäßig zur Dialyse?",
        a: "Ja, wir übernehmen wiederkehrende Dialysefahrten mit festen Terminen und möglichst gleichbleibendem Fahrer.",
      },
      {
        q: "Werden alle Ortsteile bedient?",
        a: "Ja, wir fahren Nieder- und Ober-Florstadt, Stammheim, Staden und Leidhecken an.",
      },
      {
        q: "Wie weit im Voraus sollte ich buchen?",
        a: "Für Florstadt empfehlen wir eine Vorbestellung, idealerweise am Vortag.",
      },
    ],
  },
];

export const getCity = (slug?: string) => cityPages.find((c) => c.slug === slug);
