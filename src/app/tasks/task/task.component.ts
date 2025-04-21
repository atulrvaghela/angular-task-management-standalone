import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input<any>();

  @Output() selectedTaskId = new EventEmitter<string>();

  onCompleteTask(id: string) {
    this.selectedTaskId.emit(id);
  }
}
