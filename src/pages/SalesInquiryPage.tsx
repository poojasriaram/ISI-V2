import { useEffect, useState } from 'react';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Shield, Building, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

import { HomeStats } from "@/components/HomeStats";
import { HomeCustomers } from "@/components/HomeCustomers";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";

import salesImg from "@/assets/Sales inquiry.png";

export const SalesInquiryPage = () => {
  useContentProtection();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      sheetName: "SalesInquiries",
      "Full Name": formData.get("fullName"),
      "Phone Number": formData.get("phoneNumber"),
      "Work Email": formData.get("workEmail"),
      "Company Name": formData.get("companyName"),
      timestamp: new Date().toISOString()
    };

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Inquiry Submitted Successfully!", {
          description: "Our sales team will get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      toast.error("Submission Failed", {
        description: "There was an error submitting your request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout noPadding={true}>
      {/* Hero Section */}
      <div className="w-full relative pt-[72px] md:pt-[96px] bg-white overflow-hidden">
        <div className="relative w-full">
          {/* Banner Image - Spans full width */}
          <img 
            src={salesImg} 
            alt="ISI Security and Facility Management" 
            className="w-full h-auto object-cover"
          />
          
          {/* Floating Form Overlay (Desktop/Tablet) - Constrained to max-w-7xl for proper alignment on ultrawide screens */}
          <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">
            <div className="hidden md:block absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-full max-w-[380px] bg-white p-8 rounded-sm shadow-2xl border-r-4 border-primary z-10 pointer-events-auto">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Schedule a Free Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input required name="fullName" type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Full Name" />
                </div>
                <div>
                  <input required name="phoneNumber" type="tel" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Phone Number" />
                </div>
                <div>
                  <input required name="workEmail" type="email" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Work email" />
                </div>
                <div>
                  <input required name="companyName" type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Company Name" />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 mt-2 text-base rounded-md shadow-md bg-[#1a56db] hover:bg-[#1e40af] text-white transition-all font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Get a Free Quote"} 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Form (Displayed below banner on small screens) */}
        <div className="md:hidden w-full bg-white p-6 border-t-4 border-primary">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Schedule a Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><input required name="fullName" type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Full Name" /></div>
            <div><input required name="phoneNumber" type="tel" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Phone Number" /></div>
            <div><input required name="workEmail" type="email" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Work email" /></div>
            <div><input required name="companyName" type="text" className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" placeholder="Company Name" /></div>
            <Button type="submit" disabled={isSubmitting} className="w-full py-6 mt-2 text-base rounded-md shadow-md bg-[#1a56db] hover:bg-[#1e40af] text-white transition-all font-medium flex items-center justify-center gap-2">
              {isSubmitting ? "Submitting..." : "Get a Free Quote"}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </Button>
          </form>
        </div>
      </div>

      {/* Imported Sections to match the layout exactly */}
      <HomeStats />
      <HomeCustomers />
      <Services />
      <Certifications />
      <Testimonials />

    </Layout>
  );
};

export default SalesInquiryPage;
