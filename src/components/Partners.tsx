import { useState } from "react";
import { Handshake, Award, Globe2, Zap, ArrowRight, CheckCircle2, User, Mail, Building2, Phone, MapPinIcon, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { PartnerFormData, PartnerFormErrors } from "@/types/partner";
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

const partnerTypes = [
  {
    icon: Handshake,
    title: "Technology Partners",
    description: "Integration partners for security hardware, software, and IoT ecosystems.",
    count: "120+",
  },
  {
    icon: Award,
    title: "Certified Vendors",
    description: "Authorized resellers and service providers across regions.",
    count: "200+",
  },
  {
    icon: Globe2,
    title: "Government Bodies",
    description: "Collaboration with regulatory and law enforcement agencies.",
    count: "15+",
  },
  {
    icon: Zap,
    title: "Innovation Partners",
    description: "Research collaborations for next-gen security solutions.",
    count: "8",
  },
];

const benefits = [
  "Access to enterprise client network",
  "Co-branded marketing support",
  "Technical training & certification",
  "Priority support channel",
  "Revenue sharing programs",
  "Joint solution development",
];

export const Partners = () => {
  const { trackFormSubmission } = useAnalytics();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState<PartnerFormData>({
    name: '',
    email: '',
    company: '',
    designation: '',
    phone: '',
    location: '',
    partnershipType: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<PartnerFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof PartnerFormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  // Handle select changes
  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof PartnerFormErrors]) {
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
    const newErrors: PartnerFormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.partnershipType) newErrors.partnershipType = 'Please select a partnership type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.privacyConsent) newErrors.privacyConsent = 'You must agree to the privacy policy';

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
      // Record form submission logic here (e.g. google sheets) if needed

      toast.success('Application submitted successfully!', {
        description: 'Our partnership team has received your details and will contact you within 48 hours.',
        duration: 5000,
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        company: '',
        designation: '',
        phone: '',
        location: '',
        partnershipType: '',
        message: '',
        privacyConsent: false,
      });
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Partner form submission error:', error);
      toast.error('Failed to submit application', {
        description: 'Please try again later.',
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partners" className="pt-12 pb-8 bg-background relative overflow-hidden scroll-mt-10">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
              Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building a Secure Ecosystem Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our partner network spans technology providers, government bodies, and industry leaders,
              enabling us to deliver comprehensive security solutions.
            </p>

            {/* Partner Types */}
            <div className="space-y-4 mb-10">
              {partnerTypes.map((partner, index) => (
                <div
                  key={index}
                  className="group flex gap-4 items-start p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <partner.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{partner.title}</h3>
                      <span className="text-2xl font-bold text-primary">{partner.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dialog Trigger Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/50">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-center mb-2">
                    Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500">Partner Network</span>
                  </DialogTitle>
                  <DialogDescription className="text-center text-base">
                    Fill out the form below and our partnership team will review your application and get back to you within 48 hours
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  {/* Row 1: Personal & Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.name ? 'border-red-500' : 'border-border/50'}`}
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.email ? 'border-red-500' : 'border-border/50'}`}
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.company ? 'border-red-500' : 'border-border/50'}`}
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.designation ? 'border-red-500' : 'border-border/50'}`}
                        placeholder="Your Role"
                      />
                      {errors.designation && <p className="text-xs text-red-500">{errors.designation}</p>}
                    </div>
                  </div>

                  {/* Row 2: Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.phone ? 'border-red-500' : 'border-border/50'}`}
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
                        className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30 ${errors.location ? 'border-red-500' : 'border-border/50'}`}
                        placeholder="City, State"
                      />
                      {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="partner-type" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Handshake className="w-4 h-4 text-primary" />
                        Partnership Type <span className="text-red-500">*</span>
                      </label>
                      <Select value={formData.partnershipType} onValueChange={(value) => handleSelectChange('partnershipType', value)} disabled={isSubmitting}>
                        <SelectTrigger id="partner-type" className={`w-full h-11 bg-background/50 border rounded-xl hover:border-primary/30 transition-colors ${errors.partnershipType ? 'border-red-500' : 'border-border/50'}`}>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology Partner">Technology Partner</SelectItem>
                          <SelectItem value="Certified Vendor">Certified Vendor</SelectItem>
                          <SelectItem value="Reseller">Reseller</SelectItem>
                          <SelectItem value="Innovation Partner">Innovation Partner</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.partnershipType && <p className="text-xs text-red-500">{errors.partnershipType}</p>}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Tell Us About Your Organization <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 bg-background/50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none hover:border-primary/30 ${errors.message ? 'border-red-500' : 'border-border/50'}`}
                      placeholder="Describe your organization, services, and why you'd like to partner with us..."
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border/30">
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
                  <div className="flex justify-center pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="px-10 h-12 text-base font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Become a Partner'}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right Content - Benefits Card */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Main Card */}
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-6">
                  Partner Benefits
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Why Partner With Us?
                </h3>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Partner Retention</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-3xl font-bold text-primary">2.5x</div>
                    <div className="text-xs text-muted-foreground">Avg. Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">72hr</div>
                    <div className="text-xs text-muted-foreground">Onboarding Time</div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
