import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, TRUST } from '../../../core/data/site-content';
import { UiService } from '../../../core/services/ui.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  private readonly ui = inject(UiService);

  readonly trust = TRUST;
  readonly navLinks = NAV_LINKS;
  readonly menuOpen = this.ui.mobileMenuOpen;

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
