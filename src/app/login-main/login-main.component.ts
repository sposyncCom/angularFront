import { Component, OnInit, Injectable } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';   
import { Router } from '@angular/router';

declare const preMap:any;

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']

})

@Injectable({
  providedIn: 'root'
})

export class LoginMainComponent implements OnInit {

    userLogin = {
      username: '',
      password: '',
    };

    ivArg:string;

    mapKey :any;
    is_authenticated : boolean = false;
    tokenAPI: string ='';
    token_expires: Date = new Date(0) ;
  
    private pmarkzonea :any ;
    private pzonea : any;                          
    private piza : any;
    errors: any = [];


    constructor(private infoWinApi : ApiDataService,  private router : Router, ) { 
    }


    ngOnInit(): void {
      
        this.infoWinApi.loginGet().subscribe({

              next: (response:any) => { 
      
                this.pmarkzonea = response['markzone'];
                this.pzonea = response['zone'];                          
                this.piza = response['iz'];
                this.mapKey = response['mapKey'];     
                this.ivArg = response['iv'];   
                preMap(this.pzonea,this.pmarkzonea,this.piza,this.mapKey,this.ivArg);
              },
              error: (e) =>  console.error('Error LoginGet!', e),
          });        
    }


    login(){

        const userData = {
          username : this.userLogin.username,
          password : this.userLogin.password,
        };

        this.infoWinApi.login(userData).subscribe({

          next: (response:any) => {         
                this.updateData(response['access']);
                this.infoWinApi.is_authenticated = true;
                this.infoWinApi.mapKey = this.mapKey;
                this.infoWinApi.ivArg = this.ivArg;
                this.infoWinApi.obuser = this.userLogin.username;
                localStorage.setItem("obuser", this.userLogin.username);
                this.router.navigateByUrl('/main-index');                           
          },

          error: (e) =>  {console.error('Error Login!', e);
                          this.errors = e['error'];
                        },
          });
    }


    private updateData(tokenVar:any) {
  
        this.infoWinApi.token = tokenVar;
        localStorage.setItem("SavedToken", 'Bearer ' + tokenVar);
        localStorage.setItem("RawToken", tokenVar);
        this.errors = [];
        const token_parts = tokenVar.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);     
    }
  

    refreshToken() {

        const thisToken = {
          token :this.infoWinApi.token,
        };

        this.infoWinApi.refreshToken(thisToken).subscribe({
          next: (response:any) => this.updateData(response['refresh']),          
          error: (e) =>  {console.error('Error RefreshToken!', e);
                          this.errors = e['error'];
                          },
          });
    }
 
}
