import {
  Alumnus,
  ChannelLabels,
  Cta,
  FamilyWay,
  FooterContent,
  GalleryPageContent,
  GalleryPhoto,
  GrowingArea,
  GrowingMoment,
  GrowthStage,
  HomeHero,
  NavLink,
  Need,
  NotFoundContent,
  NurturePillar,
  PageMeta,
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
    style: 'background',
  },
  badges: [
    { strong: `${TRUST.boysAtHome} brothers`, rest: 'under one roof' },
    { strong: 'Growing', rest: `since ${TRUST.foundedYear}` },
  ],
  registrations: {
    heading: 'Registered charitable trust',
    labels: {
      trustRegistration: 'Reg. No.',
      section12A: '12A',
      section80G: '80G',
      jjActCci: 'JJ Act CCI',
    },
  },
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

export const HELPING_INTRO: SectionIntro = {
  eyebrow: 'Helping them grow',
  title: 'Raising a well-rounded child',
  lead: 'Food and a roof are only the start. We help every boy grow in every way, and these are the nine things we nurture, day in and day out.',
  illustrationLabel: 'A vine grows from a sprout to a young tree, with each of the nine things we nurture along the way',
};

/** The closing line at the foot of the vine. */
export const HELPING_CLOSING = 'Little by little, a sprout becomes a young man who can stand on his own.';

/** The five ways a boy grows. Each colours its values on the vine. */
export const HELPING_AREAS: GrowingArea[] = ['Morally', 'Physically', 'Mentally', 'Emotionally', 'Socially'];

export const HELPING_MOMENTS: GrowingMoment[] = [
  {
    id: 'kindness',
    area: 'Morally',
    title: 'Kindness',
    body: 'Empathy, sharing, helping and respecting others. Big brothers share first, and the little ones learn by watching.',
    illustrationLabel: 'An older boy hands a mango to a small boy while a grown-up rests a hand on his shoulder, and hearts float up',
  },
  {
    id: 'feelings',
    area: 'Emotionally',
    title: 'Emotional strength',
    body: 'It is all right to feel sad, angry or let down. We help each boy put his feelings into words and find his calm again.',
    illustrationLabel: 'A grown-up puts an arm around a boy under a rainbow, as a rain cloud gives way to the sun',
  },
  {
    id: 'routine',
    area: 'Mentally',
    title: 'Discipline and punctuality',
    body: 'Simple daily routines, from waking up to homework time, teach a boy to respect time and keep his word.',
    illustrationLabel: 'A boy with his school bag waves beside a big clock and a daily checklist with ticks',
  },
  {
    id: 'health',
    area: 'Physically',
    title: 'Physical health',
    body: 'Sports, outdoor play, cycling, healthy food and a good night’s sleep keep growing bodies strong.',
    illustrationLabel: 'A boy rides a bicycle while another boy runs to kick a football',
  },
  {
    id: 'learning',
    area: 'Mentally',
    title: 'Love of learning',
    body: 'Curiosity, reading, questions, creativity and solving problems. No question here is ever too small.',
    illustrationLabel: 'A boy reads an open book with a light bulb glowing above his head, beside a stack of books and a globe',
  },
  {
    id: 'respect',
    area: 'Socially',
    title: 'Respect',
    body: 'Respect for everyone, young and old, together with the confidence to think for himself.',
    illustrationLabel: 'A boy greets a grandmother with folded hands as she leans on her walking stick',
  },
  {
    id: 'responsibility',
    area: 'Morally',
    title: 'Responsibility',
    body: 'Small jobs that suit his age, like sweeping and watering the plants, and owning up to mistakes without fear.',
    illustrationLabel: 'One boy sweeps with a broom while another waters a potted plant',
  },
  {
    id: 'honesty',
    area: 'Morally',
    title: 'Honesty and integrity',
    body: 'Telling the truth and doing the right thing, even when nobody is watching.',
    illustrationLabel: 'A boy hands a lost purse back to a grown-up, under a shining star',
  },
  {
    id: 'talking',
    area: 'Socially',
    title: 'Communication',
    body: 'Listening well, speaking up, disagreeing kindly and saying sorry like he means it.',
    illustrationLabel: 'Two boys shake hands, one saying "Sorry!" and the other replying "It\'s OK!"',
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

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'facebook', url: 'https://www.facebook.com/Ammaveedu.Orphanage/' },
];

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
  { label: 'Gallery', path: '/gallery' },
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

/** The photo used in link previews when a page has none of its own. */
export const DEFAULT_SHARE_IMAGE = 'images/ammaveedu-building.webp';

export const HOME_META: PageMeta = {
  title: `${TRUST.alsoKnownAs} | A family home for boys in ${TRUST.place}`,
  description: `${TRUST.alsoKnownAs} is a family home in ${TRUST.place}, where ${TRUST.boysAtHome} boys grow up together as brothers — cared for, cheered on and helped to become everything they can be.`,
};

export const GALLERY_PAGE: GalleryPageContent = {
  eyebrow: 'Gallery',
  title: `Life at ${TRUST.alsoKnownAs}`,
  lead: 'Snapshots of our home, from the first little house to the boys growing up together today. Tap any photo to see it full size.',
  openLabel: 'Open photo',
  closeLabel: 'Close',
  previousLabel: 'Previous photo',
  nextLabel: 'Next photo',
  meta: {
    title: `Gallery | ${TRUST.alsoKnownAs}`,
    description: `Photos of ${TRUST.alsoKnownAs}, a family home for boys in ${TRUST.place}: the home, the boys and daily life together.`,
  },
};

/**
 * The gallery, newest first. Only the trust's own photos, and only ones it is
 * happy to publish (see CONTENT-TODO.md §6 on children's faces). Adding one:
 * put the file in public/images, add its size to images.ts, add a line here.
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Recent photos, from the trust's Facebook page
  {
    image: 'images/gallery/after-school.jpg',
    focalPoint: '50% 60%',
    alt: 'A group of smiling boys in school uniform on the veranda, with a young man sitting in front of them',
    caption: 'Home from school',
    when: 'Recent',
  },
  {
    image: 'images/gallery/hands-together.jpg',
    focalPoint: '50% 50%',
    alt: 'A volunteer and boys of Ammaveedu sitting in a circle, all their hands stacked together in the middle',
    caption: 'All hands in, together',
    when: 'Recent',
  },
  {
    image: 'images/gallery/veranda-together.jpg',
    alt: 'Boys of Ammaveedu and two visiting volunteers sitting together on the front steps',
    caption: 'An afternoon on the steps',
    when: 'Recent',
  },
  {
    image: 'images/gallery/school-friends.jpg',
    focalPoint: '50% 50%',
    alt: 'Three boys in school uniform with their bags, standing in front of the home',
    caption: 'Ready for school',
    when: 'Recent',
  },
  {
    image: 'images/gallery/off-to-school.jpg',
    focalPoint: '50% 42%',
    alt: 'Boys in school uniform with their bags by the gate, on the way to school',
    caption: 'Heading out through the gate',
    when: 'Recent',
  },
  {
    image: 'images/gallery/football.jpg',
    focalPoint: '50% 42%',
    alt: 'Boys playing football barefoot on an open patch of red earth, with trees behind',
    caption: 'Football on the red-earth ground',
    when: 'Recent',
  },
  {
    image: 'images/gallery/volunteer-chat.jpg',
    focalPoint: '50% 50%',
    alt: `A volunteer and a young man sitting on the steps of ${TRUST.alsoKnownAs}, looking at a phone together, the home's sign above`,
    caption: 'A quiet chat on the steps',
    when: 'Recent',
  },
  {
    image: 'images/gallery/christmas-crib.jpg',
    focalPoint: '50% 45%',
    alt: 'A Christmas crib built in the yard, with a leaf-roofed stable, little figures, sheep and a small fence',
    caption: 'Our Christmas crib',
    when: 'Recent',
  },
  // Earlier photos
  {
    image: 'images/ammaveedu-today.jpg',
    alt: `${TRUST.founderShortName} with the boys of ${TRUST.alsoKnownAs}`,
    caption: `${TRUST.founderShortName} with the boys`,
    when: 'Today',
    focalPoint: '50% 35%',
  },
  {
    image: 'images/ammaveedu-building.webp',
    alt: `The ${TRUST.alsoKnownAs} building at Thellakom, its name painted across the front`,
    caption: `Our home in ${TRUST.place}`,
    when: 'Today',
  },
  {
    image: 'images/ammaveedu-boys.jpg',
    alt: `Boys of ${TRUST.alsoKnownAs} together`,
    caption: 'Brothers under one roof',
    when: '2011',
  },
  {
    image: 'images/children-meal.jpg',
    alt: `Young children sitting together at ${TRUST.alsoKnownAs}`,
    caption: 'Children sharing a meal',
    when: '2011',
  },
  {
    image: 'images/rice-delivery.jpg',
    alt: 'Rice being carried in for the weekly round',
    caption: 'The weekly rice round for neighbouring families',
    when: '2011',
  },
  {
    image: 'images/home-visit.jpg',
    alt: 'A home visit to a neighbour',
    caption: 'Visiting a neighbour who needs care at home',
    when: '2011',
  },
  {
    image: 'images/ammaveedu-house.jpg',
    alt: `The first house where ${TRUST.alsoKnownAs} began`,
    caption: 'The first little house, where it all began',
    when: '2011',
  },
];

export const NOT_FOUND: NotFoundContent = {
  title: "We couldn't find that page",
  body: 'It may have moved, or the link may have a typo. Everything else is just a click away.',
  homeLabel: 'Back to home',
  storyLabel: 'Read our story',
  meta: {
    title: `Page not found | ${TRUST.alsoKnownAs}`,
    description: `The page you were looking for is not on the ${TRUST.alsoKnownAs} website.`,
  },
};
