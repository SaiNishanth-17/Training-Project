import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { completedExams } from '../../Models/completedExams';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { ExamDataService } from '../../Services/exam-data-service';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-result-component',
  imports: [CommonModule],
  templateUrl: './result-component.html',
  styleUrl: './result-component.css'
})
export class ResultComponent {

  noOfQuestions:number=0;
noOfQuestionsAttempted: number = 0;
  correctAnswersCount: number = 0;
  latestExam?: completedExams;
  showAnalysis: boolean = false;
examQuestions: any;
submittedAnswers: any;

  constructor(private completedExamService: CompletedExamService,
    private examdataservice:ExamDataService,
    private studentReportService:StudentReportService
  ) {}

  ngOnInit(): void {
    this.completedExamService.initializeExamData();
    const [attempted, correct] = this.completedExamService.calculateScore();
    
    this.noOfQuestions=this.examdataservice.getQuestions().length;
    this.noOfQuestionsAttempted=attempted;
    this.correctAnswersCount=correct;

    this.examQuestions=this.examdataservice.getQuestions();
    this.submittedAnswers=this.examdataservice.getAnswers();
    
    console.log(this.examQuestions);
    console.log(this.submittedAnswers);
    console.log(this.completedExamService.completedExamList);

  }


  // showAnalysis: boolean = false;
  ShowAnalysis():void{
    this.showAnalysis=true;
  }
 
}
