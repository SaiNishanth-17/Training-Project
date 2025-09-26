import { Injectable} from '@angular/core';
import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class StudentServices{
  

      private exams: completedExams[] = [
    {
      name: 'HTML', duration: '30 mins', noOfQuestions: 20, status: 'completed', score: 85,
      id: 1
    },
    {
      name: 'CSS', duration: '30 mins', noOfQuestions: 20, status: 'completed', score: 90,
      id: 2
    },
    {
      name: 'JavaScript', duration: '45 mins', noOfQuestions: 25, status: 'not-completed',
      id: 3
    },
    {
      name: 'Bootstrap', duration: '1 mins', noOfQuestions: 20, status: 'not-completed',
      id: 4
    }
  ];

  getAllExams(): completedExams[] {
    return this.exams;
  }

  

}
