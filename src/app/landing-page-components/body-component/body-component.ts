import { Component} from '@angular/core';
import { LandingPageService } from '../../Services/landing-page-service';
import { RouterModule } from '@angular/router';
import { Course } from '../../Models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-component',
  imports: [RouterModule,CommonModule],
  templateUrl: './body-component.html',
  styleUrl: './body-component.css'
})
export class BodyComponent {
  course:Course[]=[];
  isAllCourseVisible:boolean=false;
   constructor(public courses:LandingPageService){
    this.course=this.courses.getCourses();
   }

   showAllCourses(){
      this.isAllCourseVisible=true;
   }
   closeModal(){
    this.isAllCourseVisible=false;
   }
   enrollCourse(name:string){
    alert(`You have been enrolled in ${name} successfully`)
   }
}
