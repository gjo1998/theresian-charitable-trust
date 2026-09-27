import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_HERO } from '../../../../core/data/site-content';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly hero = HOME_HERO;
}
