import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold gold-text mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Datenerfassung auf dieser Website
                </h2>
                <h3 className="font-semibold text-foreground mb-2">
                  Wer ist verantwortlich für die Datenerfassung?
                </h3>
                <p className="text-muted-foreground">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Die Kontaktdaten finden Sie im Impressum dieser Website.
                </p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <p className="text-muted-foreground">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, 
                  z.B. durch eine Buchungsanfrage per WhatsApp oder Telefon.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. WhatsApp-Kommunikation
                </h2>
                <p className="text-muted-foreground">
                  Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten gemäß den 
                  Datenschutzbestimmungen von WhatsApp (Meta) verarbeitet. Wir speichern 
                  Ihre Telefonnummer und Nachrichteninhalte ausschließlich zur Bearbeitung 
                  Ihrer Buchungsanfrage.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-muted-foreground">
                  Sie haben jederzeit das Recht auf:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Hosting
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf 
                  dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Kontakt
                </h2>
                <p className="text-muted-foreground">
                  Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />
                  Telefon: 0171 1670001
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Datenschutz;
