import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminReportServices } from '../../Services/admin-report-services';
import { ScoreAnalytics } from '../../Models/scoreAnalysis';

import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-analytics-admindashboard',
  imports: [CommonModule],
  templateUrl: './analytics-admindashboard.html',
  styleUrl: './analytics-admindashboard.css'
})
export class AnalyticsAdmindashboard implements OnInit{
  

  constructor(private adminreportservices: AdminReportServices,
    private studentreportservice:StudentReportService
  ){}

  exams?:any;
  noOfExams: number=0;
  totalStudents!:number;
  totalExams!:number;
  avgScore!:number;
  passRate=85;
  students:ScoreAnalytics[] = [];

  ngOnInit(): void {
    this.numberOfStudents();
    this.numberOfExams();
    this.totalAverage();
    this.studentScoreAnalysis();
    this.exams=this.adminreportservices.examsScore;
    this.noOfExams=this.studentreportservice.getExam();
  }

  numberOfStudents(){
    this.totalStudents=this.adminreportservices.numberOfStudents();
  }

  numberOfExams(){
    this.totalExams=this.adminreportservices.numberOfExamsAvailable();
  }

  totalAverage(){
    this.avgScore=this.adminreportservices.averageScore();
  }

  studentScoreAnalysis(){
    this.students=this.adminreportservices.getScoreAnalytics();
  }


  
  
  
  
 



  // Student-wise Performance
  
}
