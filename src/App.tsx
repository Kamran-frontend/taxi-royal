import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import FrankfurtAirport from "./pages/FrankfurtAirport";
import AirportPage from "./pages/AirportPage";
import LongDistance from "./pages/LongDistance";
import RoutePage from "./pages/RoutePage";
import CityPage from "./pages/CityPage";
import Rollstuhltaxi from "./pages/Rollstuhltaxi";
import FaqPage from "./pages/FaqPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flughafentransfer-frankfurt" element={<FrankfurtAirport />} />
            <Route path="/flughafentransfer/:slug" element={<AirportPage />} />
            <Route path="/fernfahrten" element={<LongDistance />} />
            <Route path="/fernfahrten/:slug" element={<RoutePage />} />
            <Route path="/taxi/:slug" element={<CityPage />} />
            <Route path="/rollstuhltaxi" element={<Rollstuhltaxi />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/ratgeber" element={<Blog />} />
            <Route path="/ratgeber/:slug" element={<BlogPost />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
