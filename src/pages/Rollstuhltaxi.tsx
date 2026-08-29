import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";
import { cityPages } from "@/data/cities";
import type { ContentSection, Faq } from "@/data/types";

const path = "/rollstuhltaxi";

const sections: ContentSection[] = [
  {
    h: "Barrierefrei unterwegs in Friedberg und der Wetterau",
    p: [
      "Mobilität darf nicht am Fahrzeug scheitern. Unser rollstuhlgerechtes Fahrzeug verfügt über eine belastbare Auffahrrampe und ein Vier-Punkt-Gurtsystem, mit dem der Rollstuhl sicher im Fahrzeug fixiert wird. Sie bleiben während der gesamten Fahrt in Ihrem eigenen Rollstuhl sitzen – Umsetzen ist nicht nötig.",
      "Unsere Fahrer sind im Umgang mit Rampe, Sicherungssystem und Rollstuhltypen geschult, nehmen sich Zeit und helfen beim Ein- und Aussteigen sowie an der Haustür, im Aufzug und bis zur Anmeldung von Praxis oder Klinik.",
    ],
  },
  {
    h: "Für welche Fahrten wir eingesetzt werden",
    p: [
      "Am häufigsten fahren wir Arzt- und Klinikbesuche, Dialyse, Chemo- und Strahlentherapie, Reha-Termine sowie Kontrolluntersuchungen. Ebenso wichtig sind aber die Fahrten, die Lebensqualität ausmachen: Familienbesuche, Einkäufe, Gottesdienste, Vereinstreffen, Friseurtermine oder ein Ausflug.",
    ],
    list: [
      "Dialyse- und Therapiefahrten",
      "Klinik- und Reha-Transporte",
      "Arzt- und Facharzttermine",
      "Familienbesuche und Feiern",
      "Einkaufs- und Behördenfahrten",
      "Flughafentransfer barrierefrei",
    ],
  },
  {
    h: "Was Sie bei der Buchung angeben sollten",
    p: [
      "Damit alles passt, brauchen wir wenige Angaben: Art des Rollstuhls (Falt-, Aktiv- oder Elektrorollstuhl), ungefähres Gewicht und Maße, ob eine Begleitperson mitfährt und ob es an der Abholadresse Stufen oder einen Aufzug gibt.",
      "Weil nur ein Teil unserer Flotte umgebaut ist, empfehlen wir eine Vorbestellung von mindestens 24 Stunden. Bei regelmäßigen Terminen richten wir gerne einen festen Fahrplan mit möglichst gleichbleibendem Fahrer ein.",
    ],
  },
  {
    h: "Krankenfahrten und Kostenübernahme",
    p: [
      "Viele Fahrten zu medizinischen Terminen können über die Krankenkasse abgerechnet werden. Grundlage ist eine ärztliche Verordnung einer Krankenbeförderung; bei ambulanten Behandlungen ist in der Regel zusätzlich eine Genehmigung der Kasse nötig – ausgenommen sind bestimmte Dauerbehandlungen wie Dialyse oder onkologische Therapien.",
      "Wir kennen den Ablauf und beraten Sie unverbindlich. Bringen Sie die Verordnung zur Fahrt mit; alles Weitere klären wir gemeinsam.",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Kann ich im Rollstuhl sitzen bleiben?",
    a: "Ja. Der Rollstuhl wird über eine Rampe ins Fahrzeug gefahren und mit einem Vier-Punkt-Gurtsystem gesichert; Sie werden zusätzlich mit Becken- und Schultergurt gesichert.",
  },
  {
    q: "Sind auch Elektrorollstühle möglich?",
    a: "In der Regel ja. Bitte nennen Sie uns Gewicht und Maße bei der Buchung, damit wir die Eignung prüfen können.",
  },
  {
    q: "Wie früh muss ich buchen?",
    a: "Wir empfehlen mindestens 24 Stunden Vorlauf, da nur ein Teil unserer Fahrzeuge rollstuhlgerecht ausgestattet ist.",
  },
  {
    q: "Darf eine Begleitperson mitfahren?",
    a: "Ja, in der Regel ohne Aufpreis. Bitte bei der Bestellung angeben, damit wir den Platz einplanen.",
  },
  {
    q: "Übernimmt die Krankenkasse die Kosten?",
    a: "Bei medizinisch notwendigen Fahrten häufig ja – Voraussetzung ist eine ärztliche Verordnung und je nach Behandlungsart eine Genehmigung der Krankenkasse. Wir beraten Sie gerne.",
  },
  {
    q: "Helfen die Fahrer beim Ein- und Aussteigen?",
    a: "Selbstverständlich. Auf Wunsch begleiten wir Sie von der Wohnungstür bis zur Anmeldung und wieder zurück.",
  },
];

const Rollstuhltaxi = () => {
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Rollstuhltaxi", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title="Rollstuhltaxi Friedberg & Wetterau | Barrierefreie Fahrten"
        description="Rollstuhlgerechtes Taxi mit Rampe in Friedberg, Bad Nauheim und der Wetterau: Krankenfahrten, Dialyse, Reha und Alltagsfahrten. Jetzt buchen: 0171 1670001."
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: "Rollstuhltaxi und barrierefreie Krankenfahrten",
            description:
              "Barrierefreier Fahrdienst mit Rampe und Rollstuhlsicherung für Friedberg, Bad Nauheim, Butzbach und die Wetterau.",
            path,
            areaServed: ["Friedberg", "Bad Nauheim", "Butzbach", "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">Rollstuhltaxi Friedberg – barrierefrei und sicher</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Mit Rampe, Rollstuhlsicherung und geschulten Fahrern bringen wir Sie zu Arztterminen, zur
          Dialyse, zur Reha – oder einfach dorthin, wo Sie hinmöchten.
        </p>
        <img
          src={wheelchairAccessible}
          alt="Rollstuhlgerechtes Taxi von MiniTAXI Royal mit Auffahrrampe"
          className="mt-8 w-full max-w-3xl rounded-2xl object-cover"
          loading="lazy"
          width="1024"
          height="576"
        />
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <ContentSections sections={sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Häufige Fragen zum Rollstuhltaxi</span>
        </h2>
        <FaqAccordion faqs={faqs} idPrefix="wheel" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title="Barrierefreie Fahrt anfragen"
          waMessage="Hallo MiniTAXI Royal, ich benötige ein rollstuhlgerechtes Fahrzeug."
        />
        <LinkGrid
          title="Rollstuhltaxi in Ihrer Stadt"
          items={cityPages.map((c) => ({
            to: `/taxi/${c.slug}`,
            label: `Taxi ${c.city}`,
            sub: "Barrierefreie Fahrten auf Vorbestellung",
          }))}
        />
      </section>
    </PageShell>
  );
};

export default Rollstuhltaxi;
