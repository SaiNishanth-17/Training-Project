
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvailableexamsComponent } from "./availableexams-component/availableexams-component";
import { CompletedexamsComponent } from "./completedexams-component/completedexams-component";
import { StudentprogressComponent } from "./studentprogress-component/studentprogress-component";
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-studentdashboard',
  imports: [CommonModule, FormsModule, AvailableexamsComponent, CompletedexamsComponent, StudentprogressComponent, DashboardComponent],
  templateUrl: './Studentdashboard-component.html',
  styleUrls: ['./Studentdashboard-component.css']
})
export class StudentdashboardComponent {
 
  
selectedSection: 'available' | 'completed' | 'progress' | null = null;

  handleCardClick(section: 'available' | 'completed' | 'progress') {
    this.selectedSection = this.selectedSection === section ? null : section;
  }

  // ...existing code...

}