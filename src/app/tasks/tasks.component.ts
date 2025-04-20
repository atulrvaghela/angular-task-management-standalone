import { Component, computed, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../assets/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
