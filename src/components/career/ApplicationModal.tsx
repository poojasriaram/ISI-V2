import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CareerFormData, CareerFormErrors } from "@/types/career";
import { submitCareerApplication, isValidEmail, isValidPhone } from "@/services/airtable";

interface ApplicationModalProps {
    jobTitle: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ApplicationModal = ({ jobTitle, isOpen, onClose }: ApplicationModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form states
    const [formData, setFormData] = useState<CareerFormData>({
        name: '',
        email: '',
        phone: '',
        jobTitle: jobTitle || '',
        coverLetter: '',
        resumeFileName: '',
    });
    const [errors, setErrors] = useState<CareerFormErrors>({});
    const [resume, setResume] = useState<File | null>(null);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: CareerFormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!isValidPhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!resume) {
            newErrors.resume = 'Resume is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error('Please fill all required fields correctly');
            return;
        }

        setIsSubmitting(true);

        try {
            // Submit to Airtable with resume filename
            const submissionData: CareerFormData = {
                ...formData,
                resumeFileName: resume?.name || '',
                jobTitle: jobTitle || formData.jobTitle,
            };

            await submitCareerApplication(submissionData);

            toast.success('Application submitted successfully!', {
                description: 'We\'ll review your application and get back to you soon.',
                duration: 5000,
            });

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                onClose();
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    jobTitle: '',
                    coverLetter: '',
                    resumeFileName: '',
                });
                setResume(null);
                setErrors({});
            }, 2000);
        } catch (error) {
            console.error('Career application error:', error);
            toast.error('Failed to submit application', {
                description: error instanceof Error ? error.message : 'Please try again later.',
                duration: 7000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px]">
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle>Apply for {jobTitle}</DialogTitle>
                            <DialogDescription>
                                Submit your application details below. We'll get back to you soon.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                    className={errors.name ? 'border-red-500' : ''}
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="john@example.com"
                                    disabled={isSubmitting}
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                    placeholder="+91 98765 43210"
                                    disabled={isSubmitting}
                                    className={errors.phone ? 'border-red-500' : ''}
                                />
                                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="resume">Resume/CV</Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                                    className={`cursor-pointer ${errors.resume ? 'border-red-500' : ''}`}
                                    disabled={isSubmitting}
                                />
                                {errors.resume && <p className="text-xs text-red-500">{errors.resume}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                                <Textarea
                                    id="cover-letter"
                                    value={formData.coverLetter}
                                    onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                                    placeholder="Tell us why you're a good fit..."
                                    className="h-24"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        </DialogFooter>
                    </form>
                ) : (
                    <div className="py-10 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-3xl">🎉</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Application Received!</h3>
                            <p className="text-muted-foreground mt-2">Thanks for applying to {jobTitle}.<br />We'll review your application and be in touch.</p>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
