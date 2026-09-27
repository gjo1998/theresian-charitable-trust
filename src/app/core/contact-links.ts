import { TRUST } from './data/site-content';

/**
 * Every contact route ends at Fr. Sebastian. The links are built here, from
 * the trust's own constants, so no component assembles one by hand.
 */

export function emailLink(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${TRUST.email}${params.length ? `?${params.join('&')}` : ''}`;
}

export function whatsappLink(message: string = TRUST.whatsappMessage): string {
  return `https://wa.me/${TRUST.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function phoneLink(): string {
  return `tel:+${TRUST.phoneE164}`;
}

export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${TRUST.mapsQuery}`;
}
