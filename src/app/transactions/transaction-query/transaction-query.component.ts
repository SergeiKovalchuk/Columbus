import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction-query',
  templateUrl: './transaction-query.component.html',
  styleUrls: ['./transaction-query.component.css']
})
export class TransactionQueryComponent implements OnInit {
  @ViewChild('f', { static: false }) queryForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.queryForm.value);
    console.log(form.value);
  }
}
