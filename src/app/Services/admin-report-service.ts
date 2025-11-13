import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminReportService {
  private readonly BASE_URL = 'http://localhost:8001/api/analytics/admin';
  // private readonly AUTH_URL = 'http://localhost:8001/api/auth';
  // private readonly SUBJECTS_URL = 'http://localhost:8001/api/subjects';

  constructor(private http: HttpClient) {}

  getAdminStats(): Observable<{totalStudents:number, totalExams:number, passRate: number }> {
    return this.http.get<{totalStudents:number, totalExams:number, passRate: number }>(`${this.BASE_URL}/stats`);
  }

  getStudentAnalysis(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/students`);
  }

  getSubjectAnalysis(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/subjects`);
  }

  // getTotalStudents(): Observable<number> {
  //   return this.http.get<any[]>(`${this.AUTH_URL}/allUsers`).pipe(
  //     map(users => users.filter(user => user.role?.toLowerCase() === 'student').length)
  //   );
  // }

  // getTotalSubjects(): Observable<number> {
  //   return this.http.get<any[]>(this.SUBJECTS_URL).pipe(
  //     map(subjects => subjects.length)
  //   );
  // }
}