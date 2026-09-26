import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** A little mango house with a hibiscus heart inside it. */
@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        class="shrink-0"
        [class]="size() === 'sm' ? 'w-10 h-10' : 'w-12 h-12'"
        role="img"
        aria-label="Ammaveedu"
      >
        <path d="M24 3 45 21v3H3v-3L24 3Z" fill="#FFC53D" />
        <rect x="8" y="22" width="32" height="23" rx="4" fill="#FFC53D" />
        <path
          d="M24 40c-5.6-4.1-8.4-6.9-8.4-10.2a4.6 4.6 0 0 1 8.4-2.7 4.6 4.6 0 0 1 8.4 2.7c0 3.3-2.8 6.1-8.4 10.2Z"
          fill="#E8456A"
        />
      </svg>

      <span class="leading-tight">
        <span
          class="block font-heading font-extrabold tracking-tight"
          [class]="onDark() ? 'text-white' : 'text-ink'"
          [class.text-2xl]="size() !== 'sm'"
          [class.text-xl]="size() === 'sm'"
        >
          Ammaveedu
        </span>
        <span
          class="block text-[11px] font-semibold uppercase tracking-wider"
          [class]="onDark() ? 'text-mango' : 'text-leaf'"
        >
          Theresian Charitable Trust
        </span>
      </span>
    </span>
  `,
})
export class LogoComponent {
  readonly size = input<'sm' | 'md'>('md');
  readonly onDark = input(false);
}
