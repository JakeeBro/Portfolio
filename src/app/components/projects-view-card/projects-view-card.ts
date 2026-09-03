import {Component, Input} from '@angular/core';
import {IProjectCard} from '../../data/project-card-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-view-card',
  imports: [],
  templateUrl: './projects-view-card.html',
  styleUrl: './projects-view-card.css',
})
export class ProjectsViewCard {

  @Input() projectCardData!: IProjectCard;

  constructor(private router: Router) {}

  openProject() {
    console.log('Navigating to ' + this.projectCardData.id);
    this.router.navigate(['/projects', this.projectCardData.id]);
  }
}
