import {  Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminReportServices } from '../../Services/admin-report-services';

@Component({
  selector: 'app-analytics-admindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-admindashboard.html',
  styleUrls: ['./analytics-admindashboard.css']
})
export class AnalyticsAdmindashboard implements OnInit {
  totalStudents: number = 0;
  totalExams: number = 0;
  passRate: number = 0;
  isLoading: boolean = true;
  
  students: any[] = [];
  subjects: any[] = [];
  selectedStudent: any = null;

  constructor(private adminReportServices: AdminReportServices) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  private loadData(): void {
  this.isLoading = true;

  this.adminReportServices.getAdminStats().subscribe({
    next: (stats) => {
      this.totalStudents = stats.totalStudents;
      this.totalExams = stats.totalExams;
      this.passRate = stats.passRate;
    }
  });

  this.adminReportServices.getStudentPerformance().subscribe({
    next: (data) => {
      this.students = data;
    }
  });

  this.adminReportServices.getSubjectPerformance().subscribe({
    next: (data) => {
      this.subjects = data;
      
      this.isLoading = false; 
    },
    error: () => {
      this.isLoading = false;
    }
  });
}




  selectStudent(student: any): void {
    this.selectedStudent = student;
  }

  closeModal(): void {
    this.selectedStudent = null;
  }
}