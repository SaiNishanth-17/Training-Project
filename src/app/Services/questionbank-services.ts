import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { Question } from '../Models/question-interface';
 
export interface QuestionPayload {
  qName: string;
  options: string[];
  correctAnswer: string;
}
 
type Difficulty = 'basic' | 'intermediate' | 'advanced';
 
@Injectable({
  providedIn: 'root',
})
export class QuestionbankServices {
 
  private apiUrl = 'http://localhost:8001/api/questions';
  private apiUrlCourses = 'http://localhost:8001/api/subjects';
  courses: any[] = [];  
 
  constructor(private http: HttpClient) {}
 
  addCourse(name: string): void {
    if (!this.courses.some(c => c.name === name)) {
      this.courses.push({ name: name });
    }
  }
 
  deleteCourse(name: string): void {
    const index = this.courses.findIndex(c => c.name === name);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
   
  getCourses(): Observable<any[]> {
    const url = `${this.apiUrlCourses}`;
    return this.http.get<any[]>(url).pipe(
      tap(data => this.courses = data)
    );
  }
 

 
  getQuestionsForExamLevel(examName: string, level: string): Observable<Question[]> {
      const difficulty = level.toLowerCase() as Difficulty;
      return this.getQuestions(examName, difficulty);
  }
  // READ (GET) Questions: GET /api/questions/:subject/:difficulty
  getQuestions(subject: string, difficulty: Difficulty): Observable<Question[]> {
    const url = `${this.apiUrl}/${subject}/${difficulty}`;
    return this.http.get<any[]>(url).pipe(
      map((backendQuestions) => backendQuestions.map((bq) => ({
          id: bq._id,
          text: bq.qName,
          difficulty: difficulty,
          options: bq.options,
          correctAnswer: bq.correctAnswer} as Question))
      )
    );
  }
 
  // CREATE (POST) Question
  createQuestion(newQuestion: Question,selectedCourseName: string): Observable<any> {
 
    const difficulty = newQuestion.difficulty.toLowerCase() as Difficulty;
    const url = `${this.apiUrl}/${selectedCourseName}/${difficulty}`;
    const payload: QuestionPayload = {
      qName: newQuestion.text,
      options: newQuestion.options,
      correctAnswer: newQuestion.correctAnswer,
    };
 
    return this.http.post(url, payload);
  }
 
  // UPDATE (PUT) Question
  updateQuestion(updatedQuestion: Question, selectedCourseName: string  ): Observable<any> {
    const difficulty = updatedQuestion.difficulty.toLowerCase() as Difficulty;
    const url = `${this.apiUrl}/${selectedCourseName}/${difficulty}/${updatedQuestion.id}`;
 
    const payload: QuestionPayload = {
      qName: updatedQuestion.text,
      options: updatedQuestion.options,
      correctAnswer: updatedQuestion.correctAnswer,
    };
    return this.http.put(url, payload);
  }
 
  // DELETE Question
  deleteQuestion(id: number | string, courseName: string, difficulty: string  ): Observable<any> {
    const beDifficulty = difficulty.toLowerCase() as Difficulty;
    const url = `${this.apiUrl}/${courseName}/${beDifficulty}/${id}`;
    return this.http.delete(url);
  }
}
 