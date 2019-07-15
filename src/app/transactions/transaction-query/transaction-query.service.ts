import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TransactionQuery } from './transaction-query.model';

@Injectable()
export class TransactionQueryService {
    generalServices = ['Sergei', 'Eden', 'Liza'];
    providers = [
        new TransactionQuery('Service1', 'Operation1', 'Action1'),
        new TransactionQuery('Service2', 'Operation2', 'Action2'),
        new TransactionQuery('Service3', 'Operation3', 'Action3'),
    ];
    consumers = [
        new TransactionQuery('Service4', 'Operation4', 'Action4'),
        new TransactionQuery('Service5', 'Operation5', 'Action5'),
        new TransactionQuery('Service6', 'Operation6', 'Action6'),
    ];

    getGeneralServices() {
        const generalServiocesObservable = Observable.create(observer => {
            // simulate backend query
            setInterval(() => {
                observer.next(this.generalServices);
                observer.complete();
            }, 700);
        });
        return generalServiocesObservable;
    }

    getProviders() {
        const providerObservable = Observable.create(observer => {
            // simulate backend query
            setInterval(() => {
                observer.next(this.providers);
                observer.complete();
            }, 700);
        });
        return providerObservable;
    }

    getConsumers() {
        const consumersObservable = Observable.create(observer => {
            // simulate backend query
            setInterval(() => {
                observer.next(this.consumers);
                observer.complete();
            }, 700);
        });
        return consumersObservable;
    }
}
