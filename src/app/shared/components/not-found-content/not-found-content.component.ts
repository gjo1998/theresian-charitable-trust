import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NOT_FOUND } from '../../../core/data/site-content';
import { SeoService } from '../../../core/services/seo.service';

/**
 * "We couldn't find that page": a signpost, a short message and the way back.
 * Used by the catch-all route and by chapter pages with an unknown slug.
 */
@Component({
  selector: 'app-not-found-content',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section class="bg-cream">
      <div class="container-page py-16 sm:py-24 text-center">
        <!-- A signpost pointing two ways, and a sprout growing anyway -->
        <svg viewBox="0 0 320 220" class="mx-auto w-full max-w-[320px] h-auto" aria-hidden="true" focusable="false">
          <g class="svg-part sun-pulse">
            <circle cx="262" cy="48" r="30" fill="#FFF1C9" />
            <circle cx="262" cy="48" r="18" fill="#FBD46B" />
          </g>
          <ellipse cx="160" cy="200" rx="140" ry="16" fill="#E6DCC4" />
          <rect x="152" y="64" width="12" height="138" rx="4" fill="#8A5A3B" />
          <path d="M164 76h74l16 14-16 14h-74Z" fill="#F4A77C" />
          <path d="M152 116H86l-16 14 16 14h66Z" fill="#DDEBDF" />
          <path d="M184 90h40M104 130h36" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          <g class="svg-part sprout-sway">
            <path d="M226 200v-24" stroke="#4F8A62" stroke-width="4" stroke-linecap="round" />
            <path d="M226 182c0-10 6-15 16-15 0 10-6 15-16 15Z" fill="#6AA37A" />
            <path d="M226 188c0-8-5-12-13-12 0 8 5 12 13 12Z" fill="#9FD0AD" />
          </g>
          <path d="M60 196l3-8 3 8 3-10 3 10M260 198l3-7 3 7 3-9 3 9" stroke="#4F8A62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>

        <h1 class="mt-8 section-title">{{ content.title }}</h1>
        <p class="mt-5 mx-auto max-w-xl text-[18px] sm:text-[20px] text-ink-muted leading-relaxed">{{ content.body }}</p>
        <div class="btn-row mt-9 sm:justify-center">
          <a routerLink="/" class="btn btn-sage min-h-[44px]">{{ content.homeLabel }}</a>
          <a routerLink="/stories" class="btn btn-outline min-h-[44px]">{{ content.storyLabel }}</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundContentComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly content = NOT_FOUND;

  ngOnInit(): void {
    // Tell search engines not to index this page.
    this.seo.update({ ...this.content.meta, path: '', noindex: true });
  }
}
