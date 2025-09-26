import { Injectable } from '@angular/core';
import { ExamTopicType } from '../Models/examTopicType';


@Injectable({
  providedIn: 'root'
})
export class ExamTopicService {
  exams: ExamTopicType[] = [
    {
      name: "HTML",
      isActive: true,
      noOfQuestions: 10,
      Description: "Structure and semantics of web pages using HTML",
      TimeLimit: 1
    },
    {
      name: "CSS",
      isActive: true,
      noOfQuestions: 10,
      Description: "Styling and layout techniques using Cascading Style Sheets",
      TimeLimit: 30
    },
    {
      name: "JavaScript",
      isActive: true,
      noOfQuestions: 10,
      Description: "Client-side scripting and dynamic web interactions",
      TimeLimit: 40
    },
    {
      name: "Bootstrap",
      isActive: true,
      noOfQuestions: 10,
      Description: "Responsive design and UI components using Bootstrap framework",
      TimeLimit: 30
    }
  ];

  getExams(): ExamTopicType[] {
    return this.exams;
  }
}
