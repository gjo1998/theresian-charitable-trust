import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlumniComponent } from './sections/alumni/alumni.component';
import { FamilyComponent } from './sections/family/family.component';
import { GrowthComponent } from './sections/growth/growth.component';
import { HeroComponent } from './sections/hero/hero.component';
import { NurtureComponent } from './sections/nurture/nurture.component';
import { StoryTeaserComponent } from './sections/story-teaser/story-teaser.component';
import { TeamComponent } from './sections/team/team.component';
import { UpdatesComponent } from './sections/updates/updates.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    NurtureComponent,
    GrowthComponent,
    TeamComponent,
    StoryTeaserComponent,
    AlumniComponent,
    UpdatesComponent,
    FamilyComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-nurture />
    <app-growth />
    <app-team />
    <app-story-teaser />
    <app-alumni />
    <app-updates />
    <app-family />
  `,
})
export class HomeComponent {}
