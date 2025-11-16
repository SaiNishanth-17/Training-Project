import { Component, Output, EventEmitter } from '@angular/core';
import { AvailableExamService } from '../../Services/AvailableExamService';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentReportService } from '../../Services/student-report-service';
import { UserRegisteringService } from '../../Services/user-registering-service';
import { ExamTopicService } from '../../Services/exam-topic-service';
import { StudentService } from '../../Services/student-services';

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
    private availableService: AvailableExamService,
    private completedService: CompletedExamService,
    private studentReportService: StudentReportService,
    private userService: UserRegisteringService,
    private examtopicservice: ExamTopicService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.userService.decodeToken();

    this.examtopicservice.getSubjects().subscribe((subjects) => {
      const mapped = subjects.map((s) => ({
        name: s.subjectName,
        Description: s.description,
        isActive: s.isActive,
      }));
      this.availableCount = mapped.filter((exam) => exam.isActive).length;
    });

    if (user && user.id) {
      this.completedService.loadCompletedExamsFromBackend(user.id);
      setTimeout(() => {
        this.completedCount = this.completedService.getCompletedExams().length;
      }, 1000);

      this.studentReportService.getProgress().subscribe({
        next: (res) => {
          this.progress = res.progress;
        },
        error: () => {
          this.progress = 0;
        }
      });
    } else {
      this.completedCount = this.completedService.getCompletedExams().length;
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
    this.studentService.updateProfile(
      this.profileEdit.firstName,
      this.profileEdit.lastName
    ).subscribe({
      next: () => {
        this.studentProfile.firstName = this.profileEdit.firstName;
        this.studentProfile.lastName = this.profileEdit.lastName;
        this.firstname = this.profileEdit.firstName;
        alert('Profile updated successfully');
        this.closeProfileModal();
      },
      error: (err) => {
        alert(err.error?.message || 'Failed to update profile');
      }
    });
  }

  emitCard(section: 'available' | 'completed' | 'progress') {
    this.cardClicked.emit(section);
  }

  logout(){
    this.userService.logout();
    // console.log("logout succesful")
    this.userService.clearToken();
    this.router.navigate(['/login']);
  }
}
