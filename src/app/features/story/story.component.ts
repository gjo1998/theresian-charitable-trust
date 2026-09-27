import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { emailLink, whatsappLink } from '../../core/contact-links';
import { STORIES, STORY_PAGE } from '../../core/data/stories';
import { PhotoDirective } from '../../shared/directives/photo.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ChapterVisualComponent } from './chapter-visual/chapter-visual.component';
import { StoryBodyComponent } from './story-body/story-body.component';

/** A gently wavy branch, drawn once and stretched to the timeline's height. */
function branchPath(): string {
  let d = 'M20 0';
  for (let y = 0; y < 1000; y += 100) {
    const bend = (y / 100) % 2 === 0 ? 34 : 6;
    d += ` C${bend} ${y + 33} ${bend} ${y + 66} 20 ${y + 100}`;
  }
  return d;
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RouterLink, RevealDirective, PhotoDirective, ChapterVisualComponent, StoryBodyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Block, so the sticky chapter index can stay in view down the whole page.
  host: { class: 'block' },
  templateUrl: './story.component.html',
})
export class StoryComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly page = STORY_PAGE;
  readonly chapters = [...STORIES].sort((a, b) => a.order - b.order);
  readonly branch = branchPath();

  readonly emailUrl = emailLink(STORY_PAGE.closing.emailSubject, STORY_PAGE.closing.emailBody);
  readonly whatsappUrl = whatsappLink();

  /** The chapter currently on screen, marked in the index. */
  readonly active = signal<string | null>(null);

  private readonly chipRow = viewChild<ElementRef<HTMLUListElement>>('chipRow');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      // A thin band across the middle of the screen: whichever chapter
      // crosses it is the one being read.
      this.observer = new IntersectionObserver(
        (entries) => {
          const current = entries.find((entry) => entry.isIntersecting);
          if (current && current.target.id !== this.active()) {
            this.zone.run(() => this.active.set(current.target.id));
            this.bringChipIntoView(current.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      this.host.nativeElement
        .querySelectorAll('[data-chapter]')
        .forEach((chapter: Element) => this.observer!.observe(chapter));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /** On a narrow screen the index scrolls sideways; keep the active chip showing. */
  private bringChipIntoView(slug: string): void {
    const row = this.chipRow()?.nativeElement;
    const chip = row?.querySelector<HTMLElement>(`[data-chip="${slug}"]`);
    if (!row || !chip || row.scrollWidth <= row.clientWidth) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    row.scrollTo({ left: chip.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
  }
}
