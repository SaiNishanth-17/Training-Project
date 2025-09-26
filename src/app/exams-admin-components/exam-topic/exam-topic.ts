import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExamTopicType } from '../../Models/examTopicType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-exam-topic',
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-topic.html',
  styleUrl: './exam-topic.css'
})
export class ExamTopic {
  @Input() exam!: ExamTopicType;
  @Output() deleteExam = new EventEmitter<ExamTopicType>();
  @Output() updateExam = new EventEmitter<ExamTopicType>();
  updateTopic: ExamTopicType = {
    name: '',
    Description: '',
    TimeLimit: 0,
    isActive: false,
    noOfQuestions: 0
  };
  onDeleteExam() {
    this.deleteExam.emit(this.exam);
  }
  onEditExamClick() {
    this.updateTopic = { ...this.exam };
    const modalElement = document.getElementById('editTopicModal_' + this.exam.name);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); 
      modal.show();
    }
  }
  onEditExamSubmit() {
    this.updateExam.emit(this.updateTopic);
    const modalElement = document.getElementById('editTopicModal_' + this.exam.name);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }
}
