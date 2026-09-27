import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { emailLink, mapsLink, phoneLink } from '../../../core/contact-links';
import { FOOTER, PHILOSOPHY_QUOTE, TRUST } from '../../../core/data/site-content';
import { IconComponent } from '../icon/icon.component';
import { LogoComponent } from '../logo/logo.component';

/** Name, address and how to reach us. Also the "Visit" anchor in the header. */
@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  readonly trust = TRUST;
  readonly quote = PHILOSOPHY_QUOTE;
  readonly footer = FOOTER;
  readonly currentYear = new Date().getFullYear();

  readonly emailUrl = emailLink();
  readonly phoneUrl = phoneLink();
  readonly mapsUrl = mapsLink();
}
