import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_HERO } from '../../../../core/data/site-content';
import { HomeHero } from '../../../../core/models/content.models';
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
}
