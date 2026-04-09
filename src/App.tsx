import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams, generatePath } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import VerticalsPage from "./pages/VerticalsPage";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import CustomersPage from "./pages/CustomersPage";
import PartnersPage from "./pages/PartnersPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { useAnalytics } from "./hooks/useAnalytics";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { ChatBot } from "./components/ai/ChatBot";

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
import CampusSafetyLanding from "./pages/CampusSafetyLanding";
import CashLogisticsPage from "./pages/CashLogisticsPage";
import SecureValueLogisticsPage from "./pages/SecureValueLogisticsPage";
import CommandCenterPage from "./pages/CommandCenterPage";
import SmartCityPage from "./pages/SmartCityPage";
import MassTransportationPage from "./pages/MassTransportationPage";
import TravelTourismPage from "./pages/TravelTourismPage";
import GccItParksPage from "./pages/GccItParksPage";
import EventManagementPage from "./pages/EventManagementPage";
import ModernLivingLanding from "./pages/ModernLivingLanding";

import { BackToTop } from "./components/BackToTop";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";

const StrictRedirect = ({ pattern }: { pattern: string }) => {
  const params = useParams();
  try {
    const cleanParams = { ...params };
    delete cleanParams["*"];
    const redirectPath = generatePath(pattern, cleanParams as any);
    return <Navigate to={redirectPath} replace />;
  } catch (e) {
    return <Navigate to="/" replace />;
  }
};

const appRoutes = [
  { path: "/contact", element: <ContactPage /> },
  { path: "/verticals", element: <VerticalsPage /> },
  { path: "/verticals/:verticalId", element: <VerticalDetailPage /> },
  { path: "/career", element: <CareersPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/capabilities", element: <CapabilitiesPage /> },
  { path: "/offerings", element: <OfferingsPage /> },
  { path: "/solutions", element: <SolutionsPage /> },
  { path: "/customers", element: <CustomersPage /> },
  { path: "/partners", element: <PartnersPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/cookie-policy", element: <CookiePolicy /> },
  { path: "/copyright-policy", element: <CopyrightPolicy /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/school-safety", element: <SchoolSafetyLanding /> },
  { path: "/campus-safety", element: <CampusSafetyLanding /> },
  { path: "/modern-living", element: <ModernLivingLanding /> },
  { path: "/cash-logistics", element: <CashLogisticsPage /> },
  { path: "/secure-value-logistics", element: <SecureValueLogisticsPage /> },
  { path: "/command-center", element: <CommandCenterPage /> },
  { path: "/smart-city", element: <SmartCityPage /> },
  { path: "/mass-transportation", element: <MassTransportationPage /> },
  { path: "/travel-tourism", element: <TravelTourismPage /> },
  { path: "/gcc-it-parks", element: <GccItParksPage /> },
  { path: "/event-management", element: <EventManagementPage /> },
  { path: "/services/:type/:categoryId", element: <ServiceCategoryPage /> }
];



const AppRouter = () => {
  useAnalytics();
  return (
    <ErrorBoundary>

      <ScrollToTop />
      <BackToTop />
      <ExitIntentPopup />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Index />} />
        {appRoutes.map((route, idx) => (
          <Route key={`route-${idx}`} path={route.path} element={route.element} />
        ))}
        {appRoutes.map((route, idx) => (
          <Route key={`redirect-${idx}`} path={`${route.path}/*`} element={<StrictRedirect pattern={route.path} />} />
        ))}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <AppRouter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
