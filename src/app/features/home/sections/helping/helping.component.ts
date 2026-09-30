import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HELPING_AREAS, HELPING_CLOSING, HELPING_INTRO, HELPING_MOMENTS } from '../../../../core/data/site-content';
import { GrowingArea } from '../../../../core/models/content.models';
import { GrowingSceneComponent } from '../../../../shared/components/illustrations/growing-scene.component';
import { PlantComponent } from '../../../../shared/components/plant/plant.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/** Each area's colour: the dot in the key, the ring of its buds on the vine. */
const AREA_COLOUR: Record<GrowingArea, string> = {
  Morally: '#F4A77C',
  Physically: '#FBD46B',
  Mentally: '#A9D4EA',
  Emotionally: '#7FB38C',
  Socially: '#B4572A',
};

/** The soft wash behind each drawing, by area. */
const AREA_WASH: Record<GrowingArea, string> = {
  Morally: 'bg-peach-soft',
  Physically: 'bg-sun-soft',
  Mentally: 'bg-[#E3F1F8]',
  Emotionally: 'bg-white',
  Socially: 'bg-cream',
};

/**
 * Where each value sits from 1024px: alternating sides of the vine, each
 * spanning two rows, so the right-hand side sits half a step lower.
 */
const PLACE = [
  'lg:col-start-1 lg:row-[1/span_2]',
  'lg:col-start-2 lg:row-[2/span_2]',
  'lg:col-start-1 lg:row-[3/span_2]',
  'lg:col-start-2 lg:row-[4/span_2]',
  'lg:col-start-1 lg:row-[5/span_2]',
  'lg:col-start-2 lg:row-[6/span_2]',
  'lg:col-start-1 lg:row-[7/span_2]',
  'lg:col-start-2 lg:row-[8/span_2]',
  'lg:col-start-1 lg:row-[9/span_2]',
];

@Component({
  selector: 'app-helping',
  standalone: true,
  imports: [RevealDirective, GrowingSceneComponent, PlantComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="helping" class="bg-sage-soft py-20 sm:py-28 scroll-mt-20">
      <div class="container-page">
        <div appReveal class="mx-auto max-w-[760px] lg:text-center">
          <p class="eyebrow">{{ intro.eyebrow }}</p>
          <h2 class="section-title mt-3">{{ intro.title }}</h2>
          <p class="mt-5 text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ intro.lead }}</p>
          <ul class="mt-6 flex flex-wrap gap-2 lg:justify-center" aria-label="The five ways a child grows">
            @for (area of areas; track area) {
              <li class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-sage">
                <span class="h-2.5 w-2.5 rounded-full" [style.background]="colour(area)"></span>{{ area }}
              </li>
            }
          </ul>
        </div>

        <!-- The vine: a sprout at the top, a young tree at the foot. Down the
             left on phones, down the middle from 1024px. -->
        <div class="relative mt-24" role="group" [attr.aria-label]="intro.illustrationLabel">
          <div aria-hidden="true" class="absolute inset-y-0 left-[30px] lg:left-1/2 w-1 -translate-x-1/2 rounded-full bg-leaf-300"></div>
          <app-plant kind="sprout" class="absolute -top-[84px] left-[30px] lg:left-1/2 h-24 w-24 -translate-x-1/2" />

          <ol class="relative grid gap-y-12 pl-16 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-0 lg:pl-0">
            @for (moment of moments; track moment.id; let i = $index; let left = $even) {
              <li
                [appReveal]="80"
                class="relative flex flex-col gap-5 sm:flex-row sm:items-center lg:py-5"
                [class]="place[i] + (left ? ' lg:flex-row-reverse lg:text-right' : '')"
              >
                <!-- The bud on the vine, numbered -->
                <span
                  aria-hidden="true"
                  class="absolute top-10 -left-[49px] flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] bg-white text-[12px] font-extrabold text-sage sm:top-1/2 sm:-translate-y-1/2"
                  [class]="left ? 'lg:left-auto lg:-right-[63px]' : 'lg:-left-[63px]'"
                  [style.border-color]="colour(moment.area)"
                >
                  {{ i + 1 }}
                </span>

                <div
                  class="w-full max-w-[340px] shrink-0 overflow-hidden border-4 border-white shadow-soft sm:w-[230px]"
                  [class]="wash(moment.area) + (left ? ' rounded-[88px_28px_88px_28px]' : ' rounded-[28px_88px_28px_88px]')"
                >
                  <app-growing-scene [kind]="moment.id" [label]="moment.illustrationLabel" />
                </div>

                <div>
                  <p class="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2px] text-clay">
                    <span class="h-2.5 w-2.5 rounded-full" [style.background]="colour(moment.area)"></span>{{ moment.area }}
                  </p>
                  <h3 class="mt-1 font-heading text-[24px] sm:text-[26px] leading-tight text-sage">{{ moment.title }}</h3>
                  <p class="mt-2 text-[16px] leading-relaxed text-ink-muted">{{ moment.body }}</p>
                </div>
              </li>
            }
          </ol>

          <!-- The vine ends in a young tree -->
          <app-plant kind="young-tree" class="relative mt-6 -ml-[26px] h-28 w-28 lg:mx-auto" />
        </div>
        <p class="mt-4 max-w-[440px] font-heading text-[22px] sm:text-[26px] leading-snug text-sage lg:mx-auto lg:text-center">
          {{ closing }}
        </p>
      </div>
    </section>
  `,
})
export class HelpingComponent {
  readonly intro = HELPING_INTRO;
  readonly areas = HELPING_AREAS;
  readonly moments = HELPING_MOMENTS;
  readonly closing = HELPING_CLOSING;
  readonly place = PLACE;

  colour(area: GrowingArea): string {
    return AREA_COLOUR[area];
  }

  wash(area: GrowingArea): string {
    return AREA_WASH[area];
  }
}
