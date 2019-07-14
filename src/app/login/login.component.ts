import { LoginCredentials } from './loginCredentials.model';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  private loginCredentials: LoginCredentials;
  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.loginForm.value);
    console.log(form.value);
    this.loginCredentials = new LoginCredentials(form.value.user, form.value.pass);
    this.auth.setLoginCredentials(this.loginCredentials);
    // check if credentials are correct - passport.js?
    this.auth.Authenticate().then((authenticated: boolean) => {
      if ( authenticated ) {
      this.auth.login();
      this.router.navigate(['Transactions']);
      } else {
        // popup - could use bootstrap modal , or redirect to error
        window.alert('Invalid Login Credentials');
      }
    });
  }

}
