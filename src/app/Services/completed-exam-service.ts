import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamDataService } from './exam-data-service';
import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class CompletedExamService {
  submittedAnswers: string[] = [];
  examQuestions: any[] = [];
  completedExamList: completedExams[] = [];
  private examCounter = 1;

  constructor(
    private examDataService: ExamDataService,
    private http: HttpClient
  ) {}

  initializeExamData(): void {
    this.submittedAnswers = this.examDataService.getAnswers();
    this.examQuestions = this.examDataService.getQuestions();
  }

  calculateScore(): [number, number] {
    this.initializeExamData();
    let attempted = 0;
    let correct = 0;

    for (let i = 0; i < this.examQuestions.length; i++) {
      const submitted = this.submittedAnswers[i];
      if (submitted !== '') attempted++;
      if (submitted === this.examQuestions[i].answer) correct++;
    }

    return [attempted, correct];
  }

  addCompletedExam(examName: string, durationMinutes: number): void {
    this.initializeExamData();

    const completedExam: completedExams = {
      id: this.examCounter++,
      name: examName,
      noOfQuestions: this.examQuestions.length,
      duration: `${durationMinutes} minutes`,
      score: 0 // score will be updated after backend response
    };

    this.completedExamList.push(completedExam);
  }

  submitExamToBackend(userId: string, examName: string, difficulty: string) {
    this.initializeExamData();

    const answers = this.examQuestions.map((q, i) => ({
      questionId: q.id,
      selectedOption: this.submittedAnswers[i],
      correctOption: q.answer
    }));

    const payload = {
      userId,
      examName,
      difficulty,
      answers
    };

    return this.http.post('http://localhost:8001/api/exams/submitExam', payload);
  }

  getCompletedExams(): completedExams[] {
    return this.completedExamList;
  }
}
