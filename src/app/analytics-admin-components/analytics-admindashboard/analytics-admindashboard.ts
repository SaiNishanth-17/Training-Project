import {  Component, OnInit} from '@angular/core';
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

  constructor(private http: HttpClient) {}

  totalStudents: number = 0;
  totalExams: number = 0;
  passRate: number = 0;

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


  ngOnInit(): void {
    this.loadAdminStats();
  }

  loadAdminStats(){
    this.http.get<any>('http://localhost:8001/api/analytics/admin/stats').subscribe(
      { next: (data) =>{
        console.log(JSON.stringify(data));
        // console.log.(data);
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