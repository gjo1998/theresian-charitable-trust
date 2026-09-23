import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OBJECTIVES, PHILOSOPHY_QUOTE } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="objectives" class="py-20 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div appReveal class="lg:col-span-4 space-y-4">
            <span
              class="text-emeraldTrust-700 font-semibold uppercase tracking-wider text-xs sm:text-sm bg-emeraldTrust-50 px-3 py-1 rounded-full border border-emeraldTrust-100"
            >
              Aims and objects
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl font-extrabold text-slateNavy-900 leading-tight">
              What the trust set out to do
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              These are the objectives the trust was founded on. Some are running today; others are the
              direction it is working towards as funds allow.
            </p>
            <blockquote
              class="border-s-4 border-amberGold-400 bg-slate-50 p-4 rounded-e-xl text-sm text-slate-700 italic"
            >
              &ldquo;{{ quote.text }}&rdquo;
              <footer class="not-italic text-xs text-slate-500 mt-2">&mdash; {{ quote.attribution }}</footer>
            </blockquote>
          </div>

          <div class="lg:col-span-8">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              @for (objective of objectives; track objective.text; let i = $index) {
                <li
                  [appReveal]="i * 45"
                  class="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emeraldTrust-300 hover:bg-emeraldTrust-50 hover:shadow-md transition-colors duration-300"
                >
                  <i
                    class="fas text-emeraldTrust-600 mt-0.5 w-4 text-center shrink-0"
                    [class]="objective.icon"
                    aria-hidden="true"
                  ></i>
                  <span class="text-xs sm:text-sm text-slate-700 leading-relaxed">{{ objective.text }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ObjectivesComponent {
  readonly objectives = OBJECTIVES;
  readonly quote = PHILOSOPHY_QUOTE;
}
