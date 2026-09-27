import {
  Alumnus,
  ChannelLabels,
  Cta,
  FamilyWay,
  FooterContent,
  GrowthStage,
  HomeHero,
  NavLink,
  Need,
  NurturePillar,
  Registrations,
  SectionIntro,
  ShellLabels,
  SocialLink,
  StoryTeaser,
  TeamMember,
  TrustProfile,
  Update,
} from '../models/content.models';

/**
 * Single source of truth for the site's copy.
 *
 * Facts come from the trust's own published material. Anything still needing
 * confirmation is listed in CONTENT-TODO.md; wording changes awaiting
 * approval are listed in COPY-CHANGES.md.
 */

const PLACE = 'Thellakom, Kottayam';

export const TRUST: TrustProfile = {
  legalName: 'The Theresian Charitable Trust',
  shortName: 'Theresian Charitable Trust',
  alsoKnownAs: 'Ammaveedu',
  malayalamName: 'അമ്മവീട്',
  tagline: `A family home in ${PLACE}`,
  place: PLACE,
  foundedYear: 2006,
  boysAtHome: 27,
  founder: 'Fr. Sebastian Mannapathuparambil',
  founderShortName: 'Fr. Sebastian',
  email: 'theresiantrust@yahoo.co.in',
  phone: '+91 94466 81395',
  phoneE164: '919446681395',
  phoneVerified: true,
  whatsappMessage: 'Hello Fr. Sebastian, I found the Ammaveedu website and would love to get in touch.',
  address: {
    line1: 'Ammaveedu',
    line2: 'House No. 84 A, Ward No. XV',
    line3: 'Thellakom P.O., Ettumanoor',
    district: 'Kottayam',
    pin: '686016',
    state: 'Kerala',
    country: 'India',
  },
  officeHours: 'Monday to Saturday, 9:30 AM - 6:30 PM',
  mapsQuery: 'Ammaveedu+Thellakom+Ettumanoor+Kottayam+Kerala',
};

export const PHILOSOPHY_QUOTE = {
  text: 'The love of humanity is a gift from God, but with it is given to us a responsibility.',
  attribution: 'The Theresian Charitable Trust',
};

/** The one action that leads to #family, named the same everywhere. */
export const HEADER_CTA: Cta = { label: 'Be part of the family', path: '/', fragment: 'family' };

export const HOME_HERO: HomeHero = {
  eyebrow: TRUST.tagline,
  title: 'Every boy here is growing — taller, braver, kinder.',
  intro: `${TRUST.alsoKnownAs}, in ${TRUST.place}, is a home for boys who need a family and care. ${TRUST.founderShortName} has run it since ${TRUST.foundedYear}.`,
  body: `${TRUST.alsoKnownAs} means “mother's house”. Here each boy has love, good food, school every day and a big family of brothers to grow up with.`,
  primaryCta: HEADER_CTA,
  secondaryCta: { label: 'Read our story', path: '/stories' },
  heroPhoto: {
    image: 'images/ammaveedu-building.webp',
    alt: 'The Ammaveedu building at Thellakom, its name painted across the front',
    focalPoint: '48% 55%',
    caption: `Our home in ${TRUST.place}`,
  },
  badges: [
    { strong: `${TRUST.boysAtHome} brothers`, rest: 'under one roof' },
    { strong: 'Growing', rest: `since ${TRUST.foundedYear}` },
  ],
  illustrationLabel:
    'An illustrated tree with a round, leafy crown and fruit, standing in the sun while a bird flies past',
};

export const NURTURE_INTRO: SectionIntro = {
  eyebrow: 'How we nurture',
  title: 'What a boy needs to grow — we make sure he has it.',
  lead: 'Four things every boy here can count on: a place to belong, a love of learning, good food and good health care.',
};

export const NURTURE_PILLARS: NurturePillar[] = [
  {
    id: 'belonging',
    badge: 'Belonging',
    ring: 'peach',
    title: 'A place to belong',
    body: 'A bed of his own, brothers beside him and grown-ups who are there for him. Feeling at home comes first.',
    image: 'images/ammaveedu-boys.jpg',
    alt: 'Boys of Ammaveedu together',
    focalPoint: '50% 50%',
  },
  {
    id: 'learning',
    badge: 'Learning',
    ring: 'sun',
    title: 'A love of learning',
    body: 'Our free nursery gives little ones a happy start, and every boy over six goes to school every day.',
    image: 'images/children-meal.jpg',
    alt: 'Young children sitting together at Ammaveedu',
    focalPoint: '55% 40%',
  },
  {
    id: 'nourishment',
    badge: 'Nourishment',
    ring: 'mint',
    title: 'Good food, shared',
    body: 'Warm meals around the table, and a weekly rice round that shares our blessings with around a hundred neighbouring families.',
    image: 'images/rice-delivery.jpg',
    alt: 'Rice being carried in for the weekly round',
    focalPoint: '50% 20%',
  },
  {
    id: 'wellbeing',
    badge: 'Wellbeing',
    ring: 'sky',
    title: 'Healthy and cared for',
    body: 'A paediatrician on our team keeps an eye on every child, and we visit neighbours who need care at home.',
    image: 'images/home-visit.jpg',
    alt: 'A home visit to a neighbour',
    focalPoint: '50% 30%',
  },
];

export const GROWTH_INTRO: SectionIntro = {
  eyebrow: 'Growing up at Ammaveedu',
  title: 'From little sprout to young man',
  lead: 'Every boy grows at his own pace. Here is what each stage looks like at Ammaveedu.',
  illustrationLabel:
    'An illustration of a grown-up holding a boy by the hand and pointing the way along a winding path, with two more boys walking with them towards a tree in the sunshine',
};

export const GROWTH_STAGES: GrowthStage[] = [
  {
    id: 'sprout',
    name: 'Sprout',
    label: 'In our nursery',
    body: 'The youngest start in our free nursery, finding their way into English, Malayalam and maths through play.',
    plant: 'sprout',
    highlight: false,
  },
  {
    id: 'sapling',
    name: 'Sapling',
    label: 'School years',
    body: 'Every boy over six goes to school every single day, with a helping hand at homework time.',
    plant: 'sapling',
    highlight: false,
  },
  {
    id: 'growing-strong',
    name: 'Growing strong',
    label: 'Among brothers',
    body: 'Friends to play with, games after school and a house full of brothers cheering him on. Confidence grows here.',
    plant: 'young-tree',
    highlight: false,
  },
  {
    id: 'branching-out',
    name: 'Branching out',
    label: 'Our dream',
    body: 'Skills training so every young man is ready for life after 18. It is the next thing we hope to build.',
    plant: 'branching',
    highlight: true,
  },
];

export const STORY_TEASER: StoryTeaser = {
  eyebrow: 'Our history',
  title: 'From one seed, a whole tree.',
  body: `In ${TRUST.foundedYear}, ${TRUST.founderShortName} set out with Rs. 4,000 and a lot of hope. One boy said yes, a friend gave a house, and ${TRUST.alsoKnownAs} began to grow.`,
  cta: { label: 'Read the full story, with photos →', path: '/stories' },
  photos: [
    { image: 'images/ammaveedu-house.jpg', alt: 'The first house in Kottayam that became Ammaveedu' },
    {
      image: 'images/ammaveedu-building.webp',
      alt: 'The Ammaveedu building at Thellakom today, its name painted across the front',
      focalPoint: '48% 55%',
    },
  ],
};

export const FAMILY_INTRO: SectionIntro = {
  eyebrow: 'Be part of the family',
  title: 'Help us water the garden.',
  lead: "Every meal, school book and birthday cake here is made possible by friends. There's a place for you too.",
  illustrationLabel:
    'An illustration of a grown-up watering three young plants of different sizes while one boy holds his hand and another helps with a small watering can',
};

const REPLY_FOOTER = '\n\n\n---\nMy name:\nMy phone:\n';

export const FAMILY_WAYS: FamilyWay[] = [
  {
    id: 'give',
    title: 'Help a child grow',
    body: "Support a boy's schooling, a month of meals or our nursery. Fr. Sebastian will reply personally with how to give and where your gift will go.",
    primary: 'email',
    ctaLabel: 'Email Fr. Sebastian',
    tone: 'peach',
    emailSubject: 'I would like to help a child at Ammaveedu',
    emailBody: `Dear Fr. Sebastian,\n\nI came across the Ammaveedu website and would like to help. Please let me know how best to give and where it would be most useful.${REPLY_FOOTER}`,
    whatsappMessage: 'Hello Fr. Sebastian, I would like to help a child at Ammaveedu. Please let me know how best to give.',
  },
  {
    id: 'time',
    title: 'Share your time',
    body: 'Help with homework, play with the boys, teach a skill you love, or join the weekly rice round. Every hour spent with them matters.',
    primary: 'whatsapp',
    ctaLabel: 'WhatsApp us',
    tone: 'sage',
    emailSubject: 'I would like to share some time with the boys at Ammaveedu',
    emailBody: `Dear Fr. Sebastian,\n\nI would love to share some time with the boys at Ammaveedu. Please let me know how I could help.${REPLY_FOOTER}`,
    whatsappMessage: 'Hello Fr. Sebastian, I would love to share some time with the boys at Ammaveedu.',
  },
  {
    id: 'celebrate',
    title: 'Celebrate with us',
    body: 'Spend a birthday or special day with the boys. Share a meal, bring some games and make a memory together.',
    primary: 'phone',
    ctaLabel: `Call ${TRUST.phone}`,
    tone: 'sun',
    emailSubject: 'I would like to celebrate a special day at Ammaveedu',
    emailBody: `Dear Fr. Sebastian,\n\nI would like to spend a birthday or special day with the boys at Ammaveedu. Please let me know what would work.${REPLY_FOOTER}`,
    whatsappMessage: 'Hello Fr. Sebastian, I would like to celebrate a birthday or special day with the boys at Ammaveedu.',
  },
];

export const CHANNEL_LABELS: ChannelLabels = {
  or: 'or',
  email: 'Email',
  whatsapp: 'WhatsApp',
  phone: 'Call',
};

export const GIVING_NOTE =
  'We never take payments on this website. Please give only using details Fr. Sebastian shares with you directly, so you always know your gift reaches the children.';

/* ---------------------------------------------------------------------------
   Optional blocks. Each renders nothing at all while its data is empty.
   See CONTENT-TODO.md for what the trust needs to supply.
   --------------------------------------------------------------------------- */

/** Former residents. Only entries with `consentConfirmed: true` are shown. */
export const ALUMNI: Alumnus[] = [];
export const ALUMNI_INTRO: SectionIntro = {
  eyebrow: 'Grown up at Ammaveedu',
  title: 'Where they are now',
};
export const ALUMNI_LABELS = { yearsAtHome: 'At Ammaveedu' };

/** Who looks after the boys. A role without a name is fine. */
export const TEAM: TeamMember[] = [];
export const TEAM_INTRO: SectionIntro = { title: 'Who looks after the boys' };

/** Current needs, shown inside "Be part of the family". */
export const NEEDS: Need[] = [];
export const NEEDS_CONTENT = {
  title: 'What we need right now',
  messagePrefix: "I'd like to help with: ",
  ctaLabel: 'I can help',
  quantityLabel: 'How many',
};

/** News. The newest three are shown on the home page. */
export const UPDATES: Update[] = [];
export const UPDATES_INTRO: SectionIntro = { title: 'Latest from Ammaveedu' };

export const SOCIAL_LINKS: SocialLink[] = [];

/** Registration numbers. Each appears in the footer only once filled in. */
export const REGISTRATIONS: Registrations = {};

export const FOOTER: FooterContent = {
  visitHeading: 'Come and visit',
  helloHeading: 'Say hello',
  hoursLabel: 'Office hours',
  mapsLabel: 'Open in Google Maps',
  storyLabel: 'Read our story',
  photoCredit: 'Photographs by the trust.',
  socialHeading: 'Follow Ammaveedu',
  socialLabels: {
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    x: 'X',
    website: 'Website',
  },
  registrationsHeading: 'Registrations',
  registrationLabels: {
    trustRegistration: 'Trust registration',
    section12A: '12A registration',
    section80G: '80G registration',
    jjActCci: 'Child care institution registration (Juvenile Justice Act)',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'How we nurture', path: '/', fragment: 'nurture' },
  { label: 'Our story', path: '/stories' },
  { label: 'Visit', path: '/', fragment: 'visit' },
];

export const SHELL: ShellLabels = {
  homeAriaLabel: `${TRUST.alsoKnownAs}, home`,
  mainNavLabel: 'Main',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  backToHome: 'Back to home',
  backToHomeShort: 'Home',
  fabOpen: 'Contact the trust by WhatsApp or phone',
  fabClose: 'Close contact options',
  fabWhatsapp: 'Chat on WhatsApp',
  fabCall: `Call ${TRUST.phone}`,
};
