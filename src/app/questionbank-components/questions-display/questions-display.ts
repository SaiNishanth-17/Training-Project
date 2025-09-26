import { Component, OnInit } from '@angular/core';
import { Question } from '../../Models/question';
import { QuestionbankServices } from '../../Services/questionbank-services';

// import { Course } from '../../Models/course';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-display',
  imports: [FormsModule,CommonModule],
  templateUrl: './questions-display.html',
  styleUrl: './questions-display.css'
})
export class QuestionsDisplay implements OnInit {
  selectedCourseName: string = "HTML";
  courses: {name:string}[] = [];
  filterDifficulty: string = "All";
  searchText: string = "";
  correctAnswerIndex: number = 0;
  isAddingNew: boolean = false;
  subtopicsInput: string = "";
  editingQuestion: Question | null | undefined;
  displayedQuestions: Question[] = [];
  // displayedQuestionsCopy: Question[] = [];

  constructor(private serviceQuestion: QuestionbankServices) { }

  ngOnInit(): void {
    this.courses = this.serviceQuestion.courses;
    this.onCourseChange(this.selectedCourseName);
  }

  onCourseChange(selectedCourseName: string): void {
    this.displayedQuestions = this.serviceQuestion.getQuestionsForCourse(selectedCourseName);
    // this.displayedQuestionsCopy=this.displayedQuestions;
  }

  getFilteredQuestions(): Question[] {
    return this.serviceQuestion.filteredQuestions(this.displayedQuestions, this.filterDifficulty, this.searchText);
  }

  getCharFromIndex(i: number): string {
    return String.fromCharCode(65 + i);
  }

  editQuestion(question: Question): void {
    this.editingQuestion = this.serviceQuestion.deepCloneQuestion(question);
    this.correctAnswerIndex = this.editingQuestion.correctAnswerIndex;
    this.subtopicsInput = this.editingQuestion.subtopics.join(', ');
    this.isAddingNew = false;
  }

  saveQuestion(): void {
    if (!this.editingQuestion) return;
 
    this.editingQuestion.correctAnswerIndex = this.correctAnswerIndex;
    this.editingQuestion.subtopics = this.subtopicsInput
      .split(',')
      .map(s => s.trim())
      .filter(s => s);
 
    this.serviceQuestion.saveQuestion(this.editingQuestion,this.selectedCourseName);
    this.editingQuestion = null;
    this.onCourseChange(this.selectedCourseName);
   
  }

  cancelEdit(): void {
    this.subtopicsInput = '';
    this.correctAnswerIndex = 0;
    this.isAddingNew = false;
    this.editingQuestion = null;
  }

  deleteQuestion(id: number): void {
    this.serviceQuestion.deleteQuestion(id, this.selectedCourseName);
    this.onCourseChange(this.selectedCourseName);
  }
  trackByOptions(index: number, option: string): number {
    return index;
  }
}
