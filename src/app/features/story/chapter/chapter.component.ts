import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES, STORY_PAGE, storyBySlug } from '../../../core/data/stories';
import { SeoService, firstSentence } from '../../../core/services/seo.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { NotFoundContentComponent } from '../../../shared/components/not-found-content/not-found-content.component';
import { ChapterVisualComponent } from '../chapter-visual/chapter-visual.component';
import { StoryBodyComponent } from '../story-body/story-body.component';

/** One chapter on its own page, at /stories/:slug. */
@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [RouterLink, IconComponent, ChapterVisualComponent, StoryBodyComponent, NotFoundContentComponent],
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

  constructor() {
    const seo = inject(SeoService);
    // Each chapter is its own page to search engines and link previews. An
    // unknown slug shows the not-found content, which sets its own tags.
    effect(() => {
      const story = this.story();
      if (!story) return;
      const opening = story.body.find((block) => block.type === 'p')?.text ?? story.title;
      seo.update({
        title: story.title + this.page.chapterTitleSuffix,
        description: firstSentence(opening),
        path: `stories/${story.slug}`,
        image: story.image,
      });
    });
  }

  readonly next = computed(() => {
    const current = this.story();
    return current ? this.ordered.find((s) => s.order === current.order + 1) : undefined;
  });
}
