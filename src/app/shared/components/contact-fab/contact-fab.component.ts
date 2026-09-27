import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { phoneLink, whatsappLink } from '../../../core/contact-links';
import { SHELL, TRUST } from '../../../core/data/site-content';
import { IconComponent } from '../icon/icon.component';

/**
 * Floating contact toggle. Collapsed it is a single button; expanded it offers
 * WhatsApp and a phone call, which are the two ways people actually reach a
 * trust like this one.
 */
@Component({
  selector: 'app-contact-fab',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (trust.phoneVerified) {
      <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        @if (open()) {
          <div class="flex flex-col items-end gap-2.5">
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              (click)="close()"
              class="flex items-center gap-3 bg-white hover:bg-sage-soft text-ink ps-4 pe-2 py-2 rounded-full shadow-soft transition-colors"
            >
              <span class="text-sm font-bold whitespace-nowrap">{{ labels.fabWhatsapp }}</span>
              <span class="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center">
                <app-icon name="whatsapp" />
              </span>
            </a>

            <a
              [href]="phoneUrl"
              (click)="close()"
              class="flex items-center gap-3 bg-white hover:bg-sage-soft text-ink ps-4 pe-2 py-2 rounded-full shadow-soft transition-colors"
            >
              <span class="text-sm font-bold whitespace-nowrap">{{ labels.fabCall }}</span>
              <span class="w-10 h-10 rounded-full bg-peach text-ink flex items-center justify-center">
                <app-icon name="phone" />
              </span>
            </a>
          </div>
        }

        <button
          type="button"
          (click)="toggle()"
          class="w-14 h-14 rounded-full shadow-soft flex items-center justify-center transition-colors"
          [class]="open() ? 'bg-ink text-white' : 'bg-sage text-white hover:bg-sage-dark'"
          [attr.aria-expanded]="open()"
          [attr.aria-label]="open() ? labels.fabClose : labels.fabOpen"
        >
          <app-icon [name]="open() ? 'close' : 'chat'" [size]="26" />
        </button>
      </div>
    }
  `,
})
export class ContactFabComponent {
  readonly trust = TRUST;
  readonly labels = SHELL;
  readonly open = signal(false);

  readonly whatsappUrl = whatsappLink();
  readonly phoneUrl = phoneLink();

  toggle(): void {
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
