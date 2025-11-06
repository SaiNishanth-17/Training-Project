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
  private subjectsApiUrl = 'http://localhost:8001/api/subjects';
  private totalSubjects: number = 0;
  private records: any[] = [];

constructor(private noOfExams: ExamTopicService, private http: HttpClient){}

  loadUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allUsers`).pipe(
      tap(data => {
        this.records = data.map(user => ({
          ...user,
          email: user.credentialId?.email || 'N/A'
        }));
      })
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
    const count = this.records.filter(r => r.role?.toLowerCase() === 'student').length;
    console.log('getTotalStudents:', count, 'records:', this.records.length);
    return count;
  }

  loadSubjects(): Observable<any[]> {
    return this.http.get<any[]>(this.subjectsApiUrl).pipe(
      tap(data => {
        this.totalSubjects = data.length;
        console.log('Subjects loaded:', data.length);
      })
    );
  }

  getTotalExams(): number {
    console.log('getTotalExams called, totalSubjects:', this.totalSubjects);
    return this.totalSubjects;
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
