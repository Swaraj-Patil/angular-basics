import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { tasks } from '../../mock-tasks'
import { Task } from '../../Types';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges {

  @Input() newTask: Task

  tasks: Task[] = []

  constructor (private taskService: TaskService) {}

  // Lifecycle method -> Triggers when the component is rendered
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  // Lifecycle method -> Triggers when a class property changes its value
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('inside chnage function', changes['newTask'].currentValue)
    if (changes['newTask'] && changes['newTask'].currentValue) {
      this.tasks.push(changes['newTask'].currentValue)
    }
  }

  handleTaskDelete (taskToBeDeleted: Task) {
    this.taskService.deleteTask(taskToBeDeleted).subscribe(() => {
      // this.taskService.getTasks().subscribe(tasks => {
      //   this.tasks = tasks
      // })

      this.tasks = this.tasks.filter(task => taskToBeDeleted.id != task.id)
    })
  }

  handleReminderToggle(taskToBeToggled: Task) {
    taskToBeToggled.reminder = !taskToBeToggled.reminder

    this.taskService.toggleReminderOfTask(taskToBeToggled).subscribe()
  }
  
}

// status: 200 -> success
// status 201 -> successfully created (POST)
// status 400, 401, 402
