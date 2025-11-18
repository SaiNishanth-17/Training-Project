import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private apiUrl = 'http://localhost:8001/api/subjects';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(subjects => subjects.map((subject, index) => ({
        id: index + 1,
        name: subject.subjectName,
        author: 'admin',
        duration: '30 minutes',
        topics: [subject.description || 'No description available']
      } as Course))),
      tap(data => console.log('Courses fetched:', data)),
      catchError(error => {
        console.error('Error fetching courses:', error);
        return of([]);
      })
    );
  }

  filterCourses(searchTerm: string, courses: Course[]): string[] {
    const term = searchTerm.toLowerCase();
    return courses
      .filter(course => course.name.toLowerCase().includes(term))
      .map(course => course.name);
  }

  getCourseByName(name: string, courses: Course[]): Course | null {
    return courses.find(course => course.name === name) || null;
  }
}