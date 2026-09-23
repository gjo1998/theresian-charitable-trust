import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATS } from '../../../../core/data/site-content';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CountUpDirective, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="impact" class="py-16 bg-slateNavy-900 text-white relative overflow-hidden scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div appReveal class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-amberGold-400 font-semibold uppercase tracking-wider text-xs sm:text-sm">
            The work in numbers
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl font-extrabold mt-2 rule-in">Where things stand</h2>
          <p class="text-slate-300 text-sm mt-2">
            Only figures the trust has published about its own work. Nothing here is an estimate.
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          @for (stat of stats; track stat.id; let i = $index) {
            <div
              [appReveal]="i * 110"
              class="lift p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emeraldTrust-500/40 backdrop-blur-sm"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl"
                [class]="stat.iconClass"
              >
                <i class="fas" [class]="stat.icon" aria-hidden="true"></i>
              </div>
              <span
                class="font-heading text-3xl sm:text-5xl font-extrabold text-white block tabular-nums"
                [appCountUp]="stat.value"
              ></span>
              <span class="text-slate-200 text-xs sm:text-sm mt-2 block font-medium">{{ stat.label }}</span>
              <span class="text-slate-400 text-[11px] mt-1.5 block leading-relaxed">{{ stat.note }}</span>
            </div>
          }
        </div>

        <p class="text-center text-[11px] text-slate-400 mt-8">
          Figures as stated by the trust in its own published account of its work.
        </p>
      </div>
    </section>
  `,
})
export class ImpactComponent {
  readonly stats = STATS;
}
