import { Plane, HeartPulse, Route, CreditCard, Baby, Clock } from "lucide-react";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";

const services = [
  {
    icon: Plane,
    title: "Flughafentransfer",
    description: "Pünktlich und zuverlässig zum Flughafen",
  },
  {
    icon: HeartPulse,
    title: "Krankenfahrten",
    description: "Sichere Beförderung zu Arztterminen",
  },
  {
    icon: Route,
    title: "Kurz- & Langstrecken",
    description: "Flexibel für jede Entfernung",
  },
  {
    icon: CreditCard,
    title: "Kartenzahlung",
    description: "Bequem mit Karte bezahlen",
  },
  {
    icon: Baby,
    title: "Kindersitz verfügbar",
    description: "Sicher unterwegs mit Familie",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Rund um die Uhr erreichbar",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Unsere Taxi-Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professioneller Taxi-Service für jeden Anlass – komfortabel, sicher und zuverlässig.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:floating-shadow"
            >
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:glow-gold transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wheelchair Accessible Feature */}
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
                ♿ Barrierefrei
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Rollstuhlgerechtes Fahrzeug
              </h3>
              <p className="text-muted-foreground text-lg">
                Wir bieten spezielle Fahrzeuge mit Rampe für Rollstuhlfahrer an. 
                Komfortabel und sicher ans Ziel – für alle Passagiere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
