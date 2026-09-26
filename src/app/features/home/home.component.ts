import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FamilyComponent } from './sections/family/family.component';
import { HeroComponent } from './sections/hero/hero.component';
import { MomentsComponent } from './sections/moments/moments.component';
import { NurtureComponent } from './sections/nurture/nurture.component';
import { StoryTeaserComponent } from './sections/story-teaser/story-teaser.component';
import { VisitComponent } from './sections/visit/visit.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WelcomeComponent,
    NurtureComponent,
    MomentsComponent,
    StoryTeaserComponent,
    FamilyComponent,
    VisitComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-welcome />
    <app-nurture />
    <app-moments />
    <app-story-teaser />
    <app-family />
    <app-visit />
  `,
})
export class HomeComponent {}
