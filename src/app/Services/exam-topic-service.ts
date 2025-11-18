import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamTopicType } from '../Models/examTopicType';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ExamTopicService {
  private baseUrl = 'http://localhost:8001/api/subjects';

  constructor(private http: HttpClient) {}

  private toFrontend(subject: any): ExamTopicType {
    return {
      subjectName: subject.subjectName,
      description: subject.description,
      isActive: subject.isActive,
      subtopics: [],
    };
  }

  private toBackend(exam: ExamTopicType): any {
    return {
      subjectName: exam.subjectName,
      description: exam.description,
      isActive: exam.isActive,
    };
  }

  getSubjects(): Observable<ExamTopicType[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((subjects) => subjects.map((s) => this.toFrontend(s)))
    );
  }

  addExam(exam: ExamTopicType): Observable<any> {
    return this.http.post(this.baseUrl, this.toBackend(exam));
  }

  updateExam(updatedExam: ExamTopicType, originalName: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${originalName}`, this.toBackend(updatedExam));
  }

  deleteExam(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
}
