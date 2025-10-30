import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool',
  imports: [],
  templateUrl: './tool.html',
  styleUrl: './tool.css',
})
export class Tool {
  @Input() src!: string;
  @Input() alt!: string;
}
