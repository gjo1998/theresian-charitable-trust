import { Injectable, signal } from '@angular/core';

/** Shared UI state. Only the mobile drawer needs to be shared today. */
@Injectable({ providedIn: 'root' })
export class UiService {
  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
