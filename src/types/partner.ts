// Partner Application Form Types
export interface PartnerFormData {
    name: string;
    email: string;
    company: string;
    designation: string;
    phone: string;
    location: string;
    partnershipType: string;
    message: string;
    privacyConsent: boolean;
}

export interface PartnerFormErrors {
    name?: string;
    email?: string;
    company?: string;
    designation?: string;
    phone?: string;
    location?: string;
    partnershipType?: string;
    message?: string;
    privacyConsent?: string;
}
