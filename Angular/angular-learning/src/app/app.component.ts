import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
