import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Counts a statistic up when it first scrolls into view.
 *
 * Takes the finished string ("27", "~100", "20+") and animates only the digits,
 * keeping whatever sits either side of them. Values with no digits at all are
 * printed as they are.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  readonly appCountUp = input.required<string>();

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private frame?: number;

  private static readonly DURATION = 1400;

  ngOnInit(): void {
    const node = this.host.nativeElement as HTMLElement;
    const raw = this.appCountUp();
    const parts = /^(\D*?)([\d,]+)(.*)$/.exec(raw);

    if (!parts || !this.shouldAnimate()) {
      node.textContent = raw;
      return;
    }

    const [, prefix, digits, suffix] = parts;
    const target = Number(digits.replace(/,/g, ''));
    node.textContent = `${prefix}0${suffix}`;

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.observer?.unobserve(node);
              this.run(node, prefix, target, suffix);
            }
          }
        },
        { threshold: 0.35 },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }

  private run(node: HTMLElement, prefix: string, target: number, suffix: string): void {
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / CountUpDirective.DURATION, 1);
      // easeOutCubic - quick to begin with, settling gently on the number
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);

      node.textContent = `${prefix}${value.toLocaleString('en-IN')}${suffix}`;

      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      }
    };

    this.frame = requestAnimationFrame(step);
  }

  private shouldAnimate(): boolean {
    return (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
