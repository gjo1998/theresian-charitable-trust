import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_STORY, TRUST, VALUE_PILLARS } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly trust = TRUST;
  readonly story = ABOUT_STORY;
  readonly pillars = VALUE_PILLARS;
  readonly yearsOfService = new Date().getFullYear() - TRUST.foundedYear;

  /** The Ammaveedu building at Thellakom as it stands today. */
  readonly houseImage = 'images/ammaveedu-building.webp';
}
