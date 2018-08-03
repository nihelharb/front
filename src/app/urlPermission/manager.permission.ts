import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ManagerPermission implements CanActivate {
    currentUser;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


    if (localStorage.getItem('currentUser') && this.currentUser.role == "MANAGER") {
    
      return true;
    }

   
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}