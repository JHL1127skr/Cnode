import axios from 'axios'

const serverURL = 'https://cnodejs.org/api/v1'

const instance = axios.create({
    baseURL: serverURL,
    timeout: 5000,
})
// !全局请求拦截 
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.error(error);
    }
);
// !全局响应拦截
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        // * 如果服务器状态码返回401 表示未授权 返回登录页
        return Promise.reject(error);
    }
);


export const get = (url, params) => instance.get(url, { params })
export const post = (url, data) => instance.post(url, data)
export const put = (url, data) => instance.put(url, data)
export const del = (url) => instance.delete(url)

export default instance