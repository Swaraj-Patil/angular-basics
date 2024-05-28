import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter()

  deleteIcon: IconDefinition = faTrash

  onDelete(taskToBeDeleted: Task) {
    console.log('We need to write a code to delete the task:', taskToBeDeleted)
    this.deleteTask.emit(taskToBeDeleted)
  }

  onToggleReminder(taskToBeToggled: Task) {
    this.toggleReminder.emit(taskToBeToggled)
  }
}


// API call
// redundancy