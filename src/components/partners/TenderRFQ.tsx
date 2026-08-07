import { useState, useMemo, useEffect } from "react";
import { 
    FileText, Download, Calendar, ArrowRight, ClipboardList, 
    ShieldCheck, Filter, Search, X, CheckSquare, ListTodo, MapPin, 
    Mail, ExternalLink, RefreshCw 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { tenderData, TenderItem } from "@/data/tender-data";
import { toast } from "sonner";
import { submitTenderRFQ } from "@/services/formService";

export const TenderRFQ = () => {
    const [selectedType, setSelectedType] = useState<string>("all");
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [selectedTender, setSelectedTender] = useState<TenderItem | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isDetailsModalOpen || isSubmitModalOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isDetailsModalOpen, isSubmitModalOpen]);
    
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        gst: "",
        message: "",
        privacy: false
    });

    const filteredTenders = useMemo(() => {
        return selectedType === "all" 
            ? tenderData 
            : tenderData.filter(t => t.type === selectedType);
    }, [selectedType]);

    const handleViewDetails = (tender: TenderItem) => {
        setSelectedTender(tender);
        setIsDetailsModalOpen(true);
    };

    const handleApply = (tender: TenderItem) => {
        setSelectedTender(tender);
        setIsSubmitModalOpen(true);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacy) {
            toast.error("Please agree to the privacy policy.");
            return;
        }
        setIsSubmitting(true);
        try {
            await submitTenderRFQ({
                ...formData,
                tenderTitle: selectedTender?.title,
                tenderRef: selectedTender?.ref,
                tenderType: selectedTender?.type,
                status: "Tender Application Submitted"
            });
            toast.success("Proposal Submitted Successfully!", {
                description: "Our procurement team will review your application and contact you."
            });
            setIsSubmitModalOpen(false);
            setFormData({ name: "", email: "", company: "", phone: "", gst: "", message: "", privacy: false });
        } catch (error) {
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const tenderTypes = ["RFQ", "EOI", "Partnership EOI", "Consultant EOI"];

    return (
        <section id="tenders" className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
                        Procurement & Partnerships
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Active <span className="text-primary italic">Tenders & RFQ</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Access our latest procurement requests, expressions of interest, and strategic partnership opportunities. We follow a transparent, strictly compliance-driven selection process.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <Button 
                        variant={selectedType === "all" ? "default" : "outline"}
                        onClick={() => setSelectedType("all")}
                        className="rounded-xl h-11 px-6 font-bold"
                    >
                        All Opportunities
                    </Button>
                    {tenderTypes.map(type => (
                        <Button 
                            key={type}
                            variant={selectedType === type ? "default" : "outline"}
                            onClick={() => setSelectedType(type)}
                            className={`rounded-xl h-11 px-6 font-bold ${selectedType === type ? 'shadow-lg shadow-primary/20' : ''}`}
                        >
                            {type}
                        </Button>
                    ))}
                </div>

                {/* List of Tenders */}
                <div className="grid gap-6 max-w-6xl mx-auto">
                    {filteredTenders.length > 0 ? (
                        filteredTenders.map((tender) => (
                            <div 
                                key={tender.id}
                                className="group bg-card border border-border/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden"
                            >
                                {/* Active Badge */}
                                <div className="absolute top-0 right-0 p-1.5 bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl border-l border-b border-green-500/20">
                                    {tender.status}
                                </div>

                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest rounded-full">
                                                {tender.type}
                                            </span>
                                            <span className="text-xs font-mono font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                                Ref: {tender.ref}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {tender.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                            {tender.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span className="font-semibold">Closing: {tender.closingDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                                <ShieldCheck className="w-4 h-4 text-primary" />
                                                <span className="font-semibold">Format: {tender.submissionFormat}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-48">
                                        <Button 
                                            variant="outline" 
                                            onClick={() => handleViewDetails(tender)}
                                            className="h-12 rounded-xl font-bold gap-2 group-hover:border-primary/50"
                                        >
                                            View Details
                                        </Button>
                                        <Button 
                                            onClick={() => handleApply(tender)}
                                            className="h-12 rounded-xl font-bold shadow-lg shadow-primary/20 gap-2"
                                        >
                                            Submit Proposal
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-background/50 rounded-3xl border border-dashed border-border/50">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-bold">No {selectedType} found</h3>
                            <p className="text-muted-foreground mt-1">Try switching to a different category or all opportunities.</p>
                            <Button variant="link" onClick={() => setSelectedType("all")} className="mt-4 text-primary">Reset Filter</Button>
                        </div>
                    )}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <RefreshCw className="w-4 h-4" /> 
                        Updated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>

            {/* Details Modal */}
            {isDetailsModalOpen && selectedTender && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300 opacity-100" onWheel={(e) => e.stopPropagation()}>
                    <div className="bg-background/95 backdrop-blur-xl w-full max-w-4xl h-full max-h-[90vh] rounded-3xl border border-border/50 shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden transform transition-all duration-300 scale-100">
                        {/* Header */}
                        <div className="flex-shrink-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b border-border/50 backdrop-blur-xl p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">{selectedTender.type}</span>
                                        <span className="text-[10px] font-mono font-medium text-muted-foreground">{selectedTender.ref}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{selectedTender.title}</h2>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => setIsDetailsModalOpen(false)} 
                                    className="rounded-full hover:bg-black/5"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar overscroll-contain">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Closing Date</span>
                                    </div>
                                    <p className="text-base font-bold text-foreground">{selectedTender.closingDate}</p>
                                </div>
                                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Submission Format</span>
                                    </div>
                                    <p className="text-base font-bold text-foreground">{selectedTender.submissionFormat}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                    Overview
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-base">{selectedTender.description}</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                    Scope of Work
                                </h3>
                                <ul className="space-y-3">
                                    {selectedTender.scopeOfWork.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <div className="mt-1.5 shrink-0"><CheckSquare className="w-4 h-4 text-primary" /></div>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {selectedTender.tiers && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold flex items-center gap-3">
                                        <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                        Technical Tiers & Specifications
                                    </h3>
                                    <div className="grid gap-6">
                                        {selectedTender.tiers.map((tier, idx) => (
                                            <div key={idx} className="bg-muted/30 border border-primary/10 rounded-2xl p-6 overflow-hidden relative">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                                <h4 className="text-lg font-bold text-primary mb-4">{tier.tier}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                                    {tier.specs.map((spec, specIdx) => (
                                                        <div key={specIdx} className="flex justify-between border-b border-border/50 pb-2">
                                                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{spec.component}</span>
                                                            <span className="text-sm font-medium text-foreground text-right">{spec.spec}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                                    Technical Requirements
                                </h3>
                                <ul className="space-y-3">
                                    {selectedTender.requirements.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <div className="mt-1.5 shrink-0"><ListTodo className="w-4 h-4 text-primary" /></div>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How to Submit */}
                            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-3xl p-8 space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    How to Submit
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    All proposals must be submitted in the prescribed format indicated in the RFP pack. 
                                    Subject line of the email should clearly state: <strong>"{selectedTender.ref} - [Your Company Name]"</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex-shrink-0 bg-background/95 border-t border-border/50 p-6 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground font-medium">Ref: {selectedTender.ref}</span>
                            <Button onClick={() => setIsDetailsModalOpen(false)} variant="secondary" className="rounded-xl px-8 font-bold">
                                Close Details
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Submission Modal */}
            {isSubmitModalOpen && selectedTender && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 opacity-100 animate-in fade-in">
                    <div className="bg-card w-full max-w-2xl rounded-[2rem] border border-border/50 shadow-2xl p-8 relative overflow-hidden transform transition-all duration-300 scale-100 translate-y-0">
                        <button onClick={() => setIsSubmitModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"><X size={20}/></button>
                        
                        <div className="mb-8">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">{selectedTender.type} Application</span>
                            <h2 className="text-2xl font-bold mt-3">Submit Proposal</h2>
                            <p className="text-muted-foreground text-sm mt-1">{selectedTender.title} (Ref: {selectedTender.ref})</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-muted-foreground ml-1">Contact Name</label>
                                    <input required value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="Your Name" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-muted-foreground ml-1">Official Email</label>
                                    <input required type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="Email@company.com" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-muted-foreground ml-1">Company Name</label>
                                    <input required value={formData.company} onChange={e => setFormData(p => ({...p, company: e.target.value}))} className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="Organization" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-muted-foreground ml-1">Phone Number</label>
                                    <input required value={formData.phone} onChange={e => setFormData(p => ({...p, phone: e.target.value}))} className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="+91 XXXX" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-muted-foreground ml-1">Proposal Highlights (Brief)</label>
                                <textarea required value={formData.message} onChange={e => setFormData(p => ({...p, message: e.target.value}))} rows={3} className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Briefly describe your capability and interest..." />
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10">
                                <Checkbox id="tender-privacy" checked={formData.privacy} onCheckedChange={(v: boolean) => setFormData(p => ({...p, privacy: v}))} />
                                <label htmlFor="tender-privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-medium">I agree to the <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and understand that further documents may be requested.</label>
                            </div>
                            <Button disabled={isSubmitting} className="w-full h-12 rounded-xl font-bold mt-4 shadow-lg shadow-primary/20">
                                {isSubmitting ? "Submitting..." : "Send Technical Proposal"}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};
