import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NURTURE_INTRO, NURTURE_PILLARS } from '../../../../core/data/site-content';
import { Tone } from '../../../../core/models/content.models';
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
  imports: [RevealDirective],
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

        <ul class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          @for (pillar of pillars; track pillar.id; let i = $index) {
            <li
              [appReveal]="i * 100"
              class="grid grid-cols-[84px_1fr] items-start gap-5 sm:grid-cols-1 sm:gap-0 sm:text-center"
            >
              <div
                class="float w-[84px] h-[84px] sm:w-[150px] sm:h-[150px] sm:mx-auto rounded-full overflow-hidden border-[4px] sm:border-[6px]"
                [class]="ringFor(pillar.ring) + ' float-' + (i + 1)"
              >
                <img [src]="pillar.image" [alt]="pillar.imageAlt" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div class="sm:mt-6">
                <p class="text-[13px] font-bold uppercase tracking-[2px] text-sun">{{ pillar.badge }}</p>
                <h3 class="mt-1.5 font-heading text-[24px] sm:text-[26px] leading-tight text-cream">{{ pillar.title }}</h3>
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

  ringFor(tone: Tone): string {
    return RING[tone];
  }
}
