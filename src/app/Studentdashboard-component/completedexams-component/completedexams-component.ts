
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompletedExamService } from '../../Services/completed-exam-service';
@Component({
  selector: 'app-completedexams-component',
  imports: [CommonModule],
  templateUrl: './completedexams-component.html',
  styleUrl: './completedexams-component.css'
  
})
export class CompletedexamsComponent {
  completed:any[]=[]
  constructor(private completedexams :  CompletedExamService){}
  ngOnInit(){
    this.completed=this.completedexams.getCompletedExams();
  }
  completedExams(){
   this.completed=this.completedexams.getCompletedExams();
  }
}


