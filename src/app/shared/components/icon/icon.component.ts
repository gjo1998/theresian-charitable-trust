import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'mail'
  | 'chat'
  | 'phone'
  | 'whatsapp'
  | 'close'
  | 'menu'
  | 'arrow-left'
  | 'arrow-right'
  | 'pin'
  | 'clock'
  | 'heart'
  | 'shield'
  | 'sprout'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'x'
  | 'website';

/** Simple line icons. Always decorative: the text beside them does the talking. */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      viewBox="0 0 24 24"
      [attr.width]="size()"
      [attr.height]="size()"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        }
        @case ('chat') {
          <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" />
          <path d="M9 11h.01M12 11h.01M15 11h.01" />
        }
        @case ('whatsapp') {
          <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" />
          <path d="M9.2 9.2c.2-.6.8-.8 1.1-.3l.6 1.2c.1.3 0 .6-.2.8l-.4.4a5 5 0 0 0 2.4 2.4l.4-.4c.2-.2.5-.3.8-.2l1.2.6c.5.3.3.9-.3 1.1-2.9 1-6.6-2.7-5.6-5.6Z" />
        }
        @case ('phone') {
          <path d="M5 4h3l1.5 4-2 1.3a11 11 0 0 0 7.2 7.2L16 14.5l4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('arrow-left') {
          <path d="M19 12H5M11 6l-6 6 6 6" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('pin') {
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        }
        @case ('heart') {
          <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
        }
        @case ('shield') {
          <path d="M12 3 5 6v5.5c0 4.3 3 7.9 7 9.5 4-1.6 7-5.2 7-9.5V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('facebook') {
          <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5a.5.5 0 0 1 .5-.5Z" />
        }
        @case ('instagram') {
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M16.5 7.5h.01" />
        }
        @case ('youtube') {
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="m10.5 9.5 4 2.5-4 2.5Z" />
        }
        @case ('x') {
          <path d="M4 4h4.5L20 20h-4.5Z" />
          <path d="M19.5 4 13 11.3M4.5 20l6.5-7.3" />
        }
        @case ('website') {
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z" />
        }
        @case ('sprout') {
          <path d="M12 21v-9" />
          <path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5Z" />
          <path d="M12 14.5c0-3.3-2-5.5-6-5.5 0 3.7 2 5.5 6 5.5Z" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
