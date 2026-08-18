import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  signal
} from '@angular/core';

import {
  CaseStudyImage
} from '../../core/models/case-study.model';


@Component({
  selector: 'app-project-gallery',

  standalone: true,

  imports: [],

  templateUrl:
    './project-gallery.component.html',

  styleUrl:
    './project-gallery.component.scss'
})
export class ProjectGalleryComponent
  implements OnChanges, OnDestroy {

  @Input({
    required: true
  })
  images: CaseStudyImage[] = [];


  readonly selectedIndex =
    signal(0);


  readonly lightboxOpen =
    signal(false);


  private previousBodyOverflow = '';


  get selectedImage():
    CaseStudyImage | undefined {

    return this.images[
      this.selectedIndex()
    ];

  }


  get formattedCurrentIndex():
    string {

    return String(
      this.selectedIndex() + 1
    ).padStart(
      2,
      '0'
    );

  }


  get formattedTotal():
    string {

    return String(
      this.images.length
    ).padStart(
      2,
      '0'
    );

  }


  ngOnChanges(
    changes: SimpleChanges
  ): void {

    if (
      changes['images']
    ) {

      this.selectedIndex.set(
        0
      );

      this.closeLightbox();

    }

  }


  selectImage(
    index: number,
    thumbnail?: HTMLElement
  ): void {

    if (
      index < 0 ||
      index >= this.images.length
    ) {
      return;
    }


    this.selectedIndex.set(
      index
    );


    thumbnail?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });

  }


  previousImage(): void {

    const total =
      this.images.length;


    if (
      total === 0
    ) {
      return;
    }


    this.selectedIndex.update(
      current =>
        (
          current - 1 + total
        ) % total
    );

  }


  nextImage(): void {

    const total =
      this.images.length;


    if (
      total === 0
    ) {
      return;
    }


    this.selectedIndex.update(
      current =>
        (
          current + 1
        ) % total
    );

  }


  openLightbox(
    index:
      number =
      this.selectedIndex()
  ): void {

    if (
      !this.images[index]
    ) {
      return;
    }


    this.selectedIndex.set(
      index
    );


    if (
      !this.lightboxOpen()
    ) {

      this.previousBodyOverflow =
        document.body.style.overflow;


      document.body.style.overflow =
        'hidden';

    }


    this.lightboxOpen.set(
      true
    );

  }


  closeLightbox(): void {

    if (
      !this.lightboxOpen()
    ) {
      return;
    }


    this.lightboxOpen.set(
      false
    );


    document.body.style.overflow =
      this.previousBodyOverflow;

  }


  @HostListener(
    'document:keydown',
    ['$event']
  )
  handleKeyboard(
    event: KeyboardEvent
  ): void {

    if (
      !this.lightboxOpen()
    ) {
      return;
    }


    switch (
      event.key
    ) {

      case 'Escape':

        this.closeLightbox();

        break;


      case 'ArrowLeft':

        event.preventDefault();

        this.previousImage();

        break;


      case 'ArrowRight':

        event.preventDefault();

        this.nextImage();

        break;

    }

  }


  ngOnDestroy(): void {

    document.body.style.overflow =
      this.previousBodyOverflow;

  }

}
