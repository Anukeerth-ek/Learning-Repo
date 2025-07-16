import { Component, signal } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';

@Component({
  selector: 'app-my-header',
  imports: [SubHeaderComponent],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {
  headerMessage = signal("Header Message")
}
