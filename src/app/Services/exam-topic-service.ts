import { Injectable } from '@angular/core';
import { ExamTopicType } from '../Models/examTopicType';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ExamTopicService {
   constructor(private http: HttpClient) {}
  exams: ExamTopicType[] = [
    {
      name: 'Maths',
      isActive: true,
      Description: 'Mathematics topics covering arithmetic, algebra, geometry and more',
    },
    {
      name: 'Science',
      isActive: true,
      Description: 'General science including physics, chemistry and biology basics',
    },
    {
      name: 'Social',
      isActive: true,
      Description: 'Social studies covering history, geography and civics',
    },
    {
      name: 'English',
      isActive: true,
      Description: 'English language and grammar, comprehension and writing skills',
    },
  ];
  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8001/api/subjects');
  }
  getExams(): ExamTopicType[] {
    return this.exams;
  }

  addExam(exam: ExamTopicType) {
    this.exams.push(exam);
  }

  updateExam(updatedExam: ExamTopicType, originalName: string) {
    const index = this.exams.findIndex((e) => e.name === originalName);
    if (index !== -1) {
      this.exams[index] = { ...updatedExam };
    } else {
      // if original not found, try to replace by name match on updatedExam.name
      const idx2 = this.exams.findIndex((e) => e.name === updatedExam.name);
      if (idx2 !== -1) this.exams[idx2] = { ...updatedExam };
    }
  }

  deleteExam(name: string) {
    this.exams = this.exams.filter((e) => e.name !== name);
  }
}
