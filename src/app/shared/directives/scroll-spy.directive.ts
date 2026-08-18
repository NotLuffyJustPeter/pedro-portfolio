import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject
} from '@angular/core';

import {
  ScrollSpyService
} from '../../core/services/scroll-spy.service';


@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective
  implements AfterViewInit, OnDestroy {

  private readonly element =
    inject(ElementRef<HTMLElement>);

  private readonly scrollSpy =
    inject(ScrollSpyService);


  @Input({
    required: true
  })
  appScrollSpy!: string;


  private observer?:
    IntersectionObserver;


  ngAfterViewInit(): void {

    this.observer =
      new IntersectionObserver(
        entries => {

          const entry =
            entries[0];


          if (
            entry.isIntersecting
          ) {

            this.scrollSpy
              .activeSection
              .set(
                this.appScrollSpy
              );

          }

        },
        {
          threshold: 0,

          rootMargin:
            '-35% 0px -55% 0px'
        }
      );


    this.observer.observe(
      this.element.nativeElement
    );

  }


  ngOnDestroy(): void {

    this.observer
      ?.disconnect();

  }

}
