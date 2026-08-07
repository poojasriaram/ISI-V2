/**
 * Security Utilities
 * Provides functions for input sanitization, XSS prevention, and secure data handling
 */

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous HTML tags and attributes
 */
export const sanitizeInput = (input: string): string => {
    if (!input) return '';

    // Create a temporary div element to leverage browser's HTML parsing
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
};

/**
 * Sanitize HTML content while allowing safe tags
 * Removes script tags, event handlers, and dangerous attributes
 */
export const sanitizeHTML = (html: string): string => {
    if (!html) return '';

    const temp = document.createElement('div');
    temp.innerHTML = html;

    // Remove all script tags
    const scripts = temp.querySelectorAll('script');
    scripts.forEach(script => script.remove());

    // Remove event handler attributes
    const allElements = temp.querySelectorAll('*');
    allElements.forEach(element => {
        const attributes = Array.from(element.attributes);
        attributes.forEach(attr => {
            if (attr.name.startsWith('on')) {
                element.removeAttribute(attr.name);
            }
        });
    });

    return temp.innerHTML;
};

/**
 * Validate URL to prevent javascript: and data: URI attacks
 */
export const isValidURL = (url: string): boolean => {
    if (!url) return false;

    try {
        const urlObj = new URL(url);
        // Only allow http, https, and mailto protocols
        return ['http:', 'https:', 'mailto:'].includes(urlObj.protocol);
    } catch {
        return false;
    }
};

/**
 * Secure localStorage wrapper with encryption-ready structure
 */
export const secureStorage = {
    setItem: (key: string, value: any  ): void => {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    },

    getItem: <T>(key: string): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    },

    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data:', error);
        }
    },

    clear: (): void => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing storage:', error);
        }
    }
};

/**
 * Generate a random nonce for CSP
 */
export const generateNonce = (): string => {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 */
export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
};

/**
 * Escape special characters for use in regex
 */
export const escapeRegex = (str: string): string => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Check if content contains potential XSS patterns
 */
export const containsXSS = (content: string): boolean => {
    const xssPatterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<iframe/gi,
        /<object/gi,
        /<embed/gi,
    ];

    return xssPatterns.some(pattern => pattern.test(content));
};

/**
 * Rate limiting helper for client-side operations
 */
export class RateLimiter {
    private attempts: Map<string, number[]> = new Map();

    constructor(
        private maxAttempts: number = 5,
        private windowMs: number = 60000 // 1 minute
    ) { }

    isAllowed(key: string): boolean {
        const now = Date.now();
        const attempts = this.attempts.get(key) || [];

        // Remove old attempts outside the window
        const recentAttempts = attempts.filter(time => now - time < this.windowMs);

        if (recentAttempts.length >= this.maxAttempts) {
            return false;
        }

        recentAttempts.push(now);
        this.attempts.set(key, recentAttempts);
        return true;
    }

    reset(key: string): void {
        this.attempts.delete(key);
    }

    getRemainingAttempts(key: string): number {
        const now = Date.now();
        const attempts = this.attempts.get(key) || [];
        const recentAttempts = attempts.filter(time => now - time < this.windowMs);
        return Math.max(0, this.maxAttempts - recentAttempts.length);
    }
}
