import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsseteditComponent } from './assetedit/assetedit.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'assets', component: AssetsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'assets/add', component: AsseteditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'assets/edit/:id', component: AsseteditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
