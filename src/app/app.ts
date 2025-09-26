import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
showAllCourses: any;
activeItem: any;


closeAllCoursesModal() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('Online-Exam-Portal');
isAllCoursesModalVisible: any;

 receivedData: string = 'Landing';

  receiveData1(data: string) {
    this.receivedData = data;
  }
}
