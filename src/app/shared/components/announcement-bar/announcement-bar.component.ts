import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TRUST } from '../../../core/data/site-content';

@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-slateNavy-950 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <span class="flex items-center">
            <i class="fas fa-hands-holding-child text-amberGold-400 me-1.5"></i>
            A registered charitable trust in Kottayam, Kerala
          </span>
          <span class="hidden md:inline-flex items-center">
            <i class="fas fa-location-dot text-emeraldTrust-500 me-1.5"></i>
            {{ trust.address.line3 }}, {{ trust.address.district }}
          </span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          @if (trust.phoneVerified) {
            <a
              [href]="'tel:+' + trust.phoneE164"
              class="hover:text-amberGold-400 transition flex items-center font-medium"
            >
              <i class="fas fa-phone text-emeraldTrust-500 me-1.5"></i>
              {{ trust.phone }}
            </a>
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-amberGold-400 transition flex items-center font-medium"
            >
              <i class="fa-brands fa-whatsapp text-[#25D366] me-1.5"></i>
              WhatsApp
            </a>
          }
          <a
            [href]="'mailto:' + trust.email"
            class="hidden sm:flex hover:text-amberGold-400 transition items-center font-medium"
          >
            <i class="fas fa-envelope text-emeraldTrust-500 me-1.5"></i>
            {{ trust.email }}
          </a>
          <span class="hidden sm:inline text-slate-700" aria-hidden="true">|</span>
          <span
            class="bg-emeraldTrust-900 text-emeraldTrust-100 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-emeraldTrust-700/50"
          >
            Since {{ trust.foundedYear }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class AnnouncementBarComponent {
  readonly trust = TRUST;

  get whatsappUrl(): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(this.trust.whatsappMessage)}`;
  }
}
