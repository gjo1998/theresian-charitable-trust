import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NURTURE_INTRO, NURTURE_PILLARS } from '../../../../core/data/site-content';
import { maxFrameWidth } from '../../../../core/data/images';
import { Tone } from '../../../../core/models/content.models';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

const RING: Record<Tone, string> = {
  peach: 'border-peach',
  sun: 'border-sun',
  mint: 'border-leaf-300',
  sky: 'border-sky',
  sage: 'border-sage-soft',
};

@Component({
  selector: 'app-nurture',
  standalone: true,
  imports: [RevealDirective, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="nurture" class="on-dark bg-sage text-mist py-20 sm:py-28 scroll-mt-20">
      <div class="container-page">
        <div appReveal class="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p class="eyebrow">{{ intro.eyebrow }}</p>
            <h2 class="section-title mt-3">{{ intro.title }}</h2>
          </div>
          <p class="text-[18px] sm:text-[20px] leading-relaxed lg:pb-2">{{ intro.lead }}</p>
        </div>

        <!-- Rows on phones; cards from 640px; four columns from 1280px -->
        <ul class="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 xl:grid-cols-4 xl:gap-10">
          @for (pillar of pillars; track pillar.id; let i = $index) {
            <li
              [appReveal]="i * 100"
              class="grid grid-cols-[128px_1fr] items-start content-start gap-5 sm:grid-cols-1 sm:gap-0"
            >
              <!-- One shared cap: the four frames stay the same size, and none enlarges its photo -->
              <div class="w-full sm:mx-auto" [style.max-width.px]="frameCap">
                <img
                  [appPhoto]="pillar.image"
                  [alt]="pillar.alt"
                  [capped]="false"
                  [focalPoint]="pillar.focalPoint"
                  class="float w-full aspect-[4/3] object-cover rounded-[20px] sm:rounded-card border-[4px] sm:border-[6px]"
                  [class]="ringFor(pillar.ring) + ' float-' + (i + 1)"
                />
              </div>
              <div class="sm:mt-6">
                <p class="text-[13px] font-bold uppercase tracking-[2px] text-sun">{{ pillar.badge }}</p>
                <!-- Two lines reserved, so the four columns share a baseline -->
                <h3 class="mt-1.5 font-heading text-[22px] sm:text-[26px] leading-tight text-cream sm:min-h-[2.5em]">
                  {{ pillar.title }}
                </h3>
                <p class="mt-2.5 text-[16px] leading-relaxed">{{ pillar.body }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class NurtureComponent {
  readonly intro = NURTURE_INTRO;
  readonly pillars = NURTURE_PILLARS;

  /** The largest 4:3 frame every pillar photo can fill without enlarging. */
  readonly frameCap = Math.min(...NURTURE_PILLARS.map((p) => maxFrameWidth(p.image, 4 / 3) ?? Infinity));

  ringFor(tone: Tone): string {
    return RING[tone];
  }
}
