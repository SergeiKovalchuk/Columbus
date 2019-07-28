import { TransactionQuery } from './transaction-query.model';
import { TransactionQueryService } from './transaction-query.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year';

@Component({
  selector: 'app-transaction-query',
  templateUrl: './transaction-query.component.html',
  styleUrls: ['./transaction-query.component.css']
})
export class TransactionQueryComponent implements OnInit, OnDestroy {
  // @ViewChild('f', { static: false }) queryForm: NgForm;
  queryForm: FormGroup;
  today = new Date();
  yesterday = new Date();

  constructor(private transactionQueryApplication: TransactionQueryService) { }
  generalApplications = [];
  selectorText = new TransactionQuery('*', '*', '*');

  providers: TransactionQuery[] = [];
  consumers: TransactionQuery[] = [];

  providersServices: TransactionQuery[] = [];
  providersOperations: TransactionQuery[] = [];

  consumersServices: TransactionQuery[] = [];
  consumersOperations: TransactionQuery[] = [];

  ngOnInit() {
    this.yesterday.setDate(this.today.getDate() - 1 );
    // init form
    this.queryForm = new FormGroup({
      generalFG: new FormGroup({
        generalApplication: new FormControl('*'),
        fromDate: new FormControl(this.yesterday),
        toDate: new FormControl(this.today)
      })
      ,
      providerFG: new FormGroup({
        providerApplication: new FormControl('*'),
        providerService: new FormControl('*'),
        providerOperation: new FormControl('*')
      }),
      consumerFG: new FormGroup({
        consumerApplication: new FormControl('*'),
        consumerService: new FormControl('*'),
        consumerOperation: new FormControl('*')
      })
    });

    this.transactionQueryApplication.getProviders().subscribe((providers: TransactionQuery[]) => {
      this.providers = providers; // Observable completes so no need to unsubscribe
      providers.forEach((elem: TransactionQuery) => {
        if ( this.generalApplications.indexOf(elem.Application) ) {
          this.generalApplications.push(elem.Application);
        }
      });
    });

    this.transactionQueryApplication.getConsumers().subscribe((consumers: TransactionQuery[]) => {
      this.consumers = consumers; // Observable completes so no need to unsubscribe
      consumers.forEach((elem: TransactionQuery) => {
        if ( this.generalApplications.indexOf(elem.Application) ) {
          this.generalApplications.push(elem.Application);
        }
      });
    });

  }

  onSubmit(form: NgForm) {
    console.log(this.queryForm.value);
    console.log(this.queryForm);
  }

  onReset() {
    // reset all fields to selector text - must be a better way (reset blanks them out);
    this.queryForm.controls.generalApplicationFG.setValue(this.selectorText.Application, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerService.setValue(this.selectorText.Service, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerApplication.setValue(this.selectorText.Service, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerOperation.setValue(this.selectorText.Operation, {onlySelf: true});

    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerService.setValue(this.selectorText.Service, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerApplication.setValue(this.selectorText.Operation, {onlySelf: true});
  }

  onProvidersApplicationChange(data: string) {
    this.providersServices = this.providers.filter(prov => prov.Application === data);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerService.setValue(this.selectorText.Service, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
    this.providersOperations = this.providersServices.slice();
  }
  onProvidersServiceChange(data: string) {
    this.providersOperations = this.providersServices.filter(prov => prov.Service === data);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.providerFG['controls'].providerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
  }
  onConsumersApplicationChange(data: string) {
    this.consumersServices = this.consumers.filter(cons => cons.Application === data);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerService.setValue(this.selectorText.Service, {onlySelf: true});
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
    this.consumersOperations = this.consumersServices.slice();
  }
  onConsumersServiceChange(data: string) {
    this.consumersOperations = this.consumers.filter(cons => cons.Service === data);
    // reset sub-selects
    // tslint:disable-next-line:no-string-literal
    this.queryForm.controls.consumerFG['controls'].consumerOperation.setValue(this.selectorText.Operation, {onlySelf: true});
  }
  ngOnDestroy(): void {
  }
}
