import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionQueryService } from './transaction-query/transaction-query.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [TransactionQueryService]
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
