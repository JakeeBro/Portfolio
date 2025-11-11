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
    { src: 'icons/unreal-engine.svg', alt: 'Unreal Engine 5' },
    { src: 'icons/unity.svg', alt: 'Unity' },
    { src: 'icons/blender.svg', alt: 'Blender' }
  ]

  webdev = [
    { src: 'icons/angular.svg', alt: 'Angular' },
    { src: 'icons/javascript.svg', alt: 'JavaScript' },
    { src: 'icons/html.svg', alt: 'HTML' },
    { src: 'icons/css.svg', alt: 'CSS' }
  ]

  media = [
    { src: 'icons/premiere.svg', alt: 'Premiere Pro' },
    { src: 'icons/aftereffects.svg', alt: 'After Effects' }
  ]
}
