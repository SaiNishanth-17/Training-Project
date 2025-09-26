import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageService } from '../../Services/landing-page-service';
import { Course } from '../../Models/course';


@Component({
  selector: 'app-header-component',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  
  searchTerm: string = '';
  filteredSuggestions: string[] = [];
  
  isSingleCourseModalVisible: boolean = false;
  selectedCourse: Course | null = null;

  constructor(private coursesService: LandingPageService) {}

  filterSuggestions() {
    this.filteredSuggestions = this.coursesService.filterCourses(this.searchTerm);
  }

  showCourseDetails(suggestion: string) {
    this.selectedCourse = this.coursesService.getCourseByName(suggestion);
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
