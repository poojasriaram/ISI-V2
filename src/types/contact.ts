export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    designation?: string;
    serviceInterest?: string;
    openPosition?: string;
    jobQuestion?: 'Yes' | 'No';
    message?: string;
    location?: string;
    source?: string;
    privacyConsent: boolean;
}

export interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    designation?: string;
    serviceInterest?: string;
    openPosition?: string;
    jobQuestion?: string;
    message?: string;
    location?: string;
    privacyConsent?: string;
}

