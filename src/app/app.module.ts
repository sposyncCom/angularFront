import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { NavIndexComponent } from './nav-index/nav-index.component';
import { NavMainComponent } from './nav-main/nav-main.component';

import { ApiDataService } from './services/api-data.service';

import { LoginMainComponent } from './login-main/login-main.component';

import { MainIndexComponent } from './login-main/main-index/main-index.component';
import { EventRegisterComponent } from './login-main/main-index/event-register/event-register.component';
import { EventHostComponent } from './login-main/main-index/event-host/event-host.component';
import { EventSelectComponent } from './login-main/main-index/event-select/event-select.component';
import { EventJoinComponent } from './login-main/main-index/event-select/event-join/event-join.component';

import { P2pLoginComponent } from './p2p-login/p2p-login.component';
import { P2pCallComponent } from './p2p-login/p2p-call/p2p-call.component';
import { P2pLabComponent } from './p2p-login/p2p-lab/p2p-lab.component';


import { SignUpComponent } from './sign-up/sign-up.component';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { IndexIndexComponent } from './index-index/index-index.component';
import { FooterComponent } from './footer/footer.component'; 
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    NavIndexComponent,
    P2pLoginComponent,

    LoginMainComponent,

    MainIndexComponent,
    EventRegisterComponent,
    EventHostComponent,
    EventSelectComponent,
    EventJoinComponent,

    P2pCallComponent,
    P2pLabComponent,
    NavMainComponent,

    SignUpComponent,
    SetProfileComponent,
    ResetPasswordComponent,
    IndexIndexComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule, ReactiveFormsModule,
    HttpClientModule,    
    NgxWebstorageModule.forRoot(),
    
  ],
  providers: [ ApiDataService, LoginMainComponent,{provide: LocationStrategy, useClass: HashLocationStrategy} ],

  bootstrap: [AppComponent]
})

export class AppModule { }
