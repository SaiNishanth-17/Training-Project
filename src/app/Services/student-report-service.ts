import { Injectable } from '@angular/core';
import { Student } from '../Models/student-data';
import { CompletedExamService } from './completed-exam-service';
import { ExamQuestionsService } from './exam-questions-service';

@Injectable({
  providedIn: 'root'
})
export class StudentReportService {

  constructor(private completedExamService:CompletedExamService,
    private examQuestionService:ExamQuestionsService
  ){}
  
  studentScoreDetails:Student[] = [
    { name: 'Alice', scores: [96,98,45 ]},
    { name: 'Bob', scores: [92,89,78] },
    { name: 'Charlie', scores: [89,87,98] },
    { name: 'Diana', scores: [87,78,55] },
    { name: 'Ethan', scores: [99,87,67 ]}
  ];

  getLeaderboard():{name:string; score:number;}[]{
    return this.studentScoreDetails.map(student => {
      const total = student.scores.reduce((sum, score) => sum + score, 0);
      
      return {
        name: student.name,
        score: total
      };
    })
    .sort((a, b) => b.score - a.score).slice(0,3); 
  }

  
  // private studentScores: Student[] = [
  //   { name: 'Alice', scores: [95, 88, 92] },
  //   { name: 'Bob', scores: [85, 90, 87] }
  // ];


 

  getStudentAverages(): { name: string; average: number }[] {
    
    return this.studentScoreDetails.map(student => {
      const total = student.scores.reduce((sum, score) => sum + score, 0);
      const average = total / student.scores.length;
      return {
        name: student.name,
        average: parseFloat(average.toFixed(2)) // optional: round to 2 decimals
      };
    });
  }


  

  getProgress():number{
    let completed_exams=this.completedExamService.getCompletedExams().length;
    console.log(completed_exams);
    let total_exams=this.examQuestionService.exams.length;
    console.log(total_exams)
    
    let completedPercentage=(completed_exams/total_exams)*100;
    console.log(completedPercentage);
    return completedPercentage;

  }
}



