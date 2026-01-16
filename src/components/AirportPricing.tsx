import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Plane, Moon, Info } from "lucide-react";

interface PriceRoute {
  location: string;
  price: number;
}

const priceRoutes: PriceRoute[] = [
  { location: "Friedberg", price: 70 },
  { location: "Bad Nauheim", price: 75 },
  { location: "Wöllstadt", price: 70 },
  { location: "Rosbach", price: 63 },
  { location: "Rodheim", price: 63 },
  { location: "Karben", price: 75 },
  { location: "Niddatal", price: 80 },
  { location: "Reichelsheim", price: 85 },
  { location: "Wölfersheim", price: 85 },
  { location: "Rockenberg", price: 90 },
  { location: "Florstadt", price: 90 },
  { location: "Echzell", price: 90 },
  { location: "Butzbach", price: 95 },
  { location: "Ranstadt", price: 100 },
  { location: "Münzenberg", price: 100 },
  { location: "Altenstadt", price: 100 },
];

export const getAirportPrice = (location: string): number | null => {
  const route = priceRoutes.find(r => 
    r.location.toLowerCase() === location.toLowerCase() ||
    location.toLowerCase().includes(r.location.toLowerCase())
  );
  return route?.price || null;
};

const AirportPricing = () => {
  const { t } = useLanguage();

  return (
    <section id="airport-pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Plane className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">{t("pricing.badge")}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("pricing.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-2 gold-gradient">
                <div className="p-4 md:p-5 text-center">
                  <span className="font-bold text-primary-foreground text-sm md:text-base">
                    {t("pricing.from")}
                  </span>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-primary-foreground/20">
                  <span className="font-bold text-primary-foreground text-sm md:text-base">
                    {t("pricing.carL")}
                  </span>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border">
                {priceRoutes.map((route, index) => (
                  <div 
                    key={route.location}
                    className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-card' : 'bg-card/50'} hover:bg-muted/30 transition-colors`}
                  >
                    <div className="p-3 md:p-4 flex items-center justify-center">
                      <span className="font-medium text-foreground text-sm md:text-base">
                        {route.location}
                      </span>
                    </div>
                    <div className="p-3 md:p-4 text-center border-l border-border">
                      <span className="font-semibold text-primary text-sm md:text-lg">
                        {route.price},- €
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Night Surcharge Notice */}
            <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
              <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-3">
                <Moon className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <span className="font-medium text-foreground">{t("pricing.nightSurcharge")}</span>
                  <span className="text-muted-foreground ml-2">(23:00 - 06:00)</span>
                </div>
              </div>
              <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-3">
                <Info className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{t("pricing.otherRoutes")}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AirportPricing;
