import { Injectable } from '@angular/core';
import { QuestionGroup, Question } from '../Models/question-interface';
@Injectable({
  providedIn: 'root'
})
export class QuestionbankServices {
  courses: {name:string}[]  = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Bootstrap' }
  ];

questionsByCourse: QuestionGroup[] = [
    {
      courseName: 'HTML',
      questions: [
        {
          id: 1,
          text: "What does HTML stand for?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
          correctAnswerIndex: 0
        },
        {
          id: 2,
          text: "Which tag is used to create a hyperlink in HTML?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<link>", "<a>", "<href>", "<url>"],
          correctAnswerIndex: 1
        },
        {
          id: 3,
          text: "Which tag is used to insert an image?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<img>", "<image>", "<src>", "<pic>"],
          correctAnswerIndex: 0
        },
        {
          id: 4,
          text: "What is the correct HTML element for inserting a line break?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<break>", "<br>", "<lb>", "<line>"],
          correctAnswerIndex: 1
        },
        {
          id: 5,
          text: "Which attribute is used to provide alternative text for an image?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["alt", "title", "src", "text"],
          correctAnswerIndex: 0
        },
        {
          id: 6,
          text: "Which tag is used to define a table row?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<td>", "<tr>", "<th>", "<row>"],
          correctAnswerIndex: 1
        },
        {
          id: 7,
          text: "How do you create an ordered list?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<ul>", "<ol>", "<li>", "<list>"],
          correctAnswerIndex: 1
        },
        {
          id: 8,
          text: "Which tag is used to define a paragraph?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<p>", "<para>", "<text>", "<pg>"],
          correctAnswerIndex: 0
        },
        {
          id: 9,
          text: "Which HTML tag is used to define a division or section?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<div>", "<section>", "<span>", "<group>"],
          correctAnswerIndex: 0
        },
        {
          id: 10,
          text: "What is the correct HTML for creating a checkbox?",
          difficulty: 'Easy',
          subtopics: ['HTML'],
          options: ["<input type='checkbox'>", "<checkbox>", "<input checkbox>", "<check>"],
          correctAnswerIndex: 0
        }
      ]
    },
    {
      courseName: 'CSS',
      questions: [
        {
          id: 11,
          text: "What does CSS stand for?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["Colorful Style Sheets", "Creative Style Syntax", "Cascading Style Sheets", "Computer Style Sheets"],
          correctAnswerIndex: 2
        },
        {
          id: 12,
          text: "Which property is used to change the background color?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["color", "bgcolor", "background-color", "background"],
          correctAnswerIndex: 2
        },
        {
          id: 13,
          text: "How do you make text bold in CSS?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "weight: bold;"],
          correctAnswerIndex: 0
        },
        {
          id: 14,
          text: "Which CSS property controls the text size?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["font-size", "text-size", "size", "font"],
          correctAnswerIndex: 0
        },
        {
          id: 15,
          text: "What is the default position value in CSS?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["absolute", "relative", "static", "fixed"],
          correctAnswerIndex: 2
        },
        {
          id: 16,
          text: "Which selector targets all paragraph elements?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["p", ".p", "#p", "*p"],
          correctAnswerIndex: 0
        },
        {
          id: 17,
          text: "How do you apply a style to an element with id 'header'?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["#header", ".header", "header", "*header"],
          correctAnswerIndex: 0
        },
        {
          id: 18,
          text: "Which property is used to set the spacing between lines of text?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["line-spacing", "line-height", "spacing", "text-spacing"],
          correctAnswerIndex: 1
        },
        {
          id: 19,
          text: "Which property is used to hide an element?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["visibility: hidden;", "display: none;", "opacity: 0;", "All of the above"],
          correctAnswerIndex: 3
        },
        {
          id: 20,
          text: "Which CSS unit is relative to the font-size of the element?",
          difficulty: 'Easy',
          subtopics: ['CSS'],
          options: ["px", "em", "%", "vh"],
          correctAnswerIndex: 1
        }
      ]
    },
    {
      courseName: 'JavaScript',
      questions: [
        {
          id: 21,
          text: "Which keyword is used to declare a variable in JavaScript?",
          difficulty: 'Medium',
          subtopics: ['JavaScript'],
          options: ["var", "int", "let", "Both var and let"],
          correctAnswerIndex: 3
        },
        {
          id: 22,
          text: "Which method is used to write content in the browser?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["console.log()", "document.write()", "alert()", "window.print()"],
          correctAnswerIndex: 1
        },
        {
          id: 23,
          text: "Which operator is used to assign a value?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["=", "==", "===", ":"],
          correctAnswerIndex: 0
        },
        {
          id: 24,
          text: "Which method converts JSON to a JavaScript object?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
          correctAnswerIndex: 0
        },
        {
          id: 25,
          text: "Which function is used to delay execution?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
          correctAnswerIndex: 0
        },
        {
          id: 26,
          text: "What is the output of 'typeof null'?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["null", "object", "undefined", "string"],
          correctAnswerIndex: 1
        },
        {
          id: 27,
          text: "Which symbol is used for strict equality?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["==", "===", "!=", "!=="],
          correctAnswerIndex: 1
        },
        {
          id: 28,
          text: "Which method adds an element to the end of an array?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["push()", "pop()", "shift()", "unshift()"],
          correctAnswerIndex: 0
        },
        {
          id: 29,
          text: "Which loop is guaranteed to run at least once?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["for", "while", "do...while", "foreach"],
          correctAnswerIndex: 2
        },
        {
          id: 30,
          text: "Which keyword is used to define a function?",
          difficulty: 'Easy',
          subtopics: ['JavaScript'],
          options: ["func", "function", "def", "method"],
          correctAnswerIndex: 1
        }
      ]
    },
    {
      courseName: 'Bootstrap',
      questions: [
        {
          id: 31,
          text: "What is Bootstrap primarily used for?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: ["Database management", "Server-side scripting", "Responsive web design", "Image editing"],
          correctAnswerIndex: 2
        },
        {
          id: 32,
          text: "Which class makes an element responsive in Bootstrap?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".responsive", ".img-fluid", ".fluid-img", ".img-responsive"],
          correctAnswerIndex: 1
        },
        {
          id: 33,
          text: "Which Bootstrap class is used for a container with fixed width?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".container", ".container-fluid", ".container-fixed", ".container-box"],
          correctAnswerIndex: 0
        },
        {
          id: 34,
          text: "Which class is used to create a button in Bootstrap?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".btn", ".button", ".btn-default", ".btn-group"],
          correctAnswerIndex: 0
        },
        {
          id: 35,
          text: "Which class is used to create a navigation bar?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".navbar", ".nav", ".navigation", ".nav-bar"],
          correctAnswerIndex: 0
        },
        {
          id: 36,
          text: "Which grid system does Bootstrap use?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: ["6-column", "9-column", "12-column", "15-column"],
          correctAnswerIndex: 2
        },
        {
          id: 37,
          text: "Which class is used to hide an element only on small screens?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".d-none", ".d-sm-none", ".d-md-none", ".d-lg-none"],
          correctAnswerIndex: 1
        },
        {
          id: 38,
          text: "Which Bootstrap component is used for alerts?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".alert", ".notify", ".popup", ".message"],
          correctAnswerIndex: 0
        },
        {
          id: 39,
          text: "Which class is used to create a dropdown menu?",
          difficulty: 'Easy',
          subtopics: ['Bootstrap'],
          options: [".dropdown", ".menu", ".drop", ".nav-dropdown"],
          correctAnswerIndex: 0
        },
        {
          id: 40,
          text: "Which class is used to align text to the center?",
          difficulty: 'Hard',
          subtopics: ['Bootstrap'],
          options: [".text-left", ".text-right", ".text-center", ".text-middle"],
          correctAnswerIndex: 2
        }
      ]
    }
  ];

  getQuestionsForCourse(selectedCourse: string): Question[] {
    const courseGroup = this.questionsByCourse.find(group => group.courseName === selectedCourse);

    return  courseGroup!.questions ;
  }

  filteredQuestions(questions: Question[], filterDifficulty: string, searchText: string): Question[] {
    let filtered = [...questions];

    if (filterDifficulty !== 'All') {
      filtered = filtered.filter(q => q.difficulty === filterDifficulty);
    }

    if (searchText.trim()) {
      filtered = filtered.filter(q =>
        q.text.toLowerCase().includes(searchText.toLowerCase()) ||
        q.subtopics.some(subtopic => subtopic.toLowerCase().includes(searchText.toLowerCase()))
      );
    }
   
    return filtered;
  }

  saveQuestion(updatedQuestion: Question, selectedCourseName:string): void {
    const courseGroup = this.questionsByCourse.find(course =>course.courseName===selectedCourseName);
   
    if (courseGroup) {
      const index = courseGroup.questions.findIndex(q => q.id === updatedQuestion.id);
      if (index !== -1) {
        courseGroup.questions[index] = { ...updatedQuestion };
      }
    }
  }

  deleteQuestion(id: number, courseName: string): void {
    const courseGroup = this.questionsByCourse.find(group => group.courseName === courseName);
    if (courseGroup) {
      courseGroup.questions = courseGroup.questions.filter(q => q.id !== id);
    }
  }
  deepCloneQuestion(question: Question): Question {
  return {
    id: question.id,
    text: question.text,
    difficulty: question.difficulty,
    subtopics: [...question.subtopics],
    options: [...question.options],
    correctAnswerIndex: question.correctAnswerIndex
  };
  }
}
