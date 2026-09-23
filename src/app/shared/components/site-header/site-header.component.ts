import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  NgZone,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAV_LINKS, TRUST } from '../../../core/data/site-content';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent implements AfterViewInit, OnDestroy {
  private readonly ui = inject(UiService);
  private readonly zone = inject(NgZone);
  private readonly router = inject(Router);

  readonly trust = TRUST;
  readonly navLinks = NAV_LINKS;
  readonly mobileMenuOpen = this.ui.mobileMenuOpen;

  /** Deepens the header's shadow and tightens its height once the page moves. */
  readonly scrolled = signal(false);

  /** Which section is currently under the header, for the nav underline. */
  readonly activeFragment = signal<string>('');

  private observer?: IntersectionObserver;

  constructor() {
    // The header outlives the router outlet, so the sections it watches only
    // exist once a route has rendered — and they change from route to route.
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.watchSections());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const isScrolled = window.scrollY > 12;
    if (isScrolled !== this.scrolled()) {
      this.scrolled.set(isScrolled);
    }
  }

  ngAfterViewInit(): void {
    this.watchSections();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMobileMenu(): void {
    this.ui.toggleMobileMenu();
  }

  closeMobileMenu(): void {
    this.ui.closeMobileMenu();
  }

  private watchSections(): void {
    this.observer?.disconnect();
    this.activeFragment.set('');

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      // One frame's grace so the routed view is in the DOM before we look.
      requestAnimationFrame(() => {
        const sections = this.navLinks
          .map((link) => document.getElementById(link.fragment))
          .filter((el): el is HTMLElement => el !== null);

        // Story pages have none of these sections; nothing to highlight.
        if (!sections.length) {
          return;
        }

        this.observer = new IntersectionObserver(
          (entries) => {
            const visible = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) {
              this.zone.run(() => this.activeFragment.set(visible.target.id));
            }
          },
          // The band sits just below the header, so the "current" section is
          // whichever one occupies the top of the viewport.
          { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
        );

        sections.forEach((section) => this.observer?.observe(section));
      });
    });
  }
}
