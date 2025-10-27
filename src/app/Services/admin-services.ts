import { Injectable } from '@angular/core';
import { ExamTopicService } from './exam-topic-service';
import { first } from 'rxjs-compat/operator/first';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {
  constructor(private noOfExams: ExamTopicService){}
  private records = [
    { 
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smaith.com',
        role: 'Student',
    },
    { 
        firstName: 'Emma',
        lastName: 'Johnson',
        email: 'emma@johnson.com',
        role: 'Student',
    },
    { 
        firstName: 'Michael',
        lastName: 'Brown',
        email: 'michael@brown.com',
        role: 'Student',
    },
    { 
        firstName: 'Passah',
        lastName: 'Davis',
        email: 'passah@davis.com',
        role: 'Admin',
    },
    { 
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david@wilson.com',
        role: 'Admin',
    }  
  ];

  
getrecords() {
    return this.records;
  }

  /** Update a user's role by email. Returns true if updated, false if not found. */
  updateUserRole(email: string, newRole: string): boolean {
    const idx = this.records.findIndex(r => r.email === email);
    if (idx === -1) return false;
    this.records[idx].role = newRole;
    return true;
  }

  /** Delete a user record by email. Returns true if deleted. */
  deleteUserByEmail(email: string): boolean {
    const idx = this.records.findIndex(r => r.email === email);
    if (idx === -1) return false;
    this.records.splice(idx, 1);
    return true;
  }

  getTotalStudents(): number {
    return this.records.length;
  }

  getTotalExams(): number {
    return this.noOfExams.exams.length;
  }

  // getFailedStudents(): number {
  //   return this.records.filter(exam => exam.status === 'Failed').length;
  // }

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
            label: 'Total Exam Topics',
            value: 20, //this.getTotalExams(),
            icon: 'fa-solid fa-user-pen',
            color: 'blue',
            change: 'No change from last month',
            trend: 'positive'
          },
          {
            label: 'Failed Students',
            // value: this.getFailedStudents(),
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
