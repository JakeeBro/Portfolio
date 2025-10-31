import { Component } from '@angular/core';
import { IProject } from '../project/project';
import { ProjectCard, IProjectCard } from '../project-card/project-card';
import {Tool} from '../tool/tool';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
    Tool
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  game_projects: IProjectCard[] = [
    {
      title: 'Project: Hunt',
      image: 'terror.png',
      desc: 'Escape from a randomly generated forest',
      icon: 'unreal-engine.svg'
    },
    {
      title: 'Project: Lasers',
      image: 'terror.png',
      desc: 'Solve puzzles using lasers to repair vital systems after a space pirate attack',
      icon: 'unreal-engine.svg'
    },
    {
      title: 'Project: Night Shift',
      image: 'terror.png',
      desc: 'Restock the store shelves at your overnight job',
      icon: 'unreal-engine.svg'
    },
    {
      title: 'Project: Flappy',
      image: 'terror.png',
      desc: 'Flappy Bird Remake project',
      icon: 'unity.svg'
    },
    {
      title: 'Hunting Rifle',
      image: 'terror.png',
      desc: 'Model for Project: Hunt',
      icon: 'blender.svg'
    }
  ]

  web_projects: IProjectCard[] = [
    {
      title: 'World Map',
      image: 'terror.png',
      desc: 'School Project',
      icon: 'angular.svg'
    },
    {
      title: 'Portfolio',
      image: 'terror.png',
      desc: 'A Display of all my (worthwhile) Projects',
      icon: 'angular.svg'
    },
  ]

  toggleExpand(project: IProject) {
    project.expanded = !project.expanded;
  }
}
