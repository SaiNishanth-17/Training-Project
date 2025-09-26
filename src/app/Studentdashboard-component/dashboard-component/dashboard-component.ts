
import { Component, Output, EventEmitter } from '@angular/core';
import { StudentServices } from '../../Services/AvailableExamService';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { StudentProgressService } from '../../Services/student-progress-service';
import { RouterModule } from '@angular/router';

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

  constructor(
    private availableService: StudentServices,
    private completedService: CompletedExamService,
    private progressService: StudentProgressService
  ) {}

  ngOnInit() {
    this.availableCount = this.availableService.getAllExams().length;
    this.completedCount = this.completedService.getCompletedExams().length;
    this.progress = this.progressService.getProgressPercentage();
  }

  emitCard(section: 'available' | 'completed' | 'progress') {
    this.cardClicked.emit(section);
  }
 
}