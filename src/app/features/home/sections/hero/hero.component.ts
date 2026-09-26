import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO_SLIDES, TRUST } from '../../../../core/data/site-content';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly zone = inject(NgZone);

  readonly trust = TRUST;
  readonly slides = HERO_SLIDES;
  readonly active = signal(0);

  private timer?: ReturnType<typeof setInterval>;

  private static readonly INTERVAL = 7000;

  ngOnInit(): void {
    if (this.slides.length < 2 || !this.shouldAutoPlay()) {
      return;
    }
    // Ticking outside Angular keeps the interval off the change-detection path;
    // the one signal write is brought back in.
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.zone.run(() => this.active.update((i) => (i + 1) % this.slides.length));
      }, HeroComponent.INTERVAL);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  /** Clicking a dot picks that photo and restarts the cycle from there. */
  show(index: number): void {
    this.active.set(index);
    if (this.timer) {
      clearInterval(this.timer);
      this.zone.runOutsideAngular(() => {
        this.timer = setInterval(() => {
          this.zone.run(() => this.active.update((i) => (i + 1) % this.slides.length));
        }, HeroComponent.INTERVAL);
      });
    }
  }

  private shouldAutoPlay(): boolean {
    return (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
