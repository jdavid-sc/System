import { CanActivate, CanLoad, Router} from '@angular/router';

import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SystemGuard implements CanActivate, CanLoad {

  constructor(private router: Router){}

  canActivate(): boolean | Observable<boolean> {
    // if (this.authService.sesionIniciada) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }

  canLoad(): boolean | Observable<boolean> {
    // if (this.authService.sesionIniciada) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true
  }

}

