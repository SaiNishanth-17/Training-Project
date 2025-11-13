import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminReportService } from '../../Services/admin-report-service';

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
  selectedStudent: any = null;
  students: any[] = [];
  subjects: any[] = [];

  constructor(private adminReportService: AdminReportService) {}

  ngOnInit(): void {
    // this.loadTotalStudents();
    // this.loadTotalSubjects();
    this.loadStudentAnalysis();
    this.loadSubjectAnalysis();
    this.loadAdminStats();
  }

  // loadTotalStudents(): void {
  //   this.adminReportService.getTotalStudents().subscribe({
  //     next: (count) => {
  //       this.totalStudents = count;
  //     },
  //     error: () => console.error('Failed to load total students')
  //   });
  // }

  // loadTotalSubjects(): void {
  //   this.adminReportService.getTotalSubjects().subscribe({
  //     next: (count) => {
  //       this.totalExams = count;
  //     },
  //     error: () => console.error('Failed to load total subjects')
  //   });
  // }

  loadStudentAnalysis(): void {
    this.adminReportService.getStudentAnalysis().subscribe({
      next: (data) => {
        this.students = data || [];
      },
      error: (err) => {
        console.error('Error fetching student analysis', err);
        this.students = [];
      }
    });
  }

  loadSubjectAnalysis(): void {
    this.adminReportService.getSubjectAnalysis().subscribe({
      next: (data) => {
        this.subjects = data || [];
      },
      error: (err) => {
        console.error('Error fetching subject analysis', err);
        this.subjects = [];
      }
    });
  }

  loadAdminStats(): void {
    this.adminReportService.getAdminStats().subscribe({
      next: (data) => {
        this.totalStudents = data.totalStudents || 0;
        this.totalExams = data['totalExams'] || 0;
        this.passRate = data.passRate || 0;
      },
      error: (err) => {
        console.error('Error fetching admin stats', err);
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