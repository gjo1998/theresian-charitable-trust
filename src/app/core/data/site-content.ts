import { FamilyWay, Moment, NavLink, NurturePillar, TrustProfile } from '../models/content.models';

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

/** The two photographs behind the hero, with their captions. */
export const HERO_SLIDES = [
  {
    image: 'images/ammaveedu-today.jpg',
    alt: 'Fr. Sebastian greeting the boys outside the house at Ammaveedu',
    caption: 'Fr. Sebastian with the boys',
  },
  {
    image: 'images/ammaveedu-building.webp',
    alt: 'The Ammaveedu building at Thellakom, its name painted across the front',
    caption: 'Our home in Thellakom',
  },
];

export const NURTURE_PILLARS: NurturePillar[] = [
  {
    id: 'belonging',
    badge: 'Belonging',
    accentBorder: 'border-t-hibiscus',
    accentBadge: 'bg-hibiscus text-white',
    title: 'A place to belong',
    body: 'A bed of his own, brothers beside him and grown-ups who are there for him. Feeling at home comes first.',
    image: 'images/ammaveedu-boys.jpg',
    imageAlt: 'Boys of Ammaveedu together',
    breatheClass: 'breathe-1',
  },
  {
    id: 'learning',
    badge: 'Learning',
    accentBorder: 'border-t-mango',
    accentBadge: 'bg-mango text-ink',
    title: 'A love of learning',
    body: 'Our free nursery gives little ones a happy start, and every boy over six goes to school every day.',
    image: 'images/children-meal.jpg',
    imageAlt: 'Young children sitting together at Ammaveedu',
    breatheClass: 'breathe-2',
  },
  {
    id: 'nourishment',
    badge: 'Nourishment',
    accentBorder: 'border-t-leaf',
    accentBadge: 'bg-leaf text-white',
    title: 'Good food, shared',
    body: 'Warm meals around the table, and a weekly rice round that shares our blessings with around a hundred neighbouring families.',
    image: 'images/rice-delivery.jpg',
    imageAlt: 'Rice being carried in for the weekly round',
    breatheClass: 'breathe-3',
  },
  {
    id: 'wellbeing',
    badge: 'Wellbeing',
    accentBorder: 'border-t-sky',
    accentBadge: 'bg-sky text-white',
    title: 'Healthy and cared for',
    body: 'A paediatrician on our team keeps an eye on every child, and we visit neighbours who need care at home.',
    image: 'images/home-visit.jpg',
    imageAlt: 'A home visit to a neighbour',
    breatheClass: 'breathe-4',
  },
];

export const MOMENTS: Moment[] = [
  { image: 'images/ammaveedu-today.jpg', alt: 'Fr. Sebastian with the boys outside the house', caption: 'Together', tall: false },
  { image: 'images/children-meal.jpg', alt: 'Young children sharing a meal', caption: 'Lunch buddies', tall: true },
  { image: 'images/ammaveedu-building.webp', alt: 'The Ammaveedu building at Thellakom', caption: 'Home sweet home', tall: false },
  { image: 'images/ammaveedu-boys.jpg', alt: 'The boys of Ammaveedu together', caption: 'Brothers', tall: true },
  { image: 'images/home-visit.jpg', alt: 'Visiting a neighbour at home', caption: 'Caring for neighbours', tall: false },
  { image: 'images/rice-delivery.jpg', alt: 'Rice arriving for the weekly round', caption: 'Sharing the table', tall: true },
  { image: 'images/ammaveedu-house.jpg', alt: 'The first house that became Ammaveedu', caption: 'Where it began', tall: false },
];

export const FAMILY_WAYS: FamilyWay[] = [
  {
    id: 'give',
    icon: '🎁',
    title: 'Help a child grow',
    body: "Support a boy's schooling, a month of meals or our nursery. Fr. Sebastian will reply personally with how to give and where your gift will go.",
    ctaLabel: 'Email Fr. Sebastian',
    ctaKind: 'email',
    cardClass: 'bg-mango-soft',
  },
  {
    id: 'time',
    icon: '🤝',
    title: 'Share your time',
    body: 'Help with homework, play with the boys, teach a skill you love, or join the weekly rice round. Every hour spent with them matters.',
    ctaLabel: 'WhatsApp us',
    ctaKind: 'whatsapp',
    cardClass: 'bg-leaf-soft',
  },
  {
    id: 'celebrate',
    icon: '🎂',
    title: 'Celebrate with us',
    body: 'Spend a birthday or special day with the boys. Share a meal, bring some games and make a memory together.',
    ctaLabel: `Call ${TRUST.phone}`,
    ctaKind: 'phone',
    cardClass: 'bg-sky-soft',
  },
];

export const GIVING_NOTE =
  'We never take payments on this website. Please give only using details Fr. Sebastian shares with you directly, so you always know your gift reaches the children.';

export const NAV_LINKS: NavLink[] = [
  { label: 'How we nurture', fragment: 'nurture' },
  { label: 'Moments', fragment: 'moments' },
  { label: 'Our story', path: '/stories' },
  { label: 'Visit us', fragment: 'visit' },
];
