import { Injectable } from '@angular/core';
import { examType } from '../Models/examType';

@Injectable({
  providedIn: 'root'
})
export class ExamQuestionsService {

  exams: examType[] = [
    {
      id: 1,
      name: "HTML",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 10
    },
    {
      id: 2,
      name: "CSS",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 20
    },
    {
      id: 3,
      name: "JavaScript",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 40
    },
    {
      id: 4,
      name: "Bootstrap",
      noOfTopics: 10,
      noOfStudents: 0,
      time: 30
    }
  ];
 
 
 
  htmlQuestions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "Which tag is used to insert an image?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      answer: "<img>"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which attribute is used to provide alternative text for an image?",
      options: ["alt", "title", "src", "text"],
      answer: "alt"
    },
    {
      question: "Which tag is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<row>"],
      answer: "<tr>"
    },
    {
      question: "How do you create an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ol>"
    },
    {
      question: "Which tag is used to define a paragraph?",
      options: ["<p>", "<para>", "<text>", "<pg>"],
      answer: "<p>"
    },
    {
      question: "Which HTML tag is used to define a division or section?",
      options: ["<div>", "<section>", "<span>", "<group>"],
      answer: "<div>"
    },
    {
      question: "What is the correct HTML for creating a checkbox?",
      options: ["<input type='checkbox'>", "<checkbox>", "<input checkbox>", "<check>"],
      answer: "<input type='checkbox'>"
    }
  ];

  cssQuestions = [
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Creative Style Syntax", "Cascading Style Sheets", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "background"],
      answer: "background-color"
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "weight: bold;"],
      answer: "font-weight: bold;"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "size", "font"],
      answer: "font-size"
    },
    {
      question: "What is the default position value in CSS?",
      options: ["absolute", "relative", "static", "fixed"],
      answer: "static"
    },
    {
      question: "Which selector targets all paragraph elements?",
      options: ["p", ".p", "#p", "*p"],
      answer: "p"
    },
    {
      question: "How do you apply a style to an element with id 'header'?",
      options: ["#header", ".header", "header", "*header"],
      answer: "#header"
    },
    {
      question: "Which property is used to set the spacing between lines of text?",
      options: ["line-spacing", "line-height", "spacing", "text-spacing"],
      answer: "line-height"
    },
    {
      question: "Which property is used to hide an element?",
      options: ["visibility: hidden;", "display: none;", "opacity: 0;", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which CSS unit is relative to the font-size of the element?",
      options: ["px", "em", "%", "vh"],
      answer: "em"
    }
  ];

  javascriptQuestions = [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "let", "Both var and let"],
      answer: "Both var and let"
    },
    {
      question: "Which method is used to write content in the browser?",
      options: ["console.log()", "document.write()", "alert()", "window.print()"],
      answer: "document.write()"
    },
    {
      question: "Which operator is used to assign a value?",
      options: ["=", "==", "===", ":"],
      answer: "="
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which function is used to delay execution?",
      options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
      answer: "setTimeout()"
    },
    {
      question: "What is the output of 'typeof null'?",
      options: ["null", "object", "undefined", "string"],
      answer: "object"
    },
    {
      question: "Which symbol is used for strict equality?",
      options: ["==", "===", "!=", "!=="],
      answer: "==="
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "Which loop is guaranteed to run at least once?",
      options: ["for", "while", "do...while", "foreach"],
      answer: "do...while"
    },
    {
      question: "Which keyword is used to define a function?",
      options: ["func", "function", "def", "method"],
      answer: "function"
    }
  ];

  bootstrapQuestions = [
    {
      question: "What is Bootstrap primarily used for?",
      options: ["Database management", "Server-side scripting", "Responsive web design", "Image editing"],
      answer: "Responsive web design"
    },
    {
      question: "Which class makes an element responsive in Bootstrap?",
      options: [".responsive", ".img-fluid", ".fluid-img", ".img-responsive"],
      answer: ".img-fluid"
    },
    {
      question: "Which Bootstrap class is used for a container with fixed width?",
      options: [".container", ".container-fluid", ".container-fixed", ".container-box"],
      answer: ".container"
    },
    {
      question: "Which class is used to create a button in Bootstrap?",
      options: [".btn", ".button", ".btn-default", ".btn-group"],
      answer: ".btn"
    },
    {
      question: "Which class is used to create a navigation bar?",
      options: [".navbar", ".nav", ".navigation", ".nav-bar"],
      answer: ".navbar"
    },
    {
      question: "Which grid system does Bootstrap use?",
      options: ["6-column", "9-column", "12-column", "15-column"],
      answer: "12-column"
    },
    {
      question: "Which class is used to hide an element only on small screens?",
      options: [".d-none", ".d-sm-none", ".d-md-none", ".d-lg-none"],
      answer: ".d-sm-none"
    },
    {
      question: "Which Bootstrap component is used for alerts?",
      options: [".alert", ".notify", ".popup", ".message"],
      answer: ".alert"
    },
    {
      question: "Which class is used to create a dropdown menu?",
      options: [".dropdown", ".menu", ".drop", ".nav-dropdown"],
      answer: ".dropdown"
    },
    {
      question: "Which class is used to align text to the center?",
      options: [".text-left", ".text-right", ".text-center", ".text-middle"],
      answer: ".text-center"
    }
  ];

  getHtmlQuestions(): any[] {
    return this.htmlQuestions;
  }

  getCssQuestions(): any[] {
    return this.cssQuestions;
  }

  getJavascriptQuestions(): any[] {
    return this.javascriptQuestions;
  }

  getBootstrapQuestions(): any[] {
    return this.bootstrapQuestions;
  }

   getExamTopics() {
    return this.exams;
  }

}
