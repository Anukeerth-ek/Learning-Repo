import { Component, signal } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-header',
  imports: [RouterLink],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {
  headerMessage = signal("Angular Learning")
}
