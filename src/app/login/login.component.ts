import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: {type: string, username: string, password: string, remmberMe: boolean}
  constructor() { }

  ngOnInit() {
  }

}
