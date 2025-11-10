import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompletedExamService } from '../../Services/completed-exam-service';
import { completedExams } from '../../Models/completedExams';
import { UserRegisteringService } from '../../Services/user-registering-service';

@Component({
  selector: 'app-completedexams-component',
  imports: [CommonModule],
  templateUrl: './completedexams-component.html',
  styleUrl: './completedexams-component.css'
})
export class CompletedexamsComponent implements OnInit {
  completed: completedExams[] = [];

  constructor(
    private completedexams: CompletedExamService,
    private userService: UserRegisteringService
  ) {}

  ngOnInit(): void {
    this.loadCompletedExams();
  }

  loadCompletedExams(): void {
    const user = this.userService.decodeToken();
    if (user && user.id) {
      this.completedexams.loadCompletedExamsFromBackend(user.id);
    }
    this.completed = this.completedexams.getCompletedExams();
  }
}


