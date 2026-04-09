import { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, User, Building2, MapPinIcon, MessageSquare, Globe, Send, CheckCircle2 } from 'lucide-react';
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { ContactFormData, FormErrors } from '@/types/contact';
import { homeLocations } from "@/data/locations-data";
import { useAnalytics } from "@/hooks/useAnalytics";

// Local validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

export const Contact = () => {
  const { trackFormSubmission } = useAnalytics();
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    designation: '',
    phone: '',
    location: '',
    serviceInterest: '',
    source: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      // Log form data (Airtable integration removed)
      console.log('Contact Form Submission:', formData);

      // Track submission to Google Sheets
      trackFormSubmission('ContactForm', formData);

      toast.success('Thank you for contacting us!', {
        description: 'We have received your message and will get back to you within 24 hours.',
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        designation: '',
        phone: '',
        location: '',
        serviceInterest: '',
        source: '',
        message: '',
        privacyConsent: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form', {
        description: 'Please try again later or contact us directly.',
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
      <section className="min-h-screen bg-background relative overflow-hidden pt-12 pb-10">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">

          {/* Hero Section */}
          <div className="text-center mb-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500">Security Future</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Share your requirements and our security experts will craft a tailored solution for your organization
            </p>
          </div>

          {/* Contact Form - Premium Card */}
          <div className="mb-12 relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Personal & Company Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.name ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.email ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.company ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="Your Company"
                    />
                    {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="designation" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.designation ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="Your Role"
                    />
                    {errors.designation && <p className="text-xs text-red-500">{errors.designation}</p>}
                  </div>
                </div>

                {/* Row 2: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.phone ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-primary" />
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.location ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="City, State"
                    />
                    {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Service Interest <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.serviceInterest} onValueChange={(value) => handleSelectChange('serviceInterest', value)} disabled={isSubmitting}>
                      <SelectTrigger id="service" className={`w-full h-12 bg-background/50 border rounded-xl hover:border-primary/30 transition-colors ${errors.serviceInterest ? 'border-red-500' : 'border-border/50'}`}>
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Manned Guarding">Manned Guarding</SelectItem>
                        <SelectItem value="Electronic Security">Electronic Security</SelectItem>
                        <SelectItem value="Cash Management">Cash Management</SelectItem>
                        <SelectItem value="Facility Management">Facility Management</SelectItem>
                        <SelectItem value="Drone Services">Drone Services</SelectItem>
                        <SelectItem value="Command Centers">Command Centers</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceInterest && <p className="text-xs text-red-500">{errors.serviceInterest}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="source" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      How did you find us?
                    </label>
                    <Select value={formData.source} onValueChange={(value) => handleSelectChange('source', value)} disabled={isSubmitting}>
                      <SelectTrigger id="source" className="w-full h-12 bg-background/50 border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                        <SelectValue placeholder="Select Source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Google Search">Google Search</SelectItem>
                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        <SelectItem value="Referral">Referral</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Advertisement">Advertisement</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none hover:border-primary/30 ${errors.message ? 'border-red-500' : 'border-border/50'}`}
                    placeholder="Tell us about your security requirements..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Privacy Policy */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/30">
                    <Checkbox id="privacy" checked={formData.privacyConsent} onCheckedChange={handleCheckboxChange} disabled={isSubmitting} className="mt-0.5" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>
                      {" "}and{" "}
                      <a href="/terms-of-service" className="text-primary hover:underline font-medium">Terms & Conditions</a>
                    </label>
                  </div>
                  {errors.privacyConsent && <p className="text-xs text-red-500">{errors.privacyConsent}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-12 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Available 24/7 for emergencies</p>
              <a href="tel:+917708887878" className="text-primary font-semibold hover:underline">+91 77088 87878</a>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">We'll respond within 24 hours</p>
              <a href="mailto:info@isisecurity.in" className="text-primary font-semibold hover:underline">info@isisecurity.in</a>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Corporate Office, Chennai</p>
              <p className="text-primary font-semibold">Virugambakkam, Chennai</p>
            </div>
          </div>

          {/* Our Offices Section */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-6">
                <MapPin className="w-4 h-4" />
                Pan-India Presence
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Offices</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                With a strong presence across India, we are always within reach to serve your security needs
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <div className="w-full md:w-56">
                <label className="text-sm font-semibold mb-2 block text-muted-foreground">Select Region</label>
                <Select value={selectedRegion} onValueChange={handleRegionChange}>
                  <SelectTrigger className="bg-card/50 border-border/50 h-12 rounded-xl">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-56">
                <label className="text-sm font-semibold mb-2 block text-muted-foreground">Select State</label>
                <Select value={selectedState} onValueChange={handleStateChange}>
                  <SelectTrigger className="bg-card/50 border-border/50 h-12 rounded-xl">
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-56">
                <label className="text-sm font-semibold mb-2 block text-muted-foreground">Select City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="bg-card/50 border-border/50 h-12 rounded-xl">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[400px]">
              {filteredOffices.length > 0 ? (
                filteredOffices.map((office, index) => (
                  <div key={office.id} className="group bg-card/40 hover:bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base">{office.title}</h3>
                        <p className="text-xs text-primary font-semibold uppercase">{office.city}, {office.state}</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm flex-grow">
                      <div className="text-muted-foreground leading-relaxed">
                        {office.address.map((line, i) => (
                          <p key={i} className={line === "Coming Soon" ? "text-primary font-bold animate-pulse" : ""}>{line}</p>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-4 mt-4 space-y-2">
                      {office.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground group/contact">
                          <Phone className="w-4 h-4 text-primary/70 flex-shrink-0" />
                          <span className="font-medium hover:text-primary transition-colors cursor-pointer text-sm">
                            {office.phone}
                          </span>
                        </div>
                      )}
                      {office.email && (
                        <div className="flex items-center gap-2 text-muted-foreground group/contact">
                          <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                          <span className="font-medium hover:text-primary transition-colors cursor-pointer text-sm">
                            {office.email}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">No offices found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to find an office in your area.</p>
                  <Button variant="link" onClick={() => { setSelectedRegion("All Regions"); setSelectedCity("All Cities"); }} className="mt-4 text-primary">
                    Clear all filters
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
