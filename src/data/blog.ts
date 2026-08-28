import type { ContentSection } from "./types";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string; // ISO date of publication
  readingTime: string;
  category: string;
  lead: string;
  sections: ContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wie-frueh-zum-flughafen-frankfurt",
    title: "Wie früh sollte man zum Flughafen Frankfurt aufbrechen?",
    metaTitle: "Wie früh zum Flughafen Frankfurt? Zeitplan aus der Wetterau",
    description:
      "Wie viel Vorlauf brauchen Sie ab Friedberg, Bad Nauheim oder Butzbach zum Flughafen Frankfurt? Praxiswerte für Fahrzeit, Check-in und Sicherheitskontrolle.",
    date: "2026-01-15",
    readingTime: "5 Min.",
    category: "Flughafentransfer",
    lead:
      "Zu spät ist teuer, zu früh ist verlorene Zeit. Diese Faustregeln nutzen wir selbst, wenn wir Fahrgäste aus der Wetterau zum Frankfurter Flughafen bringen.",
    sections: [
      {
        h: "Die Grundrechnung: Fahrzeit plus Flughafenzeit",
        p: [
          "Rechnen Sie in zwei Blöcken. Block eins ist die Fahrzeit: Ab Friedberg oder Bad Nauheim sind es je nach Tageszeit 35 bis 55 Minuten, ab Butzbach eher 45 bis 65 Minuten. Block zwei ist die Zeit am Flughafen selbst.",
          "Für innereuropäische Flüge planen wir zwei Stunden vor Abflug am Terminal, für Interkontinentalflüge drei Stunden. Wer nur mit Handgepäck reist und online eingecheckt hat, kann bei Europaflügen auf 90 Minuten reduzieren – aber nur, wenn keine Ferienzeit ist.",
        ],
      },
      {
        h: "Stoßzeiten auf der A5 und am Terminal",
        p: [
          "Zwischen 06:30 und 08:30 Uhr sowie zwischen 16:00 und 18:30 Uhr staut es sich auf der A5 regelmäßig zwischen Friedberg und dem Nordwestkreuz. In diesen Fenstern kalkulieren wir 20 bis 30 Minuten Puffer zusätzlich.",
          "Auch am Terminal gibt es Wellen: Frühmorgens zwischen 05:00 und 07:00 Uhr sind die Sicherheitskontrollen am stärksten ausgelastet, ebenso freitags und sonntags nachmittags.",
        ],
      },
      {
        h: "Beispielzeitpläne",
        p: [
          "Flug um 06:20 Uhr ab Terminal 1, Abfahrt in Friedberg: 03:45 Uhr. Flug um 11:00 Uhr nach New York, Abfahrt in Bad Nauheim: 07:15 Uhr. Flug um 19:30 Uhr innereuropäisch, Abfahrt in Butzbach: 16:00 Uhr.",
        ],
        list: [
          "Innereuropäisch ohne Aufgabegepäck: 2 Stunden vor Abflug am Terminal",
          "Innereuropäisch mit Koffer: 2,5 Stunden",
          "Interkontinental: 3 Stunden",
          "Ferienzeit und Feiertage: 30 Minuten Zuschlag",
        ],
      },
      {
        h: "Warum ein vorbestellter Transfer den Puffer verkleinert",
        p: [
          "Wer selbst fährt, braucht zusätzlich Zeit für Parkhaussuche, Shuttle und Fußweg zum Terminal – realistisch 20 bis 30 Minuten. Ein Transfer setzt Sie direkt an der Terminaltür ab, sodass Sie diesen Block einsparen und dennoch pünktlich am Check-in stehen.",
        ],
      },
    ],
  },
  {
    slug: "krankenfahrt-kosten-krankenkasse",
    title: "Krankenfahrt mit dem Taxi: Wann zahlt die Krankenkasse?",
    metaTitle: "Krankenfahrt Taxi: Wann zahlt die Krankenkasse? | Ratgeber",
    description:
      "Verordnung, Genehmigung, Zuzahlung: So funktioniert die Abrechnung von Krankenfahrten mit dem Taxi in Hessen – verständlich erklärt.",
    date: "2026-01-20",
    readingTime: "6 Min.",
    category: "Krankenfahrten",
    lead:
      "Viele Fahrgäste wissen nicht, dass Fahrten zu Dialyse, Chemotherapie oder Reha häufig von der Krankenkasse übernommen werden. Hier die wichtigsten Punkte im Überblick.",
    sections: [
      {
        h: "Die Verordnung ist der Ausgangspunkt",
        p: [
          "Grundlage jeder Krankenfahrt ist die ärztliche Verordnung einer Krankenbeförderung (früher „Transportschein“). Darauf vermerkt die Praxis den Grund der Fahrt, das Ziel und ob es sich um eine einmalige oder wiederkehrende Fahrt handelt.",
          "Lassen Sie sich die Verordnung möglichst vor der ersten Fahrt ausstellen. Nachträgliche Ausstellungen sind mühsam und werden nicht immer akzeptiert.",
        ],
      },
      {
        h: "Wann eine Genehmigung nötig ist",
        p: [
          "Fahrten zu stationären Behandlungen sind in der Regel genehmigungsfrei. Fahrten zu ambulanten Behandlungen brauchen dagegen meist eine vorherige Genehmigung der Krankenkasse – ausgenommen sind bestimmte Dauerbehandlungen wie Dialyse, Strahlentherapie oder onkologische Chemotherapie, die als genehmigt gelten.",
          "Auch Menschen mit Merkzeichen aG, Bl oder H oder mit Pflegegrad 3 bis 5 haben unter bestimmten Voraussetzungen Anspruch, ohne dass jede Fahrt einzeln geprüft wird.",
        ],
      },
      {
        h: "Zuzahlung und Eigenanteil",
        p: [
          "Versicherte ab 18 Jahren zahlen üblicherweise zehn Prozent der Fahrtkosten, mindestens fünf und höchstens zehn Euro je Fahrt – aber nie mehr als die tatsächlichen Kosten. Wer die jährliche Belastungsgrenze überschritten hat, kann sich befreien lassen.",
        ],
      },
      {
        h: "So läuft eine Krankenfahrt bei uns ab",
        p: [
          "Sie melden Termin, Adresse und besondere Bedarfe (Rollstuhl, Gehhilfe, Begleitperson) an. Wir holen Sie pünktlich ab, helfen beim Ein- und Aussteigen und begleiten Sie auf Wunsch bis zur Anmeldung. Nach der Behandlung holen wir Sie wieder ab – bei planbaren Terminen zur vereinbarten Zeit, sonst auf Anruf.",
          "Bei wiederkehrenden Fahrten richten wir feste Zeiten ein und setzen möglichst denselben Fahrer ein, damit Sie nichts jedes Mal neu erklären müssen.",
        ],
      },
    ],
  },
  {
    slug: "taxi-oder-mietwagen-unterschied",
    title: "Taxi oder Mietwagen mit Fahrer – was ist der Unterschied?",
    metaTitle: "Taxi oder Mietwagen mit Fahrer? Unterschiede einfach erklärt",
    description:
      "Taxameter, Rückkehrpflicht, Festpreis: Was Taxi und Mietwagen mit Fahrer unterscheidet und wann welche Variante für Sie günstiger ist.",
    date: "2026-01-28",
    readingTime: "4 Min.",
    category: "Ratgeber",
    lead:
      "Beide bringen Sie ans Ziel, unterliegen aber unterschiedlichen Regeln. Der Unterschied wirkt sich vor allem auf Preisbildung und Buchung aus.",
    sections: [
      {
        h: "Das Taxi: Betriebspflicht und Tarif",
        p: [
          "Taxis dürfen an Halteplätzen bereitstehen, auf der Straße herangewinkt werden und rechnen im Pflichtfahrgebiet nach behördlich festgelegtem Tarif per Taxameter ab. Dafür gelten Betriebs-, Beförderungs- und Tarifpflicht.",
        ],
      },
      {
        h: "Der Mietwagen mit Fahrer: Bestellung und freier Preis",
        p: [
          "Mietwagen mit Fahrer dürfen nur auf vorherige Bestellung fahren und müssen nach dem Auftrag zum Betriebssitz zurückkehren, sofern kein neuer Auftrag vorliegt. Dafür ist der Preis frei vereinbar – deshalb sind hier klare Festpreise etwa für Flughafentransfers möglich.",
        ],
      },
      {
        h: "Was heißt das für Sie als Fahrgast?",
        p: [
          "Wenn Sie Planungssicherheit wollen, ist die Vorabbestellung mit Festpreis meist die bessere Wahl: Sie kennen den Preis vor der Fahrt, unabhängig von Stau oder Umleitung. Wenn Sie spontan an einem Halteplatz einsteigen, gilt der Taxitarif.",
        ],
        list: [
          "Planbare Fahrt, feste Uhrzeit, bekanntes Ziel → vorbestellen mit Festpreis",
          "Spontan, kurze Strecke → Taxi heranwinken oder anrufen",
          "Lange Strecke oder Flughafen → immer Festpreis anfragen",
        ],
      },
    ],
  },
  {
    slug: "flughafentransfer-fuer-familien",
    title: "Mit Kindern zum Flughafen: Checkliste für stressfreie Anreise",
    metaTitle: "Mit Kindern zum Flughafen Frankfurt: Checkliste & Tipps",
    description:
      "Kindersitze, Gepäck, Pausen und Timing: So planen Familien aus der Wetterau die Anreise zum Flughafen Frankfurt ohne Stress.",
    date: "2026-02-04",
    readingTime: "5 Min.",
    category: "Familie",
    lead:
      "Mit Kindern verschiebt sich jede Zeitplanung. Wer Puffer, Sitzplätze und Gepäck vorher durchdenkt, startet deutlich entspannter in den Urlaub.",
    sections: [
      {
        h: "Kindersitze rechtzeitig anmelden",
        p: [
          "Kinder unter zwölf Jahren und kleiner als 150 cm brauchen im Pkw eine geeignete Rückhalteeinrichtung. Wir stellen Kindersitze und Sitzerhöhungen kostenlos bereit – wichtig ist nur, dass Sie Alter und Anzahl der Kinder bei der Buchung angeben, damit wir das passende Fahrzeug schicken.",
        ],
      },
      {
        h: "Gepäck realistisch kalkulieren",
        p: [
          "Kinderwagen, Reisebett und Autositze verbrauchen mehr Kofferraum als gedacht. Für eine vierköpfige Familie mit vier Koffern plus Buggy empfehlen wir einen Van statt einer Limousine – das kostet oft nur wenig mehr und erspart Umpacken an der Haustür.",
        ],
      },
      {
        h: "Timing mit Kindern",
        p: [
          "Rechnen Sie 30 Minuten zusätzlichen Puffer gegenüber einer Erwachsenenreise ein: Toilettenstopps, Trödelmomente und längere Wege im Terminal summieren sich. Eine Abfahrt kurz nach dem üblichen Aufstehen funktioniert meist besser als eine Abfahrt mitten in der Nacht.",
        ],
        list: [
          "Snacks und Getränke griffbereit im Handgepäck",
          "Lieblingskuscheltier nicht im Koffer verstauen",
          "Reisedokumente aller Kinder separat sammeln",
          "Kindersitz bei der Buchung angeben",
        ],
      },
    ],
  },
  {
    slug: "rollstuhltaxi-was-beachten",
    title: "Rollstuhltaxi buchen: Was Sie vorher wissen sollten",
    metaTitle: "Rollstuhltaxi buchen: Rampe, Sicherung & Ablauf erklärt",
    description:
      "Rampe, Rollstuhlsicherung, Begleitperson und Vorlaufzeit: So läuft eine barrierefreie Taxifahrt in Friedberg und der Wetterau ab.",
    date: "2026-02-11",
    readingTime: "4 Min.",
    category: "Barrierefreiheit",
    lead:
      "Ein rollstuhlgerechtes Fahrzeug ist kein normales Taxi mit mehr Platz, sondern ein speziell umgebautes Fahrzeug. Diese Punkte sollten Sie bei der Buchung nennen.",
    sections: [
      {
        h: "Rollstuhltyp und Maße nennen",
        p: [
          "Faltrollstuhl, Aktivrollstuhl oder Elektrorollstuhl unterscheiden sich deutlich in Gewicht und Maßen. Elektrorollstühle wiegen oft über 100 Kilogramm und benötigen eine belastbare Rampe sowie ausreichend Innenhöhe. Nennen Sie uns Typ und ungefähre Maße, dann prüfen wir die Eignung vorab.",
        ],
      },
      {
        h: "Sicherung im Fahrzeug",
        p: [
          "Im Fahrzeug wird der Rollstuhl mit einem Vier-Punkt-Gurtsystem am Boden fixiert; die Person selbst wird zusätzlich mit einem Beckengurt und Schultergurt gesichert. Das Anlegen dauert wenige Minuten – planen Sie diese Zeit beim Termin mit ein.",
        ],
      },
      {
        h: "Vorlaufzeit und Begleitung",
        p: [
          "Weil nur ein Teil unserer Flotte rollstuhlgerecht ist, empfehlen wir eine Vorbestellung von mindestens 24 Stunden, bei regelmäßigen Terminen gerne dauerhaft. Eine Begleitperson kann in der Regel ohne Aufpreis mitfahren.",
        ],
        list: [
          "Rollstuhltyp und Gewicht angeben",
          "Adresse mit Hinweis auf Stufen oder Aufzug",
          "Termin und geplante Rückfahrt nennen",
          "Begleitperson ankündigen",
        ],
      },
    ],
  },
  {
    slug: "fernfahrt-statt-flug",
    title: "Fernfahrt statt Flug: Wann sich die Direktfahrt rechnet",
    metaTitle: "Fernfahrt statt Flug: Wann sich die Taxi-Direktfahrt lohnt",
    description:
      "Ab wie vielen Personen und ab welcher Strecke ist eine Fernfahrt mit Fahrer günstiger und schneller als Flug oder Bahn? Eine nüchterne Abwägung.",
    date: "2026-02-18",
    readingTime: "5 Min.",
    category: "Fernfahrten",
    lead:
      "Nicht jede Strecke gehört ins Flugzeug. Bei Distanzen bis rund 700 Kilometern kann die Direktfahrt in Summe schneller, ruhiger und für Gruppen sogar günstiger sein.",
    sections: [
      {
        h: "Die ehrliche Tür-zu-Tür-Rechnung",
        p: [
          "Ein Flug Frankfurt–Paris dauert nominell 70 Minuten. Rechnet man Anfahrt zum Flughafen, Check-in, Sicherheitskontrolle, Boarding, Gepäckausgabe und Weiterfahrt in die Innenstadt hinzu, landet man realistisch bei fünf bis sechs Stunden. Die Direktfahrt liegt bei etwa sechs Stunden – ohne Umsteigen und ohne Gepäckgrenzen.",
        ],
      },
      {
        h: "Ab wann es sich preislich lohnt",
        p: [
          "Der Festpreis einer Fernfahrt gilt für das Fahrzeug, nicht pro Person. Ab drei bis vier Mitfahrenden nähert sich der Preis pro Kopf flexiblen Bahn- oder Flugtickets deutlich an – bei mehr Komfort und ohne Zusatzkosten für Koffer, Sportgepäck oder Kinderwagen.",
        ],
        list: [
          "1–2 Personen, kurzfristig: Flug oder Bahn oft günstiger",
          "3–8 Personen: Direktfahrt meist konkurrenzfähig",
          "Viel Gepäck oder Ausrüstung: Direktfahrt klar im Vorteil",
          "Nachtfahrt oder frühe Ankunft nötig: Direktfahrt am flexibelsten",
        ],
      },
      {
        h: "Wann die Fernfahrt die bessere Wahl ist",
        p: [
          "Bei Reisen mit eingeschränkter Mobilität, bei Kur- und Klinikfahrten, bei Terminen mit harter Deadline und bei Gruppen, die gemeinsam ankommen müssen, gewinnt die Direktfahrt fast immer – weil sie keine Anschlussrisiken kennt.",
        ],
      },
    ],
  },
  {
    slug: "sicher-nach-hause-nach-der-feier",
    title: "Sicher nach Hause: Warum das Taxi nach der Feier die beste Wahl ist",
    metaTitle: "Sicher heimkommen nach der Feier: Taxi in der Wetterau",
    description:
      "Restalkohol, Bußgelder und dünner Nachtverkehr in der Wetterau: Warum eine geplante Heimfahrt mit dem Taxi günstiger ist als jedes Risiko.",
    date: "2026-02-25",
    readingTime: "4 Min.",
    category: "Sicherheit",
    lead:
      "Eine Heimfahrt kostet weniger als ein Bußgeld – und deutlich weniger als ein Unfall. Mit ein wenig Planung ist die Rückfahrt aus Friedberg, Bad Nauheim oder Butzbach jederzeit geregelt.",
    sections: [
      {
        h: "Restalkohol wird regelmäßig unterschätzt",
        p: [
          "Der Körper baut Alkohol nur langsam ab, etwa 0,1 bis 0,15 Promille pro Stunde. Wer nachts um zwei Uhr aufhört zu trinken, kann morgens um acht noch immer nicht fahrtüchtig sein. Auch die Heimfahrt am nächsten Morgen sollte deshalb mitgedacht werden.",
        ],
      },
      {
        h: "Nachts ist der ÖPNV in der Wetterau dünn",
        p: [
          "Außerhalb der Hauptachsen fahren nachts kaum Busse. Wer aus einem Ortsteil heimmuss, wartet sonst lange oder läuft. Eine vorbestellte Abholung zur vereinbarten Uhrzeit löst das Problem – auch für mehrere Gäste nacheinander.",
        ],
      },
      {
        h: "So planen Sie die Rückfahrt",
        p: [
          "Vereinbaren Sie die Abholzeit schon bei der Hinfahrt oder am Nachmittag davor. Für Gruppen buchen Sie einen Van mit bis zu acht Plätzen; das ist pro Person meist günstiger als mehrere Einzelfahrten. Am Wochenende sind wir rund um die Uhr im Einsatz.",
        ],
      },
    ],
  },
];

export const getPost = (slug?: string) => blogPosts.find((p) => p.slug === slug);
