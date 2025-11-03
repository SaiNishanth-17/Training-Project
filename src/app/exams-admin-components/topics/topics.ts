import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamTopic } from '../exam-topic/exam-topic';
import { ExamTopicType } from '../../Models/examTopicType';
import { ExamTopicService } from '../../Services/exam-topic-service';
@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule, FormsModule, ExamTopic],
  templateUrl: './topics.html',
  styleUrls: ['./topics.css']
})
export class Topics implements OnInit {
  exams: ExamTopicType[] = [];
  showModal = false;

  newExam: ExamTopicType = {
    name: '',
    isActive: true,
    Description: '',
    subtopics: [] 
  };

  constructor(private examTopicService: ExamTopicService) {}

  ngOnInit() {
    this.exams = this.examTopicService.getExams();
  }

  addExam() {
    if (this.newExam.name.trim()) {
      this.examTopicService.addExam({ ...this.newExam });
      this.exams = this.examTopicService.getExams();
      this.newExam = {
        name: '',
        isActive: true,
        Description: '',
        subtopics: []
      };
      this.showModal = false;
    }
  }
}
