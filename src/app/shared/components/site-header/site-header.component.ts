import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { HEADER_CTA, NAV_LINKS, SHELL } from '../../../core/data/site-content';
import { UiService } from '../../../core/services/ui.service';
import { IconComponent } from '../icon/icon.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, LogoComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  private readonly ui = inject(UiService);
  private readonly router = inject(Router);

  readonly navLinks = NAV_LINKS;
  readonly cta = HEADER_CTA;
  readonly labels = SHELL;
  readonly menuOpen = this.ui.mobileMenuOpen;

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** The story pages get their own, simpler header. */
  readonly onStory = computed(() => this.url().startsWith('/stories'));

  /** The header gains a shadow once the page has moved. */
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const isScrolled = window.scrollY > 12;
    if (isScrolled !== this.scrolled()) {
      this.scrolled.set(isScrolled);
    }
  }

  toggleMenu(): void {
    this.ui.toggleMobileMenu();
  }

  closeMenu(): void {
    this.ui.closeMobileMenu();
  }
}
