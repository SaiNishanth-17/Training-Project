import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamDetailsModal } from '../exam-details-modal/exam-details-modal';
import { SearchFilterPipePipe } from './search-filter-pipe-pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminServices } from '../../Services/admin-services';
import { UserRegisteringService } from '../../Services/user-registering-service';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  readonly initials: string;
  readonly name: string;
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
    records:any[]=[];
    stats:any[]=[];
    
  constructor(private adminService:AdminServices, private userService: UserRegisteringService){}
  editingEmail: string | null = null;
  editRoleValue: string = '';
  
    isProfileModalOpen: boolean = false;
    profileEdit: any = { password: '' };

    userData: UserData={
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      role: 'Admin',
      get initials():string{
        return (this.firstName[0] || '') + (this.lastName[0] || '');
      },
      get name(): string {
        return `${this.firstName} ${this.lastName}`.trim();
      }
    }
    
    
    ngOnInit(): void {
        this.records = this.adminService.getrecords();

        // if a current user is set (from login), populate userData with it
        const current = this.userService.getCurrentUser();
        if (current) {
          this.userData.firstName = current.firstname || this.userData.firstName;
          this.userData.lastName = current.lastname || this.userData.lastName;
          this.userData.email = current.email || this.userData.email;
        }

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
        label: 'Total Subjects',
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

    startEdit(record: any) {
      this.editingEmail = record.email;
      this.editRoleValue = record.role;
    }

    cancelEdit() {
      this.editingEmail = null;
      this.editRoleValue = '';
    }

    saveRole(record: any) {
      if (!this.editingEmail) return;
      const success = this.adminService.updateUserRole(record.email, this.editRoleValue);
      if (success) {
        // update local reference
        const idx = this.records.findIndex(r => r.email === record.email);
        if (idx !== -1) this.records[idx].role = this.editRoleValue;
      }
      this.cancelEdit();
    }

    deleteRecord(record: any) {
      const confirmed = confirm(`Delete user ${record.firstName} ${record.lastName}?`);
      if (!confirmed) return;
      const success = this.adminService.deleteUserByEmail(record.email);
      if (success) {
        this.records = this.records.filter(r => r.email !== record.email);
      }
    }
  
    closeExamDetails() {
      this.isModalOpen = false;
      this.selectedExamDetails = null;
    }
    
    private getTotalStudents(): number {
      return this.adminService.getTotalStudents(); 
    }
  
    // private getFailedStudents(): number {
    //   return this.adminService.getFailedStudents();
    // }
  
    
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

    openProfileModal() {
      this.profileEdit = { 
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        role: this.userData.role
      };
      this.isProfileModalOpen = true;
    }

    closeProfileModal() {
      this.isProfileModalOpen = false;
      this.profileEdit = {};
    }

    saveProfile() {
      this.userData.firstName = this.profileEdit.firstName || this.userData.firstName;
      this.userData.lastName = this.profileEdit.lastName || this.userData.lastName;
      const user = this.userService.getUserByEmail(this.userData.email);
      if (user) {
        user.firstname = this.userData.firstName;
        user.lastname = this.userData.lastName;
      }
      this.closeProfileModal();
    }
}
