import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-page',
  imports: [Sidebar,  RouterModule],
  templateUrl: './admin-dashboard-page.html',
  styleUrl: './admin-dashboard-page.css'
})
export class AdminDashboardPage {
  

activeItem: string = 'Dashboard';
  setActiveItem(item: string) {
    this.activeItem = item;
  }



}
