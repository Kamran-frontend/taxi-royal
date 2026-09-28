import { useLanguage } from "@/contexts/LanguageContext";
import { airportPages } from "@/data/airports";
import { blogPosts } from "@/data/blog";
import { cityPages } from "@/data/cities";
import { faqGroups } from "@/data/faqs";
import { longDistanceRoutes } from "@/data/longDistance";
import {
  airportPagesEn,
  blogPostsEn,
  cityPagesEn,
  faqGroupsEn,
  longDistanceRoutesEn,
} from "@/data/content-en";

export const useLocalizedContent = () => {
  const { language } = useLanguage();
  const english = language === "en";

  return {
    language,
    cities: english ? cityPagesEn : cityPages,
    airports: english ? airportPagesEn : airportPages,
    routes: english ? longDistanceRoutesEn : longDistanceRoutes,
    faqGroups: english ? faqGroupsEn : faqGroups,
    blogPosts: english ? blogPostsEn : blogPosts,
  };
};