import taxiFleet from "@/assets/taxi-fleet.png";
import carPicture from "@/assets/car-picture.jpg";
import wheelchairAccessible from "@/assets/wheelchair-accessible.jpg";

const galleryImages = [
  {
    src: taxiFleet,
    alt: "MiniTAXI Royal Fahrzeugflotte",
    span: "col-span-2",
  },
  {
    src: carPicture,
    alt: "MiniTAXI Royal Hauptfahrzeug",
    span: "col-span-1",
  },
  {
    src: wheelchairAccessible,
    alt: "Rollstuhlgerechtes Taxi",
    span: "col-span-1",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Unsere Fahrzeuge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ein moderner, gepflegter Taxi-Service für jede Fahrt.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-medium">{image.alt}</p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
