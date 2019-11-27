import {HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AccountService} from "./account.service";

@Injectable()
export class AccountInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.accountService.getToken();
        const request = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + token)
        });
        return next.handle(request);
    }
}