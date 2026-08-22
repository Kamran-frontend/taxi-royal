import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

interface CtaBlockProps {
  title?: string;
  subtitle?: string;
  waMessage?: string;
}

const CtaBlock = ({ title, subtitle, waMessage }: CtaBlockProps) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 text-center">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
        <span className="gold-text">{title ?? t("cta.title")}</span>
      </h2>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        {subtitle ?? t("cta.subtitle")}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="gold-gradient text-primary-foreground hover:opacity-90 rounded-full">
          <a href={`tel:${SITE.phone}`}>
            <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full"
        >
          <a
            href={waLink(waMessage ?? "Hallo MiniTAXI Royal, ich möchte ein Angebot für eine Fahrt.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            {t("cta.whatsapp")}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/#booking">
            <CalendarCheck className="w-5 h-5 mr-2" aria-hidden="true" />
            {t("cta.bookNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CtaBlock;
