import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  imports: [],
  standalone: true,
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css'
})
export class SubHeaderComponent {
  subHeader = input("Placeholder for subheader")
}
