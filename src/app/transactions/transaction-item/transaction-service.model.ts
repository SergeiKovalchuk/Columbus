export class TransactionService {
    public provider: string;
    public consumer: string;
    public objKey: string;
    public status: string;
    public timestamp: string;

    constructor(provider: string, consumer: string, objKey: string, status: string, timestamp: string) {
      this.provider = provider;
      this.consumer = consumer;
      this.objKey = objKey;
      this.status = status;
      this.timestamp = timestamp;
    }
  }
