import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES } from '../../core/data/stories';
import { TRUST } from '../../core/data/site-content';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './story.component.html',
})
export class StoryComponent {
  readonly trust = TRUST;
  readonly chapters = [...STORIES].sort((a, b) => a.order - b.order);
}
