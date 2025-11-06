import { Component, OnInit } from '@angular/core';
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

  private async loadData(): Promise<void> {
    try {
      this.isLoading = true;
      const stats = await this.adminReportServices.getAdminStats();
      
      this.totalStudents = stats.totalStudents;
      this.totalExams = stats.totalExams;
      this.passRate = stats.passRate;
      
      this.students = this.adminReportServices.getStudentPerformance();
      this.subjects = this.adminReportServices.getSubjectPerformance();
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  selectStudent(student: any): void {
    this.selectedStudent = student;
  }

  closeModal(): void {
    this.selectedStudent = null;
  }
}