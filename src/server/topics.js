
import { post, get, del, put } from '../utils/require'

export const listByPageAPI = (params) => get('/topics', params)
export const listByIdAPI = (params) => get('/topic/' + params)
export const GetUserByName = (params) => get('/user/' + params)