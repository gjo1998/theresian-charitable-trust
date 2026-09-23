import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-program-modal',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (program(); as item) {
      <div
        class="fixed inset-0 z-50 overflow-y-auto bg-slateNavy-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="programModalTitle"
        (click)="close()"
      >
        <div
          class="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden p-6 space-y-4 modal-enter my-8"
          (click)="$event.stopPropagation()"
        >
          <div class="flex justify-between items-start border-b border-slate-100 pb-3 gap-4">
            <h2 id="programModalTitle" class="font-heading font-bold text-xl text-slateNavy-900">
              {{ item.title }}
            </h2>
            <button
              type="button"
              (click)="close()"
              class="text-slate-400 hover:text-slate-700 text-lg shrink-0"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed">{{ item.detail }}</p>

          <div class="pt-2">
            <a
              routerLink="/"
              fragment="get-involved"
              (click)="close()"
              class="block text-center w-full bg-emeraldTrust-600 hover:bg-emeraldTrust-700 text-white font-bold py-3 rounded-xl text-sm transition"
            >
              Support this work
            </a>
          </div>
        </div>
      </div>
    }
  `,
})
export class ProgramModalComponent {
  private readonly ui = inject(UiService);

  readonly program = this.ui.activeProgram;

  close(): void {
    this.ui.closeProgram();
  }
}
