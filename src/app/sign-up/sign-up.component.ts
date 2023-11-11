import { Component, OnInit, Injectable, } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';   
import { FormGroup,} from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SignUpComponent implements OnInit {


  userLogin = {
    username: '',
    password1: '',
    password2: '',
  };

  mapKey :any;
  is_authenticated : boolean = false;
  tokenAPI: string ='';
  token_expires: Date = new Date(0) ;
  errors: any = [];
  textAreaForm: FormGroup;

  constructor( private loginApi : ApiDataService,  private router : Router,) {   
  }


  ngOnInit(): void {  
  }


  signup(){

    const  userRegister = {

      "username": this.userLogin.username,
      "password1":this.userLogin.password1,
      "password2":this.userLogin.password2,
    };
    
    this.loginApi.signUpPost(userRegister).subscribe({
      
          next: (response:any) => { 
      
            this.is_authenticated = true;       
            this.router.navigateByUrl('/login-main');      
          },
          error: (e) =>  console.error('Error SIGN UP!', e),
      });
  }

}
