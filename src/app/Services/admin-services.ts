import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

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

  loadSubjects(): Observable<any[]> {
    return this.http.get<any[]>(this.subjectsApiUrl).pipe(
      tap(data => this.totalSubjects = data.length)
    );
  }

  updateUserRole(userId: string, newRole: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/role/${userId}`, { role: newRole });
  }

  deleteUserById(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/${userId}`);
  }

  getRecords() {
    return this.records;
  }

  getStats() {
    return [
      {
        label: 'Total Students',
        value: this.records.filter(r => r.role?.toLowerCase() === 'student').length,
        icon: 'fas fa-users',
        color: 'purple',
      },
      {
        label: 'Total Subjects',
        value: this.totalSubjects,
        icon: 'fa-solid fa-user-pen',
        color: 'blue',
      },
    ];
  }
}
