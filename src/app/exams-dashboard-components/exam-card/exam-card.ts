import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { examType } from '../../Models/examType';
import { QuestionbankServices } from '../../Services/questionbank-services';
import { ExamDataService } from '../../Services/exam-data-service';
import { examQuestionType } from '../../Models/examQuestionType';

@Component({
  selector: 'app-exam-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-card.html',
  styleUrls: ['./exam-card.css'],
})
export class ExamCard {
  @Input() exams: examType[] = [];

  levels: { [examName: string]: string } = {};

  constructor(
    private questionBank: QuestionbankServices,
    private examData: ExamDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.exams.forEach(exam => {
      this.levels[exam.name] = '';
    });
  }

  getDurationForLevel(level: string) {
    switch (level) {
      case 'basic':
        return 30;
      case 'intermediate':
        return 45;
      case 'advanced':
        return 60;
      default:
        return 30;
    }
  }

  attemptExam(exam: examType) {
    const chosenLevel = this.levels[exam.name] || 'basic';
    const examName = exam.name;
    const duration = this.getDurationForLevel(chosenLevel);

    this.examData.setTime(duration);

    this.questionBank
      .getQuestionsForExamLevel(examName, chosenLevel)
      .subscribe((questions: any[]) => {
        if (!questions || questions.length !== 10) {
          alert(`Exam requires exactly 10 questions. Current: ${questions ? questions.length : 0}`);
          return;
        }
        const examQuestions: examQuestionType[] = questions.map((q: any, idx: number) => ({
          id: q.id || idx + 1,
          question: q.text || q.question || '',
          options: q.options || [],
          answer:
            q.options && q.options[q.correctAnswerIndex] ? q.options[q.correctAnswerIndex] : '',
          difficulty: q.difficulty || 'Easy',
        }));
        this.examData.setData([], examQuestions);
        // navigate to start route using dynamic exam name
        this.router.navigateByUrl(`/student-dashboard/exam/${examName}?level=${chosenLevel}`);
      });
  }
}
