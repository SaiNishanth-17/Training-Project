import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvailableexamsComponent } from "./availableexams-component/availableexams-component";
import { StudentprogressComponent } from "./studentprogress-component/studentprogress-component";
import { DashboardComponent } from './dashboard-component/dashboard-component';

@Component({
  selector: 'app-studentdashboard',
  imports: [CommonModule, FormsModule, AvailableexamsComponent, StudentprogressComponent, DashboardComponent],
  templateUrl: './Studentdashboard-component.html',
  styleUrls: ['./Studentdashboard-component.css']
})

export class StudentdashboardComponent {
  selectedSection: 'available' | 'completed' | 'progress' | null = null;
  handleCardClick(section: 'available' | 'completed' | 'progress') {
    this.selectedSection = this.selectedSection === section ? null : section;
  }
}