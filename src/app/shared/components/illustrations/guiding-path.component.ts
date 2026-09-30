import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaceComponent } from './figures.component';

/**
 * A grown-up walking three boys from home, along a winding path, towards a
 * tree in the sun, pointing the way. The boy up ahead flies a kite. Drawn in
 * the same flat style as the hero tree.
 */
@Component({
  selector: 'app-guiding-path',
  standalone: true,
  imports: [FaceComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="0 14 520 366" class="w-full h-auto" role="img" [attr.aria-label]="label()" focusable="false">
      <defs>
        <!-- A boy, feet at the origin. His shirt takes the colour of the <use>. -->
        <g id="gp-boy">
          <path d="M-5 0v-17M5 0v-17" stroke="#9C6848" stroke-width="5" stroke-linecap="round" />
          <rect x="-9" y="-27" width="18" height="12" rx="3" fill="#2F5D46" />
          <rect x="-11" y="-49" width="22" height="26" rx="8" fill="currentColor" />
          <circle cy="-59" r="10" fill="#A86E4A" />
          <path d="M-10 -60a10 10 0 0 1 20 0q-10-5-20 0Z" fill="#2B1F18" />
          <g appFace transform="translate(0 -59)" />
        </g>
        <g id="gp-cloud">
          <path d="M0 0a14 14 0 0 1 22-12 20 20 0 0 1 38 4 13 13 0 0 1 8 22H0a8 8 0 0 1 0-14Z" fill="#DDEBDF" />
        </g>
        <g id="gp-butterfly">
          <ellipse class="butterfly-wing" cx="-5" cy="0" rx="5" ry="7" fill="currentColor" />
          <ellipse class="butterfly-wing" cx="5" cy="0" rx="5" ry="7" fill="currentColor" />
          <path d="M0 -6v12" stroke="#23302A" stroke-width="2" stroke-linecap="round" />
        </g>
        <!-- The land is an oval island, like the ground under the hero tree. -->
        <clipPath id="gp-land">
          <ellipse cx="260" cy="292" rx="260" ry="88" />
        </clipPath>
      </defs>

      <!-- Sky: sun, clouds, birds -->
      <g class="svg-part sun-pulse">
        <circle cx="448" cy="72" r="46" fill="#FFF1C9" />
        <circle cx="448" cy="72" r="28" fill="#FBD46B" />
      </g>
      <g transform="translate(24 70)"><use class="cloud-drift" href="#gp-cloud" /></g>
      <g transform="translate(250 40) scale(0.8)"><use class="cloud-drift cloud-drift-late" href="#gp-cloud" /></g>
      <g transform="translate(340 118)">
        <path class="bird-wing" d="M0 8c5-8 11-9 16-2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
        <path class="bird-wing" d="M16 6c5-8 11-6 16 2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>
      <g transform="translate(384 146) scale(0.7)">
        <path class="bird-wing" d="M0 8c5-8 11-9 16-2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
        <path class="bird-wing" d="M16 6c5-8 11-6 16 2" stroke="#2F5D46" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>

      <!-- Kite string, held by the boy up ahead -->
      <path d="M176 128Q226 214 290 247" stroke="#52605A" stroke-width="1.3" fill="none" />

      <!-- The kite -->
      <g class="svg-part kite-fly">
        <path d="M176 92l20 32-20 34-20-34Z" fill="#F4A77C" />
        <path d="M176 92v66M158 124h36" stroke="#FBE6D6" stroke-width="2" />
        <path d="M176 158q-9 10 0 20t0 20" stroke="#8A5A3B" stroke-width="1.5" fill="none" />
        <path d="M170 172l6 4 6-4-6-4ZM170 192l6 4 6-4-6-4Z" fill="#FBD46B" />
      </g>

      <g clip-path="url(#gp-land)">
        <!-- Hills -->
        <path d="M0 250C120 200 250 210 330 225s140 -10 190 -20V380H0Z" fill="#DDEBDF" />
        <path d="M0 300c110-30 230-20 320-10s140-5 200-10V380H0Z" fill="#E6DCC4" />

        <!-- The path, and its stepping dashes moving forward -->
        <path
          d="M95 380C170 345 280 330 262 302 240 276 330 255 414 232L424 234C360 262 285 280 318 300 350 332 260 358 215 380Z"
          fill="#FFF1C9"
        />
        <path
          class="path-dash"
          d="M155 380C222 350 318 332 290 300 262 278 345 259 419 233"
          stroke="#F4A77C"
          stroke-width="3"
          stroke-dasharray="6 12"
          stroke-linecap="round"
          fill="none"
        />
      </g>

      <!-- Home: a little house with a tiled roof on the hill -->
      <rect x="50" y="226" width="44" height="26" rx="3" fill="#FBE6D6" />
      <path d="M42 229l30-22 30 22Z" fill="#B4572A" />
      <rect x="67" y="236" width="10" height="16" rx="2" fill="#8A5A3B" />
      <rect x="55" y="232" width="8" height="8" rx="1.5" fill="#FBD46B" />
      <rect x="82" y="232" width="8" height="8" rx="1.5" fill="#FBD46B" />

      <!-- The tree they are walking towards -->
      <rect x="415" y="192" width="10" height="42" rx="3" fill="#8A5A3B" />
      <circle cx="420" cy="178" r="26" fill="#4F8A62" />
      <circle cx="403" cy="190" r="16" fill="#6AA37A" />
      <circle cx="438" cy="188" r="17" fill="#6AA37A" />
      <circle cx="420" cy="161" r="15" fill="#9FD0AD" />
      <circle cx="409" cy="176" r="3.5" fill="#F4A77C" />
      <circle cx="431" cy="190" r="3.5" fill="#FBD46B" />
      <circle cx="424" cy="166" r="3.5" fill="#F4A77C" />

      <!-- Signpost pointing the way -->
      <rect x="356" y="238" width="6" height="46" rx="2" fill="#8A5A3B" />
      <path d="M340 236h34l10 8-10 8h-34Z" fill="#F4A77C" />

      <!-- Flowers and grass along the way -->
      <path d="M40 312v-12M60 304v-12M82 312v-12M470 296v-12M494 290v-12M452 304v-10" stroke="#4F8A62" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="40" cy="298" r="5" fill="#FBD46B" />
      <circle cx="60" cy="290" r="5" fill="#F4A77C" />
      <circle cx="82" cy="298" r="5" fill="#FBD46B" />
      <circle cx="470" cy="282" r="5" fill="#FBD46B" />
      <circle cx="494" cy="276" r="5" fill="#F4A77C" />
      <circle cx="452" cy="292" r="4" fill="#F4A77C" />
      <path
        d="M110 340l3-8 3 8 3-10 3 10M380 326l3-8 3 8 3-10 3 10M200 300l3-7 3 7 3-9 3 9"
        stroke="#4F8A62"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />

      <!-- Butterflies -->
      <g transform="translate(118 272)" color="#F4A77C"><use class="bf-drift" href="#gp-butterfly" /></g>
      <g transform="translate(470 238) scale(0.85)" color="#FBD46B"><use class="bf-drift bf-drift-late" href="#gp-butterfly" /></g>

      <!-- A boy up ahead, flying the kite -->
      <g transform="translate(305 300) scale(0.85)" color="#FBD46B">
        <g class="walk-bob walk-bob-3">
          <use href="#gp-boy" />
          <path d="M-9 -44l-9-18" stroke="#FBD46B" stroke-width="5" stroke-linecap="round" />
        </g>
      </g>

      <!-- The grown-up, pointing up the path -->
      <g class="walk-bob">
        <ellipse cx="238" cy="340" rx="7" ry="3.5" fill="#23302A" />
        <ellipse cx="254" cy="340" rx="7" ry="3.5" fill="#23302A" />
        <path
          d="M232 250q13-7 26 0l8 86q-21 6-42 0Z"
          fill="#FFFFFF"
          stroke="#2F5D46"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
        <circle cx="245" cy="234" r="13" fill="#B97A56" />
        <path d="M232 233a13 13 0 0 1 26 0q-6-6-13-5-7-1-13 5Z" fill="#3A2A22" />
        <g appFace transform="translate(245 234) scale(1.3)" />
        <!-- Arm down to the little one's hand -->
        <path d="M234 258l-20 28" stroke="#2F5D46" stroke-width="10" stroke-linecap="round" />
        <path d="M234 258l-20 28" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
        <circle cx="213" cy="288" r="4" fill="#B97A56" />
        <!-- Arm pointing the way -->
        <g class="point-arm">
          <path d="M256 256l26-18" stroke="#2F5D46" stroke-width="10" stroke-linecap="round" />
          <path d="M256 256l26-18" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
          <circle cx="284" cy="237" r="4.5" fill="#B97A56" />
        </g>
      </g>

      <!-- The boy holding his hand -->
      <g transform="translate(205 345)" color="#F4A77C">
        <g class="walk-bob walk-bob-2">
          <use href="#gp-boy" />
          <path d="M9 -44l-1 -12" stroke="#F4A77C" stroke-width="5" stroke-linecap="round" />
        </g>
      </g>

      <!-- A boy following behind -->
      <g transform="translate(150 368) scale(1.05)" color="#7FB38C">
        <g class="walk-bob walk-bob-3">
          <use href="#gp-boy" />
        </g>
      </g>
    </svg>
  `,
})
export class GuidingPathComponent {
  readonly label = input.required<string>();
}
