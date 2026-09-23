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

  /** The trust's own photograph of the house at Thellakom. */
  readonly houseImage = 'images/ammaveedu-house.jpg';
}
