import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GrowingScene } from '../../../core/models/content.models';
import { AdultFigureComponent, BoyFigureComponent } from './figures.component';

/**
 * One small scene for each of the nine things we nurture, drawn in the same
 * flat style as the guiding path. Every scene stands on the same patch of
 * grass, with feet at y = 112, and has its own little story in motion.
 *
 * Animation classes never sit on an element that also has a transform
 * attribute (CSS would replace it); a wrapping <g> carries one or the other.
 */
@Component({
  selector: 'app-growing-scene',
  standalone: true,
  imports: [BoyFigureComponent, AdultFigureComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="0 0 200 130" class="w-full h-auto" role="img" [attr.aria-label]="label()" focusable="false">
      <!-- Depth: a pale far hill, the grass, a slightly deeper foreground -->
      <path d="M0 100C28 86 60 86 90 95S150 83 200 93V106H0Z" fill="#FFFFFF" opacity="0.5" />
      <path d="M0 104C60 96 140 96 200 102V130H0Z" fill="#DDEBDF" />
      <path d="M0 116C70 110 130 110 200 115V130H0Z" fill="#CFE3D3" opacity="0.7" />

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
            <ellipse cx="26" cy="40" rx="3" ry="4" fill="#F4A77C" />
          </g>
          <path class="sc-leaf" d="M40 66q4-4 8 0-4 4-8 0Z" fill="#6AA37A" />
          <path class="sc-leaf sc-d3" d="M16 70q4-4 8 0-4 4-8 0Z" fill="#9FD0AD" style="animation-duration: 9s" />

          <!-- A basket of mangoes at the foot of the tree -->
          <g transform="translate(48 110)">
            <ellipse cx="-4" cy="-8" rx="3.6" ry="3" fill="#FBC04B" />
            <ellipse cx="3" cy="-9" rx="3.6" ry="3" fill="#F4A77C" />
            <path d="M-9 -7h18l-3 8h-12Z" fill="#B4572A" />
            <path d="M-8 -4h16" stroke="#8A5A3B" stroke-width="1" />
          </g>

          <g transform="translate(98 50) scale(1.1)">
            <path class="float float-1" d="M0 7C-11-1-9-12 0-6 9-12 11-1 0 7Z" fill="#F4A77C" />
          </g>
          <g transform="translate(114 34) scale(0.7)">
            <path class="float float-3" d="M0 7C-11-1-9-12 0-6 9-12 11-1 0 7Z" fill="#F4A77C" opacity="0.7" />
          </g>
          <g transform="translate(86 36) scale(0.5)">
            <path class="float float-2" d="M0 7C-11-1-9-12 0-6 9-12 11-1 0 7Z" fill="#F4A77C" opacity="0.5" />
          </g>

          <g appAdult transform="translate(160 112) scale(0.72)" [left]="[-45, -52]" />
          <g appBoy transform="translate(120 112) scale(0.85)" shirt="#7FB38C" [left]="[-29, -40]" />
          <g class="sc-hop">
            <g appBoy mood="joy" transform="translate(80 112) scale(0.65)" shirt="#F4A77C" [right]="[26, -52]" />
          </g>
          <ellipse cx="96" cy="78" rx="6.5" ry="5.5" fill="#FBC04B" />
          <ellipse cx="94" cy="80" rx="3.5" ry="2.8" fill="#F4A77C" opacity="0.6" />
          <path d="M98 73q4-4 7-2-3 3-7 2Z" fill="#4F8A62" />
          <path class="sc-twinkle" d="M106 66l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2Z" fill="#FBD46B" />
        }

        <!-- Emotional strength: after the rain, a rainbow -->
        @case ('feelings') {
          <path d="M30 104A70 70 0 0 1 170 104" stroke="#F4A77C" stroke-width="6" fill="none" />
          <path d="M37 104A63 63 0 0 1 163 104" stroke="#FBD46B" stroke-width="6" fill="none" />
          <path d="M44 104A56 56 0 0 1 156 104" stroke="#9FD0AD" stroke-width="6" fill="none" />
          <path d="M51 104A49 49 0 0 1 149 104" stroke="#A9D4EA" stroke-width="6" fill="none" opacity="0.8" />
          <g class="cloud-drift">
            <path d="M14 44a8 8 0 0 1 12-7 12 12 0 0 1 22 3 8 8 0 0 1 4 12H14a5 5 0 0 1 0-8Z" fill="#B9C9C0" />
            <path class="sc-rain" d="M22 58l-1.5 5" stroke="#7FB8D6" stroke-width="2.5" stroke-linecap="round" />
            <path class="sc-rain sc-d1" d="M32 58l-1.5 5" stroke="#7FB8D6" stroke-width="2.5" stroke-linecap="round" />
            <path class="sc-rain sc-d2" d="M42 58l-1.5 5" stroke="#7FB8D6" stroke-width="2.5" stroke-linecap="round" />
          </g>
          <!-- The sun, its rays slowly turning -->
          <g class="sc-spin" style="transform-box: view-box; transform-origin: 172px 34px">
            <path d="M172 10v5M172 53v5M148 34h5M191 34h5M155 17l3.5 3.5M185.5 47.5l3.5 3.5M155 51l3.5-3.5M185.5 20.5l3.5-3.5" stroke="#FBD46B" stroke-width="2.5" stroke-linecap="round" />
          </g>
          <g class="svg-part sun-pulse">
            <circle cx="172" cy="34" r="14" fill="#FFF1C9" />
            <circle cx="172" cy="34" r="9" fill="#FBD46B" />
          </g>
          <g appBoy mood="sad" transform="translate(88 112) scale(0.8)" shirt="#A9D4EA" [right]="[16, -30]" />
          <g appAdult mood="calm" transform="translate(118 112) scale(0.75)" [left]="[-30, -47]" />
          <!-- He says how he feels: a speech bubble with a heart -->
          <g class="sc-bob">
            <path d="M56 44h22a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-12l-6 6v-6h-4a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6Z" fill="#FFFFFF" />
            <path class="sc-beat" d="M67 60c-7-5-6-11 0-8 6-3 7 3 0 8Z" fill="#F4A77C" />
          </g>
        }

        <!-- Discipline and punctuality: the clock ticks, the list gets ticked -->
        @case ('routine') {
          <!-- A pendulum clock -->
          <g class="sc-pendulum" style="transform-box: view-box; transform-origin: 46px 74px">
            <path d="M46 74v20" stroke="#8A5A3B" stroke-width="2.5" />
            <circle cx="46" cy="97" r="5" fill="#FBD46B" stroke="#E7B54E" stroke-width="1.5" />
          </g>
          <circle cx="46" cy="50" r="26" fill="#FFFFFF" stroke="#2F5D46" stroke-width="3" />
          <circle cx="46" cy="50" r="21" fill="none" stroke="#DDEBDF" stroke-width="1.5" />
          <path d="M46 28v4M46 68v4M24 50h4M64 50h4" stroke="#2F5D46" stroke-width="2" stroke-linecap="round" />
          <path d="M57 31l-1.5 2.6M65 39l-2.6 1.5M35 31l1.5 2.6M27 39l2.6 1.5M57 69l-1.5-2.6M65 61l-2.6-1.5M35 69l1.5-2.6M27 61l2.6-1.5" stroke="#9FB8A8" stroke-width="1.2" stroke-linecap="round" />
          <path class="sc-hour" d="M46 50l8 5" stroke="#23302A" stroke-width="3" stroke-linecap="round" style="transform-box: view-box; transform-origin: 46px 50px" />
          <path class="sc-minute" d="M46 50V33" stroke="#23302A" stroke-width="2.2" stroke-linecap="round" style="transform-box: view-box; transform-origin: 46px 50px" />
          <circle cx="46" cy="50" r="2.5" fill="#F4A77C" />

          <!-- The day's checklist; the last box keeps getting its tick -->
          <rect x="140" y="30" width="46" height="62" rx="5" fill="#FFFFFF" stroke="#8A5A3B" stroke-width="2" />
          <rect x="154" y="26" width="18" height="7" rx="2" fill="#8A5A3B" />
          @for (row of [44, 58, 72]; track row) {
            <path [attr.d]="'M146 ' + row + 'l3 3 6-6'" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path [attr.d]="'M160 ' + (row + 1) + 'h20'" stroke="#CFC6B4" stroke-width="3" stroke-linecap="round" />
          }
          <rect x="146" y="80" width="8" height="7" rx="1.5" fill="none" stroke="#CFC6B4" stroke-width="2" />
          <path class="sc-tick" d="M146.5 83l2.5 2.5 5-5.5" pathLength="12" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M160 84h20" stroke="#CFC6B4" stroke-width="3" stroke-linecap="round" />

          <!-- Birds on their way -->
          <g transform="translate(96 22) scale(0.7)">
            <path class="bird-wing" d="M0 8c5-8 11-9 16-2" stroke="#2F5D46" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <path class="bird-wing" d="M16 6c5-8 11-6 16 2" stroke="#2F5D46" stroke-width="2.5" stroke-linecap="round" fill="none" />
          </g>

          <rect x="89" y="66" width="12" height="22" rx="4" fill="#F4A77C" />
          <path d="M92 70h6" stroke="#B4572A" stroke-width="1.5" stroke-linecap="round" />
          <g appBoy transform="translate(104 112) scale(0.85)" shirt="#FBD46B" wave="right" [right]="[20, -64]" />
        }

        <!-- Physical health: cycling, football and good food -->
        @case ('health') {
          <g class="sc-bob">
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
              <!-- His face, in profile: eye on the road, a big smile -->
              <circle cx="172.5" cy="103" r="1.3" fill="#23302A" />
              <circle cx="174" cy="107" r="1.6" fill="#F4A77C" opacity="0.55" />
              <path d="M170 107q3 2.4 6-.6" stroke="#23302A" stroke-width="1.1" stroke-linecap="round" fill="none" />
              <path class="sc-flicker" d="M118 112h16M112 124h20M120 136h12" stroke="#F4A77C" stroke-width="2.5" stroke-linecap="round" />
            </g>
          </g>

          <!-- Good food: an apple and a water bottle -->
          <circle cx="114" cy="107" r="4.5" fill="#E8604C" />
          <path d="M114 102.5q1-3 3-3.5" stroke="#4F8A62" stroke-width="1.5" stroke-linecap="round" fill="none" />
          <rect x="121" y="99" width="6" height="12" rx="2" fill="#A9D4EA" />
          <rect x="122" y="96.5" width="4" height="3" rx="1" fill="#2F5D46" />

          <g class="sc-hop">
            <g appBoy mood="joy" transform="translate(146 112) scale(0.78)" shirt="#7FB38C" [left]="[-18, -62]" [right]="[18, -62]" />
          </g>
          <ellipse class="sc-shadow" cx="176" cy="113" rx="6" ry="1.6" fill="#23302A" />
          <g transform="translate(176 105)">
            <g class="sc-bounce">
              <circle r="7" fill="#FFFFFF" stroke="#23302A" stroke-width="1.5" />
              <path d="M0-3l3 2-1 3h-4l-1-3Z" fill="#23302A" />
            </g>
          </g>
        }

        <!-- Learning: a turning page, a bright idea, the whole world to know -->
        @case ('learning') {
          <rect x="22" y="98" width="34" height="8" rx="2" fill="#F4A77C" />
          <rect x="26" y="90" width="30" height="8" rx="2" fill="#7FB38C" />
          <rect x="24" y="82" width="28" height="8" rx="2" fill="#A9D4EA" />
          <path d="M28 86h8M30 94h10M26 102h14" stroke="#FFFFFF" stroke-width="1.2" opacity="0.7" />
          <!-- Letters and numbers float up out of the books -->
          <text class="sc-rise" x="30" y="76" font-size="10" font-weight="800" fill="#2F5D46" font-family="Nunito Sans, sans-serif">A</text>
          <text class="sc-rise sc-d3" x="44" y="72" font-size="9" font-weight="800" fill="#B4572A" font-family="Nunito Sans, sans-serif">3</text>
          <text class="sc-rise" x="52" y="78" font-size="8" font-weight="800" fill="#4F8A62" font-family="Nunito Sans, sans-serif" style="animation-delay: -2.6s">b</text>

          <!-- The bright idea -->
          <g class="sc-twinkle" style="animation-duration: 2.4s">
            <path d="M92 3v4M77 10l3 2.5M107 10l-3 2.5M71 23h4M109 23h4" stroke="#FBD46B" stroke-width="2" stroke-linecap="round" />
          </g>
          <g class="svg-part sun-pulse">
            <circle cx="92" cy="22" r="12" fill="#FFF1C9" />
            <circle cx="92" cy="22" r="8.5" fill="#FBD46B" />
          </g>
          <rect x="88" y="30" width="8" height="5" rx="1.5" fill="#8A5A3B" />

          <g appBoy mood="wonder" transform="translate(92 112) scale(0.85)" shirt="#F4A77C" [left]="[-12, -38]" [right]="[12, -38]" />
          <path d="M76 72q8-4 16 0 8-4 16 0v16q-8-4-16 0-8-4-16 0Z" fill="#FFFFFF" stroke="#2F5D46" stroke-width="2" stroke-linejoin="round" />
          <path d="M80 77h8M80 81h8M96 77h8M96 81h8" stroke="#CFC6B4" stroke-width="1.5" />
          <!-- The page that turns, over and back -->
          <path class="sc-page" d="M92 72q8-4 16 0v16q-8-4-16 0Z" fill="#FBF7EE" stroke="#2F5D46" stroke-width="1.2" stroke-linejoin="round" style="transform-box: view-box; transform-origin: 92px 80px" />
          <path d="M92 72v16" stroke="#2F5D46" stroke-width="1.5" />

          <g class="sc-wobble">
            <circle cx="156" cy="72" r="16" fill="#A9D4EA" />
            <path d="M146 64q6-4 10 2t8 0 4 8M148 78q4 4 10 2" stroke="#6AA37A" stroke-width="4" stroke-linecap="round" fill="none" />
          </g>
          <path d="M138 72a18 18 0 0 0 36 0" stroke="#8A5A3B" stroke-width="2.5" fill="none" />
          <path d="M156 90v12M146 104h20" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
          <g class="sc-bob">
            <text x="182" y="46" font-size="18" font-weight="800" fill="#F4A77C" font-family="Nunito Sans, sans-serif">?</text>
          </g>
        }

        <!-- Respect: a namaste, and a grandmother's blessing -->
        @case ('respect') {
          <g transform="translate(34 110)">
            <g class="svg-part sprout-sway">
              <path d="M0 0v-12" stroke="#4F8A62" stroke-width="2" stroke-linecap="round" />
              <circle cy="-14" r="4" fill="#F4A77C" />
              <circle cy="-14" r="1.6" fill="#FBD46B" />
            </g>
          </g>
          <g transform="translate(46 110)">
            <g class="svg-part sprout-sway sprout-sway-2">
              <path d="M0 0v-8" stroke="#4F8A62" stroke-width="2" stroke-linecap="round" />
              <circle cy="-10" r="3.5" fill="#FBD46B" />
              <circle cy="-10" r="1.4" fill="#F4A77C" />
            </g>
          </g>
          <g appBoy mood="calm" transform="translate(78 112) scale(0.82)" shirt="#A9D4EA" />
          <!-- Arms folded in to the chest, palms pressed together -->
          <path d="M71 77l5 6M85 77l-5 6" stroke="#7FB8D6" stroke-width="4.5" stroke-linecap="round" />
          <path d="M78 73c-3 4-4 9-3 15h6c1-6 0-11-3-15Z" fill="#A86E4A" stroke="#7E5238" stroke-width="1" />
          <!-- She lays a hand over his head in blessing -->
          <g appAdult transform="translate(128 112) scale(0.74)" robe="#FBE6D6" hair="#D6D0C4" [bun]="true" [left]="[-64, -80]" [right]="[24, -50]" />
          <path d="M146 75l4 37" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
          <path d="M142 75q4-5 8 0" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" fill="none" />
          <path class="sc-twinkle" d="M100 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#FBD46B" />
          <path class="sc-twinkle sc-d1" d="M64 40l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4Z" fill="#F4A77C" />
          <path class="sc-twinkle sc-d3" d="M160 44l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2Z" fill="#FBD46B" />
          <!-- A butterfly passing by -->
          <g transform="translate(176 70) scale(0.8)" color="#F4A77C">
            <g class="bf-drift">
              <ellipse class="butterfly-wing" cx="-5" cy="0" rx="5" ry="7" fill="currentColor" />
              <ellipse class="butterfly-wing" cx="5" cy="0" rx="5" ry="7" fill="currentColor" />
              <path d="M0 -6v12" stroke="#23302A" stroke-width="2" stroke-linecap="round" />
            </g>
          </g>
        }

        <!-- Responsibility: sweeping and watering -->
        @case ('responsibility') {
          <g appBoy transform="translate(66 112) scale(0.82)" shirt="#FBD46B" [left]="[-16, -34]" [right]="[-6, -24]" />
          <g class="sc-sweep" style="transform-box: view-box; transform-origin: 62px 72px">
            <path d="M62 70l-24 36" stroke="#8A5A3B" stroke-width="3" stroke-linecap="round" />
            <path d="M40 102l-12 10h16Z" fill="#E7B54E" />
            <path d="M31 110l4-5M35 111l4-6M39 111l3-5" stroke="#C98F2E" stroke-width="1" stroke-linecap="round" />
          </g>
          <circle class="sc-puff" cx="22" cy="108" r="3" fill="#E6DCC4" />
          <circle class="sc-puff sc-d2" cx="16" cy="104" r="2.2" fill="#E6DCC4" />
          <circle class="sc-puff sc-d3" cx="26" cy="102" r="1.8" fill="#E6DCC4" />

          <g appBoy transform="translate(132 112) scale(0.72)" shirt="#A9D4EA" [right]="[20, -36]" />
          <rect x="144" y="78" width="14" height="12" rx="3" fill="#7FB38C" />
          <path d="M158 82l12-6M150 78q4-7 8 0" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path class="sc-drop" d="M172 80l-1 3" stroke="#7FB8D6" stroke-width="2" stroke-linecap="round" />
          <path class="sc-drop sc-d1" d="M175.5 81l-1 3" stroke="#7FB8D6" stroke-width="2" stroke-linecap="round" />
          <path class="sc-drop sc-d2" d="M173.5 84l-1 3" stroke="#7FB8D6" stroke-width="2" stroke-linecap="round" />
          <g transform="translate(176 110)">
            <g class="svg-part sprout-sway">
              <path d="M0-6v-14" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" />
              <path d="M0-14c-7-1-10-5-10-8 6 0 9 3 10 8ZM0-14c7-1 10-5 10-8-6 0-9 3-10 8Z" fill="#6AA37A" />
              <circle cy="-22" r="2.6" fill="#F4A77C" />
            </g>
            <path d="M-9-7h18l-3 10h-12Z" fill="#B4572A" />
          </g>
        }

        <!-- Honesty: giving back what was lost, and a grateful thank-you -->
        @case ('honesty') {
          <g transform="translate(100 32)">
            <g class="float float-1">
              <path class="sc-twinkle" d="M0-12l3 8h9l-7 5 3 9-8-5-8 5 3-9-7-5h9Z" fill="#FBD46B" style="animation-duration: 2.6s" />
            </g>
          </g>
          <path class="sc-twinkle sc-d1" d="M78 42l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#FBD46B" />
          <path class="sc-twinkle sc-d3" d="M124 48l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#F4A77C" />
          <g appBoy transform="translate(78 112) scale(0.82)" shirt="#FBD46B" [right]="[26, -46]" />
          <g appAdult mood="joy" transform="translate(142 112) scale(0.75)" [left]="[-42, -50]" />
          <rect x="95" y="67" width="14" height="10" rx="3" fill="#F4A77C" />
          <path d="M98 67q4-5 8 0" stroke="#B4572A" stroke-width="1.5" fill="none" />
          <circle class="sc-twinkle" cx="102" cy="72" r="1.6" fill="#FBD46B" />
          <!-- "Thanks!", beside his head: clear of his arm and the frame's curved corner -->
          <g class="sc-pop-b">
            <path d="M156 38l-5 1 6 4Z" fill="#FFFFFF" />
            <rect x="154" y="33" width="31" height="15" rx="7.5" fill="#FFFFFF" />
            <text x="169.5" y="43.3" text-anchor="middle" font-size="7.2" font-weight="800" fill="#2F5D46" font-family="Nunito Sans, sans-serif">Thanks!</text>
          </g>
        }

        <!-- Communication: sorry, and it's OK -->
        @case ('talking') {
          <g class="sc-pop-a">
            <rect x="18" y="16" width="62" height="24" rx="12" fill="#FFFFFF" />
            <path d="M52 40l6 8 2-8Z" fill="#FFFFFF" />
            <text x="49" y="32" text-anchor="middle" font-size="11" font-weight="800" fill="#2F5D46" font-family="Nunito Sans, sans-serif">Sorry!</text>
          </g>
          <g class="sc-pop-b">
            <rect x="116" y="24" width="68" height="24" rx="12" fill="#FFFFFF" />
            <path d="M140 48l-4 8 10-8Z" fill="#FFFFFF" />
            <text x="150" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#B4572A" font-family="Nunito Sans, sans-serif">It's OK!</text>
          </g>
          <g transform="translate(100 58)">
            <path class="sc-beat" d="M0 6C-9-1-8-10 0-5 8-10 9-1 0 6Z" fill="#F4A77C" />
          </g>
          <g appBoy mood="sad" transform="translate(76 112) scale(0.85)" shirt="#A9D4EA" [right]="[28, -36]" />
          <g appBoy transform="translate(124 112) scale(0.85)" shirt="#F4A77C" [left]="[-28, -36]" />
          <!-- The handshake -->
          <path class="sc-twinkle" d="M95 74l-2-3M105 74l2-3M100 72v-4" stroke="#F4A77C" stroke-width="1.8" stroke-linecap="round" />
        }
      }

      <!-- Grass tufts in the foreground -->
      <path d="M6 124l2-6 2 6 2-8 2 8M186 122l2-6 2 6 2-8 2 8M98 127l2-5 2 5 2-6 2 6" stroke="#6AA37A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
  `,
})
export class GrowingSceneComponent {
  readonly kind = input.required<GrowingScene>();
  readonly label = input.required<string>();
}
