import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccloginComponent } from './acclogin/acclogin.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QuestionsAdminComponent } from './questions-admin/questions-admin.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { TestingComponent } from './testing/testing.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VerifyOtpComponent } from './verifyotp/verifyotp.component';

const routes: Routes = [
  { path: 'login', component: AccloginComponent },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'scenarios',
    component: ScenariosComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,
  },
  {
    path: 'questions-admin',
    component: QuestionsAdminComponent,
  },
  {
    path: 'testing',
    component: TestingComponent,
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
  },
  {
    path: 'acclogin',
    component: AccloginComponent,
  },
  {
    path: 'verifyOtp',
    component: VerifyOtpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
