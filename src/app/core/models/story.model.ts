import { Cta } from './content.models';

/** A paragraph or a pull quote inside a chapter. */
export interface StoryBlockContent {
  type: 'p' | 'quote';
  text: string;
  /** Attribution, for a pull quote. */
  by?: string;
}

export interface Story {
  slug: string;
  /** Narrative order — the story reads from 1 upwards. */
  order: number;
  title: string;
  /** Small label above the heading, e.g. "The 1990s". */
  era: string;
  /** A photograph, when an honest one exists for this chapter. */
  image?: string;
  imageAlt?: string;
  /** A second photograph shown beside the first. */
  secondImage?: string;
  secondImageAlt?: string;
  /** Shown in a coloured card when there is no photograph. */
  coverQuote?: string;
  /** Who said the cover quote, when it is someone's words. */
  coverQuoteBy?: string;
  /** A date pill on the cover card. */
  coverTag?: string;
  /** A small sprout drawn on the cover card. */
  coverSprout?: boolean;
  coverTone?: 'sage' | 'peach';
  body: StoryBlockContent[];
}

/** Copy for /stories and /stories/:slug. */
export interface StoryPageContent {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    image: string;
    imageAlt: string;
  };
  chipsLabel: string;
  chapterLabel: string;
  readChapterLabel: string;
  thenAndNow: {
    title: string;
    items: { image: string; alt: string; when: string; caption: string }[];
  };
  closing: {
    title: string;
    body: string;
    emailLabel: string;
    emailSubject: string;
    emailBody: string;
    whatsappLabel: string;
    homeLabel: string;
  };
  article: {
    allChaptersLabel: string;
    previousLabel: string;
    nextLabel: string;
    endTitle: string;
    endBody: string;
    endCta: Cta;
    notFoundTitle: string;
    notFoundBody: string;
  };
}
