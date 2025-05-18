import {HttpInterceptorFn} from '@angular/common/http';
import {LoginService} from '../services/Login/login.service';
import {inject} from '@angular/core';
import {catchError, throwError} from "rxjs";

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const logService = inject(LoginService);
  const token = logService.accessToken
  if (!req.url.includes(("/auth/login"))){
    console.log(token)
    const logReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(logReq).pipe(
        catchError(err => {
          if (err.status == 401) {
            logService.logout();
            return throwError(() => new Error(err.message));
          }
        })
    );
  }
  return next(req);
};
