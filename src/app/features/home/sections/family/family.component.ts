import { ChangeDetectionStrategy, Component } from '@angular/core';
import { emailLink, phoneLink, whatsappLink } from '../../../../core/contact-links';
import { FAMILY_INTRO, FAMILY_WAYS, GIVING_NOTE } from '../../../../core/data/site-content';
import { FamilyWay, Tone } from '../../../../core/models/content.models';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';
import { WateringComponent } from '../../../../shared/components/illustrations/watering.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

const CARD: Record<Tone, string> = {
  peach: 'bg-peach-soft',
  sage: 'bg-sage-soft',
  sun: 'bg-sun-soft',
  mint: 'bg-sage-soft',
  sky: 'bg-sage-soft',
};

const ICON: Record<FamilyWay['ctaKind'], IconName> = {
  email: 'mail',
  whatsapp: 'chat',
  phone: 'phone',
};

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [RevealDirective, IconComponent, WateringComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="family" class="bg-cream py-20 sm:py-28 scroll-mt-20">
      <div class="container-page">
        <div class="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <app-watering
            [appReveal]="120"
            [label]="intro.illustrationLabel ?? ''"
            class="mx-auto w-full max-w-[560px] lg:max-w-none lg:-ms-4"
          />
          <div appReveal class="text-center lg:text-left">
            <p class="eyebrow">{{ intro.eyebrow }}</p>
            <h2 class="section-title mt-3">{{ intro.title }}</h2>
            <p class="mt-5 text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ intro.lead }}</p>
            <p
              class="mt-7 inline-flex items-start gap-3 text-left rounded-card bg-white shadow-soft px-5 py-4 text-[15px] sm:text-[16px] text-ink leading-relaxed"
            >
              <app-icon name="shield" [size]="22" class="mt-0.5 text-sage" />
              <span>{{ note }}</span>
            </p>
          </div>
        </div>

        <ul class="mt-14 grid gap-6 md:grid-cols-3">
          @for (way of ways; track way.id; let i = $index) {
            <li [appReveal]="i * 110" class="flex">
              <a
                [href]="linkFor(way)"
                [attr.target]="way.ctaKind === 'whatsapp' ? '_blank' : null"
                [attr.rel]="way.ctaKind === 'whatsapp' ? 'noopener noreferrer' : null"
                class="group flex flex-col w-full rounded-card p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                [class]="cardFor(way.tone)"
              >
                <span class="w-14 h-14 rounded-full bg-white text-sage flex items-center justify-center">
                  <app-icon [name]="iconFor(way)" [size]="26" />
                </span>
                <span class="mt-6 font-heading text-[26px] leading-tight text-sage">{{ way.title }}</span>
                <span class="mt-3 text-[16px] text-ink-muted leading-relaxed flex-1">{{ way.body }}</span>
                <span
                  class="mt-7 inline-flex items-center justify-center gap-2 self-start rounded-full bg-sage px-6 py-3 font-extrabold text-white group-hover:bg-sage-dark transition-colors"
                >
                  {{ way.ctaLabel }}
                  <app-icon name="arrow-right" [size]="18" />
                </span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FamilyComponent {
  readonly intro = FAMILY_INTRO;
  readonly ways = FAMILY_WAYS;
  readonly note = GIVING_NOTE;

  /** Each card ends at Fr. Sebastian, by whichever route the visitor prefers. */
  linkFor(way: FamilyWay): string {
    switch (way.ctaKind) {
      case 'whatsapp':
        return whatsappLink(way.message);
      case 'phone':
        return phoneLink();
      default:
        return emailLink(way.subject, way.message);
    }
  }

  cardFor(tone: Tone): string {
    return CARD[tone];
  }

  iconFor(way: FamilyWay): IconName {
    return ICON[way.ctaKind];
  }
}
