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
  /** One plain sentence saying what Ammaveedu is, under the headline. */
  intro: string;
  body: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  /**
   * A real photograph with the illustrated tree.
   * 'background': faded softly into the page behind the tree.
   * 'window' (default): framed in an arch, set into the tree's canopy.
   */
  heroPhoto?: Photo & { caption?: string; style?: 'background' | 'window' };
  /** Short lines on the white badges floating over the picture. */
  badges: { strong: string; rest: string }[];
  /**
   * The registration strip under the buttons, seen on first view. It shows
   * only the numbers filled in under REGISTRATIONS, with these short labels.
   */
  registrations: { heading: string; labels: Record<keyof Registrations, string> };
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

/** Which drawing each value on the "well-rounded child" vine shows. */
export type GrowingScene =
  | 'kindness'
  | 'feelings'
  | 'routine'
  | 'health'
  | 'learning'
  | 'respect'
  | 'responsibility'
  | 'honesty'
  | 'talking';

/** The five ways a child grows. Each gives its values a colour on the vine. */
export type GrowingArea = 'Morally' | 'Physically' | 'Mentally' | 'Emotionally' | 'Socially';

/** One thing we nurture in every boy, told beside a small drawing. */
export interface GrowingMoment {
  id: GrowingScene;
  area: GrowingArea;
  title: string;
  body: string;
  /** Describes the drawing for screen readers. */
  illustrationLabel: string;
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

/** A former resident, shown only with written consent. */
export interface Alumnus {
  firstNameOrInitial: string;
  yearsAtHome: string;
  nowDoing: string;
  quote?: string;
  photo?: Photo;
  /** Render nothing unless the trust holds written consent. */
  consentConfirmed: boolean;
}

/** Someone who looks after the boys. A role on its own is fine. */
export interface TeamMember {
  name?: string;
  role: string;
  photo?: Photo;
}

/** Something the home needs now. */
export interface Need {
  item: string;
  why: string;
  season?: string;
  quantity?: string;
}

/** A short piece of news. `date` is ISO, e.g. "2026-06-01". */
export interface Update {
  date: string;
  title: string;
  body: string;
  image?: Photo;
}

export type SocialPlatform = 'facebook' | 'instagram' | 'youtube' | 'x' | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

/** Registration numbers. Each shows only when filled in. */
export interface Registrations {
  trustRegistration?: string;
  section12A?: string;
  section80G?: string;
  /** Child care institution registration under the Juvenile Justice Act. */
  jjActCci?: string;
}

export interface FooterContent {
  visitHeading: string;
  helloHeading: string;
  hoursLabel: string;
  mapsLabel: string;
  storyLabel: string;
  photoCredit: string;
  socialHeading: string;
  socialLabels: Record<SocialPlatform, string>;
  registrationsHeading: string;
  registrationLabels: Record<keyof Registrations, string>;
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

/** One photograph on the gallery page. */
export interface GalleryPhoto extends Photo {
  /** A short line under the photo in the full-size view. */
  caption: string;
  /** When it was taken, e.g. "2011" or "Today". Optional. */
  when?: string;
}

/** Words on the gallery page. The photos themselves are GALLERY_PHOTOS. */
export interface GalleryPageContent {
  eyebrow: string;
  title: string;
  lead: string;
  /** Screen-reader words for the full-size view. */
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  meta: PageMeta;
}

/** Title and description for a route. */
export interface PageMeta {
  title: string;
  description: string;
}

export interface NotFoundContent {
  title: string;
  body: string;
  homeLabel: string;
  storyLabel: string;
  meta: PageMeta;
}
