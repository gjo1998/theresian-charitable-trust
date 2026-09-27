import { ChangeDetectionStrategy, Component } from '@angular/core';
import { emailLink, phoneLink, whatsappLink } from '../../../../core/contact-links';
import { CHANNEL_LABELS, FAMILY_INTRO, FAMILY_WAYS, GIVING_NOTE } from '../../../../core/data/site-content';
import { ContactChannel, FamilyWay, Tone } from '../../../../core/models/content.models';
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

const ICON: Record<ContactChannel, IconName> = {
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
    <section id="family" data-hides-fab class="bg-cream py-20 sm:py-28 scroll-mt-20">
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
              <article class="flex flex-col w-full rounded-card p-7 sm:p-8" [class]="cardFor(way.tone)">
                <span class="w-14 h-14 rounded-full bg-white text-sage flex items-center justify-center">
                  <app-icon [name]="icons[way.primary]" [size]="26" />
                </span>
                <h3 class="mt-6 font-heading text-[26px] leading-tight text-sage">{{ way.title }}</h3>
                <p class="mt-3 text-[16px] text-ink-muted leading-relaxed flex-1">{{ way.body }}</p>

                <!-- One main way to reach Fr. Sebastian, and the other two alongside -->
                <a
                  [href]="linkFor(way, way.primary)"
                  [attr.target]="way.primary === 'whatsapp' ? '_blank' : null"
                  [attr.rel]="way.primary === 'whatsapp' ? 'noopener noreferrer' : null"
                  class="btn btn-sage mt-7 self-start"
                >
                  {{ way.ctaLabel }}
                  <app-icon name="arrow-right" [size]="18" />
                </a>
                <p class="mt-2 flex flex-wrap items-center gap-x-1 text-[15px] text-ink-muted">
                  <span>{{ labels.or }}</span>
                  @for (channel of othersFor(way); track channel; let last = $last) {
                    <a
                      [href]="linkFor(way, channel)"
                      [attr.target]="channel === 'whatsapp' ? '_blank' : null"
                      [attr.rel]="channel === 'whatsapp' ? 'noopener noreferrer' : null"
                      class="inline-flex items-center min-h-[44px] px-1 font-bold text-sage underline decoration-sage/40 underline-offset-4 hover:decoration-sage"
                    >
                      {{ labels[channel] }}
                      <span class="sr-only">: {{ way.title }}</span>
                    </a>
                    @if (!last) {
                      <span aria-hidden="true">&middot;</span>
                    }
                  }
                </p>
              </article>
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
  readonly labels = CHANNEL_LABELS;
  readonly icons = ICON;

  private static readonly CHANNELS: ContactChannel[] = ['email', 'whatsapp', 'phone'];

  /** Each channel carries this card's own subject or message. */
  linkFor(way: FamilyWay, channel: ContactChannel): string {
    switch (channel) {
      case 'whatsapp':
        return whatsappLink(way.whatsappMessage);
      case 'phone':
        return phoneLink();
      default:
        return emailLink(way.emailSubject, way.emailBody);
    }
  }

  othersFor(way: FamilyWay): ContactChannel[] {
    return FamilyComponent.CHANNELS.filter((channel) => channel !== way.primary);
  }

  cardFor(tone: Tone): string {
    return CARD[tone];
  }
}
