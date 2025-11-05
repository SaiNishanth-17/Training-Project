import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-admindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-admindashboard.html',
  styleUrls: ['./analytics-admindashboard.css']
})
export class AnalyticsAdmindashboard implements OnInit {

  

  totalStudents = 120;
  totalExams = 350;
  passRate = 68;

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

  ngOnInit(): void {}

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  closeModal() {
    this.selectedStudent = null;
  }
}
