/**
 * The real pixel size of every photograph in public/images.
 *
 * Adding a photo? Add its size here too. It gives each <img> its width and
 * height (so the page doesn't jump while loading) and stops a frame from
 * stretching a photo beyond its natural size.
 */
export const IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  'images/ammaveedu-boys.jpg': { width: 500, height: 237 },
  'images/ammaveedu-building.webp': { width: 1360, height: 1020 },
  'images/ammaveedu-house.jpg': { width: 500, height: 244 },
  'images/ammaveedu-today.jpg': { width: 953, height: 960 },
  'images/children-meal.jpg': { width: 500, height: 288 },
  'images/home-visit.jpg': { width: 500, height: 375 },
  'images/rice-delivery.jpg': { width: 500, height: 400 },
  // Gallery photos from the trust's Facebook page
  'images/gallery/after-school.jpg': { width: 1050, height: 1400 },
  'images/gallery/christmas-crib.jpg': { width: 787, height: 1400 },
  'images/gallery/football.jpg': { width: 788, height: 1400 },
  'images/gallery/hands-together.jpg': { width: 1050, height: 1400 },
  'images/gallery/off-to-school.jpg': { width: 1050, height: 1400 },
  'images/gallery/school-friends.jpg': { width: 1050, height: 1400 },
  'images/gallery/veranda-together.jpg': { width: 1400, height: 1050 },
  'images/gallery/volunteer-chat.jpg': { width: 1050, height: 1400 },
};

/**
 * The widest a frame of the given aspect (width / height) can be before
 * `object-fit: cover` would have to enlarge the photo. Undefined when the
 * photo's size isn't known.
 */
export function maxFrameWidth(src: string, aspect?: number): number | undefined {
  const size = IMAGE_SIZES[src];
  if (!size) return undefined;
  return aspect ? Math.floor(Math.min(size.width, size.height * aspect)) : size.width;
}
