import {
  Component,
  signal
} from '@angular/core';

import {
  PROFILE
} from '../../data/profile';
import { ScrollSpyDirective } from '../../shared/directives/scroll-spy.directive';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollSpyDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  readonly profile =
    PROFILE;

  readonly copied =
    signal(false);


  async copyEmail(): Promise<void> {

    try {

      await navigator.clipboard.writeText(
        this.profile.email
      );

      this.copied.set(true);

      window.setTimeout(
        () => this.copied.set(false),
        1800
      );

    } catch {

      window.location.href =
        `mailto:${this.profile.email}`;

    }

  }

}
