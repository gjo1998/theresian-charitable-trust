import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_HERO, REGISTRATIONS } from '../../../../core/data/site-content';
import { HomeHero, Registrations } from '../../../../core/models/content.models';
import { filledRegistrations } from '../../../../core/registrations';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { PhotoDirective } from '../../../../shared/directives/photo.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, IconComponent, PhotoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly hero = input<HomeHero>(HOME_HERO);
  readonly registrations = input<Registrations>(REGISTRATIONS);

  /** The filled-in registration numbers, for the strip under the buttons. */
  readonly registrationRows = computed(() =>
    filledRegistrations(this.registrations(), this.hero().registrations.labels),
  );
}
