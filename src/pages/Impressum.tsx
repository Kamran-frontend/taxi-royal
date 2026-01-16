import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("legal.back")}
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold gold-text mb-8 tracking-wide">
              {t("impressum.title")}
            </h1>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("impressum.according")}
                </h2>
                <p className="text-muted-foreground">
                  Kamran Ahmad<br />
                  Mietwagenunternehmen<br />
                  Mühlweg 52<br />
                  61169 Friedberg
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("impressum.contact")}
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>06031/16 183 16</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>0171 1670001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:info@minitaxiroyalfb.de" className="hover:text-primary transition-colors">
                      info@minitaxiroyalfb.de
                    </a>
                  </div>
                </div>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("impressum.taxId")}
                </h2>
                <p className="text-muted-foreground">
                  DE361843792
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("impressum.area")}
                </h2>
                <p className="text-muted-foreground">
                  Friedberg & Umgebung<br />
                  Deutschland
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("impressum.dispute")}
                </h2>
                <p className="text-muted-foreground">
                  {t("impressum.disputeText1")} 
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
                  {t("impressum.disputeText2")}
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

export default Impressum;
