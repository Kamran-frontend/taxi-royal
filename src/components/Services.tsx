import { Plane, HeartPulse, Route, CreditCard, Baby, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Plane,
      titleKey: "services.airport",
      descKey: "services.airportDesc",
    },
    {
      icon: HeartPulse,
      titleKey: "services.medical",
      descKey: "services.medicalDesc",
    },
    {
      icon: Route,
      titleKey: "services.routes",
      descKey: "services.routesDesc",
    },
    {
      icon: CreditCard,
      titleKey: "services.card",
      descKey: "services.cardDesc",
    },
    {
      icon: Baby,
      titleKey: "services.child",
      descKey: "services.childDesc",
    },
    {
      icon: Clock,
      titleKey: "services.247",
      descKey: "services.247Desc",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("services.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <div className="group bg-background border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:floating-shadow h-full">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:glow-gold transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {t(service.descKey)}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Wheelchair Accessible Feature */}
        <AnimatedSection delay={0.3}>
          <div className="bg-background border border-primary/30 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={wheelchairAccessible}
                  alt="Rollstuhlgerechtes Taxi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 md:hidden" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4 w-fit">
                  ♿ {t("services.accessible")}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t("services.wheelchair")}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t("services.wheelchairDesc")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
