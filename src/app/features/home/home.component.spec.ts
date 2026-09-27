import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FAMILY_WAYS, GIVING_NOTE, HELPING_AREAS, HELPING_MOMENTS, NURTURE_PILLARS, TRUST } from '../../core/data/site-content';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('shows the sections in order: hero, nurture, helping, growth, story, family', () => {
    const tags = Array.from(element.children).map((child) => child.tagName.toLowerCase());
    expect(tags).toEqual([
      'app-hero',
      'app-nurture',
      'app-helping',
      'app-growth',
      'app-team',
      'app-story-teaser',
      'app-alumni',
      'app-updates',
      'app-family',
    ]);
  });

  it('says plainly what Ammaveedu is, built from the trust profile', () => {
    const hero = element.querySelector('app-hero')!.textContent!;
    expect(hero).toContain(TRUST.place);
    expect(hero).toContain(TRUST.founderShortName);
    expect(hero).toContain(String(TRUST.foundedYear));
  });

  it('takes the hero badge figures from the trust profile', () => {
    const hero = element.querySelector('app-hero')!.textContent!;
    expect(hero).toContain(`${TRUST.boysAtHome} brothers`);
    expect(hero).toContain(`since ${TRUST.foundedYear}`);
  });

  it('labels each illustration and hides decorative SVGs', () => {
    const drawings = element.querySelectorAll('svg[role="img"]');
    expect(drawings.length).toBe(3 + HELPING_MOMENTS.length); // hero tree, guiding path, watering, one per nurture card
    drawings.forEach((svg) => expect(svg.getAttribute('aria-label')).toBeTruthy());

    // The photo blended in behind the tree keeps its own alt text.
    expect(element.querySelector<HTMLImageElement>('app-hero img')!.alt.length).toBeGreaterThan(0);
    element.querySelectorAll('app-icon, app-plant').forEach((icon) => {
      expect(icon.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('shows one nurture pillar per entry, each photo with alt text', () => {
    const photos = element.querySelectorAll<HTMLImageElement>('#nurture img');
    expect(photos.length).toBe(NURTURE_PILLARS.length);
    photos.forEach((img) => expect(img.alt.length).toBeGreaterThan(0));
  });

  it('shows the five ways a child grows, and one card per thing we nurture, each with its own drawing', () => {
    const areas = Array.from(element.querySelectorAll('#helping ul[aria-label] li')).map((li) => li.textContent!.trim());
    expect(areas).toEqual(HELPING_AREAS);

    const cards = element.querySelectorAll('#helping h3');
    expect(cards.length).toBe(HELPING_MOMENTS.length);
    HELPING_MOMENTS.forEach((moment, i) => {
      const card = cards[i].closest('li')!;
      expect(cards[i].textContent).toContain(moment.title);
      expect(HELPING_AREAS).toContain(moment.area);
      expect(card.querySelector('svg')!.getAttribute('aria-label')).toBe(moment.illustrationLabel);
    });
  });

  it('shows four growth stages, each with a plant', () => {
    expect(element.querySelectorAll('#growing li').length).toBe(4);
    expect(element.querySelectorAll('#growing app-plant').length).toBe(4);
  });

  describe('Be part of the family', () => {
    it('keeps the giving note visible', () => {
      expect(element.querySelector('#family')!.textContent).toContain(GIVING_NOTE);
    });

    it('offers every channel on every card, primary first', () => {
      const cards = Array.from(element.querySelectorAll('#family article'));
      expect(cards.length).toBe(FAMILY_WAYS.length);

      const prefix: Record<string, string> = {
        email: `mailto:${TRUST.email}`,
        whatsapp: `https://wa.me/${TRUST.phoneE164}`,
        phone: `tel:+${TRUST.phoneE164}`,
      };
      cards.forEach((card, i) => {
        const hrefs = Array.from(card.querySelectorAll('a')).map((a) => a.getAttribute('href')!);
        expect(hrefs.length).toBe(3);
        expect(hrefs[0].startsWith(prefix[FAMILY_WAYS[i].primary])).toBeTrue();
        for (const start of Object.values(prefix)) {
          expect(hrefs.some((href) => href.startsWith(start))).toBeTrue();
        }
      });
    });

    it("carries each card's own message on every channel", () => {
      const cards = Array.from(element.querySelectorAll('#family article'));
      cards.forEach((card, i) => {
        const way = FAMILY_WAYS[i];
        const hrefs = Array.from(card.querySelectorAll('a')).map((a) => a.getAttribute('href')!);
        expect(hrefs.find((href) => href.startsWith('mailto:'))).toContain(encodeURIComponent(way.emailSubject));
        expect(hrefs.find((href) => href.startsWith('https://wa.me/'))).toContain(
          encodeURIComponent(way.whatsappMessage),
        );
      });
    });

    it('has no payment form and no bank or UPI details', () => {
      expect(element.querySelector('form, input')).toBeNull();
      expect(element.textContent).not.toMatch(/\b(UPI|IFSC|account number)\b/i);
    });
  });
});
