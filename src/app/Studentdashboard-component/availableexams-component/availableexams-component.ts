
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
@Component({
  selector: 'app-available-exams',
  imports:[CommonModule],
  templateUrl: './availableexams-component.html',
  styleUrls: ['./availableexams-component.css']
})
export class AvailableexamsComponent {

  
available: any[] = [];

  constructor(private availableExams: StudentServices) {}

  ngOnInit() {
    this.available = this.availableExams.getAllExams();
  }

  // AvailableExams() {
  //   this.available = this.availableExams.displayAvailableExams();
  // }
  
  }

