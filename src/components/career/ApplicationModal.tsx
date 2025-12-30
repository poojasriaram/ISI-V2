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

interface ApplicationModalProps {
    jobTitle: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ApplicationModal = ({ jobTitle, isOpen, onClose }: ApplicationModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resume, setResume] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                onClose();
                // Reset form
                setName("");
                setEmail("");
                setPhone("");
                setResume(null);
            }, 2000);
        }, 1500);
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="resume">Resume/CV</Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                                    className="cursor-pointer"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                                <Textarea
                                    id="cover-letter"
                                    placeholder="Tell us why you're a good fit..."
                                    className="h-24"
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
