import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { featured_projects, game_projects, web_projects } from '../../data/project-card-data';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  protected readonly featured_projects = featured_projects;
  protected readonly web_projects = web_projects;
  protected readonly game_projects = game_projects;

}
