import { Injectable } from '@angular/core';
import { Todo } from '../modal/todo.types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoItem: Array<Todo> = [
    {
      id: 0,
      userId: 1,
      title: "Finish Angular course",
      completed: false,

    },
    {
      id: 1,
      userId: 1,
      title: "Start learning ai ",
      completed: false,

    },
    {
      id: 1,
      userId: 1,
      title: "Do one small project in angular",
      completed: false,

    },
  ]
  constructor() { }
}
