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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AirportPricing />
        <Reviews />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
};

export default Index;
