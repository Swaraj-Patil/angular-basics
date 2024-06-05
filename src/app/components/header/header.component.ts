import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Task } from '../../Types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent, 
    FontAwesomeModule, 
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() taskCreated: EventEmitter<Task> = new EventEmitter()

  title: string = 'Task Tracker'
  moonIcon: any = faMoon

  constructor (private dialog: MatDialog) {}

  greetFromParent () {
    console.log('Hello, I am the parent component of the button component that you clicked!')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent)

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.taskCreated.emit(result)
      }
    })

  }

}