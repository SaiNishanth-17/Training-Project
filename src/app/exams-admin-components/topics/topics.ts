import { Component, OnInit } from '@angular/core';
import { ExamTopicType } from '../../Models/examTopicType';
import { CommonModule } from '@angular/common';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { FormsModule } from '@angular/forms';
import { ExamTopic } from "../exam-topic/exam-topic";

import { QuestionbankServices } from '../../Services/questionbank-services';
import { ExamQuestionsService } from '../../Services/exam-questions-service';

declare var bootstrap:any;

@Component({
  selector: 'app-topics',
  imports: [CommonModule, FormsModule, ExamTopic],
  templateUrl: './topics.html',
  styleUrl: './topics.css'
})
export class Topics implements OnInit {
  constructor(private examTopicService:ExamTopicService,private questionBankService: QuestionbankServices ,private questionsService:ExamQuestionsService){}
exams:ExamTopicType[]=[];
ngOnInit(){
  this.exams=this.examTopicService.getExams();
}
newTopic:ExamTopicType={
  name:'',
  Description:'',
  TimeLimit:0,
  isActive:false,
  noOfQuestions:0
}
openModal():void{
  const modalElement=document.getElementById('addTopicModal');
  if(modalElement) {
  const modal=new bootstrap.Modal(modalElement);
  modal.show();
  }
  
}

onSubmit(event: any) {
   console.log('Form submitted:', event);
   this.questionsService.addNewExam(this.newTopic.name);
   this.exams.push({...this.newTopic});
   this.questionBankService.addCourse(this.newTopic.name);
   this.newTopic={
       name:'',
       Description:'',
       TimeLimit:0,
       isActive:false,
       noOfQuestions:0
   }
   const modalElement = document.getElementById('addTopicModal');
   if (modalElement) {
     const modal = bootstrap.Modal.getInstance(modalElement);
     modal.hide();
   }
}
removeExam(examTODelete:ExamTopicType){
  this.exams=this.exams.filter(exam=>{
    return exam!=examTODelete;
  })
}
onChangeExam(updatedExam: ExamTopicType) {
  const index = this.exams.findIndex(exam => exam.name === updatedExam.name);
  if (index !== -1) {
    this.exams[index] = { ...updatedExam };
  }
}
}

