import { Injectable } from '@angular/core';
import { Task } from '../Types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskApiUrl = 'http://localhost:4201/tasks' //endpoint

  constructor (private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskApiUrl)
  }

  deleteTask (task: Task): Observable<Task> { 
    // 'http://localhost:4201/tasks/3'
    return this.http.delete<Task>(`${this.taskApiUrl}/${task.id}`) // endpoint
  }

  toggleReminderOfTask(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.taskApiUrl}/${task.id}`,
      task, // payload
      httpOptions
    )
  }
}


// Asynchronous Javascript

// Promise VS Observables

// console.log('Initializer')
// const myPromise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Ross')
//     resolve('Joey')
//   }, 2000)
// })


// myPromise.then(response => {
//   
// })console.log('Promise', response)

// const myObservable = new Observable(observer => {
//   setTimeout(() => {
//     observer.next('Rachael')
//     observer.next('Monica')
//     observer.next('Monica')
//     observer.next('Monica')
//     observer.next('Monica')
//     observer.next('Monica')
//   }, 3000)
// })

// myObservable.subscribe(response => {
//   console.log('Observable', response)
// })



// C - Create (POST)
// R - Retrieve (GET)
// U - Update (PUT/PATCH)
// D - Delete (DELETE)