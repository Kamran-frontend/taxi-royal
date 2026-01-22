import { useState, useRef } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

const Reviews = () => {
  const { t, language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Real reviews from Google Places (from PDF)
  const reviews: Review[] = [
    {
      id: 1,
      name: "Anastasia Sharvadze",
      rating: 5,
      text: "Sehr netter Fahrer, kommt immer pünktlich und die Fahrten sind auch sehr entspannt. Kann ich nur weiterempfehlen",
      date: language === "de" ? "vor 1 Woche" : "1 week ago",
      avatar: "A",
    },
    {
      id: 2,
      name: "Michael Längsfeld",
      rating: 5,
      text: "Ich kann dieses Taxiunternehmen nur empfehlen! Zuverlässig, pünktlich und freundlich! Auch die Abholung vom Flughafen klappt immer perfekt. Weiter so!",
      date: language === "de" ? "vor 2 Wochen" : "2 weeks ago",
      avatar: "M",
    },
    {
      id: 3,
      name: "Monique Fischer",
      rating: 5,
      text: "Super nette Fahrer, immer pünktlich sehr zu empfehlen.",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "M",
    },
    {
      id: 4,
      name: "Nils Markus",
      rating: 5,
      text: "Sehr guter Service Taxi ist schnell Vorort und auch super Preis Leistung Verhältnis",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "N",
    },
    {
      id: 5,
      name: "Dirk Maier",
      rating: 5,
      text: "Top Mega Service pünktlich und sehr professionell",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "D",
    },
    {
      id: 6,
      name: "Luqman Ahmed",
      rating: 5,
      text: "Super Service!!! Freundlich und sehr hilfsbereit!",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "L",
    },
    {
      id: 7,
      name: "Roumaisa Omari",
      rating: 5,
      text: "Immer schnell und gute preis immer wieder gerne",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "R",
    },
    {
      id: 8,
      name: "Annett",
      rating: 5,
      text: "Sehr nette Fahrer immer pünktlich da !",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "A",
    },
    {
      id: 9,
      name: "Tilo Marquardt",
      rating: 5,
      text: "Sehr professionell. Pünktlich, zuverlässig, Kommunikation bestens, immer zu empfehlen",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "T",
    },
    {
      id: 10,
      name: "Faisal Azimi",
      rating: 5,
      text: "Wir nutzen regelmäßig, verschiedene Fahrdienste bei MiniTAXI Royal. Alle Wege werden pünktlich erledigt, zudem wird 1A kommuniziert.",
      date: language === "de" ? "vor 5 Monaten" : "5 months ago",
      avatar: "F",
    },
    {
      id: 11,
      name: "Davud Moshref",
      rating: 4,
      text: "Das war super pünktlich und ruhig",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "D",
    },
    {
      id: 12,
      name: "Michael Raible",
      rating: 5,
      text: "Top Service. Wir haben den Service des öfteren in Anspruch genommen und es lief immer alles zu unserer absoluten Zufriedenheit. Prompte Terminbestätigung, immer pünklich, immer höflich. Einfach Top!",
      date: language === "de" ? "vor 10 Monaten" : "10 months ago",
      avatar: "M",
    },
    {
      id: 13,
      name: "Raqim Ahmad",
      rating: 5,
      text: "Top Mietwagenservice! Super schnell, extrem zuverlässig und das Preis Leistungs Verhältnis ist unschlagbar. Für mich einer der besten Anbieter absolut empfehlenswert",
      date: language === "de" ? "vor 9 Monaten" : "9 months ago",
      avatar: "R",
    },
    {
      id: 14,
      name: "Nayab Schneider",
      rating: 5,
      text: "Super Service. Das Taxi war innerhalb weniger Minuten da und hat uns zuverlässig ans Ziel gebracht. Zudem sehr sympathische Begleitung! Immer wieder gern, absolut empfehlenswert.",
      date: language === "de" ? "vor 11 Monaten" : "11 months ago",
      avatar: "N",
    },
    {
      id: 15,
      name: "Firas Jradi",
      rating: 5,
      text: "Super Service. Das Taxi war innerhalb weniger Minuten da und hat uns zuverlässig ans Ziel gebracht. Zudem sehr sympathische Begleitung! Immer wieder gern, absolut empfehlenswert.",
      date: language === "de" ? "vor 11 Monaten" : "11 months ago",
      avatar: "F",
    },
    {
      id: 16,
      name: "Tim Weber",
      rating: 5,
      text: "Excellent service, on time and secure transport for my family. Good and clear communication!",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "T",
    },
    {
      id: 17,
      name: "Ali Dorandesh",
      rating: 5,
      text: "Alles top",
      date: language === "de" ? "vor 5 Tagen" : "5 days ago",
      avatar: "A",
    },
    {
      id: 18,
      name: "Tristan V",
      rating: 5,
      text: "Sehr gutes Unternehmen, Top Auto. Schnell, günstig, freundlich, hilfsbereit und sehr sehr nett. Immer wieder gerne. DANKE",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "T",
    },
    {
      id: 19,
      name: "C. Rentzsch",
      rating: 5,
      text: "Immer pünktlich und sehr freundlich!! Autos immer sehr sauber",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "C",
    },
    {
      id: 20,
      name: "Jonas Hano",
      rating: 5,
      text: "Günstige Preise, nette Fahrer/in. Stets pünktlich, falls mal ein paar Minuten verspätet melden sie sich sofort. Sehr hilfsbereit.",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "J",
    },
    {
      id: 21,
      name: "DW Offizielle",
      rating: 5,
      text: "Top Service pünktlich, schnell, sauber immer empfehlenswert.",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "D",
    },
    {
      id: 22,
      name: "Anja Fischer",
      rating: 5,
      text: "Ganz tolle Menschen! Sehr kompetent, zuverlässig und gesprächig. (Man fühlt sich gleich viel wohler) Kann das Taxi Royal wärmstens weiterempfehlen! Wir fahren in Zukunft nur noch mit ihnen und freuen uns immer sehr! ✨",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "A",
    },
    {
      id: 23,
      name: "Zufriedener Kunde",
      rating: 5,
      text: "Besonders ist zu erwähnen, dass uns, neben der Pünktlichkeit und Sauberkeit des Fahrzeugs, die sehr freundliche und aufgeschlossene Art auffiel. Absolut empfehlenswert",
      date: language === "de" ? "vor 1 Jahr" : "1 year ago",
      avatar: "Z",
    },
  ];

  const overallRating = 5.0;
  const totalReviews = 187;

  const filteredReviews = reviews.filter(review => review.rating >= 4);
  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredReviews.length));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % Math.ceil(filteredReviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + Math.ceil(filteredReviews.length / 3)) % Math.ceil(filteredReviews.length / 3));
  };

  const displayRating = overallRating.toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            <span className="gold-text">{t("reviews.title")}</span>
          </h2>
          
          {/* Rating Badge */}
          <div className="inline-flex flex-col items-center gap-4 glass-card rounded-3xl p-8 glow-gold">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <span className="text-5xl font-bold text-foreground">{displayRating}</span>
              <span className="text-muted-foreground ml-2 text-lg">{t("reviews.rating")}</span>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">{totalReviews}+</span> {t("reviews.count")}
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel Navigation */}
        {filteredReviews.length > 3 && (
          <div className="hidden md:flex justify-end mb-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-border hover:bg-muted"
              aria-label="Vorherige Bewertungen"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-border hover:bg-muted"
              aria-label="Nächste Bewertungen"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Reviews Carousel (Desktop) */}
        <div className="hidden md:block overflow-hidden" ref={carouselRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {filteredReviews.slice(currentIndex * 3, currentIndex * 3 + 3).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Reviews Grid (Mobile) */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {/* Load More Button (Mobile) */}
        {hasMore && (
          <div className="md:hidden text-center mb-12">
            <Button
              onClick={loadMore}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
            >
              {t("reviews.loadMore")}
            </Button>
          </div>
        )}

        {/* Carousel Dots */}
        {filteredReviews.length > 3 && (
          <div className="hidden md:flex justify-center gap-3 mt-8 mb-12">
            {[...Array(Math.ceil(filteredReviews.length / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Seite ${i + 1} anzeigen`}
                className={`min-w-[24px] h-6 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        )}

        {/* Google Reviews Link */}
        <AnimatedSection className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            <a
              href="https://www.google.com/search?q=MiniTAXI+Royal+Friedberg+Bewertungen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("reviews.viewAll")}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const avatarDisplay = typeof review.avatar === 'string' && review.avatar.startsWith('http') 
    ? null 
    : review.avatar || review.name.charAt(0);
  const avatarImage = typeof review.avatar === 'string' && review.avatar.startsWith('http') 
    ? review.avatar 
    : null;

  const MAX_LINES = 4;
  const shouldTruncate = review.text.length > 150;

  return (
    <div className="glass-card rounded-2xl p-6 hover:glow-gold transition-all duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        {avatarImage ? (
          <img 
            src={avatarImage} 
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
            {avatarDisplay}
          </div>
        )}
        <div className="flex-1">
          <p className="font-medium text-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-muted-foreground/30" />
        ))}
      </div>
      
      <div className="flex-1">
        <p 
          className={`text-foreground/90 leading-relaxed ${
            !isExpanded && shouldTruncate ? 'line-clamp-4' : ''
          }`}
        >
          "{review.text}"
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium mt-2 hover:underline"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
