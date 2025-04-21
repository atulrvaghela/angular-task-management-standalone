import { NgModule } from "@angular/core";
import { TasksComponent } from "../tasks/tasks.component";
import { TaskComponent } from "../tasks/task/task.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [TasksComponent]

})
export class TasksModule {

}