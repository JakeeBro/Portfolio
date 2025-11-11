import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface IProjectCard {
  id: string;
  title: string;
  image: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() id!: string;
  @Input() title!: string;
  @Input() image!: string;
  @Input() desc!: string;
  @Input() icon!: string;

  constructor(private router: Router) {}

  openProject() {
    console.log('Navigating to ' + this.id);
    this.router.navigate(['/projects', this.id]);
  }
}
