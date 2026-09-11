import { useState, useMemo } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Building2, 
  Briefcase, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Clock, 
  Lock
} from 'lucide-react';
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { ContactFormData, FormErrors } from '@/types/contact';
import { homeLocations } from "@/data/locations-data";
import { useAnalytics } from "@/hooks/useAnalytics";
import { validateGeneralEmail, validatePhoneNumber } from '@/utils/validation';

export const Contact = () => {
  const { trackFormSubmission } = useAnalytics();
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    designation: '',
    serviceInterest: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  // Handle select changes
  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacyConsent: checked }));
    if (errors.privacyConsent) {
      setErrors(prev => ({ ...prev, privacyConsent: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name: Required
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Corporate / Personal Email: Required, allows Gmail, Outlook, Hotmail, Yahoo & Work domains
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailVal = validateGeneralEmail(formData.email);
      if (!emailVal.isValid) {
        newErrors.email = emailVal.message;
      }
    }

    // Company Name: Required
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Contact Number: Required
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else {
      const phoneVal = validatePhoneNumber(formData.phone);
      if (!phoneVal.isValid) {
        newErrors.phone = phoneVal.message;
      }
    }

    // Privacy Consent: Required
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy & terms';
    }

    // Designation, Services Type, and Message are all OPTIONAL

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please check the required fields highlighted in red.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Track submission to Google Sheets and Jira
      trackFormSubmission('ContactForm', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        designation: formData.designation?.trim() || 'Not specified',
        serviceInterest: formData.serviceInterest || 'General Inquiry',
        message: formData.message?.trim() || 'No additional message provided',
      });

      setIsSubmitted(true);
      toast.success('Thank you for reaching out to ISI Security!', {
        description: 'Our enterprise security consulting team will review your inquiry and connect within 24 hours.',
        duration: 6000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        designation: '',
        serviceInterest: '',
        message: '',
        privacyConsent: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or call our 24/7 national operations hotline directly.',
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Office filtering state
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions");
  const [selectedState, setSelectedState] = useState<string>("All States");
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");

  const regions = ["All Regions", "North", "South", "East", "West"];

  const states = useMemo(() => {
    let filtered = homeLocations;
    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter(l => l.region === selectedRegion);
    }
    return ["All States", ...Array.from(new Set(filtered.map(l => l.state))).sort()];
  }, [selectedRegion]);

  const cities = useMemo(() => {
    let filtered = homeLocations;
    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter(l => l.region === selectedRegion);
    }
    if (selectedState !== "All States") {
      filtered = filtered.filter(l => l.state === selectedState);
    }
    return ["All Cities", ...Array.from(new Set(filtered.map(l => l.city))).sort()];
  }, [selectedRegion, selectedState]);

  const filteredOffices = homeLocations.filter(loc => {
    const matchRegion = selectedRegion === "All Regions" || loc.region === selectedRegion;
    const matchState = selectedState === "All States" || loc.state === selectedState;
    const matchCity = selectedCity === "All Cities" || loc.city === selectedCity;
    return matchRegion && matchState && matchCity;
  });

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setSelectedState("All States");
    setSelectedCity("All Cities");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity("All Cities");
  };

  return (
    <>
      <section className="min-h-screen bg-background relative overflow-hidden pt-12 pb-16">
        {/* Background Ambient Cyber Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-br from-primary/15 via-blue-600/10 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-gradient-to-tr from-cyan-500/10 via-primary/10 to-transparent rounded-full blur-[130px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl">

          {/* Hero Header */}
          <div className="text-center mb-10 relative">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold border border-primary/20 mb-5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Enterprise Security Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-foreground">
              Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-cyan-400">Security Experts</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tailored guarding, automated surveillance, cash transit, and risk management solutions engineered for enterprise scale across India.
            </p>
          </div>

          {/* Simple & Clean Contact Form Card */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-card border border-border/70 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-10 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. We have received your inquiry and our team will get in touch with you shortly.
                  </p>
                  <div className="pt-2">
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-xl"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Row 1: Full Name & Corporate Mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/60 ${
                          errors.name ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        placeholder="e.g. Rajesh Sharma"
                        autoComplete="name"
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Corporate Mail */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                        Corporate Mail ( Gmail , Outlook , hotmail , yahoo ) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/60 ${
                          errors.email ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        placeholder="name@company.com or name@gmail.com"
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>

                  </div>

                  {/* Row 2: Company Name & Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-semibold text-foreground block">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/60 ${
                          errors.company ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        placeholder="Your Company Name"
                        autoComplete="organization"
                      />
                      {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground block">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/60 ${
                          errors.phone ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                    </div>

                  </div>

                  {/* Row 3: Designation ( Optional ) & Services Type ( Optional ) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Designation ( Optional ) */}
                    <div className="space-y-1.5">
                      <label htmlFor="designation" className="text-sm font-semibold text-foreground block">
                        Designation <span className="text-xs font-normal text-muted-foreground">( Optional )</span>
                      </label>
                      <input
                        type="text"
                        id="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-foreground placeholder:text-muted-foreground/60"
                        placeholder="e.g. Director, Manager, Consultant"
                        autoComplete="organization-title"
                      />
                    </div>

                    {/* Services Type ( Optional ) */}
                    <div className="space-y-1.5">
                      <label htmlFor="serviceInterest" className="text-sm font-semibold text-foreground block">
                        Services Type <span className="text-xs font-normal text-muted-foreground">( Optional )</span>
                      </label>
                      <Select 
                        value={formData.serviceInterest} 
                        onValueChange={(value) => handleSelectChange('serviceInterest', value)} 
                        disabled={isSubmitting}
                      >
                        <SelectTrigger 
                          id="serviceInterest" 
                          className="w-full h-12 bg-background border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                        >
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border border-border">
                          <SelectItem value="Manned Guarding">Manned Guarding</SelectItem>
                          <SelectItem value="Electronic Security & CCTV">Electronic Security & CCTV</SelectItem>
                          <SelectItem value="Cash Logistics">Cash Logistics</SelectItem>
                          <SelectItem value="Facility Management">Facility Management</SelectItem>
                          <SelectItem value="Drone Services">Drone Services</SelectItem>
                          <SelectItem value="Command Centers (SOC)">Command Centers (SOC)</SelectItem>
                          <SelectItem value="Executive Protection">Executive Protection</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                  </div>

                  {/* Row 4: Your Message ( Optional ) */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground block">
                      Your Message <span className="text-xs font-normal text-muted-foreground">( Optional )</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none text-foreground placeholder:text-muted-foreground/60"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-3 p-3.5 bg-muted/20 rounded-xl border border-border/50">
                      <Checkbox 
                        id="privacyConsent" 
                        checked={formData.privacyConsent} 
                        onCheckedChange={handleCheckboxChange} 
                        disabled={isSubmitting} 
                        className="mt-0.5" 
                      />
                      <label htmlFor="privacyConsent" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer select-none">
                        I agree to the{" "}
                        <a href="/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Privacy Policy</a>
                        {" "}and{" "}
                        <a href="/termsofservice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Terms of Service</a>.
                      </label>
                    </div>
                    {errors.privacyConsent && <p className="text-xs text-red-500">{errors.privacyConsent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[220px] h-12 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Call Directly</h3>
              <p className="text-muted-foreground text-xs mb-3">Available 24/7/365 for inquiries & emergencies</p>
              <a href="tel:+917708887878" className="text-primary font-bold hover:underline text-base">+91 77088 87878</a>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Email Desk</h3>
              <p className="text-muted-foreground text-xs mb-3">Guaranteed executive response within 24h</p>
              <a href="mailto:info@isisecurity.in" className="text-primary font-bold hover:underline text-base">info@isisecurity.in</a>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Corporate Headquarters</h3>
              <p className="text-muted-foreground text-xs mb-2">Corporate Office, Chennai</p>
              <p className="text-foreground text-xs leading-relaxed">No 97/2, Sundaram Street, Chinmaya Nagar Stage 1, Chennai, TN - 600092</p>
            </div>
          </div>

          {/* Our Offices Section */}
          <div className="relative pt-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pan-India Strategic Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-foreground">Operational Hubs & Branches</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                With verified hubs across India, our rapid response forces and regional branch managers are always within reach.
              </p>
            </div>

            {/* Region / State / City Filters */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 max-w-3xl mx-auto">
              <div className="w-full sm:w-1/3">
                <label className="text-xs font-semibold mb-1.5 block text-muted-foreground">Region</label>
                <Select value={selectedRegion} onValueChange={handleRegionChange}>
                  <SelectTrigger className="bg-card/70 border-border/60 h-11 rounded-xl">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-border/80">
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-1/3">
                <label className="text-xs font-semibold mb-1.5 block text-muted-foreground">State</label>
                <Select value={selectedState} onValueChange={handleStateChange}>
                  <SelectTrigger className="bg-card/70 border-border/60 h-11 rounded-xl">
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-border/80">
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-1/3">
                <label className="text-xs font-semibold mb-1.5 block text-muted-foreground">City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="bg-card/70 border-border/60 h-11 rounded-xl">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-border/80">
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Office Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredOffices.length > 0 ? (
                filteredOffices.map((office) => (
                  <div key={office.id} className="group bg-card/50 hover:bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                          <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm sm:text-base text-foreground">{office.title}</h3>
                          <p className="text-[11px] text-primary font-semibold uppercase tracking-wider">{office.city}, {office.state}</p>
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-muted-foreground leading-relaxed my-3">
                        {office.address.map((line, i) => (
                          <p key={i} className={line === "Coming Soon" ? "text-primary font-bold animate-pulse" : ""}>{line}</p>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-3 mt-3 space-y-1.5 text-xs">
                      {office.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="w-3.5 h-3.5 text-primary/80 flex-shrink-0" />
                          <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="font-medium hover:underline">
                            {office.phone}
                          </a>
                        </div>
                      )}
                      {office.email && (
                        <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-3.5 h-3.5 text-primary/80 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="font-medium hover:underline">
                            {office.email}
                          </a>
                        </div>
                      )}
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center bg-card/30 rounded-3xl border border-dashed border-border/60">
                  <div className="w-14 h-14 bg-muted/50 rounded-2xl flex items-center justify-center mb-3 text-muted-foreground">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">No offices found in this selection</h3>
                  <p className="text-muted-foreground text-xs max-w-sm mt-1">Try resetting the region and state filters or call our central support desk.</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => { setSelectedRegion("All Regions"); setSelectedState("All States"); setSelectedCity("All Cities"); }} 
                    className="mt-4 rounded-xl text-primary border-primary/30"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
