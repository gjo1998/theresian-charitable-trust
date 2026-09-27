import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NOT_FOUND } from '../../core/data/site-content';
import { STORIES } from '../../core/data/stories';
import { ChapterComponent } from './chapter/chapter.component';
import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(StoryComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('lays out all seven chapters on the timeline, in order', () => {
    const ids = Array.from(element.querySelectorAll('ol > li[id]')).map((li) => li.id);
    expect(ids).toEqual([...STORIES].sort((a, b) => a.order - b.order).map((s) => s.slug));
  });

  it('has a chip for every chapter, linking to its place on the page', () => {
    const chips = Array.from(element.querySelectorAll<HTMLAnchorElement>('nav ul a'));
    expect(chips.length).toBe(STORIES.length);
    expect(chips[0].getAttribute('href')).toBe(`/stories#${STORIES[0].slug}`);
  });

  it('shows the cover quotes and the chapter four callout', () => {
    const text = element.textContent!;
    expect(text).toContain('18 March 2006');
    expect(text).toContain('If I get a house, will you stay with me?');
  });

  it('ends with ways to reach Fr. Sebastian', () => {
    const closing = element.querySelector('#next-chapter')!;
    const hrefs = Array.from(closing.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs.some((href) => href?.startsWith('mailto:'))).toBeTrue();
    expect(hrefs.some((href) => href?.startsWith('https://wa.me/'))).toBeTrue();
  });
});

describe('ChapterComponent', () => {
  async function render(slug: string): Promise<HTMLElement> {
    await TestBed.configureTestingModule({
      imports: [ChapterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(ChapterComponent);
    fixture.componentRef.setInput('slug', slug);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('links only forward from the first chapter', async () => {
    const element = await render('a-seed-is-planted');
    const hrefs = Array.from(element.querySelectorAll('nav a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/stories/love-that-shares']);
  });

  it('shows "Chapter X of 7"', async () => {
    const element = await render('mothers-house');
    expect(element.textContent).toContain(`Chapter 5 of ${STORIES.length}`);
  });

  it('links to the chapters either side', async () => {
    const element = await render('one-boy-said-yes');
    const hrefs = Array.from(element.querySelectorAll('nav a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/stories/years-of-patient-hope', '/stories/mothers-house']);
  });

  it('points the last chapter at the next-chapter block', async () => {
    const element = await render('still-growing-together');
    const hrefs = Array.from(element.querySelectorAll('nav a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/stories/love-overflows', '/stories#next-chapter']);
  });

  it('shows the not-found content when a chapter does not exist', async () => {
    const element = await render('no-such-chapter');
    expect(element.querySelector('h1')!.textContent).toContain(NOT_FOUND.title);
  });
});
