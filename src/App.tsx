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
import SolutionsPage from "./pages/SolutionsPage";
import CustomersPage from "./pages/CustomersPage";
import PartnersPage from "./pages/PartnersPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Scroll to top on route change, or to anchor if hash is present
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the page to render before scrolling to the hash
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

import CapabilitiesPage from "./pages/CapabilitiesPage";
import OfferingsPage from "./pages/OfferingsPage";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Sitemap from "./pages/Sitemap";
import VerticalDetailPage from "./pages/VerticalDetailPage";
import SchoolSafetyLanding from "./pages/SchoolSafetyLanding";
import CashLogisticsPage from "./pages/CashLogisticsPage";
import SecureValueLogisticsPage from "./pages/SecureValueLogisticsPage";
import CommandCenterPage from "./pages/CommandCenterPage";

import { BackToTop } from "./components/BackToTop";

const AppRouter = () => (
  <ErrorBoundary>
    <ScrollToTop />
    <BackToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/verticals" element={<VerticalsPage />} />
      <Route path="/verticals/:verticalId" element={<VerticalDetailPage />} />
      <Route path="/career" element={<CareersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/capabilities" element={<CapabilitiesPage />} />
      <Route path="/offerings" element={<OfferingsPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/copyright-policy" element={<CopyrightPolicy />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/school-safety" element={<SchoolSafetyLanding />} />
      <Route path="/cash-logistics" element={<CashLogisticsPage />} />
      <Route path="/secure-value-logistics" element={<SecureValueLogisticsPage />} />
      <Route path="/command-center" element={<CommandCenterPage />} />
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
