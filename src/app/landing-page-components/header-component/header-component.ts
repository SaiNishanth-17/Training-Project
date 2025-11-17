import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageService } from '../../Services/landing-page-service';
import { Course } from '../../Models/course';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})

export class HeaderComponent implements OnInit {
  
  searchTerm: string = '';
  filteredSuggestions: string[] = [];
  courses: Course[] = [];
  
  isSingleCourseModalVisible: boolean = false;
  selectedCourse: Course | null = null;

  constructor(private coursesService: LandingPageService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  filterSuggestions() {
    this.filteredSuggestions = this.coursesService.filterCourses(this.searchTerm, this.courses);
  }

  showCourseDetails(suggestion: string) {
    this.selectedCourse = this.coursesService.getCourseByName(suggestion, this.courses);
    if (this.selectedCourse) {
      this.isSingleCourseModalVisible = true;
      this.filteredSuggestions = [];
      this.searchTerm = suggestion;
    }
  }

  closeModal() {
    this.isSingleCourseModalVisible = false;
    this.selectedCourse = null;
  }

  clearSuggestions() {
    setTimeout(() => {
      this.filteredSuggestions = [];
    }, 100);
  }
}
