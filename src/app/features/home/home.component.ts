import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { GetInvolvedComponent } from './sections/get-involved/get-involved.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ImpactComponent } from './sections/impact/impact.component';
import { ObjectivesComponent } from './sections/objectives/objectives.component';
import { ProgramsComponent } from './sections/programs/programs.component';
import { StoriesComponent } from './sections/stories/stories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ProgramsComponent,
    StoriesComponent,
    ObjectivesComponent,
    ImpactComponent,
    GetInvolvedComponent,
    ContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about />
    <app-programs />
    <app-stories />
    <app-objectives />
    <app-impact />
    <app-get-involved />
    <app-contact />
  `,
})
export class HomeComponent {}
