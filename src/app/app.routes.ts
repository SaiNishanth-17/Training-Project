import { Routes } from '@angular/router';
import { LandingPage } from './landing-page-components/landing-page/landing-page';
import { LoginComponent } from './login-components/login-component/login-component';
import { RegisterComponent } from './register-components/register-component/register-component';
import { AdminDashboardPage } from './admin-dashboard-components/admin-dashboard-page/admin-dashboard-page';
// import { StudentDashboardPage } from './student-dashboard-component/student-dashboard-page/student-dashboard-page';
import { AnalyticsStudentPage } from './analytics-student-component/analytics-student-page/analytics-student-page';
import { AdminDashboard } from './admin-dashboard-components/admin-dashboard/admin-dashboard';
import { QuestionsDisplay } from './questionbank-components/questions-display/questions-display';
import { ExamPage } from './exams-dashboard-components/exam-page/exam-page';
import { DisplayTopic } from './exams-dashboard-components/display-topic/display-topic';
import { DisplayExams } from './exams-dashboard-components/display-exams/display-exams';
import { AnalyticsAdmindashboard } from './analytics-admin-components/analytics-admindashboard/analytics-admindashboard';
import { StudentdashboardComponent } from './Studentdashboard-component/Studentdashboard-component';
import { ResultComponent } from './exams-dashboard-components/result-component/result-component';
import { Topics } from './exams-admin-components/topics/topics';
import { StudentPage } from './Studentdashboard-component/student-page/student-page';
import { ExamSubtopicManagerComponent } from './exams-admin-components/exam-subtopic-manager/exam-subtopic-manager';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardPage,
    children: [
      { path: '', component: AdminDashboard },
      { path: 'questionbank', component: QuestionsDisplay },
      { path: 'exam', component:  Topics},
      { path: 'analytics', component: AnalyticsAdmindashboard },
      { path: 'manage-subtopics/:examName', component: ExamSubtopicManagerComponent }
    ]
  },
  { path: 'student-dashboard', component: StudentPage,
    children:[
  {path: '', component: StudentdashboardComponent},
  {path: 'exam', component: DisplayExams},
  // when user clicks an exam card, show the list of topics for that exam
  { path: 'exam/:name', component: DisplayTopic },
  // route to actually start the exam (ExamPage expects route param :name)
  { path: 'exam/:name/start', component: ExamPage },
  { path: 'exam/:name/result', component: ResultComponent },
      { path: 'analytics', component: AnalyticsStudentPage }
    ]
   },
];
