import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { completedExams } from '../../Models/completedExams';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { ExamDataService } from '../../Services/exam-data-service';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-result-component',
  imports: [CommonModule],
  templateUrl: './result-component.html',
  styleUrl: './result-component.css'
})
export class ResultComponent {

  noOfQuestions: number = 0;
  noOfQuestionsAttempted: number = 0;
  correctAnswersCount: number = 0;
  score: number = 0;
  latestExam?: completedExams;
  showAnalysis: boolean = false;
  examQuestions: any;
  submittedAnswers: any;

  constructor(
    private completedExamService: CompletedExamService,
    private examdataservice: ExamDataService,
  ) {}

  ngOnInit(): void {
    const scoreData = this.completedExamService.calculateScore();

    this.noOfQuestions = this.examdataservice.getQuestions().length;
    this.noOfQuestionsAttempted = scoreData.attempted;
    this.correctAnswersCount = scoreData.correct;
    this.score = scoreData.score;

    this.examQuestions = this.examdataservice.getQuestions();
    this.submittedAnswers = this.examdataservice.getAnswers();

    const completedExams = this.completedExamService.getCompletedExams();
    if (completedExams.length > 0) {
      this.latestExam = completedExams[completedExams.length - 1];
    }
  }

  ShowAnalysis(): void {
    this.showAnalysis = true;
  }

  getScoreClass(): string {
    if (this.score >= 80) return 'excellent-score';
    if (this.score >= 60) return 'good-score';
    if (this.score >= 40) return 'average-score';
    return 'poor-score';
  }
}
