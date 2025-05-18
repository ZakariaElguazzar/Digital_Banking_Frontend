import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from '../../services/Login/login.service';
import {inject} from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const logService = inject(LoginService);
  const router = inject(Router);
  if (logService.isAutenticated){
    return true
  }
  router.navigateByUrl('/login').then(success => {
    if (!success) {
      console.error("Navigation to /login failed!");
    }
  });
  return false;
};
