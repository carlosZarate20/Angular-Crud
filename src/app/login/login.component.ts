import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
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
    /*title.setTitle('Login Angular 5');
    this.buildForm();*/
  }
  /*buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }*/

  ngOnInit() {
  }
  login(form: NgForm) {

    // tslint:disable-next-line:triple-equals
    if (form.value.email == 'admin@min.com' && form.value.password == 'admin123') {
        this.router.navigate(['dashboard']);
    } else {
      alert('Invalid credentials.');
    }
  }
  loginUser(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    // tslint:disable-next-line:triple-equals
    if (email == 'admin@ad.com' && password == 'admin123') {
      this.router.navigate(['dashboard']);

    } else {
      alert('Invalid credentials.');
    }
    /*const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.router.navigate(['/user']) ;*/
  }

}
