import { X, MapPin, Briefcase, Clock, Users, Calendar, DollarSign, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobOpening } from "@/data/career-data";

interface JobDetailsModalProps {
    job: JobOpening | null;
    isOpen: boolean;
    onClose: () => void;
}

export const JobDetailsModal = ({ job, isOpen, onClose }: JobDetailsModalProps) => {
    if (!isOpen || !job) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-background/95 backdrop-blur-xl w-full max-w-4xl max-h-[90vh] rounded-3xl border border-border/50 shadow-2xl ring-1 ring-white/10 overflow-hidden animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b border-border/50 backdrop-blur-xl p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{job.title}</h2>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="font-medium">{job.location}</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" />
                                    <span className="font-medium">{job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                    <span className="font-medium">{job.department}</span>
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="rounded-full hover:bg-black/5 flex-shrink-0"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-8 space-y-8 custom-scrollbar">

                    {/* Quick Info Cards */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Experience</span>
                            </div>
                            <p className="text-base font-semibold text-foreground">{job.experience}</p>
                        </div>
                        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Working Days</span>
                            </div>
                            <p className="text-base font-semibold text-foreground">{job.workingDays || 'Full-time'}</p>
                        </div>
                        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <DollarSign className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Job Type</span>
                            </div>
                            <p className="text-base font-semibold text-foreground">{job.type}</p>
                        </div>
                    </div>

                    {/* About the Role */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                            <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                            About the Role
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base">{job.description}</p>
                        {job.workingHours && (
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Working Hours:</strong> {job.workingHours}
                            </p>
                        )}
                        {job.gender && (
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Gender:</strong> {job.gender} candidates only
                            </p>
                        )}
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                            <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                            Key Responsibilities
                        </h3>
                        <ul className="space-y-3">
                            {job.responsibilities.map((resp, index) => (
                                <li key={index} className="flex gap-3 text-muted-foreground">
                                    <span className="text-primary mt-1 flex-shrink-0 font-bold">•</span>
                                    <span className="leading-relaxed text-base">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Candidate Profile */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                            <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                            Candidate Profile
                        </h3>
                        <ul className="space-y-3">
                            {job.requirements.map((req, index) => (
                                <li key={index} className="flex gap-3 text-muted-foreground">
                                    <span className="text-primary mt-1 flex-shrink-0 font-bold">•</span>
                                    <span className="leading-relaxed text-base">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Salary & Benefits */}
                    <div className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 space-y-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                            <DollarSign className="w-5 h-5 text-primary" />
                            Salary & Benefits
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base">{job.salary}</p>
                        {job.benefits && job.benefits.length > 0 && (
                            <ul className="space-y-3">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index} className="flex gap-3 text-muted-foreground">
                                        <span className="text-primary mt-1 flex-shrink-0 font-bold">•</span>
                                        <span className="leading-relaxed text-base">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* How to Apply */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            How to Apply
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base">
                            Interested candidates can send their resume to{' '}
                            <a
                                href={`mailto:${job.applicationEmail}?subject=${encodeURIComponent(job.applicationSubject)}`}
                                className="text-primary hover:underline font-semibold"
                            >
                                {job.applicationEmail}
                            </a>
                            {' '}with the subject line: <strong className="text-foreground">"{job.applicationSubject}"</strong>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-background/95 backdrop-blur-xl border-t border-border/50 p-6">
                    <Button
                        onClick={onClose}
                        className="w-full h-12 rounded-xl font-semibold"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};
