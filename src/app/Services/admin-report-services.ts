import { Injectable } from '@angular/core';
import { Student } from '../Models/student-data';
import { ExamTopicType } from '../Models/examTopicType';
import { ScoreAnalytics} from '../Models/scoreAnalysis';

@Injectable({
  providedIn: 'root'
})
export class AdminReportServices {
  studentScoreDetails:Student[] = [
      { name: 'Alice', scores: [96,98,45 ]},
      { name: 'Bob', scores: [92,89,78] },
      { name: 'Charlie', scores: [89,87,98] },
      { name: 'Diana', scores: [87,78,55] },
      { name: 'Ethan', scores: [99,87,67 ]}
    ];

    exams: ExamTopicType[] = [
        {
          subjectName: "HTML",
          isActive: true,
          description: "Structure and semantics of web pages using HTML",
        },
        {
          subjectName: "CSS",
          isActive: true,
          description: "Styling and layout techniques using Cascading Style Sheets",
        },
        {
          subjectName: "JavaScript",
          isActive: true,
          description: "Client-side scripting and dynamic web interactions",
        },
        {
          subjectName: "Bootstrap",
          isActive: true,
          description: "Responsive design and UI components using Bootstrap framework",
        }
      ];
  avgScore: any;

    numberOfStudents():number{
      return this.studentScoreDetails.length;
    }

    numberOfExamsAvailable():number{
      return this.exams.length;
    }

    averageScore():number{
      let totalScore = 0;
      let totalCount = 0;

      for (const student of this.studentScoreDetails) {
        totalScore += student.scores.reduce((sum, score) => sum + score, 0);
        totalCount += student.scores.length;
      }

      return totalCount > 0 ? parseFloat((totalScore / totalCount).toFixed(2)) : 0;
    }

    
  
    getScoreAnalytics(): ScoreAnalytics[] {
      return this.studentScoreDetails.map(student => {
        const total = student.scores.reduce((sum, score) => sum + score, 0);
        const count = student.scores.length;
        const passCount = student.scores.filter(score => score >= 70).length;

        const avgScore = parseFloat((total / count).toFixed(2));
        const passRate = parseFloat(((passCount / count) * 100).toFixed(2));

        return {
          name: student.name,
          average: avgScore,
          passrate: passRate
        };
      });
    }

    examsScore = [
  {
    name: 'HTML',
    avgScore: 87,
    highest: 96,
    passRate: 80
  },
  {
    name: 'CSS',
    avgScore: 74,
    highest: 92,
    passRate: 60
  },
  {
    name: 'JavaScript',
    avgScore: 81,
    highest: 98,
    passRate: 75
  },
  {
    name: 'Bootstrap',
    avgScore: 70,
    highest: 87,
    passRate: 55
  }
];

}

