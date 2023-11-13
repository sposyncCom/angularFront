import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { P2pLoginComponent } from './p2p-login/p2p-login.component';
import { P2pCallComponent } from './p2p-login/p2p-call/p2p-call.component';
import { P2pLabComponent } from './p2p-login/p2p-lab/p2p-lab.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'; 
import { LoginMainComponent } from './login-main/login-main.component';
import { MainIndexComponent } from './login-main/main-index/main-index.component';
import { EventRegisterComponent } from './login-main/main-index/event-register/event-register.component';
import { EventHostComponent } from './login-main/main-index/event-host/event-host.component';
import { EventSelectComponent } from './login-main/main-index/event-select/event-select.component';
import { EventJoinComponent } from './login-main/main-index/event-select/event-join/event-join.component';
import { IndexIndexComponent } from './index-index/index-index.component'; 
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  
  { path: '', component: IndexIndexComponent, pathMatch: 'full' },
  { path: 'navindex', component: NavIndexComponent },
  { path: 'navmain', component: NavMainComponent },
  { path: 'login-main', component: LoginMainComponent},
  { path: 'main-index', component: MainIndexComponent , canActivate: [AuthGuard] },
  { path: 'event-host', component: EventHostComponent , canActivate: [AuthGuard] },
  { path: 'event-register', component: EventRegisterComponent, canActivate: [AuthGuard]  },
  { path: 'event-registerKwargs', component: EventRegisterComponent, canActivate: [AuthGuard]  },
  { path: 'event-select', component: EventSelectComponent , canActivate: [AuthGuard] },
  { path: 'event-join/:callee/:roomId/:pwdCallO/:pwdCallOIV/:pwdCallT/:pwdCallTIV/:statTime/:statNote', component: EventJoinComponent , canActivate: [AuthGuard] },		
  { path: 'p2p-login', component: P2pLoginComponent },
  { path: 'p2p-call', component: P2pCallComponent , canActivate: [AuthGuard]},
  { path: 'p2p-lab', component: P2pLabComponent , canActivate: [AuthGuard]},
  { path: 'signUp', component: SignUpComponent },
  { path: 'setProfile', component: SetProfileComponent , canActivate: [AuthGuard] },
  { path: 'resetPassword', component: ResetPasswordComponent , canActivate: [AuthGuard] },
  { path: 'logOut', redirectTo: '', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
