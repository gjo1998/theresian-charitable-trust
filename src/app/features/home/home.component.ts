import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FamilyComponent } from './sections/family/family.component';
import { GrowthComponent } from './sections/growth/growth.component';
import { HeroComponent } from './sections/hero/hero.component';
import { NurtureComponent } from './sections/nurture/nurture.component';
import { StoryTeaserComponent } from './sections/story-teaser/story-teaser.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, NurtureComponent, GrowthComponent, StoryTeaserComponent, FamilyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-nurture />
    <app-growth />
    <app-story-teaser />
    <app-family />
  `,
})
export class HomeComponent {}
