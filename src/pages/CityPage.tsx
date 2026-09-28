import { useParams, Navigate } from "react-router-dom";
import { MapPin, BadgeEuro } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/components/Seo";
import ContentSections from "@/components/ContentSections";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBlock from "@/components/CtaBlock";
import TrustBadges from "@/components/TrustBadges";
import LinkGrid from "@/components/LinkGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const CityPage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const { cities } = useLocalizedContent();
  const city = cities.find((item) => item.slug === slug);

  if (!city) return <Navigate to="/" replace />;

  const path = `/taxi/${city.slug}`;
  const crumbs = [
    { name: language === "de" ? "Start" : "Home", path: "/" },
    { name: language === "de" ? "Taxi vor Ort" : "Local taxi", path: "/taxi/friedberg" },
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
            {language === "de" ? "Flughafen Frankfurt" : "Frankfurt Airport"}: {city.airportPrice} € {language === "de" ? "Festpreis" : "fixed price"}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass-card rounded-2xl p-5">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-2">{language === "de" ? "Stadtteile, die wir anfahren" : "Districts we serve"}</h2>
            <p className="text-sm text-muted-foreground">{city.districts.join(" · ")}</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <h2 className="font-serif text-lg font-semibold text-foreground mb-2">{language === "de" ? "Beliebte Ziele" : "Popular destinations"}</h2>
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
          <span className="gold-text">{language === "de" ? `Häufige Fragen zum Taxi in ${city.city}` : `Frequently asked questions about taxis in ${city.city}`}</span>
        </h2>
        <FaqAccordion faqs={city.faqs} idPrefix={city.slug} />
      </section>

      <section className="container mx-auto px-4 pb-6">
        <CtaBlock
          title={language === "de" ? `Taxi in ${city.city} bestellen` : `Book a taxi in ${city.city}`}
          waMessage={language === "de" ? `Hallo MiniTAXI Royal, ich möchte ein Taxi in ${city.city} bestellen.` : `Hello MiniTAXI Royal, I would like to book a taxi in ${city.city}.`}
        />
        <LinkGrid
          title={t("hub.cities")}
          items={cities
            .filter((c) => c.slug !== city.slug)
            .map((c) => ({
              to: `/taxi/${c.slug}`,
              label: `Taxi ${c.city}`,
              sub: `${language === "de" ? "Flughafen Frankfurt ab" : "Frankfurt Airport from"} ${c.airportPrice} €`,
            }))}
        />
      </section>
    </PageShell>
  );
};

export default CityPage;
