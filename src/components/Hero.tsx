import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import carPicture from "@/assets/car-picture.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/491711670001?text=Hallo,%20ich%20möchte%20ein%20Taxi%20bestellen.";
  const phoneNumber = "tel:+491711670001";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={carPicture}
          alt="MiniTAXI Royal Fahrzeug"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center"
        >
          <img
            src={logo}
            alt="MiniTAXI Royal Logo"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gold-text">Mini</span>
          <span className="text-foreground">TAXI </span>
          <span className="gold-text">Royal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground/90 font-serif mb-2"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* ETA Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-10 glow-gold"
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
            asChild
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-6 rounded-full animate-pulse-glow"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2" />
              {t("hero.whatsapp")}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full"
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
          className="mt-10 text-muted-foreground"
        >
          📍 {t("hero.location")}
        </motion.p>
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  );
};

export default Hero;
