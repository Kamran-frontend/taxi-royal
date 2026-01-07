import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import taxiFleet from "@/assets/taxi-fleet.png";
import carPicture from "@/assets/car-picture.jpg";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";

const galleryImages = [
  {
    src: taxiFleet,
    altKey: "MiniTAXI Royal Fahrzeugflotte",
  },
  {
    src: carPicture,
    altKey: "MiniTAXI Royal Hauptfahrzeug",
  },
  {
    src: wheelchairAccessible,
    altKey: "Rollstuhlgerechtes Taxi",
  },
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("gallery.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedItem
              key={index}
              delay={index * 0.15}
              className={index === 0 ? "md:col-span-2 md:row-span-1" : ""}
            >
              <div className="relative overflow-hidden rounded-xl group h-full">
                <img
                  src={image.src}
                  alt={image.altKey}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-foreground font-medium">{image.altKey}</p>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300" />
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
