import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { emailLink, mapsLink, phoneLink } from '../../../core/contact-links';
import { FOOTER, PHILOSOPHY_QUOTE, REGISTRATIONS, SOCIAL_LINKS, TRUST } from '../../../core/data/site-content';
import { Registrations, SocialLink } from '../../../core/models/content.models';
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

  readonly socialLinks = input<SocialLink[]>(SOCIAL_LINKS);
  readonly registrations = input<Registrations>(REGISTRATIONS);

  /** Only the registration numbers that are filled in, in a fixed order. */
  readonly registrationRows = computed(() => {
    const values = this.registrations();
    return (Object.keys(this.footer.registrationLabels) as (keyof Registrations)[])
      .filter((key) => !!values[key]?.trim())
      .map((key) => ({ label: this.footer.registrationLabels[key], value: values[key]! }));
  });
}
