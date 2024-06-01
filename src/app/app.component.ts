import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { Task } from './Types';

@Component({
  selector: 'app-root', // HTML TAG NAME
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    TasksComponent,
    AddTaskComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // friendName = 'Sanket';
  newTask: Task

  handleTaskCreation(task: Task) {
    // console.log('We are on the top', task)
    this.newTask = task

  }
}
