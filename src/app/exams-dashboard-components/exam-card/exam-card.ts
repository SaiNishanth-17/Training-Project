import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exam } from '../../Models/studentExam';
import {  Router } from '@angular/router';
import { examType } from '../../Models/examType';
import { ExamDataService } from '../../Services/exam-data-service';

@Component({
  selector: 'app-exam-card',
  imports: [CommonModule],
  templateUrl: './exam-card.html',
  styleUrl: './exam-card.css'
})

export class ExamCard {
  @Input() exam!: examType;
    constructor(private router:Router,private examDataService: ExamDataService){}
    displayTopics() {
      this.examDataService.setTime(this.exam.time);
      this.router.navigate([`student-dashboard/exam`,  this.exam.name]);
      // this.router.navigateByUrl(`/${this.exam.name}`);
    }
}
