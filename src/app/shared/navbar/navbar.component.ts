import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  PROFILE
} from '../../data/profile';


interface NavItem {
  id: string;
  label: string;
}


@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [],

  templateUrl:
    './navbar.component.html',

  styleUrl:
    './navbar.component.scss'
})
export class NavbarComponent
  implements AfterViewInit {

  private readonly router =
    inject(Router);


  readonly profile =
    PROFILE;


  readonly menuOpen =
    signal(false);


  readonly activeSection =
    signal('');


  readonly navItems: NavItem[] = [

    {
      id: 'about',
      label: 'About'
    },

    {
      id: 'projects',
      label: 'Projects'
    },

    {
      id: 'skills',
      label: 'Skills'
    },

    {
      id: 'contact',
      label: 'Contact'
    }

  ];


  ngAfterViewInit(): void {

    window.requestAnimationFrame(
      () => {
        this.updateActiveSection();
      }
    );

  }


  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.updateActiveSection();

  }


  toggleMenu(): void {

    this.menuOpen.update(
      value => !value
    );

  }


  closeMenu(): void {

    this.menuOpen.set(false);

  }


  async goHome(
    event: Event
  ): Promise<void> {

    event.preventDefault();

    this.closeMenu();


    const currentPath =
      this.router.url.split('#')[0];


    if (currentPath !== '/') {

      await this.router.navigate([
        '/'
      ]);

    }


    window.requestAnimationFrame(
      () => {

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        this.activeSection.set('');

      }
    );

  }


  async goToSection(
    event: Event,
    sectionId: string
  ): Promise<void> {

    event.preventDefault();

    this.closeMenu();


    const currentPath =
      this.router.url.split('#')[0];


    if (currentPath !== '/') {

      await this.router.navigate([
        '/'
      ]);

    }


    /*
     * Dos frames permiten que Angular termine
     * de renderizar Home si venimos de un Case Study.
     */

    window.requestAnimationFrame(
      () => {

        window.requestAnimationFrame(
          () => {

            const section =
              document.getElementById(
                sectionId
              );


            if (!section) {
              return;
            }


            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });


            this.activeSection.set(
              sectionId
            );

          }
        );

      }
    );

  }


  private updateActiveSection(): void {

    /*
     * Mientras estemos arriba en Hero,
     * ningún link estará activo.
     */

    if (window.scrollY < 250) {

      this.activeSection.set('');

      return;

    }


    /*
     * Si llegamos prácticamente al final,
     * Contact debe quedar activo.
     */

    const scrollBottom =
      window.innerHeight +
      window.scrollY;

    const documentHeight =
      document.documentElement
        .scrollHeight;


    if (
      scrollBottom >=
      documentHeight - 40
    ) {

      this.activeSection.set(
        'contact'
      );

      return;

    }


    /*
     * Línea imaginaria dentro del viewport.
     * La última sección que la haya cruzado
     * se considera activa.
     */

    const activationPoint =
      Math.min(
        window.innerHeight * 0.32,
        260
      );


    let currentSection = '';


    for (
      const item of this.navItems
    ) {

      const element =
        document.getElementById(
          item.id
        );


      if (!element) {
        continue;
      }


      const rect =
        element.getBoundingClientRect();


      if (
        rect.top <= activationPoint
      ) {

        currentSection =
          item.id;

      }

    }


    this.activeSection.set(
      currentSection
    );

  }

}
