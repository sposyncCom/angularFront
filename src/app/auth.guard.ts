import { Injectable } from '@angular/core';
import { LoginMainComponent } from './login-main/login-main.component';
import { ApiDataService } from './services/api-data.service'; 
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
 

  export class AuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      //private authService: LoginMainComponent),
      private commonAuth : ApiDataService ) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
  
      if (this.commonAuth.is_authenticated) {
        return true;
      } else {
        //this.authService.redirecturl = url;
        this.router.navigate(['']);
        return false;
      }
    }
  
  }