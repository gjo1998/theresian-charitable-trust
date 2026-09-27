import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** A hand's position, relative to the figure's feet. */
export type Hand = readonly [number, number];

/**
 * The boy drawn across the site's scenes, feet at the origin. Arms are drawn
 * only when a hand is given, from the shoulder to that point. Use on a <g>
 * inside an <svg>, and place it with a transform.
 */
@Component({
  selector: 'g[appBoy]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg:path d="M-5 0v-17M5 0v-17" stroke="#9C6848" stroke-width="5" stroke-linecap="round" />
    <svg:rect x="-9" y="-27" width="18" height="12" rx="3" fill="#2F5D46" />
    <svg:rect x="-11" y="-49" width="22" height="26" rx="8" [attr.fill]="shirt()" />
    <svg:circle cy="-59" r="10" fill="#A86E4A" />
    <svg:path d="M-10 -60a10 10 0 0 1 20 0q-10-5-20 0Z" fill="#2B1F18" />
    @for (arm of arms(); track arm.from) {
      <svg:path [attr.d]="arm.d" [attr.stroke]="shirt()" stroke-width="5" stroke-linecap="round" />
      <svg:circle [attr.cx]="arm.hand[0]" [attr.cy]="arm.hand[1]" r="2.8" fill="#A86E4A" />
    }
  `,
})
export class BoyFigureComponent {
  readonly shirt = input('#7FB38C');
  readonly left = input<Hand>();
  readonly right = input<Hand>();

  readonly arms = computed(() =>
    armsFrom([-9, -44], this.left(), [9, -44], this.right()),
  );
}

/**
 * A grown-up in a long robe, feet at the origin, arms always drawn. Change
 * the robe and hair for someone else, such as a grandmother.
 */
@Component({
  selector: 'g[appAdult]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg:ellipse cx="-7" cy="0" rx="7" ry="3.5" fill="#23302A" />
    <svg:ellipse cx="9" cy="0" rx="7" ry="3.5" fill="#23302A" />
    <svg:path d="M-13 -90q13-7 26 0l8 86q-21 6-42 0Z" [attr.fill]="robe()" stroke="#2F5D46" stroke-width="2.5" stroke-linejoin="round" />
    @if (bun()) {
      <svg:circle cx="11" cy="-112" r="6" [attr.fill]="hair()" />
    }
    <svg:circle cy="-106" r="13" fill="#B97A56" />
    <svg:path d="M-13 -107a13 13 0 0 1 26 0q-6-6-13-5-7-1-13 5Z" [attr.fill]="hair()" />
    @for (arm of arms(); track arm.from) {
      <svg:path [attr.d]="arm.d" stroke="#2F5D46" stroke-width="10" stroke-linecap="round" />
      <svg:path [attr.d]="arm.d" [attr.stroke]="robe()" stroke-width="6" stroke-linecap="round" />
      <svg:circle [attr.cx]="arm.hand[0]" [attr.cy]="arm.hand[1]" r="4.5" fill="#B97A56" />
    }
  `,
})
export class AdultFigureComponent {
  readonly robe = input('#FFFFFF');
  readonly hair = input('#3A2A22');
  readonly bun = input(false);
  readonly left = input<Hand>([-31, -54]);
  readonly right = input<Hand>([19, -56]);

  readonly arms = computed(() =>
    armsFrom([-11, -82], this.left(), [11, -84], this.right()),
  );
}

function armsFrom(leftShoulder: Hand, left: Hand | undefined, rightShoulder: Hand, right: Hand | undefined) {
  return [
    { from: 'left', shoulder: leftShoulder, hand: left },
    { from: 'right', shoulder: rightShoulder, hand: right },
  ]
    .filter((arm): arm is { from: string; shoulder: Hand; hand: Hand } => !!arm.hand)
    .map((arm) => ({ ...arm, d: `M${arm.shoulder[0]} ${arm.shoulder[1]}L${arm.hand[0]} ${arm.hand[1]}` }));
}
