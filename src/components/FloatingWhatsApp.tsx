import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/491711670001?text=Hallo,%20ich%20möchte%20ein%20Taxi%20bestellen.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow group"
      aria-label="Per WhatsApp buchen"
    >
      {/* Text (visible on larger screens) */}
      <span className="hidden sm:block pl-5 pr-2 font-medium">
        WhatsApp buchen
      </span>
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
