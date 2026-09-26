import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAMILY_WAYS, GIVING_NOTE, TRUST } from '../../../../core/data/site-content';
import { FamilyWay } from '../../../../core/models/content.models';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="family" class="py-20 sm:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appReveal class="max-w-3xl mx-auto text-center">
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Be part of the family
          </h2>
          <p class="mt-5 text-lg text-ink-soft leading-relaxed">
            Every meal, school book and birthday cake here is made possible by friends. There's a place for
            you too.
          </p>
        </div>

        <div class="mt-14 grid gap-7 md:grid-cols-3">
          @for (way of ways; track way.id; let i = $index) {
            <article
              [appReveal]="i * 110"
              class="rounded-card p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
              [class]="way.cardClass"
            >
              <span class="text-4xl" aria-hidden="true">{{ way.icon }}</span>
              <h3 class="mt-4 font-heading font-bold text-2xl text-ink">{{ way.title }}</h3>
              <p class="mt-3 text-[15px] text-ink-soft leading-relaxed flex-1">{{ way.body }}</p>

              <a
                [href]="linkFor(way)"
                [attr.target]="way.ctaKind === 'whatsapp' ? '_blank' : null"
                [attr.rel]="way.ctaKind === 'whatsapp' ? 'noopener noreferrer' : null"
                class="mt-7 inline-flex items-center justify-center w-full rounded-full bg-ink px-6 py-3.5 font-heading font-bold text-white hover:bg-ink-soft transition"
              >
                {{ way.ctaLabel }}
              </a>
            </article>
          }
        </div>

        <p
          appReveal
          class="mt-12 mx-auto max-w-2xl text-center text-sm text-ink-soft bg-leaf-soft rounded-card px-6 py-5"
        >
          {{ note }}
        </p>
      </div>
    </section>
  `,
})
export class FamilyComponent {
  readonly trust = TRUST;
  readonly ways = FAMILY_WAYS;
  readonly note = GIVING_NOTE;

  /** Each card ends at Fr. Sebastian, by whichever route the visitor prefers. */
  linkFor(way: FamilyWay): string {
    switch (way.ctaKind) {
      case 'whatsapp':
        return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(
          'Hello Fr. Sebastian, I would love to share some time with the boys at Ammaveedu.',
        )}`;
      case 'phone':
        return `tel:+${this.trust.phoneE164}`;
      default: {
        const subject = encodeURIComponent('I would like to help a child at Ammaveedu');
        const body = encodeURIComponent(
          'Dear Fr. Sebastian,\n\nI came across the Ammaveedu website and would like to help. Please let me know how best to give and where it would be most useful.\n\n\n---\nMy name:\nMy phone:\n',
        );
        return `mailto:${this.trust.email}?subject=${subject}&body=${body}`;
      }
    }
  }
}
