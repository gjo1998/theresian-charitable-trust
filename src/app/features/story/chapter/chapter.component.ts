import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES, STORY_PAGE, storyBySlug } from '../../../core/data/stories';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { ChapterVisualComponent } from '../chapter-visual/chapter-visual.component';
import { StoryBodyComponent } from '../story-body/story-body.component';

/** One chapter on its own page, at /stories/:slug. */
@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [RouterLink, IconComponent, ChapterVisualComponent, StoryBodyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chapter.component.html',
})
export class ChapterComponent {
  /** Bound from the route parameter via withComponentInputBinding(). */
  readonly slug = input<string>('');

  readonly page = STORY_PAGE;
  readonly ordered = [...STORIES].sort((a, b) => a.order - b.order);
  readonly total = STORIES.length;

  readonly story = computed(() => storyBySlug(this.slug()));

  /** Position in the story, used to give the picture its frame. */
  readonly position = computed(() => this.ordered.findIndex((s) => s.slug === this.slug()));

  readonly previous = computed(() => {
    const current = this.story();
    return current ? this.ordered.find((s) => s.order === current.order - 1) : undefined;
  });

  readonly next = computed(() => {
    const current = this.story();
    return current ? this.ordered.find((s) => s.order === current.order + 1) : undefined;
  });
}
