import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamDataService {
  private answers: string[] = [];
  private questions: any[] = [];
  private time!: number;
  private subjectId: string = '';

  // Set both answers and questions together
  setData(answers: string[], questions: any[]): void {
    this.answers = answers;
    this.questions = questions;
  }

  // Set answers independently
  setAnswers(answers: string[]): void {
    this.answers = answers;
  }

  getAnswers(): string[] {
    return this.answers;
  }

  getQuestions(): any[] {
    return this.questions;
  }

  setTime(time: number): void {
    this.time = time;
  }

  getTime(): number {
    return this.time;
  }

  setSubjectId(id: string): void {
    this.subjectId = id;
  }

  getSubjectId(): string {
    return this.subjectId;
  }
}
