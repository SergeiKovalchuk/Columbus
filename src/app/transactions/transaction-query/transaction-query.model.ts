export class TransactionQuery {
    public Service: string;
    public Operation: string;
    public Action: string;

    constructor(Service: string, Operation: string, Action: string) {
      this.Service = Service;
      this.Operation = Operation;
      this.Action = Action;
    }
  }
