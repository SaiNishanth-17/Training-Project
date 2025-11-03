import { Injectable } from '@angular/core';
import { ExamTopicType } from '../Models/examTopicType';
@Injectable({ providedIn: 'root' })
export class ExamStateService {
  private selectedExam: ExamTopicType | null = null;

  setExam(exam: ExamTopicType) {
    this.selectedExam = exam;
  }

  getExam(): ExamTopicType | null {
    return this.selectedExam;
  }
}
