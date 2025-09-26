import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentReportService } from '../../Services/student-report-service';
@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css'
})
export class Leaderboard implements OnInit {
  topScorers: {name:string, score:number}[]=[];

  constructor(private leaderboardService:StudentReportService){}
  ngOnInit(): void {
    this.topScorers = this.leaderboardService.getLeaderboard();
  }

}
