import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  sideShown = true;
  collapse = '>';

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onToggleSide() {
    this.sideShown = !this.sideShown;
    if (this.collapse === '<') {
      this.collapse = '>';
    } else {
      this.collapse = '<';
    }
  }
  isActive() {
    return this.sideShown;
  }

}
