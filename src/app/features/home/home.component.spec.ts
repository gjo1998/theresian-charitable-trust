import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FAMILY_WAYS, GIVING_NOTE, NURTURE_PILLARS, TRUST } from '../../core/data/site-content';
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

  it('shows the sections in order: hero, nurture, growth, story, family', () => {
    const tags = Array.from(element.children).map((child) => child.tagName.toLowerCase());
    expect(tags).toEqual(['app-hero', 'app-nurture', 'app-growth', 'app-story-teaser', 'app-family']);
  });

  it('takes the hero badge figures from the trust profile', () => {
    const hero = element.querySelector('app-hero')!.textContent!;
    expect(hero).toContain(`${TRUST.boysAtHome} brothers`);
    expect(hero).toContain(`since ${TRUST.foundedYear}`);
  });

  it('labels each illustration and hides decorative SVGs', () => {
    const drawings = element.querySelectorAll('svg[role="img"]');
    expect(drawings.length).toBe(3); // tree, guiding path, watering
    drawings.forEach((svg) => expect(svg.getAttribute('aria-label')).toBeTruthy());
    element.querySelectorAll('app-icon, app-plant').forEach((icon) => {
      expect(icon.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('shows one nurture pillar per entry, each photo with alt text', () => {
    const photos = element.querySelectorAll<HTMLImageElement>('#nurture img');
    expect(photos.length).toBe(NURTURE_PILLARS.length);
    photos.forEach((img) => expect(img.alt.length).toBeGreaterThan(0));
  });

  it('shows four growth stages, each with a plant', () => {
    expect(element.querySelectorAll('#growing li').length).toBe(4);
    expect(element.querySelectorAll('#growing app-plant').length).toBe(4);
  });

  describe('Be part of the family', () => {
    it('keeps the giving note visible', () => {
      expect(element.querySelector('#family')!.textContent).toContain(GIVING_NOTE);
    });

    it('sends every card to Fr. Sebastian by email, WhatsApp or phone', () => {
      const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('#family ul a'));
      expect(links.length).toBe(FAMILY_WAYS.length);
      expect(links[0].href).toMatch(new RegExp(`^mailto:${TRUST.email}`));
      expect(links[1].href).toContain(`https://wa.me/${TRUST.phoneE164}`);
      expect(links[2].href).toBe(`tel:+${TRUST.phoneE164}`);
    });

    it('has no payment form and no bank or UPI details', () => {
      expect(element.querySelector('form, input')).toBeNull();
      expect(element.textContent).not.toMatch(/\b(UPI|IFSC|account number)\b/i);
    });
  });
});
