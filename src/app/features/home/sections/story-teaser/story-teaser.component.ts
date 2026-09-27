import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORY_TEASER } from '../../../../core/data/site-content';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-story-teaser',
  standalone: true,
  imports: [RouterLink, RevealDirective, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bg-sage-soft py-20 sm:py-28">
      <div class="container-page">
        <div
          appReveal
          class="grid items-center gap-12 rounded-card-lg bg-white shadow-soft p-6 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16"
        >
          <div>
            <p class="eyebrow">{{ teaser.eyebrow }}</p>
            <h2 class="section-title mt-3">{{ teaser.title }}</h2>
            <p class="mt-5 text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ teaser.body }}</p>
            <div class="btn-row mt-9">
              <a [routerLink]="teaser.cta.path" class="btn btn-sage">{{ teaser.cta.label }}</a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:gap-6">
            @for (photo of teaser.photos; track photo.image; let i = $index) {
              <img
                [appPhoto]="photo.image"
                [alt]="photo.alt"
                [frameAspect]="1"
                [focalPoint]="photo.focalPoint"
                class="photo-frame float w-full aspect-square object-cover mx-auto"
                [class]="i === 0 ? 'rounded-arch float-1 mb-10' : 'rounded-leaf-corner float-3 mt-10'"
              />
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StoryTeaserComponent {
  readonly teaser = STORY_TEASER;
}
