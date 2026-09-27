import { STORIES, storyBySlug } from './stories';

describe('The story chapters', () => {
  it('resolves every slug to its own chapter', () => {
    for (const story of STORIES) {
      expect(storyBySlug(story.slug)).toBe(story);
    }
  });

  it('has unique slugs', () => {
    const slugs = STORIES.map((story) => story.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('numbers the chapters 1, 2, 3… with no gaps or repeats', () => {
    const orders = STORIES.map((story) => story.order).sort((a, b) => a - b);
    expect(orders).toEqual(STORIES.map((_, i) => i + 1));
  });

  it('returns nothing for an unknown slug', () => {
    expect(storyBySlug('no-such-chapter')).toBeUndefined();
  });

  it('gives every chapter either a photograph or a cover quote', () => {
    for (const story of STORIES) {
      expect(!!story.image || !!story.coverQuote).withContext(story.slug).toBeTrue();
      if (story.image) expect(story.imageAlt).withContext(story.slug).toBeTruthy();
    }
  });
});
