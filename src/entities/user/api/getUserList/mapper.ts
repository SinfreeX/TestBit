import {UserModel, UserTableRowModel} from "../../model/model";

export const userListMapper = (users: UserModel[]): UserTableRowModel[] =>
  users.map(({id, email, name, role, ...rest}) => ({
    id,
    email,
    name,
    role,
    tokens: `${rest.subscription.tokens} TKN`,
    subscribe: rest.subscription.plan.type
  }))