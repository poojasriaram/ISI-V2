/**
 * Centralized Form Validation Utilities
 */

export const BLOCKED_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'zoho.com'
];

/**
 * Validate work email format and block personal email domains
 */
export const validateWorkEmail = (email: string): { isValid: boolean; message: string } => {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, message: "Work email is required." };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  const parts = trimmed.split('@');
  const domain = parts[parts.length - 1].toLowerCase();

  if (BLOCKED_DOMAINS.includes(domain)) {
    return { isValid: false, message: "Please enter your work email address. Personal email addresses are not accepted." };
  }

  return { isValid: true, message: "" };
};

/**
 * Validate phone number format and ensure length >= 10 digits
 */
export const validatePhoneNumber = (phone: string): { isValid: boolean; message: string } => {
  const normalized = phone.replace(/[+\-\(\)\s]/g, '');
  const digits = normalized.replace(/\D/g, '');
  const hasInvalidChars = /[^0-9]/.test(normalized);

  if (hasInvalidChars || digits.length < 10) {
    return { isValid: false, message: "Please enter a valid phone number with at least 10 digits." };
  }

  return { isValid: true, message: "" };
};

/**
 * Validate standard email format (allows personal domains, e.g. for careers or newsletters)
 */
export const validateGeneralEmail = (email: string): { isValid: boolean; message: string } => {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, message: "Email is required." };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  return { isValid: true, message: "" };
};
