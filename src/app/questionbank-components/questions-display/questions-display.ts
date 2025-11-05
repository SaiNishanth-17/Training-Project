import { Component, OnInit } from '@angular/core';
import { Question } from '../../Models/question';
import { QuestionbankServices } from '../../Services/questionbank-services';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionGroup } from '../../Models/question-interface';

@Component({
  selector: 'app-questions-display',
  imports: [FormsModule, CommonModule],
  templateUrl: './questions-display.html',
  styleUrl: './questions-display.css',
})
export class QuestionsDisplay implements OnInit {
  selectedCourseName: string = ''; 
  courses: { name: string }[] = [];
  filterDifficulty: string = ''; 
  correctAnswer: string = '';
  isAddingNew: boolean = false;
  editingQuestion: Question | null | undefined;
  displayedQuestions: Question[] = [];
  newQuestion!: QuestionGroup;
  isAddingModalOpen: boolean = false;
  newQuestionItem: Question = {
    id: 0,
    text: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    difficulty: 'Easy', 
  };

  constructor(private serviceQuestion: QuestionbankServices) {}

  ngOnInit(): void {
    this.courses = this.serviceQuestion.courses;
  }

  onCourseChange(selectedCourseName: string): void {
    this.selectedCourseName = selectedCourseName;
    this.displayedQuestions = [];
    this.filterDifficulty = '';
  }

  onDifficultyChange(level: string) {
    this.filterDifficulty = level;
    if (this.selectedCourseName && this.filterDifficulty) {
      const questions = this.serviceQuestion.getQuestionsForCourse(this.selectedCourseName);
      this.displayedQuestions = questions.filter((q) => q.difficulty === this.filterDifficulty);
    } else {
      this.displayedQuestions = [];
    }
  }

  getFilteredQuestions(): Question[] {
    if (!this.selectedCourseName || !this.filterDifficulty) return [];
    return this.displayedQuestions;
  }

  getCharFromIndex(i: number): string {
    return String.fromCharCode(65 + i);
  }

  editQuestion(question: Question): void {
    this.editingQuestion = this.serviceQuestion.deepCloneQuestion(question);
    this.correctAnswer = this.editingQuestion.correctAnswer;
    this.isAddingNew = false;
  }

  saveQuestion(): void {
    if (!this.editingQuestion) return;
    this.serviceQuestion.saveQuestion(this.editingQuestion, this.selectedCourseName);
    this.editingQuestion = null;
    this.onDifficultyChange(this.filterDifficulty);
  }

  cancelEdit(): void {
    this.correctAnswer = '';
    this.isAddingNew = false;
    this.editingQuestion = null;
  }

  deleteQuestion(id: number): void {
    this.serviceQuestion.deleteQuestion(id, this.selectedCourseName);
    this.onDifficultyChange(this.filterDifficulty);
  }
  trackByOptions(index: number, option: string): number {
    return index;
  }

  addQuestion() {
    this.editingQuestion = null;
    this.cancelAdd();

    if (this.filterDifficulty) {
        this.newQuestionItem.difficulty = this.filterDifficulty as 'Easy' | 'Medium' | 'Hard';
    } else {
        this.newQuestionItem.difficulty = 'Easy';
    }

    this.isAddingModalOpen = true;
  }

  cancelAdd(): void {
    this.isAddingModalOpen = false;
    this.correctAnswer = '';
    this.newQuestionItem = {
      id: 0,
      text: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      difficulty: 'Easy',
    };
  }

  private validateNewQuestion(): boolean {
    const q = this.newQuestionItem;
    if (!q.text || q.text.trim() === '') {
      alert('Please enter the Question Text.');
      return false;
    }
    if (!q.difficulty) {
      alert('Please select the Difficulty level.');
      return false;
    }
    for (let i = 0; i < q.options.length; i++) {
      if (!q.options[i] || q.options[i].trim() === '') {
        alert(`Please enter Option ${this.getCharFromIndex(i)}.`);
        return false;
      }
    }
    if (q.correctAnswer === undefined ) {
      alert('A correct answer must be entered.');
      return false;
    }       
    return true;
  }

  saveNewQuestion(): void {
    if (!this.validateNewQuestion()) {
      return;
    }
    
    this.newQuestionItem.correctAnswer = this.correctAnswer;
    const questionToAdd: Question = this.serviceQuestion.deepCloneQuestion(this.newQuestionItem);
    this.serviceQuestion.addQuestion(questionToAdd, this.selectedCourseName);
    this.cancelAdd();
    this.onDifficultyChange(this.filterDifficulty);
  }

  questionsCountForSelectedDifficulty(): number {
    if (!this.selectedCourseName || !this.filterDifficulty) return 0;
    const questions = this.serviceQuestion.getQuestionsForCourse(this.selectedCourseName);
    return questions.filter((q) => q.difficulty === this.filterDifficulty).length;
  }

  isAddDisabled(): boolean {
    if (!this.selectedCourseName || !this.filterDifficulty) return true;
    return this.questionsCountForSelectedDifficulty() >= 10;
  }
}