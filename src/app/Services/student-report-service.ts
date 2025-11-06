import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentReportService {
  private readonly BASE = 'http://localhost:8001/api/analytics/student';

  constructor(private http: HttpClient) {}

  // Top cards
  getOverallStats(userId: string): Observable<{ totalExams: number; avgScore: number; passingRate: number }> {
    return this.http.get<{ totalExams: number; avgScore: number; passingRate: number }>(`${this.BASE}/overall/${userId}`);
  }

  // Progress bar
  getProgress(userId: string): Observable<{ progress: number }> {
    return this.http.get<{ progress: number }>(`${this.BASE}/progress/${userId}`);
  }

  // Difficulty analytics (used by exam-wise analysis chart below)
  getDifficultyAnalytics(userId: string): Observable<Array<{ _id: 'basic'|'intermediate'|'advanced'; avgScore: number; attempts: number }>> {
    return this.http.get<Array<{ _id: 'basic'|'intermediate'|'advanced'; avgScore: number; attempts: number }>>(
      `${this.BASE}/difficulty/${userId}`
    );
  }

  // Leaderboard (global)
  getLeaderboard(): Observable<Array<{ name: string; avgScore?: number; totalExams?: number; score?: number }>> {
    // If you prefer the student-specific leaderboard, keep this.
    // If you want admin leaderboard instead, point to /api/analytics/admin/students
    return this.http.get<Array<{ name: string; avgScore?: number; totalExams?: number; score?: number }>>(
      `${this.BASE}/leaderboard`
    );
  }
}
