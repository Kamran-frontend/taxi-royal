import { useState } from "react";
import { Phone, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#gallery", label: t("nav.vehicles") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#booking", label: t("nav.booking") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="MiniTAXI Royal"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="hidden sm:block font-serif text-xl gold-text font-bold">
              MiniTAXI Royal
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === "de" ? "EN" : "DE"}
            </Button>
            <Button
              asChild
              className="gold-gradient text-primary-foreground hover:opacity-90"
            >
              <a href="tel:+491711670001">
                <Phone className="w-4 h-4 mr-2" />
                0171 1670001
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-foreground"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language === "de" ? "English" : "Deutsch"}
                </Button>
              </div>
              <Button
                asChild
                className="gold-gradient text-primary-foreground hover:opacity-90 w-full mt-2"
              >
                <a href="tel:+491711670001">
                  <Phone className="w-4 h-4 mr-2" />
                  {t("nav.callNow")}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
