// import { Routes } from '@angular/router';

// import { AdminDashboardPage } from '../admin-dashboard-components/admin-dashboard-page/admin-dashboard-page';

// import { AdminDashboard } from '../admin-dashboard-components/admin-dashboard/admin-dashboard';
// import { QuestionsDisplay } from '../questionbank-components/questions-display/questions-display';
// import { AnalyticsAdmindashboard } from '../analytics-admin-components/analytics-admindashboard/analytics-admindashboard';


// import { ExamSubjects } from '../exams-admin-components/exam-subjects/exam-subjects';
// import { authGuard, roleGuard } from '../Services/authgaurd';
// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// export const routes: Routes = [

//   {
//     path: '',component: AdminDashboardPage,canActivate:[authGuard,roleGuard('admin')],
//     children: [
//       { path: '', component: AdminDashboard },
//       { path: 'questionbank', component: QuestionsDisplay },
//       { path: 'exam', component: ExamSubjects },
//       { path: 'analytics', component: AnalyticsAdmindashboard },
//     ],
//   }
// ];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule {}