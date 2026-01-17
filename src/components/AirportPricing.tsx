import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Plane, Moon, Info } from "lucide-react";

interface PriceRoute {
  location: string;
  postalCodes: string[];
  price: number;
}

const priceRoutes: PriceRoute[] = [
  { location: "Friedberg", postalCodes: ["61169"], price: 70 },
  { location: "Bad Nauheim", postalCodes: ["61231"], price: 75 },
  { location: "Wöllstadt", postalCodes: ["61206"], price: 70 },
  { location: "Rosbach", postalCodes: ["61191"], price: 63 },
  { location: "Rodheim", postalCodes: ["35447"], price: 63 },
  { location: "Karben", postalCodes: ["61184"], price: 75 },
  { location: "Niddatal", postalCodes: ["61194"], price: 80 },
  { location: "Reichelsheim", postalCodes: ["61203"], price: 85 },
  { location: "Wölfersheim", postalCodes: ["61200"], price: 85 },
  { location: "Rockenberg", postalCodes: ["35519"], price: 90 },
  { location: "Florstadt", postalCodes: ["61197"], price: 90 },
  { location: "Echzell", postalCodes: ["61209"], price: 90 },
  { location: "Butzbach", postalCodes: ["35510"], price: 95 },
  { location: "Ranstadt", postalCodes: ["63691"], price: 100 },
  { location: "Münzenberg", postalCodes: ["35516"], price: 100 },
  { location: "Altenstadt", postalCodes: ["63674"], price: 100 },
];

export const getAirportPrice = (address: string): number | null => {
  // First try to match by postal code (more reliable)
  const postalCodeMatch = address.match(/\b(\d{5})\b/);
  if (postalCodeMatch) {
    const postalCode = postalCodeMatch[1];
    const route = priceRoutes.find(r => r.postalCodes.includes(postalCode));
    if (route) return route.price;
  }
  
  // Fallback to city name matching if no postal code found
  const route = priceRoutes.find(r => 
    address.toLowerCase().includes(r.location.toLowerCase())
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
