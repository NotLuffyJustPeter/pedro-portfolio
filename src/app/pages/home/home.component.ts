import { Component } from '@angular/core';

import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { TechnologiesComponent } from '../../sections/technologies/technologies.component';
import { WhatIDoComponent } from '../../sections/what-i-do/what-i-do.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    TechnologiesComponent,
    WhatIDoComponent,
    ContactComponent,
    RevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
