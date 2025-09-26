import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamDataService } from '../../Services/exam-data-service';
import { ExamQuestionsService } from '../../Services/exam-questions-service';
import { ActivatedRoute, Router } from '@angular/router';
import { examQuestionType } from '../../Models/examQuestionType';
import { NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-exam-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-page.html',
  styleUrl: './exam-page.css'
})
export class ExamPage implements OnInit {
  currentExamId: string | null = null;
  currentExamQuestions: examQuestionType[] = [];
  currentQuestionIndex: number = 1;
  answerOptions = ['A', 'B', 'C', 'D'];
  selectedAnswers: string[] = [];
  examTime: number = 0;
  examDurationMinutes: number = 0; 
  timeLeft: number = 0;
  examName!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: ExamQuestionsService,
    private dataService: ExamDataService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.examName = this.route.snapshot.paramMap.get('name')!;
    this.examTime = this.dataService.getTime();
    this.examDurationMinutes=this.dataService.getTime();
    this.timeLeft=this.examDurationMinutes*60;

    const routeParam = this.route.snapshot.paramMap.get('name');
    this.currentExamId = routeParam ? routeParam.toLowerCase() : null;
    switch (this.currentExamId) {
  case 'html':
    this.currentExamQuestions = this.questionService.getHtmlQuestions();
    break;
  case 'css':
    this.currentExamQuestions = this.questionService.getCssQuestions();
    break;
  case 'javascript':
    this.currentExamQuestions = this.questionService.getJavascriptQuestions();
    break;
  case 'bootstrap':
    this.currentExamQuestions = this.questionService.getBootstrapQuestions();
    break;
  default:
    this.currentExamQuestions = [];
}
    this.selectedAnswers = new Array(this.currentExamQuestions.length).fill('');
    this.startTimer();
  }

  selectAnswer(questionIndex: number, chosenOption: string) {
    this.selectedAnswers[questionIndex] = chosenOption;
  }
  timerDisplay: string = '00:00';
  intervalId: any;
startTimer() {
  this.updateTimerDisplay();
  this.ngZone.runOutsideAngular(() => {
    this.intervalId = setInterval(() => {
      this.ngZone.run(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateTimerDisplay();
          this.cdr.detectChanges(); 
        } else {
          clearInterval(this.intervalId);
          this.submitExam();
        }
      });
    }, 1000);
  });
}

updateTimerDisplay() {
  const minutes = Math.floor(this.timeLeft / 60);
  const seconds = this.timeLeft % 60;
  this.timerDisplay = `${this.pad(minutes)}:${this.pad(seconds)}`;
}

pad(num: number): string {
  return num < 10 ? '0' + num : num.toString();
}
  submitExam() {
    this.dataService.setData(this.selectedAnswers, this.currentExamQuestions);
    this.router.navigate([`student-dashboard/exam`, this.examName, 'result']);
  }
  
}
