import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../modal/todo.types';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoServices = inject(TodosService)

  todoSignal = signal<Array <Todo>>([])

  ngOnInit(): void {
      console.log("Anu", this.todoServices.todoItem)

      this.todoSignal.set(this.todoServices.todoItem)
  }
}
