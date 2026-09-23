import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiService } from './core/services/ui.service';
import { AnnouncementBarComponent } from './shared/components/announcement-bar/announcement-bar.component';
import { ContactFabComponent } from './shared/components/contact-fab/contact-fab.component';
import { ProgramModalComponent } from './shared/components/program-modal/program-modal.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AnnouncementBarComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    ProgramModalComponent,
    ToastComponent,
    ContactFabComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-announcement-bar />
    <app-site-header />

    <main>
      <router-outlet />
    </main>

    <app-site-footer />

    <app-program-modal />
    <app-contact-fab />
    <app-toast />
  `,
})
export class AppComponent {
  private readonly ui = inject(UiService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.closeAllOverlays();
    this.ui.closeMobileMenu();
  }
}
