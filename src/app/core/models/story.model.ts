/** A block of article body copy. */
export interface StoryBlockContent {
  type: 'p' | 'quote' | 'h';
  text: string;
}

export interface Story {
  slug: string;
  /** Narrative order — the history reads from 1 upwards, not newest first. */
  order: number;
  title: string;
  /** One-line standfirst shown on the card and under the article title. */
  dek: string;
  /** When the trust first published the account this article draws on. */
  published: string;
  era: string;
  /** Optional: a chapter with no honest photograph gets a typographic cover. */
  image?: string;
  imageAlt?: string;
  /** Shown on the cover when there is no photograph. */
  coverQuote?: string;
  /** True where the body is Fr. Sebastian writing in the first person. */
  firstPerson: boolean;
  body: StoryBlockContent[];
}
