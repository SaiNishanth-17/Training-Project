import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamStateService } from '../../Services/exam-state';
import { ExamTopicType } from '../../Models/examTopicType';
@Component({
  selector: 'app-exam-topic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-topic.html',
  styleUrls: ['./exam-topic.css']
})
export class ExamTopic {
  @Input() exam!: ExamTopicType;

  constructor(private router: Router, private examState: ExamStateService) {}

  onOpenSubtopicManager() {
    this.examState.setExam(this.exam);
    this.router.navigate(['admin-dashboard/manage-subtopics', this.exam.name]);
  }
}
