import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams, generatePath } from "react-router-dom";
import { useEffect, Suspense, lazy, useState } from 'react';
import Index from "./pages/Index";
const ContactPage = lazy(() => import("./pages/ContactPage"));

const VerticalsPage = lazy(() => import("./pages/VerticalsPage"));

const CareersPage = lazy(() => import("./pages/CareersPage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));

const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));

const CustomersPage = lazy(() => import("./pages/CustomersPage"));

const PartnersPage = lazy(() => import("./pages/PartnersPage"));

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

const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));

const OfferingsPage = lazy(() => import("./pages/OfferingsPage"));


const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const CopyrightPolicy = lazy(() => import("./pages/CopyrightPolicy"));

const Sitemap = lazy(() => import("./pages/Sitemap"));

const VerticalDetailPage = lazy(() => import("./pages/VerticalDetailPage"));

const SchoolSafetyLanding = lazy(() => import("./pages/SchoolSafetyLanding"));

const CampusSafetyLanding = lazy(() => import("./pages/CampusSafetyLanding"));

const CashLogisticsPage = lazy(() => import("./pages/CashLogisticsPage"));

const SecureValueLogisticsPage = lazy(() => import("./pages/SecureValueLogisticsPage"));

const CommandCenterPage = lazy(() => import("./pages/CommandCenterPage"));

const SmartCityPage = lazy(() => import("./pages/SmartCityPage"));

const MassTransportationPage = lazy(() => import("./pages/MassTransportationPage"));

const TravelTourismPage = lazy(() => import("./pages/TravelTourismPage"));

const GccItParksPage = lazy(() => import("./pages/GccItParksPage"));

const EventManagementPage = lazy(() => import("./pages/EventManagementPage"));

const ModernLivingLanding = lazy(() => import("./pages/ModernLivingLanding"));


import { BackToTop } from "./components/BackToTop";
const ServiceCategoryPage = lazy(() => import("./pages/ServiceCategoryPage"));


const StrictRedirect = ({ pattern }: { pattern: string }) => {
  const params = useParams();
  try {
    const cleanParams = { ...params };
    delete cleanParams["*"];
    const redirectPath = generatePath(pattern, cleanParams as Record<string, string | undefined>);
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
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidgets(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useAnalytics();
  return (
    <ErrorBoundary>

      <ScrollToTop />
      <BackToTop />
      {showWidgets && (
        <>
          <ExitIntentPopup />
          <ChatBot />
        </>
      )}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
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
      </Suspense>
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
