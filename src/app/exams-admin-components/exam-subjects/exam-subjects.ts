import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamTopicType } from '../../Models/examTopicType';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { QuestionbankServices } from '../../Services/questionbank-services';
@Component({
  selector: 'app-exam-subjects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-subjects.html',
  styleUrls: ['./exam-subjects.css'],
})
export class ExamSubjects implements OnInit {
  exams: ExamTopicType[] = [];
  showModal = false;
  editModal = false;

  newExam: ExamTopicType = {
    name: '',
    isActive: true,
    Description: '',
    subtopics: [],
  };

  editExamData: ExamTopicType = {
    name: '',
    isActive: true,
    Description: '',
    subtopics: [],
  };

  constructor(
    private examTopicService: ExamTopicService,
    private questionbank: QuestionbankServices
  ) {}

  ngOnInit() {
    this.exams = this.examTopicService.getExams();
  }

  addExam() {
    if (this.newExam.name.trim()) {
      if (!this.newExam.subtopics) this.newExam.subtopics = [];
      this.examTopicService.addExam({ ...this.newExam });
      this.questionbank.addCourse(this.newExam.name);
      this.exams = this.examTopicService.getExams();
      this.newExam = {
        name: '',
        isActive: true,
        Description: '',
        subtopics: [],
      };
      this.showModal = false;
    }
  }

  openEditModal(exam: ExamTopicType) {
    this.editExamData = { ...exam };
    (this.editExamData as any).__originalName = exam.name;
    this.editModal = true;
  }

  updateExam() {
    if (!this.editExamData.name.trim()) return;
    const originalName = (this.editExamData as any).__originalName || this.editExamData.name;
    if (!this.editExamData.subtopics) this.editExamData.subtopics = [];
    this.examTopicService.updateExam(this.editExamData, originalName);
    if (originalName !== this.editExamData.name) {
      this.questionbank.deleteCourse(originalName);
      this.questionbank.addCourse(this.editExamData.name);
    }
    this.exams = this.examTopicService.getExams();
    this.editModal = false;
  }

  confirmDelete(exam: ExamTopicType) {
    if (confirm(`Delete subject '${exam.name}'? This will also remove related questions.`)) {
      this.examTopicService.deleteExam(exam.name);
      this.questionbank.deleteCourse(exam.name);
      this.exams = this.examTopicService.getExams();
    }
  }
}
