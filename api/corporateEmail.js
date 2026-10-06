// api/corporateEmail.js - Centralized Corporate Email Validation for Sales Leads

export const BLOCKED_DOMAINS = [
  // Global Freemail
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'yahoo.fr',
  'yahoo.de',
  'yahoo.es',
  'yahoo.it',
  'yahoo.ca',
  'yahoo.com.au',
  'ymail.com',
  'rocketmail.com',
  'hotmail.com',
  'hotmail.co.uk',
  'hotmail.fr',
  'hotmail.de',
  'hotmail.it',
  'hotmail.es',
  'outlook.com',
  'outlook.in',
  'outlook.co.uk',
  'outlook.fr',
  'outlook.de',
  'outlook.es',
  'live.com',
  'live.in',
  'live.co.uk',
  'live.fr',
  'msn.com',
  'passport.com',

  // Legacy Providers
  'aol.com',
  'aol.co.uk',
  'aim.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'comcast.net',
  'sbcglobal.net',
  'att.net',
  'bellsouth.net',

  // European Freemail
  'mail.com',
  'gmx.com',
  'gmx.de',
  'gmx.net',
  'gmx.at',
  'gmx.ch',
  'web.de',
  'orange.fr',
  'wanadoo.fr',
  'libero.it',
  't-online.de',
  'freenet.de',
  'virgilio.it',

  // Russian / Eastern European
  'mail.ru',
  'inbox.ru',
  'list.ru',
  'bk.ru',
  'yandex.com',
  'yandex.ru',
  'ya.ru',
  'rambler.ru',

  // Asian Freemail
  '126.com',
  '163.com',
  'qq.com',
  'rediffmail.com',
  'indiatimes.com',
  'sina.com',
  'sohu.com',
  'daum.net',
  'hanmail.net',
  'naver.com',

  // Disposable / Temporary
  '10minutemail.com',
  '10minutemail.net',
  'guerrillamail.com',
  'guerrillamailblock.com',
  'sharklasers.com',
  'grr.la',
  'guerrillamail.biz',
  'guerrillamail.de',
  'guerrillamail.net',
  'guerrillamail.org',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'tempmail.com',
  'temp-mail.org',
  'tempmailo.com',
  'mailinator.com',
  'trashmail.com',
  'dispostable.com',
  'getairmail.com',
  'throwawaymail.com',

  // Privacy / Personal Webmail
  'protonmail.com',
  'proton.me',
  'zoho.com'
];

export const CORPORATE_EMAIL_ERROR_MESSAGE =
  'Please use your official corporate/business email address. Public email providers such as Gmail, Yahoo, Hotmail, and Outlook are not accepted for Sales enquiries.';

export const CHATBOT_CORPORATE_EMAIL_MESSAGE =
  'Please provide your corporate/business email address to submit a business enquiry.';

/**
 * Extracts normalized lowercase domain from an email address
 */
export function extractEmailDomain(email) {
  if (!email || typeof email !== 'string') return '';
  const trimmed = email.trim();
  const atIndex = trimmed.lastIndexOf('@');
  if (atIndex === -1) return '';
  return trimmed.slice(atIndex + 1).toLowerCase().trim();
}

/**
 * Centralized validator: checks if the email is a valid corporate/business email address.
 * Rejects public, freemail, and temporary email domains.
 *
 * Normalization steps:
 * 1. Trim leading and trailing whitespace
 * 2. Validate email format
 * 3. Extract domain and convert to lowercase
 * 4. Compare against blocked domains and subdomains
 */
export function isCorporateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (!trimmed) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return false;

  const domain = extractEmailDomain(trimmed);
  if (!domain) return false;

  const isBlocked = BLOCKED_DOMAINS.some(
    blocked => domain === blocked || domain.endsWith('.' + blocked)
  );

  return !isBlocked;
}
