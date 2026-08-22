import {
  ShieldCheck,
  Clock,
  BadgeEuro,
  PlaneTakeoff,
  Baby,
  Wallet,
  Briefcase,
  Accessibility,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const badges = [
  { icon: UserCheck, key: "trust.drivers" },
  { icon: ShieldCheck, key: "trust.licensed" },
  { icon: Clock, key: "trust.reliable" },
  { icon: BadgeEuro, key: "trust.fixedPrice" },
  { icon: PlaneTakeoff, key: "trust.flightTracking" },
  { icon: Baby, key: "trust.childSeat" },
  { icon: Wallet, key: "trust.payment" },
  { icon: Briefcase, key: "trust.corporate" },
  { icon: Accessibility, key: "trust.wheelchair" },
];

const TrustBadges = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useLanguage();

  return (
    <section className={compact ? "py-10" : "py-16 bg-card"} aria-labelledby="trust-heading">
      <div className="container mx-auto px-4">
        {!compact && (
          <AnimatedSection className="text-center mb-10">
            <h2 id="trust-heading" className="font-serif text-3xl md:text-4xl font-bold mb-3">
              <span className="gold-text">{t("trust.title")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("trust.subtitle")}</p>
          </AnimatedSection>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {badges.map((badge, i) => (
            <AnimatedItem key={badge.key} delay={i * 0.04}>
              <div className="glass-card rounded-xl p-4 flex items-center gap-3 h-full">
                <badge.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-xs md:text-sm font-medium text-foreground leading-tight">
                  {t(badge.key)}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
