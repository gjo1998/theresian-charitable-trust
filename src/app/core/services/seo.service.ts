import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DEFAULT_SHARE_IMAGE } from '../data/site-content';

export interface PageSeo {
  title: string;
  description: string;
  /** Route path without a leading slash, e.g. "stories/mothers-house". */
  path: string;
  /** A photo in public/images for link previews; the building by default. */
  image?: string;
  /** For pages search engines should skip, such as "not found". */
  noindex?: boolean;
}

/** Words ending in a full stop that don't end a sentence. */
const ABBREVIATIONS = new Set(['Fr', 'Mr', 'Mrs', 'Ms', 'Dr', 'St', 'Rs', 'No', 'Sr']);

/**
 * The first sentence of some text, for a page description. Skips the full
 * stops in "Fr.", "Rs." and the like.
 */
export function firstSentence(text: string): string {
  const ends = /[.!?](?=\s|$)/g;
  let match: RegExpExecArray | null;
  while ((match = ends.exec(text))) {
    const before = text.slice(0, match.index).split(/\s/).pop() ?? '';
    if (match[0] === '.' && ABBREVIATIONS.has(before)) continue;
    return text.slice(0, match.index + 1).trim();
  }
  return text.trim();
}

/**
 * Title, description, link-preview tags and canonical URL for each route.
 * URLs are made absolute from the document's base href, so they are right on
 * GitHub Pages whatever sub-path the site is served from.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(page: PageSeo): void {
    const url = this.absolute(page.path);
    const image = this.absolute(page.image ?? DEFAULT_SHARE_IMAGE);

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    if (page.noindex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex' });
      this.canonical()?.remove();
    } else {
      this.meta.removeTag('name="robots"');
      (this.canonical() ?? this.createCanonical()).setAttribute('href', url);
    }
  }

  private absolute(path: string): string {
    return new URL(path.replace(/^\//, ''), this.document.baseURI).href;
  }

  private canonical(): HTMLLinkElement | null {
    return this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  }

  private createCanonical(): HTMLLinkElement {
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
    return link;
  }
}
