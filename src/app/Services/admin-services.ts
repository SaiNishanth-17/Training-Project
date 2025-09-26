import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {
  
  private recentExams = [
    { 
        id: '#EXAM-001', 
        student: 'John Smith', 
        date: '15 Mar 2025', 
        status: 'Passed',
        examDetails: {
          totalQuestions: 50,
          attemptedQuestions: 48,
          correctAnswers: 45,
          wrongAnswers: 3,
          totalScore: 90
        }
      },
      { 
        id: '#EXAM-002', 
        student: 'Emma Johnson', 
        date: '14 Mar 2025', 
        status: 'Passed',
        examDetails: {
          totalQuestions: 50,
          attemptedQuestions: 30,
          correctAnswers: 25,
          wrongAnswers: 5,
          totalScore: 50
        }
      },
      { 
        id: '#EXAM-003', 
        student: 'Michael Brown', 
        date: '13 Mar 2025', 
        status: 'Passed',
        examDetails: {
          totalQuestions: 50,
          attemptedQuestions: 50,
          correctAnswers: 42,
          wrongAnswers: 8,
          totalScore: 84
        }
      },
      { 
        id: '#EXAM-004', 
        student: 'Passah Davis', 
        date: '12 Mar 2025', 
        status: 'Failed',
        examDetails: {
          totalQuestions: 50,
          attemptedQuestions: 15,
          correctAnswers: 10,
          wrongAnswers: 5,
          totalScore: 20
        }
      },
      { 
        id: '#EXAM-005', 
        student: 'David Wilson', 
        date: '11 Mar 2025', 
        status: 'Failed',
        examDetails: {
          totalQuestions: 50,
          attemptedQuestions: 49,
          correctAnswers: 47,
          wrongAnswers: 2,
          totalScore: 94
        }
      }
  ];

  
getRecentExams() {
    return this.recentExams;
  }

  getTotalStudents(): number {
    return this.recentExams.length;
  }

  getFailedStudents(): number {
    return this.recentExams.filter(exam => exam.status === 'Failed').length;
  }

  private examStat=[
          {
            label: 'Total Students',
            value: this.getTotalStudents(),
            icon: 'fas fa-users',
            color: 'purple',
            change: '12.5% from last month',
            trend: 'positive'
          },
          {
            label: 'Total Exams',
            value: 20,
            icon: 'fa-solid fa-user-pen',
            color: 'blue',
            change: 'No change from last month',
            trend: 'positive'
          },
          {
            label: 'Failed Students',
            value: this.getFailedStudents(),
            icon: 'fas fa-shopping-cart',
            color: 'green',
            change: '10% from last month',
            trend: 'negative'
          }
        ];

        getExamStats(){
          return this.examStat;
        }


}
