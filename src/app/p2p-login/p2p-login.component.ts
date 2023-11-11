import { Component, OnInit, Injectable, } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';   
import { Router } from '@angular/router';

declare const switchr: any;
declare const stpButton:any;
declare const dnButton:any;
declare const sttButton :any;


@Component({
  selector: 'app-p2p-login',
  templateUrl: './p2p-login.component.html',
  styleUrls: ['./p2p-login.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class P2pLoginComponent implements OnInit {

  userLogin = {
    username: '',
    password: '',
  };

  mapKey :any;
  is_authenticated : boolean = false;
  tokenAPI: string ='';
  token_expires: Date = new Date(0) ; 
  errors: any = [];

  constructor(private loginApi : ApiDataService,  private router : Router,) { 
  }

  ngOnInit(): void {
  }

  
  login() {

    const userData = {
        username : this.userLogin.username,
        password : this.userLogin.password,
    };

    this.loginApi.login(userData).subscribe({

      next: (response:any) => {         
            this.updateData(response['access']);
            this.loginApi.is_authenticated = true;
            this.loginApi.obuser = this.userLogin.username;
            localStorage.setItem("obuser", this.userLogin.username);
            this.router.navigateByUrl('/p2p-call');                           
      },
      error: (e) =>  {console.error('Error Login!', e);
                      this.errors = e['error'];
                    },
      });
  }

  private updateData(tokenVar:any) {
    this.loginApi.token = tokenVar;
    localStorage.setItem("SavedToken", 'Bearer ' + tokenVar);
    this.errors = [];
    const token_parts = tokenVar.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
  }
 

  start(){

    sttButton();  
  }

  stop(){

    stpButton();   
  }

  download(){

    dnButton();  
  }



  recording (){

    switchr();
  }

 
}
