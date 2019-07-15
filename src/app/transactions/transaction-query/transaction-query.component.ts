import { TransactionQuery } from './transaction-query.model';
import { TransactionQueryService } from './transaction-query.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction-query',
  templateUrl: './transaction-query.component.html',
  styleUrls: ['./transaction-query.component.css']
})
export class TransactionQueryComponent implements OnInit, OnDestroy {
  // @ViewChild('f', { static: false }) queryForm: NgForm;

  queryForm: FormGroup;

  constructor(private transactionQueryService: TransactionQueryService) { }
  generalServices = [];
  providers: TransactionQuery[];
  consumers: TransactionQuery[];

  ngOnInit() {
    this.queryForm = new FormGroup({
      generalService: new FormControl(''),
      providerService: new FormControl(''),
      providerOperation: new FormControl(''),
      providerAction: new FormControl(''),
      consumerService: new FormControl(''),
      consumerOperation: new FormControl(''),
      consumerAction: new FormControl('')
    });

    this.transactionQueryService.getGeneralServices().subscribe((generalServicesArr: any[]) => {
      this.generalServices = generalServicesArr; // Observable completes so no need to unsubscribe
    });

    this.transactionQueryService.getProviders().subscribe((providers: any[]) => {
      this.providers = providers; // Observable completes so no need to unsubscribe
    });

    this.transactionQueryService.getConsumers().subscribe((consumers: any[]) => {
      this.consumers = consumers; // Observable completes so no need to unsubscribe
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.queryForm.value);
  }

  ngOnDestroy(): void {
  }
}
