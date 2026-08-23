import { Component } from '@angular/core';

import {
  TECHNOLOGY_GROUPS
} from '../../data/technologies';
import { ScrollSpyDirective } from '../../shared/directives/scroll-spy.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ScrollSpyDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  readonly technologyGroups =
    TECHNOLOGY_GROUPS;

}
