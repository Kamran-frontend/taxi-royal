import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  {t("cookie.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("cookie.description")}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="flex-1 md:flex-none border-border hover:bg-muted"
                >
                  {t("cookie.reject")}
                </Button>
                <Button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none gold-gradient text-primary-foreground hover:opacity-90"
                >
                  {t("cookie.accept")}
                </Button>
              </div>

              <button
                onClick={handleReject}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors md:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
