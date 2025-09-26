import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-wise-analysis',
  imports: [CommonModule],
  templateUrl: './exam-wise-analysis.html',
  styleUrl: './exam-wise-analysis.css'
})
export class ExamWiseAnalysis {
examStats = [
    { exam: 'E1', correct: 80 },
    { exam: 'E2', correct: 65 },
    { exam: 'E3', correct: 90 }
  ];
}
