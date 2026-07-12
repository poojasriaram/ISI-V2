import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useAnalytics } from '@/hooks/useAnalytics';

import mascotImg from '../assets/security_mascot_sad.webp'; // I will copy the generated image here later or reference it if I can

export const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [feedback, setFeedback] = useState('');
    const { trackFormSubmission, trackExitIntent } = useAnalytics();

    useEffect(() => {
        // Check if already shown in this session
        const shownInSession = sessionStorage.getItem('exitIntentShown');
        if (shownInSession) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Detect if mouse leaves the top of the viewport
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitIntentShown', 'true');
                trackExitIntent();
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShown]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!feedback.trim()) return;

        // Track feedback
        trackFormSubmission('ExitIntentFeedback', {
            feedback,
            url: window.location.href,
            timestamp: new Date().toISOString()
        });

        toast.success("Thank you for your feedback!", {
            description: "We're constantly working to improve our security services."
        });
        
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-background rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-muted-foreground" />
                        </button>

                        <div className="p-8 text-center">
                            {/* Mascot Illustration Placeholder - I'll need to figure out the path since it's dynamic */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-48 h-48 relative">
                                    {/* Use a placeholder circle if image path is tricky, but let's try to pass the actual image later */}
                                    <img loading="lazy" 
                                        src={mascotImg} 
                                        alt="Security Mascot" 
                                        width="192"
                                        height="192"
                                        className="w-full h-full object-contain relative z-10"
                                    />
                                    {/* Fallback Icon if image fails */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5 rounded-full">
                                        <MessageSquare className="w-20 h-20 text-primary/20" />
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Wait, why are you leaving?
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Your safety is our priority. Let us know how we can improve your experience.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative group">
                                    <textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        placeholder="Please share your feedback and help us improve :)"
                                        className="w-full min-h-[100px] p-4 bg-muted/50 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none hover:border-primary/30 text-sm"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <Button 
                                        type="submit" 
                                        className="w-full h-14 text-white font-bold rounded-2xl bg-[#00A651] hover:bg-[#008F45] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-500/20"
                                    >
                                        Submit Feedback
                                    </Button>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t border-border" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground font-semibold">Or Reach Out Directly</span>
                                        </div>
                                    </div>

                                    <Button 
                                        type="button"
                                        onClick={() => {
                                            trackFormSubmission('ExitIntentFeedback', {
                                                feedback: 'Clicked WhatsApp from Exit Popup',
                                                url: window.location.href,
                                                timestamp: new Date().toISOString()
                                            });
                                            window.open('https://wa.me/917708886868', '_blank');
                                        }}
                                        className="w-full h-14 text-white font-bold rounded-2xl bg-[#25D366] hover:bg-[#128C7E] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-5 h-5 fill-white" />
                                        Chat on WhatsApp
                                    </Button>
                                </div>
                                
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                    We value your privacy
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
