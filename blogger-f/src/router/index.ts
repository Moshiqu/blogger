//引入路由对象
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name:'Login',
        component: () => import('../pages/Login/index.vue')
    }, {
        path: '/register',
        name:'Register',
        component: () => import('../pages/Register/index.vue')
    }]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//导出router
export default router