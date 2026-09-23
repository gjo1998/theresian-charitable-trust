import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, PROGRAMS, TRUST } from '../../../core/data/site-content';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  readonly trust = TRUST;
  readonly navLinks = NAV_LINKS;
  readonly programs = PROGRAMS;
  readonly currentYear = new Date().getFullYear();

  get whatsappUrl(): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(this.trust.whatsappMessage)}`;
  }
}
