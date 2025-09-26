import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamDataService {
  private answers:string[]=[];
  private questions:any[]=[];
  private time!:number;
  setData(answers:string[],questions:any[]){
    this.answers=answers;
    this.questions=questions;
  }
  getAnswers(){
    return this.answers;
  }
  getQuestions(){
    return this.questions;
  }
  setTime(time:any){
    this.time=time;
  }
  getTime(){
    return this.time;
  }
}
