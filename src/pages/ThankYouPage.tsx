import { Layout } from "@/components/Layout";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ThankYouPage = () => {
  const isCareer = location.state?.leadType === 'career' || location.state?.formType === 'Career Application';
  const userName = location.state?.name || "there";
  const leadNumber = location.state?.leadNumber;
  const isFromIntegratedServices = location.state?.fromIntegratedServices || location.pathname === '/lp/facility-management/thank-you' || location.pathname === '/integratedservices/thank-you';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isCareer ? "Application Received - ISI Security" : "Thank You - ISI Security";
  }, [isCareer]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center pt-[96px] bg-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {isCareer ? `Application Received, ${userName}!` : `Thank You, ${userName}!`}
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            {isCareer
              ? "Your career application has been successfully registered with our HR team. We will review your profile and reach out if shortlisted."
              : "Your inquiry has been successfully received. Our team will get back to you shortly."}
          </p>
          {leadNumber && (
            <div className="mb-8 inline-block px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 shadow-sm text-left">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">
                    {isCareer ? "Application Reference ID" : "Enquiry Reference ID"}
                  </span>
                  <span className="text-base font-bold font-mono text-primary">{leadNumber}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block font-medium">
                    {isCareer ? "Application Status" : "Submission Status"}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Submitted
                  </span>
                </div>
              </div>
            </div>
          )}
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
