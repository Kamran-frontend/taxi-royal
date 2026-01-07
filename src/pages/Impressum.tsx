import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold gold-text mb-8">Impressum</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-muted-foreground">
                MiniTAXI Royal<br />
                Taxiunternehmen
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground">
                Telefon: 0171 1670001<br />
                E-Mail: info@minitaxi-royal.de
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Einsatzgebiet
              </h2>
              <p className="text-muted-foreground">
                Friedberg & Umgebung<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Streitschlichtung
              </h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="h-1 gold-gradient" />
    </div>
  );
};

export default Impressum;
