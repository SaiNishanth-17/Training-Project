import { Component } from '@angular/core';
import { StudentReportService } from '../../Services/student-report-service';
@Component({
  selector: 'app-studentprogress-component',
  imports: [],
  templateUrl: './studentprogress-component.html',
  styleUrl: './studentprogress-component.css'
})
export class StudentprogressComponent {
   
  progress: number | null = null;
  // progressData: any;

  constructor(private studentreportservice:StudentReportService) {}

  ngOnInit() {
    this.progress = this.studentreportservice.getProgress();
    // this.progressData = this.studentprogress.getProgressPercentage();
  }

}