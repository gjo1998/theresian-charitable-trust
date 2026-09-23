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
  image: string;
  imageAlt: string;
  /** True where the body is Fr. Sebastian writing in the first person. */
  firstPerson: boolean;
  body: StoryBlockContent[];
}
