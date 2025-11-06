import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StatCard } from "../stat-card/stat-card";
import { Progress } from "../progress/progress";
import { Leaderboard } from "../leaderboard/leaderboard";
import { ExamWiseAnalysis } from "../exam-wise-analysis/exam-wise-analysis";
import { UsernameNav } from "../username-nav/username-nav";
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-analytics-student-page',
  standalone: true,
  imports: [StatCard, Progress, Leaderboard, ExamWiseAnalysis, UsernameNav],
  templateUrl: './analytics-student-page.html',
  styleUrls: ['./analytics-student-page.css']
})
export class AnalyticsStudentPage implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  noOfExams = 0;
  averageScore = 0;
  passingRate = 0; // add this

  constructor(private studentService: StudentReportService) {}

  
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    console.log(localStorage.getItem('userId'));
    if (!userId) return;

    this.studentService.getOverallStats(userId).subscribe({
      next: (data) => {
        this.noOfExams = data.totalExams || 0;
        this.averageScore = Math.round(data.avgScore || 0);
        this.passingRate = Math.round(data.passingRate || 0);
      }
    });
  }
}
