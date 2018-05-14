import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    title: Title,
    private router: Router
  ) {
    title.setTitle('Login Angular 5');
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  ngOnInit() {
  }
  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.router.navigate(['/user/create']);
  }

  redirectUserPage() {
    this.router.navigate(['/user/create']);
  }

}
