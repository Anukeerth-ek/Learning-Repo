import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-sections',
  imports: [CounterComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css',
  
})
export class SectionsComponent {
  keyUpHandler(event: KeyboardEvent) {
    console.log(`User has typed something ${event.isTrusted}`)
  }
}
