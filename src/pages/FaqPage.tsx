import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/components/Seo";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import LinkGrid from "@/components/LinkGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const path = "/faq";

const FaqPage = () => {
  const { language } = useLanguage();
  const { faqGroups } = useLocalizedContent();
  const allFaqs = faqGroups.flatMap((group) => group.faqs);
  const de = language === "de";
  const crumbs = [
    { name: de ? "Start" : "Home", path: "/" },
    { name: de ? "Häufige Fragen" : "Frequently asked questions", path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={de ? "Häufige Fragen | MiniTAXI Royal Friedberg" : "Frequently Asked Questions | MiniTAXI Royal Friedberg"}
        description={de ? "Antworten zu Buchung, Preisen, Flughafentransfer, Krankenfahrten und Barrierefreiheit bei MiniTAXI Royal in Friedberg und der Wetterau." : "Answers about booking, prices, airport transfers, medical rides and accessibility at MiniTAXI Royal in Friedberg and the Wetterau."}
        path={path}
        schemas={[localBusinessSchema(), breadcrumbSchema(crumbs), faqSchema(allFaqs)]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{de ? "Häufige Fragen" : "Frequently asked questions"}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {de ? "Alles Wichtige zu Bestellung, Preisen, Flughafentransfer, Krankenfahrten und Fernfahrten – kurz und klar beantwortet." : "Clear answers to everything you need to know about booking, prices, airport transfers, medical rides and long-distance travel."}
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
          title={de ? "Frage nicht dabei?" : "Can't find your question?"}
          subtitle={de ? "Rufen Sie uns an oder schreiben Sie kurz per WhatsApp – wir antworten persönlich." : "Call us or send a short WhatsApp message – we will answer personally."}
          waMessage={de ? "Hallo MiniTAXI Royal, ich habe eine Frage zu Ihrem Service." : "Hello MiniTAXI Royal, I have a question about your service."}
        />
        <LinkGrid
          title={de ? "Beliebte Seiten" : "Popular pages"}
          items={[
            { to: "/flughafentransfer-frankfurt", label: de ? "Flughafentransfer Frankfurt" : "Frankfurt Airport transfer", sub: de ? "Festpreise ab 63 €" : "Fixed prices from €63" },
            { to: "/fernfahrten", label: de ? "Fernfahrten europaweit" : "European long-distance rides", sub: de ? "Paris, Wien, Zürich und mehr" : "Paris, Vienna, Zurich and more" },
            { to: "/rollstuhltaxi", label: de ? "Rollstuhltaxi" : "Wheelchair taxi", sub: de ? "Barrierefrei mit Rampe" : "Accessible vehicle with ramp" },
            { to: "/taxi/friedberg", label: "Taxi Friedberg", sub: de ? "Ihr Taxi vor Ort" : "Your local taxi" },
            { to: "/ratgeber", label: de ? "Ratgeber" : "Guides", sub: de ? "Tipps rund ums Taxi" : "Practical taxi advice" },
          ]}
        />
      </section>
    </PageShell>
  );
};

export default FaqPage;
