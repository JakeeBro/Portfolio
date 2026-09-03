import { Component } from '@angular/core';
import { ProjectCard, IProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  featured_projects: IProjectCard[] = [
    {
      id: 'posh-framework',
      title: 'PoshFramework',
      image: 'thumbnails/night-shift.png',
      desc: 'An Unreal Engine 5 Framework Plugin',
      icon: 'icons/unreal-engine.svg'
    }
  ]

  game_projects: IProjectCard[] = [
    {
      id: 'project-night-shift',
      title: 'Night Shift',
      image: 'thumbnails/night-shift.png',
      desc: 'Restock the store shelves at your overnight job',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-hunt',
      title: 'Hunt',
      image: 'thumbnails/terror.png',
      desc: 'Escape from a randomly generated forest',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-lasers',
      title: 'Lasers',
      image: 'thumbnails/lasers.png',
      desc: 'FPS puzzle game featuring a laser gun',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-tappy',
      title: 'Flappy',
      image: 'thumbnails/tap.png',
      desc: 'Flappy Bird-like project',
      icon: 'icons/unity.svg'
    }
  ]

  web_projects: IProjectCard[] = [
    {
      id: 'taniti',
      title: 'Taniti',
      image: 'thumbnails/taniti.jpg',
      desc: 'A fake travel website for the Pacific island of Taniti',
      icon: 'icons/angular.svg'
    },
    {
      id: 'higher-lower',
      title: 'Higher Lower',
      image: 'thumbnails/higher-lower.png',
      desc: 'Small Browser Game',
      icon: 'icons/angular.svg'
    },
    {
      id: 'world-map',
      title: 'World Map',
      image: 'thumbnails/world-map.png',
      desc: 'School Project',
      icon: 'icons/angular.svg'
    },
    {
      id: 'boxes',
      title: 'Boxes',
      image: 'thumbnails/boxes.png',
      desc: 'Small CRUD App',
      icon: 'icons/spring.svg'
    },
    {
      id: 'snippets',
      title: 'Code Snippets',
      image: 'thumbnails/matrix.png',
      desc: 'A Collection of various code snippets from my projects',
      icon: 'icons/git.svg'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      image: 'profile.jpg',
      desc: 'YOU 🫵 ARE HERE 📍',
      icon: 'icons/angular.svg'
    }
  ]
}
