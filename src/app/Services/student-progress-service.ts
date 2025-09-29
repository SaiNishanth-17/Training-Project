import { Injectable } from '@angular/core';
import { StudentServices } from './AvailableExamService';
import { CompletedExamService } from './completed-exam-service';
@Injectable({
  providedIn: 'root'
})
export class StudentProgressService {
  constructor(private availableExamsService: StudentServices,
    private completedExamService:CompletedExamService
  ) {}

  getProgressPercentage(): number {
    const exams = this.availableExamsService.getAllExams();

    const completed = this.completedExamService.completedExamList.length;
    return (completed / exams.length) * 100;
  }
}
