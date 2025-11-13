import { Routes } from '@angular/router';
import { LandingPage } from './landing-page-components/landing-page/landing-page';
import { LoginComponent } from './login-components/login-component/login-component';
import { RegisterComponent } from './register-components/register-component/register-component';
import { AdminDashboardPage } from './admin-dashboard-components/admin-dashboard-page/admin-dashboard-page';

import { AnalyticsStudentPage } from './analytics-student-component/analytics-student-page/analytics-student-page';
import { AdminDashboard } from './admin-dashboard-components/admin-dashboard/admin-dashboard';
import { QuestionsDisplay } from './questionbank-components/questions-display/questions-display';
import { ExamPage } from './exams-dashboard-components/exam-page/exam-page';
import { DisplayExams } from './exams-dashboard-components/display-exams/display-exams';
import { AnalyticsAdmindashboard } from './analytics-admin-components/analytics-admindashboard/analytics-admindashboard';
import { StudentdashboardComponent } from './Studentdashboard-component/Studentdashboard-component';
import { ResultComponent } from './exams-dashboard-components/result-component/result-component';
import { ExamSubjects } from './exams-admin-components/exam-subjects/exam-subjects';
import { StudentPage } from './Studentdashboard-component/student-page/student-page';
import { authGuard, roleGuard } from './Services/authgaurd';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'admin-dashboard', canActivate:[authGuard,roleGuard('admin')],
    component: AdminDashboardPage,
    children: [
      { path: '', component: AdminDashboard },
      { path: 'questionbank', component: QuestionsDisplay },
      { path: 'exam', component: ExamSubjects },
      { path: 'analytics', component: AnalyticsAdmindashboard },
    ],
  },
  {
    path: 'student-dashboard',canActivate:[authGuard,roleGuard('student')],
    component: StudentPage,
    children: [
      { path: '', component: StudentdashboardComponent },
      { path: 'exam', component: DisplayExams },
      { path: 'exam/:name', component: ExamPage },
      { path: 'results', component: ResultComponent },
      { path: 'analytics', component: AnalyticsStudentPage },
    ],
  },
];
// export const routes: Routes = [
//   { path: '', component: LandingPage },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: RegisterComponent },
//   {
//     path: 'admin-dashboard',
//     loadChildren:()=>
//       import ('../app/adminRoutes/adminDashboardRoutes').then(i =>i.AdminRoutingModule),
//     canActivate:[authGuard,roleGuard('admin')],
//   },
//   {
//     path: 'student-dashboard',
//     loadChildren:()=>
//       import('../app/adminRoutes/userDashboardRoutes').then(i=>i.UserRoutingModule),
//     canActivate:[authGuard,roleGuard('student')],
    
//   },
// ];