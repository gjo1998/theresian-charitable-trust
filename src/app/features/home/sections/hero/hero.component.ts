import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO_HIGHLIGHTS, PHILOSOPHY_QUOTE, TRUST } from '../../../../core/data/site-content';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly trust = TRUST;
  readonly highlights = HERO_HIGHLIGHTS;
  readonly quote = PHILOSOPHY_QUOTE;
}
