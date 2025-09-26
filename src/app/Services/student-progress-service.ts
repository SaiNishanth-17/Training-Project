import { Injectable } from '@angular/core';
import { StudentServices } from './AvailableExamService';
@Injectable({
  providedIn: 'root'
})
export class StudentProgressService {
  constructor(private availableExamsService: StudentServices) {}

  getProgressPercentage(): number {
    const exams = this.availableExamsService.getAllExams();

    const completed = exams.filter(e => e.status === 'completed').length;
    return (completed / exams.length) * 100;
  }
}
