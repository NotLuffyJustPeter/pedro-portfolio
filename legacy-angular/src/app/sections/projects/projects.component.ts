import { Component } from '@angular/core';

import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ScrollSpyDirective } from '../../shared/directives/scroll-spy.directive';

@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [
    ProjectCardComponent,
    RevealDirective,
    ScrollSpyDirective,
  ],

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  readonly projects =
    PROJECTS.filter(project => project.featured);

}
