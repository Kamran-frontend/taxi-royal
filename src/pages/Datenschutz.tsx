import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
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
              {t("datenschutz.title")}
            </h1>

            <div className="prose prose-invert max-w-none space-y-6 text-foreground">
              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.overview")}
                </h2>
                <h3 className="font-semibold text-foreground mb-2">{t("datenschutz.general")}</h3>
                <p className="text-muted-foreground">
                  {t("datenschutz.generalText")}
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.collection")}
                </h2>
                <h3 className="font-semibold text-foreground mb-2">
                  {t("datenschutz.responsible")}
                </h3>
                <p className="text-muted-foreground">
                  {t("datenschutz.responsibleText")}
                </p>

                <h3 className="font-semibold text-foreground mb-2 mt-4">
                  {t("datenschutz.how")}
                </h3>
                <p className="text-muted-foreground">
                  {t("datenschutz.howText")}
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.whatsapp")}
                </h2>
                <p className="text-muted-foreground">
                  {t("datenschutz.whatsappText")}
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.rights")}
                </h2>
                <p className="text-muted-foreground">
                  {t("datenschutz.rightsIntro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>{t("datenschutz.right1")}</li>
                  <li>{t("datenschutz.right2")}</li>
                  <li>{t("datenschutz.right3")}</li>
                  <li>{t("datenschutz.right4")}</li>
                  <li>{t("datenschutz.right5")}</li>
                  <li>{t("datenschutz.right6")}</li>
                </ul>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.hosting")}
                </h2>
                <p className="text-muted-foreground">
                  {t("datenschutz.hostingText")}
                </p>
              </section>

              <section className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {t("datenschutz.contactTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("datenschutz.contactText")}<br />
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
