import { Component, OnInit } from '@angular/core';
import { Question } from '../../Models/question-interface';
import { QuestionbankServices } from '../../Services/questionbank-services';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-display',
  imports: [FormsModule, CommonModule],
  templateUrl: './questions-display.html',
  styleUrl: './questions-display.css',
})
export class QuestionsDisplay implements OnInit {
  selectedCourseName: string = '';
  courses: { subjectName: string }[] = [];
  filterDifficulty: 'basic' | 'intermediate' | 'advanced' | '' = '';
  
  apiErrorMessage: string | null = null;
  editingQuestion: Question | null | undefined;
  displayedQuestions: Question[] = [];
  isAddingModalOpen: boolean = false;
  correctAnswer: string = ''; 
  
  newQuestionItem: Question = {
    id: 0, 
    text: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    difficulty: 'basic'
  };
isAddingNew: boolean =false;

  constructor(private serviceQuestion: QuestionbankServices) {}

  ngOnInit(): void {
    this.serviceQuestion.getCourses().subscribe({
      next: (data) => {
        this.courses = data.map(sub=>sub.subjectName);
      },
      error: (err) => {
        console.error('API Error fetching subjects:', err);
        this.apiErrorMessage = 'Failed to fetch courses. Check API server status.';
      }
    });
  }

  onCourseChange(selectedCourseName: string): void {
    this.selectedCourseName = selectedCourseName;
    this.displayedQuestions = [];
    this.filterDifficulty = '';
    this.apiErrorMessage = null;
  }

  // READ (GET) OPERATION
  onDifficultyChange(level: 'basic' | 'intermediate' | 'advanced' | ''): void {
    this.filterDifficulty = level;
    this.displayedQuestions = [];
    this.apiErrorMessage = null;

    if (!this.selectedCourseName || !this.filterDifficulty) return;

    this.serviceQuestion.getQuestions(this.selectedCourseName, this.filterDifficulty).subscribe({
      next: (questions) => {
        this.displayedQuestions = questions;
        return this.displayedQuestions;
      },
      error: (err) => {
        console.error('API Error fetching questions:', err);
        if (err.status === 404) {
          this.apiErrorMessage = `Error: The subject '${this.selectedCourseName}' might not exist.`;
        } else {
          this.apiErrorMessage = 'Failed to load questions. Please check the API status.';
        }
      },
    });
  }

  getFilteredQuestions(): Question[] {
    return this.displayedQuestions;
  }
  
  getCharFromIndex(i: number): string {
    return String.fromCharCode(65 + i);
  }

  // CREATE (POST) SETUP/VALIDATION
  addQuestion() {
    this.isAddingNew = true;
    this.editingQuestion = null;
    this.cancelAdd(); 
    
    this.newQuestionItem.difficulty = (this.filterDifficulty || 'basic') as 'basic' | 'intermediate' | 'advanced';

    this.isAddingModalOpen = true;
  }
  
  private validateNewQuestion(): boolean {
    const q = this.newQuestionItem;
    
    if (!q.text || q.text.trim() === '') {
      alert('Please enter the Question Text.');
      return false;
    }
    
    for (let i = 0; i < q.options.length; i++) {
      if (!q.options[i] || q.options[i].trim() === '') {
        alert(`Please enter Option ${this.getCharFromIndex(i)}.`);
        return false;
      }
    }
    
    if (!this.correctAnswer || !q.options.includes(this.correctAnswer)) {
      alert('The Correct Answer must exactly match one of the provided Options.');
      return false;
    }
    return true;
  }

  // CREATE (POST) EXECUTION
  saveNewQuestion(): void {
    if (!this.validateNewQuestion() || !this.selectedCourseName) {
      return;
    }

    this.apiErrorMessage = null;
    this.newQuestionItem.correctAnswer = this.correctAnswer;
    
    delete (this.newQuestionItem as any).id; 

    this.serviceQuestion.createQuestion(this.newQuestionItem, this.selectedCourseName).subscribe({
      next: () => {
        alert('Question created successfully!');
        this.cancelAdd();
        this.onDifficultyChange(this.filterDifficulty);
      },
      error: (err) => {
        console.error('API Error creating question:', err);
        if (err.status === 400 && err.error?.error) {
          this.apiErrorMessage = `Creation Failed: ${err.error.error}`;
        } else {
          this.apiErrorMessage = 'An unexpected error occurred during question creation.';
        }
      },
    });
  }
  
  cancelAdd(): void {
    this.isAddingModalOpen = false;
    this.correctAnswer = '';
    this.newQuestionItem = { id: 0, text: '', options: ['', '', '', ''], correctAnswer: '', difficulty: 'basic', };
  }

  // UPDATE (PUT) SETUP
  editQuestion(question: Question): void {
    this.editingQuestion = {...question};
    this.correctAnswer = this.editingQuestion.correctAnswer;
  }

  // UPDATE (PUT) EXECUTION
  saveQuestion(): void {
    if (!this.editingQuestion || !this.selectedCourseName) return;
    
    if (!this.editingQuestion.options.includes(this.correctAnswer)) {
      alert('The Correct Answer must exactly match one of the provided Options.');
      return;
    }
    this.editingQuestion.correctAnswer = this.correctAnswer;

    this.serviceQuestion.updateQuestion(this.editingQuestion, this.selectedCourseName).subscribe({
      next: () => {
        alert('Question updated successfully!');
        this.editingQuestion = null;
        this.onDifficultyChange(this.filterDifficulty); 
      },
      error: (err) => {
        console.error('API Error updating question:', err);
        this.apiErrorMessage = 'An error occurred while updating the question.';
      },
    });
  }

  cancelEdit(): void {
    this.correctAnswer = '';
    this.editingQuestion = null;
  }

  // DELETE OPERATION
  deleteQuestion(id: number | string): void {
    if (!confirm('Are you sure you want to delete this question?')) return;
    this.apiErrorMessage = null;
    
    if (!this.selectedCourseName || !this.filterDifficulty) return;

    this.serviceQuestion.deleteQuestion(id, this.selectedCourseName, this.filterDifficulty).subscribe({
      next: () => {
        alert('Question deleted successfully!');
        this.onDifficultyChange(this.filterDifficulty); 
      },
      error: (err) => {
        console.error('API Error deleting question:', err);
        this.apiErrorMessage = 'An error occurred while deleting the question.';
      },
    });
  }

  // UI Helpers
  questionsCountForSelectedDifficulty(): number {
    return this.displayedQuestions.length;
  }

  isAddDisabled(): boolean {
    if (!this.selectedCourseName || !this.filterDifficulty) return true;
    return this.questionsCountForSelectedDifficulty() >= 10;
  }

  trackByOptions(index: number, option: string): number {
    return index;
  }
  
}
