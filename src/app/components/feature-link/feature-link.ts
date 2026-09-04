import { Component, Input } from '@angular/core';
import { IHubLink } from '../project/project-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feature-link',
  imports: [],
  templateUrl: './feature-link.html',
  styleUrl: './feature-link.css',
})
export class FeatureLink {
  @Input() featureLink!: IHubLink;

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToFeature() {
    this.router.navigate([this.featureLink.link], {
      relativeTo: this.route
    });
  }
}
