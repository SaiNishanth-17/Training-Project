import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExamTopicService } from '../../Services/exam-topic-service';

@Component({
  selector: 'app-available-exams',
  imports: [CommonModule],
  templateUrl: './availableexams-component.html',
  styleUrls: ['./availableexams-component.css'],
})
export class AvailableexamsComponent {
  available: any[] = [];
  active: any;

  constructor(
    private examtopicservice: ExamTopicService
  ) {}

  ngOnInit() {
    this.examtopicservice.getSubjects().subscribe((subjects) => {
  this.available = subjects
    .map((s) => ({
      name: s.subjectName,
      Description: s.description,
      isActive: s.isActive,
      subtopics: [],
    }))
    .filter((exam) => exam.isActive);
});


    // console.log(this.available);
  }

  // AvailableExams() {
  //   this.available = this.availableExams.displayAvailableExams();
  // }
}
