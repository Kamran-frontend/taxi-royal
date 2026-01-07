import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <img
              src={logo}
              alt="MiniTAXI Royal Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground">
              Ihr zuverlässiger Taxi-Service in Friedberg und Umgebung.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+491711670001" className="hover:text-primary transition-colors">
                  0171 1670001
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Friedberg & Umgebung
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                24/7 erreichbar
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MiniTAXI Royal. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <span>🇩🇪 DE</span>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="h-1 gold-gradient" />
    </footer>
  );
};

export default Footer;
