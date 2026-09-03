import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {IProjectCard} from '../../data/project-card-data';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() projectCardData!: IProjectCard;

  constructor(private router: Router) {}

  openProject() {
    console.log('Navigating to ' + this.projectCardData.id);
    this.router.navigate(['/projects', this.projectCardData.id]);
  }

  @HostBinding('class.featured')
  get isFeatured() {
    return this.projectCardData.featured;
  }
}
