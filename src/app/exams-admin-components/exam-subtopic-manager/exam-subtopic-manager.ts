import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
import { ExamTopicType } from '../../Models/examTopicType';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { Subtopic } from '../../Models/examTopicType';
@Component({
  selector: 'app-exam-subtopic-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-subtopic-manager.html',
  styleUrls: ['./exam-subtopic-manager.css']
})
export class ExamSubtopicManagerComponent implements OnInit {
  exam: ExamTopicType | null = null;
  newSubtopics: Subtopic[] = [];

  newSubtopic: Subtopic = {
    name: '',
    difficulty: 'Easy',
    isActive: true
  };

  editSubtopic: Subtopic = {
    name: '',
    difficulty: 'Easy',
    isActive: true
  };

  editIndex: number = -1;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamTopicService
  ) {}

  ngOnInit() {
    const examName = this.route.snapshot.paramMap.get('examName');
    this.exam = this.examService.getExams().find(e => e.name === examName) || null;
    this.newSubtopics = this.exam?.subtopics?.map(s => ({ ...s })) || [];
  }

  openSubtopicModal(): void {
    const modalElement = document.getElementById('addSubtopicModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onSubmitSubtopic(): void {
    this.newSubtopics.push({ ...this.newSubtopic });
    this.newSubtopic = {
      name: '',
      difficulty: 'Easy',
      isActive: true
    };
    const modalElement = document.getElementById('addSubtopicModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) modal.hide();
    }
  }

  openEditSubtopicModal(index: number): void {
    this.editIndex = index;
    this.editSubtopic = { ...this.newSubtopics[index] };
    const modalElement = document.getElementById('editSubtopicModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onEditSubtopicSubmit(): void {
    if (this.editIndex !== -1) {
      this.newSubtopics[this.editIndex] = { ...this.editSubtopic };
      this.newSubtopics = [...this.newSubtopics]; 
      this.editIndex = -1;
      const modalElement = document.getElementById('editSubtopicModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
      }
    }
  }

  deleteSubtopic(index: number): void {
    this.newSubtopics.splice(index, 1);
  }

  saveSubtopics(): void {
    if (this.exam) {
      this.exam.subtopics = [...this.newSubtopics];
    }
  }

  getActiveCount(): number {
    return this.newSubtopics.filter(s => s.isActive).length;
  }

  getInactiveCount(): number {
    return this.newSubtopics.filter(s => !s.isActive).length;
  }
}
