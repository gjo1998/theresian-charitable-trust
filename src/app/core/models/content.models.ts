/**
 * Shape of every piece of editable content on the site.
 * Staff should only ever need to touch `core/data/site-content.ts` and
 * `core/data/stories.ts`.
 */

export interface TrustProfile {
  legalName: string;
  shortName: string;
  alsoKnownAs: string;
  malayalamName: string;
  tagline: string;
  foundedYear: number;
  /** How many boys live at the home today. Shown in the hero badge. */
  boysAtHome: number;
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

/** The soft colours a card or ring can take. Components map these to classes. */
export type Tone = 'peach' | 'sun' | 'sage' | 'mint' | 'sky';

/** Plants drawn in the growth stages and the chapter cards. */
export type PlantKind = 'sprout' | 'sapling' | 'young-tree' | 'branching';

export interface Cta {
  label: string;
  /** Router path, when the button leaves the page. */
  path?: string;
  /** Same-page anchor. */
  fragment?: string;
}

export interface HomeHero {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  /** Short lines on the white badges floating over the tree. */
  badges: { strong: string; rest: string }[];
  /** Describes the illustration for screen readers. */
  illustrationLabel: string;
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  lead?: string;
}

/** One of the four things the home gives a child. */
export interface NurturePillar {
  id: string;
  badge: string;
  /** Colour of the ring around the photograph. */
  ring: Tone;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

/** One stage of growing up, from nursery to young man. */
export interface GrowthStage {
  id: string;
  name: string;
  label: string;
  body: string;
  plant: PlantKind;
  /** The last card is peach; the rest are white. */
  highlight: boolean;
}

export interface StoryTeaser {
  eyebrow: string;
  title: string;
  body: string;
  cta: Cta;
  photos: { image: string; alt: string }[];
}

/** One of the three ways to join in. */
export interface FamilyWay {
  id: string;
  title: string;
  body: string;
  ctaLabel: string;
  /** 'email' | 'whatsapp' | 'phone' — the component builds the link. */
  ctaKind: 'email' | 'whatsapp' | 'phone';
  tone: Tone;
  /** Email subject, when the card opens an email. */
  subject?: string;
  /** Prefilled email body or WhatsApp message. */
  message?: string;
}

export interface FooterContent {
  visitHeading: string;
  helloHeading: string;
  hoursLabel: string;
  mapsLabel: string;
  storyLabel: string;
  photoCredit: string;
}

export interface NavLink {
  label: string;
  /** Same-page anchor, when the link scrolls to a section. */
  fragment?: string;
  /** Router path, when the link leaves the home page. */
  path?: string;
}

/** Small labels used by the shell: header, drawer and floating button. */
export interface ShellLabels {
  homeAriaLabel: string;
  openMenu: string;
  closeMenu: string;
  backToHome: string;
  backToHomeShort: string;
  storyCta: Cta;
  fabOpen: string;
  fabClose: string;
  fabWhatsapp: string;
  fabCall: string;
}
