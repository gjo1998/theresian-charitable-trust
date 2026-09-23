import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (toast(); as state) {
      <div
        role="status"
        aria-live="polite"
        class="fixed bottom-24 sm:bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm z-[60] bg-slateNavy-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3 text-xs sm:text-sm"
      >
        <i class="fas text-lg shrink-0" [class]="iconClass()" aria-hidden="true"></i>
        <span class="flex-1">{{ state.message }}</span>
        <button
          type="button"
          (click)="dismiss()"
          class="text-slate-400 hover:text-white shrink-0"
          aria-label="Dismiss notification"
        >
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    }
  `,
})
export class ToastComponent {
  private readonly ui = inject(UiService);

  readonly toast = this.ui.toast;

  readonly iconClass = computed(() => {
    switch (this.toast()?.kind) {
      case 'error':
        return 'fa-circle-exclamation text-red-400';
      case 'info':
        return 'fa-circle-info text-sky-400';
      default:
        return 'fa-check-circle text-emeraldTrust-500';
    }
  });

  dismiss(): void {
    this.ui.dismissToast();
  }
}
