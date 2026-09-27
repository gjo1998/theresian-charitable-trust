import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TEAM, TEAM_INTRO } from '../../../../core/data/site-content';
import { TeamMember } from '../../../../core/models/content.models';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/** "Who looks after the boys". A role on its own is fine; empty, it's absent. */
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RevealDirective, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (team().length) {
      <section id="team" class="bg-cream pb-16 sm:pb-24">
        <div class="container-page">
          <div appReveal class="rounded-card-lg bg-white p-7 sm:p-10 shadow-soft">
            <h2 class="font-heading text-[30px] sm:text-[38px] leading-tight text-sage">{{ intro.title }}</h2>
            <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              @for (member of team(); track $index) {
                <li class="flex items-center gap-4">
                  @if (member.photo; as photo) {
                    <img
                      [appPhoto]="photo.image"
                      [alt]="photo.alt"
                      [frameAspect]="1"
                      [focalPoint]="photo.focalPoint"
                      class="w-16 h-16 rounded-full object-cover shrink-0"
                    />
                  }
                  <p>
                    @if (member.name) {
                      <span class="block font-extrabold text-ink">{{ member.name }}</span>
                    }
                    <span class="block text-ink-muted">{{ member.role }}</span>
                  </p>
                </li>
              }
            </ul>
          </div>
        </div>
      </section>
    }
  `,
})
export class TeamComponent {
  readonly team = input<TeamMember[]>(TEAM);
  readonly intro = TEAM_INTRO;
}
