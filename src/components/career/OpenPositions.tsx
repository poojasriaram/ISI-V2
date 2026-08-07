import { useState, useMemo } from 'react';
import { Filter, Search, X, MapPin, Briefcase, Clock, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobMap } from "../JobMap";
import { officeLocations, openings, JobOpening } from "@/data/career-data";
import { homeLocations } from "@/data/locations-data";
import { ApplicationModal } from "./ApplicationModal";
import { JobDetailsModal } from "./JobDetailsModal";

// Get unique values for filters
const uniqueLocations = Array.from(new Set(openings.map(job => job.location))).sort();
const uniqueDepartments = Array.from(new Set(openings.map(job => job.department))).sort();
const uniqueExperience = Array.from(new Set(openings.map(job => job.experience))).sort();

export const OpenPositions = () => {
    const [location, setLocation] = useState<string>("all");
    const [department, setDepartment] = useState<string>("all");
    const [experience, setExperience] = useState<string>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Modal state
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [selectedJobDetails, setSelectedJobDetails] = useState<JobOpening | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const filteredJobs = useMemo(() => {
        return openings.filter(job => {
            const matchLoc = location === "all" || job.location === location;
            const matchDept = department === "all" || job.department === department;
            const matchExp = experience === "all" || job.experience === experience;
            return matchLoc && matchDept && matchExp;
        });
    }, [location, department, experience]);

    const resetFilters = () => {
        setLocation("all");
        setDepartment("all");
        setExperience("all");
    };

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    const handleViewDetails = (job: JobOpening) => {
        setSelectedJobDetails(job);
        setIsDetailsModalOpen(true);
    };

    const activeFiltersCount = [location, department, experience].filter(f => f !== "all").length;

    return (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Map (2/5 = 40% roughly, using col-span-5) */}
            <div className="lg:col-span-5 h-[500px] lg:h-[700px] bg-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 sticky top-28 transition-all duration-500 hover:shadow-primary/5">
                <div className="absolute top-6 left-6 z-20 p-5 bg-white/95 backdrop-blur-md border border-primary/10 rounded-2xl shadow-xl max-w-[220px] pointer-events-none transition-all duration-300 group-hover:scale-[1.03]">
                    <h3 className="text-base font-[900] mb-2 text-[#003B95]">Next-Gen PAN India</h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-tight">
                        Our strategic tech hubs cover every major region, delivering rapid AI-driven security response across the entire sub-continent.
                    </p>
                </div>
                <JobMap
                    activeCity={location === "all" ? null : location}
                    locations={homeLocations}
                />
            </div>

            {/* Right Column: Job Listings (3/5 = 60%, using col-span-7) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col h-[700px]">

                {/* Action Bar (Search & Filter) */}
                <div className="flex items-center justify-between gap-4 p-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-foreground">Open Roles</h3>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold">{filteredJobs.length}</span>
                    </div>

                    <Button
                        onClick={() => setIsFilterOpen(true)}
                        variant="outline"
                        className={`gap-2 h-10 px-4 rounded-xl border-border bg-card hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors ${activeFiltersCount > 0 ? 'border-primary/50 text-primary bg-primary/5' : ''}`}
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                        {activeFiltersCount > 0 && (
                            <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full text-[10px] flex items-center justify-center -mr-1">
                                {activeFiltersCount}
                            </span>
                        )}
                    </Button>
                </div>

                {/* Filter Modal Overlay */}
                {isFilterOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/5 animate-in fade-in duration-200">
                        <div className="bg-background/60 backdrop-blur-2xl w-full max-w-md rounded-3xl border border-white/20 shadow-2xl p-6 ring-1 ring-black/5 relative animate-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold">Filter Jobs</h3>
                                <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)} className="rounded-full hover:bg-black/5">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="location-filter" className="text-sm font-medium ml-1">Location</label>
                                    <Select value={location} onValueChange={setLocation}>
                                        <SelectTrigger id="location-filter" aria-label="Filter by Location" className="w-full h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white/80 transition-colors">
                                            <SelectValue placeholder="Location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Locations</SelectItem>
                                            {uniqueLocations.map(loc => (
                                                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="department-filter" className="text-sm font-medium ml-1">Department</label>
                                    <Select value={department} onValueChange={setDepartment}>
                                        <SelectTrigger id="department-filter" aria-label="Filter by Department" className="w-full h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white/80 transition-colors">
                                            <SelectValue placeholder="Department" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Departments</SelectItem>
                                            {uniqueDepartments.map(dept => (
                                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="experience-filter" className="text-sm font-medium ml-1">Experience</label>
                                    <Select value={experience} onValueChange={setExperience}>
                                        <SelectTrigger id="experience-filter" aria-label="Filter by Experience" className="w-full h-12 rounded-xl bg-white/50 border-white/20 focus:bg-white/80 transition-colors">
                                            <SelectValue placeholder="Experience" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">Any Experience</SelectItem>
                                            {uniqueExperience.map(exp => (
                                                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-8">
                                <Button variant="outline" className="flex-1 h-12 rounded-xl bg-transparent border-primary/20 hover:bg-primary/5 text-foreground" onClick={resetFilters}>
                                    Reset
                                </Button>
                                <Button className="flex-1 h-12 rounded-xl font-bold text-base shadow-lg shadow-primary/20" onClick={() => setIsFilterOpen(false)}>
                                    Show {filteredJobs.length} Jobs
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Job List Scrollable Area */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 pb-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="group relative bg-card hover:bg-gradient-to-r hover:from-card hover:to-accent/5 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                                                    {job.title}
                                                </h3>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
                                                    <MapPin className="w-3.5 h-3.5 text-primary/70 mt-0.5 flex-shrink-0" />
                                                    <span className="font-medium leading-snug">{job.location}</span>
                                                </div>
                                                <div className="text-sm">
                                                    <span className="text-primary font-semibold">
                                                        {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 bg-secondary/50 border border-secondary px-3 py-1 rounded-full text-xs font-semibold text-secondary-foreground">
                                                <Briefcase className="w-3 h-3" /> {job.department}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                                <Clock className="w-3 h-3" /> {job.experience}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                                        <Button
                                            onClick={() => handleViewDetails(job)}
                                            variant="outline"
                                            className="flex-1 md:w-[140px] h-10 px-6 gap-2 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                                        >
                                            <Eye className="w-4 h-4" /> View Details
                                        </Button>
                                        <Button
                                            onClick={() => handleApply(job.title)}
                                            className="flex-1 md:w-[140px] h-10 px-6 gap-2 shadow-md group-hover:shadow-primary/20 transition-all rounded-xl"
                                        >
                                            Apply <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border/50 rounded-2xl bg-muted/5 p-6 text-center">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">No roles found</h3>
                            <p className="text-muted-foreground mt-1 max-w-[250px] mx-auto">
                                We couldn't find any jobs matching your current filters.
                            </p>
                            <Button variant="link" onClick={resetFilters} className="mt-4 text-primary font-semibold">
                                Reset All Filters
                            </Button>
                        </div>
                    )}
                </div>

                <ApplicationModal
                    jobTitle={selectedJob}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

                <JobDetailsModal
                    job={selectedJobDetails}
                    isOpen={isDetailsModalOpen}
                    onClose={() => setIsDetailsModalOpen(false)}
                />

            </div>
        </div>
    );
};
