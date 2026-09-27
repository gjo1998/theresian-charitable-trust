import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { NOT_FOUND } from './core/data/site-content';
import { STORIES, STORY_PAGE } from './core/data/stories';
import { firstSentence } from './core/services/seo.service';
import { routes } from './app.routes';

describe('Routing', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
    harness = await RouterTestingHarness.create();
  });

  function page(): HTMLElement {
    return harness.routeNativeElement as HTMLElement;
  }

  it('shows the friendly 404 for an unknown address, instead of redirecting', async () => {
    await harness.navigateByUrl('/no-such-page');
    expect(page().querySelector('h1')!.textContent).toContain(NOT_FOUND.title);
    const hrefs = Array.from(page().querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/stories']);
  });

  it('shows the same 404 for an unknown chapter slug', async () => {
    await harness.navigateByUrl('/stories/no-such-chapter');
    expect(page().querySelector('h1')!.textContent).toContain(NOT_FOUND.title);
  });

  it('asks search engines not to index the 404', async () => {
    await harness.navigateByUrl('/no-such-page');
    expect(TestBed.inject(Meta).getTag('name="robots"')?.content).toBe('noindex');
    expect(TestBed.inject(Title).getTitle()).toBe(NOT_FOUND.meta.title);
  });

  it('gives each chapter its own title, description, image and canonical URL', async () => {
    const chapter = STORIES.find((story) => story.slug === 'one-boy-said-yes')!;
    await harness.navigateByUrl(`/stories/${chapter.slug}`);

    const meta = TestBed.inject(Meta);
    expect(TestBed.inject(Title).getTitle()).toBe(chapter.title + STORY_PAGE.chapterTitleSuffix);
    expect(meta.getTag('name="description"')!.content).toBe(firstSentence((chapter.body[0] as { text: string }).text));
    expect(meta.getTag('property="og:image"')!.content).toContain(chapter.image!);
    expect(document.head.querySelector('link[rel="canonical"]')!.getAttribute('href')).toMatch(
      new RegExp(`/stories/${chapter.slug}$`),
    );
    expect(meta.getTag('name="robots"')).toBeNull();
  });

  it('falls back to the building photo for a chapter without one', async () => {
    const chapter = STORIES.find((story) => !story.image)!;
    await harness.navigateByUrl(`/stories/${chapter.slug}`);
    expect(TestBed.inject(Meta).getTag('property="og:image"')!.content).toContain('ammaveedu-building.webp');
  });
});

describe('firstSentence', () => {
  it('stops at the first real full stop, not at "Fr." or "Rs."', () => {
    expect(firstSentence('At twenty, Fr. Sebastian joined the seminary. Then he chose.')).toBe(
      'At twenty, Fr. Sebastian joined the seminary.',
    );
    expect(firstSentence('He had Rs. 4,000 to his name. Then more.')).toBe('He had Rs. 4,000 to his name.');
    expect(firstSentence('No full stop at all')).toBe('No full stop at all');
  });
});
