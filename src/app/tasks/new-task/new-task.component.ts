import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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
