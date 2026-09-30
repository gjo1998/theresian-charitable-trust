import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { GALLERY_PAGE, GALLERY_PHOTOS } from '../../core/data/site-content';
import { GalleryPhoto } from '../../core/models/content.models';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { PhotoDirective } from '../../shared/directives/photo.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';

/**
 * Every photo the trust has chosen to publish, in a grid. Any photo
 * opens full size in a dialog, with previous and next.
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoDirective, RevealDirective, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section class="bg-cream">
      <div class="container-page pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div class="hero-rise max-w-[720px]">
          <p class="eyebrow">{{ page.eyebrow }}</p>
          <h1 class="mt-4 font-heading text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] text-sage">{{ page.title }}</h1>
          <p class="mt-5 text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ page.lead }}</p>
        </div>

        <!-- A grid, newest first, reading left to right. Every thumbnail shares one 4:3 frame; the full-size view shows the whole photo. -->
        <ul class="mt-12 grid items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          @for (photo of photos(); track photo.image; let i = $index) {
            <li appReveal>
              <button
                type="button"
                class="group block w-full text-left"
                [attr.aria-label]="page.openLabel + ': ' + photo.caption"
                (click)="open(i)"
              >
                <span class="photo-frame block overflow-hidden rounded-card">
                  <img
                    [appPhoto]="photo.image"
                    [alt]="photo.alt"
                    [priority]="i < 3"
                    [frameAspect]="4 / 3"
                    [capped]="false"
                    [focalPoint]="photo.focalPoint"
                    class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span class="mt-3 flex items-baseline justify-between gap-3 px-1">
                  <span class="font-heading text-[18px] leading-snug text-sage">{{ photo.caption }}</span>
                  @if (photo.when) {
                    <span class="shrink-0 rounded-full bg-sage-soft px-2.5 py-0.5 text-[12px] font-bold text-sage">{{ photo.when }}</span>
                  }
                </span>
              </button>
            </li>
          }
        </ul>
      </div>
    </section>

    <!-- Full-size view -->
    <dialog
      #viewer
      class="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90"
      [attr.aria-label]="current()?.caption"
      (close)="index.set(null)"
      (keydown)="onKey($event)"
      (click)="onBackdrop($event)"
    >
      @if (current(); as photo) {
        <figure class="flex max-w-[92vw] flex-col items-center">
          <img [src]="photo.image" [alt]="photo.alt" class="max-h-[78vh] w-auto rounded-[20px] object-contain shadow-soft" />
          <figcaption class="mt-4 text-center text-[17px] text-cream">
            {{ photo.caption }}
            @if (photo.when) {
              <span class="ms-2 text-mist">· {{ photo.when }}</span>
            }
            <span class="ms-2 text-mist">({{ (index() ?? 0) + 1 }} / {{ photos().length }})</span>
          </figcaption>
        </figure>
        <div class="mt-5 flex justify-center gap-3">
          <button type="button" class="btn btn-cream !p-3" [attr.aria-label]="page.previousLabel" (click)="step(-1)">
            <app-icon name="arrow-left" [size]="22" />
          </button>
          <button type="button" class="btn btn-cream !p-3" [attr.aria-label]="page.closeLabel" (click)="close()">
            <app-icon name="close" [size]="22" />
          </button>
          <button type="button" class="btn btn-cream !p-3" [attr.aria-label]="page.nextLabel" (click)="step(1)">
            <app-icon name="arrow-right" [size]="22" />
          </button>
        </div>
      }
    </dialog>
  `,
})
export class GalleryComponent {
  readonly page = GALLERY_PAGE;
  /*
   * A signal, not an input: the router binds route parameters to a routed
   * page's inputs (withComponentInputBinding) and would set it to undefined.
   */
  readonly photos = signal<GalleryPhoto[]>(GALLERY_PHOTOS);

  /** Which photo is open full size, if any. */
  readonly index = signal<number | null>(null);
  readonly current = computed(() => {
    const i = this.index();
    return i === null ? undefined : this.photos()[i];
  });

  private readonly viewer = viewChild.required<ElementRef<HTMLDialogElement>>('viewer');

  constructor() {
    // The share image stays the building (the default), not a photo of the boys.
    inject(SeoService).update({ ...GALLERY_PAGE.meta, path: 'gallery' });
  }

  open(i: number): void {
    this.index.set(i);
    this.viewer().nativeElement.showModal();
  }

  close(): void {
    this.viewer().nativeElement.close();
  }

  /** Moves through the photos, wrapping round at either end. */
  step(by: number): void {
    const count = this.photos().length;
    const i = this.index();
    if (i === null || !count) return;
    this.index.set((i + by + count) % count);
  }

  onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }

  /** A click on the dark backdrop itself, not the photo or buttons, closes the view. */
  onBackdrop(event: MouseEvent): void {
    if (event.target === this.viewer().nativeElement) this.close();
  }
}
