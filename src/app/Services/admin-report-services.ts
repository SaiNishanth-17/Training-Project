import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AdminStats {
  totalStudents: number;
  totalExams: number;
  passRate: number;
}

interface StudentPerformance {
  name: string;
  avgScore: number;
  passRate: number;
}

interface SubjectPerformance {
  subjectName: string;
  avgScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminReportServices {
  private cachedStats: AdminStats | null = null;
  private readonly API_URL = 'http://localhost:8001/api/analytics/admin/stats';

  constructor(private http: HttpClient) { }

  async getAdminStats(): Promise<AdminStats> {
    if (this.cachedStats) {
      return this.cachedStats;
    }
    
    try {
      const data = await this.http.get<AdminStats>(this.API_URL).toPromise();
      this.cachedStats = data!;
      return data!;
    } catch (error) {
      console.error('Error fetching admin stats', error);
      return { totalStudents: 0, totalExams: 0, passRate: 0 };
    }
  }

  getStudentPerformance(): StudentPerformance[] {
    return [
      { name: "Sai Nishanth", avgScore: 72, passRate: 80 },
      { name: "Ayesha Khan", avgScore: 85, passRate: 90 },
      { name: "Ravi Sharma", avgScore: 65, passRate: 60 }
    ];
  }

  getSubjectPerformance(): SubjectPerformance[] {
    return [
      { subjectName: "Mathematics", avgScore: 71 },
      { subjectName: "Science", avgScore: 67 },
      { subjectName: "English", avgScore: 80 }
    ];
  }

  clearCache(): void {
    this.cachedStats = null;
  }
}