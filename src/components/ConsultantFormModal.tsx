import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { X, User, Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ConsultantFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultLocation?: string;
}

export const ConsultantFormModal = ({ isOpen, onClose, defaultLocation = '' }: ConsultantFormModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: defaultLocation,
        message: '',
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.success('Consultation request sent!', {
            description: "Our security consultant will contact you shortly."
        });

        setIsSubmitting(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
            <div
                className="w-full max-w-lg bg-card border border-border/50 rounded-2xl shadow-2xl relative overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="px-6 py-5 bg-gradient-to-r from-primary/10 to-transparent border-b border-border flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">Speak to a Consultant</h3>
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
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                                    <Mail size={14} /> Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                                />
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
                                {isSubmitting ? 'Sending Request...' : 'Send Request'}
                                {!isSubmitting && <Send size={16} />}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
