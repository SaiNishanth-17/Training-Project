import { Injectable } from '@angular/core';
import { ExamDataService } from './exam-data-service';

import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class CompletedExamService {
  
submittedAnswers: string[] = [];
  examQuestions: any[] = [];
  completedExamList: completedExams[] = [];
  private examCounter = 1;

  constructor(private examDataService: ExamDataService) {}

  initializeExamData(): void {
    this.submittedAnswers = this.examDataService.getAnswers();
    this.examQuestions = this.examDataService.getQuestions();
  }
  

  calculateScore(): [number,number] {
    
    let attempted = 0;
        let correct = 0;

        for (let i = 0; i < this.examQuestions.length; i++) {
          if (this.submittedAnswers[i] !== '') {
            attempted++;
          }
          if (this.submittedAnswers[i] === this.examQuestions[i].answer) {
            correct++;
          }
        }

        return [attempted, correct];
 

  }

  addCompletedExam(examName: string, durationMinutes: number): void {
    this.initializeExamData();
    const [attempted,correct] = this.calculateScore();
    const score=correct*10;
    const completedExam: completedExams = {
      id: this.examCounter++,
      name: examName,
      noOfQuestions: this.examQuestions.length,
      duration: `${durationMinutes} minutes`,
      score: score
    };
    this.completedExamList.push(completedExam);
  }

  getCompletedExams(): completedExams[] {
    return this.completedExamList;
  }

  




}
