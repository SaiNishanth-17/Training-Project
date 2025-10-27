
import { Component, Output, EventEmitter } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentReportService } from '../../Services/student-report-service';
import { UserRegisteringService } from '../../Services/user-registering-service';
import { ExamTopicService } from '../../Services/exam-topic-service';

// import { LoginComponent } from '../../login-component/login-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.css'],
  imports: [RouterModule, CommonModule, FormsModule]
})
export class DashboardComponent {
  @Output() cardClicked = new EventEmitter<'available' | 'completed' | 'progress'>();

  availableCount = 0;
  completedCount = 0;
  progress = 0;
  firstname:string='';
  // student profile state for header modal
  studentProfile = {
    firstName: 'Student',
    lastName: 'User',
    email: 'student@example.com',
    role: 'Student',
    password: ''
  };
  isProfileModalOpen = false;
  profileEdit: any = {};

  constructor(
    private availableService: StudentServices,
    private completedService: CompletedExamService,
    private studentReportService:StudentReportService,
    private userService:UserRegisteringService,
    private examtopicservice:ExamTopicService
  ) {}

  ngOnInit() {
    this.availableCount = this.examtopicservice.exams.filter(exam=>exam.isActive).length;
    this.completedCount = this.completedService.getCompletedExams().length;
    this.progress = this.studentReportService.getProgress();
    // populate current user profile if available
    const current = this.userService.getCurrentUser();
    if (current) {
      this.studentProfile.firstName = current.firstname || this.studentProfile.firstName;
      this.studentProfile.lastName = current.lastname || this.studentProfile.lastName;
      this.studentProfile.email = current.email || this.studentProfile.email;
      // keep role as-is (student)
      this.firstname = current.firstname || this.userService.getFirstName();
    } else {
      this.firstname = this.userService.getFirstName();
    }
  }

  openProfileModal() {
    this.profileEdit = { ...this.studentProfile };
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
    this.profileEdit = {};
  }

  saveStudentProfile() {
    // only firstName, lastName, password can be changed; email & role are read-only here
    this.studentProfile.firstName = this.profileEdit.firstName || this.studentProfile.firstName;
    this.studentProfile.lastName = this.profileEdit.lastName || this.studentProfile.lastName;
    this.studentProfile.password = this.profileEdit.password || this.studentProfile.password;
    this.closeProfileModal();
  }

  emitCard(section: 'available' | 'completed' | 'progress') {
    this.cardClicked.emit(section);
  }
 
}