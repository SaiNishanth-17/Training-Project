import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-student-report',
  imports: [CommonModule],
  templateUrl: './student-report.html',
  styleUrl: './student-report.css'
})
export class StudentReport {
  studentScores: { name: string; average: number; }[]=[];
 
 
  constructor(private myServices:StudentReportService){}
  ngOnInit(): void {
    this.getAverage();
  }

  getAverage():void{
    this.studentScores=this.myServices.getStudentAverages();
  }




}
