import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./login/register/register.component";
import {LoginComponent} from "./login/login/login.component";

// import {RecruitmentPostListComponent} from "./recruitment-post-list/recruitment-post-list.component";
// import {CreateRecruitmentPostComponent} from "./create-recruitment-post/create-recruitment-post.component";
// import {DetailRecruitmentPostComponent} from "./detail-recruitment-post/detail-recruitment-post.component";
// =======
import {EmploymentDetailComponent} from "./Employment/employment-detail/employment-detail.component";
import {FormDetailComponent} from "./Employment/form-detail/form-detail.component";
import {FormUserProfileComponent} from "./UserProfile/form-user-profile/form-user-profile.component";
import {UserProfileComponent} from "./UserProfile/user-profile/user-profile.component";
import {EditUserProfileComponent} from "./UserProfile/edit-user-profile/edit-user-profile.component";
import {ListEmploymentUnauthenticatedComponent} from "./Admin/list-employment-unauthenticated/list-employment-unauthenticated.component";
import {EditEmploymentComponent} from "./Employment/edit-employment/edit-employment.component";
import {ListEmploymentAuthenticatedComponent} from "./Admin/list-employment-authenticated/list-employment-authenticated.component";
import {CreateRecruitmentPostComponent} from "./RecruitmentPost/create-recruitment-post/create-recruitment-post.component";
import {RecruitmentPostListComponent} from "./RecruitmentPost/recruitment-post-list/recruitment-post-list.component";
import {DetailRecruimentPostComponent} from "./RecruitmentPost/detail-recruiment-post/detail-recruiment-post.component";
import {AllListPostComponent} from "./RecruitmentPost/all-list-post/all-list-post.component";
import {JobApplyComponent} from "./Employment/job-apply/job-apply.component";
import {DetailProfileComponent} from "./Employment/detail-profile/detail-profile.component";
import {DetailRecruitmentPostComponent} from "./detail-recruitment-post/detail-recruitment-post.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ListUserComponent} from "./Admin/list-user/list-user.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'recruitmentPostList', component: RecruitmentPostListComponent},
  {path:'createRecruitmentPost', component: CreateRecruitmentPostComponent},
  {path:'detail-recruitmentPost/:id', component: DetailRecruitmentPostComponent},
  {path:'formEmployment',component: FormDetailComponent},
  {path:'createUserProfile',component: FormUserProfileComponent},
  {path:'UserProfile',component: UserProfileComponent},
  {path: 'UserProfile/Edit/:id',component: EditUserProfileComponent},
  {path: 'Employment/Edit/:id',component: EditEmploymentComponent},
  {path: "listEmploymentUnauthenticated", component :ListEmploymentUnauthenticatedComponent},
  {path: "EmploymentDetail", component : EmploymentDetailComponent},
  {path: "updateEmployment",component: EditEmploymentComponent},
  {path: "EmploymentAuthentication", component : ListEmploymentAuthenticatedComponent},
  {path: "CreatePost",component : CreateRecruitmentPostComponent},
  {path:"PostOfEmployment", component : RecruitmentPostListComponent},
  {path:'detail-recruitmentPost/:id', component: DetailRecruimentPostComponent},
  {path:'AllPost', component: AllListPostComponent},
  {path:'UserProfile/List/:id', component :JobApplyComponent},
  {path:'detail-userProfile/:id',component: DetailProfileComponent},
  {path:'navbar',component :NavbarComponent},
  {path:'allUser',component : ListUserComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
