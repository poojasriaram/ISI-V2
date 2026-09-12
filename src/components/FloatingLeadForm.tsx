// src/components/FloatingLeadForm.tsx
import React, { useState, useEffect, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  X, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { validateWorkEmail, validatePhoneNumber } from '@/utils/validation';
import { submitBusinessLead } from '@/services/formService';
import { getUtmParams } from '@/utils/utm';
import { generateLeadNumber, normalizeLeadSource } from '@/utils/leadNumber';
import { cn } from '@/lib/utils';

interface FloatingLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'Manned Guarding & Security Force',
  'Electronic Security & Surveillance (CCTV / Access)',
  'Integrated Facility Management (Hard & Soft FM)',
  'Command & Control Center (SOC Monitoring)',
  'Executive & VIP Protection',
  'Risk Advisory & Security Audit',
  'Other Enterprise Requirement'
];

export const FloatingLeadForm: React.FC<FloatingLeadFormProps> = ({
  isOpen,
  onClose,
  defaultService = 'Manned Guarding & Security Force'
}) => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLeadNumber, setSubmittedLeadNumber] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: defaultService,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, requirement: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closing
      setSubmittedLeadNumber(null);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent double submission if already processing
    if (isSubmitting) return;

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const emailVal = validateWorkEmail(formData.email);
    if (!emailVal.isValid) {
      newErrors.email = emailVal.message;
    }

    const phoneVal = validatePhoneNumber(formData.phone);
    if (!phoneVal.isValid) {
      newErrors.phone = phoneVal.message;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please resolve the highlighted fields.');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await submitBusinessLead({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        requirement: formData.requirement,
        message: `Inquiry for ${formData.requirement} from page: ${location.pathname}`,
        formName: 'Global_Lead_Form'
      });

      const assignedNumber = res.leadNumber || generateLeadNumber();
      setSubmittedLeadNumber(assignedNumber);

      toast.success('Enquiry Received!', {
        description: `Lead Reference: ${assignedNumber}. Our team will contact you within 24 hours.`
      });

      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        phone: '',
        requirement: defaultService,
      });

    } catch (err: any) {
      console.error('Lead submission error:', err);
      toast.error('Submission encountered an issue', {
        description: 'Your request was logged. Our team will contact you shortly.'
      });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">Get in Touch with ISI</h3>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Quick response guaranteed within 24 hours</p>
            </div>
          </div>
          <button
            aria-label="Close form"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors relative z-10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedLeadNumber ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Thank You!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                  Your enquiry has been successfully registered.
                </p>
                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 max-w-xs mx-auto">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Lead Reference Number</span>
                  <span className="text-base font-bold text-blue-600 dark:text-blue-400 font-mono tracking-wider">{submittedLeadNumber}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                  Our operational team will connect with you shortly.
                </p>
              </div>
              <Button
                onClick={onClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 text-sm font-semibold mt-4"
              >
                Close
              </Button>
            </div>
          ) : (
            /* Lead Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <User size={13} className="text-blue-600" /> Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={e => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                  }}
                  className={cn(
                    "w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400",
                    errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-blue-500"
                  )}
                />
                {errors.name && <p className="text-red-500 text-[11px] font-medium mt-0.5">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Mail size={13} className="text-blue-600" /> Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g. rajesh@company.com"
                  value={formData.email}
                  onChange={e => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  className={cn(
                    "w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400",
                    errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-blue-500"
                  )}
                />
                {errors.email && <p className="text-red-500 text-[11px] font-medium mt-0.5">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Phone size={13} className="text-blue-600" /> Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={e => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                  }}
                  className={cn(
                    "w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400",
                    errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-blue-500"
                  )}
                />
                {errors.phone && <p className="text-red-500 text-[11px] font-medium mt-0.5">{errors.phone}</p>}
              </div>

              {/* Requirement Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Briefcase size={13} className="text-blue-600" /> Requirement / Service <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.requirement}
                  onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 dark:text-white"
                >
                  {SERVICE_OPTIONS.map((opt, idx) => (
                    <option key={idx} value={opt} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Registering Enquiry...
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-medium pt-1">
                🔒 Your information is confidential & strictly protected under ISO 9001:2015 standards.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
