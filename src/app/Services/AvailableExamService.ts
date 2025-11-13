import { Injectable} from '@angular/core';
import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class AvailableExamService {
  private exams: completedExams[] = [
    {
      name: 'HTML', duration: '30 mins', noOfQuestions: 20, 
      id: 1
    },
    {
      name: 'CSS', duration: '30 mins', noOfQuestions: 20,
      id: 2
    },
    {
      name: 'JavaScript', duration: '45 mins', noOfQuestions: 25,
      id: 3
    },
    {
      name: 'Bootstrap', duration: '1 mins', noOfQuestions: 20,
      id: 4
    }
  ];

  getAllExams(): completedExams[] {
    return this.exams;
  }
}
