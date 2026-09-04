import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectPage, ProjectID, IProjectData, FeaturePage, FeatureID } from './project-data'
import { FeatureLink } from '../feature-link/feature-link';

@Component({
  selector: 'app-project',
  imports: [
    FeatureLink,
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {

  id: ProjectID | null = null;
  project: IProjectData | null = null;
  featureID: FeatureID | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    const raw = this.activatedRoute.snapshot.paramMap.get('id');
    const feature = this.activatedRoute.snapshot.paramMap.get('feature');

    console.log('Project ID:', raw);
    console.log('Feature:', feature);

    if (feature && feature in FeaturePage) {
      console.log('Loading Feature: ', feature);
      this.featureID = feature as FeatureID;
      this.project = FeaturePage[this.featureID];
    } else if (raw && raw in ProjectPage) {
      this.id = raw as ProjectID;
      this.project = ProjectPage[this.id];
    } else {
      console.error('Unknown project ID: ', raw);
    }
  }
}
