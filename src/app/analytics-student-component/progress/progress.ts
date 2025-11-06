import { Component, OnInit } from '@angular/core';
import { StudentReportService } from '../../Services/student-report-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.html',
  styleUrls: ['./progress.css']
})
export class Progress implements OnInit {
  progress = 0;

  constructor(private studentService: StudentReportService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    this.studentService.getProgress(userId).subscribe({
      next: (res) => (this.progress = Math.round(res.progress || 0)),
      error: (err) => console.error('Progress load failed:', err)
    });
  }
}