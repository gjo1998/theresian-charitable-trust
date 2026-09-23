/**
 * Shape of every piece of editable content on the site.
 * The trust's staff should only ever need to touch `core/data/site-content.ts`.
 */

export interface TrustProfile {
  legalName: string;
  shortName: string;
  alsoKnownAs: string;
  tagline: string;
  foundedYear: number;
  founder: string;
  email: string;
  /** Display form, e.g. "+91 94466 81395". */
  phone: string;
  /** Digits only, country code first — used for tel: and wa.me links. */
  phoneE164: string;
  phoneVerified: boolean;
  /** Prefilled text for the WhatsApp deep link. */
  whatsappMessage: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    district: string;
    pin: string;
    state: string;
    country: string;
  };
  officeHours: string;
  mapsQuery: string;
}

export interface Program {
  id: string;
  badge: string;
  badgeClass: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
}

export interface Stat {
  id: string;
  icon: string;
  iconClass: string;
  value: string;
  label: string;
  note: string;
}

export interface Objective {
  icon: string;
  text: string;
}

export interface StoryBlock {
  heading: string;
  paragraphs: string[];
}

export interface ValuePillar {
  icon: string;
  iconClass: string;
  title: string;
  body: string;
}

export interface VolunteerRole {
  value: string;
  label: string;
}

export interface SupportRoute {
  id: string;
  icon: string;
  title: string;
  body: string;
  /** Subject line used when this route opens an email to the trust. */
  emailSubject: string;
  /** First line of the prefilled email body. */
  emailIntro: string;
}
