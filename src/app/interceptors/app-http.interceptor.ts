import {HttpInterceptorFn} from '@angular/common/http';
import {LoginService} from '../services/Login/login.service';
import {inject} from '@angular/core';

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
    return next(logReq);
  }
  return next(req);
};
