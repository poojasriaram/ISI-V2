// School Safety Forms Types

// E-Book Download Form
export interface EbookFormData {
    schoolName: string;
    role: string;
    email: string;
    phone: string;
}

export interface EbookFormErrors {
    schoolName?: string;
    role?: string;
    email?: string;
    phone?: string;
}

// Consultation Request Form
export interface ConsultationFormData {
    name: string;
    schoolName: string;
    board: string;
    numberOfStudents: string;
    primaryConcern: string;
    email: string;
    phone: string;
    city: string;
}

export interface ConsultationFormErrors {
    name?: string;
    schoolName?: string;
    board?: string;
    numberOfStudents?: string;
    primaryConcern?: string;
    email?: string;
    phone?: string;
    city?: string;
}
