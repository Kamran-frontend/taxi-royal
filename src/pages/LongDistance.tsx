import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { longDistanceRoutes } from "@/data/longDistance";
import type { ContentSection, Faq } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const path = "/fernfahrten";

const sections: ContentSection[] = [
  {
    h: "Fernfahrten mit Fahrer – deutschland- und europaweit",
    p: [
      "Nicht jede Reise gehört ins Flugzeug oder in den Zug. Bei Strecken bis rund 800 Kilometern ist eine Direktfahrt oft die entspannteste Lösung: Sie steigen an Ihrer Haustür ein, fahren ohne Umstieg und ohne Gepäckgrenze und steigen erst am Ziel wieder aus.",
      "Wir fahren regelmäßig nach Paris, Amsterdam, Zürich, Wien, Prag, Brüssel, Luxemburg, Mailand sowie in alle größeren deutschen Städte – privat, geschäftlich, für Kur- und Klinikaufenthalte oder als Urlaubsanreise.",
    ],
  },
  {
    h: "Festpreis inklusive Maut, Vignette und Kraftstoff",
    p: [
      "Sie erhalten vor der Buchung ein verbindliches Festpreisangebot. Darin enthalten sind alle Streckenkosten wie Maut, Vignetten, Kraftstoff und die Rückfahrt des Fahrzeugs. Nachberechnungen gibt es nicht.",
      "Der Preis gilt für das Fahrzeug, nicht pro Person. Ab drei bis vier Mitreisenden ist eine Fernfahrt deshalb häufig günstiger als einzelne flexible Bahn- oder Flugtickets.",
    ],
  },
  {
    h: "Komfort, Sicherheit und Planung",
    p: [
      "Für lange Etappen setzen wir gepflegte, klimatisierte Fahrzeuge mit viel Beinfreiheit, Ladebuchsen und Platz für großes Gepäck ein. Pausen richten sich nach Ihrem Bedarf; auf sehr langen Strecken können wir auf Wunsch mit zwei Fahrern planen.",
      "Für Fernfahrten empfehlen wir eine Vorlaufzeit von 24 bis 48 Stunden. Kurzfristige Anfragen prüfen wir gerne – rufen Sie einfach an.",
    ],
    list: [
      "Tür-zu-Tür ohne Umsteigen",
      "Verbindlicher Festpreis vorab",
      "Limousine oder Van bis 6 Personen",
      "Hin- und Rückfahrt kombinierbar",
      "Rechnung für Firmen möglich",
      "Rollstuhlgerechte Fernfahrten auf Anfrage",
      "Vorbestellung jederzeit auf Anfrage",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Wie werden Fernfahrten abgerechnet?",
    a: "Zum vorab vereinbarten Festpreis. Maut, Vignetten, Kraftstoff und Rückfahrt des Fahrzeugs sind enthalten.",
  },
  {
    q: "Wie weit im Voraus muss ich buchen?",
    a: "Idealerweise 24 bis 48 Stunden. Kurzfristige Anfragen prüfen wir gerne telefonisch unter 0171 1670001.",
  },
  {
    q: "Kann ich Zwischenstopps einplanen?",
    a: "Ja. Nennen Sie gewünschte Stopps bei der Anfrage, damit wir sie im Festpreis berücksichtigen.",
  },
  {
    q: "Wie viele Personen können mitfahren?",
    a: "In der Limousine bis zu vier, im Van bis zu sechs Personen inklusive Gepäck.",
  },
  {
    q: "Fahren Sie auch Ziele, die hier nicht gelistet sind?",
    a: "Ja, wir fahren jedes Ziel in Deutschland und Europa. Fragen Sie einfach nach einem Angebot.",
  },
  {
    q: "Sind Fernfahrten mit Rollstuhl möglich?",
    a: "Ja. Rollstuhlgerechte Fernfahrten sind mit unserem Fahrzeug mit Rampe und Rollstuhlsicherung auf Anfrage möglich. Bitte geben Sie Rollstuhltyp, Maße und Gewicht bei der Buchung an.",
  },
];

const sectionsEn: ContentSection[] = [
  { h: "Long-distance rides with a driver across Germany and Europe", p: ["Not every journey is best made by plane or train. For distances up to around 800 kilometres, a direct ride is often the most relaxing option: door-to-door, without changes or luggage limits.", "We regularly travel to Paris, Amsterdam, Zurich, Vienna, Prague, Brussels, Luxembourg, Milan and major German cities for private trips, business travel, clinic stays and holidays."] },
  { h: "Fixed price including tolls, vignettes and fuel", p: ["Before booking, you receive a binding fixed-price quote covering tolls, vignettes, fuel and the vehicle's return journey. There are no later surcharges.", "The price applies to the vehicle, not per person. With three or four passengers, a direct ride can therefore cost less than flexible individual rail or air tickets."] },
  { h: "Comfort, safety and planning", p: ["For long journeys, we use clean, air-conditioned vehicles with generous legroom, charging points and space for large luggage. Breaks follow your needs; two drivers can be arranged for very long routes.", "We recommend booking 24 to 48 hours ahead. We are also happy to check short-notice requests by phone."], list: ["Door-to-door without changes", "Binding fixed price in advance", "Saloon or seven-seat van for up to six passengers", "Combined outward and return journey", "Business invoices available", "Wheelchair-accessible long-distance rides on request", "Pre-orders available anytime on request"] },
];

const faqsEn: Faq[] = [
  { q: "How are long-distance rides charged?", a: "At the fixed price agreed in advance. Tolls, vignettes, fuel and the vehicle's return journey are included." },
  { q: "How far ahead should I book?", a: "Ideally 24 to 48 hours. We are happy to check short-notice requests by phone on 0171 1670001." },
  { q: "Can I plan stops along the way?", a: "Yes. Tell us your requested stops so we can include them in the fixed-price quote." },
  { q: "How many passengers can travel?", a: "Up to four in a saloon and up to six passengers plus luggage in our seven-seat van." },
  { q: "Do you serve destinations not listed here?", a: "Yes. We drive to any destination in Germany and Europe. Simply ask us for a quote." },
  { q: "Are wheelchair-accessible long-distance rides available?", a: "Yes. Our vehicle with a ramp and wheelchair restraint system is available on request. Please provide the wheelchair type, dimensions and weight when booking." },
];

const LongDistance = () => {
  const { language } = useLanguage();
  const { routes } = useLocalizedContent();
  const de = language === "de";
  const pageSections = de ? sections : sectionsEn;
  const pageFaqs = de ? faqs : faqsEn;
  const crumbs = [
    { name: de ? "Start" : "Home", path: "/" },
    { name: de ? "Fernfahrten" : "Long-distance rides", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={de ? "Fernfahrten mit Taxi & Fahrer | Europaweit ab Friedberg und Umgebung" : "Long-distance Taxi Rides | Across Europe from Friedberg and Nearby"}
        description={de ? "Fernfahrten ab Friedberg und Umgebung, Frankfurt und der Wetterau: Paris, Amsterdam, Zürich, Wien, Prag, Brüssel, Mailand, München und Berlin. Festpreis und rollstuhlgerecht auf Anfrage." : "Long-distance rides from Friedberg and the surrounding area, Frankfurt and the Wetterau to destinations across Germany and Europe. Fixed prices and accessible vehicles on request."}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: de ? "Fernfahrten und Langstreckentransfer" : "Long-distance rides and transfers",
            description: de ? "Langstreckenfahrten mit Fahrer ab Friedberg und Umgebung sowie Frankfurt in ganz Deutschland und Europa zum Festpreis." : "Fixed-price long-distance rides with a driver from Friedberg and the surrounding area or Frankfurt throughout Germany and Europe.",
            path,
            areaServed: ["Deutschland", "Frankreich", "Niederlande", "Schweiz", "Österreich", "Tschechien", "Belgien", "Italien"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(pageFaqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{de ? "Fernfahrten ab Friedberg und Umgebung – deutschland- und europaweit" : "Long-distance rides from Friedberg and the surrounding area – across Germany and Europe"}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {de ? "Direkt, ohne Umsteigen und zum verbindlichen Festpreis: Wir bringen Sie von der Wetterau in jede größere Stadt Europas – mit Gepäck, Familie oder Team." : "Direct, without changes and at a binding fixed price: we take you from the Wetterau to major cities across Europe with luggage, family or colleagues."}
        </p>
      </section>

      <section className="container mx-auto px-4 py-10">
        <LinkGrid
          title={de ? "Beliebte Strecken" : "Popular routes"}
          items={routes.map((r) => ({
            to: `/fernfahrten/${r.slug}`,
            label: `${de ? "Taxi Friedberg und Umgebung" : "Taxi Friedberg and surrounding area"} – ${r.city}`,
            sub: `${r.country} · ${de ? "ca." : "approx."} ${r.distanceKm} km · ${r.durationText}`,
          }))}
        />
      </section>

      <section className="container mx-auto px-4 py-6 max-w-4xl">
        <ContentSections sections={pageSections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">{de ? "Häufige Fragen zu Fernfahrten" : "Frequently asked questions about long-distance rides"}</span>
        </h2>
        <FaqAccordion faqs={pageFaqs} idPrefix="fern" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={de ? "Angebot für Ihre Fernfahrt" : "Request a long-distance ride quote"}
          waMessage={de ? "Hallo MiniTAXI Royal, ich möchte ein Angebot für eine Fernfahrt." : "Hello MiniTAXI Royal, I would like a quote for a long-distance ride."}
        />
      </section>
    </PageShell>
  );
};

export default LongDistance;
