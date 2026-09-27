import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { UPDATES, UPDATES_INTRO } from '../../../../core/data/site-content';
import { Update } from '../../../../core/models/content.models';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/** "Latest from Ammaveedu": the newest three updates. Empty, it's absent. */
@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [DatePipe, RevealDirective, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (latest().length) {
      <section id="updates" class="bg-sage-soft py-20 sm:py-28">
        <div class="container-page">
          <h2 appReveal class="section-title">{{ intro.title }}</h2>
          <ul class="mt-12 grid gap-6 md:grid-cols-3">
            @for (update of latest(); track update.date + update.title; let i = $index) {
              <li [appReveal]="i * 100">
                <article class="h-full rounded-card bg-white overflow-hidden shadow-soft">
                  @if (update.image; as photo) {
                    <img
                      [appPhoto]="photo.image"
                      [alt]="photo.alt"
                      [frameAspect]="3 / 2"
                      [focalPoint]="photo.focalPoint"
                      class="w-full aspect-[3/2] object-cover"
                    />
                  }
                  <div class="p-6 sm:p-7">
                    <time [attr.datetime]="update.date" class="text-[14px] font-bold uppercase tracking-[2px] text-clay">
                      {{ update.date | date: 'd MMMM y' }}
                    </time>
                    <h3 class="mt-2 font-heading text-[24px] leading-tight text-sage">{{ update.title }}</h3>
                    <p class="mt-3 text-[16px] text-ink-muted leading-relaxed">{{ update.body }}</p>
                  </div>
                </article>
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
})
export class UpdatesComponent {
  readonly updates = input<Update[]>(UPDATES);
  readonly intro = UPDATES_INTRO;

  /**
   * ISO dates sort as text, newest first. The date pipe reads "2026-06-01" as
   * that day in the reader's own time zone, so it prints as written.
   */
  readonly latest = computed(() =>
    [...this.updates()].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3),
  );
}
