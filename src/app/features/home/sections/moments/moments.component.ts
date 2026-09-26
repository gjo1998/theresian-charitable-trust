import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MOMENTS } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-moments',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="moments" class="py-20 sm:py-28 bg-white overflow-hidden scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appReveal class="max-w-3xl mx-auto text-center">
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Little moments, big smiles
          </h2>
          <p class="mt-5 text-lg text-ink-soft leading-relaxed">
            Life at Ammaveedu is made of everyday moments: a shared lunch, a friendly visit, a game outside
            the front door.
          </p>
        </div>
      </div>

      <!-- The strip holds the photos twice so the loop has no seam. -->
      <div class="marquee mt-14 w-full">
        <div class="marquee-track flex w-max gap-6 px-4">
          @for (item of doubled; track $index) {
            <figure
              class="relative shrink-0 w-56 sm:w-72 rounded-card overflow-hidden shadow-lg"
              [class]="item.tall ? 'h-72 sm:h-96' : 'h-60 sm:h-80'"
            >
              <img
                [src]="item.image"
                [alt]="item.alt"
                class="w-full h-full object-cover"
                loading="lazy"
                [attr.aria-hidden]="$index >= moments.length ? 'true' : null"
              />
              <figcaption
                class="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-xs sm:text-sm font-heading font-bold text-ink shadow"
              >
                {{ item.caption }}
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
})
export class MomentsComponent {
  readonly moments = MOMENTS;
  /** Two passes of the same photos; translating by 50% loops seamlessly. */
  readonly doubled = [...MOMENTS, ...MOMENTS];
}
