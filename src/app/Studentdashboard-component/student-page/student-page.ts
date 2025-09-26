import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar-component/sidebar-component/sidebar-component";

@Component({
  selector: 'app-student-page',
  imports: [RouterModule, SidebarComponent],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css'
})
export class StudentPage {
  
activeItem: string = 'Dashboard';
  setActiveItem(item: string) {
    this.activeItem = item;
  }
}
