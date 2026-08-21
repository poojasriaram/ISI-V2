import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { validateWorkEmail, validatePhoneNumber } from '@/utils/validation';
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
import isiLogo from "@/assets/isi-logo.webp";

import { getUtmParams } from '@/utils/utm';

export const SalesInquiryPage = () => {
  useContentProtection();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const utmObj = getUtmParams();
  const utmSource = utmObj.utmSource;
  const utmMedium = utmObj.utmMedium;
  const utmCampaign = utmObj.utmCampaign;
  const utmTerm = utmObj.utmTerm;
  const utmContent = utmObj.utmContent;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === '/solutions') {
      document.title = "Integrated Solutions - ISI Security";
    } else {
      document.title = "Integrated Services - ISI Security";
    }
  }, [location.pathname]);

  const validatePhone = (value: string): boolean => {
    const res = validatePhoneNumber(value);
    setPhoneError(res.message);
    return res.isValid;
  };

  const validateEmail = (value: string): boolean => {
    const res = validateWorkEmail(value);
    setEmailError(res.message);
    return res.isValid;
  };

  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validatePhone(e.target.value);
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhoneNumber(val);
    if (phoneError) {
      validatePhone(val);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setWorkEmail(val);
    if (emailError) {
      validateEmail(val);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!fullName || !phoneNumber || !workEmail || !companyName) {
      toast.error("Validation Failed", {
        description: "All fields are required.",
      });
      return;
    }

    const isPhoneValid = validatePhone(phoneNumber);
    const isEmailValid = validateEmail(workEmail);

    if (!isPhoneValid || !isEmailValid) {
      toast.error("Validation Failed", {
        description: "Please correct the errors in the form.",
      });
      return;
    }

    setIsSubmitting(true);
    
    const data = {
      sheetName: "AdCampaign",
      "Full Name": fullName,
      "Phone Number": phoneNumber,
      "Work Email": workEmail,
      "Company Name": companyName,
      "utm_source": utmSource,
      "utm_medium": utmMedium,
      "utm_campaign": utmCampaign,
      "utm_term": utmTerm,
      "utm_content": utmContent,
      timestamp: new Date().toISOString()
    };

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Inquiry Submitted Successfully!", {
          description: "Our sales team will get back to you within 24 hours.",
        });
        const submittedName = fullName;
        
        setFullName('');
        setPhoneNumber('');
        setWorkEmail('');
        setCompanyName('');
        setPhoneError('');
        setEmailError('');
        
        navigate('/lp/facility-management/thank-you', { state: { name: submittedName, fromIntegratedServices: true } });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      toast.error("Submission Failed", {
        description: "Something went wrong while submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout noPadding={true} hideHeaderFooter={true}>
      {/* Hero Section */}
      <div className="w-full relative pt-0 bg-white overflow-hidden">
        <div className="relative w-full">
          {/* Company Logo Overlay */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 lg:left-12 z-20">
            <img 
              src={isiLogo} 
              alt="ISI Security" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Banner Image - Spans full width */}
          <img 
            src={salesImg} 
            alt="ISI Security and Facility Management" 
            className="w-full h-auto object-cover"
          />
          
          {/* Floating Form Overlay (Desktop/Tablet) */}
          <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">
            <div className="hidden md:block absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-full max-w-[380px] bg-white p-8 rounded-sm shadow-2xl border-r-4 border-primary z-10 pointer-events-auto">
              <div className="flex justify-center mb-6">
                <img 
                  src={isiLogo} 
                  alt="ISI Security" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">Schedule a Free Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="utm_source" value={utmSource} />
                <input type="hidden" name="utm_medium" value={utmMedium} />
                <input type="hidden" name="utm_campaign" value={utmCampaign} />
                <input type="hidden" name="utm_term" value={utmTerm} />
                <input type="hidden" name="utm_content" value={utmContent} />
                <div>
                  <input 
                    required 
                    name="fullName" 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                    placeholder="Full Name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <input 
                    required 
                    name="phoneNumber" 
                    type="tel" 
                    className={`w-full px-4 py-3 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${phoneError ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="Phone Number" 
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1 leading-normal">{phoneError}</p>}
                </div>
                <div>
                  <input 
                    required 
                    name="workEmail" 
                    type="email" 
                    className={`w-full px-4 py-3 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${emailError ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="Work email" 
                    value={workEmail}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1 leading-normal">{emailError}</p>}
                </div>
                <div>
                  <input 
                    required 
                    name="companyName" 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                    placeholder="Company Name" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
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
          <div className="flex justify-center mb-6">
            <img 
              src={isiLogo} 
              alt="ISI Security" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">Schedule a Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="utm_source" value={utmSource} />
            <input type="hidden" name="utm_medium" value={utmMedium} />
            <input type="hidden" name="utm_campaign" value={utmCampaign} />
            <input type="hidden" name="utm_term" value={utmTerm} />
            <input type="hidden" name="utm_content" value={utmContent} />
            <div>
              <input 
                required 
                name="fullName" 
                type="text" 
                className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                placeholder="Full Name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <input 
                required 
                name="phoneNumber" 
                type="tel" 
                className={`w-full px-4 py-3 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${phoneError ? 'border-red-500' : 'border-slate-200'}`}
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur}
              />
              {phoneError && <p className="text-red-500 text-xs mt-1 leading-normal">{phoneError}</p>}
            </div>
            <div>
              <input 
                required 
                name="workEmail" 
                type="email" 
                className={`w-full px-4 py-3 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${emailError ? 'border-red-500' : 'border-slate-200'}`}
                placeholder="Work email" 
                value={workEmail}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
              {emailError && <p className="text-red-500 text-xs mt-1 leading-normal">{emailError}</p>}
            </div>
            <div>
              <input 
                required 
                name="companyName" 
                type="text" 
                className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                placeholder="Company Name" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full py-6 mt-2 text-base rounded-md shadow-md bg-[#1a56db] hover:bg-[#1e40af] text-white transition-all font-medium flex items-center justify-center gap-2">
              {isSubmitting ? "Submitting..." : "Get a Free Quote"}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </Button>
          </form>
        </div>
      </div>

      {/* Section 2: Client Logos */}
      <HomeCustomers />

      {/* Section 3: Remaining Sections */}
      <HomeStats hideCTA={true} />
      <Services hideConsultation={true} />
      <Certifications />
      <Testimonials />

    </Layout>
  );
};

export default SalesInquiryPage;
