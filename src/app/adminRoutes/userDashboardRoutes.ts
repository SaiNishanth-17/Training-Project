import { Routes } from '@angular/router';

// import { StudentDashboardPage } from './student-dashboard-component/student-dashboard-page/student-dashboard-page';
import { AnalyticsStudentPage } from '../analytics-student-component/analytics-student-page/analytics-student-page';
import { ExamPage } from '../exams-dashboard-components/exam-page/exam-page';
import { DisplayExams } from '../exams-dashboard-components/display-exams/display-exams';

import { StudentdashboardComponent } from '../Studentdashboard-component/Studentdashboard-component';
import { ResultComponent } from '../exams-dashboard-components/result-component/result-component';

import { StudentPage } from '../Studentdashboard-component/student-page/student-page';
import { authGuard, roleGuard } from '../Services/authgaurd';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
 
  {
    path: '',component: StudentPage,canActivate:[authGuard,roleGuard('student')],
    children: [
      { path: '', component: StudentdashboardComponent },
      { path: 'exam', component: DisplayExams },
      // route to actually start the exam (ExamPage expects route param :name)
      { path: 'exam/:name', component: ExamPage },
      { path: 'exam/:name/result', component: ResultComponent },
      { path: 'analytics', component: AnalyticsStudentPage },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}