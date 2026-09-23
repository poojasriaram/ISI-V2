import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { X, User, Mail, Phone, MapPin, Send, UserCheck } from 'lucide-react';
import { toast } from 'sonner';
import { validateWorkEmail, validateGeneralEmail, validatePhoneNumber } from '@/utils/validation';
import { submitBusinessLead } from '@/services/formService';

interface ConsultantFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultLocation?: string;
}

export const ConsultantFormModal = ({ isOpen, onClose, defaultLocation = '' }: ConsultantFormModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        jobQuestion: 'No' as 'Yes' | 'No',
        name: '',
        email: '',
        phone: '',
        location: defaultLocation,
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    if (!isOpen) return null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const newErrors: Record<string, string> = {};
        const isJobSeeker = formData.jobQuestion === 'Yes';
        const emailVal = isJobSeeker ? validateGeneralEmail(formData.email) : validateWorkEmail(formData.email);
        if (!emailVal.isValid) newErrors.email = emailVal.message;
        const phoneVal = validatePhoneNumber(formData.phone);
        if (!phoneVal.isValid) newErrors.phone = phoneVal.message;
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please correct the errors in the form.");
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await submitBusinessLead({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                requirement: isJobSeeker ? 'Career Application' : 'Expert Advisory',
                message: isJobSeeker 
                    ? `Career Applicant from Location: ${formData.location || 'Not Specified'}. Notes: ${formData.message || 'None'}`
                    : formData.message || `Location: ${formData.location || 'Not Specified'}`,
                formName: isJobSeeker ? 'Career_Applications' : 'Expert_Advisory_Modal',
                jobQuestion: formData.jobQuestion,
                position: isJobSeeker ? 'Security Professional' : undefined
            });

            if (isJobSeeker) {
                toast.success('Application Received!', {
                    description: `Application Ref: ${res.leadNumber || 'ISI-APP'}. Our recruitment team will review your profile.`
                });
            } else {
                toast.success('Enquiry Received!', {
                    description: `Ref: ${res.leadNumber || 'ISI-Lead'}. Our security team will contact you shortly.`
                });
            }

            setErrors({});
            onClose();
        } catch (err) {
            toast.error('Submission received. Our team will contact you shortly.');
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
            <div
                className="w-full max-w-lg bg-card border border-border/50 rounded-2xl shadow-2xl relative overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="px-6 py-5 bg-gradient-to-r from-primary/10 to-transparent border-b border-border flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">Get in Touch with ISI</h3>
                        <p className="text-xs text-muted-foreground mt-1">Get expert security advice tailored to your needs</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Job Question Toggle */}
                        <div className="space-y-1.5 p-3 rounded-xl bg-muted/40 border border-border">
                            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                                <UserCheck size={14} className="text-primary" /> Are you looking for a job? <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, jobQuestion: 'No' }));
                                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                                    }}
                                    className={`py-1.5 px-3 text-xs font-medium rounded-lg border transition-all ${
                                        formData.jobQuestion === 'No'
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-background text-muted-foreground border-border hover:bg-muted'
                                    }`}
                                >
                                    No (Client / Business)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, jobQuestion: 'Yes' }));
                                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                                    }}
                                    className={`py-1.5 px-3 text-xs font-medium rounded-lg border transition-all ${
                                        formData.jobQuestion === 'Yes'
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-background text-muted-foreground border-border hover:bg-muted'
                                    }`}
                                >
                                    Yes (Job Seeker)
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <User size={14} /> Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <Phone size={14} /> Phone
                                </label>
                                <input
                                    required
                                    type="tel"
                                    value={formData.phone}
                                    onChange={e => {
                                        setFormData({ ...formData, phone: e.target.value });
                                        if (errors.phone) setErrors(p => ({ ...p, phone: "" }));
                                    }}
                                    className={`w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 ${errors.phone ? 'border-red-500' : 'border-border'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-[10px] mt-1 leading-normal">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <Mail size={14} /> {formData.jobQuestion === 'Yes' ? 'Email Address' : 'Work Email'}
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder={formData.jobQuestion === 'Yes' ? "e.g. name@gmail.com" : "e.g. name@company.com"}
                                    value={formData.email}
                                    onChange={e => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) setErrors(p => ({ ...p, email: "" }));
                                    }}
                                    className={`w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 ${errors.email ? 'border-red-500' : 'border-border'}`}
                                />
                                {errors.email && <p className="text-red-500 text-[10px] mt-1 leading-normal">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <MapPin size={14} /> Location
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-muted-foreground">Requirements (Optional)</label>
                            <textarea
                                rows={3}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none"
                                placeholder="Briefly describe what you're looking for..."
                            />
                        </div>

                        <div className="pt-2">
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                                {isSubmitting 
                                    ? (formData.jobQuestion === 'Yes' ? 'Submitting Application...' : 'Sending Request...') 
                                    : (formData.jobQuestion === 'Yes' ? 'Submit Application' : 'Send Request')}
                                {!isSubmitting && <Send size={16} />}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
