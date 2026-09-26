/**
 * Shape of every piece of editable content on the site.
 * Staff should only ever need to touch `core/data/site-content.ts`.
 */

export interface TrustProfile {
  legalName: string;
  shortName: string;
  alsoKnownAs: string;
  malayalamName: string;
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

/** One of the four things the home gives a child. */
export interface NurturePillar {
  id: string;
  badge: string;
  /** Tailwind classes for the card's top border and badge colour. */
  accentBorder: string;
  accentBadge: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  breatheClass: string;
}

/** A photograph in the scrolling strip. */
export interface Moment {
  image: string;
  alt: string;
  caption: string;
  /** Alternating heights keep the strip playful. */
  tall: boolean;
}

/** One of the three ways to join in. */
export interface FamilyWay {
  id: string;
  icon: string;
  title: string;
  body: string;
  ctaLabel: string;
  /** 'email' | 'whatsapp' | 'phone' — the component builds the link. */
  ctaKind: 'email' | 'whatsapp' | 'phone';
  cardClass: string;
}

export interface NavLink {
  label: string;
  /** Same-page anchor, when the link scrolls to a section. */
  fragment?: string;
  /** Router path, when the link leaves the home page. */
  path?: string;
}
