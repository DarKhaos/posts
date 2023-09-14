import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly STORAGE_NAME = 'username';

  readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.STORAGE_NAME);
  }

  setAuthenticated(): void {
    localStorage.setItem(this.STORAGE_NAME, 'name');
  }

  validateEmail(email: string | null): boolean {
    return !!(email && this.EMAIL_REGEX.test(email));
  }
}
