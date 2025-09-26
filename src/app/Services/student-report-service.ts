import { Injectable } from '@angular/core';
import { Student } from '../Models/student-data';
import { completedExams } from '../Models/completedExams';

@Injectable({
  providedIn: 'root'
})
export class StudentReportService {
  
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


  private examDetails:completedExams[]=[
    {
      id: 1,
      name: "html",
      duration: "30 mins",
      status: 'completed' 
    },
    {
      id: 1,
      name: "css",
      duration: "20 mins",
      status: 'not-completed'
    },
    {
      id: 3,
      name: "JavaScript",
      duration: "30 mins",
      status: 'completed'
    },
    {
      id: 4,
      name: "bootstrap",
      duration: "45 mins",
      status: 'completed'
    }
  ]

  getProgress():number{
    let count=0;
    for(const exam of this.examDetails){
      if(exam.status==='completed'){
        count++;
      }
    }
    let completedPercentage=(count/this.examDetails.length)*100;
    return completedPercentage;

  }
}



