import { Component, OnInit } from '@angular/core';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-studentprogress-component',
  templateUrl: './studentprogress-component.html',
  styleUrls: ['./studentprogress-component.css']
})
export class StudentprogressComponent implements OnInit {

  progress: number = 0;

  constructor(private studentreportservice: StudentReportService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    this.studentreportservice.getProgress(userId).subscribe({
      next: res => {
        this.progress = Math.round(res.progress || 0);
      },
      error: err => console.error('Progress load failed:', err)
    });
  }
}
