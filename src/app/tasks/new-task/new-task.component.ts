import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  title = '';
  summary = '';
  dueDate = '';

  @Output() cancelNewTask = new EventEmitter();
  @Output() newTask = new EventEmitter();

  onCancelNewTask() {
    this.cancelNewTask.emit();
  }

  onCreate() {
    this.newTask.emit({
      id: new Date().getTime().toString(),
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    })
  }
}
