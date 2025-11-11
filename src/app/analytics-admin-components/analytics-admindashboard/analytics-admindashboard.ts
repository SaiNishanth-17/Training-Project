import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AdminServices } from '../../Services/admin-services';

@Component({
  selector: 'app-analytics-admindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-admindashboard.html',
  styleUrls: ['./analytics-admindashboard.css']
})
export class AnalyticsAdmindashboard implements OnInit {

  totalStudents: number = 0;
  totalExams: number = 0;
  passRate: number = 0;
  selectedStudent: any = null;
  students: any[] = [];
  subjects: any[] = [];
  currentSubjectName: string = 'Mathametics';

  constructor(private http: HttpClient, private adminService: AdminServices) {}

  ngOnInit(): void {
    this.loadAdminData();
    this.loadStudentPerformance();
    this.loadSubjectPerformance();
  }

  loadAdminData(): void {
    this.adminService.loadSubjects().subscribe({
      next: () => this.adminService.loadUsers().subscribe({
        next: () => {
          const stats = this.adminService.getStats();
          this.totalStudents = stats.find(s => s.label === 'Total Students')?.value || 0;
          this.totalExams = stats.find(s => s.label === 'Total Subjects')?.value || 0;
        }
      }),
      error: () => console.error('Failed to load admin data')
    });
    
    // Still load pass rate from analytics API
    this.loadAdminStats();
  }



  loadStudentPerformance(): void {
    this.http.get<any[]>('http://localhost:8001/api/analytics/admin/students').subscribe({
      next: (data) => {
        this.students = data || [];
      },
      error: (err) => {
        console.error('Error fetching student performance data', err);
        this.students = [];
      }
    });
  }

  loadSubjectPerformance(): void {
    this.http.get<any[]>('http://localhost:8001/api/analytics/admin/subjects').subscribe({
      next: (data) => {

        // Map old subject names to current names and remove duplicates
        const mappedSubjects = data?.map(subject => ({
          ...subject,
          subjectName: this.mapSubjectName(subject.subjectName)
        })) || [];
        
        // Remove duplicates based on mapped subjectName
        const uniqueSubjects = mappedSubjects.filter((subject, index, self) => 
          index === self.findIndex(s => s.subjectName === subject.subjectName)
        );
        this.subjects = uniqueSubjects;
        // Only update totalExams if we have performance data
        if (uniqueSubjects.length > 0) {
          this.totalExams = uniqueSubjects.length;
        }
      },
      error: (err) => {
        console.error('Error fetching subject performance data', err);
        this.subjects = [];
        this.totalExams = 0;
      }
    });
  }

  loadAdminStats(): void {
    this.http.get<any>('http://localhost:8001/api/analytics/admin/stats').subscribe({
      next: (data) => {

        this.passRate = data.passRate || 0;
      },
      error: (err) => {
        console.error('Error fetching admin analytics data', err);
      }
    });
  }

  private mapSubjectName(oldName: string): string {
    // Map all variations to the current subject name
    const variations = ['Maths', 'maths', 'Mathematics', 'mathematics', 'Mathametics', 'mathametics'];
    if (variations.some(v => v.toLowerCase() === oldName.toLowerCase())) {
      return this.currentSubjectName;
    }
    return oldName;
  }

  selectStudent(student: any): void {
    this.selectedStudent = student;
  }

  closeModal(): void {
    this.selectedStudent = null;
  }
}