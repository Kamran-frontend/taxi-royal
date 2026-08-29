import { useParams, Navigate } from "react-router-dom";
import { MapPin, BadgeEuro } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { cityPages, getCity } from "@/data/cities";
import { useLanguage } from "@/contexts/LanguageContext";

const CityPage = () => {
  const { slug } = useParams();
  const city = getCity(slug);
  const { t } = useLanguage();

  if (!city) return <Navigate to="/" replace />;

  const path = `/taxi/${city.slug}`;
  const crumbs = [
    { name: "Start", path: "/" },
    { name: "Taxi vor Ort", path: "/taxi/friedberg" },
    { name: city.city, path },
  ];

  return (
    <PageShell crumbs={crumbs}>
      <Seo
        title={city.title}
        description={city.description}
        path={path}
        schemas={[
          localBusinessSchema(),
          serviceSchema({
            name: `Taxi ${city.city}`,
            description: city.description,
            path,
            areaServed: [city.city, "Wetterau", "Frankfurt am Main"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(city.faqs),
        ]}
      />

      <section className="container mx-auto px-4 pt-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          <span className="gold-text">{city.h1}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{city.lead}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            {city.postalCode} {city.city}
          </span>
          <span className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
            <BadgeEuro className="w-4 h-4 text-primary" aria-hidden="true" />
            Flughafen Frankfurt: {city.airportPrice} € Festpreis
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass-card rounded-2xl p-5">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-2">Stadtteile, die wir anfahren</h2>
            <p className="text-sm text-muted-foreground">{city.districts.join(" · ")}</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-2">Beliebte Ziele</h2>
            <p className="text-sm text-muted-foreground">{city.landmarks.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <ContentSections sections={city.sections} />
      </section>

      <TrustBadges />

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          <span className="gold-text">Häufige Fragen zum Taxi in {city.city}</span>
        </h2>
        <FaqAccordion faqs={city.faqs} idPrefix={city.slug} />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={`Taxi in ${city.city} bestellen`}
          waMessage={`Hallo MiniTAXI Royal, ich möchte ein Taxi in ${city.city} bestellen.`}
        />
        <LinkGrid
          title={t("hub.cities")}
          items={cityPages
            .filter((c) => c.slug !== city.slug)
            .map((c) => ({
              to: `/taxi/${c.slug}`,
              label: `Taxi ${c.city}`,
              sub: `Flughafen Frankfurt ab ${c.airportPrice} €`,
            }))}
        />
      </section>
    </PageShell>
  );
};

export default CityPage;
