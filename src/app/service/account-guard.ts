import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { AccountService } from './account.service';

@Injectable()
export class AccountGuard implements CanActivate {
    constructor(private accountSerivce: AccountService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isAuth = this.accountSerivce.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}