import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { useContentProtection } from "@/hooks/useContentProtection";
import SEO from "@/components/SEO";
import { ISIAcademy } from "@/components/academy/ISIAcademy";
import { 
  X, 
  Check, 
  MessageSquare, 
  Send, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  Sparkles,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitForm } from "@/services/formService";

export const AcademyPage = () => {
  useContentProtection();
  
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryCourseTitle, setEnquiryCourseTitle] = useState<string>("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenEnquiry = (programTitle?: string) => {
    const title = programTitle || "ISI Academy General Program";
    setEnquiryCourseTitle(title);
    setFormData(prev => ({ ...prev, course: title }));
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitForm({
        formType: 'course',
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        courseName: formData.course || enquiryCourseTitle,
        additionalNotes: formData.message,
        source: 'ISI Academy Landing Page'
      });

      if (response.success) {
        toast.success("Enquiry Submitted Successfully!", {
          description: "Our academic counselor will get in touch with you shortly."
        });
        handleCloseEnquiry();
      } else {
        toast.error("Submission failed", {
          description: response.message || "Please try again later or contact us directly."
        });
      }
    } catch (error) {
      toast.error("Submission Error", {
        description: "An unexpected error occurred. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="ISI Academy | The Learn → Build → Deploy Model"
        description="Engineering industry-ready professionals through an experiential three-phase academic framework, 6 campuses in Tamil Nadu, and 3-Month Industry Residencies."
        canonical="/academy"
      />

      <div className="bg-background min-h-screen">
        {/* ISI ACADEMY CONTENT */}
        <ISIAcademy onEnquireClick={(title) => handleOpenEnquiry(title)} />

        {/* ENQUIRY MODAL */}
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative">
              <button 
                onClick={handleCloseEnquiry}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Academic Counseling Enquiry</h3>
                  <p className="text-xs text-primary font-semibold">{enquiryCourseTitle}</p>
                </div>
              </div>

              <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-foreground mb-1 block">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-1 block">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground mb-1 block">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground mb-1 block">Program of Interest</label>
                  <input 
                    type="text" 
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground mb-1 block">Additional Notes / Questions</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your background, campus preference, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleCloseEnquiry}
                    className="flex-1 py-5 rounded-xl"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 py-5 rounded-xl gap-2 font-bold"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AcademyPage;
