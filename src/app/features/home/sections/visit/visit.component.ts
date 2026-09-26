import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TRUST } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="visit" class="py-20 sm:py-28 bg-sky-soft scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div appReveal>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Come and say hello
            </h2>
            <p class="mt-5 text-lg text-ink-soft leading-relaxed">
              Our door is open. Drop by for a cup of tea and meet the boys. They'll probably ask you to join
              their game.
            </p>

            <dl class="mt-10 space-y-7">
              <div>
                <dt class="font-heading font-bold text-sm uppercase tracking-wider text-leaf">Where to find us</dt>
                <dd class="mt-1.5 text-ink leading-relaxed">
                  <address class="not-italic">
                    {{ trust.address.line1 }}, {{ trust.address.line2 }}<br />
                    {{ trust.address.line3 }}<br />
                    {{ trust.address.district }} - {{ trust.address.pin }}, {{ trust.address.state }},
                    {{ trust.address.country }}
                  </address>
                </dd>
              </div>

              <div>
                <dt class="font-heading font-bold text-sm uppercase tracking-wider text-leaf">Visiting hours</dt>
                <dd class="mt-1.5 text-ink">{{ trust.officeHours }}</dd>
              </div>

              <div>
                <dt class="font-heading font-bold text-sm uppercase tracking-wider text-leaf">Say hello</dt>
                <dd class="mt-3 flex flex-wrap gap-3">
                  @if (trust.phoneVerified) {
                    <a
                      [href]="'tel:+' + trust.phoneE164"
                      class="inline-flex items-center rounded-full bg-leaf px-6 py-3 font-heading font-bold text-white hover:bg-leaf-deep transition"
                    >
                      Call {{ trust.phone }}
                    </a>
                    <a
                      [href]="whatsappUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center rounded-full bg-mango px-6 py-3 font-heading font-bold text-ink hover:brightness-95 transition"
                    >
                      WhatsApp
                    </a>
                  }
                  <a
                    [href]="'mailto:' + trust.email"
                    class="inline-flex items-center rounded-full border-2 border-ink/15 px-6 py-3 font-heading font-bold text-ink hover:bg-white transition break-all"
                  >
                    {{ trust.email }}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div appReveal class="rounded-card overflow-hidden shadow-xl bg-white">
            <iframe
              [src]="mapUrl"
              title="Map showing Ammaveedu at Thellakom, Kottayam"
              class="w-full h-[380px] lg:h-[520px] border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class VisitComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly trust = TRUST;

  /** Google's keyless embed, built here from our own constant. */
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://maps.google.com/maps?q=${TRUST.mapsQuery}&z=14&output=embed`,
  );

  get whatsappUrl(): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(this.trust.whatsappMessage)}`;
  }
}
