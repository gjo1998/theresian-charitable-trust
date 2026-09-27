import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { emailLink, whatsappLink } from '../../core/contact-links';
import { STORIES, STORY_PAGE } from '../../core/data/stories';
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
  imports: [RouterLink, RevealDirective, ChapterVisualComponent, StoryBodyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './story.component.html',
})
export class StoryComponent {
  readonly page = STORY_PAGE;
  readonly chapters = [...STORIES].sort((a, b) => a.order - b.order);
  readonly branch = branchPath();

  readonly emailUrl = emailLink(STORY_PAGE.closing.emailSubject, STORY_PAGE.closing.emailBody);
  readonly whatsappUrl = whatsappLink();
}
