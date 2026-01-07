import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const Contact = () => {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/491711670001?text=Hallo,%20ich%20möchte%20ein%20Taxi%20bestellen.";
  const phoneNumber = "tel:+491711670001";

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("contact.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Quick Actions */}
          <AnimatedItem delay={0.1}>
            <div className="bg-background border border-border rounded-2xl p-8 h-full">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                {t("contact.quick")}
              </h3>
              
              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg py-6 rounded-xl"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    {t("contact.whatsapp")}
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full gold-gradient text-primary-foreground hover:opacity-90 text-lg py-6 rounded-xl"
                >
                  <a href={phoneNumber}>
                    <Phone className="w-6 h-6 mr-3" />
                    {t("contact.call")}
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-center text-muted-foreground">
                  💡 {t("contact.tip")}
                </p>
              </div>
            </div>
          </AnimatedItem>

          {/* Contact Info */}
          <div className="space-y-6">
            <AnimatedItem delay={0.2}>
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t("contact.phone")}</h4>
                    <a href={phoneNumber} className="text-2xl font-bold gold-text hover:underline">
                      0171 1670001
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.3}>
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t("contact.area")}</h4>
                    <p className="text-muted-foreground">
                      {t("contact.areaValue")}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.4}>
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t("contact.hours")}</h4>
                    <p className="text-muted-foreground">
                      {t("contact.hoursValue")}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
