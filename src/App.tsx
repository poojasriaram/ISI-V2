import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import VerticalsPage from "./pages/VerticalsPage";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import CapabilitiesPage from "./pages/CapabilitiesPage";
import OfferingsPage from "./pages/OfferingsPage";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

import { BackToTop } from "./components/BackToTop";

const AppRouter = () => (
  <ErrorBoundary>
    <ScrollToTop />
    <BackToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/verticals" element={<VerticalsPage />} />
      <Route path="/career" element={<CareersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/capabilities" element={<CapabilitiesPage />} />
      <Route path="/offerings" element={<OfferingsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ErrorBoundary>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppWidget />
      <BrowserRouter
        basename="/"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppRouter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
