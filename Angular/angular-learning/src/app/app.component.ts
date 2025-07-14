import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SectionsComponent } from './components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeaderComponent, SidebarComponent, SectionsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
