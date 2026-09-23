import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateWorkEmail, validateGeneralEmail, validatePhoneNumber } from '@/utils/validation';
import { useContentProtection } from "@/hooks/useContentProtection";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SEO from "@/components/SEO";

import { HomeStats } from "@/components/HomeStats";
import { HomeCustomers } from "@/components/HomeCustomers";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";

import salesImg from "@/assets/Sales inquiry.png";
import isiLogo from "@/assets/isi-logo.webp";

import { getUtmParams } from '@/utils/utm';
import { submitLeadToJira } from '@/services/jiraService';
import { generateLeadNumber } from '@/utils/leadNumber';

export const SalesInquiryPage = () => {
  useContentProtection();
  const location = useLocation();
  const navigate = useNavigate();

  const utmObj = getUtmParams();
  const utmSource = utmObj.utmSource;
  const utmMedium = utmObj.utmMedium;
  const utmCampaign = utmObj.utmCampaign;
  const utmTerm = utmObj.utmTerm;
  const utmContent = utmObj.utmContent;

  const [jobQuestion, setJobQuestion] = useState<'No' | 'Yes'>('No');
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
    const res = jobQuestion === 'Yes' ? validateGeneralEmail(value) : validateWorkEmail(value);
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
    
    const isJobSeeker = jobQuestion === 'Yes';
    if (!fullName || !phoneNumber || !workEmail || (!isJobSeeker && !companyName)) {
      toast.error("Validation Failed", {
        description: isJobSeeker ? "Please provide your name, phone, and email." : "All fields are required.",
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
    const leadNumber = generateLeadNumber();
    
    const data = {
      sheetName: isJobSeeker ? "Career_Applications" : "Google_Ad_Leads",
      leadNumber,
      "Lead Number": leadNumber,
      "Full Name": fullName,
      "Phone Number": phoneNumber,
      "Email": workEmail,
      "Work Email": workEmail,
      "Company Name": companyName || (isJobSeeker ? "Applicant" : "N/A"),
      "Position": isJobSeeker ? "Facility Management & Security Applicant" : undefined,
      "utm_source": utmSource,
      "utm_medium": utmMedium,
      "utm_campaign": utmCampaign,
      "utm_term": utmTerm,
      "utm_content": utmContent,
      timestamp: new Date().toISOString()
    };

    try {
      const scriptURL = import.meta.env.VITE_AD_CAMPAIGN_WEB_APP_URL || "https://script.google.com/macros/s/AKfycbwL1i7fOTIPdyo86zgI2AbAmeAowti2nJy7LftH2YY-MEUmir8gYOKyaS2BhrK8zNnC/exec";
      
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      });

      // Strictly only capture business leads in Jira Cloud. Career applicants are never pushed to DLF sales project!
      if (!isJobSeeker) {
        submitLeadToJira({
          leadNumber,
          name: fullName,
          email: workEmail,
          phone: phoneNumber,
          company: companyName,
          serviceRequested: 'Facility Management & Integrated Solutions',
          message: 'Sales inquiry from Integrated Services landing page',
          formName: 'Google_Ad_Leads',
          utmSource,
          utmMedium,
          utmCampaign,
          utmTerm,
          utmContent
        }).catch(err => console.warn('[JIRA SALES CAPTURE ERROR]', err));
      }

      if (isJobSeeker) {
        toast.success("Application Submitted Successfully!", {
          description: `Application Reference: ${leadNumber}. Our recruitment team will review your profile.`,
        });
      } else {
        toast.success("Inquiry Submitted Successfully!", {
          description: `Lead Reference: ${leadNumber}. Our sales team will get back to you within 24 hours.`,
        });
      }
      
      const submittedName = fullName;
      
      setFullName('');
      setPhoneNumber('');
      setWorkEmail('');
      setCompanyName('');
      setPhoneError('');
      setEmailError('');
      setJobQuestion('No');
      
      navigate('/lp/facility-management/thank-you', { 
        state: { 
          name: submittedName, 
          leadNumber, 
          fromIntegratedServices: true,
          leadType: isJobSeeker ? 'career' : 'sales'
        } 
      });
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
      <SEO 
        title="Integrated Facility Management & Security Solutions" 
        description="Comprehensive facility management, manned guarding, surveillance, and automated operations for enterprises across India."
        canonical="/lp/facility-management"
      />
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
              <h2 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                {jobQuestion === 'Yes' ? 'Submit Career Application' : 'Request an Enterprise Quote'}
              </h2>
              
              {/* Job Question Toggle */}
              <div className="mb-4 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Are you looking for a job? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setJobQuestion('No');
                      if (emailError) setEmailError('');
                    }}
                    className={`py-1.5 px-2 text-xs font-medium rounded border transition-all ${
                      jobQuestion === 'No'
                        ? 'bg-[#1a56db] text-white border-[#1a56db] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    No (Quote)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setJobQuestion('Yes');
                      if (emailError) setEmailError('');
                    }}
                    className={`py-1.5 px-2 text-xs font-medium rounded border transition-all ${
                      jobQuestion === 'Yes'
                        ? 'bg-[#1a56db] text-white border-[#1a56db] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Yes (Job)
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
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
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
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
                    className={`w-full px-4 py-2.5 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${phoneError ? 'border-red-500' : 'border-slate-200'}`} 
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
                    className={`w-full px-4 py-2.5 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400 ${emailError ? 'border-red-500' : 'border-slate-200'}`} 
                    placeholder={jobQuestion === 'Yes' ? "Email Address (e.g. name@gmail.com)" : "Work / Corporate Email"} 
                    value={workEmail}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1 leading-normal">{emailError}</p>}
                </div>
                <div>
                  <input 
                    required={jobQuestion === 'No'} 
                    name="companyName" 
                    type="text" 
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                    placeholder={jobQuestion === 'Yes' ? "Current Organization / Role (Optional)" : "Company Name"} 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 mt-2 text-sm rounded-md shadow-md bg-[#1a56db] hover:bg-[#1e40af] text-white transition-all font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting 
                    ? (jobQuestion === 'Yes' ? "Submitting Application..." : "Submitting...") 
                    : (jobQuestion === 'Yes' ? "Submit Career Application" : "Get a Free Quote")} 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Form (Displayed below banner on small screens) */}
        <div className="md:hidden w-full bg-white p-6 border-t-4 border-primary">
          <div className="flex justify-center mb-4">
            <img 
              src={isiLogo} 
              alt="ISI Security" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4 text-center">
            {jobQuestion === 'Yes' ? 'Submit Career Application' : 'Request an Enterprise Quote'}
          </h2>

          {/* Job Question Toggle Mobile */}
          <div className="mb-4 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Are you looking for a job? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setJobQuestion('No');
                  if (emailError) setEmailError('');
                }}
                className={`py-1.5 px-2 text-xs font-medium rounded border transition-all ${
                  jobQuestion === 'No'
                    ? 'bg-[#1a56db] text-white border-[#1a56db] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                No (Quote)
              </button>
              <button
                type="button"
                onClick={() => {
                  setJobQuestion('Yes');
                  if (emailError) setEmailError('');
                }}
                className={`py-1.5 px-2 text-xs font-medium rounded border transition-all ${
                  jobQuestion === 'Yes'
                    ? 'bg-[#1a56db] text-white border-[#1a56db] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Yes (Job)
              </button>
            </div>
          </div>

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
                placeholder={jobQuestion === 'Yes' ? "Email Address (e.g. name@gmail.com)" : "Work / Corporate Email"} 
                value={workEmail}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
              {emailError && <p className="text-red-500 text-xs mt-1 leading-normal">{emailError}</p>}
            </div>
            <div>
              <input 
                required={jobQuestion === 'No'} 
                name="companyName" 
                type="text" 
                className="w-full px-4 py-3 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-slate-400" 
                placeholder={jobQuestion === 'Yes' ? "Current Organization / Role (Optional)" : "Company Name"} 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full py-6 mt-2 text-base rounded-md shadow-md bg-[#1a56db] hover:bg-[#1e40af] text-white transition-all font-medium flex items-center justify-center gap-2">
              {isSubmitting 
                ? (jobQuestion === 'Yes' ? "Submitting Application..." : "Submitting...") 
                : (jobQuestion === 'Yes' ? "Submit Career Application" : "Get a Free Quote")}
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
