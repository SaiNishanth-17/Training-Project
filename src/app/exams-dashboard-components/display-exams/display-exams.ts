import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamCard } from '../exam-card/exam-card';
import { examType } from '../../Models/examType';
import { ExamQuestionsService } from '../../Services/exam-questions-service';

@Component({
  selector: 'app-display-exams',
  imports: [CommonModule, ExamCard],
  templateUrl: './display-exams.html',
  styleUrl: './display-exams.css'
})
export class DisplayExams implements OnInit {
  exams!: examType[];

  constructor(private questionsService: ExamQuestionsService) {}

 ngOnInit(): void {
  this.exams = this.questionsService.getExamTopics(); 
}

}
