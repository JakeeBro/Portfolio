import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToolData, tools } from '../../data/tool-data';

@Component({
  selector: 'app-tool-filter',
  imports: [],
  templateUrl: './tool-filter.html',
  styleUrl: './tool-filter.css',
})
export class ToolFilter {
  @Input() toolID!: string;
  @Output() selected = new EventEmitter<string>();

  protected readonly tools = tools;

  get tool(): IToolData | undefined {
    return this.tools.find(tool => tool.id === this.toolID);
  }

  selectTool() {
    this.selected.emit(this.toolID);
  }
}
