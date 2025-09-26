import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ExamDetails {
  studentName: string;
  examId: string;
  totalQuestions: number;
  attemptedQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalScore: number;
}

@Component({
  selector: 'app-exam-details-modal',
  imports: [CommonModule,RouterModule],
  templateUrl: './exam-details-modal.html',
  styleUrl: './exam-details-modal.css'
})

export class ExamDetailsModal {
  @Input() isOpen = false;
  @Input() examDetails!: ExamDetails;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
