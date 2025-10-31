import {Component, Input} from '@angular/core';

export interface IProjectCard {
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
  @Input() title!: string;
  @Input() image!: string;
  @Input() desc!: string;
  @Input() icon!: string;
}
