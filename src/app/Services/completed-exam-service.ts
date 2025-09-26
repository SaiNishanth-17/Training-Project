import { Injectable } from '@angular/core';
import { StudentServices } from './AvailableExamService';

import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class CompletedExamService {
  constructor(private availableExamsService: StudentServices) {}

  getCompletedExams(): completedExams[] {
    return this.availableExamsService.getAllExams().filter(exam => exam.status === 'completed');
  }
}
