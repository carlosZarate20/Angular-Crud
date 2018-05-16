import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) {
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
    console.log(form.value);
    if (form.value.email === 'admin@admin.com' && form.value.password === 'admin123') {
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['/user']);
    } else {
      alert('Credenciales Invalidas.');
    }
  }
  /*loginUser(e) {
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
    this.router.navigate(['/user']) ;
  }*/

}
