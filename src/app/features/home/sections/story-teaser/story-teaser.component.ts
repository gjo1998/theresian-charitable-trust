import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-story-teaser',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 sm:py-28 bg-leaf text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div appReveal>
            <img
              src="images/ammaveedu-house.jpg"
              alt="The first house in Kottayam that became Ammaveedu"
              class="w-full aspect-[4/3] object-cover rounded-card shadow-2xl"
              loading="lazy"
            />
          </div>

          <div appReveal>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Every home has a story
            </h2>
            <p class="mt-5 text-lg text-white/90 leading-relaxed">
              Ours began in 2006 with a priest, Rs. 4,000, the gift of a house and one little boy who said
              yes. It's a story of patience, faith and the kindness of friends.
            </p>

            <blockquote class="mt-8 border-l-4 border-mango ps-5 py-1">
              <p class="font-heading font-bold text-xl sm:text-2xl text-mango leading-snug">
                &ldquo;If I get a house, will you stay with me?&rdquo;
              </p>
              <p class="font-heading font-bold text-xl sm:text-2xl text-white mt-1">&ldquo;Yes.&rdquo;</p>
            </blockquote>

            <a
              routerLink="/stories"
              class="mt-9 inline-flex items-center justify-center palm:w-full rounded-full bg-mango px-8 py-4 font-heading font-bold text-ink text-lg hover:brightness-95 transition"
            >
              Read the story of Ammaveedu
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StoryTeaserComponent {}
