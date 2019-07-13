import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  sideShown = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onToggleSide() {
    console.log(this.sideShown);
    this.sideShown = !this.sideShown;
  }
  isActive() {
    return this.sideShown;
  }

}
