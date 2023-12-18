import {TransactionModel} from "../../model/model";
import axios, {AxiosResponse} from "axios";

export type getTransactionsByIdRequestParams = {
  id: string
}

export type getTransactionsByIdResponse = TransactionModel[]

export const getTransactionsById = ({id}: getTransactionsByIdRequestParams): Promise<AxiosResponse<getTransactionsByIdResponse>> =>
  axios.get(`user/${id}/transactions`, {baseURL: 'https://test.gefara.xyz/api/v1/'})