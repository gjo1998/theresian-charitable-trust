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
  /** Where the home is, in words, e.g. "Thellakom, Kottayam". */
  place: string;
  foundedYear: number;
  /** How many boys live at the home today. Shown in the hero badge. */
  boysAtHome: number;
  founder: string;
  /** How the founder is named in running text, e.g. "Fr. Sebastian". */
  founderShortName: string;
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

/** A photograph from public/images, with its words. */
export interface Photo {
  image: string;
  alt: string;
  /**
   * CSS object-position, so faces are not cropped out of a frame,
   * e.g. "50% 25%". Centre when empty.
   */
  focalPoint?: string;
}

/** The soft colours a card or ring can take. Components map these to classes. */
export type Tone = 'peach' | 'sun' | 'sage' | 'mint' | 'sky';

/** Plants drawn in the growth stages and the chapter cards. */
export type PlantKind = 'sprout' | 'sapling' | 'young-tree' | 'branching';

export type ContactChannel = 'email' | 'whatsapp' | 'phone';

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
  /** A real photograph in a large arch beside the illustrated tree. */
  heroPhoto?: Photo & { caption?: string };
  /** Short lines on the white badges floating over the picture. */
  badges: { strong: string; rest: string }[];
  /** Describes the illustration for screen readers. */
  illustrationLabel: string;
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Describes the section's drawing for screen readers, when it has one. */
  illustrationLabel?: string;
}

/** One of the four things the home gives a child. */
export interface NurturePillar extends Photo {
  id: string;
  badge: string;
  /** Colour accent on the photograph's frame. */
  ring: Tone;
  title: string;
  body: string;
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
  photos: Photo[];
}

/** One of the three ways to join in. */
export interface FamilyWay {
  id: string;
  title: string;
  body: string;
  /** The channel on the big button; the other two appear as small links. */
  primary: ContactChannel;
  ctaLabel: string;
  emailSubject: string;
  emailBody: string;
  whatsappMessage: string;
  tone: Tone;
}

/** Words for the contact channels, used on the family cards. */
export interface ChannelLabels {
  or: string;
  email: string;
  whatsapp: string;
  phone: string;
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
  mainNavLabel: string;
  openMenu: string;
  closeMenu: string;
  backToHome: string;
  backToHomeShort: string;
  fabOpen: string;
  fabClose: string;
  fabWhatsapp: string;
  fabCall: string;
}
