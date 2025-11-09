import { Component, Output, EventEmitter } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentReportService } from '../../Services/student-report-service';
import { UserRegisteringService } from '../../Services/user-registering-service';
import { ExamTopicService } from '../../Services/exam-topic-service';

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
  firstname: string = '';

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
    private studentReportService: StudentReportService,
    private userService: UserRegisteringService,
    private examtopicservice: ExamTopicService
  ) {}

  ngOnInit() {
  this.examtopicservice.getSubjects().subscribe((subjects) => {
    const mapped = subjects.map((s) => ({
      name: s.subjectName,
      Description: s.description,
      isActive: s.isActive,
    }));
    this.availableCount = mapped.filter((exam) => exam.isActive).length;
  });

  this.completedCount = this.completedService.getCompletedExams().length;

  const user = this.userService.decodeToken();

  if (user && user.id) {
    this.studentReportService.getProgress().subscribe({
      next: (res) => {
        this.progress = res.progress;
      },
      error: () => {
        this.progress = 0;
      }
    });
  }

  if (user) {
    this.studentProfile.firstName = user.firstname || 'Student';
    this.studentProfile.lastName = user.lastname || 'User';
    this.studentProfile.email = user.email || 'student@example.com';
    this.firstname = user.firstname || this.userService.getCurrentUserName();
  } else {
    this.firstname = this.userService.getCurrentUserName();
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
    this.studentProfile.firstName = this.profileEdit.firstName || this.studentProfile.firstName;
    this.studentProfile.lastName = this.profileEdit.lastName || this.studentProfile.lastName;
    const user = this.userService.getUserByEmail(this.studentProfile.email);
    if (user) {
      user.firstname = this.studentProfile.firstName;
      user.lastname = this.studentProfile.lastName;
      this.userService.decodeToken();
    }
    this.firstname = this.studentProfile.firstName;
    this.closeProfileModal();
  }

  emitCard(section: 'available' | 'completed' | 'progress') {
    this.cardClicked.emit(section);
  }
}
