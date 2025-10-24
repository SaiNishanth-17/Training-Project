import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamQuestionsService } from '../../Services/exam-questions-service';
import { ExamDataService } from '../../Services/exam-data-service';

@Component({
  selector: 'app-display-topic',
  imports: [CommonModule],
  templateUrl: './display-topic.html',
  styleUrl: './display-topic.css'
})
export class DisplayTopic implements OnInit {
  examName: string = '';
  topics: string[] = [];
  timeLimit: number = 0;
  noOfTopics: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private examService: ExamQuestionsService, private examData: ExamDataService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.examName = name ? name : '';
    const exams = this.examService.getExamTopics();
    const exam = exams.find((e: any) => e.name.toLowerCase() === this.examName?.toLowerCase());
    if (exam) {
      this.noOfTopics = exam.noOfTopics || 0;
      this.timeLimit = exam.time || 0;
      // create a simple list of topic labels (Topic 1 ... Topic N)
      this.topics = Array.from({ length: this.noOfTopics }, (_, i) => `Topic ${i + 1}`);
    } else {
      // fallback: if exam not found, navigate back to exams list
      this.router.navigate(['/student-dashboard/exam']);
    }
  }

  attemptExam(topicIndex: number) {
    // set exam time and navigate to the start route; ExamPage will pull the time from ExamDataService
    this.examData.setTime(this.timeLimit);
    // optionally pass the topic index in query params if needed later
    this.router.navigate([`/student-dashboard/exam`, this.examName, 'start'], { queryParams: { topic: topicIndex + 1 } });
  }

  goBack() {
    this.router.navigate(['/student-dashboard/exam']);
  }

}
