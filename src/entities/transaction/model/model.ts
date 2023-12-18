import {HeadCell} from "../../../shared/ui";
import {RenderSumCell} from "../ui/RenderSumCell";

export type TransactionTableRowModel = {
  type: 'Списание' | 'Пополнение',
  sum: string,
  date: string
}


export type TransactionModel = {
  id: string
  provider: string
  amount: number
  currency: string
  meta: unknown | null
  status: string
  type: string
  plan_id: unknown | null
  user_id: string
  referral_id: unknown | null
  created_at: string
  external_id: unknown | null
}

export const transactionTableHeadCells: HeadCell<keyof TransactionTableRowModel>[] = [
  {accessorKey: 'type', label: 'Тип'},
  {accessorKey: 'sum', label: 'Сумма', renderCell: RenderSumCell},
  {accessorKey: 'date', label: 'Дата', width: '130px'}
]