import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { airportPages } from "@/data/airports";
import { cityPages } from "@/data/cities";
import type { ContentSection, Faq } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

const path = "/flughafentransfer-frankfurt";

const sections: ContentSection[] = [
  {
    h: "Flughafentransfer Frankfurt ab der Wetterau – zum Festpreis",
    p: [
      "Der Flughafen Frankfurt ist der größte Luftverkehrsdrehkreuz Deutschlands – und für Reisende aus Friedberg, Bad Nauheim, Butzbach und der übrigen Wetterau in rund 40 bis 60 Minuten erreichbar. Wir fahren Sie Tür zu Tür bis an das Terminal Ihres Abflugs, ohne Umsteigen und ohne Parkplatzsuche.",
      "Der Preis steht vor der Fahrt fest: Er gilt pro Fahrzeug inklusive Gepäck und bleibt auch dann gültig, wenn es auf der A5 stockt. So wissen Sie schon bei der Buchung, was der Transfer kostet.",
    ],
  },
  {
    h: "Terminal 1, Terminal 2 und Terminal 3",
    p: [
      "Wir fahren Sie direkt an die richtige Terminaltür. Terminal 1 bedient überwiegend Lufthansa und Star-Alliance-Partner, Terminal 2 vor allem andere Allianzen und Ferienflieger. Nennen Sie uns Airline und Flugnummer, dann fahren wir den passenden Zugang an – das spart Ihnen Wege mit Gepäck und den Skyline-Shuttle.",
      "Mit der Eröffnung von Terminal 3 im Süden des Flughafens ändert sich die Zufahrt vollständig. Auch dort setzen wir Sie direkt an der Vorfahrt ab.",
    ],
  },
  {
    h: "Abholung mit Flugüberwachung und Namensschild",
    p: [
      "Bei Abholungen prüfen wir Ihre Flugnummer und richten die Ankunftszeit nach der tatsächlichen Landung. Verspätet sich Ihr Flug, warten wir entsprechend länger – ohne Zusatzkosten für die Verspätung.",
      "Auf Wunsch erwartet Sie unser Fahrer mit einem Namensschild in der Ankunftshalle (Meet & Greet) und hilft beim Gepäck bis zum Fahrzeug. Für Gäste, die zum ersten Mal in Frankfurt landen, ist das die einfachste Variante.",
    ],
  },
  {
    h: "Frühflüge, Nachtankünfte und Geschäftsreisen",
    p: [
      "Viele Interkontinentalflüge starten zwischen 06:00 und 07:00 Uhr – das bedeutet Abfahrt mitten in der Nacht. Genau dafür gibt es Vorbestellungen: Wir sind zur vereinbarten Zeit vor der Tür, auch um 03:30 Uhr.",
      "Für Geschäftsreisende fahren wir diskret, ruhig und pünktlich, stellen auf Wunsch eine Rechnung aus und richten für Firmen feste Ansprechpartner und wiederkehrende Fahrten ein.",
    ],
  },
  {
    h: "Gepäck, Kindersitze und Gruppen",
    p: [
      "Anders als bei der Bahn gibt es bei uns keine Gepäckgrenze: Koffer, Kinderwagen, Golfbag oder Skiausrüstung nehmen wir mit – wir wählen einfach das passende Fahrzeug. Für Gruppen bis acht Personen setzen wir einen Van ein.",
      "Kindersitze und Sitzerhöhungen stellen wir kostenlos bereit. Bitte geben Sie Alter und Anzahl der Kinder bei der Buchung an, damit alles vorbereitet ist.",
    ],
    list: [
      "Limousine für bis zu 4 Personen",
      "Van für bis zu 8 Personen",
      "Kindersitze kostenlos",
      "Rollstuhlgerechtes Fahrzeug auf Anfrage",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Was kostet ein Taxi zum Flughafen Frankfurt?",
    a: "Wir arbeiten mit Festpreisen je Startort: zum Beispiel 63 € ab Rosbach, 67 € ab Friedberg, 69 € ab Bad Nauheim, 75 € ab Karben und 95 € ab Butzbach. Der Preis gilt pro Fahrzeug inklusive Gepäck.",
  },
  {
    q: "Wie lange dauert die Fahrt zum Flughafen Frankfurt?",
    a: "Ab Friedberg oder Bad Nauheim je nach Verkehrslage 35 bis 55 Minuten, ab Butzbach etwas länger. Zu Stoßzeiten planen wir zusätzlichen Puffer ein.",
  },
  {
    q: "Überwachen Sie meinen Flug?",
    a: "Ja. Geben Sie uns die Flugnummer, dann passen wir die Abholzeit an die tatsächliche Landung an. Verspätungen berechnen wir nicht als Wartezeit.",
  },
  {
    q: "Werde ich direkt am Terminal abgesetzt?",
    a: "Ja, wir fahren die Vorfahrt des Terminals an, von dem Ihr Flug startet. Nennen Sie uns Airline und Flugnummer.",
  },
  {
    q: "Fahren Sie auch nachts zum Flughafen?",
    a: "Ja, mit Vorbestellung sind Abfahrten rund um die Uhr möglich, auch mitten in der Nacht.",
  },
  {
    q: "Wie bezahle ich?",
    a: "Bar, mit Karte, per PayPal oder per Überweisung. Auf Wunsch stellen wir eine Rechnung für die Reisekostenabrechnung aus.",
  },
];

const FrankfurtAirport = () => {
  const { t } = useLanguage();
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Flughafentransfer Frankfurt", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title="Flughafentransfer Frankfurt | Taxi ab Friedberg zum Festpreis"
        description="Taxi zum Flughafen Frankfurt ab Friedberg, Bad Nauheim, Butzbach und der Wetterau. Festpreise ab 63 €, Flugüberwachung, Abholung mit Namensschild, 24/7."
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: "Flughafentransfer Frankfurt",
            description:
              "Taxi- und Mietwagentransfer zum Flughafen Frankfurt aus Friedberg und der Wetterau zum Festpreis, inklusive Flugüberwachung und Meet & Greet.",
            path,
            areaServed: ["Friedberg", "Bad Nauheim", "Butzbach", "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">Flughafentransfer Frankfurt – Festpreis ab 63 €</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Pünktlich zum Terminal, ohne Parkplatzsuche und ohne Taxameter-Überraschung: Wir fahren Sie
          aus Friedberg, Bad Nauheim, Butzbach und der gesamten Wetterau zum Flughafen Frankfurt –
          und holen Sie dort wieder ab.
        </p>
      </section>

      {/* Preistabelle */}
      <section className="container mx-auto px-4 py-10" aria-labelledby="preise">
        <h2 id="preise" className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Festpreise zum Flughafen Frankfurt</span>
        </h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <caption className="sr-only">Festpreise zum Flughafen Frankfurt nach Startort</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 text-sm font-semibold text-foreground">Startort</th>
                <th scope="col" className="p-4 text-sm font-semibold text-foreground">PLZ</th>
                <th scope="col" className="p-4 text-sm font-semibold text-foreground text-right">Festpreis</th>
              </tr>
            </thead>
            <tbody>
              {cityPages.map((c) => (
                <tr key={c.slug} className="border-b border-border/50 last:border-0">
                  <td className="p-4 text-sm text-foreground">{c.city}</td>
                  <td className="p-4 text-sm text-muted-foreground">{c.postalCode}</td>
                  <td className="p-4 text-sm font-semibold text-primary text-right">{c.airportPrice} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Weitere Orte der Wetterau auf Anfrage. Preise gelten pro Fahrzeug inklusive Gepäck.
        </p>
      </section>

      <section className="container mx-auto px-4 py-6 max-w-4xl">
        <ContentSections sections={sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Häufige Fragen zum Flughafentransfer</span>
        </h2>
        <FaqAccordion faqs={faqs} idPrefix="fra" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title="Flughafentransfer buchen"
          waMessage="Hallo MiniTAXI Royal, ich möchte einen Flughafentransfer nach Frankfurt buchen."
        />
        <LinkGrid
          title={t("hub.airports")}
          items={airportPages.map((a) => ({
            to: `/flughafentransfer/${a.slug}`,
            label: a.airport,
            sub: `${a.code} · ${a.durationText}`,
          }))}
        />
        <LinkGrid
          title={t("hub.cities")}
          items={cityPages.map((c) => ({
            to: `/taxi/${c.slug}`,
            label: `Taxi ${c.city}`,
            sub: `Flughafen ab ${c.airportPrice} €`,
          }))}
        />
      </section>
    </PageShell>
  );
};

export default FrankfurtAirport;
