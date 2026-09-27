import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ALUMNI, ALUMNI_INTRO, ALUMNI_LABELS } from '../../../../core/data/site-content';
import { Alumnus } from '../../../../core/models/content.models';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * "Where they are now": young men who grew up at Ammaveedu.
 * Only entries the trust has written consent for are shown; with none, the
 * whole section is absent.
 */
@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [RevealDirective, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (shown().length) {
      <section id="alumni" class="bg-cream py-20 sm:py-28">
        <div class="container-page">
          <div appReveal class="max-w-3xl">
            @if (intro.eyebrow) {
              <p class="eyebrow">{{ intro.eyebrow }}</p>
            }
            <h2 class="section-title mt-3">{{ intro.title }}</h2>
          </div>

          <ul class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            @for (person of shown(); track person.firstNameOrInitial + person.yearsAtHome; let i = $index) {
              <li [appReveal]="i * 100" class="rounded-card bg-white p-7 shadow-soft">
                <figure class="flex flex-col gap-5">
                  <div class="flex items-center gap-4">
                    @if (person.photo; as photo) {
                      <img
                        [appPhoto]="photo.image"
                        [alt]="photo.alt"
                        [frameAspect]="1"
                        [focalPoint]="photo.focalPoint"
                        class="w-20 h-20 rounded-full object-cover shrink-0"
                      />
                    }
                    <figcaption>
                      <span class="block font-heading text-[26px] leading-tight text-sage">{{ person.firstNameOrInitial }}</span>
                      <span class="block text-[15px] text-ink-muted">{{ labels.yearsAtHome }}: {{ person.yearsAtHome }}</span>
                    </figcaption>
                  </div>
                  <p class="text-[17px] text-ink leading-relaxed">{{ person.nowDoing }}</p>
                  @if (person.quote) {
                    <blockquote class="rounded-card bg-sage-soft px-5 py-4 font-heading text-[20px] leading-snug text-sage">
                      &ldquo;{{ person.quote }}&rdquo;
                    </blockquote>
                  }
                </figure>
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
})
export class AlumniComponent {
  readonly alumni = input<Alumnus[]>(ALUMNI);
  readonly intro = ALUMNI_INTRO;
  readonly labels = ALUMNI_LABELS;

  /** Nobody appears without written consent. */
  readonly shown = computed(() => this.alumni().filter((person) => person.consentConfirmed));
}
