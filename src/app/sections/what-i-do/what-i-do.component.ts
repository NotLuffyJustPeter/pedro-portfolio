import {
  Component
} from '@angular/core';

import {
  RevealDirective
} from '../../shared/directives/reveal.directive';


interface ServiceItem {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}


@Component({
  selector: 'app-what-i-do',

  standalone: true,

  imports: [
    RevealDirective
  ],

  templateUrl:
    './what-i-do.component.html',

  styleUrl:
    './what-i-do.component.scss'
})
export class WhatIDoComponent {

  readonly services: ServiceItem[] = [

    {
      number: '01',

      title:
        'Full-Stack Development',

      description:
        'End-to-end web applications built around maintainable frontend architecture, backend services and structured business logic.',

      technologies: [
        'Angular',
        'TypeScript',
        'Node.js',
        'REST'
      ]
    },

    {
      number: '02',

      title:
        'Mobile Applications',

      description:
        'Mobile experiences focused on practical business workflows, shared data and interfaces designed for real-world use.',

      technologies: [
        'Flutter',
        'Dart',
        'REST API',
        'Mobile UX'
      ]
    },

    {
      number: '03',

      title:
        'Backend & Architecture',

      description:
        'APIs and server-side systems designed around clear responsibilities, persistent data and scalable application structure.',

      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'PostgreSQL'
      ]
    },

    {
      number: '04',

      title:
        'AI Integration',

      description:
        'Integration of generative AI into applications using structured context, application data and purpose-built workflows.',

      technologies: [
        'Gemini',
        'Prompt Design',
        'AI Workflows',
        'APIs'
      ]
    }

  ];

}
