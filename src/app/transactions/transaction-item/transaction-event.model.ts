export class TransactionEvent {
    public status: string;
    public timestamp: string;
    public source: string;
    public message: string;

    constructor(status: string, timestamp: string, source: string, message: string) {
      this.status = status;
      this.timestamp = timestamp;
      this.source = source;
      this.message = message;
    }
  }
