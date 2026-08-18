import { Component } from '@angular/core';
import {
  PROFILE
} from '../../data/profile';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  readonly profile = PROFILE;

}
