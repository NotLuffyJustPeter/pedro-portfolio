import {
  Injectable,
  signal
} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {

  readonly activeSection =
    signal<string>('');

}
