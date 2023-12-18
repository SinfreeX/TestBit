import {TransactionModel, TransactionTableRowModel} from "../../model/model";
import {formatDate} from "../../../../shared/utils/formatDate";
import {priceSlicer} from "../../../../shared/utils/priceSlicer";

export const TransactionMapper = (transactions: TransactionModel[]): TransactionTableRowModel[] =>
  transactions.map(transaction => ({
    id: transaction.id,
    sum: `${priceSlicer(transaction.amount)} ${transaction.currency}`,
    type: transaction.type === 'REPLENISH' ? 'Списание' : 'Пополнение',
    date: formatDate(new Date(transaction.created_at))
  }))