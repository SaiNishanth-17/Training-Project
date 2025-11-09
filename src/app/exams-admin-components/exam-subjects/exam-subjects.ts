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
    subjectName: '',
    isActive: true,
    description: '',
    subtopics: [],
  };

  editExamData: ExamTopicType = {
    subjectName: '',
    isActive: true,
    description: '',
    subtopics: [],
  };

  constructor(
    private examTopicService: ExamTopicService,
    private questionbank: QuestionbankServices
  ) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.examTopicService.getSubjects().subscribe((data) => {
      this.exams = data;
    });
  }

  addExam() {
    if (this.newExam.subjectName.trim()) {
      this.examTopicService.addExam(this.newExam).subscribe(() => {
        this.questionbank.addCourse(this.newExam.subjectName);
        this.loadSubjects();
        this.newExam = {
          subjectName: '',
          isActive: true,
          description: '',
          subtopics: [],
        };
        this.showModal = false;
      });
    }
  }

  openEditModal(exam: ExamTopicType) {
    this.editExamData = { ...exam };
    (this.editExamData as any).__originalName = exam.subjectName;
    this.editModal = true;
  }

  updateExam() {
    if (!this.editExamData.subjectName.trim()) return;
    const originalName = (this.editExamData as any).__originalName || this.editExamData.subjectName;
    this.examTopicService.updateExam(this.editExamData, originalName).subscribe(() => {
      if (originalName !== this.editExamData.subjectName) {
        this.questionbank.deleteCourse(originalName);
        this.questionbank.addCourse(this.editExamData.subjectName);
      }
      this.loadSubjects();
      this.editModal = false;
    });
  }

  confirmDelete(exam: ExamTopicType) {
    if (confirm(`Delete subject '${exam.subjectName}'? This will also remove related questions.`)) {
      this.examTopicService.deleteExam(exam.subjectName).subscribe(() => {
        this.questionbank.deleteCourse(exam.subjectName);
        this.loadSubjects();
      });
    }
  }
}
