import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaceComponent } from './figures.component';

/**
 * A grown-up watering three sprouts of different sizes while one boy holds
 * his hand and another helps with a little can of his own. Sits beside
 * "Help us water the garden."
 */
@Component({
  selector: 'app-watering',
  standalone: true,
  imports: [FaceComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="16 0 464 284" class="w-full h-auto" role="img" [attr.aria-label]="label()" focusable="false">
      <defs>
        <g id="wt-cloud">
          <path d="M0 0a14 14 0 0 1 22-12 20 20 0 0 1 38 4 13 13 0 0 1 8 22H0a8 8 0 0 1 0-14Z" fill="#DDEBDF" />
        </g>
        <g id="wt-butterfly">
          <ellipse class="butterfly-wing" cx="-5" cy="0" rx="5" ry="7" fill="currentColor" />
          <ellipse class="butterfly-wing" cx="5" cy="0" rx="5" ry="7" fill="currentColor" />
          <path d="M0 -6v12" stroke="#23302A" stroke-width="2" stroke-linecap="round" />
        </g>
      </defs>

      <!-- Sky -->
      <g class="svg-part sun-pulse">
        <circle cx="436" cy="52" r="38" fill="#FFF1C9" />
        <circle cx="436" cy="52" r="23" fill="#FBD46B" />
      </g>
      <g transform="translate(40 44)"><use class="cloud-drift" href="#wt-cloud" /></g>
      <g transform="translate(236 24) scale(0.75)"><use class="cloud-drift cloud-drift-late" href="#wt-cloud" /></g>
      <g transform="translate(330 70)">
        <path class="bird-wing" d="M0 8c5-8 11-9 16-2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
        <path class="bird-wing" d="M16 6c5-8 11-6 16 2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>
      <g transform="translate(366 94) scale(0.7)">
        <path class="bird-wing" d="M0 8c5-8 11-9 16-2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
        <path class="bird-wing" d="M16 6c5-8 11-6 16 2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>

      <!-- Ground and the garden bed -->
      <ellipse cx="248" cy="258" rx="226" ry="20" fill="#E6DCC4" />
      <ellipse cx="324" cy="254" rx="92" ry="9" fill="#8A5A3B" opacity="0.25" />

      <!-- Flowers and grass -->
      <path d="M40 256v-14M58 260v-12M466 256v-14" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="40" cy="240" r="5" fill="#F4A77C" />
      <circle cx="58" cy="246" r="4.5" fill="#FBD46B" />
      <circle cx="466" cy="240" r="5" fill="#F4A77C" />
      <path
        d="M190 262l3-8 3 8 3-10 3 10M250 266l3-7 3 7 3-9 3 9M440 266l3-8 3 8 3-10 3 10"
        stroke="#4F8A62"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />

      <!-- Three sprouts, small to tall -->
      <g class="svg-part sprout-sway">
        <path d="M280 252v-16" stroke="#4F8A62" stroke-width="3.5" stroke-linecap="round" />
        <path d="M280 240c0-8 5-12 13-12 0 8-5 12-13 12Z" fill="#6AA37A" />
        <path d="M280 244c0-6-4-10-11-10 0 7 4 10 11 10Z" fill="#9FD0AD" />
      </g>
      <g class="svg-part sprout-sway sprout-sway-2">
        <path d="M322 252v-34" stroke="#4F8A62" stroke-width="4" stroke-linecap="round" />
        <path d="M322 224c0-11 7-17 18-17 0 11-7 17-18 17Z" fill="#6AA37A" />
        <path d="M322 232c0-10-6-15-16-15 0 10 6 15 16 15Z" fill="#7FB38C" />
        <path d="M322 244c0-8 5-12 13-12 0 8-5 12-13 12Z" fill="#9FD0AD" />
      </g>
      <g class="svg-part sprout-sway sprout-sway-3">
        <path d="M368 252v-52" stroke="#4F8A62" stroke-width="4.5" stroke-linecap="round" />
        <path d="M368 210c0-12 8-19 20-19 0 12-8 19-20 19Z" fill="#6AA37A" />
        <path d="M368 218c0-11-7-17-18-17 0 12 7 17 18 17Z" fill="#7FB38C" />
        <path d="M368 234c0-10 7-15 17-15 0 10-7 15-17 15Z" fill="#9FD0AD" />
        <path d="M368 242c0-8-6-13-14-13 0 9 6 13 14 13Z" fill="#6AA37A" />
        <circle cx="368" cy="196" r="6" fill="#F4A77C" />
      </g>

      <!-- Butterflies over the garden -->
      <g transform="translate(300 176)" color="#F4A77C"><use class="bf-drift" href="#wt-butterfly" /></g>
      <g transform="translate(212 118) scale(0.85)" color="#FBD46B"><use class="bf-drift bf-drift-late" href="#wt-butterfly" /></g>

      <!-- Water falling from both cans -->
      <circle class="drip drip-1" cx="246" cy="160" r="3.2" fill="#A9D4EA" />
      <circle class="drip drip-2" cx="252" cy="170" r="3.2" fill="#A9D4EA" />
      <circle class="drip drip-3" cx="241" cy="172" r="3.2" fill="#A9D4EA" />
      <circle class="drip drip-4" cx="257" cy="158" r="3.2" fill="#A9D4EA" />
      <circle class="drip drip-2" cx="380" cy="212" r="2.6" fill="#A9D4EA" />
      <circle class="drip drip-4" cx="375" cy="220" r="2.6" fill="#A9D4EA" />

      <!-- The grown-up -->
      <ellipse cx="122" cy="254" rx="7" ry="3.5" fill="#23302A" />
      <ellipse cx="138" cy="254" rx="7" ry="3.5" fill="#23302A" />
      <path
        d="M116 150q14-8 28 0l9 100q-23 6-46 0Z"
        fill="#FFFFFF"
        stroke="#2F5D46"
        stroke-width="2.5"
        stroke-linejoin="round"
      />
      <circle cx="130" cy="132" r="14" fill="#B97A56" />
      <path d="M116 131a14 14 0 0 1 28 0q-7-6-14-5-7-1-14 5Z" fill="#3A2A22" />
      <g appFace transform="translate(130 132) scale(1.4)" />
      <!-- Arm down to the boy's hand -->
      <path d="M118 160l-18 26" stroke="#2F5D46" stroke-width="10" stroke-linecap="round" />
      <path d="M118 160l-18 26" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
      <circle cx="99" cy="188" r="4" fill="#B97A56" />

      <!-- Arm and watering can, tipping gently -->
      <g class="svg-part can-tip">
        <path d="M142 158l30 12" stroke="#2F5D46" stroke-width="10" stroke-linecap="round" />
        <path d="M142 158l30 12" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
        <path d="M176 160q14-18 28 0" stroke="#F4A77C" stroke-width="5" fill="none" stroke-linecap="round" />
        <rect x="170" y="158" width="40" height="30" rx="8" fill="#F4A77C" />
        <path d="M208 168l28-20" stroke="#F4A77C" stroke-width="6" stroke-linecap="round" />
        <ellipse cx="239" cy="146" rx="5" ry="7" transform="rotate(-35 239 146)" fill="#F4A77C" />
        <circle cx="174" cy="171" r="4.5" fill="#B97A56" />
      </g>

      <!-- The boy holding his hand -->
      <g transform="translate(84 256)">
        <g class="walk-bob walk-bob-2">
          <path d="M-5 0v-17M5 0v-17" stroke="#9C6848" stroke-width="5" stroke-linecap="round" />
          <rect x="-9" y="-27" width="18" height="12" rx="3" fill="#2F5D46" />
          <rect x="-11" y="-49" width="22" height="26" rx="8" fill="#FBD46B" />
          <path d="M9 -44l6 -22" stroke="#FBD46B" stroke-width="5" stroke-linecap="round" />
          <circle cy="-59" r="10" fill="#A86E4A" />
          <path d="M-10 -60a10 10 0 0 1 20 0q-10-5-20 0Z" fill="#2B1F18" />
          <g appFace mood="joy" transform="translate(0 -59)" />
        </g>
      </g>

      <!-- A second boy, helping with his own little can -->
      <g transform="translate(438 256)">
        <path d="M-5 0v-17M5 0v-17" stroke="#9C6848" stroke-width="5" stroke-linecap="round" />
        <rect x="-9" y="-27" width="18" height="12" rx="3" fill="#2F5D46" />
        <rect x="-11" y="-49" width="22" height="26" rx="8" fill="#7FB38C" />
        <circle cy="-59" r="10" fill="#A86E4A" />
        <path d="M-10 -60a10 10 0 0 1 20 0q-10-5-20 0Z" fill="#2B1F18" />
        <g appFace transform="translate(0 -59)" />
        <g class="svg-part can-tip-small">
          <path d="M-9 -42l-12 2" stroke="#7FB38C" stroke-width="5" stroke-linecap="round" />
          <rect x="-44" y="-50" width="22" height="16" rx="5" fill="#FBD46B" />
          <path d="M-40 -50q7-10 14 0" stroke="#FBD46B" stroke-width="3.5" fill="none" stroke-linecap="round" />
          <path d="M-43 -44l-13-8" stroke="#FBD46B" stroke-width="4" stroke-linecap="round" />
        </g>
      </g>
    </svg>
  `,
})
export class WateringComponent {
  readonly label = input.required<string>();
}
