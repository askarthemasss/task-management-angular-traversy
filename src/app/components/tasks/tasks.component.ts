import { Component } from '@angular/core';
import {Task} from "../../Task"
// import {TASKS} from "../../mock-tasks"
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  // tasks:Task[] = TASKS
  tasks:Task[] = []

  constructor(private taskService : TaskService) {}

  ngOnInit() : void {
    // this.tasks = this.taskService.getTasks()
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

  deleteTask(task : Task){
    // deleting the task
    this.taskService.deleteTask(task).subscribe(() => {
      // updating the UI
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe()
  }

}
