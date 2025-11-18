import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../Services/landing-page-service';
import { RouterModule } from '@angular/router';
import { Course } from '../../Models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './body-component.html',
  styleUrl: './body-component.css'
})
export class BodyComponent implements OnInit {
  course:Course[]=[];
  isAllCourseVisible:boolean=false;
   constructor(public courses:LandingPageService){}

   ngOnInit() {
    this.courses.getCourses().subscribe(data => {
      this.course = data;
    });
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
