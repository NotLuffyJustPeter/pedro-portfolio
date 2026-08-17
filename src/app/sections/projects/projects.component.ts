import { Component } from '@angular/core';

import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [
    ProjectCardComponent
  ],

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  readonly projects =
    PROJECTS.filter(project => project.featured);

}
