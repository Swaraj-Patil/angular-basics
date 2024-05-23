import { Injectable } from '@angular/core';
import { tasks } from '../mock-tasks';
import { Task } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks (): Task[] {
    // Backend API called and data received
    return tasks
  }
}



// CRUD operation
// C - Create
// R - Retrieve
// U - Update
// D - Delete


// javascript

interface studentType {
  age: number,
  name: string
}

const students = [
  {
    age: 20,
    name: 'Ross'
  },
  {
    age: 20,
    name: 'Rachael'
  },
  {
    age: 20,
    name: 'Monica'
  },
  {
    age: 20,
    name: 'Joey'
  },
]

function sendAllStudentNames (): studentType[] {
  return students.map(student => student)
}