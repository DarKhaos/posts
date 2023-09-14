import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canActivate = (authenticate: boolean, authService = inject(AuthService), router = inject(Router)) => {
  const isAuthenticated = authService.isAuthenticated();
  let path: string | null = null;
  if (authenticate && !isAuthenticated) {
    path = '';
  }
  if (!authenticate && isAuthenticated) {
    path = '/home';
  }
  if (path !== null) {
    return router.parseUrl(path);
  }
  return true;
};
