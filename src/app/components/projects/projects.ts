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
  game_projects: IProjectCard[] = [
    {
      id: 'project-night-shift',
      title: 'Project: Night Shift',
      image: 'thumbnails/night-shift.png',
      desc: 'Restock the store shelves at your overnight job',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-hunt',
      title: 'Project: Hunt',
      image: 'thumbnails/terror.png',
      desc: 'Escape from a randomly generated forest',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-lasers',
      title: 'Project: Lasers',
      image: 'thumbnails/lasers.png',
      desc: 'Solve puzzles using lasers to repair vital systems after a space pirate attack',
      icon: 'icons/unreal-engine.svg'
    },
    {
      id: 'project-tappy',
      title: 'Project: Tappy',
      image: 'thumbnails/tap.png',
      desc: 'Flappy Bird-like project',
      icon: 'icons/unity.svg'
    }
  ]

  web_projects: IProjectCard[] = [
    {
      id: 'world-map',
      title: 'World Map',
      image: 'thumbnails/world-map.png',
      desc: 'School Project',
      icon: 'icons/angular.svg'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      image: 'profile.jpg',
      desc: 'YOU 🫵 ARE HERE 📍',
      icon: 'icons/angular.svg'
    },
  ]
}
