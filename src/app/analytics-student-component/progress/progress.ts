import { Component, OnInit } from '@angular/core';
import { StudentReportService } from '../../Services/student-report-service';


@Component({
  selector: 'app-performance-report',
  imports: [],
  templateUrl: './progress.html',
  styleUrl: './progress.css'
})
export class Progress implements OnInit {
  ngOnInit(): void {
    this.calculateProgress();
  }

  constructor(private progressService:StudentReportService){}
  
  progress:number=0;

  calculateProgress(){
    this.progress=this.progressService.getProgress();
  }



}
