import { Layout } from "@/components/Layout";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ThankYouPage = () => {
  const location = useLocation();
  const userName = location.state?.name || "there";
  const isFromIntegratedServices = location.state?.fromIntegratedServices || location.pathname === '/lp/facility-management/thank-you' || location.pathname === '/integratedservices/thank-you';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You - ISI Security";
  }, []);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center pt-[96px] bg-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You, {userName}!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your inquiry has been successfully received. Our team will get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button className="bg-[#1a56db] hover:bg-[#1e40af] text-white text-base py-6 px-8 rounded-md shadow-md transition-all">
                Return to Homepage
              </Button>
            </Link>
            {!isFromIntegratedServices && (
              <a href="https://wa.me/917708887878?text=Hello!%20I%20have%20submitted%20an%20inquiry%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-base py-6 px-8 rounded-md shadow-md transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Connect on WhatsApp
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
