import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Plane, Moon, Info } from "lucide-react";

interface PriceRoute {
  location: string;
  priceL: number;
  priceXXL: number;
}

const priceRoutes: PriceRoute[] = [
  { location: "Friedberg", priceL: 70, priceXXL: 100 },
  { location: "Bad Nauheim", priceL: 75, priceXXL: 105 },
  { location: "Wöllstadt", priceL: 70, priceXXL: 100 },
  { location: "Rosbach", priceL: 63, priceXXL: 93 },
  { location: "Rodheim", priceL: 63, priceXXL: 93 },
  { location: "Karben", priceL: 75, priceXXL: 105 },
  { location: "Niddatal", priceL: 80, priceXXL: 110 },
  { location: "Reichelsheim", priceL: 85, priceXXL: 115 },
  { location: "Wölfersheim", priceL: 85, priceXXL: 115 },
  { location: "Rockenberg", priceL: 90, priceXXL: 120 },
  { location: "Florstadt", priceL: 90, priceXXL: 120 },
  { location: "Echzell", priceL: 90, priceXXL: 120 },
  { location: "Butzbach", priceL: 95, priceXXL: 125 },
  { location: "Ranstadt", priceL: 100, priceXXL: 130 },
  { location: "Münzenberg", priceL: 100, priceXXL: 130 },
  { location: "Altenstadt", priceL: 100, priceXXL: 130 },
];

export const getAirportPrice = (location: string, vehicleType: 'L' | 'XXL'): number | null => {
  const route = priceRoutes.find(r => 
    r.location.toLowerCase() === location.toLowerCase() ||
    location.toLowerCase().includes(r.location.toLowerCase())
  );
  if (route) {
    return vehicleType === 'L' ? route.priceL : route.priceXXL;
  }
  return null;
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
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gold-gradient">
                <div className="p-4 md:p-6 text-center">
                  <span className="font-bold text-primary-foreground text-sm md:text-base">
                    {t("pricing.from")}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-primary-foreground/20">
                  <span className="font-bold text-primary-foreground text-sm md:text-base">
                    {t("pricing.carL")}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-primary-foreground/20">
                  <span className="font-bold text-primary-foreground text-sm md:text-base">
                    {t("pricing.carXXL")}
                  </span>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border">
                {priceRoutes.map((route, index) => (
                  <div 
                    key={route.location}
                    className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-card/50'} hover:bg-muted/50 transition-colors`}
                  >
                    <div className="p-4 md:p-5 flex items-center justify-center">
                      <span className="font-medium text-foreground text-sm md:text-base">
                        {route.location}
                      </span>
                    </div>
                    <div className="p-4 md:p-5 text-center border-l border-border">
                      <span className="font-bold text-foreground text-sm md:text-lg">
                        {route.priceL},- €
                      </span>
                    </div>
                    <div className="p-4 md:p-5 text-center border-l border-border">
                      <span className="font-bold text-primary text-sm md:text-lg">
                        {route.priceXXL},- €
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Night Surcharge Notice */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3">
                <Moon className="w-5 h-5 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">{t("pricing.nightSurcharge")}</span>
                  <span className="text-muted-foreground ml-2">(23:00 - 06:00)</span>
                </div>
              </div>
              <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("pricing.otherRoutes")}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AirportPricing;
