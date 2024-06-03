import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Types';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() addTask: EventEmitter<Task> = new EventEmitter()

  text: string
  day: string
  reminder: boolean = false

  constructor (
    private taskService: TaskService,
    public dialogRef: MatDialogRef<AddTaskComponent>
  ) {}

  onTaskSubmit() {
    if (!this.text) {
      alert('Please enter the task')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.taskService.createTask(newTask).subscribe(task => {
      this.addTask.emit(task)
      this.dialogRef.close(task)
    })

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}



// class
// variables => properties
// functions => methods