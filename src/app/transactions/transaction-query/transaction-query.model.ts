export class TransactionQuery {
    public Application: string;
    public Service: string;
    public Operation: string;

    constructor(Application: string, Service: string, Operation: string) {
      this.Application = Application;
      this.Service = Service;
      this.Operation = Operation;
    }
  }
