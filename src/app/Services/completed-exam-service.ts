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

  private loadExamData() {
    const answers = this.examDataService.getAnswers();
    const questions = this.examDataService.getQuestions();
    return { answers, questions };
  }

  calculateScore(): { attempted: number; correct: number; score: number } {
    const { answers, questions } = this.loadExamData();

    let attempted = 0;
    let correct = 0;

    for (let i = 0; i < questions.length; i++) {
      if (answers[i] !== '') attempted++;
      const correctAnswer = questions[i].correctAnswer || questions[i].answer;
      if (answers[i] === correctAnswer) correct++;
    }

    const score = questions.length > 0
      ? Math.round((correct / questions.length) * 100)
      : 0;

    return { attempted, correct, score };
  }

  addCompletedExam(examName: string, durationMinutes: number): completedExams {
    const { questions } = this.loadExamData();

    const exam: completedExams = {
      id: this.examCounter++,
      name: examName,
      noOfQuestions: questions.length,
      duration: `${durationMinutes} minutes`,
      score: 0 
    };

    this.completedExamList.push(exam);
    return exam;
  }

  submitExamToBackend(userId: string, examName: string, difficulty: string) {
    const { answers, questions } = this.loadExamData();

    if (!questions || questions.length === 0) {
      throw new Error('No questions available for submission');
    }

    const payload = {
      userId,
      examName,
      difficulty,
      answers: questions.map((q: any, i: number) => ({
        questionId: q.id || q._id || i.toString(),
        selectedOption: answers[i] ? String(answers[i]) : "",
        correctOption: String(q.answer || q.correctAnswer)
      }))
    };



    return this.http.post(
      `http://localhost:8001/api/exams/${examName}/submitExam`,
      payload
    );
  }

  fetchCompletedExamsFromBackend(userId: string) {
    return this.http.get<any[]>(`http://localhost:8001/api/exams/completed/${userId}`);
  }

  getCompletedExams(): completedExams[] {
    return this.completedExamList;
  }

  loadCompletedExamsFromBackend(userId: string) {
    return this.fetchCompletedExamsFromBackend(userId).subscribe({
      next: (exams) => {
        this.completedExamList = exams.map((exam, index) => ({
          id: index + 1,
          name: exam.examName || 'Unknown Exam',
          noOfQuestions: exam.totalQuestions || 0,
          duration: `${exam.duration || 0} minutes`,
          score: exam.score || 0
        }));
      }
    });
  }
}
