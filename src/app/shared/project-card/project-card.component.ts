import {
  Component,
  input
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  Project
} from '../../core/models/project.model';


@Component({
  selector: 'app-project-card',

  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl:
    './project-card.component.html',

  styleUrl:
    './project-card.component.scss'
})
export class ProjectCardComponent {

  readonly project =
    input.required<Project>();


  moveSpotlight(
    event: PointerEvent
  ): void {

    const element =
      event.currentTarget as HTMLElement;


    const rect =
      element.getBoundingClientRect();


    const x =
      event.clientX -
      rect.left;


    const y =
      event.clientY -
      rect.top;


    element.style.setProperty(
      '--spotlight-x',
      `${x}px`
    );


    element.style.setProperty(
      '--spotlight-y',
      `${y}px`
    );

  }

}
