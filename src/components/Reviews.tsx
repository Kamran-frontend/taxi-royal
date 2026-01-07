import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Maria S.",
      rating: 5,
      textKey: "reviews.review1",
      date: "vor 2 Wochen",
    },
    {
      name: "Thomas K.",
      rating: 5,
      textKey: "reviews.review2",
      date: "vor 1 Monat",
    },
    {
      name: "Anna M.",
      rating: 5,
      textKey: "reviews.review3",
      date: "vor 1 Monat",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("reviews.title")}</span>
          </h2>
          
          {/* Rating Badge */}
          <div className="inline-flex flex-col items-center gap-3 bg-background border border-primary/30 rounded-2xl p-6 glow-gold">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <span className="text-4xl font-bold text-foreground">5,0</span>
              <span className="text-muted-foreground ml-2">{t("reviews.rating")}</span>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">169</span> {t("reviews.count")}
            </p>
          </div>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <AnimatedItem key={index} delay={index * 0.15}>
              <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{t(review.textKey)}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Google Reviews Link */}
        <AnimatedSection className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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

export default Reviews;
