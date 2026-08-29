import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { longDistanceRoutes } from "@/data/longDistance";
import type { ContentSection, Faq } from "@/data/types";

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
      "Limousine oder Van bis 8 Personen",
      "Hin- und Rückfahrt kombinierbar",
      "Rechnung für Firmen möglich",
      "24/7 auf Vorbestellung",
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
    a: "In der Limousine bis zu vier, im Van bis zu acht Personen inklusive Gepäck.",
  },
  {
    q: "Fahren Sie auch Ziele, die hier nicht gelistet sind?",
    a: "Ja, wir fahren jedes Ziel in Deutschland und Europa. Fragen Sie einfach nach einem Angebot.",
  },
];

const LongDistance = () => {
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Fernfahrten", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title="Fernfahrten mit Taxi & Fahrer | Europaweit ab Friedberg"
        description="Fernfahrten ab Friedberg, Frankfurt und der Wetterau: Paris, Amsterdam, Zürich, Wien, Prag, Brüssel, Mailand, München, Berlin. Festpreis, Tür zu Tür, 24/7."
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: "Fernfahrten und Langstreckentransfer",
            description:
              "Langstreckenfahrten mit Fahrer ab Friedberg und Frankfurt in ganz Deutschland und Europa zum Festpreis.",
            path,
            areaServed: ["Deutschland", "Frankreich", "Niederlande", "Schweiz", "Österreich", "Tschechien", "Belgien", "Italien"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">Fernfahrten ab Friedberg – deutschland- und europaweit</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Direkt, ohne Umsteigen und zum verbindlichen Festpreis: Wir bringen Sie von der Wetterau in
          jede größere Stadt Europas – mit Gepäck, Familie oder Team.
        </p>
      </section>

      <section className="container mx-auto px-4 py-10">
        <LinkGrid
          title="Beliebte Strecken"
          items={longDistanceRoutes.map((r) => ({
            to: `/fernfahrten/${r.slug}`,
            label: `Taxi Friedberg – ${r.city}`,
            sub: `${r.country} · ca. ${r.distanceKm} km · ${r.durationText}`,
          }))}
        />
      </section>

      <section className="container mx-auto px-4 py-6 max-w-4xl">
        <ContentSections sections={sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Häufige Fragen zu Fernfahrten</span>
        </h2>
        <FaqAccordion faqs={faqs} idPrefix="fern" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title="Angebot für Ihre Fernfahrt"
          waMessage="Hallo MiniTAXI Royal, ich möchte ein Angebot für eine Fernfahrt."
        />
      </section>
    </PageShell>
  );
};

export default LongDistance;
