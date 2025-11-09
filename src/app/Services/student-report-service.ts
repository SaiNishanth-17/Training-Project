import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentReportService {
  private readonly BASE = 'http://localhost:8001/api/analytics/student';

  constructor(private http: HttpClient) {}

  private getUserId(): string | null {
    const token = sessionStorage.getItem('authToken');
    if (!token) return null;

    const part = token.split('.')[1];
    if (!part) return null;

    try {
      const decoded = JSON.parse(atob(part));
      return decoded.id || null;  // ✅ important
    } catch (err) {
      console.error('JWT decode failed:', err);
      return null;
    }
  }

  getOverallStats(): Observable<{ totalExams: number; avgScore: number; passingRate: number }> {
    const userId = this.getUserId();
    return this.http.get<{ totalExams: number; avgScore: number; passingRate: number }>(
      `${this.BASE}/overall/${userId}`
    );
  }

  getProgress(): Observable<{ progress: number }> {
    const userId = this.getUserId();
    return this.http.get<{ progress: number }>(
      `${this.BASE}/progress/${userId}`
    );
  }

  getDifficultyAnalytics(): Observable<Array<{ _id: 'basic'|'intermediate'|'advanced'; avgScore: number; attempts: number }>> {
    const userId = this.getUserId();
    return this.http.get<Array<{ _id: 'basic'|'intermediate'|'advanced'; avgScore: number; attempts: number }>>(
      `${this.BASE}/difficulty/${userId}`
    );
  }

  getLeaderboard(): Observable<Array<{ name: string; avgScore?: number; totalExams?: number; score?: number }>> {
    return this.http.get<Array<{ name: string; avgScore?: number; totalExams?: number; score?: number }>>(
      `${this.BASE}/leaderboard`
    );
  }
}
