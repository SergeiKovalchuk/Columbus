import { PrivService } from './priv.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PrivGuard implements CanActivate, CanActivateChild {
constructor(private privService: PrivService, private router: Router) {}

canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.privService.isAllowedView()
    .then(
        (authenticated: boolean) => {
        if (authenticated) {
            return true;
        } else {
            this.router.navigate(['/Error']);
        }
        }
    );
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
}
}
