
import { post, get, del, put } from '../utils/require'

export const listByPageAPI = (params) => get('/topics', params)