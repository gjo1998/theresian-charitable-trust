import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GROWTH_INTRO, GROWTH_STAGES } from '../../../../core/data/site-content';
import { PlantComponent } from '../../../../shared/components/plant/plant.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/** Card heights on wide screens, so the row grows like a bar chart. */
const HEIGHTS = ['lg:min-h-[330px]', 'lg:min-h-[380px]', 'lg:min-h-[430px]', 'lg:min-h-[480px]'];
const PLANT_SIZES = ['w-20 h-20', 'w-24 h-24', 'w-28 h-28', 'w-32 h-32'];

@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [RevealDirective, PlantComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="growing" class="bg-cream pt-20 sm:pt-28 pb-16 sm:pb-24 scroll-mt-20">
      <div class="container-page">
        <div appReveal class="max-w-3xl">
          <p class="eyebrow">{{ intro.eyebrow }}</p>
          <h2 class="section-title mt-3">{{ intro.title }}</h2>
          <p class="mt-5 text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ intro.lead }}</p>
        </div>

        <div class="relative mt-14">
          <ol class="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:items-end">
            @for (stage of stages; track stage.id; let i = $index) {
              <li
                [appReveal]="i * 140"
                class="flex flex-col rounded-card p-5 sm:p-7 shadow-soft"
                [class]="(stage.highlight ? 'bg-peach' : 'bg-white') + ' ' + heights[i]"
              >
                <app-plant [kind]="stage.plant" class="mb-4" [class]="plantSizes[i]" />
                <div class="mt-auto">
                  <p
                    class="text-[13px] font-bold uppercase tracking-[2px]"
                    [class]="stage.highlight ? 'text-ink' : 'text-clay'"
                  >
                    {{ stage.label }}
                  </p>
                  <h3
                    class="mt-1 font-heading text-[22px] sm:text-[28px] leading-tight"
                    [class]="stage.highlight ? 'text-ink' : 'text-sage'"
                  >
                    {{ stage.name }}
                  </h3>
                  <p
                    class="mt-2 text-[15px] sm:text-[16px] leading-relaxed"
                    [class]="stage.highlight ? 'text-ink' : 'text-ink-muted'"
                  >
                    {{ stage.body }}
                  </p>
                </div>
              </li>
            }
          </ol>
          <!-- The ground the cards stand on -->
          <div class="hidden lg:block absolute -bottom-5 -inset-x-4 h-12 rounded-full bg-ground" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  `,
})
export class GrowthComponent {
  readonly intro = GROWTH_INTRO;
  readonly stages = GROWTH_STAGES;
  readonly heights = HEIGHTS;
  readonly plantSizes = PLANT_SIZES;
}
