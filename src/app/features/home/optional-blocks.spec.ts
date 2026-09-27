import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HOME_HERO, TRUST } from '../../core/data/site-content';
import { Alumnus, Need, Registrations, SocialLink, TeamMember, Update } from '../../core/models/content.models';
import { SiteFooterComponent } from '../../shared/components/site-footer/site-footer.component';
import { AlumniComponent } from './sections/alumni/alumni.component';
import { FamilyComponent } from './sections/family/family.component';
import { HeroComponent } from './sections/hero/hero.component';
import { TeamComponent } from './sections/team/team.component';
import { UpdatesComponent } from './sections/updates/updates.component';

/*
 * Every optional block renders nothing at all while its data is empty, and
 * renders properly once the trust supplies it. The sample data lives here
 * only — never in the real data files.
 */

async function render<T>(component: Type<T>, inputs: Record<string, unknown> = {}) {
  await TestBed.configureTestingModule({
    imports: [component],
    providers: [provideRouter([])],
  }).compileComponents();
  const fixture: ComponentFixture<T> = TestBed.createComponent(component);
  for (const [name, value] of Object.entries(inputs)) {
    fixture.componentRef.setInput(name, value);
  }
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe('Optional content blocks', () => {
  describe('alumni', () => {
    const sample: Alumnus[] = [
      {
        firstNameOrInitial: 'A.',
        yearsAtHome: '2008–2016',
        nowDoing: 'Studies engineering',
        quote: 'It was home.',
        consentConfirmed: true,
      },
      { firstNameOrInitial: 'B.', yearsAtHome: '2009–2017', nowDoing: 'Works as a nurse', consentConfirmed: false },
    ];

    it('renders nothing when empty', async () => {
      const element = await render(AlumniComponent, { alumni: [] });
      expect(element.children.length).toBe(0);
      expect(element.textContent!.trim()).toBe('');
    });

    it('shows only people with written consent', async () => {
      const element = await render(AlumniComponent, { alumni: sample });
      expect(element.querySelector('h2')!.textContent).toContain('Where they are now');
      expect(element.querySelectorAll('li').length).toBe(1);
      expect(element.textContent).toContain('Studies engineering');
      expect(element.textContent).toContain('It was home.');
      expect(element.textContent).not.toContain('Works as a nurse');
    });

    it('renders nothing when nobody has consented', async () => {
      const element = await render(AlumniComponent, { alumni: [sample[1]] });
      expect(element.children.length).toBe(0);
    });
  });

  describe('team', () => {
    const sample: TeamMember[] = [{ role: 'Cook' }, { name: 'Sample Name', role: 'Teacher' }];

    it('renders nothing when empty', async () => {
      const element = await render(TeamComponent, { team: [] });
      expect(element.children.length).toBe(0);
    });

    it('lists roles, with or without a name', async () => {
      const element = await render(TeamComponent, { team: sample });
      expect(element.querySelector('h2')!.textContent).toContain('Who looks after the boys');
      expect(element.querySelectorAll('li').length).toBe(2);
      expect(element.textContent).toContain('Cook');
      expect(element.textContent).toContain('Sample Name');
    });
  });

  describe('updates', () => {
    const sample: Update[] = [
      { date: '2026-01-10', title: 'Oldest', body: 'a' },
      { date: '2026-06-01', title: 'Newest', body: 'b' },
      { date: '2026-03-15', title: 'Middle', body: 'c' },
      { date: '2026-04-20', title: 'Second', body: 'd' },
    ];

    it('renders nothing when empty', async () => {
      const element = await render(UpdatesComponent, { updates: [] });
      expect(element.children.length).toBe(0);
    });

    it('shows the newest three, newest first, with a machine-readable date', async () => {
      const element = await render(UpdatesComponent, { updates: sample });
      const titles = Array.from(element.querySelectorAll('h3')).map((h) => h.textContent!.trim());
      expect(titles).toEqual(['Newest', 'Second', 'Middle']);
      expect(element.querySelector('time')!.getAttribute('datetime')).toBe('2026-06-01');
      expect(element.querySelector('time')!.textContent).toContain('1 June 2026');
    });
  });

  describe('needs', () => {
    const sample: Need[] = [{ item: 'School bags', why: 'For the new term', season: 'Before June', quantity: '27' }];

    it('renders nothing when empty', async () => {
      const element = await render(FamilyComponent, { needs: [] });
      expect(element.querySelector('#needs')).toBeNull();
      expect(element.textContent).not.toContain('What we need right now');
    });

    it('lists each need with a WhatsApp link naming the item', async () => {
      const element = await render(FamilyComponent, { needs: sample });
      const block = element.querySelector('#needs')!;
      expect(block.textContent).toContain('What we need right now');
      expect(block.textContent).toContain('Before June');
      const link = block.querySelector('a')!;
      expect(link.getAttribute('href')).toBe(
        `https://wa.me/${TRUST.phoneE164}?text=${encodeURIComponent("I'd like to help with: School bags")}`,
      );
    });
  });

  describe('footer: registrations and social links', () => {
    const registrations: Registrations = { jjActCci: 'CCI/123', section80G: '' };
    const social: SocialLink[] = [{ platform: 'facebook', url: 'https://example.org/ammaveedu' }];

    it('renders neither block when empty', async () => {
      const element = await render(SiteFooterComponent, { registrations: {}, socialLinks: [] });
      expect(element.textContent).not.toContain('Registrations');
      expect(element.textContent).not.toContain('Follow Ammaveedu');
      expect(element.querySelector('dl')).toBeNull();
    });

    it('shows only the registrations that are filled in', async () => {
      const element = await render(SiteFooterComponent, { registrations });
      const rows = element.querySelectorAll('dl > div');
      expect(rows.length).toBe(1);
      expect(rows[0].textContent).toContain('Juvenile Justice Act');
      expect(rows[0].textContent).toContain('CCI/123');
    });

    it('shows labelled social links that open safely', async () => {
      const element = await render(SiteFooterComponent, { socialLinks: social });
      const link = element.querySelector<HTMLAnchorElement>('a[href="https://example.org/ammaveedu"]')!;
      expect(link.getAttribute('aria-label')).toBe('Facebook');
      expect(link.rel).toContain('noopener');
    });
  });

  describe('hero photo', () => {
    it('blends the photo in behind the full tree in "background" style', async () => {
      const photo = { ...HOME_HERO.heroPhoto!, style: 'background' as const };
      const element = await render(HeroComponent, { hero: { ...HOME_HERO, heroPhoto: photo } });
      const img = element.querySelector('.hero-photo-blend img')!;
      expect(img.getAttribute('src')).toBe(photo.image);
      expect(img.getAttribute('alt')!.length).toBeGreaterThan(0);
      expect(img.getAttribute('fetchpriority')).toBe('high');
      expect(element.querySelector('svg[role="img"]')).toBeTruthy();
      expect(element.textContent).toContain(photo.caption!);
    });

    it('sets the photo in an arch inside the tree in "window" style', async () => {
      const photo = { ...HOME_HERO.heroPhoto!, style: 'window' as const };
      const element = await render(HeroComponent, { hero: { ...HOME_HERO, heroPhoto: photo } });
      const img = element.querySelector('figure img')!;
      expect(img.getAttribute('src')).toBe(photo.image);
      expect(element.querySelector('figcaption')).toBeTruthy();
      expect(element.querySelector('.hero-photo-blend')).toBeNull();
    });

    it('falls back to the full tree, with no empty frame, when unset', async () => {
      const element = await render(HeroComponent, { hero: { ...HOME_HERO, heroPhoto: undefined } });
      expect(element.querySelector('figure')).toBeNull();
      expect(element.querySelector('img')).toBeNull();
      expect(element.querySelector('svg[role="img"]')).toBeTruthy();
    });
  });
});
