import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  loginForm = this.formBuilder.group({
    email: ['', {
      validators: [Validators.email, Validators.required],
      updateOn: 'change',
    }],
    password: ['', {
      validators: [Validators.required],
      updateOn: 'change',
    }],
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

  onSubmit() {
    const { value } = this.loginForm.controls['email'];
    if (this.authService.validateEmail(value)) {
      this.authService.setAuthenticated();
      this.router.navigateByUrl('/home');
    }
  }
}
