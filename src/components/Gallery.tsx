import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import taxiFleet from "@/assets/taxi-fleet.png";
import carPicture from "@/assets/car-picture.jpg";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { Play, X } from "lucide-react";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  altKey: string;
  thumbnail?: string;
}

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: taxiFleet,
    altKey: "MiniTAXI Royal Fahrzeugflotte",
  },
  {
    type: "image",
    src: carPicture,
    altKey: "MiniTAXI Royal Hauptfahrzeug",
  },
  {
    type: "video",
    src: heroVideo,
    altKey: "MiniTAXI Royal Video",
    thumbnail: carPicture,
  },
  {
    type: "image",
    src: wheelchairAccessible,
    altKey: "Rollstuhlgerechtes Taxi",
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <AnimatedItem
              key={index}
              delay={index * 0.15}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className="relative overflow-hidden rounded-xl group h-full">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.altKey}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => setActiveVideo(item.src)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.altKey}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover:bg-background/40 transition-colors">
                      <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-foreground font-medium">{item.altKey}</p>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300" />
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              autoPlay
              controls
              className="w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
