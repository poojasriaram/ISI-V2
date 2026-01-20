// Career Application Form Types
export interface CareerFormData {
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    coverLetter?: string;
    resumeFileName?: string;
}

export interface CareerFormErrors {
    name?: string;
    email?: string;
    phone?: string;
    resume?: string;
}
