import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { TRUST } from '../../../core/data/site-content';

/**
 * Floating contact toggle. Collapsed it is a single button; expanded it offers
 * WhatsApp and a phone call, which are the two ways people actually reach a
 * trust like this one.
 */
@Component({
  selector: 'app-contact-fab',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (trust.phoneVerified) {
      <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        @if (open()) {
          <div class="flex flex-col items-end gap-2.5 modal-enter origin-bottom-right">
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              (click)="close()"
              class="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 ps-4 pe-2 py-2 rounded-full shadow-xl border border-slate-200 transition group"
            >
              <span class="text-sm font-bold whitespace-nowrap">Chat on WhatsApp</span>
              <span
                class="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition"
              >
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </span>
            </a>

            <a
              [href]="'tel:+' + trust.phoneE164"
              (click)="close()"
              class="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 ps-4 pe-2 py-2 rounded-full shadow-xl border border-slate-200 transition group"
            >
              <span class="text-sm font-bold whitespace-nowrap">Call {{ trust.phone }}</span>
              <span
                class="w-10 h-10 rounded-full bg-emeraldTrust-600 text-white flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition"
              >
                <i class="fas fa-phone" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        }

        <button
          type="button"
          (click)="toggle()"
          class="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl text-white transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emeraldTrust-600/30"
          [class]="open() ? 'bg-slateNavy-900' : 'bg-[#25D366]'"
          [attr.aria-expanded]="open()"
          [attr.aria-label]="open() ? 'Close contact options' : 'Contact the trust by WhatsApp or phone'"
        >
          <i
            class="transition"
            [class]="open() ? 'fas fa-times' : 'fa-brands fa-whatsapp'"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    }
  `,
})
export class ContactFabComponent {
  readonly trust = TRUST;
  readonly open = signal(false);

  get whatsappUrl(): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(this.trust.whatsappMessage)}`;
  }

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
