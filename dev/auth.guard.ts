import { Injectable } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('id_token')!=='') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
