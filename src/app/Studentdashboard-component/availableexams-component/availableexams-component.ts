
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { Topics } from '../../exams-admin-components/topics/topics';

@Component({
  selector: 'app-available-exams',
  imports:[CommonModule],
  templateUrl: './availableexams-component.html',
  styleUrls: ['./availableexams-component.css']
})
export class AvailableexamsComponent {

 
available: any[] = [];
  active: any;

  constructor(private availableExams: StudentServices,
    private examtopicservice:ExamTopicService
  ) {}

  ngOnInit() {
    this.available = this.examtopicservice.exams.filter(exam=>exam.isActive);
    
    // console.log(this.available);
  }
  

  // AvailableExams() {
  //   this.available = this.availableExams.displayAvailableExams();
  // }
  
  }

