import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlighCompletedTodo]',
})
export class HightlighCompletedTodoDirective {
  isCompleted = input(false);

  constructor() {}
  el = inject(ElementRef);
  styleEffect = effect(() => {
    if (this.isCompleted()) {
     this.el.nativeElement.style.textDecoration = 'line-through';
     this.el.nativeElement.style.backgroundColor = 'red';
     this.el.nativeElement.style.color="white"
    }
    else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color="black"
    }
  });
}
