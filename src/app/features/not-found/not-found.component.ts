import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotFoundContentComponent } from '../../shared/components/not-found-content/not-found-content.component';

/** Any address the site doesn't have. */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NotFoundContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-not-found-content />`,
})
export class NotFoundComponent {}
