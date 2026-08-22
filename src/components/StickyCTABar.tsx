import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { SITE, waLink } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Sticky bottom action bar for mobile: Call, WhatsApp, Book.
 * Stays visible while scrolling on small screens.
 */
const StickyCTABar = ({ bookingHref = "/#booking" }: { bookingHref?: string }) => {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          aria-label={t("cta.callNow")}
        >
          <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
          {t("cta.callNow")}
        </a>
        <a
          href={waLink("Hallo MiniTAXI Royal, ich möchte eine Fahrt anfragen.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-whatsapp-foreground bg-whatsapp hover:opacity-90 transition-opacity"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={bookingHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          aria-label={t("cta.bookNow")}
        >
          <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
          {t("cta.bookNow")}
        </a>
      </div>
    </div>
  );
};

export default StickyCTABar;
