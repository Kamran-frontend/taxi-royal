import type { ContentSection, Faq } from "./types";

export interface LongDistanceRoute {
  slug: string;
  city: string;
  country: string;
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

const sharedComfort: ContentSection = {
  h: "Komfort auf der Langstrecke",
  p: [
    "Unsere Fahrzeuge sind auf lange Etappen ausgelegt: klimatisierte Limousinen und Vans mit ausreichend Beinfreiheit, Ladebuchsen für Handy und Laptop, kostenlosem Trinkwasser und Platz für großes Gepäck. Auf Wunsch stellen wir Kindersitze, eine Kühlbox oder eine zusätzliche Gepäckbox bereit.",
    "Sie entscheiden über den Rhythmus der Fahrt: durchfahren, kurze Kaffeepausen oder ein längerer Stopp unterwegs. Unsere Fahrer sind ortskundig, sprechen Deutsch und Englisch und fahren vorausschauend – Sie kommen ausgeruht an, nicht abgekämpft wie nach einer Nacht im Nachtzug oder einer Umsteigeverbindung.",
    "Rollstuhlgerechte Fernfahrten sind ebenfalls möglich. Unser Fahrzeug mit Rampe und Rollstuhlsicherung bringen wir auf Anfrage zum Einsatz; bitte nennen Sie Rollstuhltyp, Maße und Gewicht bei der Buchung.",
  ],
};

const sharedBooking: ContentSection = {
  h: "So buchen Sie Ihre Fernfahrt",
  p: [
    "Senden Sie uns Abhol- und Zieladresse, Datum, Uhrzeit sowie Personen- und Gepäckzahl – per WhatsApp, Telefon oder über unser Buchungsformular. Sie erhalten kurzfristig ein verbindliches Festpreisangebot, ohne versteckte Zuschläge für Maut, Kraftstoff oder Rückfahrt.",
    "Für Fernfahrten empfehlen wir eine Vorlaufzeit von 24 bis 48 Stunden, damit wir Fahrzeug und Fahrer optimal einplanen können. Kurzfristige Anfragen prüfen wir gerne – gerade nachts und am Wochenende sind wir oft flexibler als erwartet.",
  ],
};

export const longDistanceRoutes: LongDistanceRoute[] = [
  {
    slug: "taxi-friedberg-paris",
    city: "Paris",
    country: "Frankreich",
    distanceKm: 570,
    durationText: "ca. 5,5 – 6,5 Stunden",
    title: "Taxi Friedberg – Paris | Fernfahrt & Transfer zum Festpreis",
    description:
      "Taxi und Transfer von Friedberg, Frankfurt und der Wetterau nach Paris. Tür-zu-Tür, Festpreis auf Anfrage, deutschsprachiger Fahrer, 24/7 buchbar.",
    h1: "Taxi Friedberg – Paris: Tür-zu-Tür ohne Umsteigen",
    lead:
      "Rund 570 Kilometer trennen die Wetterau von der französischen Hauptstadt. Wir fahren Sie direkt von Ihrer Haustür in Friedberg, Bad Nauheim oder Frankfurt bis zu Ihrer Adresse in Paris – ohne Bahnhofsstress, ohne Gepäcklimit, ohne Umsteigen.",
    highlights: [
      "Direktfahrt Tür zu Tür, keine Zwischenstopps nötig",
      "Festpreisangebot vorab – Maut und Kraftstoff inklusive",
      "Deutsch- und englischsprachige Fahrer",
      "Platz für Koffer, Messeequipment oder Instrumente",
    ],
    sections: [
      {
        h: "Warum mit dem Taxi nach Paris statt mit Bahn oder Flug?",
        p: [
          "Der Flug von Frankfurt nach Paris dauert zwar nur gut eine Stunde – zusammen mit Anfahrt, Check-in, Sicherheitskontrolle, Wartezeit und Weiterfahrt in die Innenstadt sind Sie aber selten unter fünf Stunden unterwegs. Bei einer Direktfahrt entfällt dieser gesamte Aufwand: Sie steigen vor Ihrer Haustür ein und vor Ihrem Hotel wieder aus.",
          "Besonders für Familien, Geschäftsreisende mit Ausrüstung und Reisende mit viel Gepäck rechnet sich die Fernfahrt. Ab drei Personen liegt der Preis pro Kopf oft im Bereich flexibler Bahntickets erster Klasse – bei deutlich mehr Komfort und ohne Anschlussrisiko.",
        ],
      },
      {
        h: "Die Strecke: über Saarbrücken und Metz nach Paris",
        p: [
          "Wir fahren in der Regel über die A5 und A6 Richtung Saarbrücken, dann über die französische A4 via Metz und Reims nach Paris. Die Autoroute ist gut ausgebaut, mautpflichtig und auch nachts sicher befahrbar. Alternativ nutzen wir bei Stau die Route über Luxemburg.",
          "Für Zwischenstopps eignen sich Reims mit seiner Kathedrale oder die Rastanlagen entlang der A4. Wenn Sie in der Champagne einen Halt einlegen möchten, planen wir das gerne mit ein – sprechen Sie uns bei der Buchung darauf an.",
        ],
      },
      {
        h: "Beliebte Ziele in Paris",
        p: [
          "Wir bringen Sie zu jeder Adresse im Großraum Paris: Hotels in Saint-Germain oder am Champs-Élysées, die Messe Porte de Versailles, La Défense für Geschäftstermine, Disneyland Paris in Marne-la-Vallée oder direkt zu den Flughäfen Charles de Gaulle und Orly für einen Anschlussflug.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Was kostet ein Taxi von Friedberg nach Paris?",
        a: "Wir kalkulieren Fernfahrten individuell nach Strecke, Fahrzeuggröße, Uhrzeit und ob eine Rückfahrt gewünscht ist. Sie erhalten vor der Buchung ein verbindliches Festpreisangebot per WhatsApp oder E-Mail – inklusive Maut und Kraftstoff, ohne Nachberechnung.",
      },
      {
        q: "Wie lange dauert die Fahrt nach Paris?",
        a: "Je nach Verkehrslage und Startadresse rechnen wir mit etwa 5,5 bis 6,5 Stunden reiner Fahrzeit zuzüglich Pausen.",
      },
      {
        q: "Können mehrere Personen mitfahren?",
        a: "Ja. Wir setzen je nach Personen- und Gepäckzahl eine Limousine oder einen Van mit bis zu acht Sitzplätzen ein. Der Festpreis gilt für das Fahrzeug, nicht pro Person.",
      },
      {
        q: "Fahren Sie auch nachts oder sehr früh morgens?",
        a: "Ja, Fernfahrten sind rund um die Uhr möglich. Nachtfahrten sind auf dieser Strecke sogar oft schneller, weil weniger Verkehr herrscht.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-amsterdam",
    city: "Amsterdam",
    country: "Niederlande",
    distanceKm: 440,
    durationText: "ca. 4,5 – 5 Stunden",
    title: "Taxi Friedberg – Amsterdam | Direktfahrt in die Niederlande",
    description:
      "Taxi und Fernfahrt von Friedberg, Frankfurt und der Wetterau nach Amsterdam. Tür-zu-Tür-Transfer, Festpreis auf Anfrage, 24/7 verfügbar.",
    h1: "Taxi Friedberg – Amsterdam: entspannt in die Niederlande",
    lead:
      "Rund 440 Kilometer über die A3 und A12 – wir bringen Sie ohne Umsteigen von der Wetterau nach Amsterdam, Rotterdam, Den Haag oder Utrecht.",
    highlights: [
      "Direktverbindung ohne Umsteigen in Köln oder Utrecht",
      "Kein Parkplatzproblem in der Amsterdamer Innenstadt",
      "Vans für Gruppen bis 8 Personen",
      "Rückfahrt und Wartezeit planbar",
    ],
    sections: [
      {
        h: "Amsterdam ohne Parkplatzsuche erreichen",
        p: [
          "Amsterdam gehört zu den teuersten und restriktivsten Städten Europas, wenn es ums Parken geht. Innerstädtische Parkhäuser kosten schnell dreistellige Beträge pro Tag, und die Umweltzone schränkt die Einfahrt zusätzlich ein. Mit einem Transfer bis vor die Hoteltür sparen Sie sich Parkgebühren, Umweltzonen-Recherche und die Suche nach einem freien Platz in der Grachtenstadt.",
          "Wir setzen Sie direkt am Ziel ab – ob Hotel im Zentrum, RAI Amsterdam für Messebesuche, Kreuzfahrtterminal an der Piet Heinkade oder Schiphol Airport für Ihren Weiterflug.",
        ],
      },
      {
        h: "Die Strecke über Köln, Arnheim und Utrecht",
        p: [
          "Von Friedberg geht es über die A45 oder A3 nach Köln, weiter über Oberhausen und die Grenze bei Emmerich auf die niederländische A12 via Arnheim und Utrecht nach Amsterdam. Die Strecke ist durchgehend gut ausgebaut und mautfrei.",
          "Wir beobachten die Verkehrslage im Ruhrgebiet, das auf dieser Route der häufigste Stauabschnitt ist, und weichen bei Bedarf frühzeitig aus, damit Sie Termine sicher einhalten.",
        ],
      },
      {
        h: "Ideal für Messen, Städtetrips und Kreuzfahrten",
        p: [
          "Besonders gefragt ist die Strecke für Messebesuche in der RAI, für Wochenendtrips zu viert oder zu sechst und für Anreisen zu Kreuzfahrtschiffen, bei denen ein verpasster Abfahrtszeitpunkt teuer wird. Wir planen die Ankunft bewusst mit Puffer, damit Sie entspannt an Bord gehen.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Was kostet die Fahrt von Friedberg nach Amsterdam?",
        a: "Der Preis richtet sich nach Fahrzeuggröße, Uhrzeit und Rückfahrtwunsch. Sie bekommen vorab ein verbindliches Festpreisangebot – ohne versteckte Zuschläge.",
      },
      {
        q: "Fahren Sie auch nach Rotterdam, Den Haag oder Schiphol?",
        a: "Ja, wir bedienen alle niederländischen Ziele, darunter Rotterdam, Den Haag, Utrecht, Eindhoven und den Flughafen Amsterdam-Schiphol.",
      },
      {
        q: "Wie viel Gepäck kann ich mitnehmen?",
        a: "In der Limousine transportieren wir bequem drei bis vier große Koffer, im Van deutlich mehr. Geben Sie Ihr Gepäckvolumen bei der Anfrage an, dann wählen wir das passende Fahrzeug.",
      },
      {
        q: "Ist eine Rückfahrt buchbar?",
        a: "Ja. Hin- und Rückfahrt lassen sich gemeinsam buchen; oft ist das günstiger als zwei Einzelfahrten.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-zuerich",
    city: "Zürich",
    country: "Schweiz",
    distanceKm: 380,
    durationText: "ca. 4 – 4,5 Stunden",
    title: "Taxi Friedberg – Zürich | Transfer in die Schweiz zum Festpreis",
    description:
      "Fernfahrt und Taxi von Friedberg, Frankfurt und der Wetterau nach Zürich, Basel oder Bern. Tür-zu-Tür, Festpreisangebot, Vignette inklusive.",
    h1: "Taxi Friedberg – Zürich: direkt in die Schweiz",
    lead:
      "Über die A5 und den Grenzübergang Basel bringen wir Sie in rund vier Stunden nach Zürich – inklusive Schweizer Vignette und ohne Umsteigen.",
    highlights: [
      "Schweizer Autobahnvignette bereits inklusive",
      "Grenzformalitäten und Zollhinweise übernehmen wir",
      "Auch nach Basel, Bern, Luzern und Zug",
      "Business-Transfer mit ruhiger Arbeitsatmosphäre",
    ],
    sections: [
      {
        h: "Geschäftlich und privat in die Schweiz",
        p: [
          "Zürich ist einer der wichtigsten Finanzplätze Europas – entsprechend häufig fahren wir Geschäftsreisende zu Terminen in der Bahnhofstraße, im Kreis 1 oder zum Flughafen Zürich-Kloten. Im Fahrzeug können Sie ungestört telefonieren oder Unterlagen durchgehen, statt in Zug oder Flugzeug zwischen Umstiegen zu jonglieren.",
          "Privatreisende nutzen die Strecke für Ferienstarts Richtung Alpen, für Familienbesuche oder für Klinikaufenthalte in der Schweiz, bei denen ein Transfer bis zur Aufnahme deutlich angenehmer ist als eine Bahnreise mit Gepäck.",
        ],
      },
      {
        h: "Route, Vignette und Grenzübertritt",
        p: [
          "Wir fahren über die A5 via Darmstadt, Karlsruhe und Freiburg bis Basel und weiter auf der Schweizer A3 nach Zürich. Die Schweizer Autobahnvignette ist in unserem Festpreis enthalten, ebenso alle deutschen Streckenkosten.",
          "Am Grenzübergang gilt: Personalausweis oder Reisepass gehören ins Handgepäck, nicht in den Kofferraum. Bei zollpflichtigen Waren beraten wir Sie im Vorfeld, damit der Übertritt reibungslos verläuft.",
        ],
      },
      {
        h: "Weitere Ziele in der Schweiz",
        p: [
          "Neben Zürich fahren wir regelmäßig nach Basel (auch zum EuroAirport), Bern, Luzern, Zug, St. Gallen und in die Wintersportorte im Berner Oberland und Graubünden. Für Skireisen setzen wir Fahrzeuge mit Winterbereifung und ausreichend Stauraum für Ausrüstung ein.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Ist die Vignette im Preis enthalten?",
        a: "Ja, die Schweizer Autobahnvignette und sämtliche Streckenkosten sind Teil unseres Festpreises.",
      },
      {
        q: "Welche Dokumente brauche ich für die Fahrt in die Schweiz?",
        a: "Für EU-Bürger genügt ein gültiger Personalausweis oder Reisepass. Halten Sie das Dokument griffbereit, da an der Grenze stichprobenartig kontrolliert wird.",
      },
      {
        q: "Fahren Sie auch zum Flughafen Zürich?",
        a: "Ja, wir bringen Sie direkt zum Terminal Ihres Abflugs am Flughafen Zürich-Kloten oder zum EuroAirport Basel.",
      },
      {
        q: "Sind Skiausrüstung und Sportgepäck möglich?",
        a: "Ja. Geben Sie Sportgepäck bei der Anfrage an, dann planen wir einen Van mit passendem Stauraum ein.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-muenchen",
    city: "München",
    country: "Deutschland",
    distanceKm: 400,
    durationText: "ca. 4 Stunden",
    title: "Taxi Friedberg – München | Fernfahrt nach Bayern zum Festpreis",
    description:
      "Taxi und Transfer von Friedberg, Frankfurt und der Wetterau nach München. Direktfahrt Tür zu Tür, Festpreis, auch zum Flughafen München.",
    h1: "Taxi Friedberg – München: Direktfahrt nach Bayern",
    lead:
      "Rund 400 Kilometer über die A3 und A9 oder über Würzburg und Nürnberg – wir bringen Sie ohne Umsteigen nach München, zur Messe Riem oder zum Flughafen Franz Josef Strauß.",
    highlights: [
      "Messe München und ICM direkt erreichbar",
      "Anschluss zum Flughafen München (MUC)",
      "Ideal für Gruppen und Firmenteams",
      "Feste Ankunftszeit für Termine planbar",
    ],
    sections: [
      {
        h: "Messe, Termin oder Oktoberfest – ohne Parkstress",
        p: [
          "Zur Messe München, zum ICM oder zur Theresienwiese fährt man am entspanntesten, wenn man sich weder um Parkplätze noch um den letzten Zug kümmern muss. Wir setzen Sie direkt am Eingang ab und holen Sie auf Wunsch zur vereinbarten Zeit wieder ab.",
          "Gerade Firmenteams profitieren: Statt vier Einzeltickets und Anschlussfahrten fährt die Gruppe gemeinsam in einem Van, kann unterwegs Präsentationen abstimmen und kommt geschlossen an.",
        ],
      },
      {
        h: "Die Strecke nach München",
        p: [
          "Wir nutzen je nach Verkehrslage die Route über Würzburg und Nürnberg (A3/A9) oder über Aschaffenburg und Ulm. Beide Varianten sind mautfrei für Pkw und gut ausgebaut. Bei Baustellen auf der A3 weichen wir frühzeitig aus.",
          "Auf Wunsch legen wir einen Stopp in Nürnberg oder Ingolstadt ein – etwa für einen zweiten Termin am selben Tag.",
        ],
      },
      {
        h: "Auch für Nacht- und Frühfahrten",
        p: [
          "Wenn Sie in München einen frühen Flug oder Termin haben, starten wir gerne mitten in der Nacht. Nächtliche Fahrten laufen auf dieser Strecke besonders zügig, und Sie können im Fahrzeug schlafen statt am Bahnsteig zu warten.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt von Friedberg nach München?",
        a: "In der Regel rund vier Stunden reine Fahrzeit, abhängig von Verkehr und Startadresse.",
      },
      {
        q: "Fahren Sie auch zum Flughafen München?",
        a: "Ja, wir bringen Sie direkt zum jeweiligen Terminal am Flughafen München (MUC) – auch für sehr frühe Abflüge.",
      },
      {
        q: "Ist eine Zwischenstation möglich?",
        a: "Ja, Zwischenstopps etwa in Würzburg, Nürnberg oder Ingolstadt planen wir gerne ein. Geben Sie sie bei der Anfrage an, damit wir sie im Festpreis berücksichtigen.",
      },
      {
        q: "Können wir zu acht fahren?",
        a: "Ja, für Gruppen setzen wir einen Van mit bis zu acht Sitzplätzen ein.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-berlin",
    city: "Berlin",
    country: "Deutschland",
    distanceKm: 520,
    durationText: "ca. 5 – 5,5 Stunden",
    title: "Taxi Friedberg – Berlin | Direktfahrt in die Hauptstadt",
    description:
      "Fernfahrt von Friedberg, Frankfurt und der Wetterau nach Berlin. Tür-zu-Tür-Transfer zum Festpreis, auch zum Flughafen BER, 24/7 buchbar.",
    h1: "Taxi Friedberg – Berlin: Tür zu Tür in die Hauptstadt",
    lead:
      "Über die A5, A7 und A9 bringen wir Sie in rund fünf Stunden direkt nach Berlin – zum Hotel, zum Termin, zur Klinik oder zum Flughafen BER.",
    highlights: [
      "Direkt zu Hotel, Ministerium, Klinik oder Messe",
      "Anschluss zum Flughafen Berlin Brandenburg (BER)",
      "Diskrete Fahrten für Geschäfts- und Behördentermine",
      "Rückfahrt am selben Tag möglich",
    ],
    sections: [
      {
        h: "Berlin ohne Umstieg erreichen",
        p: [
          "Wer von der Wetterau nach Berlin will, muss mit der Bahn meist zuerst nach Frankfurt und dort umsteigen. Mit einem Direkttransfer entfällt das: Wir holen Sie an der Haustür ab und fahren ohne Zwischenstopp bis zu Ihrer Berliner Adresse.",
          "Das ist besonders bei Klinikterminen an der Charité, bei Behördengängen oder bei Terminen im Regierungsviertel wertvoll, weil Sie eine feste Ankunftszeit haben und nicht von Anschlusszügen abhängig sind.",
        ],
      },
      {
        h: "Strecke und Fahrzeit",
        p: [
          "Die klassische Route führt über die A5 nach Bad Hersfeld, weiter über die A4 und A9 via Erfurt und Leipzig nach Berlin. Alternativ fahren wir über Kassel und Magdeburg (A7/A2), wenn die Verkehrslage es nahelegt.",
          "Planen Sie fünf bis fünfeinhalb Stunden ein. Für Termine am Vormittag empfehlen wir eine frühe Abfahrt oder die Anreise am Vorabend.",
        ],
      },
      {
        h: "Geschäftsreisen und Gruppen",
        p: [
          "Für Firmen fahren wir regelmäßig Teams zu Kongressen, Messen auf dem Berliner Ausstellungsgelände und zu Kundenterminen. Auf Wunsch stellen wir eine Rechnung mit ausgewiesener Umsatzsteuer für Ihre Reisekostenabrechnung aus.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Was kostet ein Taxi nach Berlin?",
        a: "Fernfahrten kalkulieren wir individuell. Sie erhalten vor Fahrtantritt ein verbindliches Festpreisangebot, das alle Streckenkosten enthält.",
      },
      {
        q: "Fahren Sie auch zum Flughafen BER?",
        a: "Ja, wir bringen Sie direkt zum Terminal am Flughafen Berlin Brandenburg oder holen Sie dort ab.",
      },
      {
        q: "Bekomme ich eine Rechnung für die Firma?",
        a: "Ja, auf Wunsch erhalten Sie eine ordnungsgemäße Rechnung für Ihre Reisekostenabrechnung.",
      },
      {
        q: "Kann ich unterwegs arbeiten?",
        a: "Ja. Unsere Fahrzeuge bieten Ladebuchsen und eine ruhige Umgebung für Telefonate und Laptoparbeit.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-wien",
    city: "Wien",
    country: "Österreich",
    distanceKm: 750,
    durationText: "ca. 7,5 – 8 Stunden",
    title: "Taxi Friedberg – Wien | Fernfahrt nach Österreich",
    description:
      "Taxi und Transfer von Friedberg und Frankfurt nach Wien, Salzburg oder Innsbruck. Festpreis auf Anfrage, Vignette inklusive, Tür zu Tür.",
    h1: "Taxi Friedberg – Wien: Fernfahrt nach Österreich",
    lead:
      "Rund 750 Kilometer über Nürnberg, Passau und Linz: Wir fahren Sie ohne Umsteigen bis vor Ihre Wiener Adresse – inklusive österreichischer Vignette.",
    highlights: [
      "Österreichische Vignette und Maut inklusive",
      "Auch nach Salzburg, Linz, Graz und Innsbruck",
      "Zwei Fahrer auf Wunsch für lange Etappen",
      "Ideal für Kur-, Reha- und Familienreisen",
    ],
    sections: [
      {
        h: "Eine Etappe, kein Umsteigen",
        p: [
          "Die Bahnverbindung nach Wien erfordert mindestens einen Umstieg, oft mit Gepäckwechsel und knappen Anschlusszeiten. Wir fahren die Strecke in einer Etappe, mit Pausen nach Ihrem Bedarf und ohne dass Sie Ihr Gepäck ein einziges Mal selbst tragen müssen.",
          "Für ältere Reisende, Kur- und Rehafahrten oder Familien mit kleinen Kindern ist das ein deutlicher Unterschied: Sie steigen einmal ein und einmal aus.",
        ],
      },
      {
        h: "Route über Nürnberg, Passau und Linz",
        p: [
          "Wir fahren über die A3 via Würzburg, Nürnberg und Regensburg bis Passau und dann auf der österreichischen A8 und A1 über Linz nach Wien. Die Vignette und die Streckenmaut sind im Festpreis enthalten.",
          "Auf Wunsch legen wir in Regensburg, Passau oder Linz einen Zwischenstopp ein – etwa zum Essen oder für einen Kurzbesuch.",
        ],
      },
      {
        h: "Weitere österreichische Ziele",
        p: [
          "Neben Wien fahren wir häufig nach Salzburg, Innsbruck, Graz, Klagenfurt und in die Wintersportregionen Tirols und Salzburgs. Für Skireisen planen wir Fahrzeuge mit passender Bereifung und Dachbox ein.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt nach Wien?",
        a: "Etwa siebeneinhalb bis acht Stunden reine Fahrzeit zuzüglich Pausen.",
      },
      {
        q: "Sind Vignette und Maut im Preis enthalten?",
        a: "Ja, sämtliche Streckenkosten inklusive österreichischer Vignette und Mautabschnitte sind Teil des Festpreises.",
      },
      {
        q: "Fahren Sie auch nach Salzburg oder Innsbruck?",
        a: "Ja, alle österreichischen Ziele sind buchbar, inklusive der Wintersportorte in Tirol und im Salzburger Land.",
      },
      {
        q: "Ist die Strecke für ältere Fahrgäste geeignet?",
        a: "Ja. Wir passen Pausenrhythmus und Fahrzeugauswahl an, helfen beim Ein- und Aussteigen und beim Gepäck.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-prag",
    city: "Prag",
    country: "Tschechien",
    distanceKm: 470,
    durationText: "ca. 5 Stunden",
    title: "Taxi Friedberg – Prag | Direkttransfer nach Tschechien",
    description:
      "Fernfahrt von Friedberg, Frankfurt und der Wetterau nach Prag. Tür-zu-Tür-Transfer zum Festpreis, Vignette inklusive, 24/7 buchbar.",
    h1: "Taxi Friedberg – Prag: Direkttransfer nach Tschechien",
    lead:
      "Über Würzburg, Nürnberg und Pilsen bringen wir Sie in rund fünf Stunden nach Prag – ohne Umsteigen und mit Festpreis inklusive tschechischer Vignette.",
    highlights: [
      "Tschechische Vignette im Preis enthalten",
      "Auch nach Pilsen, Brünn und Karlsbad",
      "Beliebt für Städtereisen und Gruppenfahrten",
      "Rückfahrt zum Wunschtermin buchbar",
    ],
    sections: [
      {
        h: "Städtetrip ohne Umsteigen",
        p: [
          "Prag ist von Hessen aus per Bahn oder Flug nur mit Umsteigen erreichbar. Eine Direktfahrt spart Ihnen Wartezeiten und macht die Anreise für Gruppen deutlich günstiger, weil der Festpreis für das Fahrzeug gilt und nicht pro Person berechnet wird.",
          "Wir bringen Sie direkt zu Ihrem Hotel in der Altstadt, auf der Kleinseite oder in Neustadt – auch in Bereiche, die für Reisebusse gesperrt sind.",
        ],
      },
      {
        h: "Strecke und Grenzübertritt",
        p: [
          "Die Route führt über die A3 nach Nürnberg, weiter über die A6 nach Waidhaus und auf der tschechischen D5 über Pilsen nach Prag. Der Grenzübertritt ist innerhalb des Schengen-Raums unkompliziert; ein gültiger Ausweis sollte dennoch mitgeführt werden.",
          "Die tschechische Autobahnvignette besorgen wir vorab, sie ist im Festpreis enthalten.",
        ],
      },
      {
        h: "Weitere Ziele in Tschechien",
        p: [
          "Neben Prag fahren wir regelmäßig nach Karlsbad und Marienbad – etwa für Kuraufenthalte – sowie nach Pilsen und Brünn für Geschäftstermine.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Brauche ich für Tschechien einen Reisepass?",
        a: "Für EU-Bürger genügt ein gültiger Personalausweis. Führen Sie das Dokument griffbereit mit.",
      },
      {
        q: "Ist die Vignette enthalten?",
        a: "Ja, die tschechische Autobahnvignette ist Bestandteil unseres Festpreises.",
      },
      {
        q: "Fahren Sie auch nach Karlsbad zur Kur?",
        a: "Ja, Kur- und Rehafahrten nach Karlsbad und Marienbad gehören zu unseren häufigen Strecken.",
      },
      {
        q: "Wie viele Personen passen ins Fahrzeug?",
        a: "Je nach Buchung eine Limousine für bis zu vier oder ein Van für bis zu acht Personen.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-bruessel",
    city: "Brüssel",
    country: "Belgien",
    distanceKm: 400,
    durationText: "ca. 4 – 4,5 Stunden",
    title: "Taxi Friedberg – Brüssel | Transfer nach Belgien zum Festpreis",
    description:
      "Taxi und Fernfahrt von Friedberg und Frankfurt nach Brüssel, Antwerpen oder Brügge. Tür-zu-Tür, Festpreisangebot, ideal für EU-Termine.",
    h1: "Taxi Friedberg – Brüssel: direkt ins Herz Europas",
    lead:
      "Über Köln, Aachen und Lüttich erreichen wir Brüssel in rund vier Stunden – ideal für Termine im Europaviertel, bei EU-Institutionen und auf Fachmessen.",
    highlights: [
      "Direkt zum Europaviertel und zu EU-Institutionen",
      "Auch nach Antwerpen, Gent, Brügge und Lüttich",
      "Diskrete Business-Transfers mit Rechnung",
      "Wartezeit vor Ort buchbar",
    ],
    sections: [
      {
        h: "Termine in Brüssel zuverlässig erreichen",
        p: [
          "Wer in Brüssel einen Termin bei einer EU-Institution, einem Verband oder einer Kanzlei hat, kann sich Verspätungen nicht leisten. Wir planen die Ankunft mit Puffer, kennen die Zufahrten im Europaviertel und setzen Sie direkt am Eingang ab.",
          "Auf Wunsch wartet unser Fahrer während Ihres Termins und bringt Sie anschließend zurück – so entfällt die Suche nach einer Rückfahrgelegenheit am Abend.",
        ],
      },
      {
        h: "Strecke über Köln und Lüttich",
        p: [
          "Wir fahren über die A3 nach Köln, weiter über die A4 nach Aachen und auf der belgischen E40 via Lüttich nach Brüssel. Die Strecke ist mautfrei für Pkw und durchgehend gut ausgebaut.",
          "Bei starkem Verkehr im Kölner Raum weichen wir über die A61 aus, damit die geplante Ankunftszeit hält.",
        ],
      },
      {
        h: "Weitere belgische Ziele",
        p: [
          "Neben Brüssel fahren wir nach Antwerpen (auch zum Diamantenviertel und Hafen), Gent, Brügge, Lüttich sowie zum Flughafen Brussels Airport in Zaventem.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Kann der Fahrer vor Ort warten?",
        a: "Ja, Wartezeit lässt sich mitbuchen. Wir kalkulieren sie transparent im Festpreisangebot.",
      },
      {
        q: "Fahren Sie auch zum Flughafen Brüssel?",
        a: "Ja, Transfers zum Brussels Airport (Zaventem) und nach Charleroi sind möglich.",
      },
      {
        q: "Erhalte ich eine Firmenrechnung?",
        a: "Ja, wir stellen auf Wunsch eine Rechnung für Ihre Reisekostenabrechnung aus.",
      },
      {
        q: "Wie kurzfristig kann ich buchen?",
        a: "Idealerweise 24 bis 48 Stunden vorher. Kurzfristige Anfragen prüfen wir gerne telefonisch.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-luxemburg",
    city: "Luxemburg",
    country: "Luxemburg",
    distanceKm: 250,
    durationText: "ca. 2,5 – 3 Stunden",
    title: "Taxi Friedberg – Luxemburg | Transfer zum Festpreis",
    description:
      "Taxi von Friedberg, Frankfurt und der Wetterau nach Luxemburg-Stadt. Tür-zu-Tür-Transfer, Festpreis, auch als Tagesfahrt mit Rückfahrt.",
    h1: "Taxi Friedberg – Luxemburg: kurze Strecke, großer Komfort",
    lead:
      "Nur rund 250 Kilometer über die A3 und A60 – Luxemburg eignet sich hervorragend als Tagesfahrt mit Hin- und Rückfahrt am selben Tag.",
    highlights: [
      "Tagesfahrt mit Rückfahrt am selben Tag beliebt",
      "Direkt zum Bankenviertel Kirchberg",
      "Auch zum Flughafen Luxemburg-Findel",
      "Wartezeit vor Ort planbar",
    ],
    sections: [
      {
        h: "Tagesfahrt statt Übernachtung",
        p: [
          "Wegen der kurzen Distanz lässt sich Luxemburg gut als Tagesfahrt planen: morgens hin, Termin oder Einkauf, abends zurück. Sie sparen sich Hotelkosten und behalten volle Flexibilität, weil das Fahrzeug vor Ort auf Sie wartet.",
          "Besonders gefragt ist die Strecke für Banktermine auf dem Kirchberg-Plateau, für Behördengänge und für Einkaufsfahrten.",
        ],
      },
      {
        h: "Strecke über Koblenz und Trier",
        p: [
          "Wir fahren über die A3 Richtung Koblenz und weiter über die A48 und A64 via Trier nach Luxemburg-Stadt. Die Route ist mautfrei und landschaftlich reizvoll entlang der Mosel.",
          "Ein Zwischenstopp in Trier – etwa an der Porta Nigra – lässt sich problemlos einplanen.",
        ],
      },
      {
        h: "Ziele im Großherzogtum",
        p: [
          "Wir fahren nach Luxemburg-Stadt, Kirchberg, Esch-sur-Alzette, Remich und zum Flughafen Luxemburg-Findel.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Lohnt sich eine Tagesfahrt nach Luxemburg?",
        a: "Ja, bei rund drei Stunden Fahrzeit je Richtung ist eine Hin- und Rückfahrt am selben Tag gut machbar.",
      },
      {
        q: "Wartet der Fahrer vor Ort?",
        a: "Ja, Wartezeit lässt sich mitbuchen und wird im Festpreis transparent ausgewiesen.",
      },
      {
        q: "Fahren Sie auch zum Flughafen Findel?",
        a: "Ja, Transfers zum Flughafen Luxemburg-Findel sind jederzeit buchbar.",
      },
      {
        q: "Fällt Maut an?",
        a: "Auf dieser Route fällt für Pkw keine Maut an; alle Kosten sind ohnehin im Festpreis enthalten.",
      },
    ],
  },
  {
    slug: "taxi-friedberg-mailand",
    city: "Mailand",
    country: "Italien",
    distanceKm: 700,
    durationText: "ca. 7 – 8 Stunden",
    title: "Taxi Friedberg – Mailand | Fernfahrt nach Italien",
    description:
      "Fernfahrt von Friedberg und Frankfurt nach Mailand, Como oder an die oberitalienischen Seen. Festpreis inklusive Vignette und Maut.",
    h1: "Taxi Friedberg – Mailand: über die Alpen nach Italien",
    lead:
      "Rund 700 Kilometer über Basel, den Gotthard und Lugano: Wir bringen Sie ohne Umsteigen nach Mailand, an den Comer See oder den Lago Maggiore.",
    highlights: [
      "Schweizer Vignette und italienische Maut inklusive",
      "Auch zu den oberitalienischen Seen",
      "Fahrzeuge mit viel Platz für Urlaubsgepäck",
      "Zwei Fahrer auf Wunsch für lange Etappen",
    ],
    sections: [
      {
        h: "Urlaubsstart ohne Flughafen",
        p: [
          "Wer mit Familie oder in der Gruppe nach Oberitalien reist, kämpft am Flughafen mit Gepäckgebühren, Umsteigezeiten und dem Mietwagen am Ziel. Eine Direktfahrt bringt Sie samt Gepäck bis zur Ferienwohnung – ohne Zusatzkosten für Koffer, Kinderwagen oder Sportausrüstung.",
          "Wir starten auf Wunsch nachts, damit Sie den ersten Urlaubstag komplett vor Ort verbringen können.",
        ],
      },
      {
        h: "Route über Basel und den Gotthard",
        p: [
          "Die Fahrt führt über die A5 nach Basel, weiter auf der Schweizer A2 durch den Gotthardtunnel und über Lugano und Chiasso nach Mailand. Vignette und italienische Autobahnmaut sind im Festpreis enthalten.",
          "Bei Stau am Gotthard nutzen wir alternativ die Route über den San-Bernardino- oder Simplonpass. Wir prüfen die Verkehrslage vor Abfahrt und informieren Sie über die geplante Route.",
        ],
      },
      {
        h: "Ziele in Oberitalien",
        p: [
          "Neben Mailand fahren wir nach Como, Bellagio, Verbania, Stresa, an den Gardasee sowie zu den Flughäfen Malpensa, Linate und Bergamo.",
        ],
      },
      sharedComfort,
      sharedBooking,
    ],
    faqs: [
      {
        q: "Sind Maut und Vignette enthalten?",
        a: "Ja, sowohl die Schweizer Vignette als auch die italienische Autobahnmaut sind Teil des Festpreises.",
      },
      {
        q: "Wie lange dauert die Fahrt nach Mailand?",
        a: "Etwa sieben bis acht Stunden reine Fahrzeit, abhängig von Verkehr und Alpenroute.",
      },
      {
        q: "Fahren Sie auch an den Gardasee oder Comer See?",
        a: "Ja, alle Ziele in Oberitalien inklusive der Seenregion sind buchbar.",
      },
      {
        q: "Kann ich viel Gepäck mitnehmen?",
        a: "Ja. Anders als beim Flug gibt es keine Gepäckgebühren – wir wählen einfach das passende Fahrzeug.",
      },
    ],
  },
];

export const getRoute = (slug?: string) =>
  longDistanceRoutes.find((r) => r.slug === slug);
