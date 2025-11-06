import { Injectable } from '@angular/core';
import { ExamTopicService } from './exam-topic-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {
  private apiUrl = 'http://localhost:8001/api/auth';
  private records: any[] = [
    { 
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
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

constructor(private noOfExams: ExamTopicService, private http: HttpClient){}

  loadUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allUsers`).pipe(
      tap(data => this.records = data)
    );
  }

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
    return this.records.filter(r => r.role === 'Student').length;
  }

  getTotalExams(): number {
    return this.noOfExams.exams.length;
  }



  getStats() {
    return [
      {
        label: 'Total Students',
        value: this.getTotalStudents(),
        icon: 'fas fa-users',
        color: 'purple',
      },
      {
        label: 'Total Subjects',
        value: this.getTotalExams(),
        icon: 'fa-solid fa-user-pen',
        color: 'blue',
      },
    ];
  }


}
