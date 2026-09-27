import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HELPING_AREAS, HELPING_INTRO, HELPING_MOMENTS } from '../../../../core/data/site-content';
import { Tone } from '../../../../core/models/content.models';
import { GrowingSceneComponent } from '../../../../shared/components/illustrations/growing-scene.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

const WASH: Record<Tone, string> = {
  peach: 'bg-peach-soft',
  sun: 'bg-sun-soft',
  mint: 'bg-[#EEF6EF]',
  sky: 'bg-[#E3F1F8]',
  sage: 'bg-[#EEF6EF]',
};

@Component({
  selector: 'app-helping',
  standalone: true,
  imports: [RevealDirective, GrowingSceneComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="helping" class="bg-sage-soft py-20 sm:py-28 scroll-mt-20">
      <div class="container-page">
        <div appReveal class="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p class="eyebrow">{{ intro.eyebrow }}</p>
            <h2 class="section-title mt-3">{{ intro.title }}</h2>
          </div>
          <div>
            <p class="text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ intro.lead }}</p>
            <ul class="mt-5 flex flex-wrap gap-2" aria-label="The five ways a child grows">
              @for (area of areas; track area) {
                <li class="rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-sage">{{ area }}</li>
              }
            </ul>
          </div>
        </div>

        <!-- Two columns on tablets, five from 1280px: two rows of five -->
        <ul class="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          @for (moment of moments; track moment.id; let i = $index) {
            <li [appReveal]="(i % 5) * 90" class="flex flex-col overflow-hidden rounded-card bg-white shadow-soft">
              <app-growing-scene [kind]="moment.id" [label]="moment.illustrationLabel" [class]="washFor(moment.tone)" />
              <div class="p-5 sm:p-6">
                <p class="text-[12px] font-bold uppercase tracking-[2px] text-clay">{{ moment.area }}</p>
                <h3 class="mt-1 font-heading text-[21px] leading-tight text-sage">{{ moment.title }}</h3>
                <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">{{ moment.body }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class HelpingComponent {
  readonly intro = HELPING_INTRO;
  readonly areas = HELPING_AREAS;
  readonly moments = HELPING_MOMENTS;

  washFor(tone: Tone): string {
    return WASH[tone];
  }
}
