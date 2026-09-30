import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { GALLERY_PHOTOS } from '../../core/data/site-content';
import { IMAGE_SIZES } from '../../core/data/images';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let fixture: ComponentFixture<GalleryComponent>;
  let element: HTMLElement;

  async function render() {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  }

  it('shows every gallery photo, each with alt text and a known size', async () => {
    await render();
    const images = element.querySelectorAll<HTMLImageElement>('ul img');
    expect(images.length).toBe(GALLERY_PHOTOS.length);
    GALLERY_PHOTOS.forEach((photo) => expect(IMAGE_SIZES[photo.image]).withContext(photo.image).toBeDefined());
    images.forEach((img) => expect(img.alt.length).toBeGreaterThan(0));
  });

  it('opens a photo full size and steps through, wrapping round', async () => {
    await render();
    const dialog = element.querySelector('dialog')!;
    // Karma's browser supports showModal; stub it so the test doesn't depend on focus.
    spyOn(dialog, 'showModal');

    element.querySelectorAll<HTMLButtonElement>('ul button')[0].click();
    fixture.detectChanges();
    expect(dialog.showModal).toHaveBeenCalled();
    expect(dialog.textContent).toContain(GALLERY_PHOTOS[0].caption);

    fixture.componentInstance.step(-1);
    fixture.detectChanges();
    expect(dialog.textContent).toContain(GALLERY_PHOTOS[GALLERY_PHOTOS.length - 1].caption);
  });

  it('still shows every photo when reached through the router, as on the live site', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'gallery', component: GalleryComponent }], withComponentInputBinding())],
    });
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/gallery', GalleryComponent);
    expect(harness.routeNativeElement!.querySelectorAll('ul img').length).toBe(GALLERY_PHOTOS.length);
  });
});
