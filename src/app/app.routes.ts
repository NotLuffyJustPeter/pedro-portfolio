import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import {
  NotFoundComponent
} from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project/:slug',
    component: ProjectDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
