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

/** A Google Maps search for the home, built from the address itself. */
export function mapsLink(): string {
  const { line1, line3, district, state, country } = TRUST.address;
  const query = [line1, line3, district, state, country].join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
