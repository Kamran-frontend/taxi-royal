import { useParams, Navigate } from "react-router-dom";
import { Clock, MapPin, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { getRoute, longDistanceRoutes } from "@/data/longDistance";
import { useLanguage } from "@/contexts/LanguageContext";

const RoutePage = () => {
  const { slug } = useParams();
  const route = getRoute(slug);
  const { t } = useLanguage();

  if (!route) return <Navigate to="/fernfahrten" replace />;

  const path = `/fernfahrten/${route.slug}`;
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Fernfahrten", path: "/fernfahrten" },
    { name: route.city, path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={route.title}
        description={route.description}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: `Taxi & Transfer Friedberg – ${route.city}`,
            description: route.description,
            path,
            areaServed: ["Friedberg", "Frankfurt am Main", route.city, route.country],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(route.faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{route.h1}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{route.lead}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            ca. {route.distanceKm} km · {route.country}
          </span>
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
            {route.durationText}
          </span>
        </div>

        <div className="glass-card rounded-2xl p-5 md:p-6 mt-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
            {t("hub.highlights")}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[...route.highlights, "Rollstuhlgerechtes Fahrzeug auf Anfrage"].map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <ContentSections sections={route.sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Häufige Fragen zur Fahrt nach {route.city}</span>
        </h2>
        <FaqAccordion faqs={route.faqs} idPrefix={route.slug} />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={`Fahrt nach ${route.city} anfragen`}
          waMessage={`Hallo MiniTAXI Royal, ich möchte ein Angebot für eine Fahrt nach ${route.city}.`}
        />
        <LinkGrid
          title={t("hub.relatedRoutes")}
          items={longDistanceRoutes
            .filter((r) => r.slug !== route.slug)
            .slice(0, 6)
            .map((r) => ({
              to: `/fernfahrten/${r.slug}`,
              label: `Taxi Friedberg – ${r.city}`,
              sub: `${r.country} · ca. ${r.distanceKm} km`,
            }))}
        />
      </section>
    </PageShell>
  );
};

export default RoutePage;
