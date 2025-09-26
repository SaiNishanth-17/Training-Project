import { Component } from '@angular/core';
import { StudentProgressService } from '../../Services/student-progress-service';
@Component({
  selector: 'app-studentprogress-component',
  imports: [],
  templateUrl: './studentprogress-component.html',
  styleUrl: './studentprogress-component.css'
})
export class StudentprogressComponent {
   
  progress: number | null = null;
  // progressData: any;

  constructor(private studentprogress: StudentProgressService) {}

  ngOnInit() {
    this.progress = this.studentprogress.getProgressPercentage();
    // this.progressData = this.studentprogress.getProgressPercentage();
  }

}