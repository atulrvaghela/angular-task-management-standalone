import { Component, EventEmitter, input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
