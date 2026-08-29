import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/components/Seo";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import LinkGrid from "@/components/LinkGrid";
import { allFaqs, faqGroups } from "@/data/faqs";

const path = "/faq";

const FaqPage = () => {
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Häufige Fragen", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title="Häufige Fragen | MiniTAXI Royal Friedberg"
        description="Antworten zu Buchung, Preisen, Flughafentransfer, Krankenfahrten und Barrierefreiheit bei MiniTAXI Royal in Friedberg und der Wetterau."
        path={path}
        schemas={[localBusinessSchema(), breadcrumbSchema(crumbs), faqSchema(allFaqs)]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">Häufige Fragen</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Alles Wichtige zu Bestellung, Preisen, Flughafentransfer, Krankenfahrten und Fernfahrten –
          kurz und klar beantwortet.
        </p>
      </section>

      <section className="container mx-auto px-4 py-10 max-w-3xl space-y-10">
        {faqGroups.map((group) => (
          <div key={group.category}>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{group.category}</h2>
            <FaqAccordion faqs={group.faqs} idPrefix={group.category} />
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title="Frage nicht dabei?"
          subtitle="Rufen Sie uns an oder schreiben Sie kurz per WhatsApp – wir antworten persönlich."
          waMessage="Hallo MiniTAXI Royal, ich habe eine Frage zu Ihrem Service."
        />
        <LinkGrid
          title="Beliebte Seiten"
          items={[
            { to: "/flughafentransfer-frankfurt", label: "Flughafentransfer Frankfurt", sub: "Festpreise ab 63 €" },
            { to: "/fernfahrten", label: "Fernfahrten europaweit", sub: "Paris, Wien, Zürich und mehr" },
            { to: "/rollstuhltaxi", label: "Rollstuhltaxi", sub: "Barrierefrei mit Rampe" },
            { to: "/taxi/friedberg", label: "Taxi Friedberg", sub: "Ihr Taxi vor Ort" },
            { to: "/ratgeber", label: "Ratgeber", sub: "Tipps rund ums Taxi" },
          ]}
        />
      </section>
    </PageShell>
  );
};

export default FaqPage;
