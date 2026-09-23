import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES } from '../../../../core/data/stories';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stories.component.html',
})
export class StoriesComponent {
  /** Narrative order: the history reads forwards, not newest first. */
  readonly stories = [...STORIES].sort((a, b) => a.order - b.order);

  get lead() {
    return this.stories[0];
  }

  get rest() {
    return this.stories.slice(1);
  }
}
