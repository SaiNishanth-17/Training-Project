import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrls: ['./leaderboard.css']
})
export class Leaderboard implements OnInit {
  topScorers: Array<{ name: string; avgScore?: number; totalExams?: number; score?: number }> = [];

  constructor(private studentService: StudentReportService) {}

  ngOnInit(): void {
    this.studentService.getLeaderboard().subscribe({
      next: (rows) => (this.topScorers = rows || []),
      error: (err) => console.error('Leaderboard load failed:', err)
    });
  }
}