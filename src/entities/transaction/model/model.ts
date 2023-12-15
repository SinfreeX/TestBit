import {HeadCell} from "../../../shared/ui/SortableTable.tsx/SortableTable";
import {RenderSumCell} from "../ui/RenderSumCell";

export type TransactionTableRowModel = {
  type: 'Списание' | 'Пополнение',
  sum: string,
  date: Date
}

export const transactionTableHeadCells: HeadCell<keyof TransactionTableRowModel>[] = [
  {accessorKey: 'type', label: 'Тип'},
  {accessorKey: 'sum', label: 'Сумма', renderCell: RenderSumCell},
  {accessorKey: 'date', label: 'Дата', width: '130px'}
]