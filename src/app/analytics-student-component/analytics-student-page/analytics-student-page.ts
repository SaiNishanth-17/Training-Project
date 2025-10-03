import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StatCard } from "../stat-card/stat-card";
import { Progress } from "../progress/progress";
import { Leaderboard } from "../leaderboard/leaderboard";
import { ExamWiseAnalysis } from "../exam-wise-analysis/exam-wise-analysis";
import { UsernameNav } from "../username-nav/username-nav";
import { StudentReportService } from '../../Services/student-report-service';
@Component({
  selector: 'app-analytics-student-page',
  imports: [StatCard,  Progress, Leaderboard, ExamWiseAnalysis, UsernameNav],
  templateUrl: './analytics-student-page.html',
  styleUrl: './analytics-student-page.css'
})
export class AnalyticsStudentPage implements OnInit {
  @Output() navigate=new EventEmitter<string>();
  noOfExams: number=0;
  averageScore:number=0;
  firstname: string="";

  constructor(private studentreportservice:StudentReportService,
    
  ){}
  ngOnInit(): void {
    this.noOfExams=this.studentreportservice.getExam();
    this.averageScore=this.studentreportservice.getStudentAverage();
    
    
  }

  
  
}
