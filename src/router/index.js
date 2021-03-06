import About from '../Component/About'
import Api from '../Component/Api'
import Getstart from '../Component/Getstart'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Register from '../Component/Register'
export const indexRouters = [
    {
        path: '/',
        component: Home,
        label: '首页',
        exact: 'exact'
    },
    {
        path: '/getstart',
        component: Getstart,
        label: '新手入门',
    }, {
        path: '/api',
        component: Api,
        label: 'API',
    }, {
        path: '/about',
        component: About,
        label: '关于',
    }, {
        path: '/register',
        component: Register,
        label: '注册',
    }, {
        path: '/login',
        component: Login,
        label: '登录',
    },
]
