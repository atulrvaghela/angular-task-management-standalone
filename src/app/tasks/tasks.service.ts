import { Injectable } from "@angular/core";
import { dummyTasks } from "../../assets/dummy-tasks";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks')
        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }        
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: any) {
        this.tasks.unshift(task);
        this.saveTasks();
    }

    completeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id != taskId);
        this.saveTasks();
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}