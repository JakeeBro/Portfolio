import { Component } from '@angular/core';

export interface IProject {
  title: string;
  img: string;
  type: string;
  description: string;
  codeSnippet?: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
/*  title!: string;
  img!: string;
  tool!: string;
  description!: string;
  codeSnippet?: string;
  expanded?: boolean;*/
}
