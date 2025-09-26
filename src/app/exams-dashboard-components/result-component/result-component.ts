import { Component } from '@angular/core';
import { ExamDataService } from '../../Services/exam-data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-component',
  imports: [CommonModule],
  templateUrl: './result-component.html',
  styleUrl: './result-component.css'
})
export class ResultComponent {
  submittedAnswers: string[] = [];
  examQuestions: any[] = [];
  noOfQuestions: number = 0;
  noOfQuestionsAttempted: number = 0;
  correctAnswersCount: number = 0;
  showAnalysis: boolean = false;
 
  constructor(private examDataService: ExamDataService) {}
 
  ngOnInit(): void {
    this.submittedAnswers = this.examDataService.getAnswers();
    this.examQuestions = this.examDataService.getQuestions();
    this.noOfQuestions=this.examQuestions.length;
   for (let i = 0; i < this.submittedAnswers.length; i++) {
      if (this.submittedAnswers[i] !== '') {
        this.noOfQuestionsAttempted++;
      }
    }
    for(let i=0;i<this.examQuestions.length;i++){
      if(this.submittedAnswers[i]===this.examQuestions[i].answer){
        this.correctAnswersCount++;
      }
    }
  }
  ShowAnalysis():void{
    this.showAnalysis=true;
  }
 
}
