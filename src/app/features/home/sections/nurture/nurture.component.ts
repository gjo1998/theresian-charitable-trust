import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NURTURE_PILLARS } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-nurture',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="nurture" class="py-20 sm:py-28 bg-mango-soft scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appReveal class="max-w-3xl mx-auto text-center">
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            How we nurture every child
          </h2>
          <p class="mt-5 text-lg text-ink-soft leading-relaxed">
            Four simple things, given with a lot of love, help a boy grow strong in body, mind and heart.
          </p>
        </div>

        <div class="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          @for (pillar of NURTURE; track pillar.id; let i = $index) {
            <article
              [appReveal]="i * 90"
              class="bg-white rounded-card overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-8"
              [class]="pillar.accentBorder"
            >
              <div class="relative aspect-square overflow-hidden">
                <img
                  [src]="pillar.image"
                  [alt]="pillar.imageAlt"
                  class="breathe w-full h-full object-cover"
                  [class]="pillar.breatheClass"
                  loading="lazy"
                />
                <span
                  class="absolute top-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-heading font-bold shadow"
                  [class]="pillar.accentBadge"
                >
                  {{ pillar.badge }}
                </span>
              </div>

              <div class="p-6">
                <h3 class="font-heading font-bold text-xl text-ink">{{ pillar.title }}</h3>
                <p class="mt-2.5 text-[15px] text-ink-soft leading-relaxed">{{ pillar.body }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class NurtureComponent {
  readonly NURTURE = NURTURE_PILLARS;
}
