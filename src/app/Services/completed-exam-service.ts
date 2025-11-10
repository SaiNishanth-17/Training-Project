import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamDataService } from './exam-data-service';
import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class CompletedExamService {

  completedExamList: completedExams[] = [];
  private examCounter = 1;

  constructor(
    private examDataService: ExamDataService,
    private http: HttpClient
  ) {}

  /** Load exam answers & questions */
  private loadExamData() {
    const answers = this.examDataService.getAnswers();
    const questions = this.examDataService.getQuestions();
    return { answers, questions };
  }

  /** Local Score Calculation */
  calculateScore(): { attempted: number; correct: number; score: number } {
    const { answers, questions } = this.loadExamData();

    let attempted = 0;
    let correct = 0;

    for (let i = 0; i < questions.length; i++) {
      if (answers[i] !== '') attempted++;
      if (answers[i] === questions[i].correctAnswer) correct++; // ✅ FIXED
    }

    const score = questions.length > 0
      ? Math.round((correct / questions.length) * 100)
      : 0;

    return { attempted, correct, score };
  }

  /** Add completed exam to local list */
  addCompletedExam(examName: string, durationMinutes: number): completedExams {
    const { questions } = this.loadExamData();

    const exam: completedExams = {
      id: this.examCounter++,
      name: examName,
      noOfQuestions: questions.length,
      duration: `${durationMinutes} minutes`,
      score: 0 // updated later
    };

    this.completedExamList.push(exam);
    return exam;
  }

  /** Submit exam to backend */
  submitExamToBackend(userId: string, examName: string, difficulty: string) {
    const { answers, questions } = this.loadExamData();

    const payload = {
      userId,
      examName,
      difficulty,
      answers: questions.map((q: any, i: number) => ({
        questionId: q._id, // ✅ CORRECT FIELD NAME
        selectedOption: answers[i] ? String(answers[i]) : "", // ✅ to avoid null/undefined
        correctOption: String(q.correctAnswer) // ✅ CORRECT FIELD NAME
      }))
    };

    return this.http.post(
      `http://localhost:8001/api/exams/${examName}/submitExam`,
      payload
    );
  }

  /** Return completed exam list */
  getCompletedExams(): completedExams[] {
    return this.completedExamList;
  }
}
