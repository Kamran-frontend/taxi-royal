import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import type { ContentSection, Faq } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

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
      "Anders als bei der Bahn gibt es bei uns keine Gepäckgrenze: Koffer, Kinderwagen, Golfbag oder Skiausrüstung nehmen wir mit – wir wählen einfach das passende Fahrzeug. Für Gruppen bis sechs Personen setzen wir einen Van ein.",
      "Kindersitze und Sitzerhöhungen stellen wir kostenlos bereit. Bitte geben Sie Alter und Anzahl der Kinder bei der Buchung an, damit alles vorbereitet ist.",
    ],
    list: [
      "Limousine für bis zu 4 Personen",
      "Van für bis zu 6 Personen",
      "Kindersitze kostenlos",
      "Rollstuhlgerechtes Fahrzeug auf Anfrage",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Was kostet ein Taxi zum Flughafen Frankfurt?",
    a: "Wir arbeiten mit Festpreisen je Startort: zum Beispiel 63 € ab Rosbach, 67 € ab Friedberg und Umgebung, 69 € ab Bad Nauheim, 75 € ab Karben und 95 € ab Butzbach. Der Preis gilt pro Fahrzeug inklusive Gepäck.",
  },
  {
    q: "Wie lange dauert die Fahrt zum Flughafen Frankfurt?",
    a: "Ab Friedberg und Umgebung oder Bad Nauheim je nach Verkehrslage 35 bis 55 Minuten, ab Butzbach etwas länger. Zu Stoßzeiten planen wir zusätzlichen Puffer ein.",
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

const sectionsEn: ContentSection[] = [
  { h: "Frankfurt Airport transfers from the Wetterau at a fixed price", p: ["Frankfurt Airport is Germany's largest aviation hub and can be reached from Friedberg, Bad Nauheim, Butzbach and the wider Wetterau in around 40 to 60 minutes. We take you door-to-door to your departure terminal without changes or parking searches.", "Your price is fixed before departure, applies to the whole vehicle including luggage and remains unchanged in traffic jams."] },
  { h: "Terminals 1, 2 and 3", p: ["We take you directly to the correct terminal entrance. Tell us your airline and flight number so we can select the most convenient access point and save you a long walk with luggage.", "Terminal 3 has a completely separate approach in the south of the airport. We also drop you directly at its departure frontage."] },
  { h: "Pickup with flight tracking and name sign", p: ["For airport pickups, we monitor your flight number and adjust the arrival time to the actual landing. If your flight is delayed, we wait accordingly without charging for the flight delay.", "On request, your driver meets you with a name sign in arrivals and helps with luggage to the vehicle. This Meet & Greet service is ideal for first-time visitors."] },
  { h: "Early flights, night arrivals and business travel", p: ["Many intercontinental flights depart between 06:00 and 07:00, requiring a night-time pickup. With a pre-booking, we arrive at the agreed time, including at 03:30.", "Business travellers benefit from a discreet, quiet and punctual service, invoices on request and recurring journeys with a fixed contact person."] },
  { h: "Luggage, child seats and groups", p: ["Suitcases, pushchairs, golf bags and ski equipment are welcome; we select the suitable vehicle for your luggage. Our seven-seat van carries up to six passengers.", "Child seats and booster seats are provided free of charge. Please tell us the children's ages and number when booking."], list: ["Saloon for up to 4 passengers", "Seven-seat van for up to 6 passengers", "Free child seats", "Wheelchair-accessible vehicle on request"] },
];

const faqsEn: Faq[] = [
  { q: "How much is a taxi to Frankfurt Airport?", a: "We offer fixed prices by pickup location, for example €63 from Rosbach, €67 from Friedberg and the surrounding area, €69 from Bad Nauheim, €75 from Karben and €95 from Butzbach. The price covers the vehicle and luggage." },
  { q: "How long does the journey to Frankfurt Airport take?", a: "Allow around 35 to 55 minutes from Friedberg and the surrounding area or Bad Nauheim, depending on traffic, and slightly longer from Butzbach. We add extra time during peak hours." },
  { q: "Do you track my flight?", a: "Yes. Give us your flight number and we adjust the pickup to the actual landing time. Flight delays are not charged as waiting time." },
  { q: "Will you drop me directly at my terminal?", a: "Yes. We use the departure frontage for your terminal. Please provide the airline and flight number." },
  { q: "Do you drive to the airport at night?", a: "Yes. Night-time departures can be arranged anytime by pre-booking and on request." },
  { q: "How can I pay?", a: "By cash, card, PayPal or bank transfer. We can also issue an invoice for expenses." },
];

const FrankfurtAirport = () => {
  const { t, language } = useLanguage();
  const { airports, cities } = useLocalizedContent();
  const de = language === "de";
  const pageSections = de ? sections : sectionsEn;
  const pageFaqs = de ? faqs : faqsEn;
  const crumbs = [
    { name: de ? "Start" : "Home", path: "/" },
    { name: de ? "Flughafentransfer Frankfurt" : "Frankfurt Airport transfer", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={de ? "Flughafentransfer Frankfurt | Taxi ab Friedberg und Umgebung zum Festpreis" : "Frankfurt Airport Transfer | Fixed-price Taxi from Friedberg and Nearby"}
        description={de ? "Taxi zum Flughafen Frankfurt ab Friedberg und Umgebung, Bad Nauheim, Butzbach und der Wetterau. Festpreise ab 63 €, Flugüberwachung und jederzeitige Vorbestellung auf Anfrage." : "Taxi to Frankfurt Airport from Friedberg and the surrounding area, Bad Nauheim, Butzbach and the Wetterau. Fixed prices from €63 with flight tracking."}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: de ? "Flughafentransfer Frankfurt" : "Frankfurt Airport transfer",
            description: de ? "Taxi- und Mietwagentransfer zum Flughafen Frankfurt aus Friedberg und der Wetterau zum Festpreis, inklusive Flugüberwachung und Meet & Greet." : "Fixed-price taxi and private-hire transfer to Frankfurt Airport from Friedberg and the Wetterau, including flight tracking and Meet & Greet.",
            path,
            areaServed: ["Friedberg", "Bad Nauheim", "Butzbach", "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(pageFaqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{de ? "Flughafentransfer Frankfurt – Festpreis ab 63 €" : "Frankfurt Airport transfer – fixed prices from €63"}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {de ? "Pünktlich zum Terminal, ohne Parkplatzsuche und ohne Taxameter-Überraschung: Wir fahren Sie aus Friedberg, Bad Nauheim, Butzbach und der gesamten Wetterau zum Flughafen Frankfurt – und holen Sie dort wieder ab." : "Reach your terminal on time without parking searches or meter surprises. We drive from Friedberg, Bad Nauheim, Butzbach and across the Wetterau to Frankfurt Airport and collect you again."}
        </p>
      </section>

      {/* Preistabelle */}
      <section className="container mx-auto px-4 py-10" aria-labelledby="preise">
        <h2 id="preise" className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">{de ? "Festpreise zum Flughafen Frankfurt" : "Fixed prices to Frankfurt Airport"}</span>
        </h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <caption className="sr-only">{de ? "Festpreise zum Flughafen Frankfurt nach Startort" : "Fixed prices to Frankfurt Airport by pickup location"}</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 text-sm font-semibold text-foreground">{de ? "Startort" : "Pickup"}</th>
                <th scope="col" className="p-4 text-sm font-semibold text-foreground">{de ? "PLZ" : "Postcode"}</th>
                <th scope="col" className="p-4 text-sm font-semibold text-foreground text-right">{de ? "Festpreis" : "Fixed price"}</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c) => (
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
          {de ? "Weitere Orte der Wetterau auf Anfrage. Preise gelten pro Fahrzeug inklusive Gepäck." : "Other Wetterau pickup locations are available on request. Prices apply per vehicle and include luggage."}
        </p>
      </section>

      <section className="container mx-auto px-4 py-6 max-w-4xl">
        <ContentSections sections={pageSections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">{de ? "Häufige Fragen zum Flughafentransfer" : "Frequently asked questions about airport transfers"}</span>
        </h2>
        <FaqAccordion faqs={pageFaqs} idPrefix="fra" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={de ? "Flughafentransfer buchen" : "Book an airport transfer"}
          waMessage={de ? "Hallo MiniTAXI Royal, ich möchte einen Flughafentransfer nach Frankfurt buchen." : "Hello MiniTAXI Royal, I would like to book a transfer to Frankfurt Airport."}
        />
        <LinkGrid
          title={t("hub.airports")}
          items={airports.map((a) => ({
            to: `/flughafentransfer/${a.slug}`,
            label: a.airport,
            sub: `${a.code} · ${a.durationText}`,
          }))}
        />
        <LinkGrid
          title={t("hub.cities")}
          items={cities.map((c) => ({
            to: `/taxi/${c.slug}`,
            label: `Taxi ${c.city}`,
            sub: `${de ? "Flughafen ab" : "Airport from"} ${c.airportPrice} €`,
          }))}
        />
      </section>
    </PageShell>
  );
};

export default FrankfurtAirport;
