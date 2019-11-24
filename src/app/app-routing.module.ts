import { UserinfoComponent } from './component/user/userinfo/userinfo.component';
import { TopicDetailComponent } from './component/topic-detail/topic-detail.component';
import { TopicComponent } from './component/topic/topic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'topics', component: TopicComponent},
  { path:'topicdetail', component: TopicDetailComponent},
  { path:'userinfo', component: UserinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
