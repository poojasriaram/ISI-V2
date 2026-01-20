import { ContactFormData, AirtableRecord, AirtableResponse } from '@/types/contact';
import { PartnerFormData } from '@/types/partner';
import { CareerFormData } from '@/types/career';
import { EbookFormData, ConsultationFormData } from '@/types/schoolSafety';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Contact Form';
const AIRTABLE_PARTNER_TABLE = import.meta.env.VITE_AIRTABLE_PARTNER_TABLE || 'Partner Applications';
const AIRTABLE_CAREER_TABLE = import.meta.env.VITE_AIRTABLE_CAREER_TABLE || 'Career Applications';
const AIRTABLE_EBOOK_TABLE = import.meta.env.VITE_AIRTABLE_EBOOK_TABLE || 'School Safety E-Book Downloads';
const AIRTABLE_CONSULTATION_TABLE = import.meta.env.VITE_AIRTABLE_CONSULTATION_TABLE || 'School Safety Consultations';

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

/**
 * Submit contact form data to Airtable
 * @param formData - The contact form data to submit
 * @returns Promise with the Airtable response
 */
export const submitContactForm = async (formData: ContactFormData): Promise<AirtableResponse> => {
    console.log('🔍 [Airtable Debug] Starting form submission...');
    console.log('📝 [Airtable Debug] Form data:', formData);

    // Validate environment variables
    if (!AIRTABLE_API_KEY) {
        console.error('❌ [Airtable Debug] API Key is missing!');
        throw new Error('Airtable API key is not configured. Please add VITE_AIRTABLE_API_KEY to your .env.local file.');
    }

    if (!AIRTABLE_BASE_ID) {
        console.error('❌ [Airtable Debug] Base ID is missing!');
        throw new Error('Airtable Base ID is not configured. Please add VITE_AIRTABLE_BASE_ID to your .env.local file.');
    }

    console.log('✅ [Airtable Debug] Environment variables validated');
    console.log('🔑 [Airtable Debug] API Key:', AIRTABLE_API_KEY.substring(0, 10) + '...');
    console.log('📦 [Airtable Debug] Base ID:', AIRTABLE_BASE_ID);
    console.log('📋 [Airtable Debug] Table Name:', AIRTABLE_TABLE_NAME);
    console.log('🌐 [Airtable Debug] API URL:', AIRTABLE_API_URL);

    // Transform form data to Airtable record format
    const record: AirtableRecord = {
        fields: {
            Name: formData.name,
            Email: formData.email,
            Company: formData.company,
            Designation: formData.designation,
            Phone: formData.phone,
            Location: formData.location,
            "Service Interest": formData.serviceInterest,
            Message: formData.message,
            Status: 'New', // Default status for new submissions
        },
    };

    // Add optional source field if provided
    if (formData.source) {
        record.fields.Source = formData.source;
    }

    console.log('📤 [Airtable Debug] Record to submit:', JSON.stringify(record, null, 2));

    try {
        console.log('🚀 [Airtable Debug] Sending request to Airtable...');

        const response = await fetch(AIRTABLE_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        console.log('📡 [Airtable Debug] Response status:', response.status, response.statusText);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ [Airtable Debug] Error response:', errorData);

            // Handle specific error cases
            if (response.status === 401) {
                throw new Error('Invalid Airtable API credentials. Please check your API key.');
            } else if (response.status === 404) {
                throw new Error('Airtable base or table not found. Please verify your Base ID and Table Name.');
            } else if (response.status === 422) {
                console.error('❌ [Airtable Debug] Field validation error. Check that all field names in Airtable match exactly.');
                throw new Error('Invalid data format. Please check your Airtable field configuration.');
            } else {
                throw new Error(errorData.error?.message || `Failed to submit form: ${response.statusText}`);
            }
        }

        const data: AirtableResponse = await response.json();
        console.log('✅ [Airtable Debug] Success! Record created:', data);
        console.log('🎉 [Airtable Debug] Record ID:', data.id);
        console.log('⏰ [Airtable Debug] Created at:', data.createdTime);

        return data;
    } catch (error) {
        console.error('💥 [Airtable Debug] Caught error:', error);

        // Re-throw custom errors
        if (error instanceof Error) {
            throw error;
        }

        // Handle network errors
        throw new Error('Network error. Please check your internet connection and try again.');
    }
};

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns true if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number format (supports various formats)
 * @param phone - Phone number to validate
 * @returns true if valid, false otherwise
 */
export const isValidPhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');

    // Check if it has 10-15 digits (international format)
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

/**
 * Submit partner application to Airtable
 * @param formData - The partner application data
 * @returns Promise with the Airtable response
 */
export const submitPartnerApplication = async (formData: PartnerFormData): Promise<AirtableResponse> => {
    console.log('🔍 [Partner Form] Starting submission...');

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials not configured');
    }

    const apiUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_PARTNER_TABLE)}`;

    const record: AirtableRecord = {
        fields: {
            Name: formData.name,
            Email: formData.email,
            Company: formData.company,
            Designation: formData.designation,
            Phone: formData.phone,
            Location: formData.location,
            'Partnership Type': formData.partnershipType,
            Message: formData.message,
            'Privacy Consent': formData.privacyConsent,
            Status: 'New',
        },
    };

    console.log('📤 [Partner Form] Submitting to:', apiUrl);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ [Partner Form] Error:', errorData);
            throw new Error(errorData.error?.message || `Failed to submit: ${response.statusText}`);
        }

        const data: AirtableResponse = await response.json();
        console.log('✅ [Partner Form] Success! Record ID:', data.id);
        return data;
    } catch (error) {
        console.error('💥 [Partner Form] Error:', error);
        throw error instanceof Error ? error : new Error('Network error');
    }
};

/**
 * Submit career application to Airtable
 * @param formData - The career application data
 * @returns Promise with the Airtable response
 */
export const submitCareerApplication = async (formData: CareerFormData): Promise<AirtableResponse> => {
    console.log('🔍 [Career Form] Starting submission...');

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials not configured');
    }

    const apiUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_CAREER_TABLE)}`;

    const record: AirtableRecord = {
        fields: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            'Job Title': formData.jobTitle,
            'Application Status': 'New',
        },
    };

    // Add cover letter with resume info
    let coverLetterText = formData.coverLetter || '';
    if (formData.resumeFileName) {
        const resumeNote = `\n\n--- Resume File: ${formData.resumeFileName} ---`;
        coverLetterText = coverLetterText ? coverLetterText + resumeNote : `Resume submitted: ${formData.resumeFileName}`;
    }
    if (coverLetterText) {
        record.fields['Cover Letter'] = coverLetterText;
    }

    console.log('📤 [Career Form] Submitting to:', apiUrl);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ [Career Form] Error:', errorData);
            throw new Error(errorData.error?.message || `Failed to submit: ${response.statusText}`);
        }

        const data: AirtableResponse = await response.json();
        console.log('✅ [Career Form] Success! Record ID:', data.id);
        return data;
    } catch (error) {
        console.error('💥 [Career Form] Error:', error);
        throw error instanceof Error ? error : new Error('Network error');
    }
};

/**
 * Submit e-book download request to Airtable
 * @param formData - The e-book download data
 * @returns Promise with the Airtable response
 */
export const submitEbookDownload = async (formData: EbookFormData): Promise<AirtableResponse> => {
    console.log('🔍 [E-Book Form] Starting submission...');

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials not configured');
    }

    const apiUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_EBOOK_TABLE)}`;

    const record: AirtableRecord = {
        fields: {
            'School Name': formData.schoolName,
            Role: formData.role,
            Email: formData.email,
            Phone: formData.phone,
            'Follow-up Status': 'Not Contacted',
            Source: 'School Safety Landing Page',
        },
    };

    console.log('📤 [E-Book Form] Submitting to:', apiUrl);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ [E-Book Form] Error:', errorData);
            throw new Error(errorData.error?.message || `Failed to submit: ${response.statusText}`);
        }

        const data: AirtableResponse = await response.json();
        console.log('✅ [E-Book Form] Success! Record ID:', data.id);
        return data;
    } catch (error) {
        console.error('💥 [E-Book Form] Error:', error);
        throw error instanceof Error ? error : new Error('Network error');
    }
};

/**
 * Submit consultation request to Airtable
 * @param formData - The consultation request data
 * @returns Promise with the Airtable response
 */
export const submitConsultationRequest = async (formData: ConsultationFormData): Promise<AirtableResponse> => {
    console.log('🔍 [Consultation Form] Starting submission...');

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        throw new Error('Airtable credentials not configured');
    }

    const apiUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_CONSULTATION_TABLE)}`;

    const record: AirtableRecord = {
        fields: {
            Name: formData.name,
            'School Name': formData.schoolName,
            Board: formData.board,
            'Number of Students': parseInt(formData.numberOfStudents) || 0,
            'Primary Concern': formData.primaryConcern,
            Email: formData.email,
            Phone: formData.phone,
            City: formData.city,
            'Consultation Status': 'New Request',
        },
    };

    console.log('📤 [Consultation Form] Submitting to:', apiUrl);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ [Consultation Form] Error:', errorData);
            throw new Error(errorData.error?.message || `Failed to submit: ${response.statusText}`);
        }

        const data: AirtableResponse = await response.json();
        console.log('✅ [Consultation Form] Success! Record ID:', data.id);
        return data;
    } catch (error) {
        console.error('💥 [Consultation Form] Error:', error);
        throw error instanceof Error ? error : new Error('Network error');
    }
};

