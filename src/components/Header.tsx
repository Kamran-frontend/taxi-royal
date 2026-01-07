import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Fahrzeuge" },
  { href: "#reviews", label: "Bewertungen" },
  { href: "#contact", label: "Kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <nav className="hidden md:flex items-center gap-8">
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

          {/* CTA Button */}
          <div className="hidden md:block">
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
            className="md:hidden p-2 text-foreground"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
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
              <Button
                asChild
                className="gold-gradient text-primary-foreground hover:opacity-90 w-full mt-2"
              >
                <a href="tel:+491711670001">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
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
