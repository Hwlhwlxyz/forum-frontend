import { TabUserComponent } from './component/user/tab-user/tab-user.component';
import { UserinfoComponent } from './component/user/userinfo/userinfo.component';
import { TopicDetailComponent } from './component/topic-detail/topic-detail.component';
import { TopicComponent } from './component/topic/topic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AccountGuard } from './service/account-guard';

const routes: Routes = [
  { path:'', component: TopicComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'topics', component: TopicComponent},
  { path:'topicdetail/:topicid', component: TopicDetailComponent},
  { path:'userinfo', component: TabUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AccountGuard]
})
export class AppRoutingModule { }
