import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import AirportPricing from "@/components/AirportPricing";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import TrustBadges from "@/components/TrustBadges";
import FaqAccordion from "@/components/FaqAccordion";
import LinkGrid from "@/components/LinkGrid";
import Seo, { faqSchema, localBusinessSchema, organizationSchema } from "@/components/Seo";
import { allFaqs, faqGroups } from "@/data/faqs";
import { cityPages } from "@/data/cities";
import { longDistanceRoutes } from "@/data/longDistance";
import { airportPages } from "@/data/airports";
import { blogPosts } from "@/data/blog";
import { useLanguage } from "@/contexts/LanguageContext";

const homeFaqs = faqGroups.flatMap((g) => g.faqs).slice(0, 8);

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="MiniTAXI Royal Friedberg – Taxi, Flughafentransfer & Krankenfahrten"
        description="Taxi in Friedberg, Bad Nauheim & Butzbach: Flughafentransfer Frankfurt ab 63 €, Krankenfahrten, Rollstuhltaxi, Fernfahrten europaweit. Jetzt buchen: 0171 1670001."
        path="/"
        schemas={[organizationSchema(), localBusinessSchema(), faqSchema(allFaqs)]}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBadges />
        <Gallery />
        <AirportPricing />
        <Reviews />
        <BookingForm />

        {/* FAQ preview */}
        <section id="faq" className="py-16 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-center">
              <span className="gold-text">{t("hub.faq")}</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8">{t("hub.faqSubtitle")}</p>
            <FaqAccordion faqs={homeFaqs} idPrefix="home" />
            <div className="text-center mt-6">
              <Link to="/faq" className="text-primary hover:underline font-medium">
                {t("hub.allFaq")} →
              </Link>
            </div>
          </div>
        </section>

        {/* Internal link hubs */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <LinkGrid
              title={t("hub.services")}
              items={[
                {
                  to: "/flughafentransfer-frankfurt",
                  label: "Flughafentransfer Frankfurt",
                  sub: "Festpreise ab 63 €, Flugüberwachung",
                },
                { to: "/fernfahrten", label: "Fernfahrten europaweit", sub: "Paris, Wien, Zürich, Mailand" },
                { to: "/rollstuhltaxi", label: "Rollstuhltaxi & Krankenfahrten", sub: "Barrierefrei mit Rampe" },
                { to: "/faq", label: "Häufige Fragen", sub: "Preise, Ablauf, Krankenkasse" },
                { to: "/ratgeber", label: "Ratgeber", sub: "Tipps rund um Transfer und Fahrten" },
                { to: "/taxi/friedberg", label: "Taxi Friedberg", sub: "Ihr Taxi vor Ort" },
              ]}
            />
            <LinkGrid
              title={t("hub.cities")}
              items={cityPages.map((c) => ({
                to: `/taxi/${c.slug}`,
                label: `Taxi ${c.city}`,
                sub: `Flughafen Frankfurt ab ${c.airportPrice} €`,
              }))}
            />
            <LinkGrid
              title={t("hub.routes")}
              items={longDistanceRoutes.map((r) => ({
                to: `/fernfahrten/${r.slug}`,
                label: `Taxi Friedberg – ${r.city}`,
                sub: `${r.country} · ca. ${r.distanceKm} km`,
              }))}
            />
            <LinkGrid
              title={t("hub.airports")}
              items={airportPages.map((a) => ({
                to: `/flughafentransfer/${a.slug}`,
                label: a.airport,
                sub: `${a.code} · ${a.durationText}`,
              }))}
            />
            <LinkGrid
              title={t("hub.blog")}
              items={blogPosts.map((p) => ({
                to: `/ratgeber/${p.slug}`,
                label: p.title,
                sub: p.category,
              }))}
            />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
};

export default Index;
