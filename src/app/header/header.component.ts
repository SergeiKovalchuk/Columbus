import { AuthService } from '../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    console.log('loggred out');
    this.auth.logout();
    this.router.navigate(['Login']);
  }

}
