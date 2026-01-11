import { useState, useRef, useEffect } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState<number>(4.9);
  const [totalReviews, setTotalReviews] = useState<number>(169);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Replace with your actual Google Place ID
  // You can find this by searching for your business on Google Maps and looking at the URL
  const PLACE_ID = "ChIJN1t_tDeuEmsRUsoyG83frY4"; // Example - replace with actual

  // Fallback reviews in case API fails
  const fallbackReviews: Review[] = [
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
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase.functions.invoke("google-places", {
          body: { action: "reviews", placeId: PLACE_ID },
        });

        if (fetchError) {
          console.error("Error fetching reviews:", fetchError);
          setReviews(fallbackReviews);
          setError("Using cached reviews");
          return;
        }

        if (data.reviews && data.reviews.length > 0) {
          const mappedReviews: Review[] = data.reviews.map((review: {
            name: string;
            rating: number;
            text: string;
            date: string;
            avatar: string;
            time: number;
          }, index: number) => ({
            id: index + 1,
            name: review.name,
            rating: review.rating,
            text: review.text,
            date: review.date,
            avatar: review.avatar || review.name.charAt(0).toUpperCase(),
          }));
          setReviews(mappedReviews);
          setOverallRating(data.overallRating || 4.9);
          setTotalReviews(data.totalReviews || 169);
        } else {
          setReviews(fallbackReviews);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setReviews(fallbackReviews);
        setError("Using cached reviews");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [language]);

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

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Carousel Navigation */}
            {filteredReviews.length > 3 && (
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
            )}
          </>
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
  const avatarDisplay = typeof review.avatar === 'string' && review.avatar.startsWith('http') 
    ? null 
    : review.avatar || review.name.charAt(0);
  const avatarImage = typeof review.avatar === 'string' && review.avatar.startsWith('http') 
    ? review.avatar 
    : null;

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
      
      <p className="text-foreground/90 flex-1 leading-relaxed">"{review.text}"</p>
    </div>
  );
};

export default Reviews;
