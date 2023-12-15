import {HeadCell} from "../../../shared/ui/SortableTable.tsx/SortableTable";


export type UserTableRowModel = {
  email: string
  name: string
  role: string
  subscribe: string
  tokens: string
}

export const userTableHeadCells: HeadCell<keyof UserTableRowModel | 'actions'>[] = [
  {accessorKey: 'email', label: 'Email', isSort: true},
  {accessorKey: 'name', label: 'Имя', isSort: true},
  {accessorKey: 'role', label: 'Роль', isSort: true},
  {accessorKey: 'subscribe', label: 'Подписка', isSort: true},
  {accessorKey: 'tokens', label: 'Токены', isSort: true, sort: 'desc'},
  {accessorKey: 'actions', label: 'Действия', isSort: false}
]
