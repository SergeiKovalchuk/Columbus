import { TransactionListService } from './transaction-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  list = [];
  constructor(private transactionListService: TransactionListService) { }

  ngOnInit() {
    this.list = this.transactionListService.getTranList();
    console.log(this.list);
  }

}
