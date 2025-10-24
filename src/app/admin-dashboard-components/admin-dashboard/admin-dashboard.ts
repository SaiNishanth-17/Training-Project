import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamDetailsModal } from '../exam-details-modal/exam-details-modal';
import { SearchFilterPipePipe } from './search-filter-pipe-pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminServices } from '../../Services/admin-services';

interface UserData {
  name: string;
  role: string;
  readonly initials: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, ExamDetailsModal, FormsModule, SearchFilterPipePipe, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

    isModalOpen = false;
    selectedExamDetails: any;
    searchText: string = '';
    isTableVisible=false;
    recentExams:any[]=[];
    stats:any[]=[];
    
    constructor(private adminService:AdminServices){}
  
    userData: UserData={
      name: 'Admin User',
      role: 'Administrator',
      get initials():string{
        return this.name.split(' ').map(n => n[0]).join('').toUpperCase();
      } 
    }
    
    
    ngOnInit(): void {
        this.recentExams = this.adminService.getRecentExams();

        this.stats = [
      {
        label: 'Total Students',
        value: this.getTotalStudents(),
        icon: 'fas fa-users',
        color: 'purple',
        // change: '12.5% from last month',
        // trend: 'positive'
      },
      {
        label: 'Total Exam Topics',
        value: this.adminService.getTotalExams(),
        icon: 'fa-solid fa-user-pen',
        color: 'blue',
        // change: 'No change from last month',
        // trend: 'positive'
      },
    ];
      }


    showExamDetails(exam: any) {
      this.selectedExamDetails = {
        studentName: exam.student,
        examId: exam.id,
        totalQuestions: 50,
        attemptedQuestions: 45,
        correctAnswers: 40,
        wrongAnswers: 5,
        totalScore: 80,
        ...exam.examDetails
      };
      this.isModalOpen = true;
    }
  
    closeExamDetails() {
      this.isModalOpen = false;
      this.selectedExamDetails = null;
    }
    
    private getTotalStudents(): number {
      return this.adminService.getTotalStudents(); 
    }
  
    private getFailedStudents(): number {
      return this.adminService.getFailedStudents();
    }
  
    
    // Recent exams table
  
    onViewAll(){
      this.isTableVisible=!this.isTableVisible;
    }
  
    onSearch(event: Event){
      this.searchText=(event.target as HTMLInputElement).value;
    }
  
    getExamStatus(score: number): string {
      return score>=50 ? 'Passed' : 'Failed';
    }

    getExamStats() {
        return this.adminService.getExamStats();
    }
}
