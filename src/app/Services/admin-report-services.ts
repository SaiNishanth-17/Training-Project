import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminReportServices {

  private readonly BASE_URL = 'http://localhost:8001/api/analytics/admin';

  constructor(private http: HttpClient) {}

  getAdminStats() {
    return this.http.get<any>(`${this.BASE_URL}/stats`);
  }

  getStudentPerformance() {
    return this.http.get<any>(`${this.BASE_URL}/students`);
  }

  getSubjectPerformance() {
    return this.http.get<any>(`${this.BASE_URL}/subjects`);
  }
}
