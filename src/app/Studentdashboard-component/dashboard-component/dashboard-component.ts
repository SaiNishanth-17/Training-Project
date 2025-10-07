
import { Component, Output, EventEmitter } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { RouterModule } from '@angular/router';
import { StudentReportService } from '../../Services/student-report-service';
import { UserRegisteringService } from '../../Services/user-registering-service';
import { ExamTopicService } from '../../Services/exam-topic-service';

// import { LoginComponent } from '../../login-component/login-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.css'],
  imports: [RouterModule]
})
export class DashboardComponent {
  @Output() cardClicked = new EventEmitter<'available' | 'completed' | 'progress'>();

  availableCount = 0;
  completedCount = 0;
  progress = 0;
  firstname:string='';

  constructor(
    private availableService: StudentServices,
    private completedService: CompletedExamService,
    private studentReportService:StudentReportService,
    private userService:UserRegisteringService,
    private examtopicservice:ExamTopicService
  ) {}

  ngOnInit() {
    this.availableCount = this.examtopicservice.exams.length;
    this.completedCount = this.completedService.getCompletedExams().length;
    this.progress = this.studentReportService.getProgress();
    this.firstname=this.userService.getFirstName();
  }

  emitCard(section: 'available' | 'completed' | 'progress') {
    this.cardClicked.emit(section);
  }
 
}