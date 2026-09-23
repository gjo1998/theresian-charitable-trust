import {
  Objective,
  Program,
  Stat,
  StoryBlock,
  TrustProfile,
  ValuePillar,
  VolunteerRole,
} from '../models/content.models';

/**
 * Single source of truth for the site's copy.
 *
 * Every fact here was taken from the trust's own published material
 * (the Theresian Trust / Ammaveedu blog and public NGO directory listings).
 * Anything the trust still has to confirm is marked in CONTENT-TODO.md and
 * carries a `verified` flag so the UI can hide it until then.
 */

export const TRUST: TrustProfile = {
  legalName: 'The Theresian Charitable Trust',
  shortName: 'Theresian Trust',
  alsoKnownAs: 'Ammaveedu',
  tagline: 'A home, a school and a helping hand in Thellakom, Kottayam',
  foundedYear: 2006,
  founder: 'Fr. Sebastian Mannapathuparambil',
  email: 'theresiantrust@yahoo.co.in',
  phone: '+91 94466 81395',
  phoneE164: '919446681395',
  phoneVerified: true,
  whatsappMessage: 'Hello, I found the Ammaveedu website and would like to get in touch.',
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
  attribution: 'The Theresian Trust',
};

export const HERO_HIGHLIGHTS = [
  { icon: 'fa-house-chimney-user', text: 'A family home, not an institution' },
  { icon: 'fa-calendar-check', text: `Serving since ${TRUST.foundedYear}` },
  { icon: 'fa-location-dot', text: 'Rooted in Thellakom, Kottayam' },
];

export const ABOUT_STORY: StoryBlock[] = [
  {
    heading: 'How Ammaveedu began',
    paragraphs: [
      `The Theresian Charitable Trust grew out of one priest's decision to live alongside the people he had been taught to serve. While studying Social Action at St Joseph's Pontifical Seminary, ${TRUST.founder} spent time in a nearby colony and could not reconcile what he saw there with the life waiting for him in a parish. He spent his seminary vacations working on plantations so that he would understand poverty from the inside rather than from a distance.`,
      'Ordained in 1997, he asked for permission to leave his diocese and work full-time among families in the colonies. That permission took thirteen years of asking. It came in 2006, and he began with Rs. 4,000 to his name.',
      'The first child was a boy named Rajeev, who had no one. A chance meeting with Mathew Kuravilla produced a house in Kottayam, and that house became Ammaveedu - "mother\'s house". Boys who had been sleeping wherever they could came to it one by one.',
    ],
  },
  {
    heading: 'What the trust does today',
    paragraphs: [
      'The trust works from Thellakom P.O. near Ettumanoor, in Kottayam district. It runs a residential home for boys, a free nursery, and a rolling programme of food, clothing and medical support for families in the surrounding colonies.',
      'It has no endowment and no permanent source of income. Everything it does is paid for by donations and by the members of the trust.',
    ],
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: 'fa-eye',
    iconClass: 'bg-emeraldTrust-100 text-emeraldTrust-700',
    title: 'Our Vision',
    body: 'That the accident of a child\'s birth should not decide the whole of their life - that a boy from a colony has the same claim on school, health and dignity as anyone else.',
  },
  {
    icon: 'fa-bullseye',
    iconClass: 'bg-amberGold-500/10 text-amberGold-600',
    title: 'Our Mission',
    body: 'To provide life-improving aid - food, education, clothing and healthcare - to the people of the colonies and villages around Kottayam, through direct personal relationships rather than at arm\'s length.',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'ammaveedu',
    badge: 'Children',
    badgeClass: 'text-emeraldTrust-800',
    title: 'Ammaveedu Residential Home',
    summary:
      'A home for boys from the colonies who have no family able to care for them - food, shelter, schooling and someone to answer to.',
    detail:
      'Ammaveedu is the trust\'s first and largest work. It houses 27 boys drawn from colonies where there was no family able to look after them. The home provides meals, a bed, school books and uniforms, toys and time to play, and the ordinary moral formation a household gives. Every boy over the age of six goes to school every day - the point of the home is to break the assumption that the children of the poor stay poor.',
    image: 'images/children-meal.jpg',
    fallbackImage: 'images/ammaveedu-house.jpg',
    imageAlt: 'Children sitting together over a meal, photographed by the trust',
  },
  {
    id: 'nursery',
    badge: 'Education',
    badgeClass: 'text-emeraldTrust-700',
    title: 'Theresian Trust Nursery',
    summary:
      'A free pre-school for the youngest boys at Ammaveedu and for children from nearby families who could not otherwise afford one.',
    detail:
      'The trust runs its own nursery, fully funded, for the younger members of Ammaveedu together with six more children from disadvantaged families nearby. The children are taught basic English, Malayalam and mathematics, and the families pay nothing at all. It exists because a child who starts school behind rarely catches up.',
    image: 'images/colony-children.jpg',
    fallbackImage: 'images/children-meal.jpg',
    imageAlt: 'Young children outside their homes in one of the colonies',
  },
  {
    id: 'relief',
    badge: 'Relief',
    badgeClass: 'text-amberGold-600',
    title: 'Food & Clothing Distribution',
    summary:
      'Rice, provisions and clothes taken directly to households that cannot meet the week - sick workers, widows and broken families.',
    detail:
      'It started with the cook. A large donation of rice had arrived, she had fed all the children amply, and she asked whether she could take some of the surplus to a family she knew who had no food and no money to buy any. Word spread: men unable to work through sickness or poor mental health, widowed women, families that had come apart. Three years on it had become an operation of its own - weekly deliveries of 5kg of rice to about 100 families, with clothing handed out alongside it. The trust delivers in person, to families it can name.',
    image: 'images/rice-delivery.jpg',
    fallbackImage: 'images/rice-recipient.jpg',
    imageAlt: 'A sack of rice being carried in for distribution',
  },
  {
    id: 'health',
    badge: 'Health',
    badgeClass: 'text-emeraldTrust-700',
    title: 'Health, Palliative & Rehabilitation Work',
    summary:
      'Medical camps, home visits for the chronically ill, pain and palliative care, and rehabilitation for the elderly and differently abled.',
    detail:
      'The trust arranges regular health checks for the children of the colonies. One of its own members is a qualified paediatrician, and it has links with a local chemist - so there is both a doctor who can see the children and medicine that can be issued to them free. Beyond that, the trust\'s health objectives run from prevention to palliative care: awareness programmes and medical camps in the colonies and villages, early detection of disease, home check-ups for people with chronic conditions who cannot travel, pain and palliative care, rehabilitation of people affected by HIV/AIDS, and care for the aged and the differently abled.',
    image: 'images/home-visit.jpg',
    fallbackImage: 'images/rice-recipient.jpg',
    imageAlt: 'A home visit to an elderly man in one of the villages',
  },
];

/** The trust's stated objectives, as published in its own aims and objects. */
export const OBJECTIVES: Objective[] = [
  { icon: 'fa-graduation-cap', text: 'Render education facilities, both academic and job oriented, to students in and of the slums and colonies.' },
  { icon: 'fa-bed', text: 'Render boarding facilities for students of the colonies who live in utter poverty.' },
  { icon: 'fa-baby', text: 'Extend all possible care for infants who are discarded and abandoned.' },
  { icon: 'fa-wheelchair', text: 'Provide community-based and institutional rehabilitation of the aged and the differently abled.' },
  { icon: 'fa-heart-pulse', text: 'Create awareness of health issues and conduct medical camps in slums and villages.' },
  { icon: 'fa-stethoscope', text: 'Establish services for the early detection of disease.' },
  { icon: 'fa-house-medical', text: 'Conduct home medical check-ups for people with chronic conditions.' },
  { icon: 'fa-hand-holding-medical', text: 'Establish pain and palliative care centres.' },
  { icon: 'fa-ribbon', text: 'Rehabilitate persons affected by HIV/AIDS.' },
  { icon: 'fa-screwdriver-wrench', text: 'Deliver skills training towards self-employment.' },
  { icon: 'fa-comments', text: 'Establish counselling centres.' },
  { icon: 'fa-people-roof', text: 'Undertake general community development activities.' },
];

export const STATS: Stat[] = [
  {
    id: 'years',
    icon: 'fa-calendar-alt',
    iconClass: 'bg-emeraldTrust-500/20 text-emeraldTrust-500',
    value: `${new Date().getFullYear() - TRUST.foundedYear}+`,
    label: 'Years of service',
    note: `Working in Kottayam district since ${TRUST.foundedYear}.`,
  },
  {
    id: 'boys',
    icon: 'fa-children',
    iconClass: 'bg-amberGold-500/20 text-amberGold-400',
    value: '27',
    label: 'Boys living at Ammaveedu',
    note: 'Each one from a colony with no family able to care for him.',
  },
  {
    id: 'rice',
    icon: 'fa-bowl-rice',
    iconClass: 'bg-sky-500/20 text-sky-400',
    value: '~100',
    label: 'Families given rice weekly',
    note: '5kg each week, with clothing handed out alongside it.',
  },
  {
    id: 'objectives',
    icon: 'fa-list-check',
    iconClass: 'bg-purple-500/20 text-purple-400',
    value: '12',
    label: 'Stated objectives',
    note: 'From education and shelter to palliative and community care.',
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  { value: 'tutoring', label: 'Tutoring and homework help' },
  { value: 'nursery', label: 'Nursery and early-years support' },
  { value: 'medical', label: 'Medical camps and home visits' },
  { value: 'distribution', label: 'Food and clothing distribution' },
  { value: 'admin', label: 'Admin, fundraising and events' },
];

export const INQUIRY_SUBJECTS = [
  { value: 'general', label: 'General inquiry' },
  { value: 'donation', label: 'Donation or receipt' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'support', label: 'Request help for a family or child' },
  { value: 'partnership', label: 'Institutional or CSR partnership' },
];

export const NAV_LINKS = [
  { fragment: 'about', label: 'About Us' },
  { fragment: 'programs', label: 'Our Work' },
  { fragment: 'stories', label: 'Our Story' },
  { fragment: 'objectives', label: 'Objectives' },
  { fragment: 'impact', label: 'Impact' },
  { fragment: 'get-involved', label: 'Get Involved' },
  { fragment: 'contact', label: 'Contact' },
];
