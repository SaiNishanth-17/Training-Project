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
      Description: "Structure and semantics of web pages using HTML",
    },
    {
      name: "CSS",
      isActive: true,
      Description: "Styling and layout techniques using Cascading Style Sheets",
    },
    {
      name: "JavaScript",
      isActive: true,
      Description: "Client-side scripting and dynamic web interactions",
    },
    {
      name: "Bootstrap",
      isActive: true,
      Description: "Responsive design and UI components using Bootstrap framework",
    }
  ];

  getExams(): ExamTopicType[] {
    return this.exams;
  }

  addExam(exam: ExamTopicType) {
    this.exams.push(exam);
  }
  
}
