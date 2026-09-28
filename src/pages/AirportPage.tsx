import { useParams, Navigate } from "react-router-dom";
import { Clock, PlaneTakeoff, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const AirportPage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const { airports } = useLocalizedContent();
  const airport = airports.find((item) => item.slug === slug);

  if (!airport) return <Navigate to="/flughafentransfer-frankfurt" replace />;

  const path = `/flughafentransfer/${airport.slug}`;
  const crumbs = [
    { name: language === "de" ? "Start" : "Home", path: "/" },
    { name: language === "de" ? "Flughafentransfer" : "Airport transfer", path: "/flughafentransfer-frankfurt" },
    { name: airport.airport, path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={airport.title}
        description={airport.description}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: `Flughafentransfer ${airport.airport}`,
            description: airport.description,
            path,
            areaServed: ["Friedberg", "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(airport.faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{airport.h1}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{airport.lead}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <PlaneTakeoff className="w-4 h-4 text-primary" aria-hidden="true" />
            {airport.code} · {language === "de" ? "ca." : "approx."} {airport.distanceKm} km
          </span>
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
            {airport.durationText}
          </span>
        </div>

        <ul className="grid sm:grid-cols-2 gap-2 mt-8 max-w-3xl">
          {airport.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-foreground glass-card rounded-xl p-3">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <ContentSections sections={airport.sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">{language === "de" ? `Fragen zum Transfer ${airport.airport}` : `Questions about transfers to ${airport.airport}`}</span>
        </h2>
        <FaqAccordion faqs={airport.faqs} idPrefix={airport.slug} />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={language === "de" ? `Transfer zum ${airport.airport} anfragen` : `Request a transfer to ${airport.airport}`}
          waMessage={language === "de" ? `Hallo MiniTAXI Royal, ich möchte einen Transfer zum ${airport.airport} anfragen.` : `Hello MiniTAXI Royal, I would like to request a transfer to ${airport.airport}.`}
        />
        <LinkGrid
          title={t("hub.airports")}
          items={[
            {
              to: "/flughafentransfer-frankfurt",
               label: language === "de" ? "Flughafentransfer Frankfurt (FRA)" : "Frankfurt Airport transfer (FRA)",
               sub: language === "de" ? "Festpreise ab 63 €" : "Fixed prices from €63",
            },
            ...airports
              .filter((a) => a.slug !== airport.slug)
              .map((a) => ({
                to: `/flughafentransfer/${a.slug}`,
                label: a.airport,
                sub: `${a.code} · ${a.durationText}`,
              })),
          ]}
        />
      </section>
    </PageShell>
  );
};

export default AirportPage;
