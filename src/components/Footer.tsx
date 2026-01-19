import { Phone, MapPin, Clock, Mail, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <img
              src={logo}
              alt="MiniTAXI Royal Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground">
              {t("footer.tagline")}
            </p>
            {/* WhatsApp Button */}
            <Button
              asChild
              size="sm"
              className="mt-4 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full"
            >
              <a 
                href="https://wa.me/491711670001" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Support
              </a>
            </Button>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+4960311618316" className="hover:text-primary transition-colors">
                    06031/16 183 16
                  </a>
                  <a href="tel:+491711670001" className="hover:text-primary transition-colors">
                    0171 1670001
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@minitaxiroyalfb.de" className="hover:text-primary transition-colors">
                  info@minitaxiroyalfb.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Mühlweg 52<br />61169 Friedberg</span>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              {t("footer.availability")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p>Mo - Fr: 07:00 - 01:00</p>
                  <p>Sa & So: 24h</p>
                  <p className="text-primary text-sm mt-1">{t("footer.preOrder")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Payment */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  to="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.imprint")}
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
            
            {/* Payment Methods */}
            <h4 className="font-serif text-lg font-semibold text-foreground mb-2 mt-6">
              {t("footer.payment")}
            </h4>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-muted rounded">💶 {t("footer.cash")}</span>
              <span className="px-2 py-1 bg-muted rounded">🅿️ PayPal</span>
              <span className="px-2 py-1 bg-muted rounded">🏦 {t("footer.bankTransfer")}</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/minitaxiroyalfb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@minitaxiroyalfb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-sm font-medium">TikTok</span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MiniTAXI Royal. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <span>
              Made by{" "}
              <a 
                href="mailto:kamranali130893@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                Kamran Ali
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="h-1 gold-gradient" />
    </footer>
  );
};

export default Footer;
