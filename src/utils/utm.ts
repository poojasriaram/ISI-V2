// src/utils/utm.ts

export interface UtmParams {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmTerm: string;
    utmContent: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    "UTM Source": string;
    "UTM Medium": string;
    "UTM Campaign": string;
    "UTM Term": string;
    "UTM Content": string;
}

const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

/**
 * Call on app mount / page navigation to capture and persist UTM parameters in localStorage.
 */
export function captureUtmParams(): void {
    if (typeof window === 'undefined') return;
    try {
        const searchParams = new URLSearchParams(window.location.search);
        KEYS.forEach((key) => {
            const val = searchParams.get(key);
            if (val) {
                localStorage.setItem(`isi_${key}`, decodeURIComponent(val));
            }
        });
    } catch (e) {
        console.error('Error capturing UTM parameters:', e);
    }
}

/**
 * Retrieves the current UTM parameters from URL search params or fallback to localStorage.
 */
export function getUtmParams(): UtmParams {
    if (typeof window === 'undefined') {
        return {
            utmSource: '', utmMedium: '', utmCampaign: '', utmTerm: '', utmContent: '',
            utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '',
            "UTM Source": '', "UTM Medium": '', "UTM Campaign": '', "UTM Term": '', "UTM Content": ''
        };
    }

    try {
        captureUtmParams(); // Ensure latest from URL if present
        const searchParams = new URLSearchParams(window.location.search);

        const getVal = (key: typeof KEYS[number]): string => {
            const fromUrl = searchParams.get(key);
            if (fromUrl) return decodeURIComponent(fromUrl);
            return localStorage.getItem(`isi_${key}`) || '';
        };

        const utmSource = getVal('utm_source');
        const utmMedium = getVal('utm_medium');
        const utmCampaign = getVal('utm_campaign');
        const utmTerm = getVal('utm_term');
        const utmContent = getVal('utm_content');

        return {
            utmSource,
            utmMedium,
            utmCampaign,
            utmTerm,
            utmContent,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            "UTM Source": utmSource,
            "UTM Medium": utmMedium,
            "UTM Campaign": utmCampaign,
            "UTM Term": utmTerm,
            "UTM Content": utmContent
        };
    } catch {
        return {
            utmSource: '', utmMedium: '', utmCampaign: '', utmTerm: '', utmContent: '',
            utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '',
            "UTM Source": '', "UTM Medium": '', "UTM Campaign": '', "UTM Term": '', "UTM Content": ''
        };
    }
}
