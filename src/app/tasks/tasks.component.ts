import { Component, input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) { }

  name = input<string>();
  id = input<string>();
  addingTask = false;

  // tasks = dummyTasks;
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id()!);
  }

  onCompleteTask(id: string) {
    this.tasksService.completeTask(id);
  }

  onStartNewTask() {
    this.addingTask = true;
  }

  onCancelNewTask() {
    this.addingTask = false;
  }

  onCreateTask(task: any) {
    task['userId'] = this.id(); 
    this.tasksService.addTask(task);
    this.addingTask = false;
  }
}
