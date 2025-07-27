import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../modal/todo.types';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todoServices = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoServices
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
