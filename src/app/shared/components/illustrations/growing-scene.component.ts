import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GrowingScene } from '../../../core/models/content.models';
import { AdultFigureComponent, BoyFigureComponent } from './figures.component';

/**
 * One small scene for each of the ten things we nurture, drawn in the same
 * flat style as the guiding path. Every scene stands on the same patch of
 * grass, with feet at y = 112.
 */
@Component({
  selector: 'app-growing-scene',
  standalone: true,
  imports: [BoyFigureComponent, AdultFigureComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="0 0 200 130" class="w-full h-auto" role="img" [attr.aria-label]="label()" focusable="false">
      <path d="M0 104C60 96 140 96 200 102V130H0Z" fill="#DDEBDF" />

      @switch (kind()) {
        <!-- Kindness: a big brother hands the little one a mango -->
        @case ('kindness') {
          <rect x="24" y="58" width="8" height="52" rx="3" fill="#8A5A3B" />
          <g class="svg-part canopy-sway">
            <circle cx="28" cy="48" r="24" fill="#4F8A62" />
            <circle cx="14" cy="60" r="14" fill="#6AA37A" />
            <circle cx="44" cy="58" r="15" fill="#6AA37A" />
            <circle cx="28" cy="30" r="13" fill="#9FD0AD" />
            <ellipse cx="18" cy="62" rx="3.5" ry="4.5" fill="#FBC04B" />
            <ellipse cx="40" cy="52" rx="3.5" ry="4.5" fill="#FBC04B" />
          </g>
          <g transform="translate(98 50) scale(1.1)">
            <path class="float float-1" d="M0 7C-11-1-9-12 0-6 9-12 11-1 0 7Z" fill="#F4A77C" />
          </g>
          <g transform="translate(114 34) scale(0.7)">
            <path class="float float-3" d="M0 7C-11-1-9-12 0-6 9-12 11-1 0 7Z" fill="#F4A77C" opacity="0.7" />
          </g>
          <g appAdult transform="translate(160 112) scale(0.72)" [left]="[-45, -52]" />
          <g appBoy transform="translate(120 112) scale(0.85)" shirt="#7FB38C" [left]="[-29, -40]" />
          <g appBoy transform="translate(80 112) scale(0.65)" shirt="#F4A77C" [right]="[26, -52]" />
          <ellipse cx="96" cy="78" rx="6.5" ry="5.5" fill="#FBC04B" />
          <path d="M98 73q4-4 7-2-3 3-7 2Z" fill="#4F8A62" />
        }

        <!-- Emotional strength: after the rain, a rainbow -->
        @case ('feelings') {
          <path d="M30 104A70 70 0 0 1 170 104" stroke="#F4A77C" stroke-width="6" fill="none" />
          <path d="M37 104A63 63 0 0 1 163 104" stroke="#FBD46B" stroke-width="6" fill="none" />
          <path d="M44 104A56 56 0 0 1 156 104" stroke="#9FD0AD" stroke-width="6" fill="none" />
          <g class="cloud-drift">
            <path d="M14 44a8 8 0 0 1 12-7 12 12 0 0 1 22 3 8 8 0 0 1 4 12H14a5 5 0 0 1 0-8Z" fill="#B9C9C0" />
            <path d="M22 58l-2 6M32 58l-2 6M42 58l-2 6" stroke="#A9D4EA" stroke-width="2.5" stroke-linecap="round" />
          </g>
          <g class="svg-part sun-pulse">
            <circle cx="172" cy="34" r="16" fill="#FFF1C9" />
            <circle cx="172" cy="34" r="10" fill="#FBD46B" />
          </g>
          <g appBoy transform="translate(88 112) scale(0.8)" shirt="#A9D4EA" [right]="[16, -30]" />
          <g appAdult transform="translate(118 112) scale(0.75)" [left]="[-30, -47]" />
          <!-- A small speech bubble with a heart: he says how he feels -->
          <path d="M56 44h22a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-12l-6 6v-6h-4a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6Z" fill="#FFFFFF" />
          <path d="M67 60c-7-5-6-11 0-8 6-3 7 3 0 8Z" fill="#F4A77C" />
        }

        <!-- Discipline and punctuality: the clock, the checklist, off to school -->
        @case ('routine') {
          <circle cx="46" cy="50" r="26" fill="#FFFFFF" stroke="#2F5D46" stroke-width="3" />
          <path d="M46 28v4M46 68v4M24 50h4M64 50h4" stroke="#2F5D46" stroke-width="2" stroke-linecap="round" />
          <path d="M46 50V35M46 50l10 6" stroke="#23302A" stroke-width="3" stroke-linecap="round" />
          <circle cx="46" cy="50" r="2.5" fill="#F4A77C" />
          <path d="M46 76v18" stroke="#8A5A3B" stroke-width="3" />
          <rect x="40" y="94" width="12" height="12" rx="2" fill="#8A5A3B" />

          <rect x="140" y="30" width="46" height="62" rx="5" fill="#FFFFFF" stroke="#8A5A3B" stroke-width="2" />
          <rect x="154" y="26" width="18" height="7" rx="2" fill="#8A5A3B" />
          @for (row of [44, 58, 72]; track row) {
            <path [attr.d]="'M146 ' + row + 'l3 3 6-6'" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path [attr.d]="'M160 ' + (row + 1) + 'h20'" stroke="#CFC6B4" stroke-width="3" stroke-linecap="round" />
          }
          <rect x="146" y="80" width="8" height="7" rx="1.5" fill="none" stroke="#CFC6B4" stroke-width="2" />
          <path d="M160 84h20" stroke="#CFC6B4" stroke-width="3" stroke-linecap="round" />

          <rect x="89" y="66" width="12" height="22" rx="4" fill="#F4A77C" />
          <g appBoy transform="translate(104 112) scale(0.85)" shirt="#FBD46B" [right]="[20, -64]" />
        }

        <!-- Physical health: cycling and football -->
        @case ('health') {
          <g transform="translate(-58 -33) scale(0.72)">
            @for (hub of [130, 200]; track hub) {
              <g [attr.transform]="'translate(' + hub + ' 190)'">
                <circle r="22" fill="none" stroke="#2F5D46" stroke-width="4" />
                <g class="svg-part wheel-spin">
                  <path d="M-19 0H19M0-19V19M-13-13L13 13M-13 13L13-13" stroke="#9FB8A8" stroke-width="1.5" />
                </g>
                <circle r="3" fill="#2F5D46" />
              </g>
            }
            <path d="M156 148l9 22-11 14" stroke="#7E5238" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path d="M130 190H160L152 152ZM152 152L192 155 160 190M192 155L200 190M192 155L190 142" stroke="#F4A77C" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" fill="none" />
            <path d="M183 142H198" stroke="#23302A" stroke-width="4" stroke-linecap="round" />
            <path d="M143 151h17q0-5-5-6h-10q-3 1-2 6Z" fill="#23302A" />
            <circle cx="160" cy="190" r="5" fill="#2F5D46" />
            <path d="M152 145l12 5" stroke="#2F5D46" stroke-width="12" stroke-linecap="round" />
            <path d="M160 148l13 19-6 29" stroke="#9C6848" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path d="M154 138l9-20" stroke="#FBD46B" stroke-width="20" stroke-linecap="round" />
            <path d="M166 122l18 19" stroke="#FBD46B" stroke-width="5" stroke-linecap="round" />
            <circle cx="168" cy="102" r="10" fill="#A86E4A" />
            <path d="M158 101a10 10 0 0 1 20 0q-10-5-20 0Z" fill="#2B1F18" />
            <path d="M118 112h16M112 124h20M120 136h12" stroke="#F4A77C" stroke-width="2.5" stroke-linecap="round" />
          </g>
          <g class="walk-bob">
            <g appBoy transform="translate(146 112) scale(0.78)" shirt="#7FB38C" [left]="[-18, -62]" [right]="[18, -62]" />
          </g>
          <g transform="translate(174 106)">
            <circle r="7" fill="#FFFFFF" stroke="#23302A" stroke-width="1.5" />
            <path d="M0-3l3 2-1 3h-4l-1-3Z" fill="#23302A" />
          </g>
          <path d="M184 96l4-3M186 102h5" stroke="#F4A77C" stroke-width="2" stroke-linecap="round" />
        }

        <!-- Learning: a book, a bright idea, a globe -->
        @case ('learning') {
          <rect x="22" y="98" width="34" height="8" rx="2" fill="#F4A77C" />
          <rect x="26" y="90" width="30" height="8" rx="2" fill="#7FB38C" />
          <rect x="24" y="82" width="28" height="8" rx="2" fill="#A9D4EA" />
          <g class="svg-part sun-pulse">
            <circle cx="92" cy="22" r="9" fill="#FBD46B" />
          </g>
          <rect x="88" y="30" width="8" height="5" rx="1.5" fill="#8A5A3B" />
          <path d="M92 6v-3M78 12l-3-2M106 12l3-2M74 24h-3M110 24h3" stroke="#FBD46B" stroke-width="2" stroke-linecap="round" />
          <g appBoy transform="translate(92 112) scale(0.85)" shirt="#F4A77C" [left]="[-12, -38]" [right]="[12, -38]" />
          <path d="M76 72q8-4 16 0 8-4 16 0v16q-8-4-16 0-8-4-16 0Z" fill="#FFFFFF" stroke="#2F5D46" stroke-width="2" stroke-linejoin="round" />
          <path d="M92 72v16M80 77h8M80 81h8M96 77h8M96 81h8" stroke="#CFC6B4" stroke-width="1.5" />
          <circle cx="156" cy="72" r="16" fill="#A9D4EA" />
          <path d="M146 64q6-4 10 2t8 0 4 8M148 78q4 4 10 2" stroke="#6AA37A" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M138 72a18 18 0 0 0 36 0" stroke="#8A5A3B" stroke-width="2.5" fill="none" />
          <path d="M156 90v12M146 104h20" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
          <text x="182" y="46" font-size="18" font-weight="800" fill="#F4A77C" font-family="Nunito Sans, sans-serif">?</text>
        }

        <!-- Respect: greeting a grandmother with folded hands -->
        @case ('respect') {
          <g appBoy transform="translate(78 112) scale(0.82)" shirt="#A9D4EA" />
          <!-- Arms folded in to the chest, palms pressed together -->
          <path d="M71 77l5 6M85 77l-5 6" stroke="#7FB8D6" stroke-width="4.5" stroke-linecap="round" />
          <path d="M78 73c-3 4-4 9-3 15h6c1-6 0-11-3-15Z" fill="#A86E4A" stroke="#7E5238" stroke-width="1" />
          <g appAdult transform="translate(128 112) scale(0.74)" robe="#FBE6D6" hair="#D6D0C4" [bun]="true" [left]="[-26, -56]" [right]="[24, -50]" />
          <path d="M146 75l4 37" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
          <path d="M142 75q4-5 8 0" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" fill="none" />
          <path class="sun-pulse svg-part" d="M100 42l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#FBD46B" />
          <g transform="translate(40 108)">
            <path d="M0 0v-12M10 0v-8" stroke="#4F8A62" stroke-width="2" stroke-linecap="round" />
            <circle cy="-14" r="4" fill="#F4A77C" />
            <circle cx="10" cy="-10" r="3.5" fill="#FBD46B" />
          </g>
        }

        <!-- Responsibility: sweeping and watering -->
        @case ('responsibility') {
          <g appBoy transform="translate(66 112) scale(0.82)" shirt="#FBD46B" [left]="[-16, -34]" [right]="[-6, -24]" />
          <path d="M62 70l-24 36" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
          <path d="M40 102l-12 10h16Z" fill="#E7B54E" />
          <circle cx="24" cy="108" r="3" fill="#E6DCC4" />
          <circle cx="18" cy="104" r="2" fill="#E6DCC4" />
          <g appBoy transform="translate(132 112) scale(0.72)" shirt="#A9D4EA" [right]="[20, -36]" />
          <rect x="144" y="78" width="14" height="12" rx="3" fill="#7FB38C" />
          <path d="M158 82l12-6M150 78q4-7 8 0" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M172 80l-1 4M176 82l-1 5M174 88l-1 4" stroke="#A9D4EA" stroke-width="2" stroke-linecap="round" />
          <g transform="translate(176 110)">
            <g class="svg-part sprout-sway">
              <path d="M0-6v-12" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" />
              <path d="M0-14c-7-1-10-5-10-8 6 0 9 3 10 8ZM0-14c7-1 10-5 10-8-6 0-9 3-10 8Z" fill="#6AA37A" />
            </g>
            <path d="M-9-7h18l-3 10h-12Z" fill="#B4572A" />
          </g>
        }

        <!-- Money values: saving in a clay pot, keeping some to share -->
        @case ('money') {
          <circle cx="66" cy="90" r="20" fill="#B4572A" />
          <path d="M56 72h20l-2 4h-16Z" fill="#8A5A3B" />
          <path d="M62 74h8" stroke="#23302A" stroke-width="2.5" stroke-linecap="round" />
          <path d="M52 92q14 6 28 0" stroke="#E07A4A" stroke-width="2" fill="none" />
          <g transform="translate(68 62)">
            <g class="float float-2">
              <ellipse rx="5" ry="5" fill="#FBD46B" stroke="#E7B54E" stroke-width="1.5" />
            </g>
          </g>
          <g appBoy transform="translate(104 112) scale(0.85)" shirt="#7FB38C" [left]="[-36, -58]" />
          @for (coin of coins; track $index) {
            <ellipse [attr.cx]="coin[0]" [attr.cy]="coin[1]" rx="7" ry="2.8" fill="#FBD46B" stroke="#E7B54E" stroke-width="1" />
          }
          <rect x="172" y="84" width="20" height="26" rx="5" fill="#FFFFFF" stroke="#8A5A3B" stroke-width="2" />
          <path d="M182 102c-7-5-6-11 0-8 6-3 7 3 0 8Z" fill="#F4A77C" />
        }

        <!-- Honesty: giving back what was lost -->
        @case ('honesty') {
          <g transform="translate(100 32)">
            <path class="float float-1" d="M0-12l3 8h9l-7 5 3 9-8-5-8 5 3-9-7-5h9Z" fill="#FBD46B" />
          </g>
          <path class="sun-pulse svg-part" d="M78 42l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#FBD46B" />
          <path class="sun-pulse svg-part" d="M124 48l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#F4A77C" />
          <g appBoy transform="translate(78 112) scale(0.82)" shirt="#FBD46B" [right]="[26, -46]" />
          <g appAdult transform="translate(142 112) scale(0.75)" [left]="[-42, -50]" />
          <rect x="95" y="67" width="14" height="10" rx="3" fill="#F4A77C" />
          <path d="M98 67q4-5 8 0" stroke="#B4572A" stroke-width="1.5" fill="none" />
          <circle cx="102" cy="72" r="1.5" fill="#FBD46B" />
        }

        <!-- Communication: sorry, and it's OK -->
        @case ('talking') {
          <rect x="18" y="16" width="62" height="24" rx="12" fill="#FFFFFF" />
          <path d="M52 40l6 8 2-8Z" fill="#FFFFFF" />
          <text x="49" y="32" text-anchor="middle" font-size="11" font-weight="800" fill="#2F5D46" font-family="Nunito Sans, sans-serif">Sorry!</text>
          <rect x="116" y="24" width="68" height="24" rx="12" fill="#FFFFFF" />
          <path d="M140 48l-4 8 10-8Z" fill="#FFFFFF" />
          <text x="150" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#B4572A" font-family="Nunito Sans, sans-serif">It's OK!</text>
          <g transform="translate(100 56)">
            <path class="float float-2" d="M0 6C-9-1-8-10 0-5 8-10 9-1 0 6Z" fill="#F4A77C" />
          </g>
          <g appBoy transform="translate(76 112) scale(0.85)" shirt="#A9D4EA" [right]="[28, -36]" />
          <g appBoy transform="translate(124 112) scale(0.85)" shirt="#F4A77C" [left]="[-28, -36]" />
        }
      }
    </svg>
  `,
})
export class GrowingSceneComponent {
  readonly kind = input.required<GrowingScene>();
  readonly label = input.required<string>();

  /** Two stacks of saved coins, three high and five high. */
  readonly coins = [
    ...[0, 1, 2].map((i) => [140, 108 - i * 4]),
    ...[0, 1, 2, 3, 4].map((i) => [156, 108 - i * 4]),
  ];
}
