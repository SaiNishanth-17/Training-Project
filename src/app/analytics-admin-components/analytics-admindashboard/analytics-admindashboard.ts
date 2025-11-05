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

  constructor(private http: HttpClient) {}

  totalStudents: number = 0;
  totalExams: number = 0;
  passRate: number = 0;

  students = [
    { name: "Sai Nishanth", avgScore: 72, passRate: 80 },
    { name: "Ayesha Khan", avgScore: 85, passRate: 90 },
    { name: "Ravi Sharma", avgScore: 65, passRate: 60 },
  ];

  subjects = [
    { subjectName: "Mathematics", avgScore: 71 },
    { subjectName: "Science", avgScore: 67 },
    { subjectName: "English", avgScore: 80 },
  ];

  selectedStudent: any = null;

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

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  closeModal() {
    this.selectedStudent = null;
  }
}
