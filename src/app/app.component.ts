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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.closeMobileMenu();
  }
}
