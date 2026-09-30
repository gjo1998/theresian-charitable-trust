import { Registrations } from './models/content.models';

/** Always shown in this order, whatever order the numbers were entered in. */
const ORDER: (keyof Registrations)[] = ['trustRegistration', 'section12A', 'section80G', 'jjActCci'];

/**
 * Only the registration numbers that are filled in, each with its label.
 * Blank or whitespace-only numbers are left out, so nothing half-filled shows.
 */
export function filledRegistrations(
  values: Registrations,
  labels: Record<keyof Registrations, string>,
): { label: string; value: string }[] {
  return ORDER.filter((key) => !!values[key]?.trim()).map((key) => ({
    label: labels[key],
    value: values[key]!.trim(),
  }));
}
