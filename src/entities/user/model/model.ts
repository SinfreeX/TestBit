import {HeadCell} from "../../../shared/ui";


export type UserTableRowModel = {
  email: string
  name: string
  role: string
  subscribe: string
  tokens: string
}

export type PlanModel = {
  id: string
  type: string
  price: number
  currency: string
  tokens: number
}

export type SubscriptionModel = {
  id: string
  plan_id: string
  user_id: string
  tokens: number
  additional_tokens: number
  created_at: string
  plan: PlanModel
}

export type UserModel = {
  id: string
  email: string
  tg_id: string | null
  name: string
  password: string | null
  avatar: string | null
  created_at: string
  role: string
  subscription: SubscriptionModel
}

export const userTableHeadCells: HeadCell<keyof UserTableRowModel | 'actions'>[] = [
  {accessorKey: 'email', label: 'Email', isSort: true},
  {accessorKey: 'name', label: 'Имя', isSort: true},
  {accessorKey: 'role', label: 'Роль', isSort: true},
  {accessorKey: 'subscribe', label: 'Подписка', isSort: true},
  {accessorKey: 'tokens', label: 'Токены', isSort: true, sort: 'desc'},
  {accessorKey: 'actions', label: 'Действия', isSort: false}
]
