import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Story } from '../../../core/models/story.model';
import { PlantComponent } from '../../../shared/components/plant/plant.component';

/** Soft frames, taken in turn so neighbouring chapters look different. */
const SHAPES = [
  { frame: 'rounded-arch aspect-[4/5]', width: 'max-w-[380px]' },
  { frame: 'rounded-full aspect-square', width: 'max-w-[360px]' },
  { frame: 'rounded-leaf-corner aspect-[4/3]', width: 'max-w-[440px]' },
];

/**
 * The picture beside a chapter: its photograph in a soft frame, or, when no
 * honest photograph exists, its own words on a coloured card.
 */
@Component({
  selector: 'app-chapter-visual',
  standalone: true,
  imports: [PlantComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @if (chapter().image) {
      <div class="relative mx-auto w-full" [class]="shape().width">
        <img
          [src]="chapter().image"
          [alt]="chapter().imageAlt"
          class="photo-frame float w-full object-cover"
          [class]="shape().frame + ' float-' + ((index() % 4) + 1)"
          loading="lazy"
        />
        @if (chapter().secondImage) {
          <img
            [src]="chapter().secondImage"
            [alt]="chapter().secondImageAlt"
            class="photo-frame float float-3 absolute -bottom-6 -left-2 sm:-left-8 w-[44%] aspect-square rounded-full object-cover"
            loading="lazy"
          />
        }
      </div>
    } @else if (chapter().coverQuote) {
      <figure
        class="mx-auto max-w-[440px] rounded-card-lg p-8 sm:p-10 shadow-soft"
        [class]="chapter().coverTone === 'peach' ? 'bg-peach-soft' : 'bg-sage-soft'"
      >
        @if (chapter().coverSprout) {
          <app-plant kind="sprout" class="w-20 h-20 -ms-2 mb-2" />
        }
        @if (chapter().coverTag) {
          <p class="inline-flex rounded-full bg-white px-4 py-1.5 text-[14px] font-extrabold text-clay mb-5">
            {{ chapter().coverTag }}
          </p>
        }
        <blockquote class="font-heading text-[24px] sm:text-[28px] leading-snug text-sage">
          &ldquo;{{ chapter().coverQuote }}&rdquo;
        </blockquote>
        @if (chapter().coverQuoteBy) {
          <figcaption class="mt-4 font-bold text-ink-muted">— {{ chapter().coverQuoteBy }}</figcaption>
        }
      </figure>
    }
  `,
})
export class ChapterVisualComponent {
  readonly chapter = input.required<Story>();
  readonly index = input(0);

  readonly shape = computed(() => SHAPES[this.index() % SHAPES.length]);
}
