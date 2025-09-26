import { Injectable } from '@angular/core';
import { Course } from '../Models/course';
 
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private courses: Course[] = [
    {
        id:1,
        name: 'HTML Quiz',
        author: 'Web Development Team',
        duration: '10 minutes',
        topics: [
            "Hyper Text Markup Language",
            "Tags for hyperlinks, images, and line breaks",
            "Attributes like 'alt'",
            "Table and list creation"
        ]
    },
    {
        id:2,
        name: 'CSS Quiz',
        author: 'Web Development Team',
        duration: '20 minutes',
        topics: [
            "Cascading Style Sheets",
            "Styling properties (e.g., background-color, font-size)",
            "Selectors (class, id, element)",
            "Layout properties (e.g., display, position)"
        ]
    },
    {
        id:3,
        name: 'JavaScript Quiz',
        author: 'Web Development Team',
        duration: '40 minutes',
        topics: [
            "Variable declaration (var, let)",
            "DOM manipulation (document.write())",
            "Operators and data types",
            "Array methods and loops"
        ]
    },
    {
        id:4,
        name: 'Bootstrap Quiz',
        author: 'Web Development Team',
        duration: '30 minutes',
        topics: [
            "Responsive web design",
            "Grid system and container classes",
            "Component classes (e.g., .btn, .navbar, .alert)",
            "Utility classes for text and display"
        ]
    }
];
  getCourses(): Course[] {
    return this.courses;
  }
 
  filterCourses(searchTerm: string): string[] {
    const term = searchTerm.toLowerCase();
    return this.courses
      .filter(course => course.name.toLowerCase().includes(term))
      .map(course => course.name);
  }
 
  getCourseByName(name: string): Course | null {
    return this.courses.find(course => course.name === name) || null;
  }
}
 
 