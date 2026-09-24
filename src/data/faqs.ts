import type { Faq } from "./types";

export interface FaqGroup {
  category: string;
  faqs: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Buchung & Erreichbarkeit",
    faqs: [
      {
        q: "Wie bestelle ich ein Taxi bei MiniTAXI Royal?",
        a: "Am schnellsten telefonisch unter 0171 1670001 oder 06031 16 183 16. Alternativ per WhatsApp – dort können Sie Ihren Standort direkt teilen – oder über das Buchungsformular auf unserer Startseite.",
      },
      {
        q: "Zu welchen Zeiten sind Sie erreichbar?",
        a: "Montag bis Freitag von 07:00 bis 00:00 Uhr. Vorbestellungen sind jederzeit auf Anfrage möglich, auch für Fahrten außerhalb dieser Zeiten.",
      },
      {
        q: "Wie weit im Voraus sollte ich buchen?",
        a: "Stadtfahrten sind meist spontan möglich. Für Flughafentransfers, frühe Morgenfahrten und Fernfahrten empfehlen wir eine Vorbestellung am Vortag oder 24 bis 48 Stunden vorher.",
      },
      {
        q: "Wie schnell ist ein Fahrzeug bei mir?",
        a: "Im Kerngebiet Friedberg und Bad Nauheim sind wir in der Regel innerhalb weniger Minuten vor Ort. Bei der Bestellung nennen wir Ihnen die voraussichtliche Ankunftszeit.",
      },
      {
        q: "Kann ich eine Fahrt stornieren?",
        a: "Ja. Sagen Sie uns möglichst frühzeitig Bescheid, damit wir das Fahrzeug anderweitig einplanen können. Für kurzfristig abgesagte Fernfahrten behalten wir uns eine Ausfallpauschale vor.",
      },
    ],
  },
  {
    category: "Preise & Bezahlung",
    faqs: [
      {
        q: "Was kostet die Fahrt zum Flughafen Frankfurt?",
        a: "Wir arbeiten mit Festpreisen je nach Startort – zum Beispiel 67 € ab Friedberg, 69 € ab Bad Nauheim, 63 € ab Rosbach und 95 € ab Butzbach. Der Preis gilt pro Fahrzeug inklusive Gepäck.",
      },
      {
        q: "Welche Zahlungsarten akzeptieren Sie?",
        a: "Wir akzeptieren Bargeld, Kartenzahlung, PayPal und Überweisung.",
      },
      {
        q: "Gilt der Festpreis auch im Stau?",
        a: "Ja. Der vereinbarte Festpreis bleibt gültig, unabhängig von Verkehrslage, Umleitungen oder Uhrzeit.",
      },
      {
        q: "Gibt es Nachtzuschläge?",
        a: "Unsere Festpreise werden vorab genannt und enthalten alle Zuschläge. Bei Fahrten nach Taxameter gelten die üblichen tariflichen Regelungen.",
      },
      {
        q: "Erhalte ich eine Rechnung?",
        a: "Ja, für Geschäftsreisen und Reisekostenabrechnungen stellen wir eine ordnungsgemäße Rechnung aus. Sagen Sie einfach bei der Buchung Bescheid.",
      },
      {
        q: "Was kostet eine Fernfahrt, zum Beispiel nach Paris oder Wien?",
        a: "Fernfahrten kalkulieren wir individuell nach Strecke, Fahrzeug, Uhrzeit und Rückfahrtwunsch. Sie erhalten vorab ein verbindliches Festpreisangebot inklusive Maut und Vignetten.",
      },
    ],
  },
  {
    category: "Flughafentransfer",
    faqs: [
      {
        q: "Überwachen Sie meinen Flug bei der Abholung?",
        a: "Ja. Geben Sie uns Ihre Flugnummer an – wir prüfen die tatsächliche Landezeit und passen die Abholung an. Wartezeit durch Flugverspätung berechnen wir nicht.",
      },
      {
        q: "Werde ich in der Ankunftshalle abgeholt?",
        a: "Auf Wunsch erwartet Sie unser Fahrer mit einem Namensschild in der Ankunftshalle und hilft beim Gepäck (Meet & Greet).",
      },
      {
        q: "Wie früh sollte ich zum Flughafen starten?",
        a: "Für innereuropäische Flüge planen wir die Ankunft rund zwei Stunden vor Abflug, für Interkontinentalflüge etwa drei Stunden – zuzüglich Fahrzeit.",
      },
      {
        q: "Fahren Sie auch zu anderen Flughäfen?",
        a: "Ja, unter anderem nach Frankfurt-Hahn, Köln/Bonn, Düsseldorf, Stuttgart, München und Nürnberg.",
      },
    ],
  },
  {
    category: "Krankenfahrten & Barrierefreiheit",
    faqs: [
      {
        q: "Übernehmen Sie Krankenfahrten mit ärztlicher Verordnung?",
        a: "Ja. Wir fahren zu Dialyse, Chemo- und Strahlentherapie, Reha, Klinik- und Facharztterminen. Bringen Sie die Verordnung mit; zum Ablauf mit Ihrer Krankenkasse beraten wir Sie gerne.",
      },
      {
        q: "Haben Sie ein rollstuhlgerechtes Fahrzeug?",
        a: "Ja, wir setzen ein Fahrzeug mit Rampe ein, in dem Sie im Rollstuhl sitzend befördert werden können. Bitte melden Sie den Bedarf bei der Bestellung an.",
      },
      {
        q: "Helfen Sie beim Ein- und Aussteigen?",
        a: "Selbstverständlich. Auf Wunsch begleiten wir Sie bis zur Anmeldung der Praxis oder Klinik und holen Sie nach der Behandlung wieder ab.",
      },
      {
        q: "Sind regelmäßige Fahrten möglich?",
        a: "Ja. Für wiederkehrende Termine wie Dialyse richten wir feste Fahrpläne mit möglichst gleichbleibendem Fahrer ein.",
      },
      {
        q: "Darf eine Begleitperson mitfahren?",
        a: "Ja, eine Begleitperson fährt in der Regel ohne Aufpreis mit.",
      },
    ],
  },
  {
    category: "Fahrzeuge & Service",
    faqs: [
      {
        q: "Gibt es Kindersitze?",
        a: "Ja, Kindersitze und Sitzerhöhungen stellen wir kostenlos bereit. Bitte geben Sie Alter und Anzahl der Kinder bei der Buchung an.",
      },
      {
        q: "Wie viele Personen passen in ein Fahrzeug?",
        a: "In der Limousine bis zu vier Fahrgäste, im Van bis zu acht Personen inklusive Gepäck.",
      },
      {
        q: "Dürfen Haustiere mitfahren?",
        a: "Kleine Tiere in Transportboxen und Hunde nach Absprache dürfen mitfahren. Bitte bei der Bestellung angeben.",
      },
      {
        q: "Transportieren Sie auch Pakete oder Dokumente?",
        a: "Ja, wir übernehmen Kurier- und Botenfahrten in der Region und darüber hinaus.",
      },
      {
        q: "Fahren Sie auch Gruppen zu Feiern und Veranstaltungen?",
        a: "Ja, mit Van und mehreren Fahrzeugen organisieren wir Hin- und Rückfahrten für Hochzeiten, Vereinsfeiern und Firmenevents.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);
