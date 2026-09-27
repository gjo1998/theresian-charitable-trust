import {
  FamilyWay,
  FooterContent,
  GrowthStage,
  HomeHero,
  NavLink,
  NurturePillar,
  SectionIntro,
  ShellLabels,
  StoryTeaser,
  TrustProfile,
} from '../models/content.models';

/**
 * Single source of truth for the site's copy.
 *
 * Facts come from the trust's own published material. Anything still needing
 * confirmation is listed in CONTENT-TODO.md.
 */

export const TRUST: TrustProfile = {
  legalName: 'The Theresian Charitable Trust',
  shortName: 'Theresian Charitable Trust',
  alsoKnownAs: 'Ammaveedu',
  malayalamName: 'അമ്മവീട്',
  tagline: 'A family home in Thellakom, Kottayam',
  foundedYear: 2006,
  boysAtHome: 27,
  founder: 'Fr. Sebastian Mannapathuparambil',
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

export const HOME_HERO: HomeHero = {
  eyebrow: TRUST.tagline,
  title: 'Every boy here is growing — taller, braver, kinder.',
  body: `${TRUST.alsoKnownAs} means “mother's house”. Here each boy has love, good food, school every day and a big family of brothers to grow up with.`,
  primaryCta: { label: 'Help a child grow', path: '/', fragment: 'family' },
  secondaryCta: { label: 'Read our story', path: '/stories' },
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
  lead: 'Four roots, planted deep, so every boy can stretch toward his own sky.',
};

export const NURTURE_PILLARS: NurturePillar[] = [
  {
    id: 'belonging',
    badge: 'Belonging',
    ring: 'peach',
    title: 'A place to belong',
    body: 'A bed of his own, brothers beside him and grown-ups who are there for him. Feeling at home comes first.',
    image: 'images/ammaveedu-boys.jpg',
    imageAlt: 'Boys of Ammaveedu together',
  },
  {
    id: 'learning',
    badge: 'Learning',
    ring: 'sun',
    title: 'A love of learning',
    body: 'Our free nursery gives little ones a happy start, and every boy over six goes to school every day.',
    image: 'images/children-meal.jpg',
    imageAlt: 'Young children sitting together at Ammaveedu',
  },
  {
    id: 'nourishment',
    badge: 'Nourishment',
    ring: 'mint',
    title: 'Good food, shared',
    body: 'Warm meals around the table, and a weekly rice round that shares our blessings with around a hundred neighbouring families.',
    image: 'images/rice-delivery.jpg',
    imageAlt: 'Rice being carried in for the weekly round',
  },
  {
    id: 'wellbeing',
    badge: 'Wellbeing',
    ring: 'sky',
    title: 'Healthy and cared for',
    body: 'A paediatrician on our team keeps an eye on every child, and we visit neighbours who need care at home.',
    image: 'images/home-visit.jpg',
    imageAlt: 'A home visit to a neighbour',
  },
];

export const GROWTH_INTRO: SectionIntro = {
  eyebrow: 'Growing up at Ammaveedu',
  title: 'From little sprout to young man',
  lead: 'Every boy grows at his own pace. We walk beside him at every stage.',
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
  body: `In ${TRUST.foundedYear}, Fr. Sebastian set out with Rs. 4,000 and a lot of hope. One boy said yes, a friend gave a house, and ${TRUST.alsoKnownAs} began to grow.`,
  cta: { label: 'Read the full story, with photos →', path: '/stories' },
  photos: [
    { image: 'images/ammaveedu-house.jpg', alt: 'The first house in Kottayam that became Ammaveedu' },
    { image: 'images/ammaveedu-building.webp', alt: 'The Ammaveedu building at Thellakom today, its name painted across the front' },
  ],
};

export const FAMILY_INTRO: SectionIntro = {
  eyebrow: 'Be part of the family',
  title: 'Help us water the garden.',
  lead: "Every meal, school book and birthday cake here is made possible by friends. There's a place for you too.",
  illustrationLabel:
    'An illustration of a grown-up watering three young plants of different sizes while a boy holds his hand',
};

export const FAMILY_WAYS: FamilyWay[] = [
  {
    id: 'give',
    title: 'Help a child grow',
    body: "Support a boy's schooling, a month of meals or our nursery. Fr. Sebastian will reply personally with how to give and where your gift will go.",
    ctaLabel: 'Email Fr. Sebastian',
    ctaKind: 'email',
    tone: 'peach',
    subject: 'I would like to help a child at Ammaveedu',
    message:
      'Dear Fr. Sebastian,\n\nI came across the Ammaveedu website and would like to help. Please let me know how best to give and where it would be most useful.\n\n\n---\nMy name:\nMy phone:\n',
  },
  {
    id: 'time',
    title: 'Share your time',
    body: 'Help with homework, play with the boys, teach a skill you love, or join the weekly rice round. Every hour spent with them matters.',
    ctaLabel: 'WhatsApp us',
    ctaKind: 'whatsapp',
    tone: 'sage',
    message: 'Hello Fr. Sebastian, I would love to share some time with the boys at Ammaveedu.',
  },
  {
    id: 'celebrate',
    title: 'Celebrate with us',
    body: 'Spend a birthday or special day with the boys. Share a meal, bring some games and make a memory together.',
    ctaLabel: `Call ${TRUST.phone}`,
    ctaKind: 'phone',
    tone: 'sun',
  },
];

export const GIVING_NOTE =
  'We never take payments on this website. Please give only using details Fr. Sebastian shares with you directly, so you always know your gift reaches the children.';

export const FOOTER: FooterContent = {
  visitHeading: 'Come and visit',
  helloHeading: 'Say hello',
  hoursLabel: 'Office hours',
  mapsLabel: 'Open in Google Maps',
  storyLabel: 'Read our story',
  photoCredit: 'Photographs by the trust.',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'How we nurture', fragment: 'nurture' },
  { label: 'Our story', path: '/stories' },
  { label: 'Visit', fragment: 'visit' },
];

export const HEADER_CTA = { label: 'Be part of the family', path: '/', fragment: 'family' };

export const SHELL: ShellLabels = {
  homeAriaLabel: `${TRUST.alsoKnownAs}, home`,
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  backToHome: 'Back to home',
  backToHomeShort: 'Home',
  storyCta: { label: 'Be part of the next chapter', path: '/stories', fragment: 'next-chapter' },
  fabOpen: 'Contact the trust by WhatsApp or phone',
  fabClose: 'Close contact options',
  fabWhatsapp: 'Chat on WhatsApp',
  fabCall: `Call ${TRUST.phone}`,
};
