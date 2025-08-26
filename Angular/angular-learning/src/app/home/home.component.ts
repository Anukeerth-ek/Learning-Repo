import { Component } from '@angular/core';
import { MyHeaderComponent } from '../components/my-header/my-header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SectionsComponent } from '../components/sections/sections.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [ SidebarComponent, SectionsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
