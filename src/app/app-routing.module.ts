import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [

  {
    path: 'userRegister',
    component: UserRegisterComponent,
    data: { title: 'User Register' }
  },{
    path: 'userLogin',
    component: UserLoginComponent,
    data: { title: 'User Login' }
  }, {
    path: 'userList',
    component: UserListComponent,
    data: { title: 'User List' }
  },
  {
    path: '',
    redirectTo: '/userRegister',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
