import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterValue = signal(1);
  decrementValue = () => {
    this.counterValue.update((value) => value - 1);
  };
  resetValue = () => {
    console.log('Reset clicked');
    this.counterValue.set(0);
  };
  incrementValue = () => {
    console.log('Increment clicked');
    this.counterValue.update((value) => value + 1);
  };
}