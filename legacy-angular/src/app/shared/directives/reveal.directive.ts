import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';


@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective
  implements AfterViewInit, OnDestroy {

  private readonly element =
    inject(
      ElementRef<HTMLElement>
    );

  private readonly renderer =
    inject(Renderer2);


  @Input()
  revealDelay = 0;


  private observer?:
    IntersectionObserver;


  ngAfterViewInit(): void {

    const element =
      this.element.nativeElement;


    this.renderer.addClass(
      element,
      'reveal'
    );


    this.renderer.setStyle(
      element,
      '--reveal-delay',
      `${Math.max(
        0,
        this.revealDelay
      )}ms`
    );


    if (
      !(
        'IntersectionObserver'
        in window
      )
    ) {

      this.showElement();

      return;

    }


    this.observer =
      new IntersectionObserver(
        entries => {

          const entry =
            entries[0];


          if (
            entry.isIntersecting
          ) {

            this.showElement();

            this.observer
              ?.disconnect();

          }

        },
        {
          threshold: 0.12,

          rootMargin:
            '0px 0px -8% 0px'
        }
      );


    this.observer.observe(
      element
    );

  }


  private showElement(): void {

    this.renderer.addClass(
      this.element.nativeElement,
      'reveal--visible'
    );

  }


  ngOnDestroy(): void {

    this.observer
      ?.disconnect();

  }

}
