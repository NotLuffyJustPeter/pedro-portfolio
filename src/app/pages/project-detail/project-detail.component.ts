import {
  ArcanaShowcaseComponent
} from '../../shared/project-showcases/arcana-showcase/arcana-showcase.component';

import {
  RomaShowcaseComponent
} from '../../shared/project-showcases/roma-showcase/roma-showcase.component';

import {
  KaveShowcaseComponent
} from '../../shared/project-showcases/kave-showcase/kave-showcase.component';

import {
  Component,
  OnDestroy,
  inject,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  Subscription
} from 'rxjs';

import {
  CASE_STUDIES
} from '../../data/case-studies';

import {
  CaseStudy
} from '../../core/models/case-study.model';


@Component({
  selector: 'app-project-detail',

  standalone: true,

  imports: [
    RouterLink,
    ArcanaShowcaseComponent,
    RomaShowcaseComponent,
    KaveShowcaseComponent,
  ],

  templateUrl: './project-detail.component.html',

  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent
  implements OnDestroy {

  private readonly route =
    inject(ActivatedRoute);


  readonly project =
    signal<CaseStudy | undefined>(undefined);


  private readonly routeSubscription:
    Subscription;


  constructor() {

    this.routeSubscription =
      this.route.paramMap.subscribe(params => {

        const slug =
          params.get('slug');


        const project =
          CASE_STUDIES.find(
            item =>
              item.slug === slug
          );


        this.project.set(project);

      });

  }


  ngOnDestroy(): void {

    this.routeSubscription.unsubscribe();

  }

}
