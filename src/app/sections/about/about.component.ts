import { Component } from '@angular/core';
import { ScrollSpyDirective } from '../../shared/directives/scroll-spy.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollSpyDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
