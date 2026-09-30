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
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

const Index = () => {
  const { t, language } = useLanguage();
  const { cities, routes, airports, faqGroups, blogPosts } = useLocalizedContent();
  const allFaqs = faqGroups.flatMap((group) => group.faqs);
  const homeFaqs = allFaqs.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={language === "de" ? "MiniTAXI Royal Friedberg – Taxi, Flughafentransfer & Krankenfahrten" : "MiniTAXI Royal Friedberg – Taxi, Airport & Medical Rides"}
        description={language === "de" ? "Taxi in Friedberg, Bad Nauheim & Butzbach: Flughafentransfer Frankfurt ab 63 €, Krankenfahrten, Rollstuhltaxi, Fernfahrten europaweit. Jetzt buchen: 0171 1670001." : "Taxi service in Friedberg, Bad Nauheim and Butzbach: Frankfurt Airport transfers from €63, medical rides, wheelchair taxis and European long-distance travel."}
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
                  label: language === "de" ? "Flughafentransfer Frankfurt" : "Frankfurt Airport transfer",
                  sub: language === "de" ? "Festpreise ab 63 €, Flugüberwachung" : "Fixed prices from €63, flight tracking",
                },
                { to: "/fernfahrten", label: language === "de" ? "Fernfahrten europaweit" : "Long-distance rides across Europe", sub: "Paris, Vienna, Zurich, Milan" },
                { to: "/rollstuhltaxi", label: language === "de" ? "Rollstuhltaxi & Krankenfahrten" : "Wheelchair taxi & medical rides", sub: language === "de" ? "Barrierefrei mit Rampe" : "Accessible vehicle with ramp" },
                { to: "/faq", label: language === "de" ? "Häufige Fragen" : "Frequently asked questions", sub: language === "de" ? "Preise, Ablauf, Krankenkasse" : "Prices, process and health insurance" },
                { to: "/ratgeber", label: language === "de" ? "Ratgeber" : "Guides", sub: language === "de" ? "Tipps rund um Transfer und Fahrten" : "Tips about transfers and rides" },
                { to: "/taxi/friedberg", label: "Taxi Friedberg", sub: language === "de" ? "Ihr Taxi vor Ort" : "Your local taxi" },
              ]}
            />
            <LinkGrid
              title={t("hub.cities")}
              items={cities.map((c) => ({
                to: `/taxi/${c.slug}`,
                label: `Taxi ${c.city}`,
                sub: `${language === "de" ? "Flughafen Frankfurt ab" : "Frankfurt Airport from"} ${c.airportPrice} €`,
              }))}
            />
            <LinkGrid
              title={t("hub.routes")}
              items={routes.map((r) => ({
                to: `/fernfahrten/${r.slug}`,
                label: `${language === "de" ? "Taxi Friedberg und Umgebung" : "Taxi Friedberg and surrounding area"} – ${r.city}`,
                sub: `${r.country} · ${language === "de" ? "ca." : "approx."} ${r.distanceKm} km`,
              }))}
            />
            <LinkGrid
              title={t("hub.airports")}
              items={airports.map((a) => ({
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
