import { Directive, computed, input } from '@angular/core';
import { IMAGE_SIZES, maxFrameWidth } from '../../core/data/images';

/**
 * Puts a photograph from public/images on an <img>.
 *
 *   <img [appPhoto]="photo.image" [alt]="photo.alt" [frameAspect]="4 / 3" [focalPoint]="photo.focalPoint" />
 *
 * It sets the real width and height, caps the width so a cropped frame never
 * enlarges the photo, aims the crop at `focalPoint`, and loads lazily unless
 * `priority` is set (for the first image on a route).
 */
@Directive({
  selector: 'img[appPhoto]',
  standalone: true,
  host: {
    '[attr.src]': 'appPhoto()',
    '[attr.width]': 'size()?.width ?? null',
    '[attr.height]': 'size()?.height ?? null',
    '[style.max-width.px]': 'capWidth() ?? null',
    '[style.object-position]': 'focalPoint() || null',
    '[attr.loading]': "priority() ? 'eager' : 'lazy'",
    '[attr.fetchpriority]': "priority() ? 'high' : null",
    decoding: 'async',
  },
})
export class PhotoDirective {
  readonly appPhoto = input.required<string>();
  /** Width / height of the frame the photo fills; omit for an uncropped photo. */
  readonly frameAspect = input<number | undefined>(undefined);
  readonly focalPoint = input<string | undefined>(undefined);
  readonly priority = input(false);
  /** Set false when a parent frame already limits the size. */
  readonly capped = input(true);

  readonly size = computed(() => IMAGE_SIZES[this.appPhoto()]);
  readonly capWidth = computed(() =>
    this.capped() ? maxFrameWidth(this.appPhoto(), this.frameAspect()) : undefined,
  );
}
