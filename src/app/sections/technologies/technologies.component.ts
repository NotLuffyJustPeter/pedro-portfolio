import { Component } from '@angular/core';

import {
  TECHNOLOGY_GROUPS
} from '../../data/technologies';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  readonly technologyGroups =
    TECHNOLOGY_GROUPS;

}
