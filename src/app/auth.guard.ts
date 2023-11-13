import { Injectable } from '@angular/core';
import { ApiDataService } from './services/api-data.service'; 
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 
  export class AuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      private commonAuth : ApiDataService ) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
  
      if (this.commonAuth.is_authenticated) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }
  
  }
