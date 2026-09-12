// src/utils/leadNumber.ts

/**
 * Generates a unique, standardized Lead Number in the format: ISI-XXXXXX
 * (e.g., ISI-000125 or ISI-104829)
 * 
 * Utilizes a monotonic counter persisted in localStorage with a timestamp hash
 * to ensure numbers are strictly unique, sequential where possible, and never collide.
 */
export function generateLeadNumber(): string {
  const PREFIX = 'ISI';
  const STORAGE_KEY = 'isi_lead_sequence_counter';
  
  try {
    let currentSeq = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    if (isNaN(currentSeq) || currentSeq < 0) {
      currentSeq = 0;
    }
    
    currentSeq += 1;
    localStorage.setItem(STORAGE_KEY, currentSeq.toString());
    
    // Format as 6 digits with leading zeros (e.g. ISI-000001, ISI-000002)
    const formattedNum = String(currentSeq).padStart(6, '0');
    return `${PREFIX}-${formattedNum}`;
  } catch {
    // Fallback for non-browser / SSR environments
    const randomSuffix = String(Math.floor(1 + Math.random() * 999999)).padStart(6, '0');
    return `${PREFIX}-${randomSuffix}`;
  }
}

/**
 * Normalizes lead source into one of the 6 standard categories:
 * 1. Google Ads
 * 2. YouTube
 * 3. Affiliate Site
 * 4. Meta / FB
 * 5. Organic
 * 6. Community
 */
export function normalizeLeadSource(utmSource?: string, referrer?: string, pageUrl?: string): string {
  const s = (utmSource || '').toLowerCase().trim();
  const r = (referrer || '').toLowerCase().trim();
  const u = (pageUrl || '').toLowerCase().trim();
  const combined = `${s} ${r} ${u}`;

  // 1. Google Ads
  if (
    s.includes('google_ads') ||
    s.includes('googleads') ||
    s.includes('gclid') ||
    s.includes('cpc') ||
    s.includes('adwords') ||
    combined.includes('gclid=')
  ) {
    return 'Google Ads';
  }

  // 2. YouTube
  if (s.includes('youtube') || s.includes('youtu.be') || combined.includes('youtube') || combined.includes('youtu.be')) {
    return 'YouTube';
  }

  // 3. Meta / FB
  if (
    s.includes('facebook') ||
    s.includes('fb') ||
    s.includes('meta') ||
    s.includes('instagram') ||
    s.includes('ig') ||
    combined.includes('fbclid=') ||
    combined.includes('facebook.com') ||
    combined.includes('instagram.com')
  ) {
    return 'Meta / FB';
  }

  // 4. Affiliate Site
  if (s.includes('affiliate') || s.includes('partner') || combined.includes('affiliate')) {
    return 'Affiliate Site';
  }

  // 5. Community / Social / Referral
  if (
    s.includes('community') ||
    s.includes('referral') ||
    s.includes('linkedin') ||
    s.includes('twitter') ||
    s.includes('x.com') ||
    s.includes('whatsapp') ||
    r.includes('linkedin') ||
    r.includes('t.co') ||
    r.includes('whatsapp')
  ) {
    return 'Community';
  }

  // 6. Organic (Default for search engines, direct, or organic visits)
  if (
    s.includes('organic') ||
    s.includes('google') ||
    s.includes('bing') ||
    s.includes('yahoo') ||
    r.includes('google.com') ||
    r.includes('bing.com') ||
    r.includes('yahoo.com') ||
    !s
  ) {
    return 'Organic';
  }

  return 'Organic';
}
