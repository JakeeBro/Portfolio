import { Component } from '@angular/core';
import { Tool } from '../tool/tool';

@Component({
  selector: 'app-about',
  imports: [
    Tool
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  gamedev = [
    { src: 'icons/unreal-engine.svg', alt: 'Unreal Engine' },
    { src: 'icons/unity.svg', alt: 'Unity' },
    { src: 'icons/blender.svg', alt: 'Blender' },
    { src: 'icons/premiere.svg', alt: 'Premiere Pro' },
    { src: 'icons/aftereffects.svg', alt: 'After Effects' }
  ]

  webdev = [
    { src: 'icons/angular.svg', alt: 'Angular' },
    { src: 'icons/spring.svg', alt: 'Spring Boot' },
    { src: 'icons/javascript.svg', alt: 'JavaScript' },
    { src: 'icons/html.svg', alt: 'HTML5' },
    { src: 'icons/css.svg', alt: 'CSS3' }
  ]

  mini = [
    { src: 'icons/unreal-engine.svg', alt: 'Unreal Engine' },
    { src: 'icons/unity.svg', alt: 'Unity' },
    { src: 'icons/angular.svg', alt: 'Angular' }
  ]

  mini2 = [
    { src: 'icons/javascript.svg', alt: 'JavaScript' },
    { src: 'icons/html.svg', alt: 'HTML5' },
    { src: 'icons/css.svg', alt: 'CSS3' }
  ]

  /*media = [
    { src: 'icons/premiere.svg', alt: 'Premiere Pro' },
    { src: 'icons/aftereffects.svg', alt: 'After Effects' }
  ]*/
}
