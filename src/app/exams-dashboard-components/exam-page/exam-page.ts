import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { ExamDataService } from '../../Services/exam-data-service';
import { UserRegisteringService } from '../../Services/user-registering-service';
@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-page.html',
  styleUrls: ['./exam-page.css']
})
export class ExamPage implements OnInit {
  examName = '';
  level = '';
  duration = 0;
  subjectId = '';
  currentExamQuestions: any[] = [];
  selectedAnswers: string[] = [];
  answerOptions = ['A', 'B', 'C', 'D'];
  timeLeft = 0;
  timerDisplay = '';
  userId:any;
  private timerInterval: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private completedExamService: CompletedExamService,
    private examDataService: ExamDataService,
    private userRegisteringService: UserRegisteringService
  ) {}

  ngOnInit(): void {
    this.examName = this.route.snapshot.paramMap.get('name') || '';
    this.level = this.route.snapshot.queryParamMap.get('level') || 'basic';
    this.duration = this.examDataService.getTime(); // in minutes
    this.subjectId = this.examDataService.getSubjectId(); // now valid
    this.currentExamQuestions = this.examDataService.getQuestions();
    this.selectedAnswers = new Array(this.currentExamQuestions.length).fill('');
    this.userId =this.userRegisteringService.decodeToken()?.id || '';
    this.startTimer(this.duration * 60);
  }

  selectAnswer(questionIndex: number, option: string): void {
    this.selectedAnswers[questionIndex] = option;
  }

  startTimer(seconds: number): void {
    this.timeLeft = seconds;
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.submitExam();
      }
    }, 1000);
  }

  updateTimerDisplay(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.timerDisplay = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  submitExam(): void {
    clearInterval(this.timerInterval);

    if (!this.userId) {
      alert('User not authenticated. Please login again.');
      return;
    }

    console.log('Questions:', this.currentExamQuestions);
    console.log('Selected Answers:', this.selectedAnswers);

    this.examDataService.setAnswers(this.selectedAnswers);
    
    const completedExam = this.completedExamService.addCompletedExam(this.examName, this.duration);
    const scoreData = this.completedExamService.calculateScore();
    completedExam.score = scoreData.score;

    this.completedExamService
      .submitExamToBackend(this.userId, this.examName, this.level)
      .subscribe({
        next: (res: any) => {
          console.log('Backend response:', res);
          alert(`Exam submitted successfully! Score: ${res.score || scoreData.score}%`);
          this.router.navigateByUrl('/student-dashboard/results');
        },
        error: err => {
          console.error('Submission error:', err);
          alert('Cannot submit exam. Please check your connection and try again.');
        }
      });
  }
}
