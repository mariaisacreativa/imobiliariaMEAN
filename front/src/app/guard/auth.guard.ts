import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private routerService: Router){}

  canActivate(): boolean {
    if(this.authService.isLogged()){
      return true;
    }else{
      this.routerService.navigate(['login']);
      return false;
    }
  }
  
}
