import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Fades an element up as it scrolls into view.
 *
 * Put `appReveal` on anything; pass a number for a stagger delay in ms.
 * The observer runs outside Angular so scrolling never triggers change
 * detection, and anyone who has asked their system for reduced motion simply
 * gets the finished state immediately.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  readonly appReveal = input<number | string>('');

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.host.nativeElement as HTMLElement;
    node.classList.add('reveal');

    const delay = Number(this.appReveal());
    if (Number.isFinite(delay) && delay > 0) {
      node.style.transitionDelay = `${delay}ms`;
    }

    if (!this.shouldAnimate()) {
      node.classList.add('is-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              this.observer?.unobserve(node);
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private shouldAnimate(): boolean {
    return (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
