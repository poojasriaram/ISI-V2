/**
 * Centralized Form Validation Utilities
 */

import {
  BLOCKED_DOMAINS,
  isCorporateEmail,
  extractEmailDomain,
  CORPORATE_EMAIL_ERROR_MESSAGE,
  CHATBOT_CORPORATE_EMAIL_MESSAGE
} from './corporateEmail';

export {
  BLOCKED_DOMAINS,
  isCorporateEmail,
  extractEmailDomain,
  CORPORATE_EMAIL_ERROR_MESSAGE,
  CHATBOT_CORPORATE_EMAIL_MESSAGE
};

/**
 * Validate work/corporate email format and block public/free email domains for Sales Leads.
 */
export const validateWorkEmail = (email: string): { isValid: boolean; message: string } => {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return { isValid: false, message: "Work email is required." };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  if (!isCorporateEmail(trimmed)) {
    return {
      isValid: false,
      message: CORPORATE_EMAIL_ERROR_MESSAGE
    };
  }

  return { isValid: true, message: "" };
};

/**
 * Alias for validateWorkEmail
 */
export const validateCorporateEmail = validateWorkEmail;

/**
 * Validate phone number format and ensure length >= 10 digits
 */
export const validatePhoneNumber = (phone: string): { isValid: boolean; message: string } => {
  const normalized = (phone || '').replace(/[+\-()\s]/g, '');
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
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return { isValid: false, message: "Email is required." };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  return { isValid: true, message: "" };
};
