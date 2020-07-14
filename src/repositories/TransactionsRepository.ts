import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {}

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transcation = new Transaction({ title, value, type });

    this.transactions.push(transcation);

    return transcation;
  }
}

export default TransactionsRepository;
