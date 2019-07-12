import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.loginForm.value);
    console.log(form.value);
  }

}
