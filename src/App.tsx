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
const SalesInquiryPage = lazy(() => import("./pages/SalesInquiryPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const BlogListingPage = lazy(() => import("./pages/BlogListingPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));

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
  { path: "/courses", element: <CoursesPage /> },
  { path: "/verticals", element: <VerticalsPage /> },
  { path: "/verticals/:verticalId", element: <VerticalDetailPage /> },
  { path: "/career", element: <CareersPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/capabilities", element: <CapabilitiesPage /> },
  { path: "/offerings", element: <OfferingsPage /> },
  { path: "/solutions", element: <SolutionsPage /> },
  { path: "/customers", element: <CustomersPage /> },
  { path: "/partners", element: <PartnersPage /> },
  { path: "/privacypolicy", element: <PrivacyPolicy /> },
  { path: "/termsofservice", element: <TermsOfService /> },
  { path: "/cookiepolicy", element: <CookiePolicy /> },
  { path: "/copyrightpolicy", element: <CopyrightPolicy /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/blog", element: <BlogListingPage /> },
  { path: "/blog/:slug", element: <BlogDetailPage /> },
  { path: "/schoolsafety", element: <SchoolSafetyLanding /> },
  { path: "/campussafety", element: <CampusSafetyLanding /> },
  { path: "/modernliving", element: <ModernLivingLanding /> },
  { path: "/cashlogistics", element: <CashLogisticsPage /> },
  { path: "/securevaluelogistics", element: <SecureValueLogisticsPage /> },
  { path: "/commandcenter", element: <CommandCenterPage /> },
  { path: "/smartcity", element: <SmartCityPage /> },
  { path: "/masstransportation", element: <MassTransportationPage /> },
  { path: "/traveltourism", element: <TravelTourismPage /> },
  { path: "/gccitparks", element: <GccItParksPage /> },
  { path: "/eventmanagement", element: <EventManagementPage /> },
  { path: "/lp/facility-management", element: <SalesInquiryPage /> },
  { path: "/lp/facility-management/thank-you", element: <ThankYouPage /> },
  { path: "/integratedservices", element: <Navigate to="/lp/facility-management" replace /> },
  { path: "/integratedservices/thank-you", element: <Navigate to="/lp/facility-management/thank-you" replace /> },
  { path: "/salesinquiry", element: <Navigate to="/lp/facility-management" replace /> },
  { path: "/services/security", element: <ServiceCategoryPage categoryIdOverride="manned-guarding" canonicalPathOverride="/services/security/" /> },
  { path: "/services/integrated-facility-management", element: <ServiceCategoryPage categoryIdOverride="hard-fm" canonicalPathOverride="/services/integrated-facility-management/" /> },
  { path: "/services/skill-development-manpower", element: <ServiceCategoryPage categoryIdOverride="manned-guarding" canonicalPathOverride="/services/skill-development-manpower/" /> },
  { path: "/mobile-security-services-chennai-crime-prevention", element: <ServiceCategoryPage categoryIdOverride="manned-guarding" canonicalPathOverride="/mobile-security-services-chennai-crime-prevention/" /> },
  { path: "/need-protection-money-properties-vip-escort-services", element: <NotFound /> },
  { path: "/404", element: <NotFound /> },
  { path: "/services/:type/:categoryId", element: <ServiceCategoryPage /> }
];



const AppRouter = () => {
  const location = useLocation();
  const isIntegratedServices = location.pathname === '/lp/facility-management' || location.pathname === '/integratedservices';
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    let fired = false;
    const loadWidgets = () => {
      if (!fired) {
        fired = true;
        setShowWidgets(true);
        cleanup();
      }
    };
    
    const cleanup = () => {
      window.removeEventListener('mousemove', loadWidgets);
      window.removeEventListener('touchstart', loadWidgets);
      window.removeEventListener('keydown', loadWidgets);
    };

    window.addEventListener('mousemove', loadWidgets, { passive: true });
    window.addEventListener('touchstart', loadWidgets, { passive: true });
    window.addEventListener('keydown', loadWidgets, { passive: true });

    return cleanup;
  }, []);

  useAnalytics();
  return (
    <ErrorBoundary>

      <ScrollToTop />
      <BackToTop />
      {showWidgets && !isIntegratedServices && (
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
        <Route path="*" element={<NotFound />} />
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
