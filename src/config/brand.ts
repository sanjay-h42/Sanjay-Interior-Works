/**
 * Official Brand Configuration for SANJAY INTERIOR WORKS
 * 
 * Update contact information below as provided by owner V. Vijay Pandiyan.
 * Note: Placeholders are used until verified owner details are entered.
 */

export interface BrandConfig {
  brandName: string;
  shortName: string;
  mainSlogan: string;
  supportingLine: string;
  ownerName: string;
  contact: {
    phone: string;
    phone2: string;
    whatsappNumber: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
  workingHours: {
    days: string;
    timings: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  brandName: 'SANJAY INTERIOR WORKS',
  shortName: 'Sanjay Interiors',
  mainSlogan: 'Every Space. A Masterpiece.',
  supportingLine: 'Crafting beauty into every corner.',
  ownerName: 'V. VIJAY PANDIYAN',
  contact: {
    phone: '9943786284',
    phone2: '7502267686',
    whatsappNumber: '918610150895',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  },
  social: {
    instagram: '',
    facebook: '',
  },
  workingHours: {
    days: 'Monday – Saturday',
    timings: '10:00 AM – 7:30 PM',
  },
};

/**
 * Checks if a valid direct WhatsApp number is configured (not empty, not default placeholder)
 */
export function isWhatsAppConfigured(): boolean {
  const num = BRAND_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  return num.length >= 10;
}

/**
 * Checks if a verified direct phone is configured
 */
export function isPhoneConfigured(): boolean {
  const digits = BRAND_CONFIG.contact.phone.replace(/[^0-9]/g, '');
  return digits.length >= 10;
}

/**
 * Checks if a verified direct email is configured
 */
export function isEmailConfigured(): boolean {
  return (
    Boolean(BRAND_CONFIG.contact.email) &&
    BRAND_CONFIG.contact.email.includes('@') &&
    !BRAND_CONFIG.contact.email.includes('example.com')
  );
}

/**
 * Generates an active WhatsApp click-to-chat URL with pre-filled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || `Hello ${BRAND_CONFIG.ownerName}, I would like to enquire about Sanjay Interior Works services.`;
  const encoded = encodeURIComponent(message);
  
  if (isWhatsAppConfigured()) {
    const cleanNum = BRAND_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNum}?text=${encoded}`;
  }
  
  // Safe fallback if not configured yet
  return `https://wa.me/?text=${encoded}`;
}

/**
 * Generates a prefilled mailto URL
 */
export function getMailtoUrl(subject: string, bodyText: string): string {
  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(bodyText);
  return `mailto:${BRAND_CONFIG.contact.email}?subject=${encSubject}&body=${encBody}`;
}
