import { Component } from '@angular/core';
import { ToolFilter } from '../tool-filter/tool-filter';
import { IProjectCard, projects, featured_projects } from '../../data/project-card-data';
import { ProjectsViewCard } from '../projects-view-card/projects-view-card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects-view',
  imports: [
    ToolFilter,
    ProjectsViewCard
  ],
  templateUrl: './projects-view.html',
  styleUrl: './projects-view.css',
})
export class ProjectsView {

  constructor(private router: Router, private route: ActivatedRoute) {}

  protected readonly projects = projects;

  selectedToolID: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedToolID = params['tool'] ?? null;
    });
  }

  onToolSelected(toolID: string) {
    this.selectedToolID = toolID;

    window.history.replaceState(
      {},
      '',
      `${location.pathname}?tool=${toolID}`
    );
  }

  get filteredProjects(): IProjectCard[] {
    if (!this.selectedToolID) {
      return this.projects.filter(project => project.toolID === "ue");
    }

    return this.projects.filter(project => project.toolID === this.selectedToolID);
  }

  protected readonly featured_projects = featured_projects;
}
