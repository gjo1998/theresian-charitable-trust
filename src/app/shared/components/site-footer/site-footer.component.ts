import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHILOSOPHY_QUOTE, TRUST } from '../../../core/data/site-content';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  readonly trust = TRUST;
  readonly quote = PHILOSOPHY_QUOTE;
  readonly currentYear = new Date().getFullYear();
}
