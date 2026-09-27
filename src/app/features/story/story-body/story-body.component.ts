import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StoryBlockContent } from '../../../core/models/story.model';

/** A chapter's paragraphs, with any quote set out as a sage callout. */
@Component({
  selector: 'app-story-body',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block space-y-4' },
  template: `
    @for (block of blocks(); track $index) {
      @if (block.type === 'quote') {
        <figure class="rounded-card bg-sage-soft px-6 py-5 sm:px-7 sm:py-6 my-6">
          <blockquote class="font-heading text-[22px] sm:text-[26px] leading-snug text-sage">
            &ldquo;{{ block.text }}&rdquo;
          </blockquote>
          @if (block.by) {
            <figcaption class="mt-2 font-bold text-ink-muted">— {{ block.by }}</figcaption>
          }
        </figure>
      } @else {
        <p class="text-[17px] sm:text-[18px] text-ink-muted leading-relaxed">{{ block.text }}</p>
      }
    }
  `,
})
export class StoryBodyComponent {
  readonly blocks = input.required<StoryBlockContent[]>();
}
