import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  private readonly route =
    inject(ActivatedRoute);

  readonly slug =
    this.route.snapshot.paramMap.get('slug');


  readonly project =
    PROJECTS.find(
      project =>
        project.slug === this.slug
    );

}
