import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 sm:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <!-- Text -->
          <div appReveal>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              A home where love comes first
            </h2>
            <p class="mt-5 text-lg sm:text-xl text-leaf font-semibold leading-relaxed">
              Every child grows best where he feels safe, wanted and believed in. That's what we try to give
              each boy at Ammaveedu, every single day.
            </p>
            <p class="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed">
              Here, 27 boys grow up together as brothers. They share meals, homework, games and laughter. They
              are looked after by people who know their names, notice their moods, celebrate their small wins
              and stand by them through the hard days.
            </p>
            <p class="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
              We don't think of ourselves as an institution. We are a family, and our boys are its heart.
            </p>
            <a
              routerLink="/stories"
              class="mt-8 inline-flex items-center justify-center palm:w-full rounded-full bg-leaf px-7 py-3.5 font-heading font-bold text-white hover:bg-leaf-deep transition"
            >
              Read how Ammaveedu began
            </a>
          </div>

          <!-- Floating photos -->
          <div appReveal class="relative">
            <div class="grid grid-cols-2 gap-5">
              <img
                src="images/ammaveedu-boys.jpg"
                alt="Boys of Ammaveedu together outside the home"
                class="float-slow w-full aspect-[4/5] object-cover rounded-card shadow-xl"
                loading="lazy"
              />
              <img
                src="images/children-meal.jpg"
                alt="Younger children sharing a meal at Ammaveedu"
                class="float-slow-late w-full aspect-[4/5] object-cover rounded-card shadow-xl mt-10"
                loading="lazy"
              />
            </div>

            <div
              class="wobble absolute -top-5 -left-3 sm:-left-6 w-28 h-28 rounded-full bg-mango text-ink shadow-xl flex flex-col items-center justify-center text-center"
            >
              <span class="font-heading font-extrabold text-3xl leading-none">27</span>
              <span class="font-heading font-bold text-xs leading-tight mt-1">brothers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WelcomeComponent {}
