import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiService } from './core/services/ui.service';
import { ContactFabComponent } from './shared/components/contact-fab/contact-fab.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, ContactFabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-header />
    <main>
      <router-outlet />
    </main>
    <app-site-footer />
    <app-contact-fab />
  `,
})
export class AppComponent {
  private readonly ui = inject(UiService);

  constructor() {
    // The router scrolls #fragment links with window.scrollTo, which ignores
    // CSS scroll-padding. Offset by whatever is stuck to the top of the
    // screen (the header, and the chapter index on /stories), plus a little air.
    inject(ViewportScroller).setOffset(() => {
      let offset = 16;
      document.querySelectorAll<HTMLElement>('[data-sticky]').forEach((bar) => (offset += bar.offsetHeight));
      return [0, offset];
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.closeMobileMenu();
  }
}
