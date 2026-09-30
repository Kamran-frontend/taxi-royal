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
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

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

const sectionsEn: ContentSection[] = [
  { h: "Accessible travel in Friedberg and the Wetterau", p: ["Mobility should never depend on the vehicle. Our wheelchair-accessible vehicle has a sturdy ramp and a four-point restraint system that secures the wheelchair safely. You remain seated in your own wheelchair throughout the journey.", "Our drivers are trained to use the ramp and restraint system and assist at the door, in lifts and through to clinic or practice reception."] },
  { h: "Journeys we provide", p: ["We frequently provide rides to doctors, clinics, dialysis, chemotherapy, radiotherapy, rehabilitation and follow-up appointments. We also support everyday mobility for family visits, shopping, worship, club meetings, hairdresser appointments and outings."], list: ["Dialysis and therapy rides", "Clinic and rehabilitation transport", "Doctor and specialist appointments", "Family visits and celebrations", "Shopping and public-office visits", "Accessible airport transfers"] },
  { h: "Information to provide when booking", p: ["Please tell us the wheelchair type, approximate weight and dimensions, whether a companion is travelling and whether there are steps or a lift at the pickup address.", "As only part of our fleet is adapted, we recommend booking at least 24 hours ahead. Regular appointments can be arranged with a fixed schedule and, where possible, the same driver."] },
  { h: "Medical rides and cost coverage", p: ["Many medically necessary rides may be covered by your health insurer when you have a doctor's transport prescription. Outpatient treatment may also require prior approval, with exceptions for certain recurring treatments such as dialysis or oncology.", "We understand the process and are happy to advise you without obligation. Bring the prescription with you and we will clarify the remaining steps together."] },
];

const faqsEn: Faq[] = [
  { q: "Can I remain seated in my wheelchair?", a: "Yes. The wheelchair enters via a ramp and is secured with a four-point restraint system; you are additionally protected by lap and shoulder belts." },
  { q: "Can you carry electric wheelchairs?", a: "Usually, yes. Please provide the weight and dimensions when booking so we can confirm suitability." },
  { q: "How early should I book?", a: "We recommend at least 24 hours' notice because only part of our fleet is wheelchair accessible." },
  { q: "Can a companion travel with me?", a: "Yes, usually at no extra charge. Please mention this when booking so we can plan the space." },
  { q: "Will my health insurer cover the cost?", a: "Often, for medically necessary journeys. A doctor's prescription and, depending on the treatment, insurer approval may be required. We are happy to advise you." },
  { q: "Do drivers help me get in and out?", a: "Of course. On request, we accompany you from your door to reception and back again." },
];

const Rollstuhltaxi = () => {
  const { language } = useLanguage();
  const { cities } = useLocalizedContent();
  const de = language === "de";
  const pageSections = de ? sections : sectionsEn;
  const pageFaqs = de ? faqs : faqsEn;
  const crumbs = [
    { name: de ? "Start" : "Home", path: "/" },
    { name: de ? "Rollstuhltaxi" : "Wheelchair taxi", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={de ? "Rollstuhltaxi Friedberg & Wetterau | Barrierefreie Fahrten" : "Wheelchair Taxi Friedberg & Wetterau | Accessible Rides"}
        description={de ? "Rollstuhlgerechtes Taxi mit Rampe in Friedberg, Bad Nauheim und der Wetterau: Krankenfahrten, Dialyse, Reha und Alltagsfahrten. Jetzt buchen: 0171 1670001." : "Wheelchair-accessible taxi with ramp in Friedberg, Bad Nauheim and the Wetterau for medical appointments, dialysis, rehabilitation and everyday journeys."}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: de ? "Rollstuhltaxi und barrierefreie Krankenfahrten" : "Wheelchair taxi and accessible medical rides",
            description: de ? "Barrierefreier Fahrdienst mit Rampe und Rollstuhlsicherung für Friedberg, Bad Nauheim, Butzbach und die Wetterau." : "Accessible transport with a ramp and wheelchair restraints for Friedberg, Bad Nauheim, Butzbach and the Wetterau.",
            path,
            areaServed: ["Friedberg", "Bad Nauheim", "Butzbach", "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(pageFaqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{de ? "Rollstuhltaxi Friedberg – barrierefrei und sicher" : "Wheelchair taxi Friedberg – accessible and safe"}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {de ? "Mit Rampe, Rollstuhlsicherung und geschulten Fahrern bringen wir Sie zu Arztterminen, zur Dialyse, zur Reha – oder einfach dorthin, wo Sie hinmöchten." : "With a ramp, wheelchair restraints and trained drivers, we take you to medical appointments, dialysis, rehabilitation or wherever you need to go."}
        </p>
        <img
          src={wheelchairAccessible}
          alt={de ? "Rollstuhlgerechtes Taxi von MiniTAXI Royal mit Auffahrrampe" : "MiniTAXI Royal wheelchair-accessible taxi with ramp"}
          className="mt-8 w-full max-w-3xl rounded-2xl object-cover"
          loading="lazy"
          width="1024"
          height="576"
        />
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <ContentSections sections={pageSections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">{de ? "Häufige Fragen zum Rollstuhltaxi" : "Frequently asked questions about wheelchair taxis"}</span>
        </h2>
        <FaqAccordion faqs={pageFaqs} idPrefix="wheel" />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={de ? "Barrierefreie Fahrt anfragen" : "Request an accessible ride"}
          waMessage={de ? "Hallo MiniTAXI Royal, ich benötige ein rollstuhlgerechtes Fahrzeug." : "Hello MiniTAXI Royal, I need a wheelchair-accessible vehicle."}
        />
        <LinkGrid
          title={de ? "Rollstuhltaxi in Ihrer Stadt" : "Wheelchair taxis in your town"}
          items={cities.map((c) => ({
            to: `/taxi/${c.slug}`,
            label: `Taxi ${c.city}`,
            sub: de ? "Barrierefreie Fahrten auf Vorbestellung" : "Accessible rides by pre-booking",
          }))}
        />
      </section>
    </PageShell>
  );
};

export default Rollstuhltaxi;
