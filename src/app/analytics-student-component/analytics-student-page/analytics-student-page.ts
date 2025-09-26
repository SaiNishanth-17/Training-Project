import { Component, EventEmitter, Output } from '@angular/core';
import { StatCard } from "../stat-card/stat-card";
import { StudentReport } from "../student-report/student-report";
import { Progress } from "../progress/progress";
import { Leaderboard } from "../leaderboard/leaderboard";
import { ExamWiseAnalysis } from "../exam-wise-analysis/exam-wise-analysis";
import { UsernameNav } from "../username-nav/username-nav";

@Component({
  selector: 'app-analytics-student-page',
  imports: [StatCard,  Progress, Leaderboard, ExamWiseAnalysis, UsernameNav],
  templateUrl: './analytics-student-page.html',
  styleUrl: './analytics-student-page.css'
})
export class AnalyticsStudentPage {
  @Output() navigate=new EventEmitter<string>();
  
}
