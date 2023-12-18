import {UserModel} from "../../model/model";
import axios, {AxiosResponse} from "axios";

export type getUserListRequestParams = {
  page?: number
  search?: string
  orderBy?: 'tokens:asc' | 'tokens:desc'
}

export type getUserListResponse = {
  data: UserModel[]
  pages: number
}

export const getUserList = (params?: getUserListRequestParams): Promise<AxiosResponse<getUserListResponse>> =>
  axios.get('user/list', {params, baseURL: 'https://test.gefara.xyz/api/v1/'})