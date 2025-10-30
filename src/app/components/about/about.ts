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
    { src: 'unreal-engine.svg', alt: 'Unreal Engine 5' },
    { src: 'unity.svg', alt: 'Unity' },
    { src: 'blender.svg', alt: 'Blender' }
  ]

  webdev = [
    { src: 'angular.svg', alt: 'Angular' },
    { src: 'html.svg', alt: 'HTML' },
    { src: 'css.svg', alt: 'CSS' },
    { src: 'javascript.svg', alt: 'JavaScript' }
  ]

  media = [
    { src: 'premiere.svg', alt: 'Premiere Pro' },
    { src: 'aftereffects.svg', alt: 'After Effects' }
  ]
}
