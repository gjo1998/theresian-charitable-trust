import { Injectable, signal } from '@angular/core';
import { Program } from '../models/content.models';

export type ToastKind = 'success' | 'info' | 'error';

export interface ToastState {
  message: string;
  kind: ToastKind;
}

/**
 * Shared UI state: the programme dialog, the mobile drawer and the toast.
 * Kept in one service so any component can reach it without threading outputs
 * up and down the tree.
 */
@Injectable({ providedIn: 'root' })
export class UiService {
  readonly mobileMenuOpen = signal(false);
  readonly activeProgram = signal<Program | null>(null);
  readonly toast = signal<ToastState | null>(null);

  private toastTimer?: ReturnType<typeof setTimeout>;

  openProgram(program: Program): void {
    this.activeProgram.set(program);
    this.lockScroll(true);
  }

  closeProgram(): void {
    this.activeProgram.set(null);
    this.lockScroll(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  closeAllOverlays(): void {
    this.closeProgram();
  }

  showToast(message: string, kind: ToastKind = 'success'): void {
    clearTimeout(this.toastTimer);
    this.toast.set({ message, kind });
    this.toastTimer = setTimeout(() => this.toast.set(null), 5000);
  }

  dismissToast(): void {
    clearTimeout(this.toastTimer);
    this.toast.set(null);
  }

  private lockScroll(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
