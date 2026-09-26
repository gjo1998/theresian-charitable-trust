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
  /** Shown in a coloured block when there is no photograph. */
  coverQuote?: string;
  body: StoryBlockContent[];
}
