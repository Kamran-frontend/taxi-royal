import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToBooking}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow group"
      aria-label="Per WhatsApp buchen"
    >
      {/* Text (visible on larger screens) */}
      <span className="hidden sm:block pl-5 pr-2 font-medium">
        {t("contact.whatsapp")}
      </span>
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
