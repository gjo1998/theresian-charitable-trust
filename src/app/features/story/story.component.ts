import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES, storyBySlug } from '../../core/data/stories';
import { TRUST } from '../../core/data/site-content';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './story.component.html',
})
export class StoryComponent {
  /** Bound from the route parameter via withComponentInputBinding(). */
  readonly slug = input<string>('');

  readonly trust = TRUST;
  readonly ordered = [...STORIES].sort((a, b) => a.order - b.order);

  readonly story = computed(() => storyBySlug(this.slug()));

  readonly previous = computed(() => {
    const current = this.story();
    return current ? this.ordered.find((s) => s.order === current.order - 1) : undefined;
  });

  readonly next = computed(() => {
    const current = this.story();
    return current ? this.ordered.find((s) => s.order === current.order + 1) : undefined;
  });
}
