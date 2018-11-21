import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { SessionServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppSessionService } from '../session/app-session.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private session: AppSessionService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.session.authToken;
        console.log('拦截器', authToken)
        const authReq = req.clone({ setHeaders: { Authorization: authToken } });
        return next.handle(authReq);
    }
}