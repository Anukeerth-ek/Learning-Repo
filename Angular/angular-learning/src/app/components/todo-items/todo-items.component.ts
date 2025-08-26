import { Component, input } from '@angular/core';
import { Todo } from '../../modal/todo.types';
import { HightlighCompletedTodoDirective } from '../../directive/hightligh-completed-todo.directive';

@Component({
  selector: 'app-todo-items',
  imports: [HightlighCompletedTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  todo = input.required<Todo>()
}
