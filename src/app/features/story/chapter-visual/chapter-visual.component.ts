import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { maxFrameWidth } from '../../../core/data/images';
import { Story } from '../../../core/models/story.model';
import { PlantComponent } from '../../../shared/components/plant/plant.component';
import { PhotoDirective } from '../../../shared/directives/photo.directive';

/** Soft frames, taken in turn so neighbouring chapters look different. */
const SHAPES = [
  { frame: 'rounded-arch aspect-[4/5]', aspect: 4 / 5, width: 380 },
  { frame: 'rounded-full aspect-square', aspect: 1, width: 360 },
  { frame: 'rounded-leaf-corner aspect-[4/3]', aspect: 4 / 3, width: 440 },
  { frame: 'rounded-card aspect-[2/1]', aspect: 2, width: 480 },
];

/** Below this, a frame would be too small to enjoy; try the next shape. */
const MIN_FRAME = 300;

/**
 * The picture beside a chapter: its photograph in a soft frame, or, when no
 * honest photograph exists, its own words on a coloured card.
 */
@Component({
  selector: 'app-chapter-visual',
  standalone: true,
  imports: [PlantComponent, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @if (chapter().image) {
      <div class="relative mx-auto w-full" [style.max-width.px]="shape().max">
        <img
          [appPhoto]="chapter().image!"
          [alt]="chapter().imageAlt"
          [capped]="false"
          [priority]="priority()"
          class="photo-frame float w-full object-cover"
          [class]="shape().frame + ' float-' + ((index() % 4) + 1)"
        />
        @if (chapter().secondImage) {
          <img
            [appPhoto]="chapter().secondImage!"
            [alt]="chapter().secondImageAlt"
            [frameAspect]="1"
            class="photo-frame float float-3 absolute -bottom-6 -left-2 sm:-left-8 w-[44%] aspect-square rounded-full object-cover"
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
  /** The lead picture on a chapter page loads first. */
  readonly priority = input(false);

  /**
   * Start from this chapter's turn in the rotation, and take the first frame
   * the photo can fill at a good size without being enlarged.
   */
  readonly shape = computed(() => {
    const image = this.chapter().image ?? '';
    const start = this.index() % 3;
    const order = [...SHAPES.slice(start, 3), ...SHAPES.slice(0, start), SHAPES[3]];
    const sized = order.map((shape) => ({
      ...shape,
      max: Math.min(shape.width, maxFrameWidth(image, shape.aspect) ?? shape.width),
    }));
    return sized.find((shape) => shape.max >= MIN_FRAME) ?? sized.reduce((a, b) => (b.max > a.max ? b : a));
  });
}
