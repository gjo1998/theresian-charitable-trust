import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { phoneLink, whatsappLink } from '../../../core/contact-links';
import { SHELL, TRUST } from '../../../core/data/site-content';
import { IconComponent } from '../icon/icon.component';

/**
 * Floating contact toggle, offering WhatsApp and a phone call.
 *
 * It steps aside wherever the page already shows contact options: any
 * element marked `data-hides-fab` (the hero, "Be part of the family" and the
 * footer). On phones it docks into the header bar instead of floating over
 * the page, so it never covers text or buttons.
 */
@Component({
  selector: 'app-contact-fab',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (trust.phoneVerified) {
      <div
        class="fab fixed z-50 top-[18px] flex flex-col items-end gap-3 sm:top-auto sm:bottom-5 sm:right-5 sm:flex-col-reverse"
        [class]="dockClass()"
        [class.fab-hidden]="hidden()"
        [attr.inert]="hidden() ? '' : null"
      >
        <button
          #toggleButton
          type="button"
          (click)="toggle()"
          class="w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-soft flex items-center justify-center transition-colors"
          [class]="open() ? 'bg-ink text-white' : 'bg-sage text-white hover:bg-sage-dark'"
          [attr.aria-expanded]="open()"
          aria-controls="contactFabMenu"
          [attr.aria-label]="open() ? labels.fabClose : labels.fabOpen"
        >
          <app-icon [name]="open() ? 'close' : 'chat'" [size]="24" />
        </button>

        @if (open()) {
          <div id="contactFabMenu" class="flex flex-col items-end gap-2.5">
            <a
              #firstOption
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              (click)="close(false)"
              class="flex items-center gap-3 bg-white hover:bg-sage-soft text-ink ps-4 pe-2 py-2 rounded-full shadow-soft transition-colors"
            >
              <span class="text-sm font-bold whitespace-nowrap">{{ labels.fabWhatsapp }}</span>
              <span class="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center">
                <app-icon name="whatsapp" />
              </span>
            </a>

            <a
              [href]="phoneUrl"
              (click)="close(false)"
              class="flex items-center gap-3 bg-white hover:bg-sage-soft text-ink ps-4 pe-2 py-2 rounded-full shadow-soft transition-colors"
            >
              <span class="text-sm font-bold whitespace-nowrap">{{ labels.fabCall }}</span>
              <span class="w-10 h-10 rounded-full bg-peach text-ink flex items-center justify-center">
                <app-icon name="phone" />
              </span>
            </a>
          </div>
        }
      </div>
    }
  `,
})
export class ContactFabComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly trust = TRUST;
  readonly labels = SHELL;
  readonly open = signal(false);
  /** True while a section that already offers contact options is on screen. */
  readonly hidden = signal(false);

  readonly whatsappUrl = whatsappLink();
  readonly phoneUrl = phoneLink();

  private readonly toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  private readonly firstOption = viewChild<ElementRef<HTMLAnchorElement>>('firstOption');

  private readonly path = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.split(/[?#]/)[0]),
    ),
    { initialValue: this.router.url.split(/[?#]/)[0] },
  );

  /**
   * Where it docks in the header on phones: beside the menu button, or in
   * the empty right-hand corner of the story page's header.
   */
  readonly dockClass = computed(() => (this.path() === '/stories' ? 'right-4' : 'right-[68px]'));

  private observer?: IntersectionObserver;
  private readonly onScreen = new Set<Element>();
  private navigation?: Subscription;

  ngAfterViewInit(): void {
    this.watchSections();
    this.navigation = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.watchSections());
  }

  ngOnDestroy(): void {
    this.navigation?.unsubscribe();
    this.observer?.disconnect();
  }

  toggle(): void {
    if (this.open()) {
      this.close();
    } else {
      this.open.set(true);
      // Once the menu is drawn, move into it.
      setTimeout(() => this.firstOption()?.nativeElement.focus());
    }
  }

  /** Closes the menu, and by default hands focus back to the toggle. */
  close(returnFocus = true): void {
    if (!this.open()) return;
    this.open.set(false);
    if (returnFocus) {
      this.toggleButton()?.nativeElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  /**
   * A click anywhere else closes the menu. Focus stays where the visitor
   * clicked, rather than being pulled back to the toggle.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) {
      this.close(false);
    }
  }

  /** (Re)observe the marked sections on the current page, once it is drawn. */
  private watchSections(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.observer?.disconnect();
        this.onScreen.clear();
        this.observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.onScreen.add(entry.target);
            } else {
              this.onScreen.delete(entry.target);
            }
          }
          this.setHidden(this.onScreen.size > 0);
        });
        const sections = document.querySelectorAll('[data-hides-fab]');
        sections.forEach((section) => this.observer!.observe(section));
        if (sections.length === 0) this.setHidden(false);
      });
    });
  }

  private setHidden(hidden: boolean): void {
    if (hidden === this.hidden()) return;
    this.zone.run(() => {
      this.hidden.set(hidden);
      if (hidden) this.close(false);
    });
  }
}
