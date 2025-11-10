import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAdminStats();
  }

  loadAdminStats(): void {
    this.http.get<any>('http://localhost:8001/api/analytics/admin/stats').subscribe({
      next: (data) => {
        console.log(JSON.stringify(data));
        this.totalStudents = data.totalStudents;
        this.totalExams = data.totalExams;
        this.passRate = data.passRate;
      },
      error: (err) => {
        console.error('Error fetching admin analytics data', err);
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