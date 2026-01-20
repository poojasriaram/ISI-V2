export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    designation: string;
    phone: string;
    location: string;
    serviceInterest: string;
    source?: string;
    message: string;
    privacyConsent: boolean;
}

export interface AirtableRecord {
    fields: Record<string, any>;
}

export interface AirtableResponse {
    id: string;
    createdTime: string;
    fields: Record<string, any>;
}

export interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    designation?: string;
    phone?: string;
    location?: string;
    serviceInterest?: string;
    message?: string;
    privacyConsent?: string;
}
