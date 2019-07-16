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
  selectorText = new TransactionQuery('Select a Service', 'Select an Operation', 'Select an Action');

  providers: TransactionQuery[] = [];
  consumers: TransactionQuery[] = [];

  providersOperations: TransactionQuery[] = [];
  providersActions: TransactionQuery[] = [];

  consumersOperations: TransactionQuery[] = [];
  consumersActions: TransactionQuery[] = [];

  ngOnInit() {
    // init form
    this.queryForm = new FormGroup({
      generalServiceFG: new FormControl(''),
      providerFG: new FormGroup( {providerService: new FormControl(''),
                                providerOperation: new FormControl(''),
                                providerAction: new FormControl('')}),
      consumerFG: new FormGroup(  {consumerService: new FormControl(''),
                                consumerOperation: new FormControl(''),
                                consumerAction: new FormControl('')})
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
    console.log(this.queryForm);
  }

  onProvidersServiceChange(data: TransactionQuery) {
    this.providersOperations = this.providers.filter(prov => prov.Service === data.Service);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerAction.setValue(this.selectorText.Action, {onlySelf: true});
  }
  onProvidersOperationChange(data: TransactionQuery) {
    this.providersActions = this.providersOperations.filter(prov => prov.Operation === data.Operation);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerAction.setValue(this.selectorText.Action, {onlySelf: true});
  }
  onConsumersServiceChange(data: TransactionQuery) {
    this.consumersOperations = this.consumers.filter(cons => cons.Service === data.Service);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerAction.setValue(this.selectorText.Action, {onlySelf: true});
  }
  onConsumersOperationChange(data: TransactionQuery) {
    this.consumersActions = this.consumers.filter(cons => cons.Operation === data.Operation);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerAction.setValue(this.selectorText.Action, {onlySelf: true});
  }
  ngOnDestroy(): void {
  }
}
