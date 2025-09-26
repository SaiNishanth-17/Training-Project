import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamCard } from '../exam-card/exam-card';
import { examType } from '../../Models/examType';

@Component({
  selector: 'app-display-exams',
  imports: [CommonModule, ExamCard],
  templateUrl: './display-exams.html',
  styleUrl: './display-exams.css'
})
export class DisplayExams {
  exams: examType[] = [
    {
      id: 1,
      name: "HTML",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 1
    },
    {
      id: 2,
      name: "CSS",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 20
    },
    {
      id: 3,
      name: "JavaScript",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 40
    },
    {
      id: 4,
      name: "Bootstrap",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 30
    }
  ];
}
