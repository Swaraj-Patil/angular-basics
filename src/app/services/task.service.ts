import { Injectable } from '@angular/core';
import { tasks } from '../mock-tasks';
import { Task } from '../Types';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskApiUrl = 'http://localhost:4201/tasks'

  constructor (private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskApiUrl)
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
//   console.log('Promise', response)
// })

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