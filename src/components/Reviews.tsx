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

  // Simulated reviews - in real app would come from Google Places API
  const allReviews: Review[] = [
    {
      id: 1,
      name: "Maria S.",
      rating: 5,
      text: language === "de" 
        ? "Sehr zuverlässig, pünktlich und freundlich. Immer wieder gerne!" 
        : "Very reliable, punctual and friendly. Happy to come back!",
      date: language === "de" ? "vor 2 Wochen" : "2 weeks ago",
      avatar: "M",
    },
    {
      id: 2,
      name: "Thomas K.",
      rating: 5,
      text: language === "de" 
        ? "Bester Taxi-Service in Friedberg! Schnelle Antwort auf WhatsApp und super Fahrer." 
        : "Best taxi service in Friedberg! Quick WhatsApp response and great drivers.",
      date: language === "de" ? "vor 1 Monat" : "1 month ago",
      avatar: "T",
    },
    {
      id: 3,
      name: "Anna M.",
      rating: 5,
      text: language === "de" 
        ? "Toller Service zum Flughafen. Pünktlich, sauber und professionell. Absolut empfehlenswert!" 
        : "Great airport service. Punctual, clean and professional. Highly recommended!",
      date: language === "de" ? "vor 1 Monat" : "1 month ago",
      avatar: "A",
    },
    {
      id: 4,
      name: "Peter H.",
      rating: 5,
      text: language === "de" 
        ? "Habe zum ersten Mal MiniTAXI Royal genutzt und bin begeistert. Super freundlich und pünktlich!" 
        : "Used MiniTAXI Royal for the first time and I'm thrilled. Super friendly and punctual!",
      date: language === "de" ? "vor 3 Wochen" : "3 weeks ago",
      avatar: "P",
    },
    {
      id: 5,
      name: "Sandra L.",
      rating: 4,
      text: language === "de" 
        ? "Sehr guter Service, saubere Fahrzeuge. Kann ich nur empfehlen." 
        : "Very good service, clean vehicles. Highly recommend.",
      date: language === "de" ? "vor 2 Monaten" : "2 months ago",
      avatar: "S",
    },
    {
      id: 6,
      name: "Michael B.",
      rating: 5,
      text: language === "de" 
        ? "Zuverlässiger Taxiservice. Nutze ihn regelmäßig für Krankenfahrten. Immer pünktlich!" 
        : "Reliable taxi service. Use it regularly for medical rides. Always on time!",
      date: language === "de" ? "vor 1 Woche" : "1 week ago",
      avatar: "M",
    },
    {
      id: 7,
      name: "Julia F.",
      rating: 5,
      text: language === "de" 
        ? "Perfekt für Flughafentransfers. Fahrer war sehr hilfsbereit mit dem Gepäck." 
        : "Perfect for airport transfers. Driver was very helpful with luggage.",
      date: language === "de" ? "vor 3 Wochen" : "3 weeks ago",
      avatar: "J",
    },
    {
      id: 8,
      name: "Klaus W.",
      rating: 4,
      text: language === "de" 
        ? "Guter Service, faire Preise. Die WhatsApp-Buchung ist sehr praktisch." 
        : "Good service, fair prices. WhatsApp booking is very convenient.",
      date: language === "de" ? "vor 2 Monaten" : "2 months ago",
      avatar: "K",
    },
  ];

  // Filter only 4-5 star reviews
  const filteredReviews = allReviews.filter(review => review.rating >= 4);
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

  const averageRating = (filteredReviews.reduce((acc, r) => acc + r.rating, 0) / filteredReviews.length).toFixed(1);

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
              <span className="text-5xl font-bold text-foreground">{averageRating}</span>
              <span className="text-muted-foreground ml-2 text-lg">{t("reviews.rating")}</span>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">169+</span> {t("reviews.count")}
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel Navigation */}
        <div className="hidden md:flex justify-end mb-6 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-border hover:bg-muted"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-border hover:bg-muted"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

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
        <div className="hidden md:flex justify-center gap-2 mt-8 mb-12">
          {[...Array(Math.ceil(filteredReviews.length / 3))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

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
  return (
    <div className="glass-card rounded-2xl p-6 hover:glow-gold transition-all duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
          {review.avatar}
        </div>
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
      
      <p className="text-foreground/90 flex-1 leading-relaxed">"{review.text}"</p>
    </div>
  );
};

export default Reviews;
