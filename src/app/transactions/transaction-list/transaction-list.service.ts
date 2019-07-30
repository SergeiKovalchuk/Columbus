import { Injectable } from '@angular/core';

@Injectable()
export class TransactionListService {
    TranList = [
        {
            TranID: 21,
            Provider: 'Service1',
            Consumer: 'Service2',
            DateTime: '07/07/2018 20:28:58',
            Events: [
                {
                    EventID: 200,
                    Description: 'Did some stuff'
                },
                {
                    EventID: 201,
                    Description: 'Did some stuff'
                }
            ],
            SubServices: [
                {
                    TranID: 28,
                    Provider: 'PubSub',
                    Consumer: 'Some System',
                    DateTime: '07/07/2018 20:28:58',
                    Events: [
                        {
                            EventID: 212,
                            Description: 'Did some stuff'
                        },
                        {   EventID: 211,
                            Description: 'Did some stuff'
                        }
                    ],
                    SubServices: []
                },
                {
                    TranID: 22,
                    Provider: 'PubSub',
                    Consumer: 'Some System',
                    DateTime: '07/07/2018 20:28:58',
                    Events: [
                        {
                            EventID: 204,
                            Description: 'Did some stuff'
                        },
                        {   EventID: 205,
                            Description: 'Did some stuff'
                        }
                    ],
                    SubServices: [
                        {
                            TranID: 23,
                            Provider: 'PubSub',
                            Consumer: 'Some System',
                            DateTime: '07/07/2018 20:28:58',
                            Events: [
                                {
                                    EventID: 207,
                                    Description: 'Did some stuff'
                                },
                                {   EventID: 208,
                                    Description: 'Did some stuff'
                                }
                            ],
                            SubServices: []
                        }
                    ]
                }
            ]
        },
        {
            TranID: 31,
            Provider: 'Service3',
            Consumer: 'Service4',
            DateTime: '07/07/2018 20:28:58'
        },
        {
            TranID: 41,
            Provider: 'Service3',
            Consumer: 'Service5',
            DateTime: '07/07/2018 20:28:58'
        }
    ];

    getTranList() {
        return this.TranList.slice();
    }
}
