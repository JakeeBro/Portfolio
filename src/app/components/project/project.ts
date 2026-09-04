import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProjectPage, ProjectID, IProjectData} from './project-data'

/*interface IProjectData {
  title: string;
  desc: string;
  banner: string;
  tech: [];
  link?: string;
}*/

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {

  id: ProjectID | null = null;
  project: IProjectData | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    const raw = this.activatedRoute.snapshot.paramMap.get('id');

    if (raw && raw in ProjectPage) {
      this.id = raw as ProjectID;
      this.project = ProjectPage[this.id];
    } else {
      console.error('Unknown project ID: ', raw);
    }
  }
}
