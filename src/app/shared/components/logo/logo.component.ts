import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TRUST } from '../../../core/data/site-content';

/** A small sprout in a sage-soft circle, beside the home's name. */
@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center gap-2.5">
      <span
        class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-sage-soft shrink-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" class="w-7 h-7" aria-hidden="true" focusable="false">
          <path d="M16 28V15" stroke="#2F5D46" stroke-width="2.4" stroke-linecap="round" fill="none" />
          <path d="M16 16c0-5.5 3.4-8.8 9.5-8.8 0 6-3.4 8.8-9.5 8.8Z" fill="#4F8A62" />
          <path d="M16 19.5c0-4.4-2.7-7.2-7.8-7.2 0 4.9 2.7 7.2 7.8 7.2Z" fill="#7FB38C" />
        </svg>
      </span>
      <span
        class="font-heading text-[24px] leading-none"
        [class]="onDark() ? 'text-cream' : 'text-sage'"
      >
        {{ name }}
      </span>
    </span>
  `,
})
export class LogoComponent {
  readonly onDark = input(false);
  readonly name = TRUST.alsoKnownAs;
}
