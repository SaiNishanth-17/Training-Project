import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamCard } from '../exam-card/exam-card';
import { examType } from '../../Models/examType';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { QuestionbankServices } from '../../Services/questionbank-services';
import { ExamDataService } from '../../Services/exam-data-service';
import { Router } from '@angular/router';
import { examQuestionType } from '../../Models/examQuestionType';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-display-exams',
  standalone: true,
  imports: [CommonModule, ExamCard, FormsModule, HttpClientModule],
  templateUrl: './display-exams.html',
  styleUrls: ['./display-exams.css'],
})
export class DisplayExams implements OnInit {
  exams: any[] = [];
  modalOpen = false;
  selectedExam: examType | null = null;
  chosenLevel: string = 'basic';

  constructor(
    private examTopicService: ExamTopicService,
    private questionBank: QuestionbankServices,
    private examData: ExamDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.examTopicService.getSubjects().subscribe((data) => {
      const activeSubjects = data.filter((t) => t.isActive);
      this.exams = activeSubjects.map((t) => ({
        name: t.subjectName,
        description: t.description,
      }));
    });
  }

  onOpenExam(exam: examType) {
    this.selectedExam = exam;
    this.chosenLevel = 'basic';
    this.modalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedExam = null;
    document.body.classList.remove('modal-open');
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

  attemptExam() {
    if (!this.selectedExam) return;
    const examName = this.selectedExam.name;
    const duration = this.getDurationForLevel(this.chosenLevel);
    this.examData.setTime(duration);
    this.questionBank
      .getQuestionsForExamLevel(examName, this.chosenLevel)
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
        this.closeModal();
        this.router.navigateByUrl(`/student-dashboard/exam/${encodeURIComponent(examName)}/start`);
      });
  }
}
