import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import taxiFleet from "@/assets/taxi-fleet.png";

const Hero = () => {
  const { t } = useLanguage();
  const phoneNumber = "tel:+491711670001";

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={taxiFleet}
          alt="MiniTAXI Royal Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex justify-center"
        >
          <img
            src={logo}
            alt="MiniTAXI Royal - Ihr Taxi-Service in Friedberg"
            className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
            fetchPriority="high"
            width="294"
            height="196"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider"
        >
          <span className="gold-text">Mini</span>
          <span className="text-foreground">TAXI </span>
          <span className="gold-text">Royal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground/90 font-serif mb-2 tracking-wide"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* ETA Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-12 glow-gold"
        >
          <Clock className="w-5 h-5 text-primary" />
          <span className="text-foreground font-medium">{t("hero.eta")}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {t("hero.whatsapp")}
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href={phoneNumber}>
              <Phone className="w-6 h-6 mr-2" />
              0171 1670001
            </a>
          </Button>
        </motion.div>

        {/* Service Area */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-muted-foreground"
        >
          📍 {t("hero.location")}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-gradient opacity-60" />
    </section>
  );
};

export default Hero;
