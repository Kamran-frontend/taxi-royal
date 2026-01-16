import { Plane, HeartPulse, Route, CreditCard, Baby, Clock, TestTube, Stethoscope, Activity, Ambulance, Users } from "lucide-react";
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
      titleKey: "services.payment",
      descKey: "services.paymentDesc",
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

  const medicalServices = [
    {
      icon: TestTube,
      titleKey: "services.lab",
      descKey: "services.labDesc",
    },
    {
      icon: Activity,
      titleKey: "services.dialysis",
      descKey: "services.dialysisDesc",
    },
    {
      icon: Stethoscope,
      titleKey: "services.reha",
      descKey: "services.rehaDesc",
    },
    {
      icon: Ambulance,
      titleKey: "services.hospital",
      descKey: "services.hospitalDesc",
    },
    {
      icon: HeartPulse,
      titleKey: "services.chemo",
      descKey: "services.chemoDesc",
    },
    {
      icon: Users,
      titleKey: "services.companion",
      descKey: "services.companionDesc",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("services.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </AnimatedSection>

        {/* Main Services - Compact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {services.map((service, index) => (
            <AnimatedItem key={index} delay={index * 0.05}>
              <div className="group glass-card hover:border-primary/50 rounded-xl p-4 transition-all duration-300 hover:glow-gold text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full gold-gradient flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground leading-tight">
                  {t(service.titleKey)}
                </h3>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Medical Services Section */}
        <div className="glass-card rounded-3xl p-6 md:p-10 mb-10">
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
              <HeartPulse className="w-4 h-4" />
              {t("services.medicalTitle")}
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("services.medicalSubtitle")}
            </p>
          </AnimatedSection>

          {/* Medical Services Grid - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {medicalServices.map((service, index) => (
              <AnimatedItem key={`medical-${index}`} delay={index * 0.05}>
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground">
                    {t(service.titleKey)}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        {/* Wheelchair Accessible Feature - Compact */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative h-48 md:h-auto md:col-span-2">
                <img
                  src={wheelchairAccessible}
                  alt="Rollstuhlgerechtes Taxi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:col-span-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-sm font-medium mb-3 w-fit">
                  ♿ {t("services.accessible")}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                  {t("services.wheelchair")}
                </h3>
                <p className="text-muted-foreground text-sm">
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
