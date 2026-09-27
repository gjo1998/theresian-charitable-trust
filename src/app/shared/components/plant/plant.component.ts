import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PlantKind } from '../../../core/models/content.models';

/**
 * A small drawn plant, from sprout to branching tree. All four share one
 * canvas, so each stage really does look bigger than the last.
 *
 * The `.plant-grow` group springs up from the soil when a revealed parent
 * becomes visible (see styles.scss); with reduced motion it is simply there.
 */
@Component({
  selector: 'app-plant',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', 'aria-hidden': 'true' },
  template: `
    <svg viewBox="0 0 140 150" class="w-full h-full" aria-hidden="true" focusable="false">
      <ellipse cx="70" cy="140" rx="46" ry="8" fill="#E6DCC4" />
      <g class="plant-grow">
        @switch (kind()) {
          @case ('sprout') {
            <path d="M70 140v-30" stroke="#4F8A62" stroke-width="4" stroke-linecap="round" fill="none" />
            <path d="M70 114c0-11 7-17 19-17 0 12-7 17-19 17Z" fill="#6AA37A" />
            <path d="M70 120c0-9-6-14-16-14 0 10 6 14 16 14Z" fill="#9FD0AD" />
          }
          @case ('sapling') {
            <path d="M70 140V76" stroke="#4F8A62" stroke-width="4.5" stroke-linecap="round" fill="none" />
            <path d="M70 84c0-12 8-19 21-19 0 13-8 19-21 19Z" fill="#6AA37A" />
            <path d="M70 92c0-11-7-17-19-17 0 12 7 17 19 17Z" fill="#7FB38C" />
            <path d="M70 110c0-11 7-17 18-17 0 11-7 17-18 17Z" fill="#9FD0AD" />
            <path d="M70 120c0-9-6-14-15-14 0 10 6 14 15 14Z" fill="#6AA37A" />
            <circle cx="70" cy="72" r="5" fill="#9FD0AD" />
          }
          @case ('young-tree') {
            <path d="M65 140c1.5-16 1.5-32 1-46h8c-.5 14-.5 30 1 46Z" fill="#8A5A3B" />
            <circle cx="70" cy="68" r="30" fill="#4F8A62" />
            <circle cx="50" cy="80" r="20" fill="#6AA37A" />
            <circle cx="90" cy="80" r="20" fill="#6AA37A" />
            <circle cx="62" cy="54" r="17" fill="#7FB38C" />
            <circle cx="82" cy="58" r="14" fill="#9FD0AD" />
          }
          @case ('branching') {
            <path d="M63 140c2-18 2-34 1-52h12c-1 18-1 34 1 52Z" fill="#8A5A3B" />
            <path d="M69 104c-8-6-16-10-26-18M71 96c8-7 16-11 28-16" stroke="#8A5A3B" stroke-width="5" stroke-linecap="round" fill="none" />
            <circle cx="70" cy="56" r="34" fill="#4F8A62" />
            <circle cx="38" cy="76" r="22" fill="#6AA37A" />
            <circle cx="102" cy="72" r="22" fill="#6AA37A" />
            <circle cx="56" cy="36" r="20" fill="#7FB38C" />
            <circle cx="88" cy="38" r="19" fill="#7FB38C" />
            <circle cx="72" cy="26" r="15" fill="#9FD0AD" />
            <circle cx="46" cy="62" r="5" fill="#FBD46B" />
            <circle cx="92" cy="54" r="5" fill="#F4A77C" />
            <circle cx="70" cy="80" r="5" fill="#FBD46B" />
            <circle cx="108" cy="80" r="4.5" fill="#F4A77C" />
          }
        }
      </g>
    </svg>
  `,
})
export class PlantComponent {
  readonly kind = input.required<PlantKind>();
}
