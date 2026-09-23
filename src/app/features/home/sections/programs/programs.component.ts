import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROGRAMS } from '../../../../core/data/site-content';
import { Program } from '../../../../core/models/content.models';
import { UiService } from '../../../../core/services/ui.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './programs.component.html',
})
export class ProgramsComponent {
  private readonly ui = inject(UiService);

  readonly programs = PROGRAMS;

  openProgram(program: Program): void {
    this.ui.openProgram(program);
  }

  onImageError(event: Event, program: Program): void {
    (event.target as HTMLImageElement).src = program.fallbackImage;
  }
}
