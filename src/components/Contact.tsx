import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappLink = "https://wa.me/491711670001?text=Hallo,%20ich%20möchte%20ein%20Taxi%20bestellen.";
  const phoneNumber = "tel:+491711670001";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Taxi jetzt bestellen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Buchen Sie Ihr Taxi schnell und unkompliziert per WhatsApp oder Anruf.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Schnellbuchung
            </h3>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg py-6 rounded-xl"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp buchen
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full gold-gradient text-primary-foreground hover:opacity-90 text-lg py-6 rounded-xl"
              >
                <a href={phoneNumber}>
                  <Phone className="w-6 h-6 mr-3" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground">
                💡 WhatsApp ist der schnellste Weg zur Buchung!
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon & WhatsApp</h4>
                  <a href={phoneNumber} className="text-2xl font-bold gold-text hover:underline">
                    0171 1670001
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Einsatzgebiet</h4>
                  <p className="text-muted-foreground">
                    Friedberg, Bad Nauheim, Butzbach und Umgebung
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Erreichbarkeit</h4>
                  <p className="text-muted-foreground">
                    24 Stunden / 7 Tage die Woche
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
